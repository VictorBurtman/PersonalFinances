// transactions-manager.js
// Manages all transactions functionality (Max scraping, labeling, etc.)

// Global state for transactions
let transactionsData = [];
let filteredTransactionsData = [];
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
    
    // Show loading inside All Transactions section
    const transactionsLoading = document.getElementById('transactionsLoading');
    const allTransactionsList = document.getElementById('allTransactionsList');
    const emptyState = document.getElementById('emptyState');
    const allTransactionsSection = document.getElementById('allTransactionsSection');
    const filtersSection = document.getElementById('filtersSection');
    
    // Show All Transactions section with loading
    if (allTransactionsSection) allTransactionsSection.style.display = 'block';
    if (transactionsLoading) transactionsLoading.style.display = 'block';
    if (allTransactionsList) allTransactionsList.innerHTML = '';
    if (emptyState) emptyState.style.display = 'none';
    
    try {
        // IMPORTANT : Load saved UI states FIRST
        await loadSectionStates();
        
        // Force filters to stay collapsed if no saved preference
        const filtersContent = document.getElementById('filtersContent');
        const filtersToggle = document.getElementById('filtersToggle');
        if (filtersContent && filtersToggle && filtersContent.style.display !== 'block') {
            filtersContent.style.display = 'none';
            filtersToggle.textContent = '▶';
        }
        
        // Check if credentials exist (without forcing menu open)
        const userDoc = await db.collection('users').doc(window.currentUser.uid).get();
        
        if (userDoc.exists) {
            // Update credentials status silently
            const maxAlertEl = document.getElementById('maxCredentialsAlert');
            if (userDoc.data().maxCredentials && userDoc.data().maxCredentials.encrypted) {
                console.log('✓ Max credentials configured');
                if (maxAlertEl) {
                    maxAlertEl.innerHTML = '<span data-translate="credentialsConfigured">Credentials configured ✓</span>';
                    maxAlertEl.className = 'alert-trans alert-success-trans';
                }
            } else {
                // Pas de credentials
                if (maxAlertEl) {
                    maxAlertEl.innerHTML = '<span data-translate="configureCredentials">Configure your Max credentials to sync transactions.</span>';
                    maxAlertEl.className = 'alert-trans alert-info-trans';
                }
            }
            
            // Check Isracard credentials
            const isracardAlertEl = document.getElementById('isracardCredentialsAlert');
            if (userDoc.data().isracardCredentials && userDoc.data().isracardCredentials.encrypted) {
                console.log('✓ Isracard credentials configured');
                if (isracardAlertEl) {
                    isracardAlertEl.innerHTML = '<span data-translate="credentialsConfigured">Credentials configured ✓</span>';
                    isracardAlertEl.className = 'alert-trans alert-success-trans';
                }
            } else {
                // Pas de credentials
                if (isracardAlertEl) {
                    isracardAlertEl.innerHTML = '<span data-translate="configureCredentials">Configure your Isracard credentials to sync transactions.</span>';
                    isracardAlertEl.className = 'alert-trans alert-info-trans';
                }
            }
            
            // Update Max sync status
            if (userDoc.data().lastMaxSync) {
                const lastSync = userDoc.data().lastMaxSync.toDate();
                const count = userDoc.data().lastMaxSyncTransactionCount;
                updateSyncStatus(lastSync, count, 'max');
            }
            
            // Update Isracard sync status
            if (userDoc.data().lastIsracardSync) {
                const lastSync = userDoc.data().lastIsracardSync.toDate();
                const count = userDoc.data().lastIsracardSyncTransactionCount;
                updateSyncStatus(lastSync, count, 'isracard');
            }
        }
        
        // Load transactions with increased limit
        const getTransactions = transactionsFunctions.httpsCallable('getTransactions');
        const result = await getTransactions({ limit: 2000 });
        
        transactionsData = result.data.transactions || [];
        
        // Populate filters
        populateMonthFilter();
        populateCategoryFilter();
        console.log('Filters populated');
        
        // Apply filters and render
        applyFilters();
        
        // Hide loading
        if (transactionsLoading) transactionsLoading.style.display = 'none';
        if (filtersSection) filtersSection.style.display = 'block';
        
    } catch (error) {
        console.error('Error loading transactions:', error);
        showTransactionAlert('Error loading transactions: ' + error.message, 'error');
        
        // Hide loading
        if (transactionsLoading) transactionsLoading.style.display = 'none';
        
        // Show error
        if (emptyState) {
            emptyState.innerHTML = `
                <div class="empty-state-icon">⚠️</div>
                <div>Error loading transactions</div>
                <div style="margin-top: 10px; font-size: 0.9em;">${error.message}</div>
            `;
            emptyState.style.display = 'block';
        }
    }
}

