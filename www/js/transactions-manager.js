// transactions-manager.js
// Manages all transactions functionality (Max scraping, labeling, etc.)

// Global state for transactions
let transactionsData = [];
let filteredTransactionsData = [];
let transactionsFunctions = null;
// Ajoute cette ligne après la ligne 7 (après transactionsFunctions = null;)
let currentSortOrder = 'date-desc'; // 'date-desc', 'date-asc', 'amount-desc', 'amount-asc', 'frequency-desc', 'frequency-asc'
let transactionLimit = 2000; // Nombre de transactions à afficher
let importedCSVs = []; // Liste des CSV importés
/**
 * Initialize transactions system
 * Called after Firebase is initialized
 */
function initTransactions() {
    if (typeof firebase !== 'undefined' && firebase.functions) {
        transactionsFunctions = firebase.functions();
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
    
    // ✅ AJOUTÉ : Appliquer les traductions dès le début
    if (typeof updateTransactionsLanguage === 'function') {
        updateTransactionsLanguage();
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
            // Load transaction limit preference
            if (userDoc.data().transactionLimit) {
                transactionLimit = userDoc.data().transactionLimit;
                const limitFilter = document.getElementById('limitFilter');
                if (limitFilter) {
                    limitFilter.value = transactionLimit.toString();
                }
            }
            
            // ✅ MODIFIÉ : Récupérer les traductions
            const t = translations[currentLanguage] || translations['en'];
            
            // Update Max credentials status
            const maxAlertEl = document.getElementById('maxCredentialsAlert');
            if (userDoc.data().maxCredentials && userDoc.data().maxCredentials.encrypted) {
                if (maxAlertEl) {
                    maxAlertEl.innerHTML = `<span data-translate="credentialsConfigured">${t.credentialsConfigured}</span>`;
                    maxAlertEl.className = 'alert-trans alert-success-trans';
                }
            } else {
                if (maxAlertEl) {
                    maxAlertEl.innerHTML = `<span data-translate="configureCredentials">${t.configureCredentials}</span>`;
                    maxAlertEl.className = 'alert-trans alert-info-trans';
                }
            }
            
            // Check Isracard credentials
            const isracardAlertEl = document.getElementById('isracardCredentialsAlert');
            if (userDoc.data().isracardCredentials && userDoc.data().isracardCredentials.encrypted) {
                if (isracardAlertEl) {
                    isracardAlertEl.innerHTML = `<span data-translate="credentialsConfigured">${t.credentialsConfigured}</span>`;
                    isracardAlertEl.className = 'alert-trans alert-success-trans';
                }
            } else {
                if (isracardAlertEl) {
                    isracardAlertEl.innerHTML = `<span data-translate="configureCredentials">${t.configureCredentials}</span>`;
                    isracardAlertEl.className = 'alert-trans alert-info-trans';
                }
            }

            // ✅ Force refresh des traductions APRÈS avoir modifié le HTML
            setTimeout(() => {
                if (typeof updateTransactionsLanguage === 'function') {
                    updateTransactionsLanguage();
                }
            }, 100);
            
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
        
        // Load transactions from Cloud Function (Max/Isracard)
        const getTransactions = transactionsFunctions.httpsCallable('getTransactions');
        const result = await getTransactions({ limit: 2000 });
        
        let bankTransactions = result.data.transactions || [];
        // Filter out excluded transactions
        bankTransactions = bankTransactions.filter(txn => !txn.excluded);
        
        // ✅ NOUVEAU : Load manual transactions from Firestore
        let manualTransactions = [];
        const manualSnapshot = await db.collection('transactions')
            .where('userId', '==', window.currentUser.uid)
            .where('isManual', '==', true)
            .get();
        
        manualSnapshot.forEach(doc => {
            const data = doc.data();
            manualTransactions.push({
                id: doc.id,
                ...data
            });
        });
        
        console.log(`Loaded ${bankTransactions.length} bank transactions and ${manualTransactions.length} manual transactions`);
        
        // ✅ NOUVEAU : Combiner les deux sources
        transactionsData = [...bankTransactions, ...manualTransactions];
        
        // Populate filters
        populateMonthFilter();
        populateCategoryFilter();
        populateSourceFilter();
        
        // ✅ NOUVEAU : Charger les filtres sauvegardés
        if (userDoc.exists && userDoc.data().transactionFilters) {
            const savedFilters = userDoc.data().transactionFilters;
            
            // Label filter (radio buttons)
            if (savedFilters.labelFilter) {
                const radio = document.querySelector(`input[name="labelFilter"][value="${savedFilters.labelFilter}"]`);
                if (radio) radio.checked = true;
            }
            
            // Month filter
            const monthSelect = document.getElementById('monthFilter');
            if (monthSelect && savedFilters.monthFilter) {
                monthSelect.value = savedFilters.monthFilter;
            }
            
            // Source filter
            const sourceSelect = document.getElementById('sourceFilter');
            if (sourceSelect && savedFilters.sourceFilter) {
                sourceSelect.value = savedFilters.sourceFilter;
            }
            
            // Category filter
            const categorySelect = document.getElementById('categoryFilter');
            if (categorySelect && savedFilters.categoryFilter) {
                categorySelect.value = savedFilters.categoryFilter;
            }
            
            // Search filter
            const searchInput = document.getElementById('searchFilter');
            if (searchInput && savedFilters.searchFilter) {
                searchInput.value = savedFilters.searchFilter;
            }
        }
        
        // Apply filters and render
        applyFilters();
        
        // Hide loading
        if (transactionsLoading) transactionsLoading.style.display = 'none';
        if (filtersSection) filtersSection.style.display = 'block';
        
    } catch (error) {
        console.error('Error loading transactions:', error);
        const t = translations[currentLanguage] || translations['en'];
        showToast(t.errorLoadingTransactions + ' ' + error.message, 'error');
        
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
    const t = translations[currentLanguage] || translations['en'];
    monthFilter.innerHTML = `<option value="" data-translate="allMonths">${t.allMonths}</option>`;
    sortedMonths.forEach(monthKey => {
        const [year, month] = monthKey.split('-');
        const date = new Date(year, month - 1);
        const monthNames = [
            t.january, t.february, t.march, t.april, t.may, t.june,
            t.july, t.august, t.september, t.october, t.november, t.december
        ];
        const monthName = `${monthNames[date.getMonth()]} ${date.getFullYear()}`;
        
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
    const t = translations[currentLanguage] || translations['en'];
    categoryFilter.innerHTML = `<option value="" data-translate="allCategories">${t.allCategories}</option>`;
    categories.forEach(cat => {
        const option = document.createElement('option');
        option.value = cat;
        option.textContent = `${getCategoryEmoji(cat)} ${getCategoryDisplayName(cat)}`;
        categoryFilter.appendChild(option);
    });
}


/**
 * Populate source filter with available sources
 */
function populateSourceFilter() {
    const sourceFilter = document.getElementById('sourceFilter');
    if (!sourceFilter) return;
    
    // Get unique bank names from CSV transactions
    const csvBanks = new Set();
    transactionsData.forEach(txn => {
        if (txn.source === 'csv' && txn.bankName) {
            csvBanks.add(txn.bankName);
        }
    });
    
    // Clear existing options except the first 3 (All, Max, Isracard)
    while (sourceFilter.options.length > 3) {
        sourceFilter.remove(3);
    }
    
    // Add CSV banks
    csvBanks.forEach(bankName => {
        const option = document.createElement('option');
        option.value = `csv:${bankName}`;
        option.textContent = `🏦 ${bankName}`;
        sourceFilter.appendChild(option);
    });
}

/**
 * Apply filters and sorting, then render transactions
 */
async function applyFilters() {
    // Get filter values
    const labelFilter = document.querySelector('input[name="labelFilter"]:checked')?.value || 'all';
    const monthFilter = document.getElementById('monthFilter')?.value || '';
    const sourceFilter = document.getElementById('sourceFilter')?.value || '';
    const categoryFilter = document.getElementById('categoryFilter')?.value || '';
    const searchFilter = document.getElementById('searchFilter')?.value.toLowerCase() || '';
    
    // ✅ NOUVEAU : Sauvegarder les filtres dans Firebase
    if (window.currentUser && db) {
        try {
            await db.collection('users').doc(window.currentUser.uid).set({
                transactionFilters: {
                    labelFilter: labelFilter,
                    monthFilter: monthFilter,
                    sourceFilter: sourceFilter,
                    categoryFilter: categoryFilter,
                    searchFilter: searchFilter
                }
            }, { merge: true });
        } catch (error) {
            console.error('Error saving filters:', error);
        }
    }
    
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
        
        // Filter by source
        if (sourceFilter) {
            // Si c'est un CSV spécifique (filtre par bankName)
            if (sourceFilter.startsWith('csv:')) {
                const bankName = sourceFilter.replace('csv:', '');
                if (txn.source !== 'csv' || txn.bankName !== bankName) {
                    return false;
                }
            }
            // Si c'est max ou isracard
            else if (txn.source !== sourceFilter) {
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
    
    // Apply sorting
    sortTransactions();
    renderTransactions();
}


/**
 * Sort filtered transactions based on current sort order
 */
function sortTransactions() {
    switch(currentSortOrder) {
        case 'date-desc':
            // Most recent first (default)
            filteredTransactionsData.sort((a, b) => new Date(b.date) - new Date(a.date));
            break;
            
        case 'date-asc':
            // Oldest first
            filteredTransactionsData.sort((a, b) => new Date(a.date) - new Date(b.date));
            break;
            
        case 'amount-desc':
            // Highest amount first
            filteredTransactionsData.sort((a, b) => Math.abs(b.chargedAmount) - Math.abs(a.chargedAmount));
            break;
            
        case 'amount-asc':
            // Lowest amount first
            filteredTransactionsData.sort((a, b) => Math.abs(a.chargedAmount) - Math.abs(b.chargedAmount));
            break;
            
        case 'frequency-desc':
            // Most frequent first
            filteredTransactionsData.sort((a, b) => {
                const freqA = getTransactionFrequency(a.description);
                const freqB = getTransactionFrequency(b.description);
                return freqB - freqA;
            });
            break;
            
        case 'frequency-asc':
            // Least frequent first (unique transactions)
            filteredTransactionsData.sort((a, b) => {
                const freqA = getTransactionFrequency(a.description);
                const freqB = getTransactionFrequency(b.description);
                return freqA - freqB;
            });
            break;
    }
}


// ✅ AJOUTE ICI LES DEUX FONCTIONS
/**
 * Change sort order and reapply filters
 */
function changeSortOrder(sortOrder) {
    currentSortOrder = sortOrder;
    applyFilters();
}

/**
 * Change transaction limit and save to Firebase
 */
async function changeTransactionLimit(limit) {
    transactionLimit = parseInt(limit);
    
    // Save to Firebase
    if (window.currentUser && db) {
        try {
            await db.collection('users').doc(window.currentUser.uid).set({
                transactionLimit: transactionLimit
            }, { merge: true });
            console.log('Transaction limit saved:', transactionLimit);
        } catch (error) {
            console.error('Error saving transaction limit:', error);
        }
    }
    
    applyFilters();
}


/**
 * Change sort order and reapply filters
 */
function changeSortOrder(sortOrder) {
    currentSortOrder = sortOrder;
    applyFilters();
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
    
    // ✅ MODIFIÉ : Calculer le total par devise
    const totalsByCurrency = {};
    filteredTransactionsData.forEach(txn => {
        // Ignorer les montants positifs (revenus/remboursements)
        if (txn.chargedAmount < 0) {
            let currency = txn.currency || window.currency || '₪';
            
            // ✅ NOUVEAU : Normaliser les devises vers leurs symboles
            if (currency === 'ILS') currency = '₪';
            if (currency === 'EUR') currency = '€';
            if (currency === 'USD') currency = '$';
            if (currency === 'GBP') currency = '£';
            
            if (!totalsByCurrency[currency]) {
                totalsByCurrency[currency] = 0;
            }
            totalsByCurrency[currency] += Math.abs(txn.chargedAmount);
        }
    });
    
    // ✅ MODIFIÉ : Afficher tous les totaux
    const transactionTotal = document.getElementById('transactionTotal');
    if (transactionTotal) {
        // Trier les devises : devise principale d'abord, puis les autres par ordre alphabétique
        const mainCurrency = window.currency || '₪';
        const currencies = Object.keys(totalsByCurrency).sort((a, b) => {
            if (a === mainCurrency) return -1;
            if (b === mainCurrency) return 1;
            return a.localeCompare(b);
        });
        
        if (currencies.length === 0) {
            transactionTotal.textContent = `${mainCurrency}0.00`;
        } else {
            const totalsText = currencies.map(curr => {
                return `<span style="color: white; font-weight: 600;">${curr}${totalsByCurrency[curr].toFixed(2)}</span>`;
            }).join(' <span style="color: white; opacity: 0.5;">|</span> ');
            
            transactionTotal.innerHTML = totalsText;
        }
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
            // Limiter le nombre de transactions affichées
            const transactionsToShow = filteredTransactionsData.slice(0, transactionLimit);
            const hiddenCount = filteredTransactionsData.length - transactionsToShow.length;
            
            allTransactionsList.innerHTML = transactionsToShow
                .map(txn => renderTransaction(txn))
                .join('');
            
            // Message si des transactions sont cachées
            if (hiddenCount > 0) {
                const limitMessage = document.createElement('div');
                limitMessage.style.cssText = 'text-align: center; padding: 20px; color: #6c757d; font-size: 0.9em;';
                const t = translations[currentLanguage] || translations['en'];
                const showingText = t.showingTransactions
                    .replace('{shown}', transactionsToShow.length)
                    .replace('{total}', filteredTransactionsData.length);
                const moreHiddenText = t.moreHidden.replace('{count}', hiddenCount);
                
                limitMessage.innerHTML = `
                    ${showingText}<br>
                    <span style="font-size: 0.85em;">${moreHiddenText}</span>
                `;
                allTransactionsList.appendChild(limitMessage);
            }
        }
    }
    // Apply translations to dynamically created content
    setTimeout(() => {
        if (typeof updateTransactionsLanguage === 'function') {
            updateTransactionsLanguage();
        }
    }, 100);
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
    const t = translations[currentLanguage] || translations['en'];
    
    // ✅ NOUVEAU : Déterminer la devise et la couleur
    let txnCurrency = txn.currency || window.currency || '₪';
    
    // ✅ AJOUTÉ : Normaliser les devises vers leurs symboles
    if (txnCurrency === 'ILS') txnCurrency = '₪';
    if (txnCurrency === 'EUR') txnCurrency = '€';
    if (txnCurrency === 'USD') txnCurrency = '$';
    if (txnCurrency === 'GBP') txnCurrency = '£';
    
    const isDifferentCurrency = txnCurrency !== (window.currency || '₪');
    const amountColor = isDifferentCurrency ? '#9333ea' : '#667eea'; // Violet si devise différente, bleu sinon

    // ✅ AJOUTÉ : Couleur différente pour transactions manuelles
    const descColor = txn.isManual ? '#ff6b6b' : 'inherit';
    const manualBadge = txn.isManual ? ' <span style="background: #ff6b6b; color: white; padding: 2px 6px; border-radius: 4px; font-size: 0.7em; margin-left: 5px;">MANUAL</span>' : '';
    
    return `
        <div class="transaction-item" style="display: block; padding: 15px;">
            <!-- Top row: Date, Description, Amount -->
            <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 10px;">
                <div style="flex: 1; min-width: 0;">
                    <div class="transaction-date" style="font-size: 0.85em; color: #6c757d; margin-bottom: 4px;">
                        ${date}
                    </div>
                    <div class="transaction-desc" style="font-weight: 500; overflow: hidden; text-overflow: ellipsis; cursor: pointer; color: ${descColor};" onclick="showTransactionDetails('${txnId}')">
                        ${escapeHtml(txn.description)}${manualBadge} <span style="font-size: 0.75em; opacity: 0.7;">▼</span>
                    </div>
                    
                    <!-- Expandable details -->
                    <div id="details-${txnId}" class="transaction-details" style="display: none; margin-top: 10px; padding: 10px; background: #f8f9fa; border-radius: 8px; font-size: 0.9em;">
                        
                        
                        <div style="margin-bottom: 5px; display: flex; align-items: center; gap: 8px;">
                            <div style="flex: 1;">
                                <strong>${t.fullName || 'Full name'}:</strong> 
                                <span id="txn-name-${txnId}" style="user-select: all;">
                                    ${escapeHtml(txn.description)}
                                </span>
                            </div>
                            <button
                                onclick="copyTransactionName('${txnId}'); event.stopPropagation();"
                                data-description="${escapeHtml(txn.description).replace(/"/g, '&quot;')}"
                                style="padding: 4px 10px; background: #667eea; color: white; border: none; border-radius: 6px; cursor: pointer; font-size: 0.8em; white-space: nowrap; font-weight: 500; min-width: 70px;"
                                id="copy-btn-${txnId}"
                            >
                                <span data-translate="copy">Copy</span>
                            </button>
                        </div>
                        ${txn.memo ? `<div style="margin-bottom: 5px;"><strong>${t.memo || 'Memo'}:</strong> ${escapeHtml(txn.memo)}</div>` : ''}
                        <div style="margin-bottom: 5px;"><strong>${t.amount || 'Amount'}:</strong> <span style="color: ${amountColor};">${txnCurrency}${Math.abs(txn.chargedAmount).toFixed(2)}</span></div>
                        <div style="color: #667eea; font-weight: 600;"><strong>${t.similarTransactions || 'Similar transactions'}:</strong> ${countSimilarTransactions(txn.description)}</div>
                        <div style="margin-top: 10px; padding-top: 10px; border-top: 1px solid #dee2e6;">
                            <button 
                                class="btn btn-sm" 
                                style="background: #dc3545; color: white; padding: 6px 12px; border: none; border-radius: 6px; cursor: pointer; font-size: 0.85em;"
                                onclick="openExcludeModal('${txn.id}', '${escapeHtml(txn.description).replace(/'/g, "\\'")}'); event.stopPropagation();"
                            >
                                <span data-translate="exclude">Exclude</span>
                            </button>
                        </div>
                    </div>
                </div>
                <div class="transaction-amount" style="font-size: 1.1em; font-weight: 600; color: ${amountColor}; white-space: nowrap; margin-left: 15px;">
                    ${txnCurrency}${Math.abs(txn.chargedAmount).toFixed(2)}
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
                        <option value="" data-translate="selectCategory">Select category</option>
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
 * Toggle Bank Synchronization section
 */
function toggleBankSync() {
    const content = document.getElementById('bankSyncContent');
    const toggle = document.getElementById('bankSyncToggle');
    
    if (content && toggle) {
        if (content.style.display === 'none') {
            content.style.display = 'block';
            toggle.textContent = '▼';
        } else {
            content.style.display = 'none';
            toggle.textContent = '▶';
        }
    }
}

/**
 * Open Add Manual Transaction Modal
 */
function openAddManualTransactionModal() {
    if (typeof closeAllModals === 'function') closeAllModals(); // ✅ AJOUTER
    const modal = document.getElementById('addManualTransactionModal');
    if (!modal) return;
    
    // Reset form
    document.getElementById('manualTransactionForm').reset();
    
    // Set today's date as default
    const today = new Date().toISOString().split('T')[0];
    document.getElementById('manualTxnDate').value = today;
    
    // Set user's currency as default
    const userCurrency = window.currency || '₪';
    document.getElementById('manualTxnCurrency').value = userCurrency;
    
    // Populate categories
    populateManualTxnCategories();
    
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden'; // ✅ AJOUTÉ

}

/**
 * Close Add Manual Transaction Modal
 */
function closeAddManualTransactionModal() {
    const modal = document.getElementById('addManualTransactionModal');
    if (modal) {
        modal.style.display = 'none';
        document.body.style.overflow = ''; // ✅ AJOUTÉ
    }
}

/**
 * Populate categories dropdown in manual transaction modal
 */
function populateManualTxnCategories() {
    const select = document.getElementById('manualTxnCategory');
    if (!select) return;
    
    // Get categories from Budget tab
    const categorySections = document.querySelectorAll('.category-section[id^="category-"]');
    const categories = Array.from(categorySections)
        .map(section => section.id.replace('category-', ''))
        .filter(c => c !== 'income' && document.getElementById(`category-${c}`).style.display !== 'none');
    
    // Clear existing options except first one
    while (select.options.length > 1) {
        select.remove(1);
    }
    
    // Add category options
    categories.forEach(cat => {
        const option = document.createElement('option');
        option.value = cat;
        option.textContent = `${getCategoryEmoji(cat)} ${getCategoryDisplayName(cat)}`;
        select.appendChild(option);
    });
}

/**
 * Save manual transaction
 */
async function saveManualTransaction(event) {
    event.preventDefault();
    
    const name = document.getElementById('manualTxnName').value.trim();
    const date = document.getElementById('manualTxnDate').value;
    const amount = parseFloat(document.getElementById('manualTxnAmount').value);
    const currency = document.getElementById('manualTxnCurrency').value;
    const memo = document.getElementById('manualTxnMemo').value.trim();
    const bankName = document.getElementById('manualTxnBankName').value.trim(); // ✅ AJOUTÉ
    const category = document.getElementById('manualTxnCategory').value;
    
    if (!name || !date || !amount) {
        alert('Please fill in all required fields');
        return;
    }
    
    try {
        // Show loading overlay
        const overlay = document.getElementById('loadingOverlay');
        const textEl = document.getElementById('loadingOverlayText');
        const subtextEl = document.getElementById('loadingOverlaySubtext');
        const t = translations[currentLanguage] || translations['en'];
        
        if (overlay) {
            if (textEl) textEl.textContent = t.addingTransaction || 'Adding transaction...';
            if (subtextEl) subtextEl.textContent = t.pleaseWait || 'Please wait';
            overlay.classList.add('active');
            document.body.style.overflow = 'hidden';
        }
        
        // Create transaction object
        const transaction = {
            description: name,
            date: date,
            chargedAmount: -Math.abs(amount), // Negative for expense
            currency: currency,
            memo: memo || '',
            bankName: bankName || 'Manual',
            source: 'manual',
            isManual: true,
            isLabeled: category ? true : false,
            category: category || null,
            createdAt: firebase.firestore.FieldValue.serverTimestamp()
        };

        // ✅ Save to user's subcollection (consistent with other transactions)
        const docRef = await db.collection('users')
            .doc(window.currentUser.uid)
            .collection('transactions')
            .doc(); // Create new doc with auto-generated ID

        // Add the document ID to the transaction
        await docRef.set({
            ...transaction,
            id: docRef.id // Use Firestore auto-generated ID
        });

        console.log('Manual transaction added:', { id: docRef.id, ...transaction });
        
        // Close modal
        closeAddManualTransactionModal();
        
        // Hide loading overlay
        if (overlay) {
            overlay.classList.remove('active');
            document.body.style.overflow = '';
        }
        
        // Show success toast
        showToast(t.transactionAdded || 'Transaction added successfully!', 'success');
        
        // Reload transactions
        await loadTransactions();
        
    } catch (error) {
        // Hide loading overlay
        const overlay = document.getElementById('loadingOverlay');
        if (overlay) {
            overlay.classList.remove('active');
            document.body.style.overflow = '';
        }
        
        console.error('Error adding manual transaction:', error);
        alert('Error adding transaction: ' + error.message);
    }
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
 * Show toast notification (replacement for showTransactionAlert)
 */
function showToast(message, type = 'info', duration = 3000) {
    const container = document.getElementById('toastContainer');
    if (!container) {
        console.warn('Toast container not found');
        return;
    }
    
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    
    const icons = {
        success: '✓',
        error: '✕',
        info: 'ℹ'
    };
    
    toast.innerHTML = `
        <div class="toast-icon">${icons[type] || 'ℹ'}</div>
        <div class="toast-message">${message}</div>
    `;
    
    container.appendChild(toast);
    
    // Auto-remove after duration
    setTimeout(() => {
        toast.classList.add('removing');
        setTimeout(() => {
            toast.remove();
        }, 300); // Wait for animation
    }, duration);
}

/**
 * Update showTransactionAlert to use toast instead
 */
function showTransactionAlert(message, type = 'info') {
    showToast(message, type, 3000);
}

/**
 * Show loading overlay
 */
function showLoadingOverlay(text = 'Processing...', subtext = 'Please wait') {
    const overlay = document.getElementById('loadingOverlay');
    const textEl = document.getElementById('loadingOverlayText');
    const subtextEl = document.getElementById('loadingOverlaySubtext');
    
    if (overlay) {
        if (textEl) textEl.textContent = text;
        if (subtextEl) subtextEl.textContent = subtext;
        overlay.classList.add('active');
        document.body.style.overflow = 'hidden'; // Disable scroll
    }
}

/**
 * Hide loading overlay
 */
function hideLoadingOverlay() {
    const overlay = document.getElementById('loadingOverlay');
    if (overlay) {
        overlay.classList.remove('active');
        document.body.style.overflow = ''; // Re-enable scroll
    }
}

/**
 * Copy transaction name to clipboard
 */
function copyTransactionName(txnId) {
    const t = translations[currentLanguage] || translations['en'];
    const btn = document.getElementById(`copy-btn-${txnId}`);
    const text = btn.getAttribute('data-description');
    const originalText = btn.textContent;
    
    if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text).then(() => {
            btn.textContent = t.copied || 'Copied!';
            btn.style.background = '#28a745';
            setTimeout(() => {
                btn.textContent = originalText;
                btn.style.background = '#667eea';
            }, 2000);
        }).catch(err => {
            fallbackCopyToClipboard(text, btn, originalText);
        });
    } else {
        fallbackCopyToClipboard(text, btn, originalText);
    }
}

function fallbackCopyToClipboard(text, btn, originalText) {
    const t = translations[currentLanguage] || translations['en'];
    const textArea = document.createElement("textarea");
    textArea.value = text;
    textArea.style.position = "fixed";
    textArea.style.left = "-999999px";
    document.body.appendChild(textArea);
    textArea.select();
    try {
        document.execCommand('copy');
        btn.textContent = t.copied || 'Copied!';
        btn.style.background = '#28a745';
        setTimeout(() => {
            btn.textContent = originalText;
            btn.style.background = '#667eea';
        }, 2000);
    } catch (err) {
        showToast('Failed to copy', 'error');
    }
    document.body.removeChild(textArea);
}

/**
 * Check if user is allowed to use bank scraping
 */
async function checkBankScrapingPermission() {
    const user = firebase.auth().currentUser;
    
    if (!user) {
        console.error('No user logged in');
        return false;
    }
    
    try {
        const userDoc = await firebase.firestore()
            .collection('users')
            .doc(user.uid)
            .get();
        
        const userData = userDoc.data();
        const canUseBankScraping = userData?.allowBankScraping || false;
        
        // Show/hide UI elements based on permission
        const bankSyncSection = document.getElementById('bankSyncSection');
        const notAllowedMessage = document.getElementById('bankSyncNotAllowed');
        
        if (canUseBankScraping) {
            // User is allowed - show bank sync section
            if (bankSyncSection) bankSyncSection.style.display = 'block';
            if (notAllowedMessage) notAllowedMessage.style.display = 'none';
        } else {
            // User is NOT allowed - hide bank sync section and show message
            if (bankSyncSection) bankSyncSection.style.display = 'none';
            if (notAllowedMessage) notAllowedMessage.style.display = 'block';
        }
        
        return canUseBankScraping;
        
    } catch (error) {
        console.error('Error checking bank scraping permission:', error);
        return false;
    }
}

/**
 * Open bank accounts modal with permission check
 */
async function openBankAccountsModal() {
    if (typeof closeAllModals === 'function') closeAllModals(); // ✅ AJOUTER

    // Check permissions first
    await checkBankScrapingPermission();
       
    const modal = document.getElementById('bankAccountsModal');
    if (modal) {
        modal.style.display = 'block';
        
        // Désactiver le scroll
        document.body.style.overflow = 'hidden';
        
        // Update credentials status
        updateCredentialsStatusInModal();
        
        // Update sync status
        updateSyncStatusInModal();
        
        // Load imported CSVs list
        loadImportedCSVsList();
        
        // Apply translations
        if (typeof updateTransactionsLanguage === 'function') {
            updateTransactionsLanguage();
        }
    }
}

/**
 * Close Bank Accounts Modal
 */
function closeBankAccountsModal() {
    const modal = document.getElementById('bankAccountsModal');
    if (modal) {
        modal.style.display = 'none';
        
        // ✅ AJOUTE CETTE LIGNE - Réactiver le scroll
        document.body.style.overflow = '';
    }
}

/**
 * Update credentials status in modal
 */
async function updateCredentialsStatusInModal() {
    if (!window.currentUser) return;
    
    try {
        const userDoc = await db.collection('users').doc(window.currentUser.uid).get();
        
        if (userDoc.exists) {
            const data = userDoc.data();
            
            // Max credentials
            const maxAlert = document.getElementById('maxCredentialsAlertModal');
            if (maxAlert) {
                if (data.maxCredentials && data.maxCredentials.encrypted) {
                    maxAlert.innerHTML = '<span data-translate="credentialsConfigured">Credentials configured ✓</span>';
                    maxAlert.className = 'alert-trans alert-success-trans';
                } else {
                    maxAlert.innerHTML = '<span data-translate="configureCredentials">Configure your Max credentials to sync transactions.</span>';
                    maxAlert.className = 'alert-trans alert-info-trans';
                }
            }
            
            // Isracard credentials
            const t = translations[currentLanguage] || translations['en'];
            const isracardAlert = document.getElementById('isracardCredentialsAlertModal');
            if (isracardAlert) {
                if (data.isracardCredentials && data.isracardCredentials.encrypted) {
                    isracardAlert.innerHTML = `<span data-translate="credentialsConfigured">${t.credentialsConfigured}</span>`;
                    isracardAlert.className = 'alert-trans alert-success-trans';
                } else {
                    isracardAlert.innerHTML = `<span data-translate="configureCredentials">${t.configureCredentials}</span>`;
                    isracardAlert.className = 'alert-trans alert-info-trans';
                }
            }
        }
    } catch (error) {
        console.error('Error updating credentials status:', error);
    }
}

/**
 * Update sync status in modal
 */
async function updateSyncStatusInModal() {
    if (!window.currentUser) return;
    
    try {
        const userDoc = await db.collection('users').doc(window.currentUser.uid).get();
        
        if (userDoc.exists) {
            const data = userDoc.data();
            
            // Max sync status
            if (data.lastMaxSync) {
                const lastSync = data.lastMaxSync.toDate();
                const count = data.lastMaxSyncTransactionCount;
                const timeText = getTimeAgoText(lastSync);
                
                const timeEl = document.getElementById('lastMaxSyncTimeModal');
                const countEl = document.getElementById('lastMaxSyncCountModal');
                if (timeEl) timeEl.textContent = timeText;
                if (countEl) countEl.textContent = count ? `(${count} transactions)` : '';
            }
            
            // Isracard sync status
            if (data.lastIsracardSync) {
                const lastSync = data.lastIsracardSync.toDate();
                const count = data.lastIsracardSyncTransactionCount;
                const timeText = getTimeAgoText(lastSync);
                
                const timeEl = document.getElementById('lastIsracardSyncTimeModal');
                const countEl = document.getElementById('lastIsracardSyncCountModal');
                if (timeEl) timeEl.textContent = timeText;
                if (countEl) countEl.textContent = count ? `(${count} transactions)` : '';
            }
        }
    } catch (error) {
        console.error('Error updating sync status:', error);
    }
}

/**
 * Get time ago text (translated)
 */
function getTimeAgoText(date) {
    const t = translations[currentLanguage] || translations['en'];
    const now = new Date();
    const diff = Math.floor((now - date) / (1000 * 60));
    
    // Just now
    if (diff < 1) return t.justNow || 'Just now';
    
    // Minutes
    if (diff < 60) {
        if (currentLanguage === 'fr') {
            return `Il y a ${diff} ${t.minutes}`;
        } else if (currentLanguage === 'he') {
            return `לפני ${diff} ${t.minutes}`;
        } else if (currentLanguage === 'ar') {
            return `منذ ${diff} ${t.minutes}`;
        } else {
            return `${diff} ${t.minutes} ${t.ago}`;
        }
    }
    
    // Hours
    const hours = Math.floor(diff / 60);
    if (hours < 24) {
        if (currentLanguage === 'fr') {
            return `Il y a ${hours} ${t.hours}`;
        } else if (currentLanguage === 'he') {
            return `לפני ${hours} ${t.hours}`;
        } else if (currentLanguage === 'ar') {
            return `منذ ${hours} ${t.hours}`;
        } else {
            return `${hours} ${t.hours} ${t.ago}`;
        }
    }
    
    // Days
    const days = Math.floor(hours / 24);
    if (currentLanguage === 'fr') {
        return `Il y a ${days} ${t.days}`;
    } else if (currentLanguage === 'he') {
        return `לפני ${days} ${t.days}`;
    } else if (currentLanguage === 'ar') {
        return `منذ ${days} ${t.days}`;
    } else {
        return `${days} ${t.days} ${t.ago}`;
    }
}

/**
 * Close modal when clicking outside
 */
window.addEventListener('click', (event) => {
    const modal = document.getElementById('bankAccountsModal');
    if (event.target === modal) {
        closeBankAccountsModal();
    }
});

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
        const t = translations[currentLanguage] || translations['en'];
        showToast(t.credentialsSaved, 'success');
        closeCredentialsModal();
        
        // Update alert
        const alertEl = document.getElementById(`${bankType}CredentialsAlert`);
        if (alertEl) {
            alertEl.innerHTML = '<span data-translate="credentialsConfigured">Credentials configured ✓</span>';
            alertEl.className = 'alert-trans alert-success-trans';
        }
    } catch (error) {
        console.error('Error saving credentials:', error);
        const t = translations[currentLanguage] || translations['en'];
        showToast(t.errorSavingCredentials + ' ' + error.message, 'error');
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
    const btnModal = document.getElementById('syncAllBtnModal'); // ✅ AJOUTÉ : bouton dans la modal
    const loading = document.getElementById('syncLoading');
    
    // ✅ AJOUTÉ : Show loading overlay
    const t = translations[currentLanguage] || translations['en'];
    showLoadingOverlay(t.syncingWithBanks || 'Syncing with banks...', t.thisMayTakeAMoment || 'This may take a moment');
    
    if (btn) btn.disabled = true;
    if (btnModal) btnModal.disabled = true; // ✅ AJOUTÉ
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
            const t = translations[currentLanguage] || translations['en'];
            showToast(t.syncCompleted.replace('{count}', totalTransactions), 'success');
            await loadTransactions();
        }
    } catch (error) {
        console.error('Error syncing:', error);
        showTransactionAlert('Error: ' + error.message, 'error');
    } finally {
        // ✅ AJOUTÉ : Always hide overlay
        hideLoadingOverlay();
        
        if (btn) btn.disabled = false;
        if (btnModal) btnModal.disabled = false; // ✅ AJOUTÉ
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
            const t = translations[currentLanguage] || translations['en'];
            showToast(t.autoLabelCompleted.replace('{count}', count), 'success');
        } else {
            const t = translations[currentLanguage] || translations['en'];
            showToast(t.noTransactionsToLabel || 'No transactions could be auto-labeled.', 'info');
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
        // Show loading overlay
        const t = translations[currentLanguage] || translations['en'];
        showLoadingOverlay(t.labelingTransaction || 'Labeling transaction...', t.checkingSimilar || 'Checking for similar transactions...');
        
        const labelTransactionFunc = transactionsFunctions.httpsCallable('labelTransaction');
        const result = await labelTransactionFunc({ transactionId, category });
        
        // Hide loading overlay
        hideLoadingOverlay();
        
        // Show smart message based on how many were labeled
        const similarCount = result.data.similarCount || 0;
        if (similarCount > 0) {
            const message = (t.labeledWithSimilar || 'Labeled 1 transaction + {count} similar ones! ✓').replace('{count}', similarCount);
            showTransactionAlert(message, 'success');
        } else {
            showTransactionAlert(t.transactionLabeled || 'Transaction labeled! ✓', 'success');
        }
        
        await loadTransactions();
    } catch (error) {
        hideLoadingOverlay();
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
        // Show loading overlay
        const t = translations[currentLanguage] || translations['en'];
        showLoadingOverlay(t.unlabelingTransaction || 'Removing label...', t.checkingSimilar || 'Checking for similar transactions...');
        
        const labelTransactionFunc = transactionsFunctions.httpsCallable('labelTransaction');
        await labelTransactionFunc({ transactionId, category: null });
        
        // Hide loading overlay
        hideLoadingOverlay();
        
        showTransactionAlert(t.labelRemoved || 'Label removed! ✓', 'success');
        await loadTransactions();
    } catch (error) {
        hideLoadingOverlay();
        console.error('Error removing label:', error);
        showTransactionAlert('Error: ' + error.message, 'error');
    }
}

// Store current transaction info for exclude modal
let currentExcludeTransactionId = null;
let currentExcludeTransactionName = null;

/**
 * Open exclude modal
 */
function openExcludeModal(transactionId, transactionName) {
    const t = translations[currentLanguage] || translations['en'];  // ← Cette ligne
    console.log('Opening exclude modal for:', transactionId, transactionName); // Debug
    currentExcludeTransactionId = transactionId;
    currentExcludeTransactionName = transactionName;
    
    const modal = document.getElementById('excludeModal');
    const nameEl = document.getElementById('excludeTransactionName');
    
    if (nameEl) {
        nameEl.textContent = transactionName;
    }
    
    if (modal) {
        modal.style.display = 'flex';
        document.body.style.overflow = 'hidden';
    }
    // Update translations
    const excludeAllBtn = document.getElementById('excludeAllSimilarText');
    if (excludeAllBtn) {
        excludeAllBtn.textContent = t.excludeAllSimilar || 'Exclude all similar transactions';
    }
}

/**
 * Close exclude modal
 */
function closeExcludeModal() {
    const modal = document.getElementById('excludeModal');
    if (modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
    currentExcludeTransactionId = null;
    currentExcludeTransactionName = null;
}

/**
 * Confirm exclusion from modal
 */
function confirmExclude(excludeSimilar) {
    console.log('Confirm exclude called with:', currentExcludeTransactionId, excludeSimilar);
    if (currentExcludeTransactionId && currentExcludeTransactionId.trim() !== '') {
        // Save the ID locally before closing modal
        const txnIdToExclude = currentExcludeTransactionId;
        
        // Close modal
        closeExcludeModal();
        
        // Now exclude with the saved ID
        excludeTransaction(txnIdToExclude, excludeSimilar);
    } else {
        console.error('No transaction ID to exclude');
        showToast('Error: No transaction selected', 'error');
    }
}

/**
 * Exclude a transaction or all similar ones
 */
async function excludeTransaction(transactionId, excludeSimilar) {
    console.log('excludeTransaction called with:', transactionId, excludeSimilar);
    
    if (!window.currentUser || !window.currentUser.uid) {
        console.error('No current user!');
        showToast('Error: User not authenticated', 'error');
        return;
    }
    
    if (!transactionId || transactionId.trim() === '') {
        console.error('No transaction ID!');
        showToast('Error: No transaction ID', 'error');
        return;
    }
    
    const t = translations[currentLanguage] || translations['en'];
    
    const confirmMessage = excludeSimilar ? 
        (t.confirmExcludeAllSimilar || 'Exclude all similar transactions? They will be hidden from the list.') : 
        (t.confirmExclude || 'Exclude this transaction? It will be hidden from the list.');
    
    if (!confirm(confirmMessage)) {
        return;
    }
    
    try {
        showLoadingOverlay(t.excluding || 'Excluding...', t.pleaseWait || 'Please wait');
        
        const txnRef = db.collection('users').doc(window.currentUser.uid).collection('transactions').doc(transactionId);
        const txnDoc = await txnRef.get();
        
        if (!txnDoc.exists) {
            throw new Error('Transaction not found');
        }
        
        const txnData = txnDoc.data();
        
        if (excludeSimilar) {
            // Exclude all similar transactions based on description
            const allTxnsSnapshot = await db.collection('users')
                .doc(window.currentUser.uid)
                .collection('transactions')
                .get();
            
            const batch = db.batch();
            let count = 0;
            
            allTxnsSnapshot.forEach(doc => {
                const data = doc.data();
                // Check if descriptions match (case insensitive)
                if (data.description && txnData.description && 
                    data.description.toLowerCase().trim() === txnData.description.toLowerCase().trim()) {
                    batch.update(doc.ref, { excluded: true });
                    count++;
                }
            });
            
            await batch.commit();
            hideLoadingOverlay();
            showTransactionAlert(t.excludedSimilarCount?.replace('{count}', count) || `Excluded ${count} similar transactions`, 'success');
        } else {
            // Exclude only this transaction
            await txnRef.update({ excluded: true });
            hideLoadingOverlay();
            showTransactionAlert(t.transactionExcluded || 'Transaction excluded ✓', 'success');
        }
        
        await loadTransactions();
    } catch (error) {
        hideLoadingOverlay();
        console.error('Error excluding transaction:', error);
        showTransactionAlert('Error: ' + error.message, 'error');
    }
}

/**
 * Open excluded transactions modal
 */
async function openExcludedTransactionsModal() {
    if (typeof closeAllModals === 'function') closeAllModals(); // ✅ AJOUTER

    const modal = document.getElementById('excludedTransactionsModal');
    const listEl = document.getElementById('excludedTransactionsList');
    const noExcludedEl = document.getElementById('noExcludedTransactions');
    
    if (modal) {
        modal.style.display = 'flex';
        document.body.style.overflow = 'hidden';
    }
    
    try {
        // Load excluded transactions
        const excludedSnapshot = await db.collection('users')
            .doc(currentUser.uid)
            .collection('transactions')
            .where('excluded', '==', true)
            .orderBy('date', 'desc')
            .get();
        
        const excludedTxns = excludedSnapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
        }));
        
        if (excludedTxns.length === 0) {
            if (listEl) listEl.innerHTML = '';
            if (noExcludedEl) noExcludedEl.style.display = 'block';
        } else {
            if (noExcludedEl) noExcludedEl.style.display = 'none';
            
            const t = translations[currentLanguage] || translations['en'];
            const html = excludedTxns.map(txn => {
                const date = txn.date ? new Date(txn.date).toLocaleDateString() : 'N/A';
                const amount = Math.abs(txn.chargedAmount || 0).toFixed(2);
                
                return `
                    <div style="padding: 12px; background: #f8f9fa; border-radius: 8px; margin-bottom: 10px; display: flex; justify-content: space-between; align-items: center;">
                        <div style="flex: 1;">
                            <div style="font-weight: 600; margin-bottom: 4px;">${escapeHtml(txn.description)}</div>
                            <div style="font-size: 0.85em; color: #6c757d;">${date} • ${window.currency || '₪'}${amount}</div>
                        </div>
                        <button 
                            onclick="restoreTransaction('${txn.id}')"
                            style="padding: 6px 12px; background: #28a745; color: white; border: none; border-radius: 6px; cursor: pointer; font-size: 0.85em; white-space: nowrap;"
                        >
                            ↩️ ${t.restore || 'Restore'}
                        </button>
                    </div>
                `;
            }).join('');
            
            if (listEl) listEl.innerHTML = html;
        }
        
    } catch (error) {
        console.error('Error loading excluded transactions:', error);
        showToast('Error loading excluded transactions', 'error');
    }
}

/**
 * Close excluded transactions modal
 */
function closeExcludedTransactionsModal() {
    const modal = document.getElementById('excludedTransactionsModal');
    if (modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
}

/**
 * Restore an excluded transaction
 */
async function restoreTransaction(transactionId) {
    const t = translations[currentLanguage] || translations['en'];
    const restoreSimilar = document.getElementById('restoreSimilarCheckbox')?.checked || false;
    
    try {
        showLoadingOverlay(t.restoring || 'Restoring...', t.pleaseWait || 'Please wait');
        
        if (restoreSimilar) {
            // Get the transaction to find similar ones
            const txnDoc = await db.collection('users')
                .doc(window.currentUser.uid)
                .collection('transactions')
                .doc(transactionId)
                .get();
            
            if (!txnDoc.exists) {
                throw new Error('Transaction not found');
            }
            
            const txnData = txnDoc.data();
            
            // Find and restore all similar excluded transactions
            const allTxnsSnapshot = await db.collection('users')
                .doc(window.currentUser.uid)
                .collection('transactions')
                .where('excluded', '==', true)
                .get();
            
            const batch = db.batch();
            let count = 0;
            
            allTxnsSnapshot.forEach(doc => {
                const data = doc.data();
                if (data.description && txnData.description && 
                    data.description.toLowerCase().trim() === txnData.description.toLowerCase().trim()) {
                    batch.update(doc.ref, { excluded: false });
                    count++;
                }
            });
            
            await batch.commit();
            hideLoadingOverlay();
            showToast(t.restoredSimilarCount?.replace('{count}', count) || `Restored ${count} similar transactions`, 'success');
        } else {
            // Restore only this transaction
            await db.collection('users')
                .doc(window.currentUser.uid)
                .collection('transactions')
                .doc(transactionId)
                .update({ excluded: false });
            
            hideLoadingOverlay();
            showToast(t.transactionRestored || 'Transaction restored ✓', 'success');
        }
        
        // Refresh excluded list
        await openExcludedTransactionsModal();
        
        // Refresh main transactions list
        await loadTransactions();
    } catch (error) {
        hideLoadingOverlay();
        console.error('Error restoring transaction:', error);
        showToast('Error: ' + error.message, 'error');
    }
}

/**
 * Restore all excluded transactions
 */
async function restoreAllTransactions() {
    const t = translations[currentLanguage] || translations['en'];
    
    if (!confirm(t.confirmRestoreAll || 'Restore all excluded transactions?')) {
        return;
    }
    
    try {
        showLoadingOverlay(t.restoringAll || 'Restoring all...', t.pleaseWait || 'Please wait');
        
        const excludedSnapshot = await db.collection('users')
            .doc(window.currentUser.uid)
            .collection('transactions')
            .where('excluded', '==', true)
            .get();
        
        const batch = db.batch();
        excludedSnapshot.forEach(doc => {
            batch.update(doc.ref, { excluded: false });
        });
        
        await batch.commit();
        hideLoadingOverlay();
        
        showToast(t.allTransactionsRestored || 'All transactions restored ✓', 'success');
        
        // Refresh
        await openExcludedTransactionsModal();
        await loadTransactions();
    } catch (error) {
        hideLoadingOverlay();
        console.error('Error restoring all:', error);
        showToast('Error: ' + error.message, 'error');
    }
}

// ============================================
// CSV IMPORT FUNCTIONALITY
// ============================================

/**
 * Trigger CSV file selection
 */
function triggerCSVUpload() {
    const bankNameInput = document.getElementById('csvBankName');
    const bankName = bankNameInput?.value.trim();
    
    const t = translations[currentLanguage] || translations['en'];
    if (!bankName) {
        showToast(t.enterBankNameFirst || 'Please enter a bank name first', 'error');
        return;
    }
    
    // Store bank name temporarily
    window.pendingCSVBankName = bankName;
    
    // Trigger file input
    document.getElementById('csvFileInput').click();
}

/**
 * Convert Excel file to CSV text
 */
async function convertExcelToCSV(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        
        reader.onload = function(e) {
            try {
                const data = new Uint8Array(e.target.result);
                const workbook = XLSX.read(data, { type: 'array' });
                
                // Get first sheet
                const firstSheetName = workbook.SheetNames[0];
                const worksheet = workbook.Sheets[firstSheetName];
                
                // Convert to CSV
                const csv = XLSX.utils.sheet_to_csv(worksheet);
                
                console.log(`✓ Converted Excel file: ${file.name}`);
                resolve(csv);
            } catch (error) {
                reject(new Error(`Failed to read Excel file: ${error.message}`));
            }
        };
        
        reader.onerror = function() {
            reject(new Error('Failed to read file'));
        };
        
        reader.readAsArrayBuffer(file);
    });
}


/**
 * Handle CSV/Excel file upload (supports multiple files)
 */
async function handleCSVUpload(event) {
    const files = event.target.files;
    if (!files || files.length === 0) return;
    
    const bankName = window.pendingCSVBankName;
    if (!bankName) {
        showToast('Bank name is required', 'error');
        return;
    }
    
    // ✅ Show loading overlay
    const t = translations[currentLanguage] || translations['en'];
    showLoadingOverlay(
        t.importingCSV || 'Importing files...', 
        `${t.processingTransactions || 'Processing transactions'} (0/${files.length})`
    );
    
    let totalImported = 0;
    let totalSkipped = 0;
    let errors = [];
    
    try {
        // Process each file
        for (let i = 0; i < files.length; i++) {
            const file = files[i];
            
            // Update loading overlay progress
            const subtextEl = document.getElementById('loadingOverlaySubtext');
            if (subtextEl) {
                subtextEl.textContent = `${t.processingTransactions || 'Processing transactions'} (${i + 1}/${files.length})`;
            }
            
            const isExcel = file.name.endsWith('.xlsx') || file.name.endsWith('.xls');
            const isCSV = file.name.endsWith('.csv');
            
            if (!isExcel && !isCSV) {
                errors.push(`${file.name}: Not a CSV or Excel file`);
                continue;
            }
            
            try {
                let csvText;
                
                if (isExcel) {
                    // Convert Excel to CSV
                    csvText = await convertExcelToCSV(file);
                } else {
                    // Read CSV directly
                    csvText = await file.text();
                }
                
                const transactions = parseCSV(csvText, file.name, bankName);
                
                if (transactions.length === 0) {
                    errors.push(`${file.name}: No valid transactions found`);
                    continue;
                }
                
                // Import transactions
                const result = await importCSVTransactions(file.name, bankName, transactions);
                totalImported += result.imported;
                totalSkipped += result.skipped;
                
            } catch (error) {
                console.error(`Error processing ${file.name}:`, error);
                errors.push(`${file.name}: ${error.message}`);
            }
        }
        
        // Show results
        hideLoadingOverlay();
        
        if (totalImported > 0) {
            let message = t.csvImportedSuccess?.replace('{count}', totalImported) || 
                          `Successfully imported ${totalImported} transactions`;
            
            if (totalSkipped > 0) {
                message += ` (${totalSkipped} duplicates skipped)`;
            }
            
            showToast(message, 'success', 5000);
        }
        
        if (errors.length > 0) {
            console.error('Import errors:', errors);
            showToast(`${errors.length} file(s) had errors. Check console for details.`, 'error', 5000);
        }
        
        if (totalImported === 0 && errors.length === 0) {
            showToast('All transactions already exist (no duplicates imported)', 'info');
        }
        
        // Clear bank name input
        const bankNameInput = document.getElementById('csvBankName');
        if (bankNameInput) bankNameInput.value = '';
        
        // Reset input
        event.target.value = '';
        delete window.pendingCSVBankName;
        
        // Reload
        await loadTransactions();
        await loadImportedCSVsList();
        
    } catch (error) {
        hideLoadingOverlay();
        console.error('Error processing files:', error);
        showToast('Error processing files: ' + error.message, 'error');
    }
}

/**
 * Detect and convert Israeli bank CSV format to standard format
 */
function convertIsraeliCSV(csvText) {
    const lines = csvText.split('\n');
    
    // Détecter le format israélien : chercher la ligne avec les headers hébreux
    let headerLineIndex = -1;
    for (let i = 0; i < Math.min(15, lines.length); i++) {
        const line = lines[i];
        // Chercher "תאריך רכישה" (date d'achat) ou "שם בית עסק" (nom du commerce)
        if (line.includes('תאריך רכישה') || line.includes('שם בית עסק')) {
            headerLineIndex = i;
            break;
        }
    }
    
    // Si format israélien non détecté, retourner tel quel
    if (headerLineIndex === -1) {
        return csvText;
    }
    
    console.log(`✓ Israeli CSV format detected at line ${headerLineIndex + 1}`);
    
    // Créer le nouveau CSV avec headers anglais
    const newLines = [];
    newLines.push('date,description,amount,currency');
    
    // Parser les lignes de données (après le header)
    for (let i = headerLineIndex + 1; i < lines.length; i++) {
        const line = lines[i].trim();
        if (!line || line.split(',').length < 3) continue;
        
        const values = parseCSVLine(line);
        
        // Format israélien attendu:
        // תאריך רכישה, שם בית עסק, סכום עסקה, מטבע עסקה, ...
        // Index:  0          1             2              3
        
        if (values.length < 4) continue;
        
        const dateStr = values[0]; // DD.MM.YY
        const merchant = values[1];
        const amount = values[2];
        const currency = values[3];
        
        if (!dateStr || !merchant || !amount) continue;
        
        // Convertir la date DD.MM.YY → YYYY-MM-DD
        const dateParts = dateStr.split('.');
        if (dateParts.length === 3) {
            let day = dateParts[0].padStart(2, '0');
            let month = dateParts[1].padStart(2, '0');
            let year = dateParts[2];
            
            // Si l'année est sur 2 chiffres, ajouter 20XX
            if (year.length === 2) {
                year = '20' + year;
            }
            
            const isoDate = `${year}-${month}-${day}`;
            
            // Nettoyer le montant (enlever les espaces et symboles de devise)
            const cleanAmount = amount.replace(/[^\d.-]/g, '');
            
            // Construire la nouvelle ligne
            // IMPORTANT : Mettre le montant en négatif car ce sont des dépenses
            newLines.push(`${isoDate},"${merchant}",-${cleanAmount},${currency}`);
        }
    }
    
    const convertedCSV = newLines.join('\n');
    console.log(`✓ Converted ${newLines.length - 1} Israeli transactions`);
    
    return convertedCSV;
}

/**
 * Parse CSV file and extract transactions
 */
function parseCSV(csvText, fileName, bankName) {
    // ✅ NOUVEAU : Détecter et convertir le format israélien
    csvText = convertIsraeliCSV(csvText);
    
    const lines = csvText.split('\n').filter(line => line.trim());
    if (lines.length < 2) {
        throw new Error('CSV file is empty or invalid');
    }
    
    // Parse header
    const headers = parseCSVLine(lines[0]);
    
    // Detect column indices (support multiple formats)
    const dateCol = findColumn(headers, ['date', 'date de début', 'transaction date', 'datum']);
    const descCol = findColumn(headers, ['description', 'desc', 'merchant', 'nom']);
    const amountCol = findColumn(headers, ['amount', 'montant', 'betrag', 'value']);
    const currencyCol = findColumn(headers, ['currency', 'devise', 'währung', 'curr']);
    
    if (dateCol === -1 || descCol === -1 || amountCol === -1) {
        throw new Error('CSV format not recognized. Required columns: date, description, amount');
    }
    
    const transactions = [];
    
    // Calculate date limit (1 year ago)
    const oneYearAgo = new Date();
    oneYearAgo.setFullYear(oneYearAgo.getFullYear() - 1);
    
    // Parse data rows
    for (let i = 1; i < lines.length; i++) {
        try {
            const values = parseCSVLine(lines[i]);
            
            if (values.length < headers.length) continue;
            
            const dateStr = values[dateCol];
            const description = values[descCol];
            const amountStr = values[amountCol];
            const currency = currencyCol !== -1 ? values[currencyCol] : 'EUR';
            
            if (!dateStr || !description || !amountStr) continue;
            
            // Parse date
            const date = parseDate(dateStr);
            if (!date) continue;
            
            // Skip transactions older than 1 year
            if (date < oneYearAgo) {
                continue;
            }
            
            // Parse amount
            const amount = parseFloat(amountStr.replace(/[^\d.-]/g, ''));
            if (isNaN(amount)) continue;
            
            transactions.push({
                date: date.toISOString(),
                description: description.trim(),
                chargedAmount: amount,
                currency: currency,
                source: 'csv',
                csvFileName: fileName,
                bankName: bankName,
                identifier: `${date.toISOString()}_${description.trim()}_${amount}`
            });
            
        } catch (error) {
            console.warn(`Error parsing line ${i + 1}:`, error);
        }
    }
    
    return transactions;
}
/**
 * Parse a single CSV line (handles quoted values)
 */
function parseCSVLine(line) {
    const values = [];
    let current = '';
    let inQuotes = false;
    
    for (let i = 0; i < line.length; i++) {
        const char = line[i];
        
        if (char === '"') {
            inQuotes = !inQuotes;
        } else if (char === ',' && !inQuotes) {
            values.push(current.trim());
            current = '';
        } else {
            current += char;
        }
    }
    
    values.push(current.trim());
    return values;
}

/**
 * Find column index by multiple possible names
 */
function findColumn(headers, possibleNames) {
    for (let i = 0; i < headers.length; i++) {
        const header = headers[i].toLowerCase().trim();
        for (const name of possibleNames) {
            if (header.includes(name.toLowerCase())) {
                return i;
            }
        }
    }
    return -1;
}

/**
 * Parse date from various formats
 */
function parseDate(dateStr) {
    // Try ISO format first (2024-01-15 or 2024-01-15T10:30:00)
    let date = new Date(dateStr);
    if (!isNaN(date.getTime())) return date;
    
    // Try DD/MM/YYYY
    const parts1 = dateStr.split(/[\/\-\.]/);
    if (parts1.length === 3) {
        const day = parseInt(parts1[0]);
        const month = parseInt(parts1[1]);
        const year = parseInt(parts1[2]);
        
        if (day <= 31 && month <= 12) {
            date = new Date(year, month - 1, day);
            if (!isNaN(date.getTime())) return date;
        }
    }
    
    return null;
}

/**
 * Import CSV transactions to Firebase
 */
async function importCSVTransactions(fileName, bankName, transactions) {
    if (!window.currentUser) {
        showToast('Please login first', 'error');
        return { imported: 0, skipped: 0 };
    }
    
    try {
        const userId = window.currentUser.uid;
        const batch = db.batch();
        
        // Check for duplicates
        const existingTransactions = await db.collection('users')
            .doc(userId)
            .collection('transactions')
            .get();
        
        const existingIdentifiers = new Set();
        existingTransactions.forEach(doc => {
            const data = doc.data();
            if (data.identifier) {
                existingIdentifiers.add(data.identifier);
            }
        });
        
        // Filter out duplicates
        const newTransactions = transactions.filter(t => 
            !existingIdentifiers.has(t.identifier)
        );
        
        const skipped = transactions.length - newTransactions.length;
        
        if (newTransactions.length === 0) {
            return { imported: 0, skipped: skipped };
        }
        
        // Add new transactions
        newTransactions.forEach(transaction => {
            const docRef = db.collection('users')
                .doc(userId)
                .collection('transactions')
                .doc();
            
            batch.set(docRef, {
                ...transaction,
                id: docRef.id,
                isLabeled: false,
                category: null,
                createdAt: firebase.firestore.FieldValue.serverTimestamp()
            });
        });
        
        // Save CSV metadata
        const csvMetaRef = db.collection('users')
            .doc(userId)
            .collection('importedCSVs')
            .doc();
        
        batch.set(csvMetaRef, {
            id: csvMetaRef.id,
            fileName: fileName,
            bankName: bankName,
            importedAt: firebase.firestore.FieldValue.serverTimestamp(),
            transactionCount: newTransactions.length,
            transactionIdentifiers: newTransactions.map(t => t.identifier)
        });
        
        await batch.commit();
        
        // Return stats instead of showing toast
        return { imported: newTransactions.length, skipped: skipped };
        
    } catch (error) {
        console.error('Error importing CSV:', error);
        throw error; // Throw error to be caught by handleCSVUpload
    }
}

/**
 * Load list of imported CSVs
 */
async function loadImportedCSVsList() {
    if (!window.currentUser) return;
    
    const csvList = document.getElementById('csvList');
    if (!csvList) return;
    
    const t = translations[currentLanguage] || translations['en'];
    
    try {
        const userId = window.currentUser.uid;
        const csvs = await db.collection('users')
            .doc(userId)
            .collection('importedCSVs')
            .orderBy('importedAt', 'desc')
            .get();
        
        if (csvs.empty) {
            csvList.innerHTML = `<p style="color: #6c757d; font-size: 0.9em; margin-top: 10px;" data-translate="noCSVImported">${t.noCSVImported}</p>`;
            return;
        }
        
        csvList.innerHTML = '';
        csvs.forEach(doc => {
            const data = doc.data();
            const csvItem = createCSVItem(data);
            csvList.appendChild(csvItem);
        });
        
        // Traduire après ajout au DOM
        updateTransactionsLanguage();
        
    } catch (error) {
        console.error('Error loading CSV list:', error);
    }
}

/**
 * Create CSV item HTML element
 */
function createCSVItem(csvData) {
    const div = document.createElement('div');
    div.className = 'csv-item';
    
    const date = csvData.importedAt ? csvData.importedAt.toDate().toLocaleDateString() : 'Unknown';
    const bankName = csvData.bankName || 'Unknown Bank';
    
    const t = translations[currentLanguage] || translations['en'];
    
    div.innerHTML = `
        <div class="csv-item-info">
            <div class="csv-item-name">🏦 ${escapeHtml(bankName)}</div>
            <div class="csv-item-meta">${t.imported} ${date} • ${csvData.transactionCount} ${t.transactions} • ${escapeHtml(csvData.fileName)}</div>
        </div>
        <button class="csv-remove-btn" onclick="removeCSV('${csvData.id}', '${escapeHtml(bankName)}')">
            ✕ <span data-translate="remove">Remove</span>
        </button>
    `;
    
    return div;
}

/**
 * Remove CSV and its transactions
 */
async function removeCSV(csvId, fileName) {
    if (!window.currentUser) return;
    
    const t = translations[currentLanguage] || translations['en'];
    const confirmMessage = t.removeCSVConfirm.replace('{name}', fileName);
    if (!confirm(confirmMessage)) {
        return;
    }
    // ✅ AJOUTE : Show loading overlay
    showLoadingOverlay(t.removingCSV || 'Removing CSV...', t.deletingTransactions || 'Deleting transactions');
    try {
        const userId = window.currentUser.uid;
        
        // Get CSV metadata
        const csvDoc = await db.collection('users')
            .doc(userId)
            .collection('importedCSVs')
            .doc(csvId)
            .get();
        
        if (!csvDoc.exists) {
            showToast('CSV not found', 'error');
            return;
        }
        
        const csvData = csvDoc.data();
        const identifiers = csvData.transactionIdentifiers || [];
        
        // Delete transactions with batch
        const batch = db.batch();
        
        const transactions = await db.collection('users')
            .doc(userId)
            .collection('transactions')
            .where('identifier', 'in', identifiers.slice(0, 10)) // Firestore limit: 10 items in 'in'
            .get();
        
        transactions.forEach(doc => {
            batch.delete(doc.ref);
        });
        
        // Delete CSV metadata
        batch.delete(csvDoc.ref);
        
        await batch.commit();
        
        // If more than 10 transactions, handle them in additional batches
        if (identifiers.length > 10) {
            for (let i = 10; i < identifiers.length; i += 10) {
                const chunk = identifiers.slice(i, i + 10);
                const moreTxns = await db.collection('users')
                    .doc(userId)
                    .collection('transactions')
                    .where('identifier', 'in', chunk)
                    .get();
                
                const batch2 = db.batch();
                moreTxns.forEach(doc => batch2.delete(doc.ref));
                await batch2.commit();
            }
        }
        
        const t = translations[currentLanguage] || translations['en'];
        showToast(t.csvRemovedSuccess.replace('{count}', csvData.transactionCount), 'success');
        
        // Reload
        await loadTransactions();
        await loadImportedCSVsList();
        
    } catch (error) {
        console.error('Error removing CSV:', error);
        showToast('Error removing CSV: ' + error.message, 'error');
    } finally {
        // ✅ AJOUTE : Always hide overlay
        hideLoadingOverlay();
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
            
            // Apply translations to the newly shown content
            setTimeout(() => {
                if (typeof updateTransactionsLanguage === 'function') {
                    updateTransactionsLanguage();
                }
            }, 10);
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
        const isDarkMode = document.body.classList.contains('dark-mode');
        
        if (filtersRow.style.display === 'none') {
            // Ouvrir les filtres
            filtersRow.style.display = 'flex';
            icon.textContent = '▲';
            btn.style.background = '#667eea';
            btn.style.color = 'white';
        } else {
            // Fermer les filtres
            filtersRow.style.display = 'none';
            icon.textContent = '▼';
            
            // ✅ MODIFIÉ : Adapter au mode
            if (isDarkMode) {
                btn.style.background = '#2a2a3e'; // ✅ Même couleur que les autres boutons
                btn.style.color = '#e0e0e0'; // Texte clair
            } else {
                btn.style.background = 'white';
                btn.style.color = '#333';
            }
        }
    }
}


/**
 * Toggle Bank Config from toolbar with arrow indicator
 */
let bankConfigOpen = false;

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
//setInterval(monitorCredentials, 30000);

// Première vérification au chargement
//setTimeout(monitorCredentials, 5000);


/**
 * Count similar transactions
 */
function countSimilarTransactions(description) {
    const cleanDesc = description.toLowerCase();
    return transactionsData.filter(txn => 
        txn.description.toLowerCase() === cleanDesc
    ).length;
}

// Ajoute cette fonction après la fonction countSimilarTransactions (cherche où elle est définie)
/**
 * Get frequency count for a transaction
 */
function getTransactionFrequency(description) {
    return transactionsData.filter(t => 
        t.description.toLowerCase().trim() === description.toLowerCase().trim()
    ).length;
}

/**
 * Scroll to top functionality
 */
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

/**
 * Show/hide scroll to top button based on scroll position
 */
function handleScrollButton() {
    const scrollBtn = document.getElementById('scrollToTopBtn');
    if (!scrollBtn) return;
    
    // Show button when scrolled down more than 300px
    if (window.pageYOffset > 300) {
        scrollBtn.classList.add('visible');
    } else {
        scrollBtn.classList.remove('visible');
    }
}

// Initialize scroll button listener when tab is loaded
document.addEventListener('tabActivated', (event) => {
    if (event.detail.tabName === 'transactions') {
        // Add scroll listener
        window.addEventListener('scroll', handleScrollButton);
        
        // Initial check
        handleScrollButton();
    }
});

// Also add listener on page load if already on transactions tab
if (typeof tabsManager !== 'undefined' && tabsManager.getCurrentTab() === 'transactions') {
    window.addEventListener('scroll', handleScrollButton);
    handleScrollButton();
}
