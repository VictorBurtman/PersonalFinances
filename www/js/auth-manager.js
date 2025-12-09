// auth-manager.js
// Gère l'authentification, la configuration initiale et la mémorisation des identifiants


class AuthManager {
    constructor() {
        this.isFirstLaunch = null;
        this.detectedLanguage = null;
        this.detectedCurrency = null;
    }

    /**
     * Détecte la langue du système
     * @returns {string} Code de langue (en, fr, he, es, ru, ar)
     */
    detectSystemLanguage() {
        // Récupérer la langue du navigateur/système
        const browserLang = navigator.language || navigator.userLanguage || 'en';
        const langCode = browserLang.substring(0, 2).toLowerCase();
        
        // Mapping des codes de langue vers les langues supportées
        const supportedLanguages = ['en', 'fr', 'he', 'es', 'ru', 'ar'];
        
        if (supportedLanguages.includes(langCode)) {
            return langCode;
        }
        
        // Langues alternatives
        const langMap = {
            'iw': 'he',  // Code alternatif pour l'hébreu
            'pt': 'es',   // Portugais → Espagnol (langues latines similaires)
            'it': 'es',   // Italien → Espagnol
            'de': 'en',   // Allemand → Anglais
            'nl': 'en',   // Néerlandais → Anglais
            'uk': 'ru',   // Ukrainien → Russe
            'be': 'ru',   // Biélorusse → Russe
        };
        
        return langMap[langCode] || 'en'; // Par défaut: anglais
    }

    /**
     * Détecte la devise basée sur la géolocalisation ou le fuseau horaire
     * @returns {Promise<string>} Code de devise
     */
    async detectCurrency() {
        // D'abord essayer avec l'API de géolocalisation
        try {
            const response = await fetch('https://ipapi.co/json/');
            const data = await response.json();
            
            if (data && data.currency) {
                return data.currency;
            }
        } catch (error) {
            console.log('Could not detect currency via IP, using timezone fallback');
        }
        
        // Fallback: utiliser le fuseau horaire pour deviner
        const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
        
        // Mapping fuseau horaire → devise
        const timezoneMap = {
            'Asia/Jerusalem': 'ILS',
            'Asia/Tel_Aviv': 'ILS',
            'Europe/Paris': 'EUR',
            'Europe/Madrid': 'EUR',
            'Europe/Berlin': 'EUR',
            'Europe/Rome': 'EUR',
            'Europe/Brussels': 'EUR',
            'Europe/Amsterdam': 'EUR',
            'Europe/Moscow': 'RUB',
            'Europe/London': 'GBP',
            'America/New_York': 'USD',
            'America/Los_Angeles': 'USD',
            'America/Chicago': 'USD',
            'Asia/Dubai': 'AED',
            'Asia/Riyadh': 'SAR',
            'Asia/Kuwait': 'KWD',
            'Africa/Cairo': 'EGP',
            'Asia/Amman': 'JOD',
            'Asia/Beirut': 'LBP'
        };
        
        // Si on trouve le fuseau horaire, retourner la devise associée
        for (const [tz, currency] of Object.entries(timezoneMap)) {
            if (timezone.includes(tz.split('/')[1])) {
                return currency;
            }
        }
        
        // Par défaut: USD
        return 'USD';
    }

    /**
     * Vérifie si c'est la première connexion de l'utilisateur
     * @param {string} userId - ID de l'utilisateur Firebase
     * @returns {Promise<boolean>}
     */
    async checkFirstLaunch(userId) {
        try {
            const userDoc = await db.collection('users').doc(userId).get();
            
            if (!userDoc.exists) {
                // L'utilisateur n'existe pas encore dans Firestore
                return true;
            }
            
            const userData = userDoc.data();
            // Si l'utilisateur n'a pas de préférences de langue ou devise, c'est un premier lancement
            return !userData.language || !userData.currency;
            
        } catch (error) {
            console.error('Error checking first launch:', error);
            return false;
        }
    }

