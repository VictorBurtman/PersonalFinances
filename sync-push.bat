@echo off
echo ====================================
echo  Synchronisation - PUSH
echo ====================================
echo.

echo [0/5] Verification remote...
git fetch origin
git status | findstr /C:"Your branch is behind" >nul
if %errorlevel% equ 0 (
    echo.
    echo ╔════════════════════════════════════════╗
    echo ║  ATTENTION - OUBLI DE PULL DETECTE!   ║
    echo ╚════════════════════════════════════════╝
    echo.
    echo Tu dois PULL avant de PUSH!
    echo Tape "sync-pull.bat" d'abord.
    echo.
    pause
    exit /b 1
)

echo [1/5] Git status...
git status
echo.

set /p commit_msg="Message du commit: "
if "%commit_msg%"=="" (
    echo ERREUR: Message vide!
    pause
    exit /b 1
)

echo.
echo [2/5] Git add...
git add .

echo.
echo [3/5] Git commit...
git commit -m "%commit_msg%"
if %errorlevel% neq 0 (
    echo Rien a committer (aucun changement)
    pause
    exit /b 0
)

echo.
echo [4/5] Git push...
git push origin main
if %errorlevel% neq 0 (
    echo.
    echo ╔════════════════════════════════════════╗
    echo ║  ERREUR - PUSH REFUSE PAR GITHUB!     ║
    echo ╚════════════════════════════════════════╝
    echo.
    echo Raisons possibles:
    echo  1. Tu as oublie de PULL (tape sync-pull.bat)
    echo  2. Quelqu'un d'autre a push entre temps
    echo.
    pause
    exit /b 1
)

echo.
echo [5/5] Termine!
echo ====================================
echo  Changements synchronises!
echo ====================================
pause
```

---

## **🔍 Ce que fait cette version améliorée :**

1. **Avant tout** : `git fetch origin` → récupère l'état du remote SANS modifier ton code local
2. **Vérifie si tu es en retard** : Si GitHub a des commits que tu n'as pas, il te **bloque immédiatement**
3. **Message d'alerte clair** : Te dit explicitement de lancer `sync-pull.bat` d'abord
4. **Double protection** : Même si la vérification échoue, Git lui-même refusera le push

---

## **📋 Exemple d'utilisation :**

### **Scénario problématique :**

1. **Sur le laptop** → Tu push un changement ✅
2. **Sur le PC fixe** → Tu oublies de pull et tu modifies du code ❌
3. **Tu lances `sync-push.bat`** sur le PC fixe

**Résultat avec le nouveau script :**
```
====================================
 Synchronisation - PUSH
====================================

[0/5] Verification remote...

╔════════════════════════════════════════╗
║  ATTENTION - OUBLI DE PULL DETECTE!   ║
╚════════════════════════════════════════╝

Tu dois PULL avant de PUSH!
Tape "sync-pull.bat" d'abord.

Appuyez sur une touche pour continuer...