/**
 * Update credentials alert when Bank Config menu is opened
 */
async function updateCredentialsStatus() {
    if (!window.currentUser || !db) return;
    
    try {
        const userDoc = await db.collection('users').doc(window.currentUser.uid).get();
        
        // Check Max credentials
        const maxAlertEl = document.getElementById('maxCredentialsAlert');
        if (maxAlertEl && userDoc.exists && userDoc.data().maxCredentials?.encrypted) {
            maxAlertEl.textContent = 'Credentials configured ✓';
            maxAlertEl.className = 'alert-trans alert-success-trans';
        }
        
        // Check Isracard credentials
        const isracardAlertEl = document.getElementById('isracardCredentialsAlert');
        if (isracardAlertEl && userDoc.exists && userDoc.data().isracardCredentials?.encrypted) {
            isracardAlertEl.textContent = 'Credentials configured ✓';
            isracardAlertEl.className = 'alert-trans alert-success-trans';
        }
    } catch (error) {
        console.error('Error checking credentials:', error);
    }
}



/**
 * Populate month filter dropdown with available months
 */
function populateMonthFilter() {
    const monthFilter = document.getElementById('monthFilter');
    if (!monthFilter) return;
    
    // Get unique months from transactions
    const months = new Set();
    transactionsData.forEach(txn => {
        const date = new Date(txn.date);
        const monthKey = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}`;
        months.add(monthKey);
    });
    
    // Sort months (newest first)
    const sortedMonths = Array.from(months).sort().reverse();
    
    // Clear and populate dropdown
    monthFilter.innerHTML = '<option value="">All months</option>';
    sortedMonths.forEach(monthKey => {
        const [year, month] = monthKey.split('-');
        const date = new Date(year, month - 1);
        const monthName = date.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });
        
        const option = document.createElement('option');
        option.value = monthKey;
        option.textContent = monthName;
        monthFilter.appendChild(option);
    });
}

/**
 * Populate category filter dropdown with available categories
 */
function populateCategoryFilter() {
    const categoryFilter = document.getElementById('categoryFilter');
    if (!categoryFilter) return;
    
    // Get categories from DOM
    const categorySections = document.querySelectorAll('.category-section[id^="category-"]');
    const categories = Array.from(categorySections)
        .map(section => section.id.replace('category-', ''))
        .filter(c => c !== 'income' && document.getElementById(`category-${c}`).style.display !== 'none');
    
    // Clear and populate dropdown
    categoryFilter.innerHTML = '<option value="">All categories</option>';
    categories.forEach(cat => {
        const option = document.createElement('option');
        option.value = cat;
        option.textContent = `${getCategoryEmoji(cat)} ${getCategoryDisplayName(cat)}`;
        categoryFilter.appendChild(option);
    });
}

/**
 * Apply filters and render transactions
 */
function applyFilters() {
    // Get filter values
    const labelFilter = document.querySelector('input[name="labelFilter"]:checked')?.value || 'all';
    const monthFilter = document.getElementById('monthFilter')?.value;
    const categoryFilter = document.getElementById('categoryFilter')?.value;
    const searchFilter = document.getElementById('searchFilter')?.value.toLowerCase();
    
    console.log('Applying filters:', { labelFilter, monthFilter, categoryFilter, searchFilter }); // DEBUG
    
    // Filter transactions
    filteredTransactionsData = transactionsData.filter(txn => {
        // Filter by labeled status (radio buttons)
        if (labelFilter === 'unlabeled' && txn.isLabeled) {
            return false;
        }
        if (labelFilter === 'labeled' && !txn.isLabeled) {
            return false;
        }
        // 'all' = no filter on labeled status
        
        // Filter by month
        if (monthFilter) {
            const date = new Date(txn.date);
            const txnMonthKey = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}`;
            if (txnMonthKey !== monthFilter) {
                return false;
            }
        }
        
        // Filter by category
        if (categoryFilter && txn.category !== categoryFilter) {
            return false;
        }
        
        // Filter by search text
        if (searchFilter) {
            const description = (txn.description || '').toLowerCase();
            const memo = (txn.memo || '').toLowerCase();
            
            if (!description.includes(searchFilter) && !memo.includes(searchFilter)) {
                return false;
            }
        }
        
        return true;
    });
    
    console.log('Filtered:', filteredTransactionsData.length, 'of', transactionsData.length); // DEBUG
    
    renderTransactions();
}

