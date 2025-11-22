import { onCall, HttpsError } from 'firebase-functions/v2/https';
import admin from 'firebase-admin';
import { CompanyTypes, createScraper } from 'israeli-bank-scrapers';
import CryptoJS from 'crypto-js';
import chromium from '@sparticuz/chromium';

// Initialize Firebase Admin
admin.initializeApp();
const db = admin.firestore();

// Encryption key - EN PRODUCTION, utilise Secret Manager de Google Cloud
// Pour l'instant, on le met ici mais TU DEVRAS le sécuriser
const ENCRYPTION_KEY = process.env.ENCRYPTION_KEY || 'YOUR_SECURE_KEY_HERE_CHANGE_THIS';

/**
 * Encrypts credentials before storing in Firestore
 */
function encryptCredentials(credentials) {
  const jsonString = JSON.stringify(credentials);
  const encrypted = CryptoJS.AES.encrypt(jsonString, ENCRYPTION_KEY).toString();
  return encrypted;
}

/**
 * Decrypts credentials from Firestore
 */
function decryptCredentials(encryptedData) {
  const decrypted = CryptoJS.AES.decrypt(encryptedData, ENCRYPTION_KEY);
  const jsonString = decrypted.toString(CryptoJS.enc.Utf8);
  return JSON.parse(jsonString);
}

/**
 * Cloud Function: Save Max credentials (encrypted)
 * Called from frontend to store user's Max credentials securely
 */
export const saveMaxCredentials = onCall(async (request) => {
  // Verify authentication
  if (!request.auth) {
    throw new HttpsError('unauthenticated', 'User must be authenticated');
  }

  const { username, password } = request.data;
  
  if (!username || !password) {
    throw new HttpsError('invalid-argument', 'Username and password are required');
  }

  try {
    // Encrypt credentials
    const encrypted = encryptCredentials({ username, password });
    
    // Save to Firestore
    await db.collection('users').doc(request.auth.uid).set({
      maxCredentials: {
        encrypted: encrypted,
        updatedAt: admin.firestore.FieldValue.serverTimestamp()
      }
    }, { merge: true });

    return { success: true, message: 'Credentials saved securely' };
  } catch (error) {
    console.error('Error saving credentials:', error);
    throw new HttpsError('internal', 'Failed to save credentials');
  }
});

/**
 * Cloud Function: Scrape Max transactions
 * Main function that scrapes Max and returns transactions
 */

function getMonthsAgo(monthsBack = 6) {
  const date = new Date();
  date.setMonth(date.getMonth() - monthsBack);
  date.setDate(1); // Premier jour du mois
  date.setHours(0, 0, 0, 0);
  return date;
}


