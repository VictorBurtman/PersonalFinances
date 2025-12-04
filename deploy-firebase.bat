@echo off
echo ====================================
echo  DEPLOY FIREBASE HOSTING
echo ====================================
echo.

echo [1/2] Deploiement sur Firebase Hosting...
firebase deploy --only hosting

if %errorlevel% neq 0 (
    echo.
    echo ╔════════════════════════════════════════╗
    echo ║  ERREUR - DEPLOY FIREBASE ECHOUE!     ║
    echo ╚════════════════════════════════════════╝
    echo.
    echo Verifie que:
    echo  1. Firebase CLI est installe (firebase --version)
    echo  2. Tu es connecte (firebase login)
    echo  3. Le projet est configure correctement
    echo.
    pause
    exit /b 1
)

echo.
echo [2/2] Termine!
echo ====================================
echo  Deploy Firebase OK!
echo ====================================
echo.
echo 🌐 App disponible sur:
echo https://expense-tracker-b086e.web.app
echo.
pause