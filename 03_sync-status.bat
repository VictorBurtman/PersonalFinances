@echo off
echo ====================================
echo  STATUS DE SYNCHRONISATION
echo ====================================
echo.

echo [1/3] Recuperation etat remote...
git fetch origin

echo.
echo [2/3] Etat local vs remote:
echo ------------------------------------

git status | findstr /C:"Your branch is up to date" >nul
if %errorlevel% equ 0 (
    echo  [OK] Ton repo est A JOUR
    set STATUS_OK=1
) else (
    git status | findstr /C:"Your branch is behind" >nul
    if %errorlevel% equ 0 (
        echo  [!] Tu es EN RETARD - PULL requis!
        set STATUS_OK=0
    ) else (
        git status | findstr /C:"Your branch is ahead" >nul
        if %errorlevel% equ 0 (
            echo  [!] Tu as des changements NON POUSSES - PUSH requis!
            set STATUS_OK=0
        ) else (
            echo  [!] Etat divergent - Conflits possibles
            set STATUS_OK=0
        )
    )
)

echo.
echo [3/3] Fichiers modifies localement:
echo ------------------------------------
git status --short
if %errorlevel% equ 0 (
    echo  [OK] Aucun fichier modifie
) else (
    echo  [!] Des fichiers ont ete modifies
)

echo.
echo ====================================
echo  RESUME:
echo ====================================

if "%STATUS_OK%"=="1" (
    echo  ✓ Tout est synchronise
    echo  ✓ Tu peux travailler tranquillement
) else (
    echo  ⚠ Action requise:
    git status | findstr /C:"Your branch is behind" >nul
    if %errorlevel% equ 0 (
        echo    → Lance sync-pull.bat AVANT de travailler
    )
    git status | findstr /C:"Your branch is ahead" >nul
    if %errorlevel% equ 0 (
        echo    → Lance sync-push.bat pour envoyer tes changements
    )
)

echo ====================================
echo.
pause
```

---

## **🎯 À quoi ça sert ?**

Ce script te donne un **tableau de bord complet** de l'état de ton repo :

1. ✅ **Es-tu à jour avec GitHub ?**
2. ✅ **As-tu oublié de pull ?**
3. ✅ **As-tu des changements non pushés ?**
4. ✅ **Quels fichiers ont été modifiés localement ?**

---

## **📋 Exemples de résultats :**

### **Cas 1 : Tout est OK ✅**
```
====================================
 STATUS DE SYNCHRONISATION
====================================

[1/3] Recuperation etat remote...
[2/3] Etat local vs remote:
------------------------------------
 [OK] Ton repo est A JOUR

[3/3] Fichiers modifies localement:
------------------------------------
 [OK] Aucun fichier modifie

====================================
 RESUME:
====================================
 ✓ Tout est synchronise
 ✓ Tu peux travailler tranquillement
====================================
```

---

### **Cas 2 : Tu as oublié de pull ⚠️**
```
====================================
 STATUS DE SYNCHRONISATION
====================================

[1/3] Recuperation etat remote...
[2/3] Etat local vs remote:
------------------------------------
 [!] Tu es EN RETARD - PULL requis!

[3/3] Fichiers modifies localement:
------------------------------------
 M www/index.html
 M www/js/auth.js

====================================
 RESUME:
====================================
 ⚠ Action requise:
   → Lance sync-pull.bat AVANT de travailler
====================================
```

---

### **Cas 3 : Tu as des changements à push 📤**
```
====================================
 STATUS DE SYNCHRONISATION
====================================

[1/3] Recuperation etat remote...
[2/3] Etat local vs remote:
------------------------------------
 [!] Tu as des changements NON POUSSES - PUSH requis!

[3/3] Fichiers modifies localement:
------------------------------------
 M www/css/styles.css
 A www/js/new-feature.js

====================================
 RESUME:
====================================
 ⚠ Action requise:
   → Lance sync-push.bat pour envoyer tes changements
====================================
```

---

## **📁 Tes 3 scripts maintenant :**
```
PersonalFinances/
├── sync-status.bat  ← Vérifier l'état
├── sync-pull.bat    ← AVANT de travailler
└── sync-push.bat    ← APRÈS avoir travaillé