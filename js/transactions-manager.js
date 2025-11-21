// transactions-manager.js
// Manages all transactions functionality (Max scraping, labeling, etc.)

// Global state for transactions
let transactionsData = [];
let transactionsFunctions = null;

/**
 * Initialize transactions system
 * Called after Firebase is initialized
 */
function initTransactions() {
    if (typeof firebase !== 'undefined' && firebase.functions) {
        transactionsFunctions = firebase.functions();
        console.log('✓ Transactions system initialized');
    } else {
        console.error('Firebase Functions not available');
    }
}

/**
 * Load transactions from Firebase
 */
async function loadTransactions() {
    if (!window.currentUser || !transactionsFunctions) {
        console.log('Cannot load transactions: user not logged in or functions not initialized');
        return;
    }
    
    try {
        const getTransactions = transactionsFunctions.httpsCallable('getTransactions');
        const result = await getTransactions({ limit: 100 });
        
        transactionsData = result.data.transactions || [];
        renderTransactions();
        
        // Update last sync info from Firestore
        const userDoc = await db.collection('users').doc(window.currentUser.uid).get();
        if (userDoc.exists && userDoc.data().lastMaxSync) {
            const lastSync = userDoc.data().lastMaxSync.toDate();
            const count = userDoc.data().lastSyncTransactionCount;
            updateSyncStatus(lastSync, count);
        }
    } catch (error) {
        console.error('Error loading transactions:', error);
        showTransactionAlert('Error loading transactions: ' + error.message, 'error');
    }
}

/**
 * Render all transactions in the UI
 */
function renderTransactions() {
    const unlabeled = transactionsData.filter(t => !t.isLabeled);
    const labeled = transactionsData.filter(t => t.isLabeled);
    
    // Show/hide empty state
    const emptyState = document.getElementById('emptyState');
    if (emptyState) {
        emptyState.style.display = transactionsData.length === 0 ? 'block' : 'none';
    }
    
    // Render unlabeled transactions
    const unlabeledSection = document.getElementById('unlabeledSection');
    if (unlabeledSection) {
        if (unlabeled.length > 0) {
            unlabeledSection.style.display = 'block';
            const countEl = document.getElementById('unlabeledCount');
            if (countEl) countEl.textContent = unlabeled.length;
            
            const listEl = document.getElementById('unlabeledList');
            if (listEl) {
                listEl.innerHTML = unlabeled.map(t => renderUnlabeledTransaction(t)).join('');
            }
        } else {
            unlabeledSection.style.display = 'none';
        }
    }
    
    // Render categorized transactions
    const categorizedSection = document.getElementById('categorizedSection');
    if (categorizedSection) {
        if (labeled.length > 0) {
            categorizedSection.style.display = 'block';
            const listEl = document.getElementById('categorizedList');
            if (listEl) {
                listEl.innerHTML = renderCategorized(labeled);
            }
        } else {
            categorizedSection.style.display = 'none';
        }
    }
}

/**
 * Render a single unlabeled transaction
 */