    /**
     * Configure les paramètres initiaux pour un nouvel utilisateur
     * @param {string} userId - ID de l'utilisateur Firebase
     */
    async setupInitialConfig(userId) {
        try {
            // Détecter langue et devise
            const detectedLang = this.detectSystemLanguage();
            const detectedCurrency = await this.detectCurrency();
            
            console.log(`First launch detected - Setting language: ${detectedLang}, currency: ${detectedCurrency}`);
            
            // Sauvegarder dans Firestore
            await db.collection('users').doc(userId).set({
                language: detectedLang,
                currency: detectedCurrency,
                darkMode: this.detectSystemDarkMode(),
                firstLoginDate: firebase.firestore.FieldValue.serverTimestamp(),
                setupCompleted: true
            }, { merge: true });
            
            // Appliquer immédiatement
            currentLanguage = detectedLang;
            currentCurrency = detectedCurrency;
            
            // Mettre à jour l'interface
            this.applyLanguage(detectedLang);
            this.applyDarkMode(this.detectSystemDarkMode());
            
            return { language: detectedLang, currency: detectedCurrency };
            
        } catch (error) {
            console.error('Error setting up initial config:', error);
            // En cas d'erreur, utiliser les valeurs par défaut
            currentLanguage = 'en';
            currentCurrency = 'USD';
            return { language: 'en', currency: 'USD' };
        }
    }

    /**
     * Détecte si le système est en dark mode
     * @returns {boolean}
     */
    detectSystemDarkMode() {
        return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    }

    /**
     * Applique le dark mode à l'écran de connexion
     * @param {boolean} isDark
     */
    applyDarkMode(isDark) {
        const authScreen = document.getElementById('auth-screen');
        if (authScreen) {
            if (isDark) {
                authScreen.classList.add('dark-mode');
                document.body.classList.add('dark-mode');
            } else {
                authScreen.classList.remove('dark-mode');
                document.body.classList.remove('dark-mode');
            }
        }
    }

    /**
     * Applique la langue à l'écran de connexion
     * @param {string} langCode
     */
    applyLanguage(langCode) {
        // Appliquer la direction du texte pour les langues RTL
        if (langCode === 'he' || langCode === 'ar') {
            document.documentElement.setAttribute('dir', 'rtl');
        } else {
            document.documentElement.setAttribute('dir', 'ltr');
        }
        
        // Mettre à jour les textes de l'écran de connexion
        this.updateAuthScreenTranslations(langCode);
    }


    /**
     * Affiche un message dans l'interface (erreur ou succès)
     * @param {string} message - Message à afficher
     */
    showAuthError(message) {
        const errorElement = document.getElementById('authError');
        if (errorElement) {
            errorElement.textContent = message;
            errorElement.style.display = 'block';
            errorElement.style.color = 'white';
            
            // ✅ Détecter si c'est un succès (contient ✅ OU commence par "Password reset" etc.)
            const isSuccess = message.includes('✅') || 
                            message.toLowerCase().includes('sent') ||
                            message.toLowerCase().includes('envoyé') ||
                            message.toLowerCase().includes('נשלח');
            
            if (isSuccess) {
                // Vert pour succès
                errorElement.style.background = 'linear-gradient(135deg, #28a745 0%, #20c997 100%)';
                errorElement.style.boxShadow = '0 4px 12px rgba(40, 167, 69, 0.3)';
            } else {
                // Rouge pour erreur
                errorElement.style.background = 'linear-gradient(135deg, #dc3545 0%, #c82333 100%)';
                errorElement.style.boxShadow = '0 4px 12px rgba(220, 53, 69, 0.3)';
            }
            
            // Masquer après 6 secondes
            setTimeout(() => {
                errorElement.style.display = 'none';
            }, 6000);
        }
    }

