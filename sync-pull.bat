@echo off
echo ====================================
echo  Synchronisation - PULL
echo ====================================
echo.

echo [1/4] Git pull...
git pull origin main
if %errorlevel% neq 0 (
    echo ERREUR: Git pull failed!
    pause
    exit /b 1
)

echo.
echo [2/4] Installation des dependances...
call npm install

echo.
echo [3/4] Capacitor sync...
call npx cap sync android

echo.
echo [4/4] Termine!
echo ====================================
echo  Pret a travailler!
echo ====================================
pause