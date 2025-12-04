# 📱 Guide de Développement - PersonalFinances

**Application de gestion budgétaire personnelle avec sync bancaire**
## VS Code Preview (Ctrl+Shift+V)
---

## 📋 Table des matières

1. [Structure du projet](#structure-du-projet)
2. [Workflow Git avec 2 PC](#workflow-git-avec-2-pc)
3. [Développement Web](#développement-web)
4. [Développement Mobile](#développement-mobile)
5. [Publication sur Google Play](#publication-sur-google-play)
6. [Scripts disponibles](#scripts-disponibles)
7. [Troubleshooting](#troubleshooting)

---

## 🗂️ Structure du projet

```
PersonalFinances/
├── www/                      ← Frontend (source unique pour WEB + ANDROID)
│   ├── index.html
│   ├── css/
│   ├── js/
│   ├── partials/
│   └── translations.js
├── firebase/
│   └── functions/            ← Backend (Cloud Functions)
│       └── index.js
├── android/                  ← Projet Android (GÉNÉRÉ, pas dans Git)
├── sync-pull.bat             ← Récupérer changements depuis GitHub
├── sync-push.bat             ← Envoyer changements vers GitHub
├── sync-status.bat           ← Vérifier l'état du repo
├── sync-tag.bat              ← Créer une version (tag)
├── sync-tags-list.bat        ← Voir toutes les versions
├── capacitor.config.json     ← Configuration Capacitor
└── firebase.json             ← Configuration Firebase
```

**Important :** 
- ✅ Une seule source de code : `www/`
- ✅ Le dossier `android/` est généré automatiquement
- ✅ Modifications = toujours dans `www/`

---

## 🔄 Workflow Git avec 2 PC

### Configuration

**Laptop :** `C:\Users\PC\Documents\GitHub\PersonalFinances`  
**PC Fixe :** `C:\Users\victo\Documents\GitHub\PersonalFinances`

### Règle d'or

⚠️ **TOUJOURS faire `sync-pull.bat` AVANT de commencer à travailler !**

---

### Workflow quotidien

#### Sur n'importe quel PC (Laptop OU PC Fixe) :

```batch
# 1. ARRIVÉE - Récupérer les derniers changements
cd C:\Users\[TON_USER]\Documents\GitHub\PersonalFinances
sync-pull.bat

# 2. VÉRIFIER l'état (optionnel)
sync-status.bat

# 3. TRAVAILLER
# Modifie le code dans VS Code

# 4. DÉPART - Sauvegarder les changements
sync-push.bat
# Message : "Description claire de ce que tu as fait"
```

---

### Gestion des versions (tags)

**Quand créer un tag :**
- ✅ Après avoir publié une version sur Google Play
- ✅ Quand une version stable est prête
- ✅ Avant de commencer une grosse modification

**Comment créer un tag :**

```batch
# Après avoir tout commit et push
sync-tag.bat

# Exemples de versions :
# v1.0.0 - Version initiale
# v1.0.1 - Bug fix
# v1.1.0 - Nouvelle fonctionnalité
# v2.0.0 - Grosse mise à jour
```

**Voir toutes les versions :**

```batch
sync-tags-list.bat
```

**Revenir à une ancienne version :**

```batch
git checkout v1.0.0
# Attention : Cela met le code en "detached HEAD"
# Pour revenir à la version actuelle :
git checkout main
```

---

## 🌐 Développement Web

### Test rapide dans le navigateur

```batch
# Ouvre directement le fichier
www/index.html
```

**Ou ouvre :**
```
https://expense-tracker-b086e.web.app
```

---

### Déployer l'app web

```batch
cd C:\Users\[TON_USER]\Documents\GitHub\PersonalFinances

# 1. Push sur GitHub (déploiement automatique GitHub Pages)
sync-push.bat

# 2. Déployer sur Firebase Hosting
firebase deploy --only hosting

# Attendre 1-2 minutes puis vérifier :
# https://expense-tracker-b086e.web.app
```

---

## 📱 Développement Mobile

### Configuration initiale (une seule fois)

#### 1. Créer un émulateur Android

**Dans Android Studio :**

1. **Device Manager** (icône 📱)
2. **Create Device**
3. **Choix recommandé :**
   - **Appareil** : Pixel 4a
   - **API Level** : 30 (Android 11)
   - **RAM** : 2048 MB
   - **Graphics** : Software
4. **Finish**

#### 2. Configurer Live Reload (OPTIONNEL mais recommandé)

**Trouver ton IP :**

```batch
ipconfig
# Cherche : Adresse IPv4 (ex: 192.168.1.100)
```

**Modifier `capacitor.config.json` :**

```json
{
  "appId": "com.victor.personalfinances",
  "appName": "Budget",
  "webDir": "www",
  "bundledWebRuntime": false,
  "server": {
    "hostname": "expense-tracker-b086e.firebaseapp.com",
    "androidScheme": "https",
    "url": "http://192.168.1.XXX:8080",  // ← TON IP
    "cleartext": true
  }
}
```

---

### Développement avec Live Reload (modifications instantanées)

**Terminal 1 - Serveur local :**

```batch
cd C:\Users\[TON_USER]\Documents\GitHub\PersonalFinances\www
python -m http.server 8080
```

**Laisse cette fenêtre ouverte !**

---

**Terminal 2 - Lancer l'app :**

```batch
cd C:\Users\[TON_USER]\Documents\GitHub\PersonalFinances
npx cap run android
```

---

**Développer :**

1. Modifie le code dans `www/` avec VS Code
2. Sauvegarde (Ctrl+S)
3. ✨ Les changements apparaissent **INSTANTANÉMENT** dans l'émulateur !

---

### Développement sans Live Reload (classique)

```batch
# 1. Modifier le code dans www/

# 2. Sync vers Android
npx cap sync android

# 3. Ouvrir Android Studio
npx cap open android

# 4. Cliquer sur Run ▶️
```

---

### Test sur téléphone physique (RECOMMANDÉ)

**Avantages :**
- ⚡ Beaucoup plus rapide que l'émulateur
- ✅ Vraies performances
- ✅ Pas de charge sur le PC

**Configuration (une seule fois) :**

1. **Sur le téléphone :**
   - Paramètres → À propos du téléphone
   - Tape **7 fois** sur "Numéro de build"
   - Retour → Options pour les développeurs
   - Active **"Débogage USB"**

2. **Branche le téléphone au PC (USB)**

3. **Sur le téléphone :**
   - "Autoriser le débogage USB" → **Oui**

4. **Dans Android Studio :**
   - Run ▶️ → Choisis ton téléphone dans la liste

---

## 🚀 Publication sur Google Play

### Préparation

#### 1. Désactiver Live Reload

**Dans `capacitor.config.json`, commente ces lignes :**

```json
{
  "server": {
    "hostname": "expense-tracker-b086e.firebaseapp.com",
    "androidScheme": "https"
    // "url": "http://192.168.1.XXX:8080",  ← Commente
    // "cleartext": true                     ← Commente
  }
}
```

---

#### 2. Incrémenter la version

**Fichier : `android/app/build.gradle`**

```gradle
defaultConfig {
    versionCode 2          // ← Augmente de 1 (1 → 2 → 3...)
    versionName "1.1.0"    // ← Version visible (1.0.0 → 1.1.0)
}
```

---

#### 3. Créer un tag Git

```batch
sync-tag.bat
# Nom : v1.1.0
# Description : "Ajout pull-to-refresh + fix bugs"
```

---

### Build de l'APK/AAB

**Dans Android Studio :**

1. **Build** → **Generate Signed Bundle / APK...**
2. **Android App Bundle** (.aab)
3. **Next**
4. **Sélectionne ton Keystore** :
   - `C:\Users\[USER]\Documents\PersonalFinances-keystore.jks`
   - Entre le mot de passe
5. **Build Variants** : release
6. **Finish**

**Fichier créé :** `android/app/release/app-release.aab`

---

### Upload sur Google Play Console

1. **Va sur :** https://play.google.com/console
2. **Personal Budget Tracker** → **Tests internes**
3. **Créer une version**
4. **Upload** le fichier `.aab`
5. **Release notes** : Description des changements
6. **Enregistrer** → **Publier**

**Les testeurs reçoivent la mise à jour automatiquement !**

---

### Checklist complète

- [ ] Live Reload désactivé dans `capacitor.config.json`
- [ ] `versionCode` incrémenté dans `build.gradle`
- [ ] `versionName` mis à jour dans `build.gradle`
- [ ] Tag Git créé (`sync-tag.bat`)
- [ ] AAB généré et signé dans Android Studio
- [ ] Tout commit et push sur GitHub (`sync-push.bat`)
- [ ] AAB uploadé sur Google Play Console
- [ ] Release notes rédigées
- [ ] Publication effectuée

---

## 🛠️ Scripts disponibles

### `sync-status.bat`

Voir l'état actuel du repo.

```batch
sync-status.bat
```

**Résultats possibles :**
- ✅ Tout est synchronisé
- ⚠️ Tu es en retard (pull requis)
- ⚠️ Tu as des changements non pushés

---

### `sync-pull.bat`

Récupérer les changements depuis GitHub.

```batch
sync-pull.bat
```

**Fait automatiquement :**
1. `git pull origin main`
2. `npm install` (dépendances)
3. `npx cap sync android` (sync Capacitor)

---

### `sync-push.bat`

Envoyer les changements vers GitHub.

```batch
sync-push.bat
```

**Fait automatiquement :**
1. Vérifie si tu es à jour (sinon bloque)
2. `git add .`
3. `git commit -m "ton message"`
4. `git push origin main`

---

### `sync-tag.bat`

Créer une version stable (tag).

```batch
sync-tag.bat
```

**Demande :**
- Nom du tag (ex: v1.1.0)
- Description (ex: "Ajout pull-to-refresh")

**Fait automatiquement :**
1. Crée le tag localement
2. Push le tag sur GitHub

---

### `sync-tags-list.bat`

Voir toutes les versions.

```batch
sync-tags-list.bat
```

**Affiche :**
- Liste de tous les tags
- Description de chaque version

---

## 🆘 Troubleshooting

### Problème : "Your branch is behind"

**Solution :**

```batch
sync-pull.bat
```

---

### Problème : Conflit Git lors du pull

**Message :**
```
CONFLICT (content): Merge conflict in www/index.html
```

**Solution :**

1. Ouvre le fichier en conflit dans VS Code
2. Choisis la bonne version (ou combine)
3. Supprime les marqueurs `<<<<<<<`, `=======`, `>>>>>>>`
4. Sauvegarde
5. ```batch
   git add .
   git commit -m "Résolution conflit"
   git push origin main
   ```

---

### Problème : L'émulateur est trop lent

**Solutions :**

1. **Créer un émulateur plus léger :**
   - Pixel 4a + API 30 + 2048 MB RAM

2. **Utiliser un téléphone physique :**
   - Beaucoup plus rapide !

3. **Augmenter la RAM de l'émulateur :**
   - Device Manager → Edit → RAM : 4096 MB

---

### Problème : Live Reload ne fonctionne pas

**Vérifications :**

1. **Serveur Python tourne ?**
   ```batch
   python -m http.server 8080
   ```

2. **Bonne IP dans `capacitor.config.json` ?**
   ```batch
   ipconfig
   # Vérifie ton IPv4
   ```

3. **PC et téléphone/émulateur sur le même réseau Wi-Fi ?**

4. **Firewall bloque le port 8080 ?**
   - Désactive temporairement le firewall pour tester

---

### Problème : "Error: Not in a Firebase app directory"

**Solution :**

```batch
# Assure-toi d'être dans le bon dossier
cd C:\Users\[TON_USER]\Documents\GitHub\PersonalFinances
firebase deploy --only hosting
```

Ou depuis le dossier `firebase/` :

```batch
cd firebase
firebase deploy --only functions
```

---

### Problème : Android Studio ne trouve pas le projet

**Solution :**

```batch
# Re-sync Capacitor
npx cap sync android

# Puis ouvre le dossier android/ directement
# File → Open → C:\...\PersonalFinances\android
```

---

### Problème : Keystore introuvable lors du build

**Solution :**

1. **Retrouve ton Keystore :**
   - Cherche `*.jks` ou `*.keystore` sur ton PC

2. **Copie-le sur l'autre PC si besoin :**
   - Depuis laptop vers PC fixe ou inversement

3. **Sauvegarde-le dans un endroit sûr :**
   - USB, Cloud crypté, coffre-fort physique
   - ⚠️ Sans lui, tu ne pourras JAMAIS mettre à jour ton app !

---

## 📞 Contacts et ressources

### URLs importantes

- **App Web (Firebase)** : https://expense-tracker-b086e.web.app
- **App Web (GitHub Pages)** : https://victorburtman.github.io/PersonalFinances/www/
- **GitHub Repo** : https://github.com/VictorBurtman/PersonalFinances
- **Google Play Console** : https://play.google.com/console
- **Firebase Console** : https://console.firebase.google.com/project/expense-tracker-b086e

---

### Versions de l'app

**Nom sur Google Play :** Personal Budget Tracker  
**Nom sous l'icône :** Budget  
**Package ID :** com.victor.personalfinances

---

### Commandes utiles

```batch
# Voir la version Git actuelle
git log --oneline -5

# Voir tous les tags
git tag -l

# Revenir à une version
git checkout v1.0.0

# Revenir à la version actuelle
git checkout main

# Voir les fichiers modifiés
git status

# Voir l'historique des modifications d'un fichier
git log --follow www/index.html
```

---

## 🎯 Workflow type d'une journée

### Matin (arrivée sur PC)

```batch
cd C:\Users\[USER]\Documents\GitHub\PersonalFinances
sync-pull.bat
sync-status.bat
```

---

### Développement web

```batch
# Modifie www/ dans VS Code
# Teste dans le navigateur (ouvre www/index.html)
sync-push.bat
firebase deploy --only hosting
```

---

### Développement mobile

```batch
# Terminal 1
cd www
python -m http.server 8080

# Terminal 2
cd ..
npx cap run android

# Modifie dans VS Code
# Les changements apparaissent instantanément !
```

---

### Fin de journée (départ)

```batch
# Ctrl+C pour arrêter le serveur Python

sync-push.bat
# Message : "Ajout feature X + fix bug Y"
```

---

### Publication d'une version (tous les 1-2 mois)

```batch
# 1. Désactiver Live Reload
# Édite capacitor.config.json

# 2. Incrémenter version
# Édite android/app/build.gradle

# 3. Tag
sync-tag.bat

# 4. Build
npx cap sync android
npx cap open android
# Build → Generate Signed Bundle

# 5. Publier
# Upload AAB sur Google Play Console

# 6. Sauvegarder
sync-push.bat
```

---

## 📚 Ressources d'apprentissage

### Git
- **Concepts de base :** https://git-scm.com/book/fr/v2
- **Visualiser Git :** https://learngitbranching.js.org/?locale=fr_FR

### Capacitor
- **Documentation :** https://capacitorjs.com/docs
- **Live Reload :** https://capacitorjs.com/docs/guides/live-reload

### Android
- **Android Studio :** https://developer.android.com/studio
- **Émulateurs :** https://developer.android.com/studio/run/managing-avds

### Firebase
- **Documentation :** https://firebase.google.com/docs
- **Cloud Functions :** https://firebase.google.com/docs/functions

---

## ✅ Checklist de démarrage projet

**Nouveau PC / Réinstallation :**

- [ ] Git installé
- [ ] Node.js installé (v22+)
- [ ] Python installé (pour serveur local)
- [ ] Android Studio installé
- [ ] Firebase CLI installé (`npm install -g firebase-tools`)
- [ ] Capacitor CLI installé (via `npm install` dans le projet)
- [ ] Repo cloné depuis GitHub
- [ ] Keystore copié et sauvegardé
- [ ] Émulateur Android créé (Pixel 4a + API 30)
- [ ] Firebase login (`firebase login`)
- [ ] Test de `sync-pull.bat`
- [ ] Test de `sync-push.bat`
- [ ] Test de l'app dans l'émulateur

---

**Dernière mise à jour :** 2 décembre 2025  
**Version du guide :** 1.0