    /**
     * Met à jour les traductions de l'écran de connexion
     * @param {string} langCode
     */
    updateAuthScreenTranslations(langCode) {
        const trans = translations[langCode] || translations.en;
        
        // Titre et sous-titre
        const authTitle = document.querySelector('.auth-container h2');
        if (authTitle) authTitle.textContent = trans.appTitle;
        
        const authSubtitle = document.querySelector('.auth-container p');
        if (authSubtitle) authSubtitle.textContent = trans.authSubtitle;
        
        // Placeholders des champs
        const emailInput = document.getElementById('email');
        if (emailInput) emailInput.placeholder = trans.email;
        
        const passwordInput = document.getElementById('password');
        if (passwordInput) passwordInput.placeholder = trans.password;
        
        // Texte de la checkbox "Remember me"
        const rememberLabel = document.querySelector('label[for="rememberMe"]');
        if (rememberLabel) {
            const checkbox = rememberLabel.querySelector('input');
            rememberLabel.textContent = trans.rememberMe || "Remember me";
            if (checkbox) rememberLabel.prepend(checkbox);
        }
        
        // Boutons
        const signInBtn = document.getElementById('signInBtn');
        if (signInBtn && !signInBtn.disabled) signInBtn.textContent = trans.signIn;
        
        const signUpBtn = document.getElementById('signUpBtn');
        if (signUpBtn && !signUpBtn.disabled) signUpBtn.textContent = trans.signUp;
        
        // Liens de changement de mode
        const authSwitch = document.querySelector('.auth-switch');
        if (authSwitch) {
            const switchLink = authSwitch.querySelector('a');
            if (switchLink) {
                const isSignUpMode = switchLink.textContent.includes('Sign In');
                
                // Vider et reconstruire complètement
                authSwitch.innerHTML = '';
                
                const textSpan = document.createElement('span');
                textSpan.textContent = (isSignUpMode ? trans.hasAccount : trans.noAccount) + ' ';
                
                const link = document.createElement('a');
                link.onclick = function() { toggleAuthMode(); };
                link.textContent = isSignUpMode ? trans.signIn : trans.signUp;
                link.style.cursor = 'pointer';
                
                authSwitch.appendChild(textSpan);
                authSwitch.appendChild(link);
            }
        }
        // ✅ AJOUTE CETTE PARTIE
        // Traduire "Forgot password?"
        const forgotPasswordLink = document.getElementById('forgotPasswordLink');
        if (forgotPasswordLink) {
            forgotPasswordLink.textContent = trans.forgotPassword;
        }
    }

    /**
     * Sauvegarde les identifiants dans le localStorage si "Remember me" est coché
     * @param {string} email
     * @param {boolean} remember
     */
    saveCredentials(email, remember) {
        if (remember) {
            localStorage.setItem('rememberedEmail', email);
            localStorage.setItem('rememberMe', 'true');
        } else {
            localStorage.removeItem('rememberedEmail');
            localStorage.removeItem('rememberMe');
        }
    }

    /**
     * Charge les identifiants sauvegardés
     * @returns {Object} { email: string, remember: boolean }
     */
    loadSavedCredentials() {
        const email = localStorage.getItem('rememberedEmail');
        const remember = localStorage.getItem('rememberMe') === 'true';
        
        return {
            email: email || '',
            remember: remember
        };
    }

    /**
     * Configure la persistence de Firebase selon le choix "Remember me"
     * @param {boolean} remember
     */
    async setAuthPersistence(remember) {
        try {
            if (remember) {
                // Persistence LOCAL: reste connecté même après fermeture du navigateur
                await auth.setPersistence(firebase.auth.Auth.Persistence.LOCAL);
            } else {
                // Persistence SESSION: déconnexion à la fermeture du navigateur
                await auth.setPersistence(firebase.auth.Auth.Persistence.SESSION);
            }
        } catch (error) {
            console.error('Error setting auth persistence:', error);
        }
    }

