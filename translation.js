// Translations
const translations = {
    en: {
        // Auth screen
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
        
        // Main app
        monthlyExpenses: "💰 Monthly Expenses",
        totalIncome: "Total Income",
        totalExpenses: "Total Monthly Expenses",
        remaining: "Remaining",
        ofIncome: "of income",
        
        // Buttons
        editCategories: "✏️ Edit Categories",
        doneEditing: "✓ Done Editing",
        addCategory: "➕ Add Category",
        settings: "⚙️ Settings",
        pieChart: "🍩 Pie Chart",
        barChart: "📊 Bar Chart",
        colors: "🎨 Colors",
        
        // Category controls
        moveUp: "↑ Move Up",
        moveDown: "↓ Move Down",
        addItem: "➕ Add Item",
        deleteCategory: "🗑️ Delete Category",
        
        // Default categories
        income: "💰 Income",
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
        
        // Modals
        customizeColors: "🎨 Customize Colors",
        resetToDefault: "Reset to Default",
        done: "Done",
        
        // Settings
        settingsTitle: "⚙️ Settings",
        account: "Account",
        loggedInAs: "Logged in as:",
        logout: "Logout",
        databaseMaintenance: "Database Maintenance",
        cleanGhostCategories: "🧹 Clean Ghost Categories",
        cleanDescription: "Remove categories that exist in your data but are not displayed properly. Use this if you have issues with categories that won't show up or can't be created.",
        currency: "Currency",
        incomeTracking: "Income Tracking",
        trackIncome: "Track income and calculate remaining balance",
        trackIncomeDesc: "When enabled, you can track your income sources and see how much money remains after expenses.",
        percentageCalculation: "Percentage Calculation",
        basedOnExpenses: "Based on Total Expenses",
        basedOnIncome: "Based on Total Income",
        percentageDesc: "Choose whether category percentages are calculated relative to total expenses or total income.",
        language: "Language",
        
        // Confirmations & alerts
        resetAllConfirm: "Are you sure you want to reset all expenses to 0?",
        deleteItemConfirm: "Delete this expense item?",
        deleteCategoryConfirm: "Delete this entire category? This cannot be undone.",
        lastItemConfirm: "This was the last item in this category. Delete the entire category?",
        logoutConfirm: "Are you sure you want to logout?",
        resetColorsConfirm: "Reset all colors to default?",
        categoryExistsAlert: "A category with this name already exists!",
        topOfListAlert: "This category is already at the top of the expenses list (after Income).",
        categoryNotFoundAlert: "Category not found!",
        
        // Prompts
        enterCategoryName: "Enter category name:",
        enterEmoji: "Enter emoji for this category (e.g., 🎮):",
        enterFirstItem: "Enter first expense item name:",
        enterNewItemName: "Enter new expense item name:",
        enterNewName: "Enter new name for this item:",
        enterNewCategoryName: "Enter new category name:",
        
        // Errors
        authError: "An error occurred. Please try again.",
        emailInUse: "This email is already in use. Try signing in instead.",
        invalidEmail: "Invalid email address.",
        weakPassword: "Password should be at least 6 characters.",
        invalidCredentials: "Invalid email or password.",
        
        // Other
        noExpensesYet: "No expenses yet",
        resetAll: "Reset All Expenses",
        close: "✕"
    },
    
    fr: {
        // Auth screen
        appTitle: "💰 Suivi des Dépenses",
        authSubtitle: "Connectez-vous pour synchroniser vos dépenses",
        email: "Email",
        password: "Mot de passe (min 6 caractères)",
        signIn: "Se connecter",
        signUp: "S'inscrire",
        noAccount: "Pas de compte ?",
        hasAccount: "Déjà un compte ?",
        signingIn: "Connexion...",
        creatingAccount: "Création du compte...",
        
        // Main app
        monthlyExpenses: "💰 Dépenses Mensuelles",
        totalIncome: "Revenu Total",
        totalExpenses: "Total des Dépenses Mensuelles",
        remaining: "Restant",
        ofIncome: "du revenu",
        
        // Buttons
        editCategories: "✏️ Modifier Catégories",
        doneEditing: "✓ Terminé",
        addCategory: "➕ Ajouter Catégorie",
        settings: "⚙️ Paramètres",
        pieChart: "🍩 Graphique Circulaire",
        barChart: "📊 Graphique à Barres",
        colors: "🎨 Couleurs",
        
        // Category controls
        moveUp: "↑ Monter",
        moveDown: "↓ Descendre",
        addItem: "➕ Ajouter",
        deleteCategory: "🗑️ Supprimer",
        
        // Default categories
        income: "💰 Revenus",
        housing: "🏠 Logement",
        tech: "📱 Communications & Tech",
        pet: "🐱 Animaux",
        subscriptions: "🎬 Abonnements",
        groceries: "🛒 Courses",
        other: "💸 Autres Dépenses",
        
        // Default items
        salary: "Salaire",
        rent: "Loyer",
        arnona: "Arnona",
        electricity: "Électricité",
        gas: "Gaz",
        water: "Eau",
        phonePlan: "Forfait Téléphone",
        internet: "Internet",
        icloud: "iCloud",
        catFood: "Nourriture Chat",
        litter: "Litière",
        youtube: "YouTube Premium",
        claude: "Claude Pro",
        therapist: "Thérapeute",
        food: "Nourriture",
        household: "Produits Ménagers",
        personalCare: "Soins Personnels",
        otherExpenses: "Autres Dépenses",
        
        // Modals
        customizeColors: "🎨 Personnaliser les Couleurs",
        resetToDefault: "Réinitialiser",
        done: "Terminé",
        
        // Settings
        settingsTitle: "⚙️ Paramètres",
        account: "Compte",
        loggedInAs: "Connecté en tant que :",
        logout: "Déconnexion",
        databaseMaintenance: "Maintenance de la Base",
        cleanGhostCategories: "🧹 Nettoyer les Catégories Fantômes",
        cleanDescription: "Supprimez les catégories qui existent dans vos données mais ne s'affichent pas correctement.",
        currency: "Devise",
        incomeTracking: "Suivi des Revenus",
        trackIncome: "Suivre les revenus et calculer le solde restant",
        trackIncomeDesc: "Lorsqu'activé, vous pouvez suivre vos sources de revenus et voir combien d'argent reste après les dépenses.",
        percentageCalculation: "Calcul des Pourcentages",
        basedOnExpenses: "Basé sur les Dépenses Totales",
        basedOnIncome: "Basé sur le Revenu Total",
        percentageDesc: "Choisissez si les pourcentages sont calculés par rapport aux dépenses totales ou au revenu total.",
        language: "Langue",
        
        // Confirmations & alerts
        resetAllConfirm: "Êtes-vous sûr de vouloir réinitialiser toutes les dépenses à 0 ?",
        deleteItemConfirm: "Supprimer cet élément ?",
        deleteCategoryConfirm: "Supprimer toute cette catégorie ? Cette action est irréversible.",
        lastItemConfirm: "C'était le dernier élément de cette catégorie. Supprimer toute la catégorie ?",
        logoutConfirm: "Êtes-vous sûr de vouloir vous déconnecter ?",
        resetColorsConfirm: "Réinitialiser toutes les couleurs par défaut ?",
        categoryExistsAlert: "Une catégorie avec ce nom existe déjà !",
        topOfListAlert: "Cette catégorie est déjà en haut de la liste (après Revenus).",
        categoryNotFoundAlert: "Catégorie introuvable !",
        
        // Prompts
        enterCategoryName: "Entrez le nom de la catégorie :",
        enterEmoji: "Entrez un emoji pour cette catégorie (ex: 🎮) :",
        enterFirstItem: "Entrez le nom du premier élément :",
        enterNewItemName: "Entrez le nom du nouvel élément :",
        enterNewName: "Entrez le nouveau nom pour cet élément :",
        enterNewCategoryName: "Entrez le nouveau nom de catégorie :",
        
        // Errors
        authError: "Une erreur s'est produite. Veuillez réessayer.",
        emailInUse: "Cet email est déjà utilisé. Essayez de vous connecter.",
        invalidEmail: "Adresse email invalide.",
        weakPassword: "Le mot de passe doit contenir au moins 6 caractères.",
        invalidCredentials: "Email ou mot de passe invalide.",
        
        // Other
        noExpensesYet: "Pas encore de dépenses",
        resetAll: "Réinitialiser Toutes les Dépenses",
        close: "✕"
    },
    
    he: {
        // Auth screen
        appTitle: "💰 מעקב הוצאות",
        authSubtitle: "היכנס כדי לסנכרן את ההוצאות שלך",
        email: "אימייל",
        password: "סיסמה (מינימום 6 תווים)",
        signIn: "התחבר",
        signUp: "הירשם",
        noAccount: "אין לך חשבון?",
        hasAccount: "כבר יש לך חשבון?",
        signingIn: "מתחבר...",
        creatingAccount: "יוצר חשבון...",
        
        // Main app
        monthlyExpenses: "💰 הוצאות חודשיות",
        totalIncome: "הכנסה כוללת",
        totalExpenses: "סך כל ההוצאות החודשיות",
        remaining: "נותר",
        ofIncome: "מההכנסה",
        
        // Buttons
        editCategories: "✏️ ערוך קטגוריות",
        doneEditing: "✓ סיים עריכה",
        addCategory: "➕ הוסף קטגוריה",
        settings: "⚙️ הגדרות",
        pieChart: "🍩 תרשים עוגה",
        barChart: "📊 תרשים עמודות",
        colors: "🎨 צבעים",
        
        // Category controls
        moveUp: "↑ הזז למעלה",
        moveDown: "↓ הזז למטה",
        addItem: "➕ הוסף פריט",
        deleteCategory: "🗑️ מחק קטגוריה",
        
        // Default categories
        income: "💰 הכנסות",
        housing: "🏠 דיור",
        tech: "📱 תקשורת וטכנולוגיה",
        pet: "🐱 טיפול בחיות מחמד",
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
        phonePlan: "מנוי סלולרי",
        internet: "אינטרנט",
        icloud: "iCloud",
        catFood: "אוכל לחתול",
        litter: "חול לחתול",
        youtube: "YouTube Premium",
        claude: "Claude Pro",
        therapist: "פסיכולוג",
        food: "אוכל",
        household: "מוצרי בית",
        personalCare: "טיפוח אישי",
        otherExpenses: "הוצאות אחרות",
        
        // Modals
        customizeColors: "🎨 התאמת צבעים",
        resetToDefault: "אפס לברירת מחדל",
        done: "סיים",
        
        // Settings
        settingsTitle: "⚙️ הגדרות",
        account: "חשבון",
        loggedInAs: "מחובר בתור:",
        logout: "התנתק",
        databaseMaintenance: "תחזוקת מסד נתונים",
        cleanGhostCategories: "🧹 נקה קטגוריות רפאים",
        cleanDescription: "הסר קטגוריות שקיימות בנתונים שלך אך לא מוצגות כראוי.",
        currency: "מטבע",
        incomeTracking: "מעקב הכנסות",
        trackIncome: "עקוב אחר הכנסות וחשב יתרה",
        trackIncomeDesc: "כאשר מופעל, תוכל לעקוב אחר מקורות ההכנסה שלך ולראות כמה כסף נותר לאחר ההוצאות.",
        percentageCalculation: "חישוב אחוזים",
        basedOnExpenses: "מבוסס על סך ההוצאות",
        basedOnIncome: "מבוסס על סך ההכנסות",
        percentageDesc: "בחר אם אחוזי הקטגוריות מחושבים ביחס לסך ההוצאות או לסך ההכנסות.",
        language: "שפה",
        
        // Confirmations & alerts
        resetAllConfirm: "האם אתה בטוח שברצונך לאפס את כל ההוצאות ל-0?",
        deleteItemConfirm: "למחוק פריט הוצאה זה?",
        deleteCategoryConfirm: "למחוק את כל הקטגוריה הזו? לא ניתן לבטל פעולה זו.",
        lastItemConfirm: "זה היה הפריט האחרון בקטגוריה זו. למחוק את כל הקטגוריה?",
        logoutConfirm: "האם אתה בטוח שברצונך להתנתק?",
        resetColorsConfirm: "לאפס את כל הצבעים לברירת מחדל?",
        categoryExistsAlert: "קטגוריה עם שם זה כבר קיימת!",
        topOfListAlert: "קטגוריה זו כבר נמצאת בראש הרשימה (אחרי הכנסות).",
        categoryNotFoundAlert: "קטגוריה לא נמצאה!",
        
        // Prompts
        enterCategoryName: "הזן שם קטגוריה:",
        enterEmoji: "הזן אימוג'י לקטגוריה זו (למשל: 🎮):",
        enterFirstItem: "הזן שם של פריט הוצאה ראשון:",
        enterNewItemName: "הזן שם לפריט הוצאה חדש:",
        enterNewName: "הזן שם חדש לפריט זה:",
        enterNewCategoryName: "הזן שם חדש לקטגוריה:",
        
        // Errors
        authError: "אירעה שגיאה. אנא נסה שוב.",
        emailInUse: "אימייל זה כבר בשימוש. נסה להתחבר במקום.",
        invalidEmail: "כתובת אימייל לא חוקית.",
        weakPassword: "הסיסמה צריכה להיות לפחות 6 תווים.",
        invalidCredentials: "אימייל או סיסמה לא חוקיים.",
        
        // Other
        noExpensesYet: "עדיין אין הוצאות",
        resetAll: "אפס את כל ההוצאות",
        close: "✕"
    },
    
    es: {
        // Auth screen
        appTitle: "💰 Seguimiento de Gastos",
        authSubtitle: "Inicia sesión para sincronizar tus gastos",
        email: "Email",
        password: "Contraseña (mín 6 caracteres)",
        signIn: "Iniciar Sesión",
        signUp: "Registrarse",
        noAccount: "¿No tienes cuenta?",
        hasAccount: "¿Ya tienes cuenta?",
        signingIn: "Iniciando sesión...",
        creatingAccount: "Creando cuenta...",
        
        // Main app
        monthlyExpenses: "💰 Gastos Mensuales",
        totalIncome: "Ingresos Totales",
        totalExpenses: "Total de Gastos Mensuales",
        remaining: "Restante",
        ofIncome: "de ingresos",
        
        // Buttons
        editCategories: "✏️ Editar Categorías",
        doneEditing: "✓ Finalizar Edición",
        addCategory: "➕ Añadir Categoría",
        settings: "⚙️ Configuración",
        pieChart: "🍩 Gráfico Circular",
        barChart: "📊 Gráfico de Barras",
        colors: "🎨 Colores",
        
        // Category controls
        moveUp: "↑ Subir",
        moveDown: "↓ Bajar",
        addItem: "➕ Añadir",
        deleteCategory: "🗑️ Eliminar",
        
        // Default categories
        income: "💰 Ingresos",
        housing: "🏠 Vivienda",
        tech: "📱 Comunicaciones y Tecnología",
        pet: "🐱 Cuidado de Mascotas",
        subscriptions: "🎬 Suscripciones",
        groceries: "🛒 Compras",
        other: "💸 Otros Gastos",
        
        // Default items
        salary: "Salario",
        rent: "Alquiler",
        arnona: "Arnona",
        electricity: "Electricidad",
        gas: "Gas",
        water: "Agua",
        phonePlan: "Plan de Teléfono",
        internet: "Internet",
        icloud: "iCloud",
        catFood: "Comida de Gato",
        litter: "Arena para Gatos",
        youtube: "YouTube Premium",
        claude: "Claude Pro",
        therapist: "Terapeuta",
        food: "Comida",
        household: "Productos del Hogar",
        personalCare: "Cuidado Personal",
        otherExpenses: "Otros Gastos",
        
        // Modals
        customizeColors: "🎨 Personalizar Colores",
        resetToDefault: "Restablecer Predeterminados",
        done: "Hecho",
        
        // Settings
        settingsTitle: "⚙️ Configuración",
        account: "Cuenta",
        loggedInAs: "Conectado como:",
        logout: "Cerrar Sesión",
        databaseMaintenance: "Mantenimiento de Base de Datos",
        cleanGhostCategories: "🧹 Limpiar Categorías Fantasma",
        cleanDescription: "Eliminar categorías que existen en tus datos pero no se muestran correctamente.",
        currency: "Moneda",
        incomeTracking: "Seguimiento de Ingresos",
        trackIncome: "Rastrear ingresos y calcular saldo restante",
        trackIncomeDesc: "Cuando está habilitado, puedes rastrear tus fuentes de ingresos y ver cuánto dinero queda después de los gastos.",
        percentageCalculation: "Cálculo de Porcentajes",
        basedOnExpenses: "Basado en Gastos Totales",
        basedOnIncome: "Basado en Ingresos Totales",
        percentageDesc: "Elige si los porcentajes de categorías se calculan en relación con los gastos totales o los ingresos totales.",
        language: "Idioma",
        
        // Confirmations & alerts
        resetAllConfirm: "¿Estás seguro de que quieres restablecer todos los gastos a 0?",
        deleteItemConfirm: "¿Eliminar este elemento de gasto?",
        deleteCategoryConfirm: "¿Eliminar toda esta categoría? Esto no se puede deshacer.",
        lastItemConfirm: "Este era el último elemento en esta categoría. ¿Eliminar toda la categoría?",
        logoutConfirm: "¿Estás seguro de que quieres cerrar sesión?",
        resetColorsConfirm: "¿Restablecer todos los colores a los predeterminados?",
        categoryExistsAlert: "¡Ya existe una categoría con este nombre!",
        topOfListAlert: "Esta categoría ya está en la parte superior de la lista (después de Ingresos).",
        categoryNotFoundAlert: "¡Categoría no encontrada!",
        
        // Prompts
        enterCategoryName: "Introduce el nombre de la categoría:",
        enterEmoji: "Introduce un emoji para esta categoría (ej: 🎮):",
        enterFirstItem: "Introduce el nombre del primer elemento:",
        enterNewItemName: "Introduce el nombre del nuevo elemento:",
        enterNewName: "Introduce el nuevo nombre para este elemento:",
        enterNewCategoryName: "Introduce el nuevo nombre de categoría:",
        
        // Errors
        authError: "Ocurrió un error. Por favor, inténtalo de nuevo.",
        emailInUse: "Este email ya está en uso. Intenta iniciar sesión en su lugar.",
        invalidEmail: "Dirección de email inválida.",
        weakPassword: "La contraseña debe tener al menos 6 caracteres.",
        invalidCredentials: "Email o contraseña inválidos.",
        
        // Other
        noExpensesYet: "Aún no hay gastos",
        resetAll: "Restablecer Todos los Gastos",
        close: "✕"
    },
    
    ru: {
        // Auth screen
        appTitle: "💰 Учет Расходов",
        authSubtitle: "Войдите, чтобы синхронизировать ваши расходы",
        email: "Email",
        password: "Пароль (минимум 6 символов)",
        signIn: "Войти",
        signUp: "Зарегистрироваться",
        noAccount: "Нет аккаунта?",
        hasAccount: "Уже есть аккаунт?",
        signingIn: "Вход...",
        creatingAccount: "Создание аккаунта...",
        
        // Main app
        monthlyExpenses: "💰 Ежемесячные Расходы",
        totalIncome: "Общий Доход",
        totalExpenses: "Общие Ежемесячные Расходы",
        remaining: "Остаток",
        ofIncome: "от дохода",
        
        // Buttons
        editCategories: "✏️ Редактировать Категории",
        doneEditing: "✓ Готово",
        addCategory: "➕ Добавить Категорию",
        settings: "⚙️ Настройки",
        pieChart: "🍩 Круговая Диаграмма",
        barChart: "📊 Гистограмма",
        colors: "🎨 Цвета",
        
        // Category controls
        moveUp: "↑ Вверх",
        moveDown: "↓ Вниз",
        addItem: "➕ Добавить",
        deleteCategory: "🗑️ Удалить",
        
        // Default categories
        income: "💰 Доходы",
        housing: "🏠 Жилье",
        tech: "📱 Связь и Технологии",
        pet: "🐱 Уход за Питомцами",
        subscriptions: "🎬 Подписки",
        groceries: "🛒 Продукты",
        other: "💸 Прочие Расходы",
        
        // Default items
        salary: "Зарплата",
        rent: "Аренда",
        arnona: "Арнона",
        electricity: "Электричество",
        gas: "Газ",
        water: "Вода",
        phonePlan: "Мобильная Связь",
        internet: "Интернет",
        icloud: "iCloud",
        catFood: "Корм для Кошки",
        litter: "Наполнитель",
        youtube: "YouTube Premium",
        claude: "Claude Pro",
        therapist: "Психотерапевт",
        food: "Еда",
        household: "Бытовые Товары",
        personalCare: "Личная Гигиена",
        otherExpenses: "Прочие Расходы",
        
        // Modals
        customizeColors: "🎨 Настроить Цвета",
        resetToDefault: "Сбросить",
        done: "Готово",
        
        // Settings
        settingsTitle: "⚙️ Настройки",
        account: "Аккаунт",
        loggedInAs: "Вы вошли как:",
        logout: "Выйти",
        databaseMaintenance: "Обслуживание Базы Данных",
        cleanGhostCategories: "🧹 Очистить Категории-Призраки",
        cleanDescription: "Удалить категории, которые существуют в ваших данных, но не отображаются правильно.",
        currency: "Валюта",
        incomeTracking: "Учет Доходов",
        trackIncome: "Отслеживать доходы и рассчитывать остаток",
        trackIncomeDesc: "При включении вы можете отслеживать источники дохода и видеть, сколько денег остается после расходов.",
        percentageCalculation: "Расчет Процентов",
        basedOnExpenses: "На Основе Общих Расходов",
        basedOnIncome: "На Основе Общего Дохода",
        percentageDesc: "Выберите, рассчитываются ли проценты категорий относительно общих расходов или общего дохода.",
        language: "Язык",
        
        // Confirmations & alerts
        resetAllConfirm: "Вы уверены, что хотите сбросить все расходы до 0?",
        deleteItemConfirm: "Удалить этот элемент расходов?",
        deleteCategoryConfirm: "Удалить всю эту категорию? Это действие нельзя отменить.",
        lastItemConfirm: "Это был последний элемент в этой категории. Удалить всю категорию?",
        logoutConfirm: "Вы уверены, что хотите выйти?",
        resetColorsConfirm: "Сбросить все цвета по умолчанию?",
        categoryExistsAlert: "Категория с таким названием уже существует!",
        topOfListAlert: "Эта категория уже находится в верхней части списка (после Доходов).",
        categoryNotFoundAlert: "Категория не найдена!",
        
        // Prompts
        enterCategoryName: "Введите название категории:",
        enterEmoji: "Введите эмодзи для этой категории (например: 🎮):",
        enterFirstItem: "Введите название первого элемента:",
        enterNewItemName: "Введите название нового элемента:",
        enterNewName: "Введите новое название для этого элемента:",
        enterNewCategoryName: "Введите новое название категории:",
        
        // Errors
        authError: "Произошла ошибка. Пожалуйста, попробуйте снова.",
        emailInUse: "Этот email уже используется. Попробуйте войти.",
        invalidEmail: "Неверный адрес email.",
        weakPassword: "Пароль должен содержать минимум 6 символов.",
        invalidCredentials: "Неверный email или пароль.",
        
        // Other
        noExpensesYet: "Пока нет расходов",
        resetAll: "Сбросить Все Расходы",
        close: "✕"
    },
    ar: {
        // Auth screen
        appTitle: "💰 متتبع المصروفات",
        authSubtitle: "سجل الدخول لمزامنة مصروفاتك",
        email: "البريد الإلكتروني",
        password: "كلمة المرور (6 أحرف على الأقل)",
        signIn: "تسجيل الدخول",
        signUp: "إنشاء حساب",
        noAccount: "ليس لديك حساب؟",
        hasAccount: "هل لديك حساب بالفعل؟",
        signingIn: "جاري تسجيل الدخول...",
        creatingAccount: "جاري إنشاء الحساب...",
        
        // Main app
        monthlyExpenses: "💰 المصروفات الشهرية",
        totalIncome: "إجمالي الدخل",
        totalExpenses: "إجمالي المصروفات الشهرية",
        remaining: "المتبقي",
        ofIncome: "من الدخل",
        
        // Buttons
        editCategories: "✏️ تعديل الفئات",
        doneEditing: "✓ انتهى التعديل",
        addCategory: "➕ إضافة فئة",
        settings: "⚙️ الإعدادات",
        pieChart: "🍩 مخطط دائري",
        barChart: "📊 مخطط أعمدة",
        colors: "🎨 الألوان",
        
        // Category controls
        moveUp: "↑ تحريك لأعلى",
        moveDown: "↓ تحريك لأسفل",
        addItem: "➕ إضافة عنصر",
        deleteCategory: "🗑️ حذف الفئة",
        
        // Default categories
        income: "💰 الدخل",
        housing: "🏠 السكن",
        tech: "📱 الاتصالات والتكنولوجيا",
        pet: "🐱 رعاية الحيوانات الأليفة",
        subscriptions: "🎬 الاشتراكات",
        groceries: "🛒 البقالة",
        other: "💸 مصروفات أخرى",
        
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
        catFood: "طعام القطة",
        litter: "رمل القطط",
        youtube: "YouTube Premium",
        claude: "Claude Pro",
        therapist: "المعالج النفسي",
        food: "الطعام",
        household: "المنتجات المنزلية",
        personalCare: "العناية الشخصية",
        otherExpenses: "مصروفات أخرى",
        
        // Modals
        customizeColors: "🎨 تخصيص الألوان",
        resetToDefault: "إعادة تعيين افتراضي",
        done: "تم",
        
        // Settings
        settingsTitle: "⚙️ الإعدادات",
        account: "الحساب",
        loggedInAs: "مسجل الدخول باسم:",
        logout: "تسجيل الخروج",
        databaseMaintenance: "صيانة قاعدة البيانات",
        cleanGhostCategories: "🧹 تنظيف الفئات الشبحية",
        cleanDescription: "إزالة الفئات الموجودة في بياناتك ولكن لا يتم عرضها بشكل صحيح.",
        currency: "العملة",
        incomeTracking: "تتبع الدخل",
        trackIncome: "تتبع الدخل وحساب الرصيد المتبقي",
        trackIncomeDesc: "عند التفعيل، يمكنك تتبع مصادر دخلك ومعرفة المبلغ المتبقي بعد المصروفات.",
        percentageCalculation: "حساب النسبة المئوية",
        basedOnExpenses: "بناءً على إجمالي المصروفات",
        basedOnIncome: "بناءً على إجمالي الدخل",
        percentageDesc: "اختر ما إذا كانت نسب الفئات تُحسب بالنسبة لإجمالي المصروفات أو إجمالي الدخل.",
        language: "اللغة",
        
        // Confirmations & alerts
        resetAllConfirm: "هل أنت متأكد من أنك تريد إعادة تعيين جميع المصروفات إلى 0؟",
        deleteItemConfirm: "حذف عنصر المصروفات هذا؟",
        deleteCategoryConfirm: "حذف هذه الفئة بالكامل؟ لا يمكن التراجع عن هذا الإجراء.",
        lastItemConfirm: "كان هذا آخر عنصر في هذه الفئة. حذف الفئة بالكامل؟",
        logoutConfirm: "هل أنت متأكد من أنك تريد تسجيل الخروج؟",
        resetColorsConfirm: "إعادة تعيين جميع الألوان إلى الافتراضية؟",
        categoryExistsAlert: "فئة بهذا الاسم موجودة بالفعل!",
        topOfListAlert: "هذه الفئة موجودة بالفعل في أعلى القائمة (بعد الدخل).",
        categoryNotFoundAlert: "الفئة غير موجودة!",
        
        // Prompts
        enterCategoryName: "أدخل اسم الفئة:",
        enterEmoji: "أدخل رمز تعبيري لهذه الفئة (مثال: 🎮):",
        enterFirstItem: "أدخل اسم العنصر الأول:",
        enterNewItemName: "أدخل اسم العنصر الجديد:",
        enterNewName: "أدخل الاسم الجديد لهذا العنصر:",
        enterNewCategoryName: "أدخل الاسم الجديد للفئة:",
        
        // Errors
        authError: "حدث خطأ. يرجى المحاولة مرة أخرى.",
        emailInUse: "هذا البريد الإلكتروني مستخدم بالفعل. حاول تسجيل الدخول بدلاً من ذلك.",
        invalidEmail: "عنوان بريد إلكتروني غير صالح.",
        weakPassword: "يجب أن تتكون كلمة المرور من 6 أحرف على الأقل.",
        invalidCredentials: "البريد الإلكتروني أو كلمة المرور غير صحيحة.",
        
        // Other
        noExpensesYet: "لا توجد مصروفات حتى الآن",
        resetAll: "إعادة تعيين جميع المصروفات",
        close: "✕"
    }
};


let currentLanguage = 'en';