/**
 * Clear all filters
 */
function clearFilters() {
    // Reset label filter to 'all'
    const allRadio = document.querySelector('input[name="labelFilter"][value="all"]');
    if (allRadio) allRadio.checked = true;
    
    // Reset other filters
    const monthFilter = document.getElementById('monthFilter');
    if (monthFilter) monthFilter.value = '';
    
    const categoryFilter = document.getElementById('categoryFilter');
    if (categoryFilter) categoryFilter.value = '';
    
    const searchFilter = document.getElementById('searchFilter');
    if (searchFilter) searchFilter.value = '';
    
    applyFilters();
}

/**
 * Render all transactions
 */
function renderTransactions() {
    const emptyState = document.getElementById('emptyState');
    const allTransactionsSection = document.getElementById('allTransactionsSection');
    const filtersSection = document.getElementById('filtersSection');
    const transactionCount = document.getElementById('transactionCount');
    const allTransactionsList = document.getElementById('allTransactionsList');
    
    if (transactionsData.length === 0) {
        // No transactions at all
        if (emptyState) {
            emptyState.innerHTML = `
                <div class="empty-state-icon">📭</div>
                <div>No transactions yet</div>
                <div style="margin-top: 10px; font-size: 0.9em;">Click "Sync Now" to get started</div>
            `;
            emptyState.style.display = 'block';
        }
        if (allTransactionsSection) allTransactionsSection.style.display = 'none';
        return;
    }
    
    // Hide empty state, show transactions
    if (emptyState) emptyState.style.display = 'none';
    if (filtersSection) filtersSection.style.display = 'block';
    if (allTransactionsSection) allTransactionsSection.style.display = 'block';
    
    // Update count and total
    if (transactionCount) {
        transactionCount.textContent = filteredTransactionsData.length;
    }
    
    // Calculate and display total amount (valeurs absolues uniquement des dépenses)
    const totalAmount = filteredTransactionsData.reduce((sum, txn) => {
        // Ignorer les montants positifs (revenus/remboursements)
        if (txn.chargedAmount < 0) {
            return sum + Math.abs(txn.chargedAmount);
        }
        return sum;
    }, 0);
    const transactionTotal = document.getElementById('transactionTotal');
    if (transactionTotal) {
        transactionTotal.textContent = `${window.currency || '₪'}${totalAmount.toFixed(2)}`;
    }
    
    // Render transactions
    if (allTransactionsList) {
        if (filteredTransactionsData.length === 0) {
            allTransactionsList.innerHTML = `
                <div style="text-align: center; padding: 20px; color: #6c757d;">
                    No transactions match the current filters
                </div>
            `;
        } else {
            allTransactionsList.innerHTML = filteredTransactionsData
                .map(txn => renderTransaction(txn))
                .join('');
        }
    }
}

