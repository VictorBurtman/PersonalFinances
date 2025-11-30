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
    timeoutSeconds: 840,
    memory: '2GiB',
    maxInstances: 10,  // Limite le nombre d'instances
    cpu: 2  // Plus de CPU = plus rapide
  },
  async (request) => {
    if (!request.auth) {
      throw new HttpsError('unauthenticated', 'User must be authenticated');
    }

    const userId = request.auth.uid;
    let { startDate, monthsBack } = request.data;

    // Si pas de startDate fourni, calculer depuis la dernière transaction
    if (!startDate) {
        try {
            const lastTransactionSnapshot = await db.collection('users')
                .doc(userId)
                .collection('transactions')
                .where('source', '==', 'max')
                .orderBy('date', 'desc')
                .limit(1)
                .get();
            
            if (!lastTransactionSnapshot.empty) {
                const lastDate = new Date(lastTransactionSnapshot.docs[0].data().date);
                // Remonter de 10 jours pour la sécurité
                lastDate.setDate(lastDate.getDate() - 10);
                startDate = lastDate.toISOString();
                console.log(`Using incremental sync from: ${startDate}`);
            } else {
                // Première sync - utiliser monthsBack ou défaut 3 mois
                const months = monthsBack || 6;  // ← 6 par défaut
                startDate = getMonthsAgo(months).toISOString();
                console.log(`First sync - using ${months} months back`);
            }
        } catch (error) {
            console.error('Error calculating incremental sync date:', error);
            // Fallback : 3 mois
            startDate = getMonthsAgo(3).toISOString();
        }
    }

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
              // Ignorer les transactions positives (revenus, remboursements) et zéro
              if (txn.chargedAmount >= 0) {
                  return;
              }
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
 * Save Isracard credentials (encrypted)
 */
export const saveIsracardCredentials = onCall(async (request) => {
  if (!request.auth) {
    throw new HttpsError('unauthenticated', 'User must be authenticated');
  }

  const userId = request.auth.uid;
  const { id, card6Digits, password } = request.data;

  if (!id || !card6Digits || !password) {
    throw new HttpsError('invalid-argument', 'ID, card digits, and password are required');
  }

  try {
    const encrypted = encryptCredentials({ id, card6Digits, password });

    await db.collection('users').doc(userId).set({
      isracardCredentials: {
        encrypted: encrypted,
        updatedAt: admin.firestore.FieldValue.serverTimestamp()
      }
    }, { merge: true });

    console.log(`Isracard credentials saved for user ${userId}`);

    return {
      success: true,
      message: 'Isracard credentials saved successfully'
    };

  } catch (error) {
    console.error('Error saving Isracard credentials:', error);
    throw new HttpsError('internal', 'Failed to save Isracard credentials');
  }
});

/**
 * Scrape Isracard transactions
 */
export const scrapeIsracardTransactions = onCall(
  {
    timeoutSeconds: 840,
    memory: '2GiB',
    maxInstances: 10,  // Limite le nombre d'instances
    cpu: 2  // Plus de CPU = plus rapide
  },
  async (request) => {
    if (!request.auth) {
      throw new HttpsError('unauthenticated', 'User must be authenticated');
    }

    const userId = request.auth.uid;
    const { startDate } = request.data;

    try {
      console.log(`Starting Isracard scrape for user ${userId}`);

      const userDoc = await db.collection('users').doc(userId).get();
      
      if (!userDoc.exists) {
        throw new HttpsError('not-found', 'User not found');
      }

      const userData = userDoc.data();
      
      if (!userData.isracardCredentials || !userData.isracardCredentials.encrypted) {
        throw new HttpsError('failed-precondition', 'Isracard credentials not set.');
      }

      const credentials = decryptCredentials(userData.isracardCredentials.encrypted);
      
      console.log('Isracard credentials decrypted, starting scraper...');

      // Configure Puppeteer avec Chromium
      const executablePath = await chromium.executablePath();
      process.env.PUPPETEER_EXECUTABLE_PATH = executablePath;

      const scraperOptions = {
        companyId: CompanyTypes.isracard,
        startDate: startDate ? new Date(startDate) : getMonthsAgo(6),
        combineInstallments: false,
        showBrowser: false,
        verbose: true,
        args: [...chromium.args, '--no-sandbox', '--disable-setuid-sandbox']
      };

      console.log('Creating Isracard scraper');

      const scraper = createScraper(scraperOptions);
      const scrapeResult = await scraper.scrape(credentials);

      if (!scrapeResult.success) {
        console.error('Isracard scrape failed:', scrapeResult.errorType, scrapeResult.errorMessage);
        throw new HttpsError(
          'internal',
          `Isracard scraping failed: ${scrapeResult.errorType || 'Unknown error'}`,
          { errorType: scrapeResult.errorType, errorMessage: scrapeResult.errorMessage }
        );
      }

      console.log(`Isracard scrape successful, found ${scrapeResult.accounts.length} accounts`);

      const allTransactions = [];
      let transactionCount = 0;

      scrapeResult.accounts.forEach((account) => {
        account.txns.forEach((txn) => {
          // Ignorer les transactions positives (revenus, remboursements)
          if (txn.chargedAmount >= 0 || txn.chargedAmount === 0) {
            return;
          }
          
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

      console.log(`Processed ${transactionCount} Isracard transactions`);

      // Save to Firestore
      const batch = db.batch();
      const transactionsRef = db.collection('users').doc(userId).collection('transactions');

      allTransactions.forEach((transaction) => {
        const transactionId = CryptoJS.MD5(
          `${transaction.date}-${transaction.description}-${transaction.chargedAmount}-isracard`
        ).toString();
        
        const docRef = transactionsRef.doc(transactionId);
        batch.set(docRef, {
          ...transaction,
          source: 'isracard',
          scrapedAt: admin.firestore.FieldValue.serverTimestamp(),
          updatedAt: admin.firestore.FieldValue.serverTimestamp()
        }, { merge: true });
      });

      await batch.commit();

      await db.collection('users').doc(userId).set({
        lastIsracardSync: admin.firestore.FieldValue.serverTimestamp(),
        lastIsracardSyncTransactionCount: transactionCount
      }, { merge: true });

      console.log(`Saved ${transactionCount} Isracard transactions`);

      return {
        success: true,
        transactionCount: transactionCount,
        accounts: scrapeResult.accounts.length,
        message: `Successfully scraped ${transactionCount} Isracard transactions`
      };

    } catch (error) {
      console.error('Error in scrapeIsracardTransactions:', error);
      
      if (error instanceof HttpsError) {
        throw error;
      }
      
      throw new HttpsError('internal', `Isracard scraping error: ${error.message}`);
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

  if (!transactionId) {
    throw new HttpsError('invalid-argument', 'Transaction ID is required');
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

    // Update the main transaction
    await transactionRef.update({
      category: category,
      isLabeled: category !== null,
      updatedAt: admin.firestore.FieldValue.serverTimestamp()
    });

    console.log(`Transaction ${transactionId} labeled as ${category}`);

    // If labeling (not unlabeling), find and label similar transactions
    let similarCount = 0;
    if (category) {
      // Extract keywords from transaction description
      const description = transaction.description.toLowerCase();
      const keywords = extractKeywords(description);

      console.log(`Extracted keywords for "${description}":`, keywords);

      if (keywords.length > 0) {
        // Find unlabeled transactions with similar descriptions
        const allTransactionsSnapshot = await db.collection('users')
          .doc(userId)
          .collection('transactions')
          .where('isLabeled', '==', false)
          .get();

        const batch = db.batch();
        
        allTransactionsSnapshot.docs.forEach(doc => {
          const txn = doc.data();
          const txnDescription = txn.description.toLowerCase();
          
          // Check if any keyword matches (more flexible)
          const hasMatch = keywords.some(keyword => {
            // For short keywords (< 4 chars), require exact match
            if (keyword.length < 4) {
              return txnDescription.includes(keyword);
            }
            // For longer keywords, allow partial matches
            // This helps with variations like "אי.אם.פי" vs "אי אם פי"
            const cleanKeyword = keyword.replace(/[.\s:]/g, '');
            const cleanTxnDesc = txnDescription.replace(/[.\s:]/g, '');
            return cleanTxnDesc.includes(cleanKeyword);
          });
          
          if (hasMatch && doc.id !== transactionId) {
            batch.update(doc.ref, {
              category: category,
              isLabeled: true,
              updatedAt: admin.firestore.FieldValue.serverTimestamp()
            });
            similarCount++;
            console.log(`  → Auto-labeled similar transaction: ${txn.description}`);
          }
        });

        if (similarCount > 0) {
          await batch.commit();
          console.log(`Auto-labeled ${similarCount} similar transactions`);
        }
      }
    }

    return {
      success: true,
      message: category ? 
        `Labeled ${1 + similarCount} transaction${similarCount > 0 ? 's' : ''}` :
        'Label removed',
      similarCount: similarCount
    };

  } catch (error) {
    console.error('Error labeling transaction:', error);
    throw new HttpsError('internal', `Failed to label transaction: ${error.message}`);
  }
});



/**
 * Rename a category and update all associated transactions
 */
export const renameCategory = onCall(async (request) => {
  if (!request.auth) {
    throw new HttpsError('unauthenticated', 'User must be authenticated');
  }

  const userId = request.auth.uid;
  const { oldName, newName } = request.data;

  if (!oldName || !newName) {
    throw new HttpsError('invalid-argument', 'Both old and new category names are required');
  }

  if (oldName === newName) {
    return { success: true, message: 'No change needed' };
  }

  try {
    // Update all transactions with this category
    const transactionsRef = db.collection('users').doc(userId).collection('transactions');
    const snapshot = await transactionsRef.where('category', '==', oldName).get();

    if (!snapshot.empty) {
      const batch = db.batch();
      
      snapshot.docs.forEach(doc => {
        batch.update(doc.ref, {
          category: newName,
          updatedAt: admin.firestore.FieldValue.serverTimestamp()
        });
      });

      await batch.commit();
      console.log(`Updated ${snapshot.size} transactions from ${oldName} to ${newName}`);
    }

    return {
      success: true,
      updatedCount: snapshot.size,
      message: `Category renamed and ${snapshot.size} transaction(s) updated`
    };

  } catch (error) {
    console.error('Error renaming category:', error);
    throw new HttpsError('internal', `Failed to rename category: ${error.message}`);
  }
});

/**
 * Delete a category and unlabel all associated transactions
 */
export const deleteCategory = onCall(async (request) => {
  if (!request.auth) {
    throw new HttpsError('unauthenticated', 'User must be authenticated');
  }

  const userId = request.auth.uid;
  const { categoryName } = request.data;

  if (!categoryName) {
    throw new HttpsError('invalid-argument', 'Category name is required');
  }

  try {
    // Unlabel all transactions with this category
    const transactionsRef = db.collection('users').doc(userId).collection('transactions');
    const snapshot = await transactionsRef.where('category', '==', categoryName).get();

    if (!snapshot.empty) {
      const batch = db.batch();
      
      snapshot.docs.forEach(doc => {
        batch.update(doc.ref, {
          category: null,
          isLabeled: false,
          updatedAt: admin.firestore.FieldValue.serverTimestamp()
        });
      });

      await batch.commit();
      console.log(`Unlabeled ${snapshot.size} transactions from deleted category ${categoryName}`);
    }

    return {
      success: true,
      unlabeledCount: snapshot.size,
      message: `Category deleted and ${snapshot.size} transaction(s) unlabeled`
    };

  } catch (error) {
    console.error('Error deleting category:', error);
    throw new HttpsError('internal', `Failed to delete category: ${error.message}`);
  }
});


/**
 * Extract meaningful keywords from transaction description
 * Supports Hebrew, English, and numbers
 */
function extractKeywords(description) {
  // Remove common noise words (Hebrew and English)
  const noiseWords = [
    'ltd', 'inc', 'llc', 'co', 'corp', 'limited', 'the', 'israel', 
    'tel aviv', 'jerusalem', 'בעמ', 'בע"מ', 'ישראל', 'תל אביב'
  ];
  
  // Clean the description but KEEP Hebrew characters
  // This regex keeps: Hebrew (א-ת), English (a-zA-Z), numbers (0-9), and spaces
  let cleaned = description
    .toLowerCase()
    .replace(/[^\u0590-\u05FFa-z0-9\s]/gi, ' ') // Keep Hebrew, English, numbers
    .replace(/\s+/g, ' ') // Collapse multiple spaces
    .trim();
  
  // Split by spaces
  let words = cleaned
    .split(/\s+/)
    .filter(word => word.length > 2) // Keep words longer than 2 chars
    .filter(word => !noiseWords.includes(word));
  
  // Remove duplicates
  words = [...new Set(words)];
  
  // For Hebrew text, if we have long words, use them
  // For mixed text, take the most significant parts
  if (words.length === 0) {
    // Fallback: use the whole cleaned description
    return [cleaned];
  }
  
  // Return top 3 most significant words (or the whole thing if short)
  return words.slice(0, 3);
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


