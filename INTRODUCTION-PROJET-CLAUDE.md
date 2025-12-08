# 💰 PersonalFinances - Introduction Projet

Bonjour ! Je travaille sur **PersonalFinances**, une application de gestion budgétaire personnelle avec synchronisation bancaire automatique.

---

## 📱 À propos de l'application

**Nom :**
- Sur Google Play : "Personal Budget Tracker"
- Sous l'icône mobile : "Budget"
- Package ID : `com.victor.personalfinances`

**Type :** Application PWA (iphone) + app mobile Android. 

**Objectif :** Gérer ses finances personnelles avec import des transactions bancaires et catégorisation intelligente.

**Utilisateurs :** Moi-même + quelques amis/famille (distribution via Google Play Internal Testing et PWA iphone).

---

## 🏗️ Architecture technique

### Stack technique

**Frontend (Web + Mobile) :**
- HTML5 / CSS3 / JavaScript vanilla
- Capacitor (pour convertir web → Android)
- Chart.js (visualisations)
- 6 langues supportées : EN, FR, HE, ES, RU, AR (avec support RTL)

**Backend :**
- Firebase Authentication
- Firebase Firestore (base de données)
- Firebase Cloud Functions (Node.js)
- Librairie `israeli-bank-scrapers` pour synchronisation bancaire

**Hébergement :**
- App web : Firebase Hosting (`expense-tracker-b086e.web.app`)
- App mobile : Google Play Store (Internal Testing)

**Version control :**
- GitHub : https://github.com/VictorBurtman/PersonalFinances
- Workflow : Scripts .bat personnalisés pour synchronisation multi-PC

---

## 📂 Structure du projet

```
PersonalFinances/
├── www/                          ← Frontend (SOURCE UNIQUE pour web ET mobile)
│   ├── index.html                ← Page principale (SPA - Single Page Application)
│   ├── css/
│   │   └── tabs.css            ← Styles principaux + dark mode
│   │   └── auth-screen.css     ← Styles écran de connexion + dark mode
│   ├── js/
│   │   ├── tabs-manager.js       ← Gestion des onglets (Dashboard, Transactions, Categories, Settings)
│   │   ├── transactions-manager.js  ← Gestion transactions + scraping bancaire
│   │   └── auth-manager.js     ← Gestion écran de connexion
│   └── translations.js           ← Traductions i18n (6 langues)
│
├── firebase/
│   └── functions/
│       └── index.js              ← Cloud Functions (scraping, getTransactions, etc.)
│
├── android/                      ← Projet Android (GÉNÉRÉ par Capacitor, pas dans Git)
│
├── sync-pull.bat                 ← Récupérer changements depuis GitHub
├── sync-push.bat                 ← Envoyer changements vers GitHub 
├── deploy-firebase.bat           ← Deployer firebase functions
├── sync-status.bat               ← Vérifier état du repo 
├── dev-mobile.bat                ← Lancer l'app dans l'emulateur android
├── sync-tag.bat                  ← Créer une version (tag Git)
├── sync-tags-list.bat            ← Voir toutes les versions
│
├── capacitor.config.json         ← Configuration Capacitor (web → mobile)
├── firebase.json                 ← Configuration Firebase
└── GUIDE-DEVELOPPEMENT.md        ← Documentation complète du projet
```

---

## 🔑 Fonctionnalités principales

### 1. Authentification
- Login/Signup avec email + mot de passe (Firebase Auth)
- Multi-utilisateurs avec données isolées
- Système de permissions (whitelist pour fonctionnalités sensibles)

### 2. Dashboard
- Vue d'ensemble des dépenses
- Graphiques (Chart.js) : évolution temporelle, répartition par catégorie
- Statistiques par période (mois, année)
- Filtres avancés

### 3. Transactions
- **Import automatique** depuis banques israéliennes (Max/Leumi Card, Isracard). Cette option est activée uniquement sur whitelist, car trop dangereux de stocker des infos aussi sensibles.
- **Import manuel** via CSV/Excel (Revolut, N26, etc.)
- **Transactions manuelles** (ajout direct)
- Catégorisation automatique avec machine learning
- Système d'exclusion (ignorer certaines transactions)
- Filtres : date, catégorie, source, montant
- Recherche textuelle
- Tri personnalisable

### 4. Catégories
- Gestion complète : création, modification, suppression
- Assignation d'émojis
- Ordre personnalisable (drag-and-drop)
- Statistiques par catégorie
- Labeling intelligent (apprend des catégorisations manuelles)

### 5. Scraping bancaire (fonctionnalité protégée)
- Synchronisation automatique Max.co.il (Leumi Card)
- Synchronisation automatique Isracard
- Credentials chiffrés (AES) dans Firestore
- Système de whitelist (seuls certains utilisateurs autorisés)
- Protection triple couche : frontend + backend + Firestore rules

### 6. Paramètres
- Choix de la langue (6 langues)
- Dark mode / Light mode
- Gestion du compte utilisateur
- Export de données

---

## 🔐 Sécurité

### Système de whitelist
- Champ `allowBankScraping` dans Firestore (`users` collection)
- Vérification frontend : cache/affiche les options de scraping
- Vérification backend : Cloud Functions refusent les appels non autorisés
- Message utilisateur : "Bank Synchronization Restricted" pour non-autorisés