/**
 * Render a single transaction with improved layout
 */
function renderTransaction(txn) {
    const categorySections = document.querySelectorAll('.category-section[id^="category-"]');
    const categories = Array.from(categorySections)
        .map(section => section.id.replace('category-', ''))
        .filter(c => c !== 'income' && document.getElementById(`category-${c}`).style.display !== 'none');
    
    const date = new Date(txn.date).toLocaleDateString('en-US', { 
        month: 'short', 
        day: 'numeric',
        year: 'numeric'
    });
    
    const isLabeled = txn.isLabeled && txn.category;
    const txnId = txn.id.replace(/[^a-zA-Z0-9]/g, ''); // Safe ID for DOM
    
    return `
        <div class="transaction-item" style="display: block; padding: 15px;">
            <!-- Top row: Date, Description, Amount -->
            <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 10px;">
                <div style="flex: 1; min-width: 0;" onclick="showTransactionDetails('${txnId}')" style="cursor: pointer;">
                    <div class="transaction-date" style="font-size: 0.85em; color: #6c757d; margin-bottom: 4px;">
                        ${date}
                    </div>
                    <div class="transaction-desc" style="font-weight: 500; overflow: hidden; text-overflow: ellipsis; cursor: pointer;">
                        ${escapeHtml(txn.description)}
                    </div>
                    
                    <!-- Expandable details -->
                    <div id="details-${txnId}" style="display: none; margin-top: 10px; padding: 10px; background: #f8f9fa; border-radius: 8px; font-size: 0.9em;">
                        <div style="margin-bottom: 5px;"><strong>Full name:</strong> ${escapeHtml(txn.description)}</div>
                        ${txn.memo ? `<div style="margin-bottom: 5px;"><strong>Memo:</strong> ${escapeHtml(txn.memo)}</div>` : ''}
                        <div style="margin-bottom: 5px;"><strong>Amount:</strong> ${window.currency || '₪'}${Math.abs(txn.chargedAmount).toFixed(2)}</div>
                        <div style="color: #667eea; font-weight: 600;"><strong>Similar transactions:</strong> ${countSimilarTransactions(txn.description)}</div>
                    </div>
                </div>
                <div class="transaction-amount" style="font-size: 1.1em; font-weight: 600; color: #667eea; white-space: nowrap; margin-left: 15px;">
                    ${window.currency || '₪'}${Math.abs(txn.chargedAmount).toFixed(2)}
                </div>
            </div>
            
            <!-- Bottom row: Category selector or label -->
            <div style="display: flex; align-items: center; gap: 10px;">
                ${isLabeled ? `
                    <div style="display: inline-flex; align-items: center; gap: 8px; padding: 6px 12px; background: #e7f3ff; border: 2px solid #667eea; border-radius: 8px; font-size: 0.9em;">
                        <span style="font-weight: 600; color: #667eea;">
                            ${getCategoryEmoji(txn.category)} ${getCategoryDisplayName(txn.category)}
                        </span>
                        <button 
                            onclick="unlabelTransaction('${txn.id}')" 
                            style="background: none; border: none; color: #667eea; cursor: pointer; padding: 0; font-size: 1.1em;"
                            title="Remove label"
                        >✕</button>
                    </div>
                ` : `
                    <select 
                        class="transaction-category-select" 
                        onchange="labelTransaction('${txn.id}', this.value)"
                        style="flex: 1; padding: 8px 12px; border: 2px solid #dee2e6; border-radius: 8px; font-size: 0.9em; cursor: pointer; max-width: 250px;"
                    >
                        <option value="">Select category...</option>
                        ${categories.map(cat => `
                            <option value="${cat}">${getCategoryEmoji(cat)} ${getCategoryDisplayName(cat)}</option>
                        `).join('')}
                    </select>
                `}
            </div>
        </div>
    `;
}

/**
 * Get category emoji
 */