function renderUnlabeledTransaction(txn) {
    // Get categories from budget (exclude income)
    const categories = Object.keys(window.expenses || {}).filter(c => c !== 'income');
    const date = new Date(txn.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
    
    return `
        <div class="transaction-item">
            <div class="transaction-info">
                <div class="transaction-date">${date}</div>
                <div class="transaction-desc">${escapeHtml(txn.description)}</div>
                <div class="category-buttons">
                    ${categories.map(cat => `
                        <button class="category-btn-trans" onclick="labelTransaction('${txn.id}', '${cat}')">
                            ${getCategoryDisplayName(cat)}
                        </button>
                    `).join('')}
                </div>
            </div>
            <div class="transaction-amount">
                ${window.currency || '₪'}${txn.chargedAmount.toFixed(2)}
            </div>
        </div>
    `;
}

/**
 * Render categorized transactions grouped by category
 */
function renderCategorized(transactions) {
    // Group by category
    const byCategory = {};
    transactions.forEach(t => {
        if (!byCategory[t.category]) {
            byCategory[t.category] = [];
        }
        byCategory[t.category].push(t);
    });
    
    // Render each category
    return Object.keys(byCategory).map(category => {
        const txns = byCategory[category];
        const total = txns.reduce((sum, t) => sum + t.chargedAmount, 0);
        const budget = calculateCategoryBudget(category);
        const diff = total - budget;
        const isOver = diff > 0;
        
        return `
            <div class="category-section-trans">
                <div class="category-header-trans">
                    <div>
                        <div class="category-name-trans">
                            ${getCategoryEmoji(category)} ${getCategoryDisplayName(category)}
                        </div>
                        <div class="budget-comparison">
                            Budget: ${window.currency || '₪'}${budget.toFixed(2)} | 
                            Spent: ${window.currency || '₪'}${total.toFixed(2)} | 
                            <span class="${isOver ? 'over-budget' : 'under-budget'}">
                                ${isOver ? '+' : ''}${window.currency || '₪'}${Math.abs(diff).toFixed(2)} 
                                (${budget > 0 ? ((diff/budget)*100).toFixed(0) : '0'}%)
                            </span>
                        </div>
                    </div>
                    <div class="category-total-trans">
                        ${window.currency || '₪'}${total.toFixed(2)}
                    </div>
                </div>
                ${txns.map(t => renderCategorizedTransaction(t)).join('')}
            </div>
        `;
    }).join('');
}

/**
 * Render a single categorized transaction
 */
function renderCategorizedTransaction(txn) {
    const date = new Date(txn.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
    return `
        <div class="transaction-item">
            <div class="transaction-info">
                <div class="transaction-date">${date}</div>
                <div class="transaction-desc">${escapeHtml(txn.description)}</div>
            </div>
            <div class="transaction-amount">
                ${window.currency || '₪'}${txn.chargedAmount.toFixed(2)}
            </div>
        </div>
    `;
}

/**
 * Calculate budget total for a category
 */
function calculateCategoryBudget(category) {
    const expenses = window.expenses || {};
    if (!expenses[category]) return 0;
    return expenses[category].reduce((sum, item) => sum + (parseFloat(item.amount) || 0), 0);
}

/**
 * Get category emoji
 */
function getCategoryEmoji(category) {
    const meta = (window.categoryMetadata || {})[category];
    if (meta && meta.emoji) return meta.emoji;
    
    const defaultEmojis = {
        'housing': '🏠',
        'tech': '📱',
        'pet': '🐱',
        'subscriptions': '🎬',
        'groceries': '🛒',
        'other': '💸'
    };
    return defaultEmojis[category] || '📋';
}

/**
 * Get category display name
 */
function getCategoryDisplayName(category) {
    const meta = (window.categoryMetadata || {})[category];
    if (meta && meta.displayName) return meta.displayName;
    return category.charAt(0).toUpperCase() + category.slice(1);
}

/**
 * Update sync status display
 */
function updateSyncStatus(date, count) {
    const now = new Date();
    const diff = Math.floor((now - date) / (1000 * 60));
    
    let timeText = '';
    if (diff < 1) timeText = 'Just now';
    else if (diff < 60) timeText = `${diff} minute${diff > 1 ? 's' : ''} ago`;
    else {
        const hours = Math.floor(diff / 60);
        if (hours < 24) timeText = `${hours} hour${hours > 1 ? 's' : ''} ago`;
        else {
            const days = Math.floor(hours / 24);
            timeText = `${days} day${days > 1 ? 's' : ''} ago`;
        }
    }
    
    const timeEl = document.getElementById('lastSyncTime');
    if (timeEl) timeEl.textContent = timeText;
    
    if (count) {
        const countEl = document.getElementById('lastSyncCount');
        if (countEl) countEl.textContent = `${count} transaction${count > 1 ? 's' : ''}`;
    }
}

/**
 * Show transaction alert message
 */
function showTransactionAlert(message, type = 'info') {
    const resultDiv = document.getElementById('syncResult');
    if (!resultDiv) return;
    
    const alertDiv = document.createElement('div');
    alertDiv.className = `alert-trans alert-${type}-trans`;
    alertDiv.textContent = message;
    
    resultDiv.innerHTML = '';
    resultDiv.appendChild(alertDiv);
    
    setTimeout(() => {
        alertDiv.remove();
    }, 5000);
}

/**
 * Escape HTML to prevent XSS
 */
function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

// ============================================
// UI ACTION HANDLERS
// ============================================

/**
 * Open credentials modal
 */
function openCredentialsModal() {
    const modal = document.getElementById('credentialsModal');
    if (modal) modal.classList.add('show');
}

/**
 * Close credentials modal
 */
function closeCredentialsModal() {
    const modal = document.getElementById('credentialsModal');
    if (modal) {
        modal.classList.remove('show');
        const form = document.getElementById('credentialsForm');
        if (form) form.reset();
    }
}

/**
 * Save Max credentials
 */
async function saveCredentials(event) {
    event.preventDefault();
    
    if (!transactionsFunctions) {
        showTransactionAlert('Firebase Functions not initialized', 'error');
        return;
    }
    
    const username = document.getElementById('maxUsername')?.value;
    const password = document.getElementById('maxPassword')?.value;
    
    if (!username || !password) {
        showTransactionAlert('Please enter username and password', 'error');
        return;
    }
    
    const btn = document.getElementById('saveCredentialsBtn');
    if (btn) {
        btn.disabled = true;
        btn.textContent = 'Saving...';
    }
    
    try {
        const saveMaxCredentials = transactionsFunctions.httpsCallable('saveMaxCredentials');
        await saveMaxCredentials({ username, password });
        
        showTransactionAlert('Credentials saved successfully! ✓', 'success');
        closeCredentialsModal();
        
        const alertEl = document.getElementById('credentialsAlert');
        if (alertEl) {
            alertEl.textContent = 'Credentials configured ✓';
            alertEl.className = 'alert-trans alert-success-trans';
        }
    } catch (error) {
        console.error('Error saving credentials:', error);
        showTransactionAlert('Error: ' + error.message, 'error');
    } finally {
        if (btn) {
            btn.disabled = false;
            btn.textContent = 'Save Credentials';
        }
    }
}

/**
 * Sync transactions from Max
 */
async function syncTransactions() {
    if (!transactionsFunctions) {
        showTransactionAlert('Firebase Functions not initialized', 'error');
        return;
    }
    
    const btn = document.getElementById('syncBtn');
    const loading = document.getElementById('syncLoading');
    
    if (btn) btn.disabled = true;
    if (loading) loading.classList.add('show');
    
    try {
        const scrapeMaxTransactions = transactionsFunctions.httpsCallable('scrapeMaxTransactions');
        const result = await scrapeMaxTransactions({});
        
        showTransactionAlert(`Successfully synced ${result.data.transactionCount} transactions! ✓`, 'success');
        updateSyncStatus(new Date(), result.data.transactionCount);
        
        await loadTransactions();
    } catch (error) {
        console.error('Error syncing:', error);
        showTransactionAlert('Error: ' + error.message, 'error');
    } finally {
        if (btn) btn.disabled = false;
        if (loading) loading.classList.remove('show');
    }
}

/**
 * Auto-label all unlabeled transactions
 */
async function autoLabelAll() {
    if (!transactionsFunctions) {
        showTransactionAlert('Firebase Functions not initialized', 'error');
        return;
    }
    
    const btn = document.getElementById('autoLabelBtn');
    if (btn) {
        btn.disabled = true;
        btn.textContent = 'Labeling...';
    }
    
    try {
        const autoLabelTransactions = transactionsFunctions.httpsCallable('autoLabelTransactions');
        const result = await autoLabelTransactions({});
        
        const count = result.data.labeledCount || 0;
        if (count > 0) {
            showTransactionAlert(`Auto-labeled ${count} transaction${count > 1 ? 's' : ''}! ✓`, 'success');
        } else {
            showTransactionAlert('No transactions could be auto-labeled. Try labeling some manually first.', 'info');
        }
        
        await loadTransactions();
    } catch (error) {
        console.error('Error auto-labeling:', error);
        showTransactionAlert('Error: ' + error.message, 'error');
    } finally {
        if (btn) {
            btn.disabled = false;
            btn.textContent = '🏷️ Auto-label';
        }
    }
}

/**
 * Label a single transaction
 */
async function labelTransaction(transactionId, category) {
    if (!transactionsFunctions) {
        showTransactionAlert('Firebase Functions not initialized', 'error');
        return;
    }
    
    try {
        const labelTransactionFunc = transactionsFunctions.httpsCallable('labelTransaction');
        await labelTransactionFunc({ transactionId, category });
        
        showTransactionAlert('Transaction labeled! ✓', 'success');
        await loadTransactions();
    } catch (error) {
        console.error('Error labeling:', error);
        showTransactionAlert('Error: ' + error.message, 'error');
    }
}

// Initialize when the script loads
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initTransactions);
} else {
    initTransactions();
}

// Listen for tab activation to load transactions
document.addEventListener('tabActivated', (event) => {
    if (event.detail.tabName === 'transactions' && transactionsData.length === 0) {
        loadTransactions();
    }
});