    /**
     * Gère la connexion avec mémorisation des identifiants
     * @param {string} email
     * @param {string} password
     * @param {boolean} remember
     */
    async signIn(email, password, remember) {
        try {
            await this.setAuthPersistence(remember);
            const result = await auth.signInWithEmailAndPassword(email, password);
            this.saveCredentials(email, remember);
            
            const isFirst = await this.checkFirstLaunch(result.user.uid);
            if (isFirst) {
                await this.setupInitialConfig(result.user.uid);
            }
            
            return result;
            
        } catch (error) {
            console.error('❌ Sign in error:', error);
            
            // ✅ Utiliser getErrorMessage() au lieu de t()
            const errorMessage = this.getErrorMessage(error.code);
            this.showAuthError(errorMessage);
            
            throw error;
        }
    }

    /**
     * Gère l'inscription avec configuration initiale
     * @param {string} email
     * @param {string} password
     * @param {boolean} remember
     */
    async signUp(email, password, remember) {
        try {
            await this.setAuthPersistence(remember);
            const result = await auth.createUserWithEmailAndPassword(email, password);
            this.saveCredentials(email, remember);
            await this.setupInitialConfig(result.user.uid);
            return result;
            
        } catch (error) {
            console.error('❌ Sign up error:', error);
            
            // ✅ Utiliser getErrorMessage() au lieu de t()
            const errorMessage = this.getErrorMessage(error.code);
            this.showAuthError(errorMessage);
            
            throw error;
        }
    }

    /**
     * Initialise l'écran de connexion au chargement
     */
    initAuthScreen() {
        // Charger les identifiants sauvegardés
        const saved = this.loadSavedCredentials();
        
        const emailInput = document.getElementById('email');
        const rememberCheckbox = document.getElementById('rememberMe');
        
        if (emailInput && saved.email) {
            emailInput.value = saved.email;
        }
        
        if (rememberCheckbox) {
            rememberCheckbox.checked = saved.remember;
        }
        
        // Détecter et appliquer le dark mode système
        const systemDarkMode = this.detectSystemDarkMode();
        this.applyDarkMode(systemDarkMode);
        
        // Détecter et appliquer la langue système
        const systemLanguage = this.detectSystemLanguage();
        this.applyLanguage(systemLanguage);
    }
    