export const scrapeMaxTransactions = onCall(
  { 
    timeoutSeconds: 540,
    memory: '2GiB'
  },
  async (request) => {
    if (!request.auth) {
      throw new HttpsError('unauthenticated', 'User must be authenticated');
    }

    const userId = request.auth.uid;
    const { startDate } = request.data;

    try {
      console.log(`Starting scrape for user ${userId}`);

      // Get encrypted credentials
      const userDoc = await db.collection('users').doc(userId).get();
      
      if (!userDoc.exists) {
        throw new HttpsError('not-found', 'User not found');
      }

      const userData = userDoc.data();
      
      if (!userData.maxCredentials || !userData.maxCredentials.encrypted) {
        throw new HttpsError('failed-precondition', 'Max credentials not set.');
      }

      const credentials = decryptCredentials(userData.maxCredentials.encrypted);
      
      console.log('Credentials decrypted, starting scraper...');

      // Configure Puppeteer avec Chromium
      const executablePath = await chromium.executablePath();
      process.env.PUPPETEER_EXECUTABLE_PATH = executablePath;

      // Configure scraper avec options Puppeteer custom
      const scraperOptions = {
        companyId: CompanyTypes.max,
        startDate: startDate ? new Date(startDate) : getMonthsAgo(6), // 6 derniers mois complets
        combineInstallments: false,
        showBrowser: false,
        verbose: true,
        // Options Puppeteer directes
        puppeteerOptions: {
          executablePath: executablePath,
          args: [...chromium.args, '--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage'],
          headless: 'new'
        }
      };

      console.log('Creating scraper with chromium path:', executablePath);

      const scraper = createScraper(scraperOptions);
      
      // PATCH : Force les options Puppeteer sur le scraper
      if (scraper && scraper.options) {
        scraper.options.executablePath = executablePath;
        scraper.options.args = scraperOptions.puppeteerOptions.args;
      }

      const scrapeResult = await scraper.scrape(credentials);

      if (!scrapeResult.success) {
        console.error('Scrape failed:', scrapeResult.errorType, scrapeResult.errorMessage);
        throw new HttpsError(
          'internal',
          `Scraping failed: ${scrapeResult.errorType || 'Unknown error'}`,
          { errorType: scrapeResult.errorType, errorMessage: scrapeResult.errorMessage }
        );
      }

      console.log(`Scrape successful, found ${scrapeResult.accounts.length} accounts`);

      // Process transactions
      const allTransactions = [];
      let transactionCount = 0;

      scrapeResult.accounts.forEach((account) => {
        account.txns.forEach((txn) => {
          allTransactions.push({
            accountNumber: account.accountNumber,
            date: txn.date,
            processedDate: txn.processedDate,
            originalAmount: txn.originalAmount,
            originalCurrency: txn.originalCurrency,
            chargedAmount: txn.chargedAmount,
            chargedCurrency: txn.chargedCurrency || 'ILS',
            description: txn.description,
            memo: txn.memo,
            type: txn.type,
            status: txn.status,
            category: null,
            isLabeled: false
          });
          transactionCount++;
        });
      });

      console.log(`Processed ${transactionCount} transactions`);

      // Save transactions to Firestore
      const batch = db.batch();
      const transactionsRef = db.collection('users').doc(userId).collection('transactions');

      allTransactions.forEach((transaction) => {
        const transactionId = CryptoJS.MD5(
          `${transaction.date}-${transaction.description}-${transaction.chargedAmount}`
        ).toString();
        
        const docRef = transactionsRef.doc(transactionId);
        batch.set(docRef, {
          ...transaction,
          source: 'max',
          scrapedAt: admin.firestore.FieldValue.serverTimestamp(),
          updatedAt: admin.firestore.FieldValue.serverTimestamp()
        }, { merge: true });
      });

      await batch.commit();

      // Update last sync time
      await db.collection('users').doc(userId).set({
        lastMaxSync: admin.firestore.FieldValue.serverTimestamp(),
        lastSyncTransactionCount: transactionCount
      }, { merge: true });

      console.log(`Saved ${transactionCount} transactions to Firestore`);

      return {
        success: true,
        transactionCount: transactionCount,
        accounts: scrapeResult.accounts.length,
        message: `Successfully scraped ${transactionCount} transactions`
      };

    } catch (error) {
      console.error('Error in scrapeMaxTransactions:', error);
      
      if (error instanceof HttpsError) {
        throw error;
      }
      
      throw new HttpsError('internal', `Scraping error: ${error.message}`);
    }
  }
);
/**
 * Cloud Function: Get user transactions
 * Returns transactions with optional filters
 */
export const getTransactions = onCall(async (request) => {
  if (!request.auth) {
    throw new HttpsError('unauthenticated', 'User must be authenticated');
  }

  const userId = request.auth.uid;
  const filters = request.data || {};
  const { startDate, endDate, category, isLabeled, limit } = filters;

  try {
    const transactionsRef = db.collection('users')
      .doc(userId)
      .collection('transactions');

    let query = transactionsRef.orderBy('date', 'desc');

    // Apply filters
    if (startDate) {
      query = query.where('date', '>=', startDate);
    }
    if (endDate) {
      query = query.where('date', '<=', endDate);
    }
    if (category) {
      query = query.where('category', '==', category);
    }
    if (isLabeled !== undefined) {
      query = query.where('isLabeled', '==', isLabeled);
    }

    // Limite par défaut augmentée
    const finalLimit = limit || 500;
    query = query.limit(finalLimit);

    const snapshot = await query.get();
    
    const transactions = snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data(),
      // Convertir Firestore Timestamps en ISO strings pour le frontend
      date: doc.data().date?.toDate ? doc.data().date.toDate().toISOString() : doc.data().date,
      scrapedAt: doc.data().scrapedAt?.toDate ? doc.data().scrapedAt.toDate().toISOString() : doc.data().scrapedAt,
      updatedAt: doc.data().updatedAt?.toDate ? doc.data().updatedAt.toDate().toISOString() : doc.data().updatedAt
    }));

    return {
      success: true,
      transactions: transactions,
      count: transactions.length
    };

  } catch (error) {
    console.error('Error getting transactions:', error);
    throw new HttpsError('internal', `Failed to get transactions: ${error.message}`);
  }
});