### Credentials bancaires
- Chiffrés avec AES avant stockage dans Firestore
- Clé de chiffrement dans Cloud Functions (variable d'environnement)
- Jamais exposés côté client

### Firebase Security Rules
- Données isolées par utilisateur
- Read/Write uniquement sur ses propres données
- Admin access via Cloud Functions uniquement

---

## 🌍 Internationalisation (i18n)

**Langues supportées :**
- 🇬🇧 English
- 🇫🇷 Français
- 🇮🇱 עברית (Hebrew - RTL)
- 🇪🇸 Español
- 🇷🇺 Русский
- 🇸🇦 العربية (Arabic - RTL)

**Gestion :**
- Fichier `translations.js` avec objet par langue
- Attribut `data-translate` sur éléments HTML
- Fonction `updateTransactionsLanguage()` pour application dynamique
- Support RTL complet (direction, alignement, émojis)

---

## 💻 Environnement de développement

### Machines
- **Laptop** : `C:\Users\PC\Documents\GitHub\PersonalFinances`
- **PC Fixe** : `C:\Users\victo\Documents\GitHub\PersonalFinances`
- Synchronisation via Git + scripts .bat personnalisés

### Workflow Git
- Branche principale : `main`
- Tags pour versions stables (v1.0.0, v1.1.0, etc.)
- Commits fréquents via `sync-push.bat`
- Pull systématique via `sync-pull.bat` avant de travailler

### Test et développement
- **Web** : Test direct dans navigateur + Firebase Hosting
- **Mobile** : 
  - Émulateur Android Studio (Pixel 4a + API 30)
  - Live Reload Capacitor (modifications instantanées)
  - Test sur téléphone physique via USB

### Déploiement
- **Web** : `firebase deploy --only hosting`
- **Mobile** : Build AAB → Upload Google Play Console (Internal Testing)
- **Backend** : `firebase deploy --only functions`

---

## 📊 Base de données Firestore

### Collections principales

**`users/` :**
```javascript
{
  uid: "...",
  email: "...",
  allowBankScraping: true/false,  // Whitelist scraping
  maxCredentials: {
    encrypted: "...",
    updatedAt: timestamp
  },
  isracardCredentials: { ... },
  lastMaxSync: timestamp,
  lastIsracardSync: timestamp,
  transactionLimit: 2000,
  transactionFilters: { ... },
  uiPreferences: { ... }
}
```

**`users/{uid}/transactions/` :**
```javascript
{
  id: "...",
  date: "2024-12-01",
  description: "Supermarket",
  chargedAmount: -50.00,
  chargedCurrency: "ILS",
  category: "groceries",
  isLabeled: true,
  source: "max" | "isracard" | "csv" | "manual",
  excluded: false,
  isManual: false
}
```

**`categories/` (collection globale) :**
```javascript
{
  id: "groceries",
  name: { en: "Groceries", fr: "Courses", ... },
  emoji: "🛒",
  order: 1,
  userId: "..." // Optionnel pour catégories personnalisées
}
```

---

## 🔧 Cloud Functions principales

**`getTransactions` :**
- Récupère transactions avec filtres
- Pagination
- Tri et agrégation

**`scrapeMaxTransactions` :**
- Whitelist check
- Scraping Max.co.il via `israeli-bank-scrapers`
- Stockage transactions dans Firestore
- Puppeteer + Chromium

**`scrapeIsracardTransactions` :**
- Même principe pour Isracard

**`saveMaxCredentials` / `saveIsracardCredentials` :**
- Chiffrement AES
- Stockage sécurisé dans Firestore

**`autoLabelTransactions` :**
- Machine learning basique
- Apprend des catégorisations manuelles

---

## 🎨 Interface utilisateur

### Design
- **Style** : Modern, clean, responsive
- **Couleurs** : Violet/bleu (#667eea) comme couleur principale
- **Dark mode** : Complet, avec variables CSS
- **Mobile-first** : Optimisé pour écrans tactiles

### Onglets principaux
1. **📊 Dashboard** : Graphiques et stats
2. **💳 Transactions** : Liste + filtres + scraping
3. **📁 Categories** : Gestion catégories
4. **⚙️ Settings** : Paramètres utilisateur

### Composants notables
- Modal banques (config credentials + sync)
- Modal catégories (création/édition)
- Filtres avancés (collapsible)
- Loading overlays
- Toast notifications

---

## 💬 Contexte de collaboration

**Méthode de travail :**
- 99% du code est généré par IA (Claude/Gemini)
- Je fournis les idées, fonctionnalités désirées
- L'IA génère le code, on discute des solutions
- Je teste et itère avec l'IA jusqu'à ce que ça fonctionne

**Préférences :**
- Explications claires et pédagogiques
- Solutions étape par étape
- Exemples concrets

**Niveau technique :**
- Débutant en développement (pas de background dev)
- À l'aise avec terminal, Git basique, Android Studio
- Besoin d'explications pour concepts avancés

---

## 🚨 Points d'attention pour l'IA

**Architecture actuelle (Décembre 2024) :**
- ✅ Tout le code est dans `index.html` (SPA complet)
- ✅ `transactions-tab.html` n'existe plus (intégré dans index.html)
- ✅ CSS dans `tabs.css` à la racine de `www/`
- ✅ Header unifié + Footer navigation (pas de sticky bar séparée)
- ✅ Système de versions avec `version.json` pour auto-update PWA

**Problèmes récents résolus :**
- Footer iOS PWA (safe-area, couleur, positionnement)
- Boutons d'édition des items de budget (nécessite `updateDisplay()` dans `toggleEditMode()`)
- Checkbox dark mode pas cochée au chargement
- Modal Bank Accounts trop grand sur mobile
- Empty state transactions non visible (déplacé hors de `#allTransactionsSection`)

**Conventions de code :**
- Fonctions principales : `updateDisplay()`, `toggleEditMode()`, `renderExpenseItem()`
- Dark mode : classe `.dark-mode` sur `<body>`
- Traductions : objet `translations[currentLanguage]`
- Mode édition : variable globale `isEditMode`

**Merci de m'aider sur ce projet ! 🚀**