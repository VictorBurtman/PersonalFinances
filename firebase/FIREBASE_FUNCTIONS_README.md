# Firebase Functions - Max Scraper Backend

Backend sécurisé pour scraper les transactions Max et les stocker dans Firebase.

## 🚀 Installation

### 1. Prérequis

- Node.js >= 18
- Firebase CLI installé globalement
- Accès au projet Firebase `expense-tracker-b086e`

### 2. Installation de Firebase CLI

```bash
npm install -g firebase-tools
firebase login
```

### 3. Configuration du projet

```bash
# Dans le dossier racine de ton projet
cd functions
npm install
```

### 4. Configuration de la clé de chiffrement

**IMPORTANT pour la sécurité !**

```bash
# Génère une clé de chiffrement sécurisée
node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"

# Copie le résultat et configure-le dans Firebase
firebase functions:config:set encryption.key="TA_CLE_GENEREE_ICI"
```

## 📁 Structure des fichiers

```
functions/
├── index.js              # Functions principales
├── package.json          # Dépendances
└── .env.example          # Template pour variables d'environnement
```

## 🔧 Functions disponibles

### 1. `saveMaxCredentials`

Sauvegarde les identifiants Max (chiffrés) dans Firestore.

**Appelée depuis le frontend :**
```javascript
const saveCredentials = httpsCallable(functions, 'saveMaxCredentials');
await saveCredentials({
  username: 'ton_username',
  password: 'ton_password'
});
```

### 2. `scrapeMaxTransactions`

Scrape les transactions Max et les sauvegarde dans Firestore.

**Appelée depuis le frontend :**
```javascript
const scrapeMax = httpsCallable(functions, 'scrapeMaxTransactions');
const result = await scrapeMax({
  startDate: '2024-01-01'  // Optionnel, défaut = 30 derniers jours
});
```

**Retourne :**
```javascript
{
  success: true,
  transactionCount: 45,
  accounts: 1,
  message: "Successfully scraped 45 transactions"
}
```

### 3. `getTransactions`

Récupère les transactions avec filtres optionnels.

**Appelée depuis le frontend :**
```javascript
const getTransactions = httpsCallable(functions, 'getTransactions');
const result = await getTransactions({
  startDate: '2024-11-01',
  endDate: '2024-11-30',
  category: 'housing',      // Optionnel
  isLabeled: false,         // Optionnel - pour n'avoir que les non-labelisées
  limit: 100                // Optionnel, défaut = 100
});
```

### 4. `labelTransaction`

Assigne une catégorie à une transaction et crée des règles d'auto-labellisation.

**Appelée depuis le frontend :**
```javascript
const labelTxn = httpsCallable(functions, 'labelTransaction');
await labelTxn({
  transactionId: 'abc123',
  category: 'housing'
});
```

### 5. `autoLabelTransactions`

Labellise automatiquement les transactions basées sur les règles existantes.

**Appelée depuis le frontend :**
```javascript
const autoLabel = httpsCallable(functions, 'autoLabelTransactions');
const result = await autoLabel();
// Retourne: { success: true, labeledCount: 12 }
```

## 🗄️ Structure Firestore

### Collection: `users/{userId}`

```javascript
{
  maxCredentials: {
    encrypted: "U2FsdGVkX1...",  // Credentials chiffrés AES-256
    updatedAt: Timestamp
  },
  lastMaxSync: Timestamp,
  lastSyncTransactionCount: 45,
  // ... autres données budget existantes
}
```

### Collection: `users/{userId}/transactions/{transactionId}`

```javascript
{
  accountNumber: "1234",
  date: "2024-11-15",
  processedDate: "2024-11-16",
  originalAmount: 450,
  originalCurrency: "ILS",
  chargedAmount: 450,
  chargedCurrency: "ILS",
  description: "ARNONA NETANYA",
  memo: "Payment",
  type: "normal",
  status: "completed",
  category: "housing",          // null si pas encore labelisé
  isLabeled: true,              // false si pas encore labelisé
  autoLabeled: false,           // true si labelisé automatiquement
  source: "max",
  scrapedAt: Timestamp,
  labeledAt: Timestamp,
  updatedAt: Timestamp
}
```

### Collection: `users/{userId}/labelingRules/{ruleId}`