/**
 * Cloud Function: Label a transaction
 * Assigns a category to a transaction and creates/updates labeling rules
 */
export const labelTransaction = onCall(async (request) => {
  if (!request.auth) {
    throw new HttpsError('unauthenticated', 'User must be authenticated');
  }

  const userId = request.auth.uid;
  const { transactionId, category } = request.data;

  if (!transactionId || !category) {
    throw new HttpsError('invalid-argument', 'Transaction ID and category are required');
  }

  try {
    const transactionRef = db.collection('users')
      .doc(userId)
      .collection('transactions')
      .doc(transactionId);

    const transactionDoc = await transactionRef.get();
    
    if (!transactionDoc.exists) {
      throw new HttpsError('not-found', 'Transaction not found');
    }

    const transaction = transactionDoc.data();

    // Update transaction
    await transactionRef.update({
      category: category,
      isLabeled: true,
      labeledAt: admin.firestore.FieldValue.serverTimestamp()
    });

    // Extract keywords from description and create labeling rules
    const keywords = extractKeywords(transaction.description);
    
    const rulesRef = db.collection('users').doc(userId).collection('labelingRules');
    
    for (const keyword of keywords) {
      const ruleId = keyword.toLowerCase().replace(/[^a-z0-9]/g, '_');
      await rulesRef.doc(ruleId).set({
        pattern: keyword.toLowerCase(),
        category: category,
        matchType: 'contains',
        confidence: 0.8,
        timesMatched: admin.firestore.FieldValue.increment(1),
        lastMatched: admin.firestore.FieldValue.serverTimestamp()
      }, { merge: true });
    }

    return {
      success: true,
      message: 'Transaction labeled successfully'
    };

  } catch (error) {
    console.error('Error labeling transaction:', error);
    throw new HttpsError('internal', 'Failed to label transaction');
  }
});

/**
 * Helper: Extract keywords from transaction description
 */
function extractKeywords(description) {
  // Remove special characters and split
  const cleaned = description.replace(/[^\w\s]/g, ' ').toLowerCase();
  const words = cleaned.split(/\s+/).filter(word => word.length > 2);
  
  // Return unique words
  return [...new Set(words)];
}

/**
 * Cloud Function: Auto-label transactions
 * Automatically labels unlabeled transactions based on existing rules
 */
export const autoLabelTransactions = onCall(async (request) => {
  if (!request.auth) {
    throw new HttpsError('unauthenticated', 'User must be authenticated');
  }

  const userId = request.auth.uid;

  try {
    // Get all labeling rules
    const rulesSnapshot = await db.collection('users')
      .doc(userId)
      .collection('labelingRules')
      .get();

    const rules = rulesSnapshot.docs.map(doc => doc.data());

    // Get unlabeled transactions
    const transactionsSnapshot = await db.collection('users')
      .doc(userId)
      .collection('transactions')
      .where('isLabeled', '==', false)
      .limit(100)
      .get();

    let labeledCount = 0;
    const batch = db.batch();

    transactionsSnapshot.docs.forEach(doc => {
      const transaction = doc.data();
      const description = transaction.description.toLowerCase();

      // Try to match with rules
      for (const rule of rules) {
        if (description.includes(rule.pattern)) {
          // Found a match!
          batch.update(doc.ref, {
            category: rule.category,
            isLabeled: true,
            autoLabeled: true,
            labeledBy: 'auto',
            labeledAt: admin.firestore.FieldValue.serverTimestamp()
          });

          labeledCount++;
          break; // Stop after first match
        }
      }
    });

    if (labeledCount > 0) {
      await batch.commit();
    }

    return {
      success: true,
      labeledCount: labeledCount,
      message: `Auto-labeled ${labeledCount} transactions`
    };

  } catch (error) {
    console.error('Error auto-labeling transactions:', error);
    throw new HttpsError('internal', 'Failed to auto-label transactions');
  }
});
