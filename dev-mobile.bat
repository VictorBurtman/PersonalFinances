@echo off
echo ====================================
echo  DEV MOBILE - LIVE RELOAD
echo ====================================
echo.

REM Verification qu'on est dans le bon dossier
if not exist "www\" (
    echo ERREUR: Dossier www/ introuvable!
    echo Assure-toi d'etre dans le dossier PersonalFinances
    pause
    exit /b 1
)

echo [1/3] Verification de la configuration...
echo.

REM Verification que Live Reload est active dans capacitor.config.json
findstr /C:"\"url\"" capacitor.config.json >nul
if %errorlevel% neq 0 (
    echo [!] ATTENTION: Live Reload n'est pas active dans capacitor.config.json
    echo.
    echo Pour activer le Live Reload, ajoute dans capacitor.config.json :
    echo.
    echo   "server": {
    echo     "url": "http://TON_IP:8080",
    echo     "cleartext": true
    echo   }
    echo.
    set /p continue="Continuer quand meme sans Live Reload? (o/n): "
    if /i not "%continue%"=="o" (
        exit /b 0
    )
)

echo [2/3] Lancement du serveur Python...
echo.

REM Lancer le serveur Python dans une nouvelle fenetre
start "Python Server - Port 8080" cmd /k "cd www && python -m http.server 8080"

echo Serveur Python demarre sur port 8080
echo (Fenetre separee ouverte)
echo.

REM Attendre que le serveur demarre
timeout /t 3 /nobreak >nul

echo [3/3] Lancement de l'app Android...
echo.

REM Lancer l'app Android
call npx cap run android

echo.
echo ====================================
echo  Session terminee
echo ====================================
echo.
echo IMPORTANT: N'oublie pas de fermer la fenetre du serveur Python!
echo (Cherche "Python Server - Port 8080" dans la barre des taches)
echo.
pause