function getCategoryEmoji(category) {
    // Essayer de récupérer depuis index.html
    if (typeof categoryMetadata !== 'undefined' && categoryMetadata[category]?.emoji) {
        return categoryMetadata[category].emoji;
    }
    
    // Sinon, chercher dans window
    const meta = (window.categoryMetadata || {})[category];
    if (meta && meta.emoji) return meta.emoji;
    
    const defaultEmojis = {
        'income': '💰',
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
    // Essayer de récupérer depuis index.html
    if (typeof categoryMetadata !== 'undefined' && categoryMetadata[category]?.displayName) {
        return categoryMetadata[category].displayName;
    }
    
    // Sinon, chercher dans window
    const meta = (window.categoryMetadata || {})[category];
    if (meta && meta.displayName) return meta.displayName;
    
    return category.charAt(0).toUpperCase() + category.slice(1);
}

/**
 * Update sync status display
 */
function updateSyncStatus(date, count, bankType = 'max') {
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
    
    const timeElId = bankType === 'max' ? 'lastMaxSyncTime' : 'lastIsracardSyncTime';
    const countElId = bankType === 'max' ? 'lastMaxSyncCount' : 'lastIsracardSyncCount';
    
    const timeEl = document.getElementById(timeElId);
    if (timeEl) timeEl.textContent = timeText;
    
    if (count) {
        const countEl = document.getElementById(countElId);
        if (countEl) countEl.textContent = `(${count} transaction${count > 1 ? 's' : ''})`;
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
 * Open credentials modal for Max or Isracard
 */
function openCredentialsModal(bankType = 'max') {
    const modal = document.getElementById('credentialsModal');
    const modalTitle = document.getElementById('credentialsModalTitle');
    const bankTypeInput = document.getElementById('bankType');
    
    const maxFields = document.getElementById('maxFields');
    const isracardFields = document.getElementById('isracardFields');
    
    if (modal) {
        // Configure modal based on bank type
        bankTypeInput.value = bankType;
        
        if (bankType === 'max') {
            modalTitle.innerHTML = '<span data-translate="setupMaxCredentials">🔐 Max.co.il Credentials</span>';
            
            // Show Max fields, hide Isracard fields
            maxFields.style.display = 'block';
            isracardFields.style.display = 'none';
            
            // Clear Max inputs
            document.getElementById('maxUsername').value = '';
            document.getElementById('maxPassword').value = '';
            
            // Set Max fields as required
            document.getElementById('maxUsername').required = true;
            document.getElementById('maxPassword').required = true;
            
            // Remove required from Isracard fields
            document.getElementById('isracardId').required = false;
            document.getElementById('isracardCard6').required = false;
            document.getElementById('isracardPassword').required = false;
            
        } else if (bankType === 'isracard') {
            modalTitle.innerHTML = '<span data-translate="setupIsracardCredentials">🔐 Isracard Credentials</span>';
            
            // Show Isracard fields, hide Max fields
            maxFields.style.display = 'none';
            isracardFields.style.display = 'block';
            
            // Clear Isracard inputs
            document.getElementById('isracardId').value = '';
            document.getElementById('isracardCard6').value = '';
            document.getElementById('isracardPassword').value = '';
            
            // Set Isracard fields as required
            document.getElementById('isracardId').required = true;
            document.getElementById('isracardCard6').required = true;
            document.getElementById('isracardPassword').required = true;
            
            // Remove required from Max fields
            document.getElementById('maxUsername').required = false;
            document.getElementById('maxPassword').required = false;
        }
        
        modal.classList.add('show');
    }
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
 * Save credentials for Max or Isracard
 */
async function saveCredentials(event) {
    event.preventDefault();
    
    if (!transactionsFunctions) {
        showTransactionAlert('Firebase Functions not initialized', 'error');
        return;
    }
    
    const bankType = document.getElementById('bankType')?.value || 'max';
    
    let credentials = {};
    
    if (bankType === 'max') {
        const username = document.getElementById('maxUsername')?.value;
        const password = document.getElementById('maxPassword')?.value;
        
        if (!username || !password) {
            showTransactionAlert('Please enter username and password', 'error');
            return;
        }
        
        credentials = { username, password };
        
    } else if (bankType === 'isracard') {
        const id = document.getElementById('isracardId')?.value;
        const card6Digits = document.getElementById('isracardCard6')?.value;
        const password = document.getElementById('isracardPassword')?.value;
        
        if (!id || !card6Digits || !password) {
            showTransactionAlert('Please fill all Isracard fields', 'error');
            return;
        }
        
        if (card6Digits.length !== 6 || !/^\d+$/.test(card6Digits)) {
            showTransactionAlert('Card digits must be exactly 6 numbers', 'error');
            return;
        }
        
        credentials = { id, card6Digits, password };
    }
    
    const btn = document.getElementById('saveCredentialsBtn');
    if (btn) {
        btn.disabled = true;
        btn.textContent = 'Saving...';
    }
    
    try {
        const saveFunc = transactionsFunctions.httpsCallable('saveCredentials');
        await saveFunc({ 
            accountType: bankType, 
            credentials: credentials 
        });
        
        const bankName = bankType === 'max' ? 'Max' : 'Isracard';
        showTransactionAlert(`${bankName} credentials saved successfully! ✓`, 'success');
        closeCredentialsModal();
        
        // Update alert
        const alertEl = document.getElementById(`${bankType}CredentialsAlert`);
        if (alertEl) {
            alertEl.innerHTML = '<span data-translate="credentialsConfigured">Credentials configured ✓</span>';
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
 * Sync transactions from all configured banks
 */
async function syncAllTransactions() {
    if (!transactionsFunctions) {
        showTransactionAlert('Firebase Functions not initialized', 'error');
        return;
    }
    
    const btn = document.getElementById('syncAllBtn');
    const loading = document.getElementById('syncLoading');
    
    if (btn) btn.disabled = true;
    if (loading) loading.classList.add('show');
    
    try {
        let totalTransactions = 0;
        const results = [];
        
        // Check which banks are configured
        const userDoc = await db.collection('users').doc(window.currentUser.uid).get();
        const hasMax = userDoc.exists && userDoc.data().maxCredentials;
        const hasIsracard = userDoc.exists && userDoc.data().isracardCredentials;
        
        // Sync Max
        if (hasMax) {
            try {
                const scrapeMax = transactionsFunctions.httpsCallable('scrapeMaxTransactions');
                const maxResult = await scrapeMax({});
                totalTransactions += maxResult.data.transactionCount;
                results.push(`Max: ${maxResult.data.transactionCount} transactions`);
                
                // Update Max sync status
                updateSyncStatus(new Date(), maxResult.data.transactionCount, 'max');
            } catch (error) {
                console.error('Error syncing Max:', error);
                results.push(`Max: Error - ${error.message}`);
            }
        }
        
        // Sync Isracard
        if (hasIsracard) {
            try {
                const scrapeIsracard = transactionsFunctions.httpsCallable('scrapeIsracardTransactions');
                const isracardResult = await scrapeIsracard({});
                totalTransactions += isracardResult.data.transactionCount;
                results.push(`Isracard: ${isracardResult.data.transactionCount} transactions`);
                
                // Update Isracard sync status
                updateSyncStatus(new Date(), isracardResult.data.transactionCount, 'isracard');
            } catch (error) {
                console.error('Error syncing Isracard:', error);
                results.push(`Isracard: Error - ${error.message}`);
            }
        }
        
        if (!hasMax && !hasIsracard) {
            showTransactionAlert('No bank credentials configured. Please set up at least one bank.', 'error');
        } else {
            showTransactionAlert(`Sync completed! ${totalTransactions} total transactions. ${results.join(' | ')}`, 'success');
            await loadTransactions();
        }
    } catch (error) {
        console.error('Error syncing:', error);
        showTransactionAlert('Error: ' + error.message, 'error');
    } finally {
        if (btn) btn.disabled = false;
        if (loading) loading.classList.remove('show');
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

/**
 * Label a transaction with a category
 */
async function labelTransaction(transactionId, category) {
    if (!transactionsFunctions) {
        showTransactionAlert('Firebase Functions not initialized', 'error');
        return;
    }
    
    if (!category) return; // User selected "Select category..."
    
    try {
        const labelTransactionFunc = transactionsFunctions.httpsCallable('labelTransaction');
        const result = await labelTransactionFunc({ transactionId, category });
        
        // Show smart message based on how many were labeled
        const similarCount = result.data.similarCount || 0;
        if (similarCount > 0) {
            showTransactionAlert(`Labeled 1 transaction + ${similarCount} similar ones! ✓`, 'success');
        } else {
            showTransactionAlert('Transaction labeled! ✓', 'success');
        }
        
        await loadTransactions();
    } catch (error) {
        console.error('Error labeling:', error);
        showTransactionAlert('Error: ' + error.message, 'error');
    }
}

/**
 * Remove label from a transaction
 */
async function unlabelTransaction(transactionId) {
    if (!transactionsFunctions) {
        showTransactionAlert('Firebase Functions not initialized', 'error');
        return;
    }
    
    try {
        const labelTransactionFunc = transactionsFunctions.httpsCallable('labelTransaction');
        await labelTransactionFunc({ transactionId, category: null });
        
        showTransactionAlert('Label removed! ✓', 'success');
        await loadTransactions();
    } catch (error) {
        console.error('Error removing label:', error);
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

/**
 * Toggle collapsible sections
 */
async function toggleSection(sectionId) {
    let contentId, toggleId;
    
    if (sectionId === 'bankConfigSection') {
        contentId = 'bankConfigContent';
        toggleId = 'bankConfigToggle';
    } else if (sectionId === 'filtersSection') {
        contentId = 'filtersContent';
        toggleId = 'filtersToggle';
    }
    
    const content = document.getElementById(contentId);
    const toggle = document.getElementById(toggleId);
    
    if (content && toggle) {
        const isCollapsed = content.style.display === 'none';
        
        if (isCollapsed) {
            content.style.display = 'block';
            toggle.textContent = '▼';
            
            // Update credentials status when opening Max Config
            if (sectionId === 'bankConfigSection') {
                await updateCredentialsStatus();
            }
        } else {
            content.style.display = 'none';
            toggle.textContent = '▶';
        }
        
        // Save state to Firebase
        if (window.currentUser && db) {
            try {
                // L'état APRÈS le toggle (true = déplié, false = replié)
                const newState = (content.style.display === 'block');
                
                console.log(`Saving ${sectionId} state:`, newState, `(display: ${content.style.display})`);
                
                await db.collection('users').doc(window.currentUser.uid).set({
                    uiPreferences: {
                        [sectionId]: newState
                    }
                }, { merge: true });
            } catch (error) {
                console.error('Error saving section state:', error);
            }
        }
    }
}

// Expose globally for onclick
window.toggleSection = toggleSection;

/**
 * Load saved section states
 */
async function loadSectionStates() {
    if (!window.currentUser || !db) {
        console.log('Cannot load section states: user not logged in');
        return;
    }
    
    try {
        const userDoc = await db.collection('users').doc(window.currentUser.uid).get();
        const prefs = userDoc.data()?.uiPreferences || {};
        
        console.log('Loaded UI preferences:', prefs);
        
        // Apply saved states for Bank Config
        if (prefs.bankConfigSection !== undefined) {
            const content = document.getElementById('bankConfigContent');
            const toggle = document.getElementById('bankConfigToggle');
            if (content && toggle) {
                content.style.display = prefs.bankConfigSection ? 'block' : 'none';
                toggle.textContent = prefs.bankConfigSection ? '▼' : '▶';
                console.log('Applied bankConfigSection state:', prefs.bankConfigSection);
            }
        }
        
        
        // Apply saved states for Filters
        if (prefs.filtersSection !== undefined) {
            const content = document.getElementById('filtersContent');
            const toggle = document.getElementById('filtersToggle');
            if (content && toggle) {
                content.style.display = prefs.filtersSection ? 'block' : 'none';
                toggle.textContent = prefs.filtersSection ? '▼' : '▶';
                console.log('Applied filtersSection state:', prefs.filtersSection);
            }
        }
    } catch (error) {
        console.error('Error loading section states:', error);
    }
}

// Expose globally for onclick
window.toggleSection = toggleSection;


/**
 * Show/hide transaction details by expanding the card
 */
function showTransactionDetails(txnId) {
    const detailsDiv = document.getElementById(`details-${txnId}`);
    if (detailsDiv) {
        if (detailsDiv.style.display === 'none' || !detailsDiv.style.display) {
            detailsDiv.style.display = 'block';
        } else {
            detailsDiv.style.display = 'none';
        }
    }
}

window.showTransactionDetails = showTransactionDetails;



/**
 * Toggle filters row inside toolbar
 */
function toggleFiltersRow() {
    const filtersRow = document.getElementById('filtersRow');
    const icon = document.getElementById('filterToggleIcon');
    const btn = document.getElementById('filtersToggleBtn');
    
    if (filtersRow && icon && btn) {
        if (filtersRow.style.display === 'none') {
            filtersRow.style.display = 'flex';
            icon.textContent = '▲';
            btn.style.background = '#667eea';
            btn.style.color = 'white';
        } else {
            filtersRow.style.display = 'none';
            icon.textContent = '▼';
            btn.style.background = 'white';
            btn.style.color = '#333';
        }
    }
}


/**
 * Toggle Bank Config from toolbar with arrow indicator
 */
let bankConfigOpen = false;

function toggleBankConfigFromToolbar() {
    const section = document.getElementById('bankConfigSection');
    const btn = document.querySelector('.toolbar-btn[onclick*="toggleBankConfig"]');
    
    bankConfigOpen = !bankConfigOpen;
    
    if (section && btn) {
        if (bankConfigOpen) {
            // Afficher
            section.style.display = 'block';
            btn.innerHTML = '🏦 <span data-translate="bankAccountsConfig">Bank Accounts</span> ▲';
            btn.style.background = '#667eea';
            btn.style.color = 'white';
            updateCredentialsStatus();
        } else {
            // Cacher
            section.style.display = 'none';
            btn.innerHTML = '🏦 <span data-translate="bankAccountsConfig">Bank Accounts</span> ▼';
            btn.style.background = 'white';
            btn.style.color = '#333';
        }
    }
}

/**
 * Check if credentials exist every 30 seconds
 */
let lastCredentialsCheck = {
    max: false,
    isracard: false
};

async function monitorCredentials() {
    if (!window.currentUser || !db) return;
    
    try {
        const userDoc = await db.collection('users').doc(window.currentUser.uid).get();
        
        if (userDoc.exists) {
            const hasMax = !!userDoc.data().maxCredentials;
            const hasIsracard = !!userDoc.data().isracardCredentials;
            
            // Détection de suppression Max
            if (lastCredentialsCheck.max && !hasMax) {
                alert('⚠️ WARNING: Max credentials have been deleted!');
                console.error('Max credentials disappeared!', new Date());
            }
            
            // Détection de suppression Isracard
            if (lastCredentialsCheck.isracard && !hasIsracard) {
                alert('⚠️ WARNING: Isracard credentials have been deleted!');
                console.error('Isracard credentials disappeared!', new Date());
            }
            
            lastCredentialsCheck.max = hasMax;
            lastCredentialsCheck.isracard = hasIsracard;
        }
    } catch (error) {
        console.error('Error monitoring credentials:', error);
    }
}

// Vérifier toutes les 30 secondes
setInterval(monitorCredentials, 30000);

// Première vérification au chargement
setTimeout(monitorCredentials, 5000);


/**
 * Count similar transactions
 */
function countSimilarTransactions(description) {
    const cleanDesc = description.toLowerCase();
    return transactionsData.filter(txn => 
        txn.description.toLowerCase() === cleanDesc
    ).length;
}
