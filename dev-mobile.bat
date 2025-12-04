@echo off
echo ====================================
echo  DEV MOBILE - ANDROID EMULATOR
echo ====================================
echo.

REM Verification qu'on est dans le bon dossier
if not exist "www\" (
    echo ERREUR: Dossier www/ introuvable!
    echo Assure-toi d'etre dans le dossier PersonalFinances
    pause
    exit /b 1
)

echo [1/4] Verification de la configuration...
echo.

REM Verification que Live Reload est active dans capacitor.config.json
findstr /C:"\"url\"" capacitor.config.json >nul
if %errorlevel% neq 0 (
    echo [!] Live Reload DESACTIVE
    echo L'app chargera les fichiers depuis Android (pas de rechargement auto)
    echo.
    echo Pour activer le Live Reload, ajoute dans capacitor.config.json :
    echo   "server": {
    echo     "url": "http://TON_IP:8080",
    echo     "cleartext": true
    echo   }
    echo.
    
    set /p continue="Continuer sans Live Reload? (o/n): "
    if /i not "%continue%"=="o" (
        echo Operation annulee.
        pause
        exit /b 0
    )
    
    echo.
    echo [2/4] Synchronisation des fichiers vers Android...
    call npx cap sync android
    
    echo.
    echo [3/4] Lancement de l'emulateur Android...
    call npx cap run android
    
) else (
    echo [OK] Live Reload ACTIVE
    echo.
    
    echo [2/4] Lancement du serveur Python...
    start "Python Server - Port 8080" cmd /k "cd www && python -m http.server 8080"
    echo Serveur Python demarre sur port 8080
    echo.
    
    timeout /t 3 /nobreak >nul
    
    echo [3/4] Synchronisation des fichiers vers Android...
    call npx cap sync android
    
    echo.
    echo [4/4] Lancement de l'emulateur Android...
    call npx cap run android
    
    echo.
    echo IMPORTANT: N'oublie pas de fermer la fenetre du serveur Python!
    echo (Cherche "Python Server - Port 8080" dans la barre des taches)
)

echo.
echo ====================================
echo  Session terminee
echo ====================================
pause