@echo off
echo ====================================
echo  Synchronisation - PULL
echo ====================================
echo.

echo [0/5] Nettoyage cache Firebase...
if exist .firebase (
    rmdir /s /q .firebase
    echo Cache Firebase supprime.
)

echo.
echo [1/5] Verification modifications locales...
git status --short | findstr "M " >nul
if %errorlevel% equ 0 (
    echo.
    echo [!] ATTENTION: Tu as des modifications locales!
    echo.
    git status --short
    echo.
    set /p choice="Ecraser avec la version GitHub? (o/n): "
    if /i "%choice%"=="o" (
        git reset --hard origin/main
        echo Modifications locales ecrasees.
    ) else (
        echo Operation annulee. Commit ou stash tes modifications d'abord.
        pause
        exit /b 1
    )
)

echo.
echo [2/5] Git pull...
git pull origin main
if %errorlevel% neq 0 (
    echo ERREUR: Git pull failed!
    pause
    exit /b 1
)

echo.
echo [3/5] Installation des dependances...
call npm install

echo.
echo [4/5] Capacitor sync...
call npx cap sync android

echo.
echo [5/5] Termine!
echo ====================================
echo  Pret a travailler!
echo ====================================
pause
```

---

## **💾 Ajout de `.firebase/` au `.gitignore`**

**Pour éviter ce problème avec le cache Firebase à l'avenir :**

**Ajoute cette ligne dans `.gitignore` (à la racine) :**
```
# Firebase cache
.firebase/