```javascript
{
  pattern: "arnona",            // Mot-clé à détecter
  category: "housing",          // Catégorie à assigner
  matchType: "contains",        // Type de match
  confidence: 0.8,              // Score de confiance
  timesMatched: 15,             // Nombre de fois matché
  lastMatched: Timestamp
}
```

## 🔐 Sécurité

### Chiffrement des credentials

- **Algorithme :** AES-256
- **Clé :** Stockée dans Firebase config (pas dans le code)
- **Rotation :** Recommandé tous les 6 mois

### Règles Firestore à ajouter

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Users can only access their own data
    match /users/{userId} {
      allow read, write: if request.auth != null && request.auth.uid == userId;
      
      // Transactions
      match /transactions/{transactionId} {
        allow read, write: if request.auth != null && request.auth.uid == userId;
      }
      
      // Labeling rules
      match /labelingRules/{ruleId} {
        allow read, write: if request.auth != null && request.auth.uid == userId;
      }
    }
  }
}
```

## 🚀 Déploiement

### Première fois

```bash
# Configure la clé de chiffrement
firebase functions:config:set encryption.key="TA_CLE_GENEREE"

# Déploie toutes les functions
firebase deploy --only functions
```

### Mises à jour

```bash
# Déploie seulement les functions modifiées
firebase deploy --only functions

# Ou déploie une function spécifique
firebase deploy --only functions:scrapeMaxTransactions
```

### Vérifier les logs

```bash
# Voir les logs en temps réel
firebase functions:log

# Voir les logs d'une function spécifique
firebase functions:log --only scrapeMaxTransactions
```

## ⚠️ Important pour la production

1. **Clé de chiffrement**
   - Générer une vraie clé aléatoire
   - Ne JAMAIS la committer dans Git
   - Utiliser Firebase config ou Secret Manager

2. **Credentials Max**
   - Toujours chiffrés avant stockage
   - Jamais en clair dans Firestore
   - Rotation régulière recommandée

3. **Limites Firebase**
   - Gratuit : 2M invocations/mois
   - Timeout : 5 minutes max
   - Puppeteer consomme beaucoup de mémoire

4. **Règles Firestore**
   - Implémenter les règles de sécurité
   - Tester avec l'émulateur

## 🐛 Dépannage

### Erreur: "Credentials not set"
→ L'utilisateur n'a pas encore configuré ses identifiants Max
→ Appeler `saveMaxCredentials` d'abord

### Erreur: "Timeout"
→ Le scraping prend trop de temps
→ Réduire la période (startDate plus récent)

### Erreur: "Invalid password"
→ Credentials incorrects
→ Demander à l'utilisateur de les re-saisir

### Erreur de déploiement
```bash
# Nettoyer et réinstaller
cd functions
rm -rf node_modules package-lock.json
npm install
firebase deploy --only functions
```

## 📊 Monitoring

### Dashboard Firebase

- **Console Functions :** https://console.firebase.google.com/project/expense-tracker-b086e/functions
- **Logs :** Console > Functions > Logs
- **Usage :** Console > Functions > Usage

### Métriques importantes

- Invocations/jour
- Temps d'exécution moyen
- Taux d'erreur
- Mémoire utilisée

## 🔄 Workflow complet

1. User configure ses credentials Max → `saveMaxCredentials`
2. User clique "Sync" → `scrapeMaxTransactions`
3. Transactions sauvegardées dans Firestore
4. User labellise manuellement quelques transactions → `labelTransaction`
5. Système crée des règles automatiques
6. Prochains syncs → `autoLabelTransactions` labellise automatiquement

## 📝 TODO / Améliorations futures

- [ ] Ajouter support pour d'autres banques (Leumi, Hapoalim)
- [ ] Implémenter un cache pour éviter de re-scraper les mêmes transactions
- [ ] Ajouter des suggestions de catégories avec ML
- [ ] Notifications push lors de nouvelles transactions
- [ ] Export des transactions en CSV/Excel
- [ ] Dashboard d'analyse des dépenses

## 🆘 Support

En cas de problème :
1. Vérifier les logs Firebase
2. Tester avec l'émulateur local
3. Vérifier que les credentials sont corrects
4. S'assurer que la clé de chiffrement est configurée
