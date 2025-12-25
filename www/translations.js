// ================================================================
// WISE BUDGET - COMPLETE TRANSLATIONS
// All 11 languages (including English placeholder)
// Created: December 2025
// Victor Burtman
// ================================================================

const translations = {

    // ============================================
    // ENGLISH (en) - ORIGINAL
    // ============================================
    en: {
    // ============================================
    // AUTHENTICATION & ACCOUNT
    // ============================================
    appTitle: "💰 Expense Tracker",
    authSubtitle: "Sign in to sync your expenses",
    email: "Email",
    password: "Password (min 6 characters)",
    signIn: "Sign In",
    signUp: "Sign Up",
    noAccount: "Don't have an account?",
    hasAccount: "Already have an account?",
    signingIn: "Signing in...",
    creatingAccount: "Creating account...",
    rememberMe: 'Remember me',
    forgotPassword: "Forgot password?",
    resetPassword: "Reset Password",
    resetPasswordDesc: "Enter your email to receive a password reset link",
    sendResetEmail: "Send Email",
    resetEmailSent: "Password reset email sent! Check your inbox.",
    resetEmailError: "Error sending reset email. Please check your email address.",
    deleteAccount: "Delete Account",
    deleteAccountWarning: "This action is irreversible. All your data will be permanently deleted.",
    confirmDelete: "Are you sure you want to delete your account?",
    confirmDeleteButton: "Yes, Delete My Account",
    accountDeleted: "Your account has been successfully deleted",
    errorDeletingAccount: "Error deleting account. Please try again.",
    recentLoginRequired: "For security, please log in again before deleting your account",
    accountDisabled: "This account has been disabled. Please contact support.",
    account: "Account",
    loggedInAs: "Logged in as:",
    logout: "Logout",
    logoutConfirm: "Are you sure you want to logout?",
    
    // ============================================
    // NAVIGATION & TABS
    // ============================================
    budgetTab: "Budget",
    transactionsTab: "Transactions",
    transaction: "transaction",
    transactions: "transactions",
    settings: "Settings",
    settingsTitle: "⚙️ Settings",
    
    // ============================================
    // BUDGET - MAIN APP
    // ============================================
    income: "Income",
    expenses: "Expenses",
    remaining: "Remaining",
    ofIncome: "of income",
    budget: "Budget",
    real: "Real",
    estimated: "Estimated",
    spent: "Real",
    overBy: "Over by",
    underBy: "Under by",
    exactly: "Exact match",
    used: "used",
    ofExpenses: "of expenses",

    
    // Budget modes
    budgetVsReal: "Budget vs Real",
    
    // Charts
    pieChart: "🍩 Pie Chart",
    barChart: "📊 Bar Chart",
    monthlySpendingTrend: "Monthly Spending Trend",
    compare: "📊 Compare",

    categoryTrends: "Category Trends",
    last6Months: "Last 6 months",
    
    // ============================================
    // CATEGORIES
    // ============================================
    editCategories: "✏️ Edit Categories",
    doneEditing: "✓ Done Editing",
    addCategory: "➕ Add Category",
    category: "Category",
    selectCategories: "Select Categories",
    allCategories: "All categories",
    
    // Category actions
    moveUp: "↑ Move Up",
    moveDown: "↓ Move Down",
    addItem: "➕ Add Item",
    deleteCategory: " Delete Category",
    cannotDeleteIncome: "Cannot delete Income category.",
    cannotRenameIncome: "Cannot rename Income category.",
    cannotUseSystemName: "Cannot use system category name.",
    
    // Category messages
    categoryUpdated: 'Category updated successfully!',
    categoryRenamedSuccess: "Category renamed successfully! {count} transaction(s) updated.",
    categoryDeletedSuccess: "Category deleted! {count} transaction(s) unlabeled.",
    categoryExistsAlert: "Category already exists!",
    categoryNotFoundAlert: "Category not found!",
    topOfListAlert: "This category is already at the top of the expenses list (after Income).",
    errorCreatingCategory: "Error creating category. Please try again.",
    errorRenamingCategory: "Error renaming category:",
    errorDeletingCategory: "Error deleting category:",
    renamingCategory: 'Renaming category...',
    deletingCategory: 'Deleting category...',
    
    // Default categories
    housing: "🏠 Housing",
    tech: "📱 Communications & Tech",
    pet: "🐱 Pet Care",
    subscriptions: "🎬 Subscriptions",
    groceries: "🛒 Groceries",
    other: "💸 Other Expenses",
    
    // Default items
    salary: "Salary",
    rent: "Rent",
    arnona: "Arnona",
    electricity: "Electricity",
    gas: "Gas",
    water: "Water",
    phonePlan: "Phone Plan",
    internet: "Internet",
    icloud: "iCloud",
    catFood: "Cat Food",
    litter: "Litter",
    youtube: "YouTube Premium",
    claude: "Claude Pro",
    therapist: "Therapist",
    food: "Food",
    household: "Household Products",
    personalCare: "Personal Care",
    otherExpenses: "Other Expenses",
    
    // ============================================
    // TRANSACTIONS
    // ============================================
    allTransactions: "Transactions",
    noTransactionsAdded: "No transactions added yet",
    addTransactionToStart: "Add a transaction to get started",
    noMatchingTransactions: "No transactions match the current filters",
    noTransactionsYet: "No transactions yet",
    clickSyncToStart: "Click \"Sync All\" to get started",
    loadingTransactions: "Loading transactions...",
    showingTransactions: "Showing {shown} of {total} transactions",
    moreHidden: "{count} more hidden - adjust the \"Show\" filter to see more",
    adjustFiltersToSeeMore: "Adjust your filters to see more transactions",

    
    // Transaction actions
    addTransaction: 'Add Transaction',
    addManualTransaction: 'Add Transaction',
    transactionName: 'Name',
    transactionAdded: 'Transaction added successfully!',
    addingTransaction: 'Adding transaction...',
    
    // Transaction labeling
    labelingTransaction: 'Labeling transaction...',
    unlabelingTransaction: 'Removing label...',
    labelingTransactionUnique: 'Labeling this transaction only...',
    unlabelingTransactionUnique: 'Removing label from this transaction only...',
    labelingMultipleTransactions: 'Labeling {count} transactions...',
    transactionLabeled: 'Transaction labeled! ✓',
    transactionLabeledUnique: 'Transaction labeled (unique) ✓',
    labeledWithSimilar: 'Labeled 1 transaction + {count} similar ones! ✓',
    labelRemoved: 'Label removed! ✓',
    labelRemovedUnique: 'Label removed (unique) ✓',
    labelRemovedWithSimilar: 'Removed label from 1 transaction + {count} similar ones! ✓',
    multipleTransactionsLabeled: '{count} transactions labeled!',
    uniqueLabel: '1×',
    
    // Transaction exclusion
    exclude: 'Exclude',
    excludeTransaction: 'Exclude Transaction',
    excludeThisOnly: 'Exclude this transaction only',
    excludeAllSimilar: 'Exclude all similar transactions',
    excluded: 'Excluded',
    excludedTransactions: 'Excluded Transactions',
    noExcludedTransactions: 'No excluded transactions',
    confirmExclude: 'Exclude this transaction? It will be hidden from the list.',
    confirmExcludeAllSimilar: 'Exclude all similar transactions? They will be hidden from the list.',
    excluding: 'Excluding...',
    transactionExcluded: 'Transaction excluded ✓',
    excludedSimilarCount: 'Excluded {count} similar transactions',
    
    // Transaction restoration
    restore: 'Restore',
    restoreAll: 'Restore All',
    restoreSimilarTransactions: 'Restore similar transactions',
    transactionRestored: 'Transaction restored ✓',
    restoring: 'Restoring...',
    restoringAll: 'Restoring all...',
    confirmRestoreAll: 'Restore all excluded transactions?',
    allTransactionsRestored: 'All transactions restored ✓',
    restoredSimilarCount: 'Restored {count} similar transactions',
    restoreSimilarHelp: 'When enabled, clicking "Restore" will also restore all similar transactions',
    
    // Transaction details
    similarTransactions: "Similar transactions",
    checkingSimilar: 'Checking for similar transactions...',
    fullName: "Full name",
    memo: "Memo",
    amount: "Amount",
    note: 'Note',
    addNote: 'Add a note (max 10 words)...',
    memoTooLong: 'Note is too long. Maximum 10 words.',
    noteSaved: 'Note saved ✓',
    optional: 'optional',
    copy: 'Copy',
    copied: 'Copied!',
    clickToExpand: 'Click to expand',

    checkInternetConnection: "Please check your internet connection and try again",
    retry: "Retry",
    errorLoadingTransactions: "Error Loading Transactions",
    
    // ============================================
    // BANK SYNCHRONIZATION
    // ============================================
    bankSynchronization: "Bank Synchronization",
    bankAccountsConfig: "Bank Accounts",
    maxLeumi: "💳 Max.co.il (Leumi Card)",
    isracard: "💳 Isracard",
    setupMaxCredentials: "🔐 Setup Max Credentials",
    setupIsracardCredentials: "🔐 Setup Isracard Credentials",
    configureCredentials: "Configure your credentials to sync transactions.",
    credentialsConfigured: "Credentials Configured ✓",
    
    // Bank credentials
    bankCredentials: "🔐 Bank Credentials",
    credentialsSecure: "Your credentials will be encrypted and stored securely in Firebase.",
    username: "Username",
    yourUsername: "Your username",
    yourPassword: "Your password",
    idNumber: "ID Number",
    cardLast6: "Last 6 Digits of Card",
    yourIsraeliId: "Your Israeli ID",
    isracardId: "Isracard ID",
    isracardPassword: "Isracard Password",
    yourIsracardId: "Your Isracard ID",
    yourIsracardPassword: "Your Isracard password",
    saveCredentials: "Save Credentials",
    credentialsSaved: "Credentials saved successfully!",
    errorSavingCredentials: "Error saving credentials:",
    
    // Sync actions
    syncTransactions: "🔄 Sync Transactions",
    syncAll: "🔄 Sync All",
    syncingWithBanks: "Syncing with banks...",
    syncCompleted: "Sync completed! {count} new transaction(s).",
    syncFailed: "Sync failed:",
    lastSync: "Last sync:",
    never: "Never",
    ago: "ago",
    justNow: "Just now",
    
    // Auto-labeling
    autoLabelTitle: "🏷️ Auto-label",
    autoLabelDescription: 'Automatically label unlabeled transactions based on existing patterns',
    autoLabeling: 'Auto-labeling transactions...',
    autoLabelCompleted: "Auto-labeling completed! {count} transaction(s) labeled.",
    autoLabelFailed: "Auto-labeling failed:",
    noTransactionsToLabel: "No transactions could be auto-labeled. Try labeling some manually first.",
    
    // ============================================
    // CSV IMPORT
    // ============================================
    importCSV: "Import CSV/Excel",
    importCSVDescription: "Import transactions from CSV files (Revolut, N26, etc.)",
    supportedFormats: "Supported formats: CSV, XLSX, XLS",
    bankName: "Bank Name",
    bankNamePlaceholder: "e.g. Revolut, N26, Wise...",
    bankNameHelp: "This helps you identify transactions from different banks",
    chooseCSV: "Choose CSV/Excel file",
    imported: "Imported",
    importingCSV: "Importing CSV...",
    removingCSV: "Removing CSV...",
    noCSVImported: "No CSV files imported yet",
    enterBankNameFirst: "Please enter a bank name first",
    remove: "Remove",
    removeCSVConfirm: "Remove \"{name}\" and all its transactions?",
    csvImportedSuccess: "CSV imported successfully! {count} transaction(s) added.",
    csvImportedWithDuplicates: "CSV imported! {count} transaction(s) added ({skipped} duplicates skipped)",
    csvRemovedSuccess: "CSV removed! {count} transaction(s) deleted.",
    errorImportingCSV: "Error importing CSV:",
    errorRemovingCSV: "Error removing CSV:",
    
    // Import period
    importPeriod: 'Import transactions from',
    importPeriodHelp: 'Only transactions within this period will be imported',
    oneMonthAgo: '1 month ago',
    threeMonthsAgo: '3 months ago',
    sixMonthsAgo: '6 months ago',
    twelveMonthsAgo: '12 months ago',
    eighteenMonthsAgo: '18 months ago',
    twentyFourMonthsAgo: '24 months ago',
    thirtySixMonthsAgo: '36 months ago',
    
    // ============================================
    // FILTERS & SORTING
    // ============================================
    filters: "Filters",
    showAll: "All",
    all: "All",
    allMonths: "All months",
    allSources: "All sources",
    month: "Month",
    source: "Source",
    type: "Type",
    expenses: "Expenses",
    labelStatus: "Label Status",
    showOnlyUnlabeled: "Unlabeled only",
    showOnlyLabeled: "Labeled only",
    search: "Search...",
    clear: "Reset",
    selectCategory: "Select category",
    
    // Sort options
    sortBy: "Sort by",
    sortDateNewest: "📅 Date (newest)",
    sortDateOldest: "📅 Date (oldest)",
    sortAmountHighest: "💰 Amount (highest)",
    sortAmountLowest: "💰 Amount (lowest)",
    sortFrequencyMost: "🔄 Frequency (most)",
    sortFrequencyLeast: "🔄 Frequency (least)",
    
    // Transaction display limits
    showTransactions: "Show Transactions",
    show50: "Show 50",
    show500: "Show 500",
    show1000: "Show 1000",
    show2000: "Show 2000",
    loadMore: "Load More",
    batchSize: "Transactions per page",
    
    // Selection
    selectAll: 'Select All',
    deselectAll: 'Deselect All',
    
    // ============================================
    // COLORS & CUSTOMIZATION
    // ============================================
    colors: "🎨 Colors",
    customizeColors: "🎨 Customize Colors",
    resetColors: 'Reset to Default',
    resetColorsConfirm: "Reset all colors to default?",
    resetToDefault: "Reset to Default",
    randomColors: "Random Colors",
    randomizeColors: '🎲 Randomize Colors',
    colorByCategory: 'Group by categories',
    categoryColors: "Category Colors",
    itemColors: "Item Colors",
    advanced: "Advanced",
    backToCategories: "Back to Categories",
    
    // Emoji selection
    selectEmoji: 'Select Emoji',
    customEmojiPlaceholder: 'Or type/paste any emoji here...',
    orChooseBelow: 'or choose below',
    useCustomEmoji: 'Use',
    pleaseEnterEmoji: 'Please enter an emoji',
    
    // ============================================
    // SETTINGS
    // ============================================
    currency: "Currency",
    language: "Language",
    darkMode: "Dark Mode",
    enableDarkMode: "Enable dark mode",
    
    // Income tracking
    incomeTracking: "Income Tracking",
    trackIncome: "Track monthly income",
    trackIncomeDesc: "When enabled, you can track your income sources and see how much money remains after expenses.",
    
    // Percentage calculation
    percentageCalculation: "Percentage Calculation",
    basedOnExpenses: "Based on Total Expenses",
    basedOnIncome: "Based on Total Income",
    percentageDesc: "Choose how category percentages are calculated",
    
    // Database maintenance
    databaseMaintenance: "Database Maintenance",
    cleanGhostCategories: "🧹 Clean Ghost Categories",
    cleanDescription: "Remove categories that exist in your data but are not displayed properly. Use this if you have issues with categories that won't show up or can't be created.",
    clearData: "Clear Data",
    clearAllTransactions: "Clear All Transactions",
    clearTransactionsWarning: "Remove all synced transactions from the database. This cannot be undone.",
    transactionsCleared: "Successfully deleted {count} transactions and {csvCount} CSV records",
    errorClearingTransactions: "Error:",
    
    // App info
    appVersion: 'App Version',
    versionInfo: 'Current version of your Personal Finance app',
    madeBy: "Made by Victor Burtman",
    contactInfo: "For any bug report, ideas, or suggestions:",
    
    // ============================================
    // COMMON BUTTONS & ACTIONS
    // ============================================
    save: "Save",
    cancel: "Cancel",
    done: "Done",
    close: "✕",
    resetAll: "Reset All Expenses",
    updatingTransactions: 'Updating transactions...',
    
    // ============================================
    // PROMPTS & CONFIRMATIONS
    // ============================================
    enterCategoryName: "Enter category name:",
    enterEmoji: "Enter emoji (e.g., 🎮):",
    enterFirstItem: "Enter first item name:",
    enterNewItemName: "Enter new item name:",
    enterNewName: "Enter new name:",
    enterNewCategoryName: "Enter new name for \"{current}\":",
    deleteCategoryConfirm: "Delete \"{name}\" ({amount})?\n\nAll labeled transactions will be unlabeled.",
    deleteItemConfirm: "Delete this item?",
    lastItemConfirm: "Last item in category. Delete entire category?",
    resetAllConfirm: "Reset all expenses to 0?",
    clearAllWarning1: "⚠️ Delete ALL transactions? This cannot be undone!",
    clearAllWarning2: "⚠️ FINAL WARNING: Permanently delete all transactions?",
    
    // ============================================
    // STATUS & LOADING MESSAGES
    // ============================================
    loading: "Loading...",
    processing: "Processing...",
    processingTransactions: "Processing transactions",
    deletingTransactions: "Deleting transactions",
    deletingAllTransactions: "Deleting all transactions...",
    saving: "Saving...",
    pleaseWait: 'Please wait',
    thisMayTakeAMoment: "This may take a moment",
    updateAvailable: "Update available",
    installingUpdate: "Installing update...",
    
    // ============================================
    // ERRORS
    // ============================================
    // Auth errors
    pleaseEnterEmail: "Please enter your email address",
    pleaseEnterEmailAndPassword: "Please enter email and password",
    errorPasswordRequired: "Please enter your password",
    errorEmailInvalid: "Invalid email format",
    errorPasswordTooShort: "Password must be at least 6 characters",
    errorUserNotFound: "No account found with this email",
    errorWrongPassword: "Incorrect password",
    errorEmailAlreadyUsed: "This email is already registered",
    errorWeakPassword: "Password is too weak. Use at least 6 characters.",
    errorTooManyRequests: "Too many failed attempts. Please try again later.",
    errorNetworkFailed: "Network error. Check your connection.",
    errorUnknown: "An error occurred. Please try again.",
    authError: "An error occurred. Please try again.",
    emailAlreadyInUse: "This email is already registered. Please sign in instead.",
    weakPassword: "Password should be at least 6 characters",
    invalidEmail: "Invalid email address",
    userNotFound: "No account found with this email",
    wrongPassword: "Incorrect password",
    unknownError: "An error occurred. Please try again.",
    emailInUse: "This email is already in use. Try signing in instead.",
    invalidCredentials: "Invalid email or password.",
    tooManyRequests: "Too many failed attempts. Please try again later.",
    
    // Other errors
    noExpensesYet: "No expenses yet",
    
    // ============================================
    // TIME & DATE
    // ============================================
    minutes: "minutes",
    hours: "hours",
    days: "days",
    transactions: "transaction(s)",
    
    // Month names
    january: "January",
    february: "February",
    march: "March",
    april: "April",
    may: "May",
    june: "June",
    july: "July",
    august: "August",
    september: "September",
    october: "October",
    november: "November",
    december: "December",

    janShort: "Jan", febShort: "Feb", marShort: "Mar", aprShort: "Apr",
    mayShort: "May", junShort: "Jun", julShort: "Jul", augShort: "Aug",
    sepShort: "Sep", octShort: "Oct", novShort: "Nov", decShort: "Dec",
    
    // ============================================
    // CURRENCY & CONVERSION
    // ============================================
    conversionInfo: "Amounts are converted using daily exchange rates and may be approximate",
    noIncomeThisMonth:"No income transactions this month",
    noExpensesThisMonth: "No expenses this month",
    estimatedBudgetNote: "Budget estimates shown",
    },

    // ============================================
    // FRENCH (fr)
    // ============================================
    fr: {
        // ============================================
        // AUTHENTICATION & ACCOUNT
        // ============================================
        appTitle: "💰 Suivi des Dépenses",
        authSubtitle: "Connectez-vous pour synchroniser vos dépenses",
        email: "Email",
        password: "Mot de passe (min 6 caractères)",
        signIn: "Se connecter",
        signUp: "S'inscrire",
        noAccount: "Vous n'avez pas de compte ?",
        hasAccount: "Vous avez déjà un compte ?",
        signingIn: "Connexion en cours...",
        creatingAccount: "Création du compte...",
        rememberMe: 'Se souvenir de moi',
        forgotPassword: "Mot de passe oublié ?",
        resetPassword: "Réinitialiser le mot de passe",
        resetPasswordDesc: "Entrez votre email pour recevoir un lien de réinitialisation",
        sendResetEmail: "Envoyer l'email",
        resetEmailSent: "Email de réinitialisation envoyé ! Vérifiez votre boîte de réception.",
        resetEmailError: "Erreur lors de l'envoi de l'email. Vérifiez votre adresse email.",
        deleteAccount: "Supprimer le compte",
        deleteAccountWarning: "Cette action est irréversible. Toutes vos données seront définitivement supprimées.",
        confirmDelete: "Êtes-vous sûr de vouloir supprimer votre compte ?",
        confirmDeleteButton: "Oui, supprimer mon compte",
        accountDeleted: "Votre compte a été supprimé avec succès",
        errorDeletingAccount: "Erreur lors de la suppression du compte. Veuillez réessayer.",
        recentLoginRequired: "Pour des raisons de sécurité, veuillez vous reconnecter avant de supprimer votre compte",
        accountDisabled: "Ce compte a été désactivé. Veuillez contacter le support.",
        account: "Compte",
        loggedInAs: "Connecté en tant que :",
        logout: "Se déconnecter",
        logoutConfirm: "Êtes-vous sûr de vouloir vous déconnecter ?",
        
        // ============================================
        // NAVIGATION & TABS
        // ============================================
        budgetTab: "Budget",
        transactionsTab: "Transactions",
        transaction: "transaction",
        transactions: "transactions",
        settings: "Paramètres",
        settingsTitle: "⚙️ Paramètres",
        
        // ============================================
        // BUDGET - MAIN APP
        // ============================================
        income: "Revenus",
        expenses: "Dépenses",
        remaining: "Restant",
        ofIncome: "du revenu",
        budget: "Budget",
        real: "Réel",
        estimated: "Estimé",
        spent: "Réel",
        overBy: "Dépassement de",
        underBy: "Économie de",
        exactly: "Montant exact",
        used: "utilisé",
        ofExpenses: "des dépenses",
        
        
        // Budget modes
        budgetVsReal: "Budget vs Réel",
        
        // Charts
        pieChart: "🍩 Graphique en camembert",
        barChart: "📊 Graphique en barres",
        monthlySpendingTrend: "Tendance des dépenses mensuelles",
        compare: "📊 Comparer",
        categoryTrends: "Tendances par catégorie",
        last6Months: "6 derniers mois",
        
        // ============================================
        // CATEGORIES
        // ============================================
        editCategories: "✏️ Modifier les catégories",
        doneEditing: "✓ Terminé",
        addCategory: "➕ Ajouter une catégorie",
        category: "Catégorie",
        selectCategories: "Sélectionner les catégories",
        allCategories: "Toutes les catégories",
        
        // Category actions
        moveUp: "↑ Monter",
        moveDown: "↓ Descendre",
        addItem: "➕ Ajouter un élément",
        deleteCategory: " Supprimer la catégorie",
        cannotDeleteIncome: "Impossible de supprimer la catégorie Revenu.",
        cannotRenameIncome: "Impossible de renommer la catégorie Revenu.",
        cannotUseSystemName: "Impossible d'utiliser le nom d'une catégorie système.",
        
        // Category messages
        categoryUpdated: 'Catégorie mise à jour avec succès !',
        categoryRenamedSuccess: "Catégorie renommée avec succès ! {count} transaction(s) mise(s) à jour.",
        categoryDeletedSuccess: "Catégorie supprimée ! {count} transaction(s) non étiquetée(s).",
        categoryExistsAlert: "Cette catégorie existe déjà !",
        categoryNotFoundAlert: "Catégorie introuvable !",
        topOfListAlert: "Cette catégorie est déjà en haut de la liste des dépenses (après Revenu).",
        errorCreatingCategory: "Erreur lors de la création de la catégorie. Veuillez réessayer.",
        errorRenamingCategory: "Erreur lors du renommage de la catégorie :",
        errorDeletingCategory: "Erreur lors de la suppression de la catégorie :",
        renamingCategory: 'Renommage de la catégorie...',
        deletingCategory: 'Suppression de la catégorie...',
        
        // Default categories
        housing: "🏠 Logement",
        tech: "📱 Communications & Tech",
        pet: "🐱 Animaux de compagnie",
        subscriptions: "🎬 Abonnements",
        groceries: "🛒 Courses",
        other: "💸 Autres dépenses",
        
        // Default items
        salary: "Salaire",
        rent: "Loyer",
        arnona: "Arnona",
        electricity: "Électricité",
        gas: "Gaz",
        water: "Eau",
        phonePlan: "Forfait téléphone",
        internet: "Internet",
        icloud: "iCloud",
        catFood: "Nourriture pour chat",
        litter: "Litière",
        youtube: "YouTube Premium",
        claude: "Claude Pro",
        therapist: "Thérapeute",
        food: "Nourriture",
        household: "Produits ménagers",
        personalCare: "Soins personnels",
        otherExpenses: "Autres dépenses",
        
        // ============================================
        // TRANSACTIONS
        // ============================================
        allTransactions: "Transactions",
        noTransactionsAdded: "Aucune transaction ajoutée",
        addTransactionToStart: "Ajoutez une transaction pour commencer",
        noMatchingTransactions: "Aucune transaction ne correspond aux filtres actuels",
        noTransactionsYet: "Pas encore de transactions",
        clickSyncToStart: "Cliquez sur \"Tout synchroniser\" pour commencer",
        loadingTransactions: "Chargement des transactions...",
        showingTransactions: "Affichage de {shown} sur {total} transactions",
        moreHidden: "{count} transaction(s) cachée(s) - ajustez le filtre \"Afficher\" pour en voir plus",
        adjustFiltersToSeeMore: "Ajustez vos filtres pour voir plus de transactions",

        
        
        // Transaction actions
        addTransaction: 'Ajouter une transaction',
        addManualTransaction: 'Ajouter une transaction',
        transactionName: 'Nom',
        transactionAdded: 'Transaction ajoutée avec succès !',
        addingTransaction: 'Ajout de la transaction...',
        
        // Transaction labeling
        labelingTransaction: 'Étiquetage de la transaction...',
        unlabelingTransaction: 'Suppression de l\'étiquette...',
        labelingTransactionUnique: 'Étiquetage de cette transaction uniquement...',
        unlabelingTransactionUnique: 'Suppression de l\'étiquette de cette transaction uniquement...',
        labelingMultipleTransactions: 'Étiquetage de {count} transactions...',
        transactionLabeled: 'Transaction étiquetée ! ✓',
        transactionLabeledUnique: 'Transaction étiquetée (unique) ✓',
        labeledWithSimilar: '1 transaction + {count} similaire(s) étiquetée(s) ! ✓',
        labelRemoved: 'Étiquette supprimée ! ✓',
        labelRemovedUnique: 'Étiquette supprimée (unique) ✓',
        labelRemovedWithSimilar: 'Étiquette supprimée de 1 transaction + {count} similaire(s) ! ✓',
        multipleTransactionsLabeled: '{count} transactions étiquetées !',
        uniqueLabel: '1×',
        
        // Transaction exclusion
        exclude: 'Exclure',
        excludeTransaction: 'Exclure la transaction',
        excludeThisOnly: 'Exclure cette transaction uniquement',
        excludeAllSimilar: 'Exclure toutes les transactions similaires',
        excluded: 'Exclu',
        excludedTransactions: 'Transactions exclues',
        noExcludedTransactions: 'Aucune transaction exclue',
        confirmExclude: 'Exclure cette transaction ? Elle sera cachée de la liste.',
        confirmExcludeAllSimilar: 'Exclure toutes les transactions similaires ? Elles seront cachées de la liste.',
        excluding: 'Exclusion...',
        transactionExcluded: 'Transaction exclue ✓',
        excludedSimilarCount: '{count} transaction(s) similaire(s) exclue(s)',
        
        // Transaction restoration
        restore: 'Restaurer',
        restoreAll: 'Tout restaurer',
        restoreSimilarTransactions: 'Restaurer les transactions similaires',
        transactionRestored: 'Transaction restaurée ✓',
        restoring: 'Restauration...',
        restoringAll: 'Restauration de tout...',
        confirmRestoreAll: 'Restaurer toutes les transactions exclues ?',
        allTransactionsRestored: 'Toutes les transactions restaurées ✓',
        restoredSimilarCount: '{count} transaction(s) similaire(s) restaurée(s)',
        restoreSimilarHelp: 'Lorsqu\'activé, cliquer sur "Restaurer" restaurera aussi toutes les transactions similaires',
        
        // Transaction details
        similarTransactions: "Transactions similaires",
        checkingSimilar: 'Recherche de transactions similaires...',
        fullName: "Nom complet",
        memo: "Mémo",
        amount: "Montant",
        note: 'Note',
        addNote: 'Ajouter une note (max 10 mots)...',
        memoTooLong: 'Note trop longue. Maximum 10 mots.',
        noteSaved: 'Note enregistrée ✓',
        optional: 'optionnel',
        copy: 'Copier',
        copied: 'Copié !',
        clickToExpand: 'Cliquer pour développer',
        checkInternetConnection: "Veuillez vérifier votre connexion internet et réessayer",
        retry: "Réessayer",
        errorLoadingTransactions: "Erreur de chargement des transactions",
        
        // ============================================
        // BANK SYNCHRONIZATION
        // ============================================
        bankSynchronization: "Synchronisation bancaire",
        bankAccountsConfig: "Comptes bancaires",
        maxLeumi: "💳 Max.co.il (Carte Leumi)",
        isracard: "💳 Isracard",
        setupMaxCredentials: "🔐 Configurer les identifiants Max",
        setupIsracardCredentials: "🔐 Configurer les identifiants Isracard",
        configureCredentials: "Configurez vos identifiants pour synchroniser les transactions.",
        credentialsConfigured: "Identifiants configurés ✓",
        
        // Bank credentials
        bankCredentials: "🔐 Identifiants bancaires",
        credentialsSecure: "Vos identifiants seront chiffrés et stockés en toute sécurité dans Firebase.",
        username: "Nom d'utilisateur",
        yourUsername: "Votre nom d'utilisateur",
        yourPassword: "Votre mot de passe",
        idNumber: "Numéro d'identité",
        cardLast6: "6 derniers chiffres de la carte",
        yourIsraeliId: "Votre ID israélien",
        isracardId: "ID Isracard",
        isracardPassword: "Mot de passe Isracard",
        yourIsracardId: "Votre ID Isracard",
        yourIsracardPassword: "Votre mot de passe Isracard",
        saveCredentials: "Enregistrer les identifiants",
        credentialsSaved: "Identifiants enregistrés avec succès !",
        errorSavingCredentials: "Erreur lors de l'enregistrement des identifiants :",
        
        // Sync actions
        syncTransactions: "🔄 Synchroniser les transactions",
        syncAll: "🔄 Tout synchroniser",
        syncingWithBanks: "Synchronisation avec les banques...",
        syncCompleted: "Synchronisation terminée ! {count} nouvelle(s) transaction(s).",
        syncFailed: "Échec de la synchronisation :",
        lastSync: "Dernière synchro :",
        never: "Jamais",
        ago: "il y a",
        justNow: "À l'instant",
        
        // Auto-labeling
        autoLabelTitle: "🏷️ Étiquetage auto",
        autoLabelDescription: 'Étiqueter automatiquement les transactions non étiquetées selon les motifs existants',
        autoLabeling: 'Étiquetage automatique des transactions...',
        autoLabelCompleted: "Étiquetage automatique terminé ! {count} transaction(s) étiquetée(s).",
        autoLabelFailed: "Échec de l'étiquetage automatique :",
        noTransactionsToLabel: "Aucune transaction n'a pu être étiquetée automatiquement. Essayez d'en étiqueter quelques-unes manuellement d'abord.",
        
        // ============================================
        // CSV IMPORT
        // ============================================
        importCSV: "Importer CSV/Excel",
        importCSVDescription: "Importer des transactions depuis des fichiers CSV (Revolut, N26, etc.)",
        supportedFormats: "Formats supportés : CSV, XLSX, XLS",
        bankName: "Nom de la banque",
        bankNamePlaceholder: "ex: Revolut, N26, Wise...",
        bankNameHelp: "Cela vous aide à identifier les transactions de différentes banques",
        chooseCSV: "Choisir un fichier CSV/Excel",
        imported: "Importé",
        importingCSV: "Import du CSV...",
        removingCSV: "Suppression du CSV...",
        noCSVImported: "Aucun fichier CSV importé pour le moment",
        enterBankNameFirst: "Veuillez d'abord entrer un nom de banque",
        remove: "Supprimer",
        removeCSVConfirm: "Supprimer \"{name}\" et toutes ses transactions ?",
        csvImportedSuccess: "CSV importé avec succès ! {count} transaction(s) ajoutée(s).",
        csvImportedWithDuplicates: "CSV importé ! {count} transaction(s) ajoutée(s) ({skipped} doublons ignorés)",
        csvRemovedSuccess: "CSV supprimé ! {count} transaction(s) supprimée(s).",
        errorImportingCSV: "Erreur lors de l'import du CSV :",
        errorRemovingCSV: "Erreur lors de la suppression du CSV :",
        
        // Import period
        importPeriod: 'Importer les transactions depuis',
        importPeriodHelp: 'Seules les transactions dans cette période seront importées',
        oneMonthAgo: 'Il y a 1 mois',
        threeMonthsAgo: 'Il y a 3 mois',
        sixMonthsAgo: 'Il y a 6 mois',
        twelveMonthsAgo: 'Il y a 12 mois',
        eighteenMonthsAgo: 'Il y a 18 mois',
        twentyFourMonthsAgo: 'Il y a 24 mois',
        thirtySixMonthsAgo: 'Il y a 36 mois',
        
        // ============================================
        // FILTERS & SORTING
        // ============================================
        filters: "Filtres",
        showAll: "Tout",
        all: "Tout",
        allMonths: "Tous les mois",
        allSources: "Toutes les sources",
        month: "Mois",
        source: "Source",
        type: "Type",
        expenses: "Dépenses",
        labelStatus: "Statut d'étiquetage",
        showOnlyUnlabeled: "Non étiquetées uniquement",
        showOnlyLabeled: "Étiquetées uniquement",
        search: "Rechercher...",
        clear: "Réinitialiser",
        selectCategory: "Sélectionner une catégorie",
        
        // Sort options
        sortBy: "Trier par",
        sortDateNewest: "📅 Date (récent)",
        sortDateOldest: "📅 Date (ancien)",
        sortAmountHighest: "💰 Montant (élevé)",
        sortAmountLowest: "💰 Montant (faible)",
        sortFrequencyMost: "🔄 Fréquence (élevée)",
        sortFrequencyLeast: "🔄 Fréquence (faible)",
        
        // Transaction display limits
        showTransactions: "Afficher les transactions",
        show50: "Afficher 50",
        show500: "Afficher 500",
        show1000: "Afficher 1000",
        show2000: "Afficher 2000",
        loadMore: "Charger plus",
        batchSize: "Transactions par page",
        
        // Selection
        selectAll: 'Tout sélectionner',
        deselectAll: 'Tout désélectionner',
        
        // ============================================
        // COLORS & CUSTOMIZATION
        // ============================================
        colors: "🎨 Couleurs",
        customizeColors: "🎨 Personnaliser les couleurs",
        resetColors: 'Réinitialiser par défaut',
        resetColorsConfirm: "Réinitialiser toutes les couleurs par défaut ?",
        resetToDefault: "Réinitialiser par défaut",
        randomColors: "Couleurs aléatoires",
        randomizeColors: '🎲 Couleurs aléatoires',
        colorByCategory: 'Grouper par catégories',
        categoryColors: "Couleurs des catégories",
        itemColors: "Couleurs des éléments",
        advanced: "Avancé",
        backToCategories: "Retour aux catégories",
        
        // Emoji selection
        selectEmoji: 'Sélectionner un emoji',
        customEmojiPlaceholder: 'Ou tapez/collez un emoji ici...',
        orChooseBelow: 'ou choisissez ci-dessous',
        useCustomEmoji: 'Utiliser',
        pleaseEnterEmoji: 'Veuillez entrer un emoji',
        
        // ============================================
        // SETTINGS
        // ============================================
        currency: "Devise",
        language: "Langue",
        darkMode: "Mode sombre",
        enableDarkMode: "Activer le mode sombre",
        
        // Income tracking
        incomeTracking: "Suivi des revenus",
        trackIncome: "Suivre les revenus mensuels",
        trackIncomeDesc: "Lorsqu'activé, vous pouvez suivre vos sources de revenus et voir combien d'argent reste après les dépenses.",
        
        // Percentage calculation
        percentageCalculation: "Calcul des pourcentages",
        basedOnExpenses: "Basé sur les dépenses totales",
        basedOnIncome: "Basé sur le revenu total",
        percentageDesc: "Choisissez comment les pourcentages des catégories sont calculés",
        
        // Database maintenance
        databaseMaintenance: "Maintenance de la base de données",
        cleanGhostCategories: "🧹 Nettoyer les catégories fantômes",
        cleanDescription: "Supprimer les catégories qui existent dans vos données mais ne s'affichent pas correctement. Utilisez ceci si vous avez des problèmes avec des catégories qui n'apparaissent pas ou ne peuvent pas être créées.",
        clearData: "Effacer les données",
        clearAllTransactions: "Effacer toutes les transactions",
        clearTransactionsWarning: "Supprimer toutes les transactions synchronisées de la base de données. Cette action est irréversible.",
        transactionsCleared: "{count} transaction(s) et {csvCount} enregistrement(s) CSV supprimés avec succès",
        errorClearingTransactions: "Erreur :",
        
        // App info
        appVersion: 'Version de l\'app',
        versionInfo: 'Version actuelle de votre application de finances personnelles',
        madeBy: "Créé par Victor Burtman",
        contactInfo: "Pour tout rapport de bug, idées ou suggestions :",
        
        // ============================================
        // COMMON BUTTONS & ACTIONS
        // ============================================
        save: "Enregistrer",
        cancel: "Annuler",
        done: "Terminé",
        close: "✕",
        resetAll: "Réinitialiser toutes les dépenses",
        updatingTransactions: 'Mise à jour des transactions...',
        
        // ============================================
        // PROMPTS & CONFIRMATIONS
        // ============================================
        enterCategoryName: "Entrez le nom de la catégorie :",
        enterEmoji: "Entrez un emoji (ex: 🎮) :",
        enterFirstItem: "Entrez le nom du premier élément :",
        enterNewItemName: "Entrez le nom du nouvel élément :",
        enterNewName: "Entrez le nouveau nom :",
        enterNewCategoryName: "Entrez le nouveau nom pour \"{current}\" :",
        deleteCategoryConfirm: "Supprimer \"{name}\" ({amount}) ?\n\nToutes les transactions étiquetées seront non étiquetées.",
        deleteItemConfirm: "Supprimer cet élément ?",
        lastItemConfirm: "Dernier élément de la catégorie. Supprimer toute la catégorie ?",
        resetAllConfirm: "Réinitialiser toutes les dépenses à 0 ?",
        clearAllWarning1: "⚠️ Supprimer TOUTES les transactions ? Cette action est irréversible !",
        clearAllWarning2: "⚠️ DERNIER AVERTISSEMENT : Supprimer définitivement toutes les transactions ?",
        
        // ============================================
        // STATUS & LOADING MESSAGES
        // ============================================
        loading: "Chargement...",
        processing: "Traitement...",
        processingTransactions: "Traitement des transactions",
        deletingTransactions: "Suppression des transactions",
        deletingAllTransactions: "Suppression de toutes les transactions...",
        saving: "Enregistrement...",
        pleaseWait: 'Veuillez patienter',
        thisMayTakeAMoment: "Cela peut prendre un moment",
        updateAvailable: "Mise à jour disponible",
        installingUpdate: "Installation de la mise à jour...",
        
        // ============================================
        // ERRORS
        // ============================================
        // Auth errors
        pleaseEnterEmail: "Veuillez entrer votre adresse email",
        pleaseEnterEmailAndPassword: "Veuillez entrer l'email et le mot de passe",
        errorPasswordRequired: "Veuillez entrer votre mot de passe",
        errorEmailInvalid: "Format d'email invalide",
        errorPasswordTooShort: "Le mot de passe doit contenir au moins 6 caractères",
        errorUserNotFound: "Aucun compte trouvé avec cet email",
        errorWrongPassword: "Mot de passe incorrect",
        errorEmailAlreadyUsed: "Cet email est déjà enregistré",
        errorWeakPassword: "Le mot de passe est trop faible. Utilisez au moins 6 caractères.",
        errorTooManyRequests: "Trop de tentatives échouées. Veuillez réessayer plus tard.",
        errorNetworkFailed: "Erreur réseau. Vérifiez votre connexion.",
        errorUnknown: "Une erreur s'est produite. Veuillez réessayer.",
        authError: "Une erreur s'est produite. Veuillez réessayer.",
        emailAlreadyInUse: "Cet email est déjà enregistré. Veuillez vous connecter.",
        weakPassword: "Le mot de passe doit contenir au moins 6 caractères",
        invalidEmail: "Adresse email invalide",
        userNotFound: "Aucun compte trouvé avec cet email",
        wrongPassword: "Mot de passe incorrect",
        unknownError: "Une erreur s'est produite. Veuillez réessayer.",
        emailInUse: "Cet email est déjà utilisé. Essayez de vous connecter.",
        invalidCredentials: "Email ou mot de passe invalide.",
        tooManyRequests: "Trop de tentatives échouées. Veuillez réessayer plus tard.",
        
        // Other errors
        noExpensesYet: "Pas encore de dépenses",
        
        // ============================================
        // TIME & DATE
        // ============================================
        minutes: "minutes",
        hours: "heures",
        days: "jours",
        transactions: "transaction(s)",
        
        // Month names
        january: "Janvier",
        february: "Février",
        march: "Mars",
        april: "Avril",
        may: "Mai",
        june: "Juin",
        july: "Juillet",
        august: "Août",
        september: "Septembre",
        october: "Octobre",
        november: "Novembre",
        december: "Décembre",

        janShort: "Jan", febShort: "Fév", marShort: "Mar", aprShort: "Avr",
        mayShort: "Mai", junShort: "Juin", julShort: "Juil", augShort: "Août",
        sepShort: "Sept", octShort: "Oct", novShort: "Nov", decShort: "Déc",
        
        // ============================================
        // CURRENCY & CONVERSION
        // ============================================
        conversionInfo: "Les montants sont convertis avec les taux de change quotidiens et peuvent être approximatifs",
        noIncomeThisMonth: "Aucune transaction de revenu ce mois-ci",
        noExpensesThisMonth: "Aucune dépense ce mois-ci",
        estimatedBudgetNote: "Estimations budgétaires affichées",
    },

    // ============================================
    // HEBREW (he) - RTL LANGUAGE
    // ============================================
    he: {
        // ============================================
        // AUTHENTICATION & ACCOUNT
        // ============================================
        appTitle: "💰 מעקב הוצאות",
        authSubtitle: "היכנס כדי לסנכרן את ההוצאות שלך",
        email: "אימייל",
        password: "סיסמה (לפחות 6 תווים)",
        signIn: "התחבר",
        signUp: "הירשם",
        noAccount: "אין לך חשבון?",
        hasAccount: "כבר יש לך חשבון?",
        signingIn: "מתחבר...",
        creatingAccount: "יוצר חשבון...",
        rememberMe: 'זכור אותי',
        forgotPassword: "שכחת סיסמה?",
        resetPassword: "אפס סיסמה",
        resetPasswordDesc: "הזן את האימייל שלך כדי לקבל קישור לאיפוס סיסמה",
        sendResetEmail: "שלח אימייל",
        resetEmailSent: "אימייל לאיפוס סיסמה נשלח! בדוק את תיבת הדואר שלך.",
        resetEmailError: "שגיאה בשליחת אימייל איפוס. אנא בדוק את כתובת האימייל שלך.",
        deleteAccount: "מחק חשבון",
        deleteAccountWarning: "פעולה זו בלתי הפיכה. כל הנתונים שלך יימחקו לצמיתות.",
        confirmDelete: "האם אתה בטוח שברצונך למחוק את החשבון שלך?",
        confirmDeleteButton: "כן, מחק את החשבון שלי",
        accountDeleted: "החשבון שלך נמחק בהצלחה",
        errorDeletingAccount: "שגיאה במחיקת החשבון. אנא נסה שוב.",
        recentLoginRequired: "לצורכי אבטחה, אנא התחבר שוב לפני מחיקת החשבון שלך",
        accountDisabled: "חשבון זה הושבת. אנא פנה לתמיכה.",
        account: "חשבון",
        loggedInAs: "מחובר בתור:",
        logout: "התנתק",
        logoutConfirm: "האם אתה בטוח שברצונך להתנתק?",
        
        // ============================================
        // NAVIGATION & TABS
        // ============================================
        budgetTab: "תקציב",
        transactionsTab: "עסקאות",
        transaction: "עסקה",
        transactions: "עסקאות",
        settings: "הגדרות",
        settingsTitle: "⚙️ הגדרות",
        
        // ============================================
        // BUDGET - MAIN APP
        // ============================================
        income: "הכנסות",
        expenses: "הוצאות",
        remaining: "יתרה",
        ofIncome: "מההכנסה",
        budget: "תקציב",
        real: "בפועל",
        estimated: "משוער",
        spent: "ממשי",
        overBy: "חריגה של",
        underBy: "חיסכון של",
        exactly: "סכום מדויק",
        used: "בשימוש",
        ofExpenses: "מההוצאות",

        
        // Budget modes
        budgetVsReal: "תקציב מול בפועל",
        
        // Charts
        pieChart: "🍩 תרשים עוגה",
        barChart: "📊 תרשים עמודות",
        monthlySpendingTrend: "מגמת הוצאות חודשית",
        compare: "📊 השווה",
        categoryTrends: "מגמות לפי קטגוריה",
        last6Months: "6 חודשים אחרונים",
        
        // ============================================
        // CATEGORIES
        // ============================================
        editCategories: "✏️ ערוך קטגוריות",
        doneEditing: "✓ סיום",
        addCategory: "➕ הוסף קטגוריה",
        category: "קטגוריה",
        selectCategories: "בחר קטגוריות",
        allCategories: "כל הקטגוריות",
        
        // Category actions
        moveUp: "↑ העלה",
        moveDown: "↓ הורד",
        addItem: "➕ הוסף פריט",
        deleteCategory: " מחק קטגוריה",
        cannotDeleteIncome: "לא ניתן למחוק את קטגוריית ההכנסה.",
        cannotRenameIncome: "לא ניתן לשנות את שם קטגוריית ההכנסה.",
        cannotUseSystemName: "לא ניתן להשתמש בשם קטגוריית מערכת.",
        
        // Category messages
        categoryUpdated: 'קטגוריה עודכנה בהצלחה!',
        categoryRenamedSuccess: "שם הקטגוריה שונה בהצלחה! {count} עסקאות עודכנו.",
        categoryDeletedSuccess: "קטגוריה נמחקה! {count} עסקאות לא מתויגות.",
        categoryExistsAlert: "קטגוריה זו כבר קיימת!",
        categoryNotFoundAlert: "קטגוריה לא נמצאה!",
        topOfListAlert: "קטגוריה זו כבר נמצאת בראש רשימת ההוצאות (אחרי הכנסה).",
        errorCreatingCategory: "שגיאה ביצירת קטגוריה. אנא נסה שוב.",
        errorRenamingCategory: "שגיאה בשינוי שם הקטגוריה:",
        errorDeletingCategory: "שגיאה במחיקת הקטגוריה:",
        renamingCategory: 'משנה שם קטגוריה...',
        deletingCategory: 'מוחק קטגוריה...',
        
        // Default categories
        housing: "🏠 דיור",
        tech: "📱 תקשורת וטכנולוגיה",
        pet: "🐱 חיות מחמד",
        subscriptions: "🎬 מנויים",
        groceries: "🛒 קניות",
        other: "💸 הוצאות אחרות",
        
        // Default items
        salary: "משכורת",
        rent: "שכר דירה",
        arnona: "ארנונה",
        electricity: "חשמל",
        gas: "גז",
        water: "מים",
        phonePlan: "חבילת סלולר",
        internet: "אינטרנט",
        icloud: "iCloud",
        catFood: "אוכל לחתול",
        litter: "חול חתולים",
        youtube: "YouTube Premium",
        claude: "Claude Pro",
        therapist: "מטפל",
        food: "מזון",
        household: "מוצרי ניקיון",
        personalCare: "טיפוח אישי",
        otherExpenses: "הוצאות אחרות",
        
        // ============================================
        // TRANSACTIONS
        // ============================================
        allTransactions: "העסקאות",
        noTransactionsAdded: "לא נוספו עסקאות עדיין",
        addTransactionToStart: "הוסף עסקה כדי להתחיל",
        noMatchingTransactions: "אין עסקאות התואמות את המסננים הנוכחיים",
        noTransactionsYet: "אין עסקאות עדיין",
        clickSyncToStart: "לחץ על \"סנכרן הכל\" כדי להתחיל",
        loadingTransactions: "טוען עסקאות...",
        showingTransactions: "מציג {shown} מתוך {total} עסקאות",
        moreHidden: "{count} עסקאות מוסתרות - התאם את מסנן \"הצג\" כדי לראות יותר",
        adjustFiltersToSeeMore: "התאם את המסננים כדי לראות עוד עסקאות",

        
        // Transaction actions
        addTransaction: 'הוסף עסקה',
        addManualTransaction: 'הוסף עסקה',
        transactionName: 'שם',
        transactionAdded: 'עסקה נוספה בהצלחה!',
        addingTransaction: 'מוסיף עסקה...',
        
        // Transaction labeling
        labelingTransaction: 'מתייג עסקה...',
        unlabelingTransaction: 'מסיר תווית...',
        labelingTransactionUnique: 'מתייג עסקה זו בלבד...',
        unlabelingTransactionUnique: 'מסיר תווית מעסקה זו בלבד...',
        labelingMultipleTransactions: 'מתייג {count} עסקאות...',
        transactionLabeled: 'עסקה תויגה! ✓',
        transactionLabeledUnique: 'עסקה תויגה (ייחודית) ✓',
        labeledWithSimilar: 'עסקה אחת + {count} דומות תויגו! ✓',
        labelRemoved: 'תווית הוסרה! ✓',
        labelRemovedUnique: 'תווית הוסרה (ייחודית) ✓',
        labelRemovedWithSimilar: 'תווית הוסרה מעסקה אחת + {count} דומות! ✓',
        multipleTransactionsLabeled: '{count} עסקאות תויגו!',
        uniqueLabel: '1×',
        
        // Transaction exclusion
        exclude: 'אל תכלול',
        excludeTransaction: 'אל תכלול עסקה',
        excludeThisOnly: 'אל תכלול עסקה זו בלבד',
        excludeAllSimilar: 'אל תכלול את כל העסקאות הדומות',
        excluded: 'לא כלול',
        excludedTransactions: 'עסקאות לא כלולות',
        noExcludedTransactions: 'אין עסקאות לא כלולות',
        confirmExclude: 'לא לכלול עסקה זו? היא תהיה מוסתרת מהרשימה.',
        confirmExcludeAllSimilar: 'לא לכלול את כל העסקאות הדומות? הן יהיו מוסתרות מהרשימה.',
        excluding: 'לא כולל...',
        transactionExcluded: 'עסקה לא כלולה ✓',
        excludedSimilarCount: '{count} עסקאות דומות לא כלולות',
        
        // Transaction restoration
        restore: 'שחזר',
        restoreAll: 'שחזר הכל',
        restoreSimilarTransactions: 'שחזר עסקאות דומות',
        transactionRestored: 'עסקה שוחזרה ✓',
        restoring: 'משחזר...',
        restoringAll: 'משחזר הכל...',
        confirmRestoreAll: 'לשחזר את כל העסקאות הלא כלולות?',
        allTransactionsRestored: 'כל העסקאות שוחזרו ✓',
        restoredSimilarCount: '{count} עסקאות דומות שוחזרו',
        restoreSimilarHelp: 'כאשר מופעל, לחיצה על "שחזר" תשחזר גם את כל העסקאות הדומות',
        
        // Transaction details
        similarTransactions: "עסקאות דומות",
        checkingSimilar: 'בודק עסקאות דומות...',
        fullName: "שם מלא",
        memo: "הערה",
        amount: "סכום",
        note: 'הערה',
        addNote: 'הוסף הערה (עד 10 מילים)...',
        memoTooLong: 'הערה ארוכה מדי. מקסימום 10 מילים.',
        noteSaved: 'הערה נשמרה ✓',
        optional: 'אופציונלי',
        copy: 'העתק',
        copied: 'הועתק!',
        clickToExpand: 'לחץ להרחבה',
        checkInternetConnection: "אנא בדוק את החיבור לאינטרנט ונסה שוב",
        retry: "נסה שוב",
        errorLoadingTransactions: "שגיאה בטעינת העסקאות",

        
        // ============================================
        // BANK SYNCHRONIZATION
        // ============================================
        bankSynchronization: "סנכרון בנקים",
        bankAccountsConfig: "חשבונות בנק",
        maxLeumi: "💳 Max.co.il (כרטיס לאומי)",
        isracard: "💳 ישראכרט",
        setupMaxCredentials: "🔐 הגדר פרטי Max",
        setupIsracardCredentials: "🔐 הגדר פרטי ישראכרט",
        configureCredentials: "הגדר את פרטי הגישה שלך כדי לסנכרן עסקאות.",
        credentialsConfigured: "פרטי גישה הוגדרו ✓",
        
        // Bank credentials
        bankCredentials: "🔐 פרטי גישה לבנק",
        credentialsSecure: "פרטי הגישה שלך יוצפנו וישמרו בצורה מאובטחת ב-Firebase.",
        username: "שם משתמש",
        yourUsername: "שם המשתמש שלך",
        yourPassword: "הסיסמה שלך",
        idNumber: "מספר זהות",
        cardLast6: "6 ספרות אחרונות של הכרטיס",
        yourIsraeliId: "תעודת הזהות הישראלית שלך",
        isracardId: "מזהה ישראכרט",
        isracardPassword: "סיסמת ישראכרט",
        yourIsracardId: "מזהה הישראכרט שלך",
        yourIsracardPassword: "סיסמת הישראכרט שלך",
        saveCredentials: "שמור פרטי גישה",
        credentialsSaved: "פרטי הגישה נשמרו בהצלחה!",
        errorSavingCredentials: "שגיאה בשמירת פרטי הגישה:",
        
        // Sync actions
        syncTransactions: "🔄 סנכרן עסקאות",
        syncAll: "🔄 סנכרן הכל",
        syncingWithBanks: "מסנכרן עם בנקים...",
        syncCompleted: "סנכרון הושלם! {count} עסקאות חדשות.",
        syncFailed: "סנכרון נכשל:",
        lastSync: "סנכרון אחרון:",
        never: "אף פעם",
        ago: "לפני",
        justNow: "עכשיו",
        
        // Auto-labeling
        autoLabelTitle: "🏷️ תיוג אוטומטי",
        autoLabelDescription: 'תייג אוטומטית עסקאות לא מתויגות על בסיס דפוסים קיימים',
        autoLabeling: 'מתייג עסקאות אוטומטית...',
        autoLabelCompleted: "תיוג אוטומטי הושלם! {count} עסקאות תויגו.",
        autoLabelFailed: "תיוג אוטומטי נכשל:",
        noTransactionsToLabel: "לא ניתן לתייג עסקאות אוטומטית. נסה לתייג כמה ידנית תחילה.",
        
        // ============================================
        // CSV IMPORT
        // ============================================
        importCSV: "ייבא CSV/Excel",
        importCSVDescription: "ייבא עסקאות מקבצי CSV (Revolut, N26, וכו')",
        supportedFormats: "פורמטים נתמכים: CSV, XLSX, XLS",
        bankName: "שם הבנק",
        bankNamePlaceholder: "לדוגמה: Revolut, N26, Wise...",
        bankNameHelp: "זה עוזר לך לזהות עסקאות מבנקים שונים",
        chooseCSV: "בחר קובץ CSV/Excel",
        imported: "יובא",
        importingCSV: "מייבא CSV...",
        removingCSV: "מסיר CSV...",
        noCSVImported: "לא יובאו קבצי CSV עדיין",
        enterBankNameFirst: "אנא הזן שם בנק תחילה",
        remove: "הסר",
        removeCSVConfirm: "להסיר את \"{name}\" ואת כל העסקאות שלו?",
        csvImportedSuccess: "CSV יובא בהצלחה! {count} עסקאות נוספו.",
        csvImportedWithDuplicates: "CSV יובא! {count} עסקאות נוספו ({skipped} כפילויות דולגו)",
        csvRemovedSuccess: "CSV הוסר! {count} עסקאות נמחקו.",
        errorImportingCSV: "שגיאה בייבוא CSV:",
        errorRemovingCSV: "שגיאה בהסרת CSV:",
        
        // Import period
        importPeriod: 'ייבא עסקאות מ',
        importPeriodHelp: 'רק עסקאות בתקופה זו ייובאו',
        oneMonthAgo: 'לפני חודש',
        threeMonthsAgo: 'לפני 3 חודשים',
        sixMonthsAgo: 'לפני 6 חודשים',
        twelveMonthsAgo: 'לפני 12 חודשים',
        eighteenMonthsAgo: 'לפני 18 חודשים',
        twentyFourMonthsAgo: 'לפני 24 חודשים',
        thirtySixMonthsAgo: 'לפני 36 חודשים',
        
        // ============================================
        // FILTERS & SORTING
        // ============================================
        filters: "מסננים",
        showAll: "הכל",
        all: "הכל",
        allMonths: "כל החודשים",
        allSources: "כל המקורות",
        month: "חודש",
        source: "מקור",
        type: "סוג",
        expenses: "הוצאות",
        labelStatus: "סטטוס תיוג",
        showOnlyUnlabeled: "לא מתויגות בלבד",
        showOnlyLabeled: "מתויגות בלבד",
        search: "חפש...",
        clear: "אפס",
        selectCategory: "בחר קטגוריה",
        
        // Sort options
        sortBy: "מיין לפי",
        sortDateNewest: "📅 תאריך (חדש)",
        sortDateOldest: "📅 תאריך (ישן)",
        sortAmountHighest: "💰 סכום (גבוה)",
        sortAmountLowest: "💰 סכום (נמוך)",
        sortFrequencyMost: "🔄 תדירות (גבוהה)",
        sortFrequencyLeast: "🔄 תדירות (נמוכה)",
        
        // Transaction display limits
        showTransactions: "הצג עסקאות",
        show50: "הצג 50",
        show500: "הצג 500",
        show1000: "הצג 1000",
        show2000: "הצג 2000",
        loadMore: "טען עוד",
        batchSize: "עסקאות לעמוד",
        
        // Selection
        selectAll: 'בחר הכל',
        deselectAll: 'בטל בחירת הכל',
        
        // ============================================
        // COLORS & CUSTOMIZATION
        // ============================================
        colors: "🎨 צבעים",
        customizeColors: "🎨 התאם צבעים",
        resetColors: 'אפס לברירת מחדל',
        resetColorsConfirm: "לאפס את כל הצבעים לברירת המחדל?",
        resetToDefault: "אפס לברירת מחדל",
        randomColors: "צבעים אקראיים",
        randomizeColors: '🎲 צבעים אקראיים',
        colorByCategory: 'קבץ לפי קטגוריות',
        categoryColors: "צבעי קטגוריות",
        itemColors: "צבעי פריטים",
        advanced: "מתקדם",
        backToCategories: "חזור לקטגוריות",
        
        // Emoji selection
        selectEmoji: 'בחר אימוג\'י',
        customEmojiPlaceholder: 'או הקלד/הדבק אימוג\'י כאן...',
        orChooseBelow: 'או בחר למטה',
        useCustomEmoji: 'השתמש',
        pleaseEnterEmoji: 'אנא הזן אימוג\'י',
        
        // ============================================
        // SETTINGS
        // ============================================
        currency: "מטבע",
        language: "שפה",
        darkMode: "מצב כהה",
        enableDarkMode: "הפעל מצב כהה",
        
        // Income tracking
        incomeTracking: "מעקב הכנסות",
        trackIncome: "עקוב אחר הכנסות חודשיות",
        trackIncomeDesc: "כאשר מופעל, אתה יכול לעקוב אחר מקורות ההכנסה שלך ולראות כמה כסף נשאר אחרי ההוצאות.",
        
        // Percentage calculation
        percentageCalculation: "חישוב אחוזים",
        basedOnExpenses: "מבוסס על סך ההוצאות",
        basedOnIncome: "מבוסס על סך ההכנסה",
        percentageDesc: "בחר כיצד אחוזי הקטגוריות מחושבים",
        
        // Database maintenance
        databaseMaintenance: "תחזוקת מסד נתונים",
        cleanGhostCategories: "🧹 נקה קטגוריות רפאים",
        cleanDescription: "הסר קטגוריות שקיימות בנתונים שלך אך אינן מוצגות כראוי. השתמש בזה אם יש לך בעיות עם קטגוריות שלא מופיעות או לא ניתן ליצור.",
        clearData: "נקה נתונים",
        clearAllTransactions: "נקה את כל העסקאות",
        clearTransactionsWarning: "הסר את כל העסקאות המסונכרנות ממסד הנתונים. לא ניתן לבטל פעולה זו.",
        transactionsCleared: "{count} עסקאות ו-{csvCount} רשומות CSV נמחקו בהצלחה",
        errorClearingTransactions: "שגיאה:",
        
        // App info
        appVersion: 'גרסת האפליקציה',
        versionInfo: 'גרסה נוכחית של אפליקציית הפיננסים האישיים שלך',
        madeBy: "נוצר על ידי ויקטור ברטמן",
        contactInfo: "לכל דיווח על באג, רעיונות או הצעות:",
        
        // ============================================
        // COMMON BUTTONS & ACTIONS
        // ============================================
        save: "שמור",
        cancel: "ביטול",
        done: "סיום",
        close: "✕",
        resetAll: "אפס את כל ההוצאות",
        updatingTransactions: 'מעדכן עסקאות...',
        
        // ============================================
        // PROMPTS & CONFIRMATIONS
        // ============================================
        enterCategoryName: "הזן שם קטגוריה:",
        enterEmoji: "הזן אימוג'י (לדוגמה: 🎮):",
        enterFirstItem: "הזן שם פריט ראשון:",
        enterNewItemName: "הזן שם פריט חדש:",
        enterNewName: "הזן שם חדש:",
        enterNewCategoryName: "הזן שם חדש עבור \"{current}\":",
        deleteCategoryConfirm: "למחוק את \"{name}\" ({amount})?\n\nכל העסקאות המתויגות לא יהיו מתויגות.",
        deleteItemConfirm: "למחוק פריט זה?",
        lastItemConfirm: "פריט אחרון בקטגוריה. למחוק את כל הקטגוריה?",
        resetAllConfirm: "לאפס את כל ההוצאות ל-0?",
        clearAllWarning1: "⚠️ למחוק את כל העסקאות? לא ניתן לבטל פעולה זו!",
        clearAllWarning2: "⚠️ אזהרה אחרונה: למחוק לצמיתות את כל העסקאות?",
        
        // ============================================
        // STATUS & LOADING MESSAGES
        // ============================================
        loading: "טוען...",
        processing: "מעבד...",
        processingTransactions: "מעבד עסקאות",
        deletingTransactions: "מוחק עסקאות",
        deletingAllTransactions: "מוחק את כל העסקאות...",
        saving: "שומר...",
        pleaseWait: 'אנא המתן',
        thisMayTakeAMoment: "זה עשוי לקחת רגע",
        updateAvailable: "עדכון זמין",
        installingUpdate: "מתקין עדכון...",
        
        // ============================================
        // ERRORS
        // ============================================
        // Auth errors
        pleaseEnterEmail: "אנא הזן את כתובת האימייל שלך",
        pleaseEnterEmailAndPassword: "אנא הזן אימייל וסיסמה",
        errorPasswordRequired: "אנא הזן את הסיסמה שלך",
        errorEmailInvalid: "פורמט אימייל לא חוקי",
        errorPasswordTooShort: "הסיסמה חייבת להכיל לפחות 6 תווים",
        errorUserNotFound: "לא נמצא חשבון עם אימייל זה",
        errorWrongPassword: "סיסמה שגויה",
        errorEmailAlreadyUsed: "אימייל זה כבר רשום",
        errorWeakPassword: "הסיסמה חלשה מדי. השתמש לפחות ב-6 תווים.",
        errorTooManyRequests: "יותר מדי ניסיונות כושלים. אנא נסה שוב מאוחר יותר.",
        errorNetworkFailed: "שגיאת רשת. בדוק את החיבור שלך.",
        errorUnknown: "אירעה שגיאה. אנא נסה שוב.",
        authError: "אירעה שגיאה. אנא נסה שוב.",
        emailAlreadyInUse: "אימייל זה כבר רשום. אנא התחבר במקום.",
        weakPassword: "הסיסמה חייבת להכיל לפחות 6 תווים",
        invalidEmail: "כתובת אימייל לא חוקית",
        userNotFound: "לא נמצא חשבון עם אימייל זה",
        wrongPassword: "סיסמה שגויה",
        unknownError: "אירעה שגיאה. אנא נסה שוב.",
        emailInUse: "אימייל זה כבר בשימוש. נסה להתחבר.",
        invalidCredentials: "אימייל או סיסמה לא חוקיים.",
        tooManyRequests: "יותר מדי ניסיונות כושלים. אנא נסה שוב מאוחר יותר.",
        
        // Other errors
        noExpensesYet: "אין הוצאות עדיין",
        
        // ============================================
        // TIME & DATE
        // ============================================
        minutes: "דקות",
        hours: "שעות",
        days: "ימים",
        transactions: "עסקאות",
        
        // Month names
        january: "ינואר",
        february: "פברואר",
        march: "מרץ",
        april: "אפריל",
        may: "מאי",
        june: "יוני",
        july: "יולי",
        august: "אוגוסט",
        september: "ספטמבר",
        october: "אוקטובר",
        november: "נובמבר",
        december: "דצמבר",

        janShort: "ינו", febShort: "פבר", marShort: "מרץ", aprShort: "אפר",
        mayShort: "מאי", junShort: "יונ", julShort: "יול", augShort: "אוג",
        sepShort: "ספט", octShort: "אוק", novShort: "נוב", decShort: "דצמ",
        
        // ============================================
        // CURRENCY & CONVERSION
        // ============================================
        conversionInfo: "הסכומים מומרים באמצעות שערי חליפין יומיים ועשויים להיות משוערים",
        noIncomeThisMonth: "אין עסקאות הכנסה החודש",
        noExpensesThisMonth: "אין הוצאות החודש",
        estimatedBudgetNote: "הצגת אומדני תקציב",
    },

    // ============================================
    // SPANISH (es)
    // ============================================
    es: {
        // ============================================
        // AUTHENTICATION & ACCOUNT
        // ============================================
        appTitle: "💰 Seguimiento de Gastos",
        authSubtitle: "Inicia sesión para sincronizar tus gastos",
        email: "Correo electrónico",
        password: "Contraseña (mín. 6 caracteres)",
        signIn: "Iniciar sesión",
        signUp: "Registrarse",
        noAccount: "¿No tienes una cuenta?",
        hasAccount: "¿Ya tienes una cuenta?",
        signingIn: "Iniciando sesión...",
        creatingAccount: "Creando cuenta...",
        rememberMe: 'Recuérdame',
        forgotPassword: "¿Olvidaste tu contraseña?",
        resetPassword: "Restablecer contraseña",
        resetPasswordDesc: "Ingresa tu correo para recibir un enlace de restablecimiento",
        sendResetEmail: "Enviar correo",
        resetEmailSent: "¡Correo de restablecimiento enviado! Revisa tu bandeja de entrada.",
        resetEmailError: "Error al enviar el correo. Verifica tu dirección de correo.",
        deleteAccount: "Eliminar cuenta",
        deleteAccountWarning: "Esta acción es irreversible. Todos tus datos serán eliminados permanentemente.",
        confirmDelete: "¿Estás seguro de que quieres eliminar tu cuenta?",
        confirmDeleteButton: "Sí, eliminar mi cuenta",
        accountDeleted: "Tu cuenta ha sido eliminada exitosamente",
        errorDeletingAccount: "Error al eliminar la cuenta. Por favor, inténtalo de nuevo.",
        recentLoginRequired: "Por seguridad, inicia sesión de nuevo antes de eliminar tu cuenta",
        accountDisabled: "Esta cuenta ha sido deshabilitada. Por favor, contacta al soporte.",
        account: "Cuenta",
        loggedInAs: "Sesión iniciada como:",
        logout: "Cerrar sesión",
        logoutConfirm: "¿Estás seguro de que quieres cerrar sesión?",
        
        // ============================================
        // NAVIGATION & TABS
        // ============================================
        budgetTab: "Presupuesto",
        transactionsTab: "Transacciones",
        transaction: "transacción",
        transactions: "transacciones",

        settings: "Configuración",
        settingsTitle: "⚙️ Configuración",
        
        // ============================================
        // BUDGET - MAIN APP
        // ============================================
        income: "Ingresos",
        expenses: "Gastos",
        remaining: "Restante",
        ofIncome: "de ingresos",
        budget: "Presupuesto",
        real: "Real",
        estimated: "Estimado",
        spent: "Real",
        overBy: "Sobrepaso de",
        underBy: "Ahorro de",
        exactly: "Cantidad exacta",
        used: "usado",
        ofExpenses: "de gastos",
        
        // Budget modes
        budgetVsReal: "Presupuesto vs Real",
        
        // Charts
        pieChart: "🍩 Gráfico circular",
        barChart: "📊 Gráfico de barras",
        monthlySpendingTrend: "Tendencia de gastos mensuales",
        compare: "📊 Comparar",
        categoryTrends: "Tendencias por categoría",
        last6Months: "Últimos 6 meses",
        
        // ============================================
        // CATEGORIES
        // ============================================
        editCategories: "✏️ Editar categorías",
        doneEditing: "✓ Listo",
        addCategory: "➕ Agregar categoría",
        category: "Categoría",
        selectCategories: "Seleccionar categorías",
        allCategories: "Todas las categorías",
        
        // Category actions
        moveUp: "↑ Subir",
        moveDown: "↓ Bajar",
        addItem: "➕ Agregar elemento",
        deleteCategory: " Eliminar categoría",
        cannotDeleteIncome: "No se puede eliminar la categoría de Ingresos.",
        cannotRenameIncome: "No se puede renombrar la categoría de Ingresos.",
        cannotUseSystemName: "No se puede usar el nombre de una categoría del sistema.",
        
        // Category messages
        categoryUpdated: '¡Categoría actualizada exitosamente!',
        categoryRenamedSuccess: "¡Categoría renombrada exitosamente! {count} transacción(es) actualizada(s).",
        categoryDeletedSuccess: "¡Categoría eliminada! {count} transacción(es) sin etiqueta.",
        categoryExistsAlert: "¡Esta categoría ya existe!",
        categoryNotFoundAlert: "¡Categoría no encontrada!",
        topOfListAlert: "Esta categoría ya está en la parte superior de la lista de gastos (después de Ingresos).",
        errorCreatingCategory: "Error al crear la categoría. Por favor, inténtalo de nuevo.",
        errorRenamingCategory: "Error al renombrar la categoría:",
        errorDeletingCategory: "Error al eliminar la categoría:",
        renamingCategory: 'Renombrando categoría...',
        deletingCategory: 'Eliminando categoría...',
        
        // Default categories
        housing: "🏠 Vivienda",
        tech: "📱 Comunicaciones y Tecnología",
        pet: "🐱 Cuidado de mascotas",
        subscriptions: "🎬 Suscripciones",
        groceries: "🛒 Compras",
        other: "💸 Otros gastos",
        
        // Default items
        salary: "Salario",
        rent: "Alquiler",
        arnona: "Arnona",
        electricity: "Electricidad",
        gas: "Gas",
        water: "Agua",
        phonePlan: "Plan telefónico",
        internet: "Internet",
        icloud: "iCloud",
        catFood: "Comida para gato",
        litter: "Arena para gato",
        youtube: "YouTube Premium",
        claude: "Claude Pro",
        therapist: "Terapeuta",
        food: "Comida",
        household: "Productos del hogar",
        personalCare: "Cuidado personal",
        otherExpenses: "Otros gastos",
        
        // ============================================
        // TRANSACTIONS
        // ============================================
        allTransactions: "Transacciones",
        noTransactionsAdded: "No se han agregado transacciones aún",
        addTransactionToStart: "Agrega una transacción para comenzar",
        noMatchingTransactions: "No hay transacciones que coincidan con los filtros actuales",
        noTransactionsYet: "No hay transacciones aún",
        clickSyncToStart: "Haz clic en \"Sincronizar todo\" para comenzar",
        loadingTransactions: "Cargando transacciones...",
        showingTransactions: "Mostrando {shown} de {total} transacciones",
        moreHidden: "{count} transacciones ocultas - ajusta el filtro \"Mostrar\" para ver más",
        adjustFiltersToSeeMore: "Ajusta tus filtros para ver más transacciones",
        
        // Transaction actions
        addTransaction: 'Agregar transacción',
        addManualTransaction: 'Agregar transacción',
        transactionName: 'Nombre',
        transactionAdded: '¡Transacción agregada exitosamente!',
        addingTransaction: 'Agregando transacción...',
        
        // Transaction labeling
        labelingTransaction: 'Etiquetando transacción...',
        unlabelingTransaction: 'Eliminando etiqueta...',
        labelingTransactionUnique: 'Etiquetando solo esta transacción...',
        unlabelingTransactionUnique: 'Eliminando etiqueta solo de esta transacción...',
        labelingMultipleTransactions: 'Etiquetando {count} transacciones...',
        transactionLabeled: '¡Transacción etiquetada! ✓',
        transactionLabeledUnique: 'Transacción etiquetada (única) ✓',
        labeledWithSimilar: '¡1 transacción + {count} similar(es) etiquetada(s)! ✓',
        labelRemoved: '¡Etiqueta eliminada! ✓',
        labelRemovedUnique: 'Etiqueta eliminada (única) ✓',
        labelRemovedWithSimilar: '¡Etiqueta eliminada de 1 transacción + {count} similar(es)! ✓',
        multipleTransactionsLabeled: '¡{count} transacciones etiquetadas!',
        uniqueLabel: '1×',
        
        // Transaction exclusion
        exclude: 'Excluir',
        excludeTransaction: 'Excluir transacción',
        excludeThisOnly: 'Excluir solo esta transacción',
        excludeAllSimilar: 'Excluir todas las transacciones similares',
        excluded: 'Excluido',
        excludedTransactions: 'Transacciones excluidas',
        noExcludedTransactions: 'No hay transacciones excluidas',
        confirmExclude: '¿Excluir esta transacción? Se ocultará de la lista.',
        confirmExcludeAllSimilar: '¿Excluir todas las transacciones similares? Se ocultarán de la lista.',
        excluding: 'Excluyendo...',
        transactionExcluded: 'Transacción excluida ✓',
        excludedSimilarCount: '{count} transacción(es) similar(es) excluida(s)',
        
        // Transaction restoration
        restore: 'Restaurar',
        restoreAll: 'Restaurar todo',
        restoreSimilarTransactions: 'Restaurar transacciones similares',
        transactionRestored: 'Transacción restaurada ✓',
        restoring: 'Restaurando...',
        restoringAll: 'Restaurando todo...',
        confirmRestoreAll: '¿Restaurar todas las transacciones excluidas?',
        allTransactionsRestored: 'Todas las transacciones restauradas ✓',
        restoredSimilarCount: '{count} transacción(es) similar(es) restaurada(s)',
        restoreSimilarHelp: 'Cuando está habilitado, hacer clic en "Restaurar" también restaurará todas las transacciones similares',
        
        // Transaction details
        similarTransactions: "Transacciones similares",
        checkingSimilar: 'Buscando transacciones similares...',
        fullName: "Nombre completo",
        memo: "Nota",
        amount: "Cantidad",
        note: 'Nota',
        addNote: 'Agregar una nota (máx. 10 palabras)...',
        memoTooLong: 'Nota demasiado larga. Máximo 10 palabras.',
        noteSaved: 'Nota guardada ✓',
        optional: 'opcional',
        copy: 'Copiar',
        copied: '¡Copiado!',
        clickToExpand: 'Haz clic para expandir',
        checkInternetConnection: "Por favor, verifica tu conexión a internet e inténtalo de nuevo",
        retry: "Reintentar",
        errorLoadingTransactions: "Error al cargar transacciones",
        
        // ============================================
        // BANK SYNCHRONIZATION
        // ============================================
        bankSynchronization: "Sincronización bancaria",
        bankAccountsConfig: "Cuentas bancarias",
        maxLeumi: "💳 Max.co.il (Tarjeta Leumi)",
        isracard: "💳 Isracard",
        setupMaxCredentials: "🔐 Configurar credenciales Max",
        setupIsracardCredentials: "🔐 Configurar credenciales Isracard",
        configureCredentials: "Configura tus credenciales para sincronizar transacciones.",
        credentialsConfigured: "Credenciales configuradas ✓",
        
        // Bank credentials
        bankCredentials: "🔐 Credenciales bancarias",
        credentialsSecure: "Tus credenciales serán encriptadas y almacenadas de forma segura en Firebase.",
        username: "Usuario",
        yourUsername: "Tu usuario",
        yourPassword: "Tu contraseña",
        idNumber: "Número de identificación",
        cardLast6: "Últimos 6 dígitos de la tarjeta",
        yourIsraeliId: "Tu ID israelí",
        isracardId: "ID de Isracard",
        isracardPassword: "Contraseña de Isracard",
        yourIsracardId: "Tu ID de Isracard",
        yourIsracardPassword: "Tu contraseña de Isracard",
        saveCredentials: "Guardar credenciales",
        credentialsSaved: "¡Credenciales guardadas exitosamente!",
        errorSavingCredentials: "Error al guardar las credenciales:",
        
        // Sync actions
        syncTransactions: "🔄 Sincronizar transacciones",
        syncAll: "🔄 Sincronizar todo",
        syncingWithBanks: "Sincronizando con bancos...",
        syncCompleted: "¡Sincronización completada! {count} transacción(es) nueva(s).",
        syncFailed: "Sincronización fallida:",
        lastSync: "Última sincronización:",
        never: "Nunca",
        ago: "hace",
        justNow: "Justo ahora",
        
        // Auto-labeling
        autoLabelTitle: "🏷️ Etiquetado automático",
        autoLabelDescription: 'Etiquetar automáticamente transacciones sin etiqueta basándose en patrones existentes',
        autoLabeling: 'Etiquetando transacciones automáticamente...',
        autoLabelCompleted: "¡Etiquetado automático completado! {count} transacción(es) etiquetada(s).",
        autoLabelFailed: "Etiquetado automático fallido:",
        noTransactionsToLabel: "No se pudieron etiquetar transacciones automáticamente. Intenta etiquetar algunas manualmente primero.",
        
        // ============================================
        // CSV IMPORT
        // ============================================
        importCSV: "Importar CSV/Excel",
        importCSVDescription: "Importar transacciones desde archivos CSV (Revolut, N26, etc.)",
        supportedFormats: "Formatos soportados: CSV, XLSX, XLS",
        bankName: "Nombre del banco",
        bankNamePlaceholder: "ej: Revolut, N26, Wise...",
        bankNameHelp: "Esto te ayuda a identificar transacciones de diferentes bancos",
        chooseCSV: "Elegir archivo CSV/Excel",
        imported: "Importado",
        importingCSV: "Importando CSV...",
        removingCSV: "Eliminando CSV...",
        noCSVImported: "No se han importado archivos CSV aún",
        enterBankNameFirst: "Por favor ingresa un nombre de banco primero",
        remove: "Eliminar",
        removeCSVConfirm: "¿Eliminar \"{name}\" y todas sus transacciones?",
        csvImportedSuccess: "¡CSV importado exitosamente! {count} transacción(es) agregada(s).",
        csvImportedWithDuplicates: "¡CSV importado! {count} transacción(es) agregada(s) ({skipped} duplicados omitidos)",
        csvRemovedSuccess: "¡CSV eliminado! {count} transacción(es) eliminada(s).",
        errorImportingCSV: "Error al importar CSV:",
        errorRemovingCSV: "Error al eliminar CSV:",
        
        // Import period
        importPeriod: 'Importar transacciones desde',
        importPeriodHelp: 'Solo se importarán las transacciones dentro de este período',
        oneMonthAgo: 'Hace 1 mes',
        threeMonthsAgo: 'Hace 3 meses',
        sixMonthsAgo: 'Hace 6 meses',
        twelveMonthsAgo: 'Hace 12 meses',
        eighteenMonthsAgo: 'Hace 18 meses',
        twentyFourMonthsAgo: 'Hace 24 meses',
        thirtySixMonthsAgo: 'Hace 36 meses',
        
        // ============================================
        // FILTERS & SORTING
        // ============================================
        filters: "Filtros",
        showAll: "Todo",
        all: "Todo",
        allMonths: "Todos los meses",
        allSources: "Todas las fuentes",
        month: "Mes",
        source: "Fuente",
        type: "Tipo",
        expenses: "Gastos",
        labelStatus: "Estado de etiqueta",
        showOnlyUnlabeled: "Solo sin etiqueta",
        showOnlyLabeled: "Solo etiquetadas",
        search: "Buscar...",
        clear: "Restablecer",
        selectCategory: "Seleccionar categoría",
        
        // Sort options
        sortBy: "Ordenar por",
        sortDateNewest: "📅 Fecha (más reciente)",
        sortDateOldest: "📅 Fecha (más antigua)",
        sortAmountHighest: "💰 Cantidad (mayor)",
        sortAmountLowest: "💰 Cantidad (menor)",
        sortFrequencyMost: "🔄 Frecuencia (mayor)",
        sortFrequencyLeast: "🔄 Frecuencia (menor)",
        
        // Transaction display limits
        showTransactions: "Mostrar transacciones",
        show50: "Mostrar 50",
        show500: "Mostrar 500",
        show1000: "Mostrar 1000",
        show2000: "Mostrar 2000",
        loadMore: "Cargar más",
        batchSize: "Transacciones por página",
        
        // Selection
        selectAll: 'Seleccionar todo',
        deselectAll: 'Deseleccionar todo',
        
        // ============================================
        // COLORS & CUSTOMIZATION
        // ============================================
        colors: "🎨 Colores",
        customizeColors: "🎨 Personalizar colores",
        resetColors: 'Restablecer por defecto',
        resetColorsConfirm: "¿Restablecer todos los colores por defecto?",
        resetToDefault: "Restablecer por defecto",
        randomColors: "Colores aleatorios",
        randomizeColors: '🎲 Colores aleatorios',
        colorByCategory: 'Agrupar por categorías',
        categoryColors: "Colores de categorías",
        itemColors: "Colores de elementos",
        advanced: "Avanzado",
        backToCategories: "Volver a categorías",
        
        // Emoji selection
        selectEmoji: 'Seleccionar emoji',
        customEmojiPlaceholder: 'O escribe/pega cualquier emoji aquí...',
        orChooseBelow: 'o elige abajo',
        useCustomEmoji: 'Usar',
        pleaseEnterEmoji: 'Por favor ingresa un emoji',
        
        // ============================================
        // SETTINGS
        // ============================================
        currency: "Moneda",
        language: "Idioma",
        darkMode: "Modo oscuro",
        enableDarkMode: "Activar modo oscuro",
        
        // Income tracking
        incomeTracking: "Seguimiento de ingresos",
        trackIncome: "Rastrear ingresos mensuales",
        trackIncomeDesc: "Cuando está habilitado, puedes rastrear tus fuentes de ingresos y ver cuánto dinero queda después de los gastos.",
        
        // Percentage calculation
        percentageCalculation: "Cálculo de porcentajes",
        basedOnExpenses: "Basado en gastos totales",
        basedOnIncome: "Basado en ingresos totales",
        percentageDesc: "Elige cómo se calculan los porcentajes de categorías",
        
        // Database maintenance
        databaseMaintenance: "Mantenimiento de base de datos",
        cleanGhostCategories: "🧹 Limpiar categorías fantasma",
        cleanDescription: "Eliminar categorías que existen en tus datos pero no se muestran correctamente. Usa esto si tienes problemas con categorías que no aparecen o no se pueden crear.",
        clearData: "Borrar datos",
        clearAllTransactions: "Borrar todas las transacciones",
        clearTransactionsWarning: "Eliminar todas las transacciones sincronizadas de la base de datos. Esto no se puede deshacer.",
        transactionsCleared: "{count} transacción(es) y {csvCount} registro(s) CSV eliminados exitosamente",
        errorClearingTransactions: "Error:",
        
        // App info
        appVersion: 'Versión de la app',
        versionInfo: 'Versión actual de tu aplicación de finanzas personales',
        madeBy: "Hecho por Victor Burtman",
        contactInfo: "Para cualquier reporte de errores, ideas o sugerencias:",
        
        // ============================================
        // COMMON BUTTONS & ACTIONS
        // ============================================
        save: "Guardar",
        cancel: "Cancelar",
        done: "Listo",
        close: "✕",
        resetAll: "Restablecer todos los gastos",
        updatingTransactions: 'Actualizando transacciones...',
        
        // ============================================
        // PROMPTS & CONFIRMATIONS
        // ============================================
        enterCategoryName: "Ingresa el nombre de la categoría:",
        enterEmoji: "Ingresa un emoji (ej: 🎮):",
        enterFirstItem: "Ingresa el nombre del primer elemento:",
        enterNewItemName: "Ingresa el nombre del nuevo elemento:",
        enterNewName: "Ingresa el nuevo nombre:",
        enterNewCategoryName: "Ingresa el nuevo nombre para \"{current}\":",
        deleteCategoryConfirm: "¿Eliminar \"{name}\" ({amount})?\n\nTodas las transacciones etiquetadas quedarán sin etiqueta.",
        deleteItemConfirm: "¿Eliminar este elemento?",
        lastItemConfirm: "Último elemento en la categoría. ¿Eliminar toda la categoría?",
        resetAllConfirm: "¿Restablecer todos los gastos a 0?",
        clearAllWarning1: "⚠️ ¿Eliminar TODAS las transacciones? ¡Esto no se puede deshacer!",
        clearAllWarning2: "⚠️ ADVERTENCIA FINAL: ¿Eliminar permanentemente todas las transacciones?",
        
        // ============================================
        // STATUS & LOADING MESSAGES
        // ============================================
        loading: "Cargando...",
        processing: "Procesando...",
        processingTransactions: "Procesando transacciones",
        deletingTransactions: "Eliminando transacciones",
        deletingAllTransactions: "Eliminando todas las transacciones...",
        saving: "Guardando...",
        pleaseWait: 'Por favor espera',
        thisMayTakeAMoment: "Esto puede tomar un momento",
        updateAvailable: "Actualización disponible",
        installingUpdate: "Instalando actualización...",
        
        // ============================================
        // ERRORS
        // ============================================
        // Auth errors
        pleaseEnterEmail: "Por favor ingresa tu dirección de correo",
        pleaseEnterEmailAndPassword: "Por favor ingresa correo y contraseña",
        errorPasswordRequired: "Por favor ingresa tu contraseña",
        errorEmailInvalid: "Formato de correo inválido",
        errorPasswordTooShort: "La contraseña debe tener al menos 6 caracteres",
        errorUserNotFound: "No se encontró ninguna cuenta con este correo",
        errorWrongPassword: "Contraseña incorrecta",
        errorEmailAlreadyUsed: "Este correo ya está registrado",
        errorWeakPassword: "La contraseña es demasiado débil. Usa al menos 6 caracteres.",
        errorTooManyRequests: "Demasiados intentos fallidos. Por favor, inténtalo más tarde.",
        errorNetworkFailed: "Error de red. Verifica tu conexión.",
        errorUnknown: "Ocurrió un error. Por favor, inténtalo de nuevo.",
        authError: "Ocurrió un error. Por favor, inténtalo de nuevo.",
        emailAlreadyInUse: "Este correo ya está registrado. Por favor inicia sesión.",
        weakPassword: "La contraseña debe tener al menos 6 caracteres",
        invalidEmail: "Dirección de correo inválida",
        userNotFound: "No se encontró ninguna cuenta con este correo",
        wrongPassword: "Contraseña incorrecta",
        unknownError: "Ocurrió un error. Por favor, inténtalo de nuevo.",
        emailInUse: "Este correo ya está en uso. Intenta iniciar sesión.",
        invalidCredentials: "Correo o contraseña inválidos.",
        tooManyRequests: "Demasiados intentos fallidos. Por favor, inténtalo más tarde.",
        
        // Other errors
        noExpensesYet: "No hay gastos aún",
        
        // ============================================
        // TIME & DATE
        // ============================================
        minutes: "minutos",
        hours: "horas",
        days: "días",
        transactions: "transacción(es)",
        
        // Month names
        january: "Enero",
        february: "Febrero",
        march: "Marzo",
        april: "Abril",
        may: "Mayo",
        june: "Junio",
        july: "Julio",
        august: "Agosto",
        september: "Septiembre",
        october: "Octubre",
        november: "Noviembre",
        december: "Diciembre",

        janShort: "Ene", febShort: "Feb", marShort: "Mar", aprShort: "Abr",
        mayShort: "May", junShort: "Jun", julShort: "Jul", augShort: "Ago",
        sepShort: "Sep", octShort: "Oct", novShort: "Nov", decShort: "Dic",
        
        // ============================================
        // CURRENCY & CONVERSION
        // ============================================
        conversionInfo: "Las cantidades se convierten usando tasas de cambio diarias y pueden ser aproximadas",
        noIncomeThisMonth: "No hay transacciones de ingresos este mes",
        noExpensesThisMonth: "No hay gastos este mes",
        estimatedBudgetNote: "Estimaciones presupuestarias mostradas",
    },

    // ============================================
    // RUSSIAN (ru)
    // ============================================
    ru: {
        // ============================================
        // AUTHENTICATION & ACCOUNT
        // ============================================
        appTitle: "💰 Учет расходов",
        authSubtitle: "Войдите, чтобы синхронизировать свои расходы",
        email: "Эл. почта",
        password: "Пароль (мин. 6 символов)",
        signIn: "Войти",
        signUp: "Зарегистрироваться",
        noAccount: "Нет аккаунта?",
        hasAccount: "Уже есть аккаунт?",
        signingIn: "Вход...",
        creatingAccount: "Создание аккаунта...",
        rememberMe: 'Запомнить меня',
        forgotPassword: "Забыли пароль?",
        resetPassword: "Сбросить пароль",
        resetPasswordDesc: "Введите свой email для получения ссылки на сброс пароля",
        sendResetEmail: "Отправить письмо",
        resetEmailSent: "Письмо для сброса пароля отправлено! Проверьте свою почту.",
        resetEmailError: "Ошибка отправки письма. Проверьте адрес электронной почты.",
        deleteAccount: "Удалить аккаунт",
        deleteAccountWarning: "Это действие необратимо. Все ваши данные будут удалены навсегда.",
        confirmDelete: "Вы уверены, что хотите удалить свой аккаунт?",
        confirmDeleteButton: "Да, удалить мой аккаунт",
        accountDeleted: "Ваш аккаунт успешно удален",
        errorDeletingAccount: "Ошибка удаления аккаунта. Попробуйте снова.",
        recentLoginRequired: "Для безопасности войдите снова перед удалением аккаунта",
        accountDisabled: "Этот аккаунт отключен. Обратитесь в поддержку.",
        account: "Аккаунт",
        loggedInAs: "Вы вошли как:",
        logout: "Выйти",
        logoutConfirm: "Вы уверены, что хотите выйти?",
        
        // ============================================
        // NAVIGATION & TABS
        // ============================================
        budgetTab: "Бюджет",
        transactionsTab: "Транзакции",
        transaction: "транзакция",
        transactions: "транзакции",
        settings: "Настройки",
        settingsTitle: "⚙️ Настройки",
        
        // ============================================
        // BUDGET - MAIN APP
        // ============================================
        income: "Доходы",
        expenses: "Расходы",
        remaining: "Остаток",
        ofIncome: "от дохода",
        budget: "Бюджет",
        real: "Фактически",
        estimated: "Оценка",
        spent: "Реальные",
        overBy: "Превышение на",
        underBy: "Экономия",
        exactly: "Точная сумма",
        used: "использовано",
        ofExpenses: "от расходов",
        
        // Budget modes
        budgetVsReal: "Бюджет vs Факт",
        
        // Charts
        pieChart: "🍩 Круговая диаграмма",
        barChart: "📊 Гистограмма",
        monthlySpendingTrend: "Тренд месячных расходов",
        compare: "📊 Сравнить",
        categoryTrends: "Тенденции по категориям",
        last6Months: "Последние 6 месяцев",
        
        // ============================================
        // CATEGORIES
        // ============================================
        editCategories: "✏️ Редактировать категории",
        doneEditing: "✓ Готово",
        addCategory: "➕ Добавить категорию",
        category: "Категория",
        selectCategories: "Выбрать категории",
        allCategories: "Все категории",
        
        // Category actions
        moveUp: "↑ Поднять",
        moveDown: "↓ Опустить",
        addItem: "➕ Добавить элемент",
        deleteCategory: " Удалить категорию",
        cannotDeleteIncome: "Невозможно удалить категорию Доход.",
        cannotRenameIncome: "Невозможно переименовать категорию Доход.",
        cannotUseSystemName: "Невозможно использовать имя системной категории.",
        
        // Category messages
        categoryUpdated: 'Категория успешно обновлена!',
        categoryRenamedSuccess: "Категория успешно переименована! Обновлено транзакций: {count}.",
        categoryDeletedSuccess: "Категория удалена! Транзакций без метки: {count}.",
        categoryExistsAlert: "Эта категория уже существует!",
        categoryNotFoundAlert: "Категория не найдена!",
        topOfListAlert: "Эта категория уже находится в верху списка расходов (после Дохода).",
        errorCreatingCategory: "Ошибка создания категории. Попробуйте снова.",
        errorRenamingCategory: "Ошибка переименования категории:",
        errorDeletingCategory: "Ошибка удаления категории:",
        renamingCategory: 'Переименование категории...',
        deletingCategory: 'Удаление категории...',
        
        // Default categories
        housing: "🏠 Жилье",
        tech: "📱 Связь и технологии",
        pet: "🐱 Уход за питомцами",
        subscriptions: "🎬 Подписки",
        groceries: "🛒 Покупки",
        other: "💸 Прочие расходы",
        
        // Default items
        salary: "Зарплата",
        rent: "Аренда",
        arnona: "Арнона",
        electricity: "Электричество",
        gas: "Газ",
        water: "Вода",
        phonePlan: "Тариф телефона",
        internet: "Интернет",
        icloud: "iCloud",
        catFood: "Корм для кошки",
        litter: "Наполнитель",
        youtube: "YouTube Premium",
        claude: "Claude Pro",
        therapist: "Терапевт",
        food: "Еда",
        household: "Бытовые товары",
        personalCare: "Личная гигиена",
        otherExpenses: "Прочие расходы",
        
        // ============================================
        // TRANSACTIONS
        // ============================================
        allTransactions: "транзакции",
        noTransactionsAdded: "Транзакции еще не добавлены",
        addTransactionToStart: "Добавьте транзакцию для начала",
        noMatchingTransactions: "Нет транзакций, соответствующих текущим фильтрам",
        noTransactionsYet: "Транзакций пока нет",
        clickSyncToStart: "Нажмите \"Синхронизировать все\" для начала",
        loadingTransactions: "Загрузка транзакций...",
        showingTransactions: "Показано {shown} из {total} транзакций",
        moreHidden: "Скрыто транзакций: {count} - настройте фильтр \"Показать\" для просмотра",
        adjustFiltersToSeeMore: "Настройте фильтры, чтобы увидеть больше транзакций",

        
        // Transaction actions
        addTransaction: 'Добавить транзакцию',
        addManualTransaction: 'Добавить транзакцию',
        transactionName: 'Название',
        transactionAdded: 'Транзакция успешно добавлена!',
        addingTransaction: 'Добавление транзакции...',
        
        // Transaction labeling
        labelingTransaction: 'Присвоение метки транзакции...',
        unlabelingTransaction: 'Удаление метки...',
        labelingTransactionUnique: 'Присвоение метки только этой транзакции...',
        unlabelingTransactionUnique: 'Удаление метки только у этой транзакции...',
        labelingMultipleTransactions: 'Присвоение меток {count} транзакциям...',
        transactionLabeled: 'Транзакция помечена! ✓',
        transactionLabeledUnique: 'Транзакция помечена (уникальная) ✓',
        labeledWithSimilar: '1 транзакция + {count} похожих помечены! ✓',
        labelRemoved: 'Метка удалена! ✓',
        labelRemovedUnique: 'Метка удалена (уникальная) ✓',
        labelRemovedWithSimilar: 'Метка удалена у 1 транзакции + {count} похожих! ✓',
        multipleTransactionsLabeled: 'Помечено транзакций: {count}!',
        uniqueLabel: '1×',
        
        // Transaction exclusion
        exclude: 'Исключить',
        excludeTransaction: 'Исключить транзакцию',
        excludeThisOnly: 'Исключить только эту транзакцию',
        excludeAllSimilar: 'Исключить все похожие транзакции',
        excluded: 'Исключено',
        excludedTransactions: 'Исключенные транзакции',
        noExcludedTransactions: 'Нет исключенных транзакций',
        confirmExclude: 'Исключить эту транзакцию? Она будет скрыта из списка.',
        confirmExcludeAllSimilar: 'Исключить все похожие транзакции? Они будут скрыты из списка.',
        excluding: 'Исключение...',
        transactionExcluded: 'Транзакция исключена ✓',
        excludedSimilarCount: 'Исключено похожих транзакций: {count}',
        
        // Transaction restoration
        restore: 'Восстановить',
        restoreAll: 'Восстановить все',
        restoreSimilarTransactions: 'Восстановить похожие транзакции',
        transactionRestored: 'Транзакция восстановлена ✓',
        restoring: 'Восстановление...',
        restoringAll: 'Восстановление всех...',
        confirmRestoreAll: 'Восстановить все исключенные транзакции?',
        allTransactionsRestored: 'Все транзакции восстановлены ✓',
        restoredSimilarCount: 'Восстановлено похожих транзакций: {count}',
        restoreSimilarHelp: 'При включении нажатие "Восстановить" также восстановит все похожие транзакции',
        
        // Transaction details
        similarTransactions: "Похожие транзакции",
        checkingSimilar: 'Поиск похожих транзакций...',
        fullName: "Полное имя",
        memo: "Заметка",
        amount: "Сумма",
        note: 'Заметка',
        addNote: 'Добавить заметку (макс. 10 слов)...',
        memoTooLong: 'Заметка слишком длинная. Максимум 10 слов.',
        noteSaved: 'Заметка сохранена ✓',
        optional: 'необязательно',
        copy: 'Копировать',
        copied: 'Скопировано!',
        clickToExpand: 'Нажмите для развертывания',
        checkInternetConnection: "Пожалуйста, проверьте подключение к интернету и повторите попытку",
        retry: "Повторить",
        errorLoadingTransactions: "Ошибка загрузки транзакций",
        
        // ============================================
        // BANK SYNCHRONIZATION
        // ============================================
        bankSynchronization: "Синхронизация с банками",
        bankAccountsConfig: "Банковские счета",
        maxLeumi: "💳 Max.co.il (карта Леуми)",
        isracard: "💳 Isracard",
        setupMaxCredentials: "🔐 Настроить учетные данные Max",
        setupIsracardCredentials: "🔐 Настроить учетные данные Isracard",
        configureCredentials: "Настройте учетные данные для синхронизации транзакций.",
        credentialsConfigured: "Учетные данные настроены ✓",
        
        // Bank credentials
        bankCredentials: "🔐 Банковские учетные данные",
        credentialsSecure: "Ваши учетные данные будут зашифрованы и безопасно сохранены в Firebase.",
        username: "Имя пользователя",
        yourUsername: "Ваше имя пользователя",
        yourPassword: "Ваш пароль",
        idNumber: "Номер удостоверения",
        cardLast6: "Последние 6 цифр карты",
        yourIsraeliId: "Ваш израильский ID",
        isracardId: "ID Isracard",
        isracardPassword: "Пароль Isracard",
        yourIsracardId: "Ваш ID Isracard",
        yourIsracardPassword: "Ваш пароль Isracard",
        saveCredentials: "Сохранить учетные данные",
        credentialsSaved: "Учетные данные успешно сохранены!",
        errorSavingCredentials: "Ошибка сохранения учетных данных:",
        
        // Sync actions
        syncTransactions: "🔄 Синхронизировать транзакции",
        syncAll: "🔄 Синхронизировать все",
        syncingWithBanks: "Синхронизация с банками...",
        syncCompleted: "Синхронизация завершена! Новых транзакций: {count}.",
        syncFailed: "Ошибка синхронизации:",
        lastSync: "Последняя синхронизация:",
        never: "Никогда",
        ago: "назад",
        justNow: "Только что",
        
        // Auto-labeling
        autoLabelTitle: "🏷️ Авто-метки",
        autoLabelDescription: 'Автоматически помечать транзакции без меток на основе существующих шаблонов',
        autoLabeling: 'Автоматическое присвоение меток транзакциям...',
        autoLabelCompleted: "Автоматическое присвоение меток завершено! Помечено транзакций: {count}.",
        autoLabelFailed: "Ошибка автоматического присвоения меток:",
        noTransactionsToLabel: "Не удалось автоматически пометить транзакции. Попробуйте пометить несколько вручную сначала.",
        
        // ============================================
        // CSV IMPORT
        // ============================================
        importCSV: "Импорт CSV/Excel",
        importCSVDescription: "Импортировать транзакции из файлов CSV (Revolut, N26 и др.)",
        supportedFormats: "Поддерживаемые форматы: CSV, XLSX, XLS",
        bankName: "Название банка",
        bankNamePlaceholder: "напр.: Revolut, N26, Wise...",
        bankNameHelp: "Это помогает идентифицировать транзакции из разных банков",
        chooseCSV: "Выбрать файл CSV/Excel",
        imported: "Импортировано",
        importingCSV: "Импорт CSV...",
        removingCSV: "Удаление CSV...",
        noCSVImported: "Файлы CSV еще не импортированы",
        enterBankNameFirst: "Пожалуйста, сначала введите название банка",
        remove: "Удалить",
        removeCSVConfirm: "Удалить \"{name}\" и все его транзакции?",
        csvImportedSuccess: "CSV успешно импортирован! Добавлено транзакций: {count}.",
        csvImportedWithDuplicates: "CSV импортирован! Добавлено транзакций: {count} (пропущено дубликатов: {skipped})",
        csvRemovedSuccess: "CSV удален! Удалено транзакций: {count}.",
        errorImportingCSV: "Ошибка импорта CSV:",
        errorRemovingCSV: "Ошибка удаления CSV:",
        
        // Import period
        importPeriod: 'Импортировать транзакции с',
        importPeriodHelp: 'Будут импортированы только транзакции за этот период',
        oneMonthAgo: '1 месяц назад',
        threeMonthsAgo: '3 месяца назад',
        sixMonthsAgo: '6 месяцев назад',
        twelveMonthsAgo: '12 месяцев назад',
        eighteenMonthsAgo: '18 месяцев назад',
        twentyFourMonthsAgo: '24 месяца назад',
        thirtySixMonthsAgo: '36 месяцев назад',
        
        // ============================================
        // FILTERS & SORTING
        // ============================================
        filters: "Фильтры",
        showAll: "Все",
        all: "Все",
        allMonths: "Все месяцы",
        allSources: "Все источники",
        month: "Месяц",
        source: "Источник",
        type: "Тип",
        expenses: "Расходы",
        labelStatus: "Статус метки",
        showOnlyUnlabeled: "Только без меток",
        showOnlyLabeled: "Только с метками",
        search: "Поиск...",
        clear: "Сбросить",
        selectCategory: "Выбрать категорию",
        
        // Sort options
        sortBy: "Сортировать по",
        sortDateNewest: "📅 Дата (новые)",
        sortDateOldest: "📅 Дата (старые)",
        sortAmountHighest: "💰 Сумма (больше)",
        sortAmountLowest: "💰 Сумма (меньше)",
        sortFrequencyMost: "🔄 Частота (больше)",
        sortFrequencyLeast: "🔄 Частота (меньше)",
        
        // Transaction display limits
        showTransactions: "Показать транзакции",
        show50: "Показать 50",
        show500: "Показать 500",
        show1000: "Показать 1000",
        show2000: "Показать 2000",
        loadMore: "Загрузить еще",
        batchSize: "Транзакций на странице",
        
        // Selection
        selectAll: 'Выбрать все',
        deselectAll: 'Снять выбор',
        
        // ============================================
        // COLORS & CUSTOMIZATION
        // ============================================
        colors: "🎨 Цвета",
        customizeColors: "🎨 Настроить цвета",
        resetColors: 'Сбросить по умолчанию',
        resetColorsConfirm: "Сбросить все цвета по умолчанию?",
        resetToDefault: "Сбросить по умолчанию",
        randomColors: "Случайные цвета",
        randomizeColors: '🎲 Случайные цвета',
        colorByCategory: 'Группировать по категориям',
        categoryColors: "Цвета категорий",
        itemColors: "Цвета элементов",
        advanced: "Расширенные",
        backToCategories: "Назад к категориям",
        
        // Emoji selection
        selectEmoji: 'Выбрать эмодзи',
        customEmojiPlaceholder: 'Или введите/вставьте любой эмодзи здесь...',
        orChooseBelow: 'или выберите ниже',
        useCustomEmoji: 'Использовать',
        pleaseEnterEmoji: 'Пожалуйста, введите эмодзи',
        
        // ============================================
        // SETTINGS
        // ============================================
        currency: "Валюта",
        language: "Язык",
        darkMode: "Темная тема",
        enableDarkMode: "Включить темную тему",
        
        // Income tracking
        incomeTracking: "Учет доходов",
        trackIncome: "Отслеживать ежемесячный доход",
        trackIncomeDesc: "При включении вы можете отслеживать источники дохода и видеть, сколько денег остается после расходов.",
        
        // Percentage calculation
        percentageCalculation: "Расчет процентов",
        basedOnExpenses: "На основе общих расходов",
        basedOnIncome: "На основе общего дохода",
        percentageDesc: "Выберите, как рассчитываются проценты категорий",
        
        // Database maintenance
        databaseMaintenance: "Обслуживание базы данных",
        cleanGhostCategories: "🧹 Очистить призрачные категории",
        cleanDescription: "Удалить категории, которые существуют в ваших данных, но не отображаются правильно. Используйте это, если у вас проблемы с категориями, которые не появляются или не могут быть созданы.",
        clearData: "Очистить данные",
        clearAllTransactions: "Очистить все транзакции",
        clearTransactionsWarning: "Удалить все синхронизированные транзакции из базы данных. Это действие нельзя отменить.",
        transactionsCleared: "Успешно удалено {count} транзакций и {csvCount} записей CSV",
        errorClearingTransactions: "Ошибка:",
        
        // App info
        appVersion: 'Версия приложения',
        versionInfo: 'Текущая версия вашего приложения личных финансов',
        madeBy: "Создано Виктором Буртманом",
        contactInfo: "По любым сообщениям об ошибках, идеях или предложениях:",
        
        // ============================================
        // COMMON BUTTONS & ACTIONS
        // ============================================
        save: "Сохранить",
        cancel: "Отмена",
        done: "Готово",
        close: "✕",
        resetAll: "Сбросить все расходы",
        updatingTransactions: 'Обновление транзакций...',
        
        // ============================================
        // PROMPTS & CONFIRMATIONS
        // ============================================
        enterCategoryName: "Введите название категории:",
        enterEmoji: "Введите эмодзи (напр.: 🎮):",
        enterFirstItem: "Введите название первого элемента:",
        enterNewItemName: "Введите название нового элемента:",
        enterNewName: "Введите новое название:",
        enterNewCategoryName: "Введите новое название для \"{current}\":",
        deleteCategoryConfirm: "Удалить \"{name}\" ({amount})?\n\nВсе помеченные транзакции будут без меток.",
        deleteItemConfirm: "Удалить этот элемент?",
        lastItemConfirm: "Последний элемент в категории. Удалить всю категорию?",
        resetAllConfirm: "Сбросить все расходы на 0?",
        clearAllWarning1: "⚠️ Удалить ВСЕ транзакции? Это действие нельзя отменить!",
        clearAllWarning2: "⚠️ ПОСЛЕДНЕЕ ПРЕДУПРЕЖДЕНИЕ: Удалить все транзакции навсегда?",
        
        // ============================================
        // STATUS & LOADING MESSAGES
        // ============================================
        loading: "Загрузка...",
        processing: "Обработка...",
        processingTransactions: "Обработка транзакций",
        deletingTransactions: "Удаление транзакций",
        deletingAllTransactions: "Удаление всех транзакций...",
        saving: "Сохранение...",
        pleaseWait: 'Пожалуйста, подождите',
        thisMayTakeAMoment: "Это может занять некоторое время",
        updateAvailable: "Доступно обновление",
        installingUpdate: "Установка обновления...",
        
        // ============================================
        // ERRORS
        // ============================================
        // Auth errors
        pleaseEnterEmail: "Пожалуйста, введите свой адрес электронной почты",
        pleaseEnterEmailAndPassword: "Пожалуйста, введите email и пароль",
        errorPasswordRequired: "Пожалуйста, введите свой пароль",
        errorEmailInvalid: "Неверный формат email",
        errorPasswordTooShort: "Пароль должен содержать не менее 6 символов",
        errorUserNotFound: "Аккаунт с этим email не найден",
        errorWrongPassword: "Неверный пароль",
        errorEmailAlreadyUsed: "Этот email уже зарегистрирован",
        errorWeakPassword: "Пароль слишком слабый. Используйте не менее 6 символов.",
        errorTooManyRequests: "Слишком много неудачных попыток. Попробуйте позже.",
        errorNetworkFailed: "Ошибка сети. Проверьте подключение.",
        errorUnknown: "Произошла ошибка. Попробуйте снова.",
        authError: "Произошла ошибка. Попробуйте снова.",
        emailAlreadyInUse: "Этот email уже зарегистрирован. Пожалуйста, войдите.",
        weakPassword: "Пароль должен содержать не менее 6 символов",
        invalidEmail: "Неверный адрес электронной почты",
        userNotFound: "Аккаунт с этим email не найден",
        wrongPassword: "Неверный пароль",
        unknownError: "Произошла ошибка. Попробуйте снова.",
        emailInUse: "Этот email уже используется. Попробуйте войти.",
        invalidCredentials: "Неверный email или пароль.",
        tooManyRequests: "Слишком много неудачных попыток. Попробуйте позже.",
        
        // Other errors
        noExpensesYet: "Расходов пока нет",
        
        // ============================================
        // TIME & DATE
        // ============================================
        minutes: "минуты",
        hours: "часы",
        days: "дни",
        transactions: "транзакций",
        
        // Month names
        january: "Январь",
        february: "Февраль",
        march: "Март",
        april: "Апрель",
        may: "Май",
        june: "Июнь",
        july: "Июль",
        august: "Август",
        september: "Сентябрь",
        october: "Октябрь",
        november: "Ноябрь",
        december: "Декабрь",

        janShort: "Янв", febShort: "Фев", marShort: "Мар", aprShort: "Апр",
        mayShort: "Май", junShort: "Июн", julShort: "Июл", augShort: "Авг",
        sepShort: "Сен", octShort: "Окт", novShort: "Ноя", decShort: "Дек",
        
        // ============================================
        // CURRENCY & CONVERSION
        // ============================================
        conversionInfo: "Суммы конвертируются по дневным курсам обмена и могут быть приблизительными",
        noIncomeThisMonth: "Нет доходных транзакций в этом месяце",
        noExpensesThisMonth: "Нет расходов в этом месяце",
        estimatedBudgetNote: "Показаны бюджетные оценки",
    },

    // ============================================
    // ARABIC (ar) - RTL LANGUAGE
    // ============================================
    ar: {
        // ============================================
        // AUTHENTICATION & ACCOUNT
        // ============================================
        appTitle: "💰 تتبع النفقات",
        authSubtitle: "سجل الدخول لمزامنة نفقاتك",
        email: "البريد الإلكتروني",
        password: "كلمة المرور (6 أحرف على الأقل)",
        signIn: "تسجيل الدخول",
        signUp: "إنشاء حساب",
        noAccount: "ليس لديك حساب؟",
        hasAccount: "لديك حساب بالفعل؟",
        signingIn: "جاري تسجيل الدخول...",
        creatingAccount: "جاري إنشاء الحساب...",
        rememberMe: 'تذكرني',
        forgotPassword: "نسيت كلمة المرور؟",
        resetPassword: "إعادة تعيين كلمة المرور",
        resetPasswordDesc: "أدخل بريدك الإلكتروني لتلقي رابط إعادة التعيين",
        sendResetEmail: "إرسال البريد",
        resetEmailSent: "تم إرسال بريد إعادة التعيين! تحقق من بريدك الوارد.",
        resetEmailError: "خطأ في إرسال البريد. تحقق من عنوان بريدك الإلكتروني.",
        deleteAccount: "حذف الحساب",
        deleteAccountWarning: "هذا الإجراء لا رجعة فيه. سيتم حذف جميع بياناتك نهائياً.",
        confirmDelete: "هل أنت متأكد من رغبتك في حذف حسابك؟",
        confirmDeleteButton: "نعم، احذف حسابي",
        accountDeleted: "تم حذف حسابك بنجاح",
        errorDeletingAccount: "خطأ في حذف الحساب. يرجى المحاولة مرة أخرى.",
        recentLoginRequired: "لأسباب أمنية، يرجى تسجيل الدخول مرة أخرى قبل حذف حسابك",
        accountDisabled: "تم تعطيل هذا الحساب. يرجى الاتصال بالدعم.",
        account: "الحساب",
        loggedInAs: "مسجل الدخول باسم:",
        logout: "تسجيل الخروج",
        logoutConfirm: "هل أنت متأكد من رغبتك في تسجيل الخروج؟",
        
        // ============================================
        // NAVIGATION & TABS
        // ============================================
        budgetTab: "الميزانية",
        transactionsTab: "المعاملات",
        transaction: "معاملة",
        transactions: "معاملات",
        settings: "الإعدادات",
        settingsTitle: "⚙️ الإعدادات",
        
        // ============================================
        // BUDGET - MAIN APP
        // ============================================
        income: "الدخل",
        expenses: "المصروفات",
        remaining: "المتبقي",
        ofIncome: "من الدخل",
        budget: "الميزانية",
        real: "الفعلي",
        estimated: "المقدر",
        spent: "الفعلي",
        overBy: "تجاوز بمقدار",
        underBy: "توفير بمقدار",
        exactly: "المبلغ الدقيق",
        used: "مستخدم",
        ofExpenses: "من النفقات",

        
        // Budget modes
        budgetVsReal: "الميزانية مقابل الفعلي",
        
        // Charts
        pieChart: "🍩 مخطط دائري",
        barChart: "📊 مخطط شريطي",
        monthlySpendingTrend: "اتجاه الإنفاق الشهري",
        compare: "📊 مقارنة",
        categoryTrends: "اتجاهات الفئات",
        last6Months: "آخر 6 أشهر",
        
        // ============================================
        // CATEGORIES
        // ============================================
        editCategories: "✏️ تعديل الفئات",
        doneEditing: "✓ تم",
        addCategory: "➕ إضافة فئة",
        category: "الفئة",
        selectCategories: "اختر الفئات",
        allCategories: "جميع الفئات",
        
        // Category actions
        moveUp: "↑ تحريك لأعلى",
        moveDown: "↓ تحريك لأسفل",
        addItem: "➕ إضافة عنصر",
        deleteCategory: " حذف الفئة",
        cannotDeleteIncome: "لا يمكن حذف فئة الدخل.",
        cannotRenameIncome: "لا يمكن إعادة تسمية فئة الدخل.",
        cannotUseSystemName: "لا يمكن استخدام اسم فئة النظام.",
        
        // Category messages
        categoryUpdated: 'تم تحديث الفئة بنجاح!',
        categoryRenamedSuccess: "تمت إعادة تسمية الفئة بنجاح! تم تحديث {count} معاملة.",
        categoryDeletedSuccess: "تم حذف الفئة! {count} معاملة بدون تصنيف.",
        categoryExistsAlert: "هذه الفئة موجودة بالفعل!",
        categoryNotFoundAlert: "الفئة غير موجودة!",
        topOfListAlert: "هذه الفئة موجودة بالفعل في أعلى قائمة النفقات (بعد الدخل).",
        errorCreatingCategory: "خطأ في إنشاء الفئة. يرجى المحاولة مرة أخرى.",
        errorRenamingCategory: "خطأ في إعادة تسمية الفئة:",
        errorDeletingCategory: "خطأ في حذف الفئة:",
        renamingCategory: 'جاري إعادة تسمية الفئة...',
        deletingCategory: 'جاري حذف الفئة...',
        
        // Default categories
        housing: "🏠 السكن",
        tech: "📱 الاتصالات والتكنولوجيا",
        pet: "🐱 رعاية الحيوانات الأليفة",
        subscriptions: "🎬 الاشتراكات",
        groceries: "🛒 البقالة",
        other: "💸 نفقات أخرى",
        
        // Default items
        salary: "الراتب",
        rent: "الإيجار",
        arnona: "أرنونا",
        electricity: "الكهرباء",
        gas: "الغاز",
        water: "الماء",
        phonePlan: "خطة الهاتف",
        internet: "الإنترنت",
        icloud: "iCloud",
        catFood: "طعام القطط",
        litter: "رمل القطط",
        youtube: "YouTube Premium",
        claude: "Claude Pro",
        therapist: "المعالج",
        food: "الطعام",
        household: "منتجات منزلية",
        personalCare: "العناية الشخصية",
        otherExpenses: "نفقات أخرى",
        
        // ============================================
        // TRANSACTIONS
        // ============================================
        allTransactions: "المعاملات",
        noTransactionsAdded: "لم تتم إضافة معاملات بعد",
        addTransactionToStart: "أضف معاملة للبدء",
        noMatchingTransactions: "لا توجد معاملات تطابق المرشحات الحالية",
        noTransactionsYet: "لا توجد معاملات بعد",
        clickSyncToStart: "انقر على \"مزامنة الكل\" للبدء",
        loadingTransactions: "جاري تحميل المعاملات...",
        showingTransactions: "عرض {shown} من {total} معاملة",
        moreHidden: "{count} معاملة مخفية - اضبط مرشح \"عرض\" لرؤية المزيد",
        adjustFiltersToSeeMore: "اضبط الفلاتر لرؤية المزيد من المعاملات",

        
        // Transaction actions
        addTransaction: 'إضافة معاملة',
        addManualTransaction: 'إضافة معاملة',
        transactionName: 'الاسم',
        transactionAdded: 'تمت إضافة المعاملة بنجاح!',
        addingTransaction: 'جاري إضافة المعاملة...',
        
        // Transaction labeling
        labelingTransaction: 'جاري تصنيف المعاملة...',
        unlabelingTransaction: 'جاري إزالة التصنيف...',
        labelingTransactionUnique: 'جاري تصنيف هذه المعاملة فقط...',
        unlabelingTransactionUnique: 'جاري إزالة التصنيف من هذه المعاملة فقط...',
        labelingMultipleTransactions: 'جاري تصنيف {count} معاملة...',
        transactionLabeled: 'تم تصنيف المعاملة! ✓',
        transactionLabeledUnique: 'تم تصنيف المعاملة (فريدة) ✓',
        labeledWithSimilar: 'معاملة واحدة + {count} مشابهة تم تصنيفها! ✓',
        labelRemoved: 'تمت إزالة التصنيف! ✓',
        labelRemovedUnique: 'تمت إزالة التصنيف (فريدة) ✓',
        labelRemovedWithSimilar: 'تمت إزالة التصنيف من معاملة واحدة + {count} مشابهة! ✓',
        multipleTransactionsLabeled: 'تم تصنيف {count} معاملة!',
        uniqueLabel: '1×',
        
        // Transaction exclusion
        exclude: 'استبعاد',
        excludeTransaction: 'استبعاد المعاملة',
        excludeThisOnly: 'استبعاد هذه المعاملة فقط',
        excludeAllSimilar: 'استبعاد جميع المعاملات المشابهة',
        excluded: 'مستبعد',
        excludedTransactions: 'المعاملات المستبعدة',
        noExcludedTransactions: 'لا توجد معاملات مستبعدة',
        confirmExclude: 'استبعاد هذه المعاملة؟ سيتم إخفاؤها من القائمة.',
        confirmExcludeAllSimilar: 'استبعاد جميع المعاملات المشابهة؟ سيتم إخفاؤها من القائمة.',
        excluding: 'جاري الاستبعاد...',
        transactionExcluded: 'تم استبعاد المعاملة ✓',
        excludedSimilarCount: 'تم استبعاد {count} معاملة مشابهة',
        
        // Transaction restoration
        restore: 'استعادة',
        restoreAll: 'استعادة الكل',
        restoreSimilarTransactions: 'استعادة المعاملات المشابهة',
        transactionRestored: 'تمت استعادة المعاملة ✓',
        restoring: 'جاري الاستعادة...',
        restoringAll: 'جاري استعادة الكل...',
        confirmRestoreAll: 'استعادة جميع المعاملات المستبعدة؟',
        allTransactionsRestored: 'تمت استعادة جميع المعاملات ✓',
        restoredSimilarCount: 'تمت استعادة {count} معاملة مشابهة',
        restoreSimilarHelp: 'عند التفعيل، النقر على "استعادة" سيستعيد أيضاً جميع المعاملات المشابهة',
        
        // Transaction details
        similarTransactions: "معاملات مشابهة",
        checkingSimilar: 'جاري البحث عن معاملات مشابهة...',
        fullName: "الاسم الكامل",
        memo: "ملاحظة",
        amount: "المبلغ",
        note: 'ملاحظة',
        addNote: 'إضافة ملاحظة (10 كلمات كحد أقصى)...',
        memoTooLong: 'الملاحظة طويلة جداً. الحد الأقصى 10 كلمات.',
        noteSaved: 'تم حفظ الملاحظة ✓',
        optional: 'اختياري',
        copy: 'نسخ',
        copied: 'تم النسخ!',
        clickToExpand: 'انقر للتوسيع',
        checkInternetConnection: "يرجى التحقق من اتصالك بالإنترنت والمحاولة مرة أخرى",
        retry: "إعادة المحاولة",
        errorLoadingTransactions: "خطأ في تحميل المعاملات",
        
        // ============================================
        // BANK SYNCHRONIZATION
        // ============================================
        bankSynchronization: "مزامنة البنوك",
        bankAccountsConfig: "الحسابات البنكية",
        maxLeumi: "💳 Max.co.il (بطاقة ليئومي)",
        isracard: "💳 إسراكارد",
        setupMaxCredentials: "🔐 إعداد بيانات Max",
        setupIsracardCredentials: "🔐 إعداد بيانات إسراكارد",
        configureCredentials: "قم بإعداد بيانات الاعتماد الخاصة بك لمزامنة المعاملات.",
        credentialsConfigured: "تم إعداد بيانات الاعتماد ✓",
        
        // Bank credentials
        bankCredentials: "🔐 بيانات الاعتماد البنكية",
        credentialsSecure: "سيتم تشفير بيانات الاعتماد الخاصة بك وتخزينها بشكل آمن في Firebase.",
        username: "اسم المستخدم",
        yourUsername: "اسم المستخدم الخاص بك",
        yourPassword: "كلمة المرور الخاصة بك",
        idNumber: "رقم الهوية",
        cardLast6: "آخر 6 أرقام من البطاقة",
        yourIsraeliId: "الهوية الإسرائيلية الخاصة بك",
        isracardId: "معرف إسراكارد",
        isracardPassword: "كلمة مرور إسراكارد",
        yourIsracardId: "معرف إسراكارد الخاص بك",
        yourIsracardPassword: "كلمة مرور إسراكارد الخاصة بك",
        saveCredentials: "حفظ بيانات الاعتماد",
        credentialsSaved: "تم حفظ بيانات الاعتماد بنجاح!",
        errorSavingCredentials: "خطأ في حفظ بيانات الاعتماد:",
        
        // Sync actions
        syncTransactions: "🔄 مزامنة المعاملات",
        syncAll: "🔄 مزامنة الكل",
        syncingWithBanks: "جاري المزامنة مع البنوك...",
        syncCompleted: "اكتملت المزامنة! {count} معاملة جديدة.",
        syncFailed: "فشلت المزامنة:",
        lastSync: "آخر مزامنة:",
        never: "أبداً",
        ago: "منذ",
        justNow: "الآن",
        
        // Auto-labeling
        autoLabelTitle: "🏷️ تصنيف تلقائي",
        autoLabelDescription: 'تصنيف المعاملات غير المصنفة تلقائياً بناءً على الأنماط الموجودة',
        autoLabeling: 'جاري التصنيف التلقائي للمعاملات...',
        autoLabelCompleted: "اكتمل التصنيف التلقائي! تم تصنيف {count} معاملة.",
        autoLabelFailed: "فشل التصنيف التلقائي:",
        noTransactionsToLabel: "لم يتم تصنيف أي معاملات تلقائياً. حاول تصنيف بعضها يدوياً أولاً.",
        
        // ============================================
        // CSV IMPORT
        // ============================================
        importCSV: "استيراد CSV/Excel",
        importCSVDescription: "استيراد المعاملات من ملفات CSV (Revolut، N26، إلخ)",
        supportedFormats: "التنسيقات المدعومة: CSV، XLSX، XLS",
        bankName: "اسم البنك",
        bankNamePlaceholder: "مثل: Revolut، N26، Wise...",
        bankNameHelp: "يساعدك هذا في تحديد المعاملات من بنوك مختلفة",
        chooseCSV: "اختر ملف CSV/Excel",
        imported: "تم الاستيراد",
        importingCSV: "جاري استيراد CSV...",
        removingCSV: "جاري إزالة CSV...",
        noCSVImported: "لم يتم استيراد ملفات CSV بعد",
        enterBankNameFirst: "يرجى إدخال اسم البنك أولاً",
        remove: "إزالة",
        removeCSVConfirm: "إزالة \"{name}\" وجميع معاملاته؟",
        csvImportedSuccess: "تم استيراد CSV بنجاح! تمت إضافة {count} معاملة.",
        csvImportedWithDuplicates: "تم استيراد CSV! تمت إضافة {count} معاملة (تم تخطي {skipped} مكرر)",
        csvRemovedSuccess: "تمت إزالة CSV! تم حذف {count} معاملة.",
        errorImportingCSV: "خطأ في استيراد CSV:",
        errorRemovingCSV: "خطأ في إزالة CSV:",
        
        // Import period
        importPeriod: 'استيراد المعاملات من',
        importPeriodHelp: 'سيتم استيراد المعاملات ضمن هذه الفترة فقط',
        oneMonthAgo: 'منذ شهر واحد',
        threeMonthsAgo: 'منذ 3 أشهر',
        sixMonthsAgo: 'منذ 6 أشهر',
        twelveMonthsAgo: 'منذ 12 شهراً',
        eighteenMonthsAgo: 'منذ 18 شهراً',
        twentyFourMonthsAgo: 'منذ 24 شهراً',
        thirtySixMonthsAgo: 'منذ 36 شهراً',
        
        // ============================================
        // FILTERS & SORTING
        // ============================================
        filters: "المرشحات",
        showAll: "الكل",
        all: "الكل",
        allMonths: "جميع الأشهر",
        allSources: "جميع المصادر",
        month: "الشهر",
        source: "المصدر",
        type: "النوع",
        expenses: "النفقات",
        labelStatus: "حالة التصنيف",
        showOnlyUnlabeled: "غير المصنفة فقط",
        showOnlyLabeled: "المصنفة فقط",
        search: "بحث...",
        clear: "إعادة تعيين",
        selectCategory: "اختر الفئة",
        
        // Sort options
        sortBy: "ترتيب حسب",
        sortDateNewest: "📅 التاريخ (الأحدث)",
        sortDateOldest: "📅 التاريخ (الأقدم)",
        sortAmountHighest: "💰 المبلغ (الأعلى)",
        sortAmountLowest: "💰 المبلغ (الأدنى)",
        sortFrequencyMost: "🔄 التكرار (الأكثر)",
        sortFrequencyLeast: "🔄 التكرار (الأقل)",
        
        // Transaction display limits
        showTransactions: "عرض المعاملات",
        show50: "عرض 50",
        show500: "عرض 500",
        show1000: "عرض 1000",
        show2000: "عرض 2000",
        loadMore: "تحميل المزيد",
        batchSize: "معاملات لكل صفحة",
        
        // Selection
        selectAll: 'تحديد الكل',
        deselectAll: 'إلغاء تحديد الكل',
        
        // ============================================
        // COLORS & CUSTOMIZATION
        // ============================================
        colors: "🎨 الألوان",
        customizeColors: "🎨 تخصيص الألوان",
        resetColors: 'إعادة تعيين الافتراضية',
        resetColorsConfirm: "إعادة تعيين جميع الألوان إلى الافتراضية؟",
        resetToDefault: "إعادة تعيين الافتراضية",
        randomColors: "ألوان عشوائية",
        randomizeColors: '🎲 ألوان عشوائية',
        colorByCategory: 'تجميع حسب الفئات',
        categoryColors: "ألوان الفئات",
        itemColors: "ألوان العناصر",
        advanced: "متقدم",
        backToCategories: "العودة إلى الفئات",
        
        // Emoji selection
        selectEmoji: 'اختر رمز تعبيري',
        customEmojiPlaceholder: 'أو اكتب/الصق أي رمز تعبيري هنا...',
        orChooseBelow: 'أو اختر أدناه',
        useCustomEmoji: 'استخدام',
        pleaseEnterEmoji: 'يرجى إدخال رمز تعبيري',
        
        // ============================================
        // SETTINGS
        // ============================================
        currency: "العملة",
        language: "اللغة",
        darkMode: "الوضع الداكن",
        enableDarkMode: "تفعيل الوضع الداكن",
        
        // Income tracking
        incomeTracking: "تتبع الدخل",
        trackIncome: "تتبع الدخل الشهري",
        trackIncomeDesc: "عند التفعيل، يمكنك تتبع مصادر دخلك ورؤية المبلغ المتبقي بعد النفقات.",
        
        // Percentage calculation
        percentageCalculation: "حساب النسبة المئوية",
        basedOnExpenses: "بناءً على إجمالي النفقات",
        basedOnIncome: "بناءً على إجمالي الدخل",
        percentageDesc: "اختر كيفية حساب نسب الفئات",
        
        // Database maintenance
        databaseMaintenance: "صيانة قاعدة البيانات",
        cleanGhostCategories: "🧹 تنظيف الفئات الوهمية",
        cleanDescription: "إزالة الفئات الموجودة في بياناتك ولكن لا تظهر بشكل صحيح. استخدم هذا إذا كانت لديك مشاكل مع الفئات التي لا تظهر أو لا يمكن إنشاؤها.",
        clearData: "مسح البيانات",
        clearAllTransactions: "مسح جميع المعاملات",
        clearTransactionsWarning: "إزالة جميع المعاملات المتزامنة من قاعدة البيانات. لا يمكن التراجع عن هذا.",
        transactionsCleared: "تم حذف {count} معاملة و{csvCount} سجل CSV بنجاح",
        errorClearingTransactions: "خطأ:",
        
        // App info
        appVersion: 'إصدار التطبيق',
        versionInfo: 'الإصدار الحالي لتطبيق المالية الشخصية الخاص بك',
        madeBy: "صنع بواسطة فيكتور بورتمان",
        contactInfo: "لأي تقرير عن خطأ أو أفكار أو اقتراحات:",
        
        // ============================================
        // COMMON BUTTONS & ACTIONS
        // ============================================
        save: "حفظ",
        cancel: "إلغاء",
        done: "تم",
        close: "✕",
        resetAll: "إعادة تعيين جميع النفقات",
        updatingTransactions: 'جاري تحديث المعاملات...',
        
        // ============================================
        // PROMPTS & CONFIRMATIONS
        // ============================================
        enterCategoryName: "أدخل اسم الفئة:",
        enterEmoji: "أدخل رمز تعبيري (مثل: 🎮):",
        enterFirstItem: "أدخل اسم العنصر الأول:",
        enterNewItemName: "أدخل اسم العنصر الجديد:",
        enterNewName: "أدخل الاسم الجديد:",
        enterNewCategoryName: "أدخل الاسم الجديد لـ \"{current}\":",
        deleteCategoryConfirm: "حذف \"{name}\" ({amount})؟\n\nجميع المعاملات المصنفة ستصبح بدون تصنيف.",
        deleteItemConfirm: "حذف هذا العنصر؟",
        lastItemConfirm: "آخر عنصر في الفئة. حذف الفئة بأكملها؟",
        resetAllConfirm: "إعادة تعيين جميع النفقات إلى 0؟",
        clearAllWarning1: "⚠️ حذف جميع المعاملات؟ لا يمكن التراجع عن هذا!",
        clearAllWarning2: "⚠️ تحذير نهائي: حذف جميع المعاملات نهائياً؟",
        
        // ============================================
        // STATUS & LOADING MESSAGES
        // ============================================
        loading: "جاري التحميل...",
        processing: "جاري المعالجة...",
        processingTransactions: "جاري معالجة المعاملات",
        deletingTransactions: "جاري حذف المعاملات",
        deletingAllTransactions: "جاري حذف جميع المعاملات...",
        saving: "جاري الحفظ...",
        pleaseWait: 'يرجى الانتظار',
        thisMayTakeAMoment: "قد يستغرق هذا لحظة",
        updateAvailable: "تحديث متاح",
        installingUpdate: "جاري تثبيت التحديث...",
        
        // ============================================
        // ERRORS
        // ============================================
        // Auth errors
        pleaseEnterEmail: "يرجى إدخال عنوان بريدك الإلكتروني",
        pleaseEnterEmailAndPassword: "يرجى إدخال البريد الإلكتروني وكلمة المرور",
        errorPasswordRequired: "يرجى إدخال كلمة المرور",
        errorEmailInvalid: "تنسيق البريد الإلكتروني غير صحيح",
        errorPasswordTooShort: "يجب أن تتكون كلمة المرور من 6 أحرف على الأقل",
        errorUserNotFound: "لم يتم العثور على حساب بهذا البريد الإلكتروني",
        errorWrongPassword: "كلمة مرور غير صحيحة",
        errorEmailAlreadyUsed: "هذا البريد الإلكتروني مسجل بالفعل",
        errorWeakPassword: "كلمة المرور ضعيفة جداً. استخدم 6 أحرف على الأقل.",
        errorTooManyRequests: "محاولات فاشلة كثيرة جداً. يرجى المحاولة لاحقاً.",
        errorNetworkFailed: "خطأ في الشبكة. تحقق من اتصالك.",
        errorUnknown: "حدث خطأ. يرجى المحاولة مرة أخرى.",
        authError: "حدث خطأ. يرجى المحاولة مرة أخرى.",
        emailAlreadyInUse: "هذا البريد الإلكتروني مسجل بالفعل. يرجى تسجيل الدخول.",
        weakPassword: "يجب أن تتكون كلمة المرور من 6 أحرف على الأقل",
        invalidEmail: "عنوان بريد إلكتروني غير صحيح",
        userNotFound: "لم يتم العثور على حساب بهذا البريد الإلكتروني",
        wrongPassword: "كلمة مرور غير صحيحة",
        unknownError: "حدث خطأ. يرجى المحاولة مرة أخرى.",
        emailInUse: "هذا البريد الإلكتروني مستخدم بالفعل. حاول تسجيل الدخول.",
        invalidCredentials: "بريد إلكتروني أو كلمة مرور غير صحيحة.",
        tooManyRequests: "محاولات فاشلة كثيرة جداً. يرجى المحاولة لاحقاً.",
        
        // Other errors
        noExpensesYet: "لا توجد نفقات بعد",
        
        // ============================================
        // TIME & DATE
        // ============================================
        minutes: "دقائق",
        hours: "ساعات",
        days: "أيام",
        transactions: "معاملة",
        
        // Month names
        january: "يناير",
        february: "فبراير",
        march: "مارس",
        april: "أبريل",
        may: "مايو",
        june: "يونيو",
        july: "يوليو",
        august: "أغسطس",
        september: "سبتمبر",
        october: "أكتوبر",
        november: "نوفمبر",
        december: "ديسمبر",

        janShort: "ينا", febShort: "فبر", marShort: "مار", aprShort: "أبر",
        mayShort: "ماي", junShort: "يون", julShort: "يول", augShort: "أغس",
        sepShort: "سبت", octShort: "أكت", novShort: "نوف", decShort: "ديس",
        
        // ============================================
        // CURRENCY & CONVERSION
        // ============================================
        conversionInfo: "يتم تحويل المبالغ باستخدام أسعار الصرف اليومية وقد تكون تقريبية",
        noIncomeThisMonth: "لا توجد معاملات دخل هذا الشهر",
        noExpensesThisMonth: "لا توجد نفقات هذا الشهر",
        estimatedBudgetNote: "عرض تقديرات الميزانية",
    },

    // ============================================
    // GERMAN (de)
    // ============================================
    de: {
        // ============================================
        // AUTHENTICATION & ACCOUNT
        // ============================================
        appTitle: "💰 Ausgabenverwaltung",
        authSubtitle: "Melden Sie sich an, um Ihre Ausgaben zu synchronisieren",
        email: "E-Mail",
        password: "Passwort (mind. 6 Zeichen)",
        signIn: "Anmelden",
        signUp: "Registrieren",
        noAccount: "Noch kein Konto?",
        hasAccount: "Haben Sie bereits ein Konto?",
        signingIn: "Anmeldung läuft...",
        creatingAccount: "Konto wird erstellt...",
        rememberMe: 'Angemeldet bleiben',
        forgotPassword: "Passwort vergessen?",
        resetPassword: "Passwort zurücksetzen",
        resetPasswordDesc: "Geben Sie Ihre E-Mail-Adresse ein, um einen Link zum Zurücksetzen zu erhalten",
        sendResetEmail: "E-Mail senden",
        resetEmailSent: "E-Mail zum Zurücksetzen gesendet! Überprüfen Sie Ihren Posteingang.",
        resetEmailError: "Fehler beim Senden der E-Mail. Überprüfen Sie Ihre E-Mail-Adresse.",
        deleteAccount: "Konto löschen",
        deleteAccountWarning: "Diese Aktion ist unwiderruflich. Alle Ihre Daten werden dauerhaft gelöscht.",
        confirmDelete: "Sind Sie sicher, dass Sie Ihr Konto löschen möchten?",
        confirmDeleteButton: "Ja, mein Konto löschen",
        accountDeleted: "Ihr Konto wurde erfolgreich gelöscht",
        errorDeletingAccount: "Fehler beim Löschen des Kontos. Bitte versuchen Sie es erneut.",
        recentLoginRequired: "Aus Sicherheitsgründen melden Sie sich bitte erneut an, bevor Sie Ihr Konto löschen",
        accountDisabled: "Dieses Konto wurde deaktiviert. Bitte wenden Sie sich an den Support.",
        account: "Konto",
        loggedInAs: "Angemeldet als:",
        logout: "Abmelden",
        logoutConfirm: "Sind Sie sicher, dass Sie sich abmelden möchten?",
        
        // ============================================
        // NAVIGATION & TABS
        // ============================================
        budgetTab: "Budget",
        transactionsTab: "Transaktionen",
        transaction: "Transaktion",
        transactions: "Transaktionen",
        settings: "Einstellungen",
        settingsTitle: "⚙️ Einstellungen",
        
        // ============================================
        // BUDGET - MAIN APP
        // ============================================
        income: "Einnahmen",
        expenses: "Ausgaben",
        remaining: "Verbleibend",
        ofIncome: "vom Einkommen",
        budget: "Budget",
        real: "Tatsächlich",
        estimated: "Geschätzt",
        spent: "Tatsächlich",
        overBy: "Überschritten um",
        underBy: "Erspart",
        exactly: "Genauer Betrag",
        used: "verwendet",
        ofExpenses: "von Ausgaben",

        
        // Budget modes
        budgetVsReal: "Budget vs. Tatsächlich",
        
        // Charts
        pieChart: "🍩 Kreisdiagramm",
        barChart: "📊 Balkendiagramm",
        monthlySpendingTrend: "Monatlicher Ausgabentrend",
        compare: "📊 Vergleichen",
        categoryTrends: "Kategorietrends",
        last6Months: "Letzte 6 Monate",
        
        // ============================================
        // CATEGORIES
        // ============================================
        editCategories: "✏️ Kategorien bearbeiten",
        doneEditing: "✓ Fertig",
        addCategory: "➕ Kategorie hinzufügen",
        category: "Kategorie",
        selectCategories: "Kategorien auswählen",
        allCategories: "Alle Kategorien",
        
        // Category actions
        moveUp: "↑ Nach oben",
        moveDown: "↓ Nach unten",
        addItem: "➕ Element hinzufügen",
        deleteCategory: " Kategorie löschen",
        cannotDeleteIncome: "Die Kategorie Einkommen kann nicht gelöscht werden.",
        cannotRenameIncome: "Die Kategorie Einkommen kann nicht umbenannt werden.",
        cannotUseSystemName: "Systemkategorienamen können nicht verwendet werden.",
        
        // Category messages
        categoryUpdated: 'Kategorie erfolgreich aktualisiert!',
        categoryRenamedSuccess: "Kategorie erfolgreich umbenannt! {count} Transaktion(en) aktualisiert.",
        categoryDeletedSuccess: "Kategorie gelöscht! {count} Transaktion(en) ohne Kategorie.",
        categoryExistsAlert: "Diese Kategorie existiert bereits!",
        categoryNotFoundAlert: "Kategorie nicht gefunden!",
        topOfListAlert: "Diese Kategorie befindet sich bereits ganz oben in der Ausgabenliste (nach Einkommen).",
        errorCreatingCategory: "Fehler beim Erstellen der Kategorie. Bitte versuchen Sie es erneut.",
        errorRenamingCategory: "Fehler beim Umbenennen der Kategorie:",
        errorDeletingCategory: "Fehler beim Löschen der Kategorie:",
        renamingCategory: 'Kategorie wird umbenannt...',
        deletingCategory: 'Kategorie wird gelöscht...',
        
        // Default categories
        housing: "🏠 Wohnen",
        tech: "📱 Kommunikation & Technologie",
        pet: "🐱 Haustierpflege",
        subscriptions: "🎬 Abonnements",
        groceries: "🛒 Lebensmittel",
        other: "💸 Sonstige Ausgaben",
        
        // Default items
        salary: "Gehalt",
        rent: "Miete",
        arnona: "Arnona",
        electricity: "Strom",
        gas: "Gas",
        water: "Wasser",
        phonePlan: "Handyvertrag",
        internet: "Internet",
        icloud: "iCloud",
        catFood: "Katzenfutter",
        litter: "Katzenstreu",
        youtube: "YouTube Premium",
        claude: "Claude Pro",
        therapist: "Therapeut",
        food: "Essen",
        household: "Haushaltsprodukte",
        personalCare: "Körperpflege",
        otherExpenses: "Sonstige Ausgaben",
        
        // ============================================
        // TRANSACTIONS
        // ============================================
        allTransactions: "Transaktionen",
        noTransactionsAdded: "Noch keine Transaktionen hinzugefügt",
        addTransactionToStart: "Fügen Sie eine Transaktion hinzu, um zu beginnen",
        noMatchingTransactions: "Keine Transaktionen entsprechen den aktuellen Filtern",
        noTransactionsYet: "Noch keine Transaktionen",
        clickSyncToStart: "Klicken Sie auf \"Alle synchronisieren\", um zu beginnen",
        loadingTransactions: "Transaktionen werden geladen...",
        showingTransactions: "{shown} von {total} Transaktionen werden angezeigt",
        moreHidden: "{count} weitere ausgeblendet - passen Sie den \"Anzeigen\"-Filter an, um mehr zu sehen",
        adjustFiltersToSeeMore: "Passen Sie Ihre Filter an, um weitere Transaktionen zu sehen",

        
        // Transaction actions
        addTransaction: 'Transaktion hinzufügen',
        addManualTransaction: 'Transaktion hinzufügen',
        transactionName: 'Name',
        transactionAdded: 'Transaktion erfolgreich hinzugefügt!',
        addingTransaction: 'Transaktion wird hinzugefügt...',
        
        // Transaction labeling
        labelingTransaction: 'Transaktion wird kategorisiert...',
        unlabelingTransaction: 'Kategorie wird entfernt...',
        labelingTransactionUnique: 'Nur diese Transaktion wird kategorisiert...',
        unlabelingTransactionUnique: 'Kategorie wird nur von dieser Transaktion entfernt...',
        labelingMultipleTransactions: '{count} Transaktionen werden kategorisiert...',
        transactionLabeled: 'Transaktion kategorisiert! ✓',
        transactionLabeledUnique: 'Transaktion kategorisiert (eindeutig) ✓',
        labeledWithSimilar: '1 Transaktion + {count} ähnliche kategorisiert! ✓',
        labelRemoved: 'Kategorie entfernt! ✓',
        labelRemovedUnique: 'Kategorie entfernt (eindeutig) ✓',
        labelRemovedWithSimilar: 'Kategorie von 1 Transaktion + {count} ähnlichen entfernt! ✓',
        multipleTransactionsLabeled: '{count} Transaktionen kategorisiert!',
        uniqueLabel: '1×',
        
        // Transaction exclusion
        exclude: 'Ausschließen',
        excludeTransaction: 'Transaktion ausschließen',
        excludeThisOnly: 'Nur diese Transaktion ausschließen',
        excludeAllSimilar: 'Alle ähnlichen Transaktionen ausschließen',
        excluded: 'Ausgeschlossen',
        excludedTransactions: 'Ausgeschlossene Transaktionen',
        noExcludedTransactions: 'Keine ausgeschlossenen Transaktionen',
        confirmExclude: 'Diese Transaktion ausschließen? Sie wird aus der Liste ausgeblendet.',
        confirmExcludeAllSimilar: 'Alle ähnlichen Transaktionen ausschließen? Sie werden aus der Liste ausgeblendet.',
        excluding: 'Wird ausgeschlossen...',
        transactionExcluded: 'Transaktion ausgeschlossen ✓',
        excludedSimilarCount: '{count} ähnliche Transaktion(en) ausgeschlossen',
        
        // Transaction restoration
        restore: 'Wiederherstellen',
        restoreAll: 'Alle wiederherstellen',
        restoreSimilarTransactions: 'Ähnliche Transaktionen wiederherstellen',
        transactionRestored: 'Transaktion wiederhergestellt ✓',
        restoring: 'Wird wiederhergestellt...',
        restoringAll: 'Alle werden wiederhergestellt...',
        confirmRestoreAll: 'Alle ausgeschlossenen Transaktionen wiederherstellen?',
        allTransactionsRestored: 'Alle Transaktionen wiederhergestellt ✓',
        restoredSimilarCount: '{count} ähnliche Transaktion(en) wiederhergestellt',
        restoreSimilarHelp: 'Wenn aktiviert, werden beim Klicken auf "Wiederherstellen" auch alle ähnlichen Transaktionen wiederhergestellt',
        
        // Transaction details
        similarTransactions: "Ähnliche Transaktionen",
        checkingSimilar: 'Suche nach ähnlichen Transaktionen...',
        fullName: "Vollständiger Name",
        memo: "Notiz",
        amount: "Betrag",
        note: 'Notiz',
        addNote: 'Notiz hinzufügen (max. 10 Wörter)...',
        memoTooLong: 'Notiz zu lang. Maximal 10 Wörter.',
        noteSaved: 'Notiz gespeichert ✓',
        optional: 'optional',
        copy: 'Kopieren',
        copied: 'Kopiert!',
        clickToExpand: 'Zum Erweitern klicken',
        checkInternetConnection: "Bitte überprüfen Sie Ihre Internetverbindung und versuchen Sie es erneut",
        retry: "Wiederholen",
        errorLoadingTransactions: "Fehler beim Laden der Transaktionen",
        
        // ============================================
        // BANK SYNCHRONIZATION
        // ============================================
        bankSynchronization: "Banksynchronisation",
        bankAccountsConfig: "Bankkonten",
        maxLeumi: "💳 Max.co.il (Leumi-Karte)",
        isracard: "💳 Isracard",
        setupMaxCredentials: "🔐 Max-Anmeldedaten einrichten",
        setupIsracardCredentials: "🔐 Isracard-Anmeldedaten einrichten",
        configureCredentials: "Konfigurieren Sie Ihre Anmeldedaten, um Transaktionen zu synchronisieren.",
        credentialsConfigured: "Anmeldedaten konfiguriert ✓",
        
        // Bank credentials
        bankCredentials: "🔐 Bank-Anmeldedaten",
        credentialsSecure: "Ihre Anmeldedaten werden verschlüsselt und sicher in Firebase gespeichert.",
        username: "Benutzername",
        yourUsername: "Ihr Benutzername",
        yourPassword: "Ihr Passwort",
        idNumber: "Ausweisnummer",
        cardLast6: "Letzte 6 Ziffern der Karte",
        yourIsraeliId: "Ihre israelische ID",
        isracardId: "Isracard-ID",
        isracardPassword: "Isracard-Passwort",
        yourIsracardId: "Ihre Isracard-ID",
        yourIsracardPassword: "Ihr Isracard-Passwort",
        saveCredentials: "Anmeldedaten speichern",
        credentialsSaved: "Anmeldedaten erfolgreich gespeichert!",
        errorSavingCredentials: "Fehler beim Speichern der Anmeldedaten:",
        
        // Sync actions
        syncTransactions: "🔄 Transaktionen synchronisieren",
        syncAll: "🔄 Alle synchronisieren",
        syncingWithBanks: "Synchronisierung mit Banken...",
        syncCompleted: "Synchronisierung abgeschlossen! {count} neue Transaktion(en).",
        syncFailed: "Synchronisierung fehlgeschlagen:",
        lastSync: "Letzte Synchronisierung:",
        never: "Nie",
        ago: "vor",
        justNow: "Gerade eben",
        
        // Auto-labeling
        autoLabelTitle: "🏷️ Auto-Kategorisierung",
        autoLabelDescription: 'Nicht kategorisierte Transaktionen automatisch basierend auf vorhandenen Mustern kategorisieren',
        autoLabeling: 'Transaktionen werden automatisch kategorisiert...',
        autoLabelCompleted: "Auto-Kategorisierung abgeschlossen! {count} Transaktion(en) kategorisiert.",
        autoLabelFailed: "Auto-Kategorisierung fehlgeschlagen:",
        noTransactionsToLabel: "Keine Transaktionen konnten automatisch kategorisiert werden. Versuchen Sie zunächst, einige manuell zu kategorisieren.",
        
        // ============================================
        // CSV IMPORT
        // ============================================
        importCSV: "CSV/Excel importieren",
        importCSVDescription: "Transaktionen aus CSV-Dateien importieren (Revolut, N26, usw.)",
        supportedFormats: "Unterstützte Formate: CSV, XLSX, XLS",
        bankName: "Bankname",
        bankNamePlaceholder: "z.B. Revolut, N26, Wise...",
        bankNameHelp: "Dies hilft Ihnen, Transaktionen von verschiedenen Banken zu identifizieren",
        chooseCSV: "CSV/Excel-Datei auswählen",
        imported: "Importiert",
        importingCSV: "CSV wird importiert...",
        removingCSV: "CSV wird entfernt...",
        noCSVImported: "Noch keine CSV-Dateien importiert",
        enterBankNameFirst: "Bitte geben Sie zuerst einen Banknamen ein",
        remove: "Entfernen",
        removeCSVConfirm: "\"{name}\" und alle zugehörigen Transaktionen entfernen?",
        csvImportedSuccess: "CSV erfolgreich importiert! {count} Transaktion(en) hinzugefügt.",
        csvImportedWithDuplicates: "CSV importiert! {count} Transaktion(en) hinzugefügt ({skipped} Duplikate übersprungen)",
        csvRemovedSuccess: "CSV entfernt! {count} Transaktion(en) gelöscht.",
        errorImportingCSV: "Fehler beim Importieren der CSV:",
        errorRemovingCSV: "Fehler beim Entfernen der CSV:",
        
        // Import period
        importPeriod: 'Transaktionen importieren von',
        importPeriodHelp: 'Nur Transaktionen innerhalb dieses Zeitraums werden importiert',
        oneMonthAgo: 'Vor 1 Monat',
        threeMonthsAgo: 'Vor 3 Monaten',
        sixMonthsAgo: 'Vor 6 Monaten',
        twelveMonthsAgo: 'Vor 12 Monaten',
        eighteenMonthsAgo: 'Vor 18 Monaten',
        twentyFourMonthsAgo: 'Vor 24 Monaten',
        thirtySixMonthsAgo: 'Vor 36 Monaten',
        
        // ============================================
        // FILTERS & SORTING
        // ============================================
        filters: "Filter",
        showAll: "Alle",
        all: "Alle",
        allMonths: "Alle Monate",
        allSources: "Alle Quellen",
        month: "Monat",
        source: "Quelle",
        type: "Typ",
        expenses: "Ausgaben",
        labelStatus: "Kategoriestatus",
        showOnlyUnlabeled: "Nur nicht kategorisiert",
        showOnlyLabeled: "Nur kategorisiert",
        search: "Suchen...",
        clear: "Zurücksetzen",
        selectCategory: "Kategorie auswählen",
        
        // Sort options
        sortBy: "Sortieren nach",
        sortDateNewest: "📅 Datum (neueste)",
        sortDateOldest: "📅 Datum (älteste)",
        sortAmountHighest: "💰 Betrag (höchste)",
        sortAmountLowest: "💰 Betrag (niedrigste)",
        sortFrequencyMost: "🔄 Häufigkeit (meiste)",
        sortFrequencyLeast: "🔄 Häufigkeit (wenigste)",
        
        // Transaction display limits
        showTransactions: "Transaktionen anzeigen",
        show50: "50 anzeigen",
        show500: "500 anzeigen",
        show1000: "1000 anzeigen",
        show2000: "2000 anzeigen",
        loadMore: "Mehr laden",
        batchSize: "Transaktionen pro Seite",
        
        // Selection
        selectAll: 'Alle auswählen',
        deselectAll: 'Alle abwählen',
        
        // ============================================
        // COLORS & CUSTOMIZATION
        // ============================================
        colors: "🎨 Farben",
        customizeColors: "🎨 Farben anpassen",
        resetColors: 'Auf Standard zurücksetzen',
        resetColorsConfirm: "Alle Farben auf Standard zurücksetzen?",
        resetToDefault: "Auf Standard zurücksetzen",
        randomColors: "Zufällige Farben",
        randomizeColors: '🎲 Zufällige Farben',
        colorByCategory: 'Nach Kategorien gruppieren',
        categoryColors: "Kategoriefarben",
        itemColors: "Elementfarben",
        advanced: "Erweitert",
        backToCategories: "Zurück zu Kategorien",
        
        // Emoji selection
        selectEmoji: 'Emoji auswählen',
        customEmojiPlaceholder: 'Oder ein beliebiges Emoji hier eingeben/einfügen...',
        orChooseBelow: 'oder unten auswählen',
        useCustomEmoji: 'Verwenden',
        pleaseEnterEmoji: 'Bitte geben Sie ein Emoji ein',
        
        // ============================================
        // SETTINGS
        // ============================================
        currency: "Währung",
        language: "Sprache",
        darkMode: "Dunkelmodus",
        enableDarkMode: "Dunkelmodus aktivieren",
        
        // Income tracking
        incomeTracking: "Einkommensverfolgung",
        trackIncome: "Monatliches Einkommen verfolgen",
        trackIncomeDesc: "Wenn aktiviert, können Sie Ihre Einkommensquellen verfolgen und sehen, wie viel Geld nach Ausgaben übrig bleibt.",
        
        // Percentage calculation
        percentageCalculation: "Prozentberechnung",
        basedOnExpenses: "Basierend auf Gesamtausgaben",
        basedOnIncome: "Basierend auf Gesamteinkommen",
        percentageDesc: "Wählen Sie aus, wie Kategorieprozentsätze berechnet werden",
        
        // Database maintenance
        databaseMaintenance: "Datenbankwartung",
        cleanGhostCategories: "🧹 Geisterkategorien bereinigen",
        cleanDescription: "Entfernen Sie Kategorien, die in Ihren Daten vorhanden sind, aber nicht richtig angezeigt werden. Verwenden Sie dies, wenn Sie Probleme mit Kategorien haben, die nicht angezeigt werden oder nicht erstellt werden können.",
        clearData: "Daten löschen",
        clearAllTransactions: "Alle Transaktionen löschen",
        clearTransactionsWarning: "Alle synchronisierten Transaktionen aus der Datenbank entfernen. Dies kann nicht rückgängig gemacht werden.",
        transactionsCleared: "{count} Transaktion(en) und {csvCount} CSV-Datensätze erfolgreich gelöscht",
        errorClearingTransactions: "Fehler:",
        
        // App info
        appVersion: 'App-Version',
        versionInfo: 'Aktuelle Version Ihrer persönlichen Finanz-App',
        madeBy: "Erstellt von Victor Burtman",
        contactInfo: "Für Fehlerberichte, Ideen oder Vorschläge:",
        
        // ============================================
        // COMMON BUTTONS & ACTIONS
        // ============================================
        save: "Speichern",
        cancel: "Abbrechen",
        done: "Fertig",
        close: "✕",
        resetAll: "Alle Ausgaben zurücksetzen",
        updatingTransactions: 'Transaktionen werden aktualisiert...',
        
        // ============================================
        // PROMPTS & CONFIRMATIONS
        // ============================================
        enterCategoryName: "Kategorienamen eingeben:",
        enterEmoji: "Emoji eingeben (z.B. 🎮):",
        enterFirstItem: "Ersten Elementnamen eingeben:",
        enterNewItemName: "Neuen Elementnamen eingeben:",
        enterNewName: "Neuen Namen eingeben:",
        enterNewCategoryName: "Neuen Namen für \"{current}\" eingeben:",
        deleteCategoryConfirm: "\"{name}\" ({amount}) löschen?\n\nAlle kategorisierten Transaktionen werden unkategorisiert.",
        deleteItemConfirm: "Dieses Element löschen?",
        lastItemConfirm: "Letztes Element in der Kategorie. Gesamte Kategorie löschen?",
        resetAllConfirm: "Alle Ausgaben auf 0 zurücksetzen?",
        clearAllWarning1: "⚠️ ALLE Transaktionen löschen? Dies kann nicht rückgängig gemacht werden!",
        clearAllWarning2: "⚠️ LETZTE WARNUNG: Alle Transaktionen dauerhaft löschen?",
        
        // ============================================
        // STATUS & LOADING MESSAGES
        // ============================================
        loading: "Laden...",
        processing: "Verarbeitung...",
        processingTransactions: "Transaktionen werden verarbeitet",
        deletingTransactions: "Transaktionen werden gelöscht",
        deletingAllTransactions: "Alle Transaktionen werden gelöscht...",
        saving: "Speichern...",
        pleaseWait: 'Bitte warten',
        thisMayTakeAMoment: "Dies kann einen Moment dauern",
        updateAvailable: "Update verfügbar",
        installingUpdate: "Update wird installiert...",
        
        // ============================================
        // ERRORS
        // ============================================
        // Auth errors
        pleaseEnterEmail: "Bitte geben Sie Ihre E-Mail-Adresse ein",
        pleaseEnterEmailAndPassword: "Bitte geben Sie E-Mail und Passwort ein",
        errorPasswordRequired: "Bitte geben Sie Ihr Passwort ein",
        errorEmailInvalid: "Ungültiges E-Mail-Format",
        errorPasswordTooShort: "Passwort muss mindestens 6 Zeichen lang sein",
        errorUserNotFound: "Kein Konto mit dieser E-Mail gefunden",
        errorWrongPassword: "Falsches Passwort",
        errorEmailAlreadyUsed: "Diese E-Mail ist bereits registriert",
        errorWeakPassword: "Passwort zu schwach. Verwenden Sie mindestens 6 Zeichen.",
        errorTooManyRequests: "Zu viele fehlgeschlagene Versuche. Bitte versuchen Sie es später erneut.",
        errorNetworkFailed: "Netzwerkfehler. Überprüfen Sie Ihre Verbindung.",
        errorUnknown: "Ein Fehler ist aufgetreten. Bitte versuchen Sie es erneut.",
        authError: "Ein Fehler ist aufgetreten. Bitte versuchen Sie es erneut.",
        emailAlreadyInUse: "Diese E-Mail ist bereits registriert. Bitte melden Sie sich an.",
        weakPassword: "Passwort muss mindestens 6 Zeichen lang sein",
        invalidEmail: "Ungültige E-Mail-Adresse",
        userNotFound: "Kein Konto mit dieser E-Mail gefunden",
        wrongPassword: "Falsches Passwort",
        unknownError: "Ein Fehler ist aufgetreten. Bitte versuchen Sie es erneut.",
        emailInUse: "Diese E-Mail wird bereits verwendet. Versuchen Sie sich anzumelden.",
        invalidCredentials: "Ungültige E-Mail oder Passwort.",
        tooManyRequests: "Zu viele fehlgeschlagene Versuche. Bitte versuchen Sie es später erneut.",
        
        // Other errors
        noExpensesYet: "Noch keine Ausgaben",
        
        // ============================================
        // TIME & DATE
        // ============================================
        minutes: "Minuten",
        hours: "Stunden",
        days: "Tage",
        transactions: "Transaktion(en)",
        
        // Month names
        january: "Januar",
        february: "Februar",
        march: "März",
        april: "April",
        may: "Mai",
        june: "Juni",
        july: "Juli",
        august: "August",
        september: "September",
        october: "Oktober",
        november: "November",
        december: "Dezember",

        janShort: "Jan", febShort: "Feb", marShort: "Mär", aprShort: "Apr",
        mayShort: "Mai", junShort: "Jun", julShort: "Jul", augShort: "Aug",
        sepShort: "Sep", octShort: "Okt", novShort: "Nov", decShort: "Dez",
        
        // ============================================
        // CURRENCY & CONVERSION
        // ============================================
        conversionInfo: "Beträge werden mit täglichen Wechselkursen umgerechnet und können ungefähr sein",
        noIncomeThisMonth: "Keine Einkommenstransaktionen in diesem Monat",
        noExpensesThisMonth: "Keine Ausgaben in diesem Monat",
        estimatedBudgetNote: "Budgetschätzungen angezeigt",
    },

    // ============================================
    // ITALIAN (it)
    // ============================================
    it: {
        // ============================================
        // AUTHENTICATION & ACCOUNT
        // ============================================
        appTitle: "💰 Monitoraggio Spese",
        authSubtitle: "Accedi per sincronizzare le tue spese",
        email: "Email",
        password: "Password (min 6 caratteri)",
        signIn: "Accedi",
        signUp: "Registrati",
        noAccount: "Non hai un account?",
        hasAccount: "Hai già un account?",
        signingIn: "Accesso in corso...",
        creatingAccount: "Creazione account...",
        rememberMe: 'Ricordami',
        forgotPassword: "Password dimenticata?",
        resetPassword: "Reimposta la password",
        resetPasswordDesc: "Inserisci la tua email per ricevere un link di ripristino",
        sendResetEmail: "Invia email",
        resetEmailSent: "Email di ripristino inviata! Controlla la tua casella di posta.",
        resetEmailError: "Errore durante l'invio dell'email. Controlla il tuo indirizzo email.",
        deleteAccount: "Elimina account",
        deleteAccountWarning: "Questa azione è irreversibile. Tutti i tuoi dati saranno eliminati definitivamente.",
        confirmDelete: "Sei sicuro di voler eliminare il tuo account?",
        confirmDeleteButton: "Sì, elimina il mio account",
        accountDeleted: "Il tuo account è stato eliminato con successo",
        errorDeletingAccount: "Errore durante l'eliminazione dell'account. Riprova.",
        recentLoginRequired: "Per motivi di sicurezza, effettua nuovamente l'accesso prima di eliminare l'account",
        accountDisabled: "Questo account è stato disattivato. Contatta il supporto.",
        account: "Account",
        loggedInAs: "Accesso effettuato come:",
        logout: "Disconnetti",
        logoutConfirm: "Sei sicuro di volerti disconnettere?",
        
        // ============================================
        // NAVIGATION & TABS
        // ============================================
        budgetTab: "Budget",
        transactionsTab: "Transazioni",
        transaction: "transazione",
        transactions: "transazioni",
        settings: "Impostazioni",
        settingsTitle: "⚙️ Impostazioni",
        
        // ============================================
        // BUDGET - MAIN APP
        // ============================================
        income: "Entrate",
        expenses: "Spese",
        remaining: "Rimanente",
        ofIncome: "delle entrate",
        budget: "Budget",
        real: "Effettivo",
        estimated: "Stimato",
        spent: "Reale",
        overBy: "In eccesso di",
        underBy: "Risparmio di",
        exactly: "Importo esatto",
        used: "utilizzato",
        ofExpenses: "delle spese",

        budgetVsReal: "Budget vs Effettivo",
        pieChart: "🍩 Grafico a torta",
        barChart: "📊 Grafico a barre",
        monthlySpendingTrend: "Andamento spese mensili",
        compare: "📊 Confronta",
        categoryTrends: "Tendenze per categoria",
        last6Months: "Ultimi 6 mesi",
        
        // ============================================
        // CATEGORIES
        // ============================================
        editCategories: "✏️ Modifica categorie",
        doneEditing: "✓ Fatto",
        addCategory: "➕ Aggiungi categoria",
        category: "Categoria",
        selectCategories: "Seleziona categorie",
        allCategories: "Tutte le categorie",
        moveUp: "↑ Muovi su",
        moveDown: "↓ Muovi giù",
        addItem: "➕ Aggiungi elemento",
        deleteCategory: "Elimina categoria",
        cannotDeleteIncome: "Impossibile eliminare la categoria Entrate.",
        cannotRenameIncome: "Impossibile rinominare la categoria Entrate.",
        cannotUseSystemName: "Impossibile utilizzare il nome di una categoria di sistema.",
        categoryUpdated: 'Categoria aggiornata con successo!',
        categoryRenamedSuccess: "Categoria rinominata con successo! {count} transazione(i) aggiornata(e).",
        categoryDeletedSuccess: "Categoria eliminata! {count} transazione(i) senza etichetta.",
        categoryExistsAlert: "Questa categoria esiste già!",
        categoryNotFoundAlert: "Categoria non trovata!",
        topOfListAlert: "Questa categoria è già in cima alla lista delle spese (dopo Entrate).",
        errorCreatingCategory: "Errore durante la creazione della categoria. Riprova.",
        errorRenamingCategory: "Errore durante la ridenominazione della categoria:",
        errorDeletingCategory: "Errore durante l'eliminazione della categoria:",
        renamingCategory: 'Ridenominazione categoria...',
        deletingCategory: 'Eliminazione categoria...',
        housing: "🏠 Alloggio",
        tech: "📱 Comunicazioni & Tech",
        pet: "🐱 Animali domestici",
        subscriptions: "🎬 Abbonamenti",
        groceries: "🛒 Spesa",
        other: "💸 Altre spese",
        salary: "Stipendio",
        rent: "Affitto",
        arnona: "Arnona",
        electricity: "Elettricità",
        gas: "Gas",
        water: "Acqua",
        phonePlan: "Piano telefonico",
        internet: "Internet",
        icloud: "iCloud",
        catFood: "Cibo per gatti",
        litter: "Lettiera",
        youtube: "YouTube Premium",
        claude: "Claude Pro",
        therapist: "Terapeuta",
        food: "Cibo",
        household: "Prodotti per la casa",
        personalCare: "Cura della persona",
        otherExpenses: "Altre spese",
        
        // ============================================
        // TRANSACTIONS
        // ============================================
        allTransactions: "Transazioni",
        noTransactionsAdded: "Nessuna transazione aggiunta",
        addTransactionToStart: "Aggiungi una transazione per iniziare",
        noMatchingTransactions: "Nessuna transazione corrisponde ai filtri attuali",
        noTransactionsYet: "Ancora nessuna transazione",
        clickSyncToStart: "Clicca su \"Sincronizza tutto\" per iniziare",
        loadingTransactions: "Caricamento transazioni...",
        showingTransactions: "Visualizzazione di {shown} su {total} transazioni",
        moreHidden: "{count} transazione(i) nascosta(e) - regola il filtro \"Mostra\" per vederne di più",
        adjustFiltersToSeeMore: "Regola i filtri per vedere più transazioni",

        addTransaction: 'Aggiungi transazione',
        addManualTransaction: 'Aggiungi transazione',
        transactionName: 'Nome',
        transactionAdded: 'Transazione aggiunta con successo!',
        addingTransaction: 'Aggiunta transazione...',
        labelingTransaction: 'Etichettatura transazione...',
        unlabelingTransaction: 'Rimozione etichetta...',
        labelingTransactionUnique: 'Etichettatura solo di questa transazione...',
        unlabelingTransactionUnique: 'Rimozione etichetta solo da questa transazione...',
        labelingMultipleTransactions: 'Etichettatura di {count} transazioni...',
        transactionLabeled: 'Transazione etichettata! ✓',
        transactionLabeledUnique: 'Transazione etichettata (unica) ✓',
        labeledWithSimilar: '1 transazione + {count} simili etichettate! ✓',
        labelRemoved: 'Etichetta rimossa! ✓',
        labelRemovedUnique: 'Etichetta rimossa (unica) ✓',
        labelRemovedWithSimilar: 'Etichetta rimossa da 1 transazione + {count} simili! ✓',
        multipleTransactionsLabeled: '{count} transazioni etichettate!',
        uniqueLabel: '1×',
        exclude: 'Escludi',
        excludeTransaction: 'Escludi transazione',
        excludeThisOnly: 'Escludi solo questa transazione',
        excludeAllSimilar: 'Escludi tutte le transazioni simili',
        excluded: 'Escluso',
        excludedTransactions: 'Transazioni escluse',
        noExcludedTransactions: 'Nessuna transazione esclusa',
        confirmExclude: 'Escludere questa transazione? Verrà nascosta dalla lista.',
        confirmExcludeAllSimilar: 'Escludere tutte le transazioni simili? Verranno nascoste dalla lista.',
        excluding: 'Esclusione...',
        transactionExcluded: 'Transazione esclusa ✓',
        excludedSimilarCount: '{count} transazione(i) simili escluse',
        restore: 'Ripristina',
        restoreAll: 'Ripristina tutto',
        restoreSimilarTransactions: 'Ripristina transazioni simili',
        transactionRestored: 'Transazione ripristinata ✓',
        restoring: 'Ripristino...',
        restoringAll: 'Ripristino di tutto...',
        confirmRestoreAll: 'Ripristinare tutte le transazioni escluse?',
        allTransactionsRestored: 'Tutte le transazioni ripristinate ✓',
        restoredSimilarCount: '{count} transazione(i) simili ripristinate',
        restoreSimilarHelp: 'Se attivato, cliccare su "Ripristina" ripristinerà anche tutte le transazioni simili',
        similarTransactions: "Transazioni simili",
        checkingSimilar: 'Ricerca transazioni simili...',
        fullName: "Nome completo",
        memo: "Memo",
        amount: "Importo",
        note: 'Nota',
        addNote: 'Aggiungi una nota (max 10 parole)...',
        memoTooLong: 'Nota troppo lunga. Massimo 10 parole.',
        noteSaved: 'Nota salvata ✓',
        optional: 'opzionale',
        copy: 'Copia',
        copied: 'Copiato!',
        clickToExpand: 'Clicca per espandere',
        checkInternetConnection: "Controlla la tua connessione internet e riprova",
        retry: "Riprova",
        errorLoadingTransactions: "Errore nel caricamento delle transazioni",
        
        // ============================================
        // BANK SYNCHRONIZATION
        // ============================================
        bankSynchronization: "Sincronizzazione bancaria",
        bankAccountsConfig: "Conti bancari",
        maxLeumi: "💳 Max.co.il (Carta Leumi)",
        isracard: "💳 Isracard",
        setupMaxCredentials: "🔐 Configura credenziali Max",
        setupIsracardCredentials: "🔐 Configura credenziali Isracard",
        configureCredentials: "Configura le tue credenziali per sincronizzare le transazioni.",
        credentialsConfigured: "Credenziali configurate ✓",
        bankCredentials: "🔐 Credenziali bancarie",
        credentialsSecure: "Le tue credenziali saranno criptate e memorizzate in modo sicuro in Firebase.",
        username: "Nome utente",
        yourUsername: "Il tuo nome utente",
        yourPassword: "La tua password",
        idNumber: "Numero identificativo",
        cardLast6: "Ultime 6 cifre della carta",
        yourIsraeliId: "Il tuo ID israeliano",
        isracardId: "ID Isracard",
        isracardPassword: "Password Isracard",
        yourIsracardId: "Il tuo ID Isracard",
        yourIsracardPassword: "La tua password Isracard",
        saveCredentials: "Salva credenziali",
        credentialsSaved: "Credenziali salvate con successo!",
        errorSavingCredentials: "Errore durante il salvataggio delle credenziali:",
        syncTransactions: "🔄 Sincronizza transazioni",
        syncAll: "🔄 Sincronizza tutto",
        syncingWithBanks: "Sincronizzazione con le banche...",
        syncCompleted: "Sincronizzazione completata! {count} nuova(e) transazione(i).",
        syncFailed: "Sincronizzazione fallita:",
        lastSync: "Ultima sincro:",
        never: "Mai",
        ago: "fa",
        justNow: "Adesso",
        autoLabelTitle: "🏷️ Etichettatura automatica",
        autoLabelDescription: 'Etichetta automaticamente le transazioni non etichettate in base ai pattern esistenti',
        autoLabeling: 'Etichettatura automatica delle transazioni...',
        autoLabelCompleted: "Etichettatura automatica completata! {count} transazione(i) etichettata(e).",
        autoLabelFailed: "Etichettatura automatica fallita:",
        noTransactionsToLabel: "Nessuna transazione etichettata automaticamente. Prova a etichettarne alcune manualmente prima.",
        
        // ============================================
        // CSV IMPORT
        // ============================================
        importCSV: "Importa CSV/Excel",
        importCSVDescription: "Importa transazioni da file CSV (Revolut, N26, ecc.)",
        supportedFormats: "Formati supportati: CSV, XLSX, XLS",
        bankName: "Nome della banca",
        bankNamePlaceholder: "es: Revolut, N26, Wise...",
        bankNameHelp: "Ti aiuta a identificare le transazioni di diverse banche",
        chooseCSV: "Scegli un file CSV/Excel",
        imported: "Importato",
        importingCSV: "Importazione CSV...",
        removingCSV: "Rimozione CSV...",
        noCSVImported: "Nessun file CSV importato al momento",
        enterBankNameFirst: "Inserisci prima il nome della banca",
        remove: "Rimuovi",
        removeCSVConfirm: "Eliminare \"{name}\" e tutte le sue transazioni?",
        csvImportedSuccess: "CSV importato con successo! {count} transazione(i) aggiunta(e).",
        csvImportedWithDuplicates: "CSV importato! {count} transazione(i) aggiunta(e) ({skipped} duplicati ignorati)",
        csvRemovedSuccess: "CSV rimosso! {count} transazione(i) eliminata(e).",
        errorImportingCSV: "Errore durante l'importazione del CSV:",
        errorRemovingCSV: "Errore durante la rimozione del CSV:",
        importPeriod: 'Importa transazioni da',
        importPeriodHelp: 'Verranno importate solo le transazioni in questo periodo',
        oneMonthAgo: '1 mese fa',
        threeMonthsAgo: '3 mesi fa',
        sixMonthsAgo: '6 mesi fa',
        twelveMonthsAgo: '12 mesi fa',
        eighteenMonthsAgo: '18 mesi fa',
        twentyFourMonthsAgo: '24 mesi fa',
        thirtySixMonthsAgo: '36 mesi fa',
        
        // ============================================
        // FILTERS & SORTING
        // ============================================
        filters: "Filtri",
        showAll: "Tutto",
        all: "Tutto",
        allMonths: "Tutti i mesi",
        allSources: "Tutte le fonti",
        month: "Mese",
        source: "Fonte",
        type: "Tipo",
        expenses: "Spese",
        labelStatus: "Stato etichettatura",
        showOnlyUnlabeled: "Solo non etichettate",
        showOnlyLabeled: "Solo etichettate",
        search: "Cerca...",
        clear: "Reimposta",
        selectCategory: "Seleziona una categoria",
        sortBy: "Ordina per",
        sortDateNewest: "📅 Data (recente)",
        sortDateOldest: "📅 Data (meno recente)",
        sortAmountHighest: "💰 Importo (alto)",
        sortAmountLowest: "💰 Importo (basso)",
        sortFrequencyMost: "🔄 Frequenza (alta)",
        sortFrequencyLeast: "🔄 Frequenza (bassa)",
        showTransactions: "Mostra transazioni",
        show50: "Mostra 50",
        show500: "Mostra 500",
        show1000: "Mostra 1000",
        show2000: "Mostra 2000",
        loadMore: "Carica altro",
        batchSize: "Transazioni per pagina",
        selectAll: 'Seleziona tutto',
        deselectAll: 'Deseleziona tutto',
        
        // ============================================
        // COLORS & CUSTOMIZATION
        // ============================================
        colors: "🎨 Colori",
        customizeColors: "🎨 Personalizza colori",
        resetColors: 'Ripristina predefiniti',
        resetColorsConfirm: "Ripristinare tutti i colori predefiniti?",
        resetToDefault: "Ripristina predefiniti",
        randomColors: "Colori casuali",
        randomizeColors: '🎲 Colori casuali',
        colorByCategory: 'Raggruppa per categorie',
        categoryColors: "Colori categorie",
        itemColors: "Colori elementi",
        advanced: "Avanzate",
        backToCategories: "Torna alle categorie",
        selectEmoji: 'Seleziona un emoji',
        customEmojiPlaceholder: 'O digita/incolla un emoji qui...',
        orChooseBelow: 'o scegli qui sotto',
        useCustomEmoji: 'Usa',
        pleaseEnterEmoji: 'Inserisci un emoji',
        
        // ============================================
        // SETTINGS
        // ============================================
        currency: "Valuta",
        language: "Lingua",
        darkMode: "Modalità scura",
        enableDarkMode: "Attiva modalità scura",
        incomeTracking: "Monitoraggio entrate",
        trackIncome: "Monitora entrate mensili",
        trackIncomeDesc: "Se attivato, puoi monitorare le tue fonti di reddito e vedere quanto denaro rimane dopo le spese.",
        percentageCalculation: "Calcolo percentuali",
        basedOnExpenses: "Basato sulle spese totali",
        basedOnIncome: "Basato sulle entrate totali",
        percentageDesc: "Scegli come vengono calcolate le percentuali delle categorie",
        databaseMaintenance: "Manutenzione database",
        cleanGhostCategories: "🧹 Pulisci categorie fantasma",
        cleanDescription: "Rimuovi le categorie che esistono nei tuoi dati ma non vengono visualizzate correttamente. Usa questa opzione se hai problemi con categorie che non appaiono o non possono essere create.",
        clearData: "Cancella dati",
        clearAllTransactions: "Cancella tutte le transazioni",
        clearTransactionsWarning: "Elimina tutte le transazioni sincronizzate dal database. Questa azione è irreversibile.",
        transactionsCleared: "{count} transazione(i) e {csvCount} record CSV eliminati con successo",
        errorClearingTransactions: "Errore:",
        appVersion: 'Versione app',
        versionInfo: 'Versione attuale della tua applicazione di finanza personale',
        madeBy: "Creata da Victor Burtman",
        contactInfo: "Per segnalazioni bug, idee o suggerimenti:",
        
        // ============================================
        // COMMON BUTTONS & ACTIONS
        // ============================================
        save: "Salva",
        cancel: "Annulla",
        done: "Fatto",
        close: "✕",
        resetAll: "Reimposta tutte le spese",
        updatingTransactions: 'Aggiornamento transazioni...',
        
        // ============================================
        // PROMPTS & CONFIRMATIONS
        // ============================================
        enterCategoryName: "Inserisci il nome della categoria:",
        enterEmoji: "Inserisci un emoji (es: 🎮):",
        enterFirstItem: "Inserisci il nome del primo elemento:",
        enterNewItemName: "Inserisci il nome del nuovo elemento:",
        enterNewName: "Inserisci il nuovo nome:",
        enterNewCategoryName: "Inserisci il nuovo nome per \"{current}\":",
        deleteCategoryConfirm: "Eliminare \"{name}\" ({amount})?\n\nTutte le transazioni etichettate diventeranno senza etichetta.",
        deleteItemConfirm: "Eliminare questo elemento?",
        lastItemConfirm: "Ultimo elemento della categoria. Eliminare l'intera categoria?",
        resetAllConfirm: "Reimpostare tutte le spese a 0?",
        clearAllWarning1: "⚠️ Eliminare TUTTE le transazioni? Questa azione è irreversibile!",
        clearAllWarning2: "⚠️ ULTIMO AVVISO: Eliminare definitivamente tutte le transazioni?",
        
        // ============================================
        // STATUS & LOADING MESSAGES
        // ============================================
        loading: "Caricamento...",
        processing: "Elaborazione...",
        processingTransactions: "Elaborazione transazioni",
        deletingTransactions: "Eliminazione transazioni",
        deletingAllTransactions: "Eliminazione di tutte le transazioni...",
        saving: "Salvataggio...",
        pleaseWait: 'Attendere prego',
        thisMayTakeAMoment: "Potrebbe richiedere un momento",
        updateAvailable: "Aggiornamento disponibile",
        installingUpdate: "Installazione aggiornamento...",
        
        // ============================================
        // ERRORS
        // ============================================
        pleaseEnterEmail: "Inserisci il tuo indirizzo email",
        pleaseEnterEmailAndPassword: "Inserisci email e password",
        errorPasswordRequired: "Inserisci la tua password",
        errorEmailInvalid: "Formato email non valido",
        errorPasswordTooShort: "La password deve contenere almeno 6 caratteri",
        errorUserNotFound: "Nessun account trovato con questa email",
        errorWrongPassword: "Password errata",
        errorEmailAlreadyUsed: "Questa email è già registrata",
        errorWeakPassword: "La password è troppo debole. Usa almeno 6 caratteri.",
        errorTooManyRequests: "Troppi tentativi falliti. Riprova più tardi.",
        errorNetworkFailed: "Errore di rete. Controlla la tua connessione.",
        errorUnknown: "Si è verificato un errore. Riprova.",
        authError: "Si è verificato un errore. Riprova.",
        emailAlreadyInUse: "Questa email è già registrata. Effettua l'accesso.",
        weakPassword: "La password deve contenere almeno 6 caratteri",
        invalidEmail: "Indirizzo email non valido",
        userNotFound: "Nessun account trovato con questa email",
        wrongPassword: "Password errata",
        unknownError: "Si è verificato un errore. Riprova.",
        emailInUse: "Questa email è già in uso. Prova ad accedere.",
        invalidCredentials: "Email o password non valida.",
        tooManyRequests: "Troppi tentativi falliti. Riprova più tardi.",
        noExpensesYet: "Ancora nessuna spesa",
        
        // ============================================
        // TIME & DATE
        // ============================================
        minutes: "minuti",
        hours: "ore",
        days: "giorni",
        transactions: "transazione(i)",
        january: "Gennaio",
        february: "Febbraio",
        march: "Marzo",
        april: "Aprile",
        may: "Maggio",
        june: "Giugno",
        july: "Luglio",
        august: "Agosto",
        september: "Settembre",
        october: "Ottobre",
        november: "Novembre",
        december: "Dicembre",

        janShort: "Gen", febShort: "Feb", marShort: "Mar", aprShort: "Apr",
        mayShort: "Mag", junShort: "Giu", julShort: "Lug", augShort: "Ago",
        sepShort: "Set", octShort: "Ott", novShort: "Nov", decShort: "Dic",
        
        // ============================================
        // CURRENCY & CONVERSION
        // ============================================
        conversionInfo: "Gli importi sono convertiti con i tassi di cambio giornalieri e possono essere approssimativi",
        noIncomeThisMonth: "Nessuna transazione di reddito questo mese",
        noExpensesThisMonth: "Nessuna spesa questo mese",
        estimatedBudgetNote: "Stime di bilancio visualizzate",
    },

    // ============================================
    // PORTUGESE (pt)
    // ============================================
    pt: {
        // ============================================
        // AUTHENTICATION & ACCOUNT  
        // ============================================
        appTitle: "💰 Controle de Despesas",
        authSubtitle: "Faça login para sincronizar suas despesas",
        email: "E-mail",
        password: "Senha (mín. 6 caracteres)",
        signIn: "Entrar",
        signUp: "Registrar",
        noAccount: "Não tem uma conta?",
        hasAccount: "Já tem uma conta?",
        signingIn: "Entrando...",
        creatingAccount: "Criando conta...",
        rememberMe: 'Lembrar de mim',
        forgotPassword: "Esqueceu a senha?",
        resetPassword: "Redefinir senha",
        resetPasswordDesc: "Digite seu e-mail para receber um link de redefinição",
        sendResetEmail: "Enviar e-mail",
        resetEmailSent: "E-mail de redefinição enviado! Verifique sua caixa de entrada.",
        resetEmailError: "Erro ao enviar e-mail. Verifique seu endereço de e-mail.",
        deleteAccount: "Excluir conta",
        deleteAccountWarning: "Esta ação é irreversível. Todos os seus dados serão excluídos permanentemente.",
        confirmDelete: "Tem certeza de que deseja excluir sua conta?",
        confirmDeleteButton: "Sim, excluir minha conta",
        accountDeleted: "Sua conta foi excluída com sucesso",
        errorDeletingAccount: "Erro ao excluir conta. Tente novamente.",
        recentLoginRequired: "Por motivos de segurança, faça login novamente antes de excluir sua conta",
        accountDisabled: "Esta conta foi desativada. Entre em contato com o suporte.",
        account: "Conta",
        loggedInAs: "Conectado como:",
        logout: "Sair",
        logoutConfirm: "Tem certeza de que deseja sair?",
        
        // ============================================
        // NAVIGATION & TABS
        // ============================================
        budgetTab: "Orçamento",
        transactionsTab: "Transações",
        transaction: "transação",
        transactions: "transações",
        settings: "Configurações",
        settingsTitle: "⚙️ Configurações",
        
        // ============================================
        // BUDGET - MAIN APP
        // ============================================
        income: "Receitas",
        expenses: "Despesas",
        remaining: "Restante",
        ofIncome: "da receita",
        budget: "Orçamento",
        real: "Real",
        estimated: "Estimado",
        spent: "Real",
        overBy: "Excedido em",
        underBy: "Economizado",
        exactly: "Valor exato",
        used: "usado",
        ofExpenses: "das despesas",

        
        // Budget modes
        budgetVsReal: "Orçamento vs Real",
        
        // Charts
        pieChart: "🍩 Gráfico de pizza",
        barChart: "📊 Gráfico de barras",
        monthlySpendingTrend: "Tendência de gastos mensais",
        compare: "📊 Comparar",
        categoryTrends: "Tendências por categoria",
        last6Months: "Últimos 6 meses",
        
        // ============================================
        // CATEGORIES
        // ============================================
        editCategories: "✏️ Editar categorias",
        doneEditing: "✓ Concluído",
        addCategory: "➕ Adicionar categoria",
        category: "Categoria",
        selectCategories: "Selecionar categorias",
        allCategories: "Todas as categorias",
        
        // Category actions
        moveUp: "↑ Mover para cima",
        moveDown: "↓ Mover para baixo",
        addItem: "➕ Adicionar item",
        deleteCategory: " Excluir categoria",
        cannotDeleteIncome: "Não é possível excluir a categoria Receita.",
        cannotRenameIncome: "Não é possível renomear a categoria Receita.",
        cannotUseSystemName: "Não é possível usar o nome de uma categoria do sistema.",
        
        // Category messages
        categoryUpdated: 'Categoria atualizada com sucesso!',
        categoryRenamedSuccess: "Categoria renomeada com sucesso! {count} transação(ões) atualizada(s).",
        categoryDeletedSuccess: "Categoria excluída! {count} transação(ões) sem categoria.",
        categoryExistsAlert: "Esta categoria já existe!",
        categoryNotFoundAlert: "Categoria não encontrada!",
        topOfListAlert: "Esta categoria já está no topo da lista de despesas (após Receita).",
        errorCreatingCategory: "Erro ao criar categoria. Tente novamente.",
        errorRenamingCategory: "Erro ao renomear categoria:",
        errorDeletingCategory: "Erro ao excluir categoria:",
        renamingCategory: 'Renomeando categoria...',
        deletingCategory: 'Excluindo categoria...',
        
        // Default categories
        housing: "🏠 Moradia",
        tech: "📱 Comunicações e Tecnologia",
        pet: "🐱 Cuidados com animais",
        subscriptions: "🎬 Assinaturas",
        groceries: "🛒 Compras",
        other: "💸 Outras despesas",
        
        // Default items
        salary: "Salário",
        rent: "Aluguel",
        arnona: "Arnona",
        electricity: "Eletricidade",
        gas: "Gás",
        water: "Água",
        phonePlan: "Plano de telefone",
        internet: "Internet",
        icloud: "iCloud",
        catFood: "Comida de gato",
        litter: "Areia sanitária",
        youtube: "YouTube Premium",
        claude: "Claude Pro",
        therapist: "Terapeuta",
        food: "Comida",
        household: "Produtos domésticos",
        personalCare: "Cuidados pessoais",
        otherExpenses: "Outras despesas",
        
        // ============================================
        // TRANSACTIONS
        // ============================================
        allTransactions: "Transações",
        noTransactionsAdded: "Nenhuma transação adicionada ainda",
        addTransactionToStart: "Adicione uma transação para começar",
        noMatchingTransactions: "Nenhuma transação corresponde aos filtros atuais",
        noTransactionsYet: "Nenhuma transação ainda",
        clickSyncToStart: "Clique em \"Sincronizar tudo\" para começar",
        loadingTransactions: "Carregando transações...",
        showingTransactions: "Mostrando {shown} de {total} transações",
        moreHidden: "{count} ocultas - ajuste o filtro \"Mostrar\" para ver mais",
        adjustFiltersToSeeMore: "Ajuste seus filtros para ver mais transações",

        
        // Transaction actions
        addTransaction: 'Adicionar transação',
        addManualTransaction: 'Adicionar transação',
        transactionName: 'Nome',
        transactionAdded: 'Transação adicionada com sucesso!',
        addingTransaction: 'Adicionando transação...',
        
        // Transaction labeling
        labelingTransaction: 'Categorizando transação...',
        unlabelingTransaction: 'Removendo categoria...',
        labelingTransactionUnique: 'Categorizando apenas esta transação...',
        unlabelingTransactionUnique: 'Removendo categoria apenas desta transação...',
        labelingMultipleTransactions: 'Categorizando {count} transações...',
        transactionLabeled: 'Transação categorizada! ✓',
        transactionLabeledUnique: 'Transação categorizada (única) ✓',
        labeledWithSimilar: '1 transação + {count} semelhante(s) categorizadas! ✓',
        labelRemoved: 'Categoria removida! ✓',
        labelRemovedUnique: 'Categoria removida (única) ✓',
        labelRemovedWithSimilar: 'Categoria removida de 1 transação + {count} semelhante(s)! ✓',
        multipleTransactionsLabeled: '{count} transações categorizadas!',
        uniqueLabel: '1×',
        
        // Transaction exclusion
        exclude: 'Excluir',
        excludeTransaction: 'Excluir transação',
        excludeThisOnly: 'Excluir apenas esta transação',
        excludeAllSimilar: 'Excluir todas as transações semelhantes',
        excluded: 'Excluído',
        excludedTransactions: 'Transações excluídas',
        noExcludedTransactions: 'Nenhuma transação excluída',
        confirmExclude: 'Excluir esta transação? Ela será ocultada da lista.',
        confirmExcludeAllSimilar: 'Excluir todas as transações semelhantes? Elas serão ocultadas da lista.',
        excluding: 'Excluindo...',
        transactionExcluded: 'Transação excluída ✓',
        excludedSimilarCount: '{count} transação(ões) semelhante(s) excluída(s)',
        
        // Transaction restoration
        restore: 'Restaurar',
        restoreAll: 'Restaurar tudo',
        restoreSimilarTransactions: 'Restaurar transações semelhantes',
        transactionRestored: 'Transação restaurada ✓',
        restoring: 'Restaurando...',
        restoringAll: 'Restaurando tudo...',
        confirmRestoreAll: 'Restaurar todas as transações excluídas?',
        allTransactionsRestored: 'Todas as transações restauradas ✓',
        restoredSimilarCount: '{count} transação(ões) semelhante(s) restaurada(s)',
        restoreSimilarHelp: 'Quando ativado, clicar em "Restaurar" também restaurará todas as transações semelhantes',
        
        // Transaction details
        similarTransactions: "Transações semelhantes",
        checkingSimilar: 'Procurando transações semelhantes...',
        fullName: "Nome completo",
        memo: "Nota",
        amount: "Valor",
        note: 'Nota',
        addNote: 'Adicionar nota (máx. 10 palavras)...',
        memoTooLong: 'Nota muito longa. Máximo de 10 palavras.',
        noteSaved: 'Nota salva ✓',
        optional: 'opcional',
        copy: 'Copiar',
        copied: 'Copiado!',
        clickToExpand: 'Clique para expandir',
        checkInternetConnection: "Por favor, verifique sua conexão com a internet e tente novamente",
        retry: "Tentar novamente",
        errorLoadingTransactions: "Erro ao carregar transações",
        
        // ============================================
        // BANK SYNCHRONIZATION
        // ============================================
        bankSynchronization: "Sincronização bancária",
        bankAccountsConfig: "Contas bancárias",
        maxLeumi: "💳 Max.co.il (Cartão Leumi)",
        isracard: "💳 Isracard",
        setupMaxCredentials: "🔐 Configurar credenciais Max",
        setupIsracardCredentials: "🔐 Configurar credenciais Isracard",
        configureCredentials: "Configure suas credenciais para sincronizar transações.",
        credentialsConfigured: "Credenciais configuradas ✓",
        
        // Bank credentials
        bankCredentials: "🔐 Credenciais bancárias",
        credentialsSecure: "Suas credenciais serão criptografadas e armazenadas com segurança no Firebase.",
        username: "Nome de usuário",
        yourUsername: "Seu nome de usuário",
        yourPassword: "Sua senha",
        idNumber: "Número de identificação",
        cardLast6: "Últimos 6 dígitos do cartão",
        yourIsraeliId: "Seu ID israelense",
        isracardId: "ID Isracard",
        isracardPassword: "Senha Isracard",
        yourIsracardId: "Seu ID Isracard",
        yourIsracardPassword: "Sua senha Isracard",
        saveCredentials: "Salvar credenciais",
        credentialsSaved: "Credenciais salvas com sucesso!",
        errorSavingCredentials: "Erro ao salvar credenciais:",
        
        // Sync actions
        syncTransactions: "🔄 Sincronizar transações",
        syncAll: "🔄 Sincronizar tudo",
        syncingWithBanks: "Sincronizando com bancos...",
        syncCompleted: "Sincronização concluída! {count} nova(s) transação(ões).",
        syncFailed: "Sincronização falhou:",
        lastSync: "Última sincronização:",
        never: "Nunca",
        ago: "atrás",
        justNow: "Agora mesmo",
        
        // Auto-labeling
        autoLabelTitle: "🏷️ Categorização automática",
        autoLabelDescription: 'Categorizar automaticamente transações não categorizadas com base em padrões existentes',
        autoLabeling: 'Categorizando transações automaticamente...',
        autoLabelCompleted: "Categorização automática concluída! {count} transação(ões) categorizada(s).",
        autoLabelFailed: "Categorização automática falhou:",
        noTransactionsToLabel: "Nenhuma transação pôde ser categorizada automaticamente. Tente categorizar algumas manualmente primeiro.",
        
        // ============================================
        // CSV IMPORT
        // ============================================
        importCSV: "Importar CSV/Excel",
        importCSVDescription: "Importar transações de arquivos CSV (Revolut, N26, etc.)",
        supportedFormats: "Formatos suportados: CSV, XLSX, XLS",
        bankName: "Nome do banco",
        bankNamePlaceholder: "ex: Revolut, N26, Wise...",
        bankNameHelp: "Isso ajuda a identificar transações de diferentes bancos",
        chooseCSV: "Escolher arquivo CSV/Excel",
        imported: "Importado",
        importingCSV: "Importando CSV...",
        removingCSV: "Removendo CSV...",
        noCSVImported: "Nenhum arquivo CSV importado ainda",
        enterBankNameFirst: "Digite o nome do banco primeiro",
        remove: "Remover",
        removeCSVConfirm: "Remover \"{name}\" e todas as suas transações?",
        csvImportedSuccess: "CSV importado com sucesso! {count} transação(ões) adicionada(s).",
        csvImportedWithDuplicates: "CSV importado! {count} transação(ões) adicionada(s) ({skipped} duplicadas ignoradas)",
        csvRemovedSuccess: "CSV removido! {count} transação(ões) excluída(s).",
        errorImportingCSV: "Erro ao importar CSV:",
        errorRemovingCSV: "Erro ao remover CSV:",
        
        // Import period
        importPeriod: 'Importar transações de',
        importPeriodHelp: 'Apenas transações dentro deste período serão importadas',
        oneMonthAgo: 'Há 1 mês',
        threeMonthsAgo: 'Há 3 meses',
        sixMonthsAgo: 'Há 6 meses',
        twelveMonthsAgo: 'Há 12 meses',
        eighteenMonthsAgo: 'Há 18 meses',
        twentyFourMonthsAgo: 'Há 24 meses',
        thirtySixMonthsAgo: 'Há 36 meses',
        
        // ============================================
        // FILTERS & SORTING
        // ============================================
        filters: "Filtros",
        showAll: "Todos",
        all: "Todos",
        allMonths: "Todos os meses",
        allSources: "Todas as fontes",
        month: "Mês",
        source: "Fonte",
        type: "Tipo",
        expenses: "Despesas",
        labelStatus: "Status de categoria",
        showOnlyUnlabeled: "Apenas não categorizadas",
        showOnlyLabeled: "Apenas categorizadas",
        search: "Pesquisar...",
        clear: "Redefinir",
        selectCategory: "Selecionar categoria",
        
        // Sort options
        sortBy: "Ordenar por",
        sortDateNewest: "📅 Data (mais recente)",
        sortDateOldest: "📅 Data (mais antiga)",
        sortAmountHighest: "💰 Valor (maior)",
        sortAmountLowest: "💰 Valor (menor)",
        sortFrequencyMost: "🔄 Frequência (maior)",
        sortFrequencyLeast: "🔄 Frequência (menor)",
        
        // Transaction display limits
        showTransactions: "Mostrar transações",
        show50: "Mostrar 50",
        show500: "Mostrar 500",
        show1000: "Mostrar 1000",
        show2000: "Mostrar 2000",
        loadMore: "Carregar mais",
        batchSize: "Transações por página",
        
        // Selection
        selectAll: 'Selecionar tudo',
        deselectAll: 'Desmarcar tudo',
        
        // ============================================
        // COLORS & CUSTOMIZATION
        // ============================================
        colors: "🎨 Cores",
        customizeColors: "🎨 Personalizar cores",
        resetColors: 'Redefinir para padrão',
        resetColorsConfirm: "Redefinir todas as cores para o padrão?",
        resetToDefault: "Redefinir para padrão",
        randomColors: "Cores aleatórias",
        randomizeColors: '🎲 Cores aleatórias',
        colorByCategory: 'Agrupar por categorias',
        categoryColors: "Cores de categorias",
        itemColors: "Cores de itens",
        advanced: "Avançado",
        backToCategories: "Voltar para categorias",
        
        // Emoji selection
        selectEmoji: 'Selecionar emoji',
        customEmojiPlaceholder: 'Ou digite/cole qualquer emoji aqui...',
        orChooseBelow: 'ou escolha abaixo',
        useCustomEmoji: 'Usar',
        pleaseEnterEmoji: 'Digite um emoji',
        
        // ============================================
        // SETTINGS
        // ============================================
        currency: "Moeda",
        language: "Idioma",
        darkMode: "Modo escuro",
        enableDarkMode: "Ativar modo escuro",
        
        // Income tracking
        incomeTracking: "Rastreamento de receita",
        trackIncome: "Rastrear receita mensal",
        trackIncomeDesc: "Quando ativado, você pode rastrear suas fontes de renda e ver quanto dinheiro resta após as despesas.",
        
        // Percentage calculation
        percentageCalculation: "Cálculo de porcentagem",
        basedOnExpenses: "Baseado em despesas totais",
        basedOnIncome: "Baseado em receita total",
        percentageDesc: "Escolha como as porcentagens de categorias são calculadas",
        
        // Database maintenance
        databaseMaintenance: "Manutenção do banco de dados",
        cleanGhostCategories: "🧹 Limpar categorias fantasmas",
        cleanDescription: "Remover categorias que existem em seus dados, mas não são exibidas corretamente. Use isso se tiver problemas com categorias que não aparecem ou não podem ser criadas.",
        clearData: "Limpar dados",
        clearAllTransactions: "Limpar todas as transações",
        clearTransactionsWarning: "Remover todas as transações sincronizadas do banco de dados. Isso não pode ser desfeito.",
        transactionsCleared: "{count} transação(ões) e {csvCount} registro(s) CSV excluídos com sucesso",
        errorClearingTransactions: "Erro:",
        
        // App info
        appVersion: 'Versão do aplicativo',
        versionInfo: 'Versão atual do seu aplicativo de finanças pessoais',
        madeBy: "Criado por Victor Burtman",
        contactInfo: "Para relatórios de bugs, ideias ou sugestões:",
        
        // ============================================
        // COMMON BUTTONS & ACTIONS
        // ============================================
        save: "Salvar",
        cancel: "Cancelar",
        done: "Concluído",
        close: "✕",
        resetAll: "Redefinir todas as despesas",
        updatingTransactions: 'Atualizando transações...',
        
        // ============================================
        // PROMPTS & CONFIRMATIONS
        // ============================================
        enterCategoryName: "Digite o nome da categoria:",
        enterEmoji: "Digite um emoji (ex: 🎮):",
        enterFirstItem: "Digite o nome do primeiro item:",
        enterNewItemName: "Digite o nome do novo item:",
        enterNewName: "Digite o novo nome:",
        enterNewCategoryName: "Digite o novo nome para \"{current}\":",
        deleteCategoryConfirm: "Excluir \"{name}\" ({amount})?\n\nTodas as transações categorizadas ficarão sem categoria.",
        deleteItemConfirm: "Excluir este item?",
        lastItemConfirm: "Último item na categoria. Excluir toda a categoria?",
        resetAllConfirm: "Redefinir todas as despesas para 0?",
        clearAllWarning1: "⚠️ Excluir TODAS as transações? Isso não pode ser desfeito!",
        clearAllWarning2: "⚠️ AVISO FINAL: Excluir permanentemente todas as transações?",
        
        // ============================================
        // STATUS & LOADING MESSAGES
        // ============================================
        loading: "Carregando...",
        processing: "Processando...",
        processingTransactions: "Processando transações",
        deletingTransactions: "Excluindo transações",
        deletingAllTransactions: "Excluindo todas as transações...",
        saving: "Salvando...",
        pleaseWait: 'Aguarde',
        thisMayTakeAMoment: "Isso pode levar um momento",
        updateAvailable: "Atualização disponível",
        installingUpdate: "Instalando atualização...",
        
        // ============================================
        // ERRORS
        // ============================================
        // Auth errors
        pleaseEnterEmail: "Digite seu endereço de e-mail",
        pleaseEnterEmailAndPassword: "Digite e-mail e senha",
        errorPasswordRequired: "Digite sua senha",
        errorEmailInvalid: "Formato de e-mail inválido",
        errorPasswordTooShort: "A senha deve ter pelo menos 6 caracteres",
        errorUserNotFound: "Nenhuma conta encontrada com este e-mail",
        errorWrongPassword: "Senha incorreta",
        errorEmailAlreadyUsed: "Este e-mail já está registrado",
        errorWeakPassword: "Senha muito fraca. Use pelo menos 6 caracteres.",
        errorTooManyRequests: "Muitas tentativas falhadas. Tente novamente mais tarde.",
        errorNetworkFailed: "Erro de rede. Verifique sua conexão.",
        errorUnknown: "Ocorreu um erro. Tente novamente.",
        authError: "Ocorreu um erro. Tente novamente.",
        emailAlreadyInUse: "Este e-mail já está registrado. Faça login.",
        weakPassword: "A senha deve ter pelo menos 6 caracteres",
        invalidEmail: "Endereço de e-mail inválido",
        userNotFound: "Nenhuma conta encontrada com este e-mail",
        wrongPassword: "Senha incorreta",
        unknownError: "Ocorreu um erro. Tente novamente.",
        emailInUse: "Este e-mail já está em uso. Tente fazer login.",
        invalidCredentials: "E-mail ou senha inválidos.",
        tooManyRequests: "Muitas tentativas falhadas. Tente novamente mais tarde.",
        
        // Other errors
        noExpensesYet: "Nenhuma despesa ainda",
        
        // ============================================
        // TIME & DATE
        // ============================================
        minutes: "minutos",
        hours: "horas",
        days: "dias",
        transactions: "transação(ões)",
        
        // Month names
        january: "Janeiro",
        february: "Fevereiro",
        march: "Março",
        april: "Abril",
        may: "Maio",
        june: "Junho",
        july: "Julho",
        august: "Agosto",
        september: "Setembro",
        october: "Outubro",
        november: "Novembro",
        december: "Dezembro",

        janShort: "Jan", febShort: "Fev", marShort: "Mar", aprShort: "Abr",
        mayShort: "Mai", junShort: "Jun", julShort: "Jul", augShort: "Ago",
        sepShort: "Set", octShort: "Out", novShort: "Nov", decShort: "Dez",
        
        // ============================================
        // CURRENCY & CONVERSION
        // ============================================
        conversionInfo: "Os valores são convertidos usando taxas de câmbio diárias e podem ser aproximados",
        noIncomeThisMonth: "Nenhuma transação de renda este mês",
        noExpensesThisMonth: "Nenhuma despesa este mês",
        estimatedBudgetNote: "Estimativas orçamentárias exibidas",
    },

    // ============================================
    // TURKISH (tr) - CORRIGÉ
    // ============================================
    tr: {
        // ============================================
        // AUTHENTICATION & ACCOUNT
        // ============================================
        appTitle: "💰 Harcama Takibi",
        authSubtitle: "Harcamalarınızı senkronize etmek için giriş yapın",
        email: "E-posta",
        password: "Şifre (en az 6 karakter)",
        signIn: "Giriş Yap",
        signUp: "Kayıt Ol",
        noAccount: "Hesabınız yok mu?",
        hasAccount: "Zaten hesabınız var mı?",
        signingIn: "Giriş yapılıyor...",
        creatingAccount: "Hesap oluşturuluyor...",
        rememberMe: 'Beni hatırla',
        forgotPassword: "Şifrenizi mi unuttunuz?",
        resetPassword: "Şifreyi sıfırla",
        resetPasswordDesc: "Sıfırlama bağlantısı almak için e-postanızı girin",
        sendResetEmail: "E-posta gönder",
        resetEmailSent: "Sıfırlama e-postası gönderildi! Gelen kutunuzu kontrol edin.",
        resetEmailError: "E-posta gönderme hatası. E-posta adresinizi kontrol edin.",
        deleteAccount: "Hesabı sil",
        deleteAccountWarning: "Bu işlem geri alınamaz. Tüm verileriniz kalıcı olarak silinecek.",
        confirmDelete: "Hesabınızı silmek istediğinizden emin misiniz?",
        confirmDeleteButton: "Evet, hesabımı sil",
        accountDeleted: "Hesabınız başarıyla silindi",
        errorDeletingAccount: "Hesap silme hatası. Tekrar deneyin.",
        recentLoginRequired: "Güvenlik nedeniyle, hesabınızı silmeden önce tekrar giriş yapın",
        accountDisabled: "Bu hesap devre dışı bırakıldı. Destek ile iletişime geçin.",
        account: "Hesap",
        loggedInAs: "Giriş yapıldı:",
        logout: "Çıkış Yap",
        logoutConfirm: "Çıkış yapmak istediğinizden emin misiniz?",
        
        // ============================================
        // NAVIGATION & TABS
        // ============================================
        budgetTab: "Bütçe",
        transactionsTab: "İşlemler",
        transaction: "işlem",
        transactions: "işlemler",
        settings: "Ayarlar",
        settingsTitle: "⚙️ Ayarlar",
        
        // ============================================
        // BUDGET - MAIN APP
        // ============================================
        income: "Gelir",
        expenses: "Giderler",
        remaining: "Kalan",
        ofIncome: "gelirden",
        budget: "Bütçe",
        real: "Gerçek",
        estimated: "Tahmini",
        spent: "Gerçek",
        overBy: "Aşım",
        underBy: "Tasarruf",
        exactly: "Tam miktar",
        used: "kullanıldı",
        ofExpenses: "giderlerden",

        
        // Budget modes
        budgetVsReal: "Bütçe vs Gerçek",
        
        // Charts
        pieChart: "🍩 Pasta grafik",
        barChart: "📊 Çubuk grafik",
        monthlySpendingTrend: "Aylık harcama trendi",
        compare: "📊 Karşılaştır",
        categoryTrends: "Kategori Trendleri",
        last6Months: "Son 6 ay",
        
        // ============================================
        // CATEGORIES
        // ============================================
        editCategories: "✏️ Kategorileri düzenle",
        doneEditing: "✓ Tamam",
        addCategory: "➕ Kategori ekle",
        category: "Kategori",
        selectCategories: "Kategorileri seç",
        allCategories: "Tüm kategoriler",
        
        // Category actions
        moveUp: "↑ Yukarı taşı",
        moveDown: "↓ Aşağı taşı",
        addItem: "➕ Öğe ekle",
        deleteCategory: " Kategoriyi sil",
        cannotDeleteIncome: "Gelir kategorisi silinemez.",
        cannotRenameIncome: "Gelir kategorisi yeniden adlandırılamaz.",
        cannotUseSystemName: "Sistem kategorisi adı kullanılamaz.",
        
        // Category messages
        categoryUpdated: 'Kategori güncellendi!',
        categoryRenamedSuccess: "Kategori yeniden adlandırıldı! {count} işlem güncellendi.",
        categoryDeletedSuccess: "Kategori silindi! {count} işlem kategorisiz.",
        categoryExistsAlert: "Bu kategori zaten mevcut!",
        categoryNotFoundAlert: "Kategori bulunamadı!",
        topOfListAlert: "Bu kategori zaten harcamalar listesinin başında (Gelir'den sonra).",
        errorCreatingCategory: "Kategori oluşturma hatası. Tekrar deneyin.",
        errorRenamingCategory: "Kategori yeniden adlandırma hatası:",
        errorDeletingCategory: "Kategori silme hatası:",
        renamingCategory: 'Kategori yeniden adlandırılıyor...',
        deletingCategory: 'Kategori siliniyor...',
        
        // Default categories
        housing: "🏠 Konut",
        tech: "📱 İletişim ve Teknoloji",
        pet: "🐱 Evcil hayvan bakımı",
        subscriptions: "🎬 Abonelikler",
        groceries: "🛒 Market",
        other: "💸 Diğer harcamalar",
        
        // Default items
        salary: "Maaş",
        rent: "Kira",
        arnona: "Arnona",
        electricity: "Elektrik",
        gas: "Gaz",
        water: "Su",
        phonePlan: "Telefon planı",
        internet: "İnternet",
        icloud: "iCloud",
        catFood: "Kedi maması",
        litter: "Kedi kumu",
        youtube: "YouTube Premium",
        claude: "Claude Pro",
        therapist: "Terapist",
        food: "Yiyecek",
        household: "Ev ürünleri",
        personalCare: "Kişisel bakım",
        otherExpenses: "Diğer harcamalar",
        
        // ============================================
        // TRANSACTIONS
        // ============================================
        allTransactions: "Işlemler",
        noTransactionsAdded: "Henüz işlem eklenmedi",
        addTransactionToStart: "Başlamak için bir işlem ekleyin",
        noMatchingTransactions: "Mevcut filtrelere uyan işlem yok",
        noTransactionsYet: "Henüz işlem yok",
        clickSyncToStart: "Başlamak için \"Tümünü senkronize et\"e tıklayın",
        loadingTransactions: "İşlemler yükleniyor...",
        showingTransactions: "{total} işlemden {shown} tanesi gösteriliyor",
        moreHidden: "{count} gizli - daha fazla görmek için \"Göster\" filtresini ayarlayın",
        adjustFiltersToSeeMore: "Daha fazla işlem görmek için filtrelerinizi ayarlayın",

        
        // Transaction actions
        addTransaction: 'İşlem ekle',
        addManualTransaction: 'İşlem ekle',
        transactionName: 'İsim',
        transactionAdded: 'İşlem eklendi!',
        addingTransaction: 'İşlem ekleniyor...',
        
        // Transaction labeling
        labelingTransaction: 'İşlem kategorize ediliyor...',
        unlabelingTransaction: 'Kategori kaldırılıyor...',
        labelingTransactionUnique: 'Sadece bu işlem kategorize ediliyor...',
        unlabelingTransactionUnique: 'Sadece bu işlemden kategori kaldırılıyor...',
        labelingMultipleTransactions: '{count} işlem kategorize ediliyor...',
        transactionLabeled: 'İşlem kategorize edildi! ✓',
        transactionLabeledUnique: 'İşlem kategorize edildi (tek) ✓',
        labeledWithSimilar: '1 işlem + {count} benzer kategorize edildi! ✓',
        labelRemoved: 'Kategori kaldırıldı! ✓',
        labelRemovedUnique: 'Kategori kaldırıldı (tek) ✓',
        labelRemovedWithSimilar: '1 işlem + {count} benzerinden kategori kaldırıldı! ✓',
        multipleTransactionsLabeled: '{count} işlem kategorize edildi!',
        uniqueLabel: '1×',
        
        // Transaction exclusion
        exclude: 'Hariç tut',
        excludeTransaction: 'İşlemi hariç tut',
        excludeThisOnly: 'Sadece bunu hariç tut',
        excludeAllSimilar: 'Tüm benzerleri hariç tut',
        excluded: 'Hariç tutuldu',
        excludedTransactions: 'Hariç tutulan işlemler',
        noExcludedTransactions: 'Hariç tutulan işlem yok',
        confirmExclude: 'Bu işlem hariç tutulsun mu? Listeden gizlenecek.',
        confirmExcludeAllSimilar: 'Tüm benzer işlemler hariç tutulsun mu? Listeden gizlenecekler.',
        excluding: 'Hariç tutuluyor...',
        transactionExcluded: 'İşlem hariç tutuldu ✓',
        excludedSimilarCount: '{count} benzer işlem hariç tutuldu',
        
        // Transaction restoration
        restore: 'Geri yükle',
        restoreAll: 'Tümünü geri yükle',
        restoreSimilarTransactions: 'Benzerleri geri yükle',
        transactionRestored: 'İşlem geri yüklendi ✓',
        restoring: 'Geri yükleniyor...',
        restoringAll: 'Tümü geri yükleniyor...',
        confirmRestoreAll: 'Tüm hariç tutulan işlemler geri yüklensin mi?',
        allTransactionsRestored: 'Tüm işlemler geri yüklendi ✓',
        restoredSimilarCount: '{count} benzer işlem geri yüklendi',
        restoreSimilarHelp: 'Etkinleştirildiğinde, "Geri yükle"ye tıklamak tüm benzerleri de geri yükler',
        
        // Transaction details
        similarTransactions: "Benzer işlemler",
        checkingSimilar: 'Benzer işlemler aranıyor...',
        fullName: "Tam ad",
        memo: "Not",
        amount: "Tutar",
        note: 'Not',
        addNote: 'Not ekle (maks. 10 kelime)...',
        memoTooLong: 'Not çok uzun. Maksimum 10 kelime.',
        noteSaved: 'Not kaydedildi ✓',
        optional: 'isteğe bağlı',
        copy: 'Kopyala',
        copied: 'Kopyalandı!',
        clickToExpand: 'Genişletmek için tıklayın',
        checkInternetConnection: "Lütfen internet bağlantınızı kontrol edin ve tekrar deneyin",
        retry: "Tekrar dene",
        errorLoadingTransactions: "İşlemler yüklenirken hata oluştu",
        
        // ============================================
        // BANK SYNCHRONIZATION
        // ============================================
        bankSynchronization: "Banka senkronizasyonu",
        bankAccountsConfig: "Banka hesapları",
        maxLeumi: "💳 Max.co.il (Leumi Kartı)",
        isracard: "💳 Isracard",
        setupMaxCredentials: "🔐 Max kimlik bilgilerini ayarla",
        setupIsracardCredentials: "🔐 Isracard kimlik bilgilerini ayarla",
        configureCredentials: "İşlemleri senkronize etmek için kimlik bilgilerinizi yapılandırın.",
        credentialsConfigured: "Kimlik bilgileri yapılandırıldı ✓",
        
        // Bank credentials
        bankCredentials: "🔐 Banka kimlik bilgileri",
        credentialsSecure: "Kimlik bilgileriniz şifrelenecek ve Firebase'de güvenle saklanacak.",
        username: "Kullanıcı adı",
        yourUsername: "Kullanıcı adınız",
        yourPassword: "Şifreniz",
        idNumber: "Kimlik numarası",
        cardLast6: "Kartın son 6 hanesi",
        yourIsraeliId: "İsrail kimliğiniz",
        isracardId: "Isracard kimliği",
        isracardPassword: "Isracard şifresi",
        yourIsracardId: "Isracard kimliğiniz",
        yourIsracardPassword: "Isracard şifreniz",
        saveCredentials: "Kimlik bilgilerini kaydet",
        credentialsSaved: "Kimlik bilgileri kaydedildi!",
        errorSavingCredentials: "Kimlik bilgileri kaydetme hatası:",
        
        // Sync actions
        syncTransactions: "🔄 İşlemleri senkronize et",
        syncAll: "🔄 Tümünü senkronize et",
        syncingWithBanks: "Bankalarla senkronize ediliyor...",
        syncCompleted: "Senkronizasyon tamamlandı! {count} yeni işlem.",
        syncFailed: "Senkronizasyon başarısız:",
        lastSync: "Son senkronizasyon:",
        never: "Hiç",
        ago: "önce",
        justNow: "Şimdi",
        
        // Auto-labeling
        autoLabelTitle: "🏷️ Otomatik kategorize",
        autoLabelDescription: 'Kategorize edilmemiş işlemleri mevcut desenlere göre otomatik kategorize et',
        autoLabeling: 'İşlemler otomatik kategorize ediliyor...',
        autoLabelCompleted: "Otomatik kategorize tamamlandı! {count} işlem kategorize edildi.",
        autoLabelFailed: "Otomatik kategorize başarısız:",
        noTransactionsToLabel: "Otomatik kategorize edilecek işlem yok. Önce bazılarını manuel kategorize edin.",
        
        // ============================================
        // CSV IMPORT
        // ============================================
        importCSV: "CSV/Excel içe aktar",
        importCSVDescription: "CSV dosyalarından işlem içe aktar (Revolut, N26, vb.)",
        supportedFormats: "Desteklenen formatlar: CSV, XLSX, XLS",
        bankName: "Banka adı",
        bankNamePlaceholder: "örn: Revolut, N26, Wise...",
        bankNameHelp: "Farklı bankalardan işlemleri tanımlamaya yardımcı olur",
        chooseCSV: "CSV/Excel dosyası seç",
        imported: "İçe aktarıldı",
        importingCSV: "CSV içe aktarılıyor...",
        removingCSV: "CSV kaldırılıyor...",
        noCSVImported: "Henüz CSV içe aktarılmadı",
        enterBankNameFirst: "Önce banka adını girin",
        remove: "Kaldır",
        removeCSVConfirm: "\"{name}\" ve tüm işlemleri kaldırılsın mı?",
        csvImportedSuccess: "CSV içe aktarıldı! {count} işlem eklendi.",
        csvImportedWithDuplicates: "CSV içe aktarıldı! {count} işlem eklendi ({skipped} kopya atlandı)",
        csvRemovedSuccess: "CSV kaldırıldı! {count} işlem silindi.",
        errorImportingCSV: "CSV içe aktarma hatası:",
        errorRemovingCSV: "CSV kaldırma hatası:",
        
        // Import period
        importPeriod: 'İşlemleri içe aktar',
        importPeriodHelp: 'Sadece bu dönemdeki işlemler içe aktarılacak',
        oneMonthAgo: '1 ay önce',
        threeMonthsAgo: '3 ay önce',
        sixMonthsAgo: '6 ay önce',
        twelveMonthsAgo: '12 ay önce',
        eighteenMonthsAgo: '18 ay önce',
        twentyFourMonthsAgo: '24 ay önce',
        thirtySixMonthsAgo: '36 ay önce',
        
        // ============================================
        // FILTERS & SORTING
        // ============================================
        filters: "Filtreler",
        showAll: "Tümü",
        all: "Tümü",
        allMonths: "Tüm aylar",
        allSources: "Tüm kaynaklar",
        month: "Ay",
        source: "Kaynak",
        type: "Tür",
        expenses: "Harcamalar",
        labelStatus: "Kategori durumu",
        showOnlyUnlabeled: "Sadece kategorisiz",
        showOnlyLabeled: "Sadece kategorili",
        search: "Ara...",
        clear: "Sıfırla",
        selectCategory: "Kategori seç",
        
        // Sort options
        sortBy: "Sırala",
        sortDateNewest: "📅 Tarih (yeni)",
        sortDateOldest: "📅 Tarih (eski)",
        sortAmountHighest: "💰 Tutar (yüksek)",
        sortAmountLowest: "💰 Tutar (düşük)",
        sortFrequencyMost: "🔄 Sıklık (fazla)",
        sortFrequencyLeast: "🔄 Sıklık (az)",
        
        // Transaction display limits
        showTransactions: "İşlemleri göster",
        show50: "50 göster",
        show500: "500 göster",
        show1000: "1000 göster",
        show2000: "2000 göster",
        loadMore: "Daha fazla yükle",
        batchSize: "Sayfa başına işlem",
        
        // Selection
        selectAll: 'Tümünü seç',
        deselectAll: 'Seçimi kaldır',
        
        // ============================================
        // COLORS & CUSTOMIZATION
        // ============================================
        colors: "🎨 Renkler",
        customizeColors: "🎨 Renkleri özelleştir",
        resetColors: 'Varsayılana sıfırla',
        resetColorsConfirm: "Tüm renkler varsayılana sıfırlansın mı?",
        resetToDefault: "Varsayılana sıfırla",
        randomColors: "Rastgele renkler",
        randomizeColors: '🎲 Rastgele renkler',
        colorByCategory: 'Kategorilere göre grupla',
        categoryColors: "Kategori renkleri",
        itemColors: "Öğe renkleri",
        advanced: "Gelişmiş",
        backToCategories: "Kategorilere dön",
        
        // Emoji selection
        selectEmoji: 'Emoji seç',
        customEmojiPlaceholder: 'Veya buraya emoji yazın/yapıştırın...',
        orChooseBelow: 'veya aşağıdan seçin',
        useCustomEmoji: 'Kullan',
        pleaseEnterEmoji: 'Lütfen bir emoji girin',
        
        // ============================================
        // SETTINGS
        // ============================================
        currency: "Para birimi",
        language: "Dil",
        darkMode: "Karanlık mod",
        enableDarkMode: "Karanlık modu etkinleştir",
        
        // Income tracking
        incomeTracking: "Gelir takibi",
        trackIncome: "Aylık geliri takip et",
        trackIncomeDesc: "Etkinleştirildiğinde, gelir kaynaklarınızı takip edebilir ve harcamalardan sonra ne kadar para kaldığını görebilirsiniz.",
        
        // Percentage calculation
        percentageCalculation: "Yüzde hesaplama",
        basedOnExpenses: "Toplam harcamalara göre",
        basedOnIncome: "Toplam gelire göre",
        percentageDesc: "Kategori yüzdelerinin nasıl hesaplandığını seçin",
        
        // Database maintenance
        databaseMaintenance: "Veritabanı bakımı",
        cleanGhostCategories: "🧹 Hayalet kategorileri temizle",
        cleanDescription: "Verilerinizde mevcut ancak düzgün görüntülenmeyen kategorileri kaldırın. Kategorilerin görünmediği veya oluşturulamadığı sorunlarınız varsa bunu kullanın.",
        clearData: "Verileri temizle",
        clearAllTransactions: "Tüm işlemleri temizle",
        clearTransactionsWarning: "Veritabanından tüm senkronize işlemleri kaldır. Bu geri alınamaz.",
        transactionsCleared: "{count} işlem ve {csvCount} CSV kaydı başarıyla silindi",
        errorClearingTransactions: "Hata:",
        
        // App info
        appVersion: 'Uygulama sürümü',
        versionInfo: 'Kişisel finans uygulamanızın mevcut sürümü',
        madeBy: "Victor Burtman tarafından yapıldı",
        contactInfo: "Hata raporları, fikirler veya öneriler için:",
        
        // ============================================
        // COMMON BUTTONS & ACTIONS
        // ============================================
        save: "Kaydet",
        cancel: "İptal",
        done: "Tamam",
        close: "✕",
        resetAll: "Tüm harcamaları sıfırla",
        updatingTransactions: 'İşlemler güncelleniyor...',
        
        // ============================================
        // PROMPTS & CONFIRMATIONS
        // ============================================
        enterCategoryName: "Kategori adını girin:",
        enterEmoji: "Emoji girin (örn: 🎮):",
        enterFirstItem: "İlk öğe adını girin:",
        enterNewItemName: "Yeni öğe adını girin:",
        enterNewName: "Yeni ad girin:",
        enterNewCategoryName: "\"{current}\" için yeni ad girin:",
        deleteCategoryConfirm: "\"{name}\" ({amount}) silinsin mi?\n\nTüm kategorili işlemler kategorisiz olacak.",
        deleteItemConfirm: "Bu öğe silinsin mi?",
        lastItemConfirm: "Kategorideki son öğe. Tüm kategori silinsin mi?",
        resetAllConfirm: "Tüm harcamalar 0'a sıfırlansın mı?",
        clearAllWarning1: "⚠️ TÜM işlemler silinsin mi? Bu geri alınamaz!",
        clearAllWarning2: "⚠️ SON UYARI: Tüm işlemler kalıcı olarak silinsin mi?",
        
        // ============================================
        // STATUS & LOADING MESSAGES
        // ============================================
        loading: "Yükleniyor...",
        processing: "İşleniyor...",
        processingTransactions: "İşlemler işleniyor",
        deletingTransactions: "İşlemler siliniyor",
        deletingAllTransactions: "Tüm işlemler siliniyor...",
        saving: "Kaydediliyor...",
        pleaseWait: 'Lütfen bekleyin',
        thisMayTakeAMoment: "Bu biraz zaman alabilir",
        updateAvailable: "Güncelleme mevcut",
        installingUpdate: "Güncelleme yükleniyor...",
        
        // ============================================
        // ERRORS
        // ============================================
        // Auth errors
        pleaseEnterEmail: "E-posta adresinizi girin",
        pleaseEnterEmailAndPassword: "E-posta ve şifre girin",
        errorPasswordRequired: "Şifrenizi girin",
        errorEmailInvalid: "Geçersiz e-posta formatı",
        errorPasswordTooShort: "Şifre en az 6 karakter olmalı",
        errorUserNotFound: "Bu e-posta ile hesap bulunamadı",
        errorWrongPassword: "Yanlış şifre",
        errorEmailAlreadyUsed: "Bu e-posta zaten kayıtlı",
        errorWeakPassword: "Şifre çok zayıf. En az 6 karakter kullanın.",
        errorTooManyRequests: "Çok fazla başarısız deneme. Lütfen daha sonra tekrar deneyin.",
        errorNetworkFailed: "Ağ hatası. Bağlantınızı kontrol edin.",
        errorUnknown: "Bir hata oluştu. Tekrar deneyin.",
        authError: "Bir hata oluştu. Tekrar deneyin.",
        emailAlreadyInUse: "Bu e-posta zaten kayıtlı. Giriş yapın.",
        weakPassword: "Şifre en az 6 karakter olmalı",
        invalidEmail: "Geçersiz e-posta adresi",
        userNotFound: "Bu e-posta ile hesap bulunamadı",
        wrongPassword: "Yanlış şifre",
        unknownError: "Bir hata oluştu. Tekrar deneyin.",
        emailInUse: "Bu e-posta kullanımda. Giriş yapmayı deneyin.",
        invalidCredentials: "Geçersiz e-posta veya şifre.",
        tooManyRequests: "Çok fazla başarısız deneme. Daha sonra deneyin.",
        
        // Other errors
        noExpensesYet: "Henüz harcama yok",
        
        // ============================================
        // TIME & DATE
        // ============================================
        minutes: "dakika",
        hours: "saat",
        days: "gün",
        transactions: "işlem",
        
        // Month names
        january: "Ocak",
        february: "Şubat",
        march: "Mart",
        april: "Nisan",
        may: "Mayıs",
        june: "Haziran",
        july: "Temmuz",
        august: "Ağustos",
        september: "Eylül",
        october: "Ekim",
        november: "Kasım",
        december: "Aralık",

        janShort: "Oca", febShort: "Şub", marShort: "Mar", aprShort: "Nis",
        mayShort: "May", junShort: "Haz", julShort: "Tem", augShort: "Ağu",
        sepShort: "Eyl", octShort: "Eki", novShort: "Kas", decShort: "Ara",
        
        // ============================================
        // CURRENCY & CONVERSION
        // ============================================
        conversionInfo: "Tutarlar günlük döviz kurları kullanılarak dönüştürülür ve yaklaşık olabilir",
        noIncomeThisMonth: "Bu ay gelir işlemi yok",
        noExpensesThisMonth: "Bu ay harcama yok",
        estimatedBudgetNote: "Bütçe tahminleri gösteriliyor",
    },

    // ============================================
    // HINDI (hi) - CORRIGÉ
    // ============================================
    hi: {
        // ============================================
        // AUTHENTICATION & ACCOUNT
        // ============================================
        appTitle: "💰 खर्च ट्रैकर",
        authSubtitle: "अपने खर्चों को सिंक करने के लिए लॉगिन करें",
        email: "ईमेल",
        password: "पासवर्ड (कम से कम 6 अक्षर)",
        signIn: "साइन इन करें",
        signUp: "साइन अप करें",
        noAccount: "खाता नहीं है?",
        hasAccount: "पहले से खाता है?",
        signingIn: "साइन इन हो रहा है...",
        creatingAccount: "खाता बनाया जा रहा है...",
        rememberMe: 'मुझे याद रखें',
        forgotPassword: "पासवर्ड भूल गए?",
        resetPassword: "पासवर्ड रीसेट करें",
        resetPasswordDesc: "रीसेट लिंक प्राप्त करने के लिए अपना ईमेल दर्ज करें",
        sendResetEmail: "ईमेल भेजें",
        resetEmailSent: "रीसेट ईमेल भेजा गया! अपना इनबॉक्स जांचें।",
        resetEmailError: "ईमेल भेजने में त्रुटि। अपना ईमेल पता जांचें।",
        deleteAccount: "खाता हटाएं",
        deleteAccountWarning: "यह क्रिया अपरिवर्तनीय है। आपका सारा डेटा स्थायी रूप से हटा दिया जाएगा।",
        confirmDelete: "क्या आप वाकई अपना खाता हटाना चाहते हैं?",
        confirmDeleteButton: "हां, मेरा खाता हटाएं",
        accountDeleted: "आपका खाता सफलतापूर्वक हटा दिया गया",
        errorDeletingAccount: "खाता हटाने में त्रुटि। पुनः प्रयास करें।",
        recentLoginRequired: "सुरक्षा कारणों से, अपना खाता हटाने से पहले फिर से लॉगिन करें",
        accountDisabled: "यह खाता अक्षम कर दिया गया है। समर्थन से संपर्क करें।",
        account: "खाता",
        loggedInAs: "लॉग इन है:",
        logout: "लॉग आउट",
        logoutConfirm: "क्या आप वाकई लॉग आउट करना चाहते हैं?",
        
        // ============================================
        // NAVIGATION & TABS
        // ============================================
        budgetTab: "बजट",
        transactionsTab: "लेनदेन",
        transaction: "लेन-देन",
        transactions: "लेन-देन",
        settings: "सेटिंग्स",
        settingsTitle: "⚙️ सेटिंग्स",
        
        // ============================================
        // BUDGET - MAIN APP
        // ============================================
        income: "आय",
        expenses: "खर्च",
        remaining: "शेष",
        ofIncome: "आय का",
        budget: "बजट",
        real: "वास्तविक",
        estimated: "अनुमानित",
        spent: "वास्तविक",
        overBy: "से अधिक",
        underBy: "बचत",
        exactly: "सटीक राशि",
        used: "उपयोग किया",
        ofExpenses: "खर्च का",
        
        // Budget modes
        budgetVsReal: "बजट बनाम वास्तविक",
        
        // Charts
        pieChart: "🍩 पाई चार्ट",
        barChart: "📊 बार चार्ट",
        monthlySpendingTrend: "मासिक खर्च की प्रवृत्ति",
        compare: "📊 तुलना करें",
        categoryTrends: "श्रेणी के रुझान",
        last6Months: "पिछले 6 महीने",
        
        // ============================================
        // CATEGORIES
        // ============================================
        editCategories: "✏️ श्रेणियां संपादित करें",
        doneEditing: "✓ हो गया",
        addCategory: "➕ श्रेणी जोड़ें",
        category: "श्रेणी",
        selectCategories: "श्रेणियां चुनें",
        allCategories: "सभी श्रेणियां",
        
        // Category actions
        moveUp: "↑ ऊपर ले जाएं",
        moveDown: "↓ नीचे ले जाएं",
        addItem: "➕ आइटम जोड़ें",
        deleteCategory: " श्रेणी हटाएं",
        cannotDeleteIncome: "आय श्रेणी हटाई नहीं जा सकती।",
        cannotRenameIncome: "आय श्रेणी का नाम बदला नहीं जा सकता।",
        cannotUseSystemName: "सिस्टम श्रेणी नाम का उपयोग नहीं किया जा सकता।",
        
        // Category messages
        categoryUpdated: 'श्रेणी अपडेट की गई!',
        categoryRenamedSuccess: "श्रेणी का नाम बदला गया! {count} लेनदेन अपडेट किए गए।",
        categoryDeletedSuccess: "श्रेणी हटाई गई! {count} लेनदेन बिना श्रेणी के।",
        categoryExistsAlert: "यह श्रेणी पहले से मौजूद है!",
        categoryNotFoundAlert: "श्रेणी नहीं मिली!",
        topOfListAlert: "यह श्रेणी पहले से ही खर्च सूची के शीर्ष पर है (आय के बाद)।",
        errorCreatingCategory: "श्रेणी बनाने में त्रुटि। पुनः प्रयास करें।",
        errorRenamingCategory: "श्रेणी का नाम बदलने में त्रुटि:",
        errorDeletingCategory: "श्रेणी हटाने में त्रुटि:",
        renamingCategory: 'श्रेणी का नाम बदला जा रहा है...',
        deletingCategory: 'श्रेणी हटाई जा रही है...',
        
        // Default categories
        housing: "🏠 आवास",
        tech: "📱 संचार और प्रौद्योगिकी",
        pet: "🐱 पालतू जानवर की देखभाल",
        subscriptions: "🎬 सदस्यताएं",
        groceries: "🛒 किराना",
        other: "💸 अन्य खर्च",
        
        // Default items
        salary: "वेतन",
        rent: "किराया",
        arnona: "अर्नोना",
        electricity: "बिजली",
        gas: "गैस",
        water: "पानी",
        phonePlan: "फोन योजना",
        internet: "इंटरनेट",
        icloud: "iCloud",
        catFood: "बिल्ली का खाना",
        litter: "कूड़ा",
        youtube: "YouTube Premium",
        claude: "Claude Pro",
        therapist: "चिकित्सक",
        food: "भोजन",
        household: "घरेलू उत्पाद",
        personalCare: "व्यक्तिगत देखभाल",
        otherExpenses: "अन्य खर्च",
        
        // ============================================
        // TRANSACTIONS
        // ============================================
        allTransactions: "लेनदेन",
        noTransactionsAdded: "अभी तक कोई लेनदेन नहीं जोड़ा गया",
        addTransactionToStart: "शुरू करने के लिए एक लेनदेन जोड़ें",
        noMatchingTransactions: "वर्तमान फ़िल्टर से मेल खाने वाला कोई लेनदेन नहीं",
        noTransactionsYet: "अभी तक कोई लेनदेन नहीं",
        clickSyncToStart: "शुरू करने के लिए \"सभी सिंक करें\" पर क्लिक करें",
        loadingTransactions: "लेनदेन लोड हो रहे हैं...",
        showingTransactions: "{total} में से {shown} लेनदेन दिखाए जा रहे हैं",
        moreHidden: "{count} छिपे हुए - और देखने के लिए \"दिखाएं\" फ़िल्टर समायोजित करें",
        adjustFiltersToSeeMore: "अधिक लेनदेन देखने के लिए अपने फ़िल्टर समायोजित करें",

        
        // Transaction actions
        addTransaction: 'लेनदेन जोड़ें',
        addManualTransaction: 'लेनदेन जोड़ें',
        transactionName: 'नाम',
        transactionAdded: 'लेनदेन जोड़ा गया!',
        addingTransaction: 'लेनदेन जोड़ा जा रहा है...',
        
        // Transaction labeling
        labelingTransaction: 'लेनदेन को वर्गीकृत किया जा रहा है...',
        unlabelingTransaction: 'श्रेणी हटाई जा रही है...',
        labelingTransactionUnique: 'केवल इस लेनदेन को वर्गीकृत किया जा रहा है...',
        unlabelingTransactionUnique: 'केवल इस लेनदेन से श्रेणी हटाई जा रही है...',
        labelingMultipleTransactions: '{count} लेनदेन वर्गीकृत किए जा रहे हैं...',
        transactionLabeled: 'लेनदेन वर्गीकृत किया गया! ✓',
        transactionLabeledUnique: 'लेनदेन वर्गीकृत किया गया (अद्वितीय) ✓',
        labeledWithSimilar: '1 लेनदेन + {count} समान वर्गीकृत किए गए! ✓',
        labelRemoved: 'श्रेणी हटाई गई! ✓',
        labelRemovedUnique: 'श्रेणी हटाई गई (अद्वितीय) ✓',
        labelRemovedWithSimilar: '1 लेनदेन + {count} समान से श्रेणी हटाई गई! ✓',
        multipleTransactionsLabeled: '{count} लेनदेन वर्गीकृत किए गए!',
        uniqueLabel: '1×',
        
        // Transaction exclusion
        exclude: 'बाहर करें',
        excludeTransaction: 'लेनदेन बाहर करें',
        excludeThisOnly: 'केवल इसे बाहर करें',
        excludeAllSimilar: 'सभी समान को बाहर करें',
        excluded: 'बाहर किया गया',
        excludedTransactions: 'बाहर किए गए लेनदेन',
        noExcludedTransactions: 'कोई बाहर किया गया लेनदेन नहीं',
        confirmExclude: 'इस लेनदेन को बाहर करें? यह सूची से छिपाया जाएगा।',
        confirmExcludeAllSimilar: 'सभी समान लेनदेन बाहर करें? वे सूची से छिपाए जाएंगे।',
        excluding: 'बाहर किया जा रहा है...',
        transactionExcluded: 'लेनदेन बाहर किया गया ✓',
        excludedSimilarCount: '{count} समान लेनदेन बाहर किए गए',
        
        // Transaction restoration
        restore: 'पुनर्स्थापित करें',
        restoreAll: 'सभी पुनर्स्थापित करें',
        restoreSimilarTransactions: 'समान लेनदेन पुनर्स्थापित करें',
        transactionRestored: 'लेनदेन पुनर्स्थापित किया गया ✓',
        restoring: 'पुनर्स्थापित किया जा रहा है...',
        restoringAll: 'सभी पुनर्स्थापित किए जा रहे हैं...',
        confirmRestoreAll: 'सभी बाहर किए गए लेनदेन पुनर्स्थापित करें?',
        allTransactionsRestored: 'सभी लेनदेन पुनर्स्थापित किए गए ✓',
        restoredSimilarCount: '{count} समान लेनदेन पुनर्स्थापित किए गए',
        restoreSimilarHelp: 'सक्षम होने पर, "पुनर्स्थापित करें" पर क्लिक करने से सभी समान भी पुनर्स्थापित होंगे',
        
        // Transaction details
        similarTransactions: "समान लेनदेन",
        checkingSimilar: 'समान लेनदेन की जांच की जा रही है...',
        fullName: "पूरा नाम",
        memo: "मेमो",
        amount: "राशि",
        note: 'नोट',
        addNote: 'नोट जोड़ें (अधिकतम 10 शब्द)...',
        memoTooLong: 'नोट बहुत लंबा है। अधिकतम 10 शब्द।',
        noteSaved: 'नोट सहेजा गया ✓',
        optional: 'वैकल्पिक',
        copy: 'कॉपी करें',
        copied: 'कॉपी किया गया!',
        clickToExpand: 'विस्तार करने के लिए क्लिक करें',
        checkInternetConnection: "कृपया अपना इंटरनेट कनेक्शन जांचें और पुनः प्रयास करें",
        retry: "पुन: प्रयास करें",
        errorLoadingTransactions: "लेनदेन लोड करने में त्रुटि",
        
        // ============================================
        // BANK SYNCHRONIZATION
        // ============================================
        bankSynchronization: "बैंक सिंक्रनाइज़ेशन",
        bankAccountsConfig: "बैंक खाते",
        maxLeumi: "💳 Max.co.il (Leumi कार्ड)",
        isracard: "💳 Isracard",
        setupMaxCredentials: "🔐 Max क्रेडेंशियल सेट करें",
        setupIsracardCredentials: "🔐 Isracard क्रेडेंशियल सेट करें",
        configureCredentials: "लेनदेन सिंक करने के लिए अपने क्रेडेंशियल कॉन्फ़िगर करें।",
        credentialsConfigured: "क्रेडेंशियल कॉन्फ़िगर किए गए ✓",
        
        // Bank credentials
        bankCredentials: "🔐 बैंक क्रेडेंशियल",
        credentialsSecure: "आपके क्रेडेंशियल एन्क्रिप्ट किए जाएंगे और Firebase में सुरक्षित रूप से संग्रहीत किए जाएंगे।",
        username: "उपयोगकर्ता नाम",
        yourUsername: "आपका उपयोगकर्ता नाम",
        yourPassword: "आपका पासवर्ड",
        idNumber: "आईडी नंबर",
        cardLast6: "कार्ड के अंतिम 6 अंक",
        yourIsraeliId: "आपकी इज़राइली आईडी",
        isracardId: "Isracard आईडी",
        isracardPassword: "Isracard पासवर्ड",
        yourIsracardId: "आपकी Isracard आईडी",
        yourIsracardPassword: "आपका Isracard पासवर्ड",
        saveCredentials: "क्रेडेंशियल सहेजें",
        credentialsSaved: "क्रेडेंशियल सहेजे गए!",
        errorSavingCredentials: "क्रेडेंशियल सहेजने में त्रुटि:",
        
        // Sync actions
        syncTransactions: "🔄 लेनदेन सिंक करें",
        syncAll: "🔄 सभी सिंक करें",
        syncingWithBanks: "बैंकों के साथ सिंक हो रहा है...",
        syncCompleted: "सिंक पूर्ण हुआ! {count} नया लेनदेन।",
        syncFailed: "सिंक विफल:",
        lastSync: "अंतिम सिंक:",
        never: "कभी नहीं",
        ago: "पहले",
        justNow: "अभी",
        
        // Auto-labeling
        autoLabelTitle: "🏷️ स्वचालित वर्गीकरण",
        autoLabelDescription: 'मौजूदा पैटर्न के आधार पर गैर-वर्गीकृत लेनदेन को स्वचालित रूप से वर्गीकृत करें',
        autoLabeling: 'लेनदेन स्वचालित रूप से वर्गीकृत किए जा रहे हैं...',
        autoLabelCompleted: "स्वचालित वर्गीकरण पूर्ण! {count} लेनदेन वर्गीकृत किए गए।",
        autoLabelFailed: "स्वचालित वर्गीकरण विफल:",
        noTransactionsToLabel: "स्वचालित रूप से वर्गीकृत करने के लिए कोई लेनदेन नहीं। पहले कुछ मैन्युअल रूप से वर्गीकृत करने का प्रयास करें।",
        
        // ============================================
        // CSV IMPORT
        // ============================================
        importCSV: "CSV/Excel आयात करें",
        importCSVDescription: "CSV फ़ाइलों से लेनदेन आयात करें (Revolut, N26, आदि)",
        supportedFormats: "समर्थित प्रारूप: CSV, XLSX, XLS",
        bankName: "बैंक का नाम",
        bankNamePlaceholder: "उदा: Revolut, N26, Wise...",
        bankNameHelp: "यह विभिन्न बैंकों से लेनदेन की पहचान करने में मदद करता है",
        chooseCSV: "CSV/Excel फ़ाइल चुनें",
        imported: "आयातित",
        importingCSV: "CSV आयात हो रहा है...",
        removingCSV: "CSV हटाया जा रहा है...",
        noCSVImported: "अभी तक कोई CSV आयात नहीं किया गया",
        enterBankNameFirst: "कृपया पहले बैंक का नाम दर्ज करें",
        remove: "हटाएं",
        removeCSVConfirm: "\"{name}\" और इसके सभी लेनदेन हटाएं?",
        csvImportedSuccess: "CSV आयातित! {count} लेनदेन जोड़े गए।",
        csvImportedWithDuplicates: "CSV आयातित! {count} लेनदेन जोड़े गए ({skipped} डुप्लिकेट छोड़े गए)",
        csvRemovedSuccess: "CSV हटाया गया! {count} लेनदेन हटाए गए।",
        errorImportingCSV: "CSV आयात करने में त्रुटि:",
        errorRemovingCSV: "CSV हटाने में त्रुटि:",
        
        // Import period
        importPeriod: 'से लेनदेन आयात करें',
        importPeriodHelp: 'केवल इस अवधि के लेनदेन आयात किए जाएंगे',
        oneMonthAgo: '1 महीने पहले',
        threeMonthsAgo: '3 महीने पहले',
        sixMonthsAgo: '6 महीने पहले',
        twelveMonthsAgo: '12 महीने पहले',
        eighteenMonthsAgo: '18 महीने पहले',
        twentyFourMonthsAgo: '24 महीने पहले',
        thirtySixMonthsAgo: '36 महीने पहले',
        
        // ============================================
        // FILTERS & SORTING
        // ============================================
        filters: "फ़िल्टर",
        showAll: "सभी",
        all: "सभी",
        allMonths: "सभी महीने",
        allSources: "सभी स्रोत",
        month: "महीना",
        source: "स्रोत",
        type: "प्रकार",
        expenses: "खर्च",
        labelStatus: "श्रेणी स्थिति",
        showOnlyUnlabeled: "केवल गैर-वर्गीकृत",
        showOnlyLabeled: "केवल वर्गीकृत",
        search: "खोजें...",
        clear: "रीसेट करें",
        selectCategory: "श्रेणी चुनें",
        
        // Sort options
        sortBy: "क्रमबद्ध करें",
        sortDateNewest: "📅 तिथि (नवीनतम)",
        sortDateOldest: "📅 तिथि (पुरानी)",
        sortAmountHighest: "💰 राशि (उच्च)",
        sortAmountLowest: "💰 राशि (निम्न)",
        sortFrequencyMost: "🔄 आवृत्ति (अधिक)",
        sortFrequencyLeast: "🔄 आवृत्ति (कम)",
        
        // Transaction display limits
        showTransactions: "लेनदेन दिखाएं",
        show50: "50 दिखाएं",
        show500: "500 दिखाएं",
        show1000: "1000 दिखाएं",
        show2000: "2000 दिखाएं",
        loadMore: "और लोड करें",
        batchSize: "प्रति पृष्ठ लेनदेन",
        
        // Selection
        selectAll: 'सभी चुनें',
        deselectAll: 'सभी अचयनित करें',
        
        // ============================================
        // COLORS & CUSTOMIZATION
        // ============================================
        colors: "🎨 रंग",
        customizeColors: "🎨 रंग अनुकूलित करें",
        resetColors: 'डिफ़ॉल्ट पर रीसेट करें',
        resetColorsConfirm: "सभी रंगों को डिफ़ॉल्ट पर रीसेट करें?",
        resetToDefault: "डिफ़ॉल्ट पर रीसेट करें",
        randomColors: "यादृच्छिक रंग",
        randomizeColors: '🎲 यादृच्छिक रंग',
        colorByCategory: 'श्रेणियों के अनुसार समूहित करें',
        categoryColors: "श्रेणी रंग",
        itemColors: "आइटम रंग",
        advanced: "उन्नत",
        backToCategories: "श्रेणियों पर वापस जाएं",
        
        // Emoji selection
        selectEmoji: 'इमोजी चुनें',
        customEmojiPlaceholder: 'या यहां कोई भी इमोजी टाइप/पेस्ट करें...',
        orChooseBelow: 'या नीचे चुनें',
        useCustomEmoji: 'उपयोग करें',
        pleaseEnterEmoji: 'कृपया एक इमोजी दर्ज करें',
        
        // ============================================
        // SETTINGS
        // ============================================
        currency: "मुद्रा",
        language: "भाषा",
        darkMode: "डार्क मोड",
        enableDarkMode: "डार्क मोड सक्षम करें",
        
        // Income tracking
        incomeTracking: "आय ट्रैकिंग",
        trackIncome: "मासिक आय ट्रैक करें",
        trackIncomeDesc: "सक्षम होने पर, आप अपने आय स्रोतों को ट्रैक कर सकते हैं और खर्चों के बाद कितना पैसा बचता है देख सकते हैं।",
        
        // Percentage calculation
        percentageCalculation: "प्रतिशत गणना",
        basedOnExpenses: "कुल खर्चों के आधार पर",
        basedOnIncome: "कुल आय के आधार पर",
        percentageDesc: "चुनें कि श्रेणी प्रतिशत की गणना कैसे की जाती है",
        
        // Database maintenance
        databaseMaintenance: "डेटाबेस रखरखाव",
        cleanGhostCategories: "🧹 भूत श्रेणियां साफ करें",
        cleanDescription: "उन श्रेणियों को हटाएं जो आपके डेटा में मौजूद हैं लेकिन सही तरीके से प्रदर्शित नहीं होती हैं। यदि आपको श्रेणियों के साथ समस्या है जो दिखाई नहीं देतीं या बनाई नहीं जा सकतीं तो इसका उपयोग करें।",
        clearData: "डेटा साफ करें",
        clearAllTransactions: "सभी लेनदेन साफ करें",
        clearTransactionsWarning: "डेटाबेस से सभी सिंक किए गए लेनदेन हटाएं। इसे पूर्ववत नहीं किया जा सकता।",
        transactionsCleared: "{count} लेनदेन और {csvCount} CSV रिकॉर्ड सफलतापूर्वक हटाए गए",
        errorClearingTransactions: "त्रुटि:",
        
        // App info
        appVersion: 'ऐप संस्करण',
        versionInfo: 'आपके व्यक्तिगत वित्त ऐप का वर्तमान संस्करण',
        madeBy: "Victor Burtman द्वारा बनाया गया",
        contactInfo: "किसी भी बग रिपोर्ट, विचार या सुझाव के लिए:",
        
        // ============================================
        // COMMON BUTTONS & ACTIONS
        // ============================================
        save: "सहेजें",
        cancel: "रद्द करें",
        done: "हो गया",
        close: "✕",
        resetAll: "सभी खर्चों को रीसेट करें",
        updatingTransactions: 'लेनदेन अपडेट किए जा रहे हैं...',
        
        // ============================================
        // PROMPTS & CONFIRMATIONS
        // ============================================
        enterCategoryName: "श्रेणी का नाम दर्ज करें:",
        enterEmoji: "इमोजी दर्ज करें (उदा: 🎮):",
        enterFirstItem: "पहले आइटम का नाम दर्ज करें:",
        enterNewItemName: "नए आइटम का नाम दर्ज करें:",
        enterNewName: "नया नाम दर्ज करें:",
        enterNewCategoryName: "\"{current}\" के लिए नया नाम दर्ज करें:",
        deleteCategoryConfirm: "\"{name}\" ({amount}) हटाएं?\n\nसभी वर्गीकृत लेनदेन गैर-वर्गीकृत हो जाएंगे।",
        deleteItemConfirm: "इस आइटम को हटाएं?",
        lastItemConfirm: "श्रेणी में अंतिम आइटम। पूरी श्रेणी हटाएं?",
        resetAllConfirm: "सभी खर्चों को 0 पर रीसेट करें?",
        clearAllWarning1: "⚠️ सभी लेनदेन हटाएं? इसे पूर्ववत नहीं किया जा सकता!",
        clearAllWarning2: "⚠️ अंतिम चेतावनी: सभी लेनदेन स्थायी रूप से हटाएं?",
        
        // ============================================
        // STATUS & LOADING MESSAGES
        // ============================================
        loading: "लोड हो रहा है...",
        processing: "प्रोसेस हो रहा है...",
        processingTransactions: "लेनदेन प्रोसेस किए जा रहे हैं",
        deletingTransactions: "लेनदेन हटाए जा रहे हैं",
        deletingAllTransactions: "सभी लेनदेन हटाए जा रहे हैं...",
        saving: "सहेजा जा रहा है...",
        pleaseWait: 'कृपया प्रतीक्षा करें',
        thisMayTakeAMoment: "इसमें कुछ समय लग सकता है",
        updateAvailable: "अपडेट उपलब्ध",
        installingUpdate: "अपडेट इंस्टॉल किया जा रहा है...",
        
        // ============================================
        // ERRORS
        // ============================================
        // Auth errors
        pleaseEnterEmail: "कृपया अपना ईमेल पता दर्ज करें",
        pleaseEnterEmailAndPassword: "कृपया ईमेल और पासवर्ड दर्ज करें",
        errorPasswordRequired: "कृपया अपना पासवर्ड दर्ज करें",
        errorEmailInvalid: "अमान्य ईमेल प्रारूप",
        errorPasswordTooShort: "पासवर्ड कम से कम 6 अक्षरों का होना चाहिए",
        errorUserNotFound: "इस ईमेल के साथ कोई खाता नहीं मिला",
        errorWrongPassword: "गलत पासवर्ड",
        errorEmailAlreadyUsed: "यह ईमेल पहले से पंजीकृत है",
        errorWeakPassword: "पासवर्ड बहुत कमजोर है। कम से कम 6 अक्षरों का उपयोग करें।",
        errorTooManyRequests: "बहुत अधिक असफल प्रयास। कृपया बाद में पुनः प्रयास करें।",
        errorNetworkFailed: "नेटवर्क त्रुटि। अपना कनेक्शन जांचें।",
        errorUnknown: "एक त्रुटि हुई। पुनः प्रयास करें।",
        authError: "एक त्रुटि हुई। पुनः प्रयास करें।",
        emailAlreadyInUse: "यह ईमेल पहले से पंजीकृत है। कृपया लॉगिन करें।",
        weakPassword: "पासवर्ड कम से कम 6 अक्षरों का होना चाहिए",
        invalidEmail: "अमान्य ईमेल पता",
        userNotFound: "इस ईमेल के साथ कोई खाता नहीं मिला",
        wrongPassword: "गलत पासवर्ड",
        unknownError: "एक त्रुटि हुई। पुनः प्रयास करें।",
        emailInUse: "यह ईमेल उपयोग में है। लॉगिन करने का प्रयास करें।",
        invalidCredentials: "अमान्य ईमेल या पासवर्ड।",
        tooManyRequests: "बहुत अधिक असफल प्रयास। बाद में पुनः प्रयास करें।",
        
        // Other errors
        noExpensesYet: "अभी तक कोई खर्च नहीं",
        
        // ============================================
        // TIME & DATE
        // ============================================
        minutes: "मिनट",
        hours: "घंटे",
        days: "दिन",
        transactions: "लेनदेन",
        
        // Month names
        january: "जनवरी",
        february: "फरवरी",
        march: "मार्च",
        april: "अप्रैल",
        may: "मई",
        june: "जून",
        july: "जुलाई",
        august: "अगस्त",
        september: "सितंबर",
        october: "अक्टूबर",
        november: "नवंबर",
        december: "दिसंबर",

        janShort: "जन", febShort: "फ़र", marShort: "मार", aprShort: "अप्रै",
        mayShort: "मई", junShort: "जून", julShort: "जुला", augShort: "अग",
        sepShort: "सित", octShort: "अक्टू", novShort: "नव", decShort: "दिस",
        
        // ============================================
        // CURRENCY & CONVERSION
        // ============================================
        conversionInfo: "राशियों को दैनिक विनिमय दरों का उपयोग करके परिवर्तित किया जाता है और अनुमानित हो सकता है",
        noIncomeThisMonth: "इस महीने कोई आय लेनदेन नहीं",
        noExpensesThisMonth: "इस महीने कोई खर्च नहीं",
        estimatedBudgetNote: "बजट अनुमान दिखाए गए",
    }
}