    /**
     * Affiche le dialog de réinitialisation de mot de passe
     */
    showForgotPasswordDialog() {
        const trans = translations[currentLanguage];
        const email = document.getElementById('email').value.trim();
        
        // Créer la modal
        const modal = document.createElement('div');
        modal.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: rgba(0, 0, 0, 0.7);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 999999;
            padding: 20px;
            direction: ${currentLanguage === 'ar' || currentLanguage === 'he' ? 'rtl' : 'ltr'};
        `;
        
        modal.innerHTML = `
            <div style="
                background: white;
                border-radius: 12px;
                padding: 30px;
                max-width: 400px;
                width: 100%;
                box-shadow: 0 10px 40px rgba(0,0,0,0.3);
            ">
                <h3 style="margin: 0 0 15px 0; color: #667eea; font-size: 1.3em;">🔑 ${trans.resetPassword || 'Reset Password'}</h3>
                <p style="margin: 0 0 20px 0; color: #666; font-size: 0.95em; line-height: 1.5;">${trans.resetPasswordDesc || 'Enter your email'}</p>
                
                <input type="email" 
                    id="resetEmail" 
                    placeholder="${trans.email || 'Email'}"
                    value="${email}"
                    style="
                        width: 100%;
                        padding: 12px;
                        border: 1px solid #ddd;
                        border-radius: 8px;
                        font-size: 1em;
                        margin-bottom: 20px;
                        box-sizing: border-box;
                    ">
                
                <div style="display: flex; gap: 10px;">
                    <button id="cancelResetBtn" style="
                        flex: 1;
                        padding: 12px;
                        background: #6c757d;
                        color: white;
                        border: none;
                        border-radius: 8px;
                        font-size: 1em;
                        cursor: pointer;
                        font-weight: 600;
                    ">${trans.cancel || 'Cancel'}</button>
                    
                    <button id="confirmResetBtn" style="
                        flex: 1;
                        padding: 12px;
                        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                        color: white;
                        border: none;
                        border-radius: 8px;
                        font-size: 1em;
                        cursor: pointer;
                        font-weight: 600;
                    ">${trans.sendResetEmail || 'Send'}</button>
                </div>
            </div>
        `;
        
        document.body.appendChild(modal);
        
        // Focus sur l'input email
        setTimeout(() => {
            document.getElementById('resetEmail').focus();
        }, 100);
        
        // Bouton Annuler
        document.getElementById('cancelResetBtn').addEventListener('click', () => {
            document.body.removeChild(modal);
        });
        
        // Bouton Envoyer
        document.getElementById('confirmResetBtn').addEventListener('click', () => {
            const resetEmail = document.getElementById('resetEmail').value.trim();
            
            if (!resetEmail) {
                alert(trans.pleaseEnterEmail || 'Please enter your email');
                return;
            }
            
            // Validation email
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(resetEmail)) {
                this.showAuthError(trans.invalidEmail); // ← CORRIGÉ
                document.body.removeChild(modal);
                return;
            }
            
            document.body.removeChild(modal);
            this.handlePasswordReset(resetEmail);
        });
        
        // Fermer avec Escape
        const handleEscape = (e) => {
            if (e.key === 'Escape') {
                document.body.removeChild(modal);
                document.removeEventListener('keydown', handleEscape);
            }
        };
        document.addEventListener('keydown', handleEscape);
    }

    /**
     * Gère l'envoi de l'email de réinitialisation
     * @param {string} email
     */
    async handlePasswordReset(email) {
        const trans = translations[currentLanguage];
        
        try {
            await auth.sendPasswordResetEmail(email);
            
            // Succès
            this.showAuthError(trans.resetEmailSent || 'Password reset email sent!');
            
            console.log('✅ Email de réinitialisation envoyé à:', email);
            
        } catch (error) {
            console.error('❌ Erreur envoi email reset:', error);
            
            const errorMessage = this.getErrorMessage(error.code);
            this.showAuthError(errorMessage);
        }
    }

    getErrorMessage(errorCode) {
        const trans = translations[currentLanguage];
        
        const errorMap = {
            'auth/invalid-email': trans.invalidEmail,
            'auth/user-not-found': trans.userNotFound,
            'auth/wrong-password': trans.wrongPassword,
            'auth/email-already-in-use': trans.emailAlreadyInUse,
            'auth/weak-password': trans.weakPassword,
            'auth/too-many-requests': trans.tooManyRequests,
            'auth/network-request-failed': trans.networkError,
            'auth/user-disabled': trans.accountDisabled,
            'auth/operation-not-allowed': trans.unknownError,
            'auth/invalid-credential': trans.wrongPassword
        };
        
        return errorMap[errorCode] || trans.unknownError;
    }


    /**
     * Valide les champs du formulaire
     * @param {string} email
     * @param {string} password
     * @returns {string|null} Message d'erreur ou null si OK
     */
    validateAuthForm(email, password) {
        const trans = translations[currentLanguage];
        
        if (!email || !email.trim()) {
            return trans.errorEmailRequired;
        }
        
        if (!password || !password.trim()) {
            return trans.errorPasswordRequired;
        }
        
        // Validation basique de l'email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return trans.errorEmailInvalid;
        }
        
        if (password.length < 6) {
            return trans.errorPasswordTooShort;
        }
        
        return null; // Pas d'erreur
    }


}

// Créer une instance globale
const authManager = new AuthManager();

// Export pour utilisation dans d'autres modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = AuthManager;
}


