@echo off
echo ====================================
echo  SYNCHRONISATION + DEPLOY FIREBASE
echo ====================================
echo.

REM ========================================
REM ÉTAPE 1 : VÉRIFICATION REMOTE
REM ========================================
echo [1/7] Verification remote...
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

REM ========================================
REM ÉTAPE 2 : GIT STATUS
REM ========================================
echo.
echo [2/7] Git status...
git status
echo.

set /p commit_msg="Message du commit: "
if "%commit_msg%"=="" (
    echo ERREUR: Message vide!
    pause
    exit /b 1
)

REM ========================================
REM ÉTAPE 3 : GIT ADD
REM ========================================
echo.
echo [3/7] Git add...
git add .

REM ========================================
REM ÉTAPE 4 : GIT COMMIT
REM ========================================
echo.
echo [4/7] Git commit...
git commit -m "%commit_msg%"
if %errorlevel% neq 0 (
    echo [!] Rien a committer (aucun changement local)
    echo.
    
    REM Vérifier s'il y a des commits en attente
    git status | findstr /C:"Your branch is ahead" >nul
    if %errorlevel% equ 0 (
        echo [!] MAIS il y a des commits en attente de push!
        echo [!] On continue pour les envoyer...
        echo.
        goto push
    ) else (
        echo [!] Aucun changement a envoyer.
        echo.
        set /p skip_deploy="Veux-tu quand meme deployer sur Firebase? (o/n): "
        if /i "%skip_deploy%"=="o" goto deploy
        pause
        exit /b 0
    )
)

REM ========================================
REM ÉTAPE 5 : GIT PUSH
REM ========================================
:push
echo.
echo [5/7] Git push...
git push origin main
if %errorlevel% neq 0 (
    echo.
    echo ╔════════════════════════════════════════╗
    echo ║  ERREUR - PUSH REFUSE PAR GITHUB!     ║
    echo ╚════════════════════════════════════════╝
    echo.
    echo Le deploy Firebase est ANNULE pour securite.
    echo Resous le probleme Git d'abord!
    echo.
    pause
    exit /b 1
)

echo.
echo ✅ Push GitHub reussi!

REM ========================================
REM ÉTAPE 6 : CONFIRMATION DEPLOY
REM ========================================
echo.
echo [6/7] Preparation deploy Firebase...
echo.
echo ⚠️  ATTENTION: Tu vas deployer en PRODUCTION!
echo.
set /p confirm_deploy="Confirmer le deploy Firebase? (o/n): "
if /i not "%confirm_deploy%"=="o" (
    echo.
    echo ❌ Deploy Firebase annule.
    echo ✅ Mais ton code est push sur GitHub!
    echo.
    pause
    exit /b 0
)

REM ========================================
REM ÉTAPE 7 : FIREBASE DEPLOY
REM ========================================
:deploy
echo.
echo [7/7] Deploiement Firebase Hosting...
firebase deploy --only hosting

if %errorlevel% neq 0 (
    echo.
    echo ╔════════════════════════════════════════╗
    echo ║  ERREUR - DEPLOY FIREBASE ECHOUE!     ║
    echo ╚════════════════════════════════════════╝
    echo.
    echo ⚠️  Ton code est push sur GitHub mais PAS deploye!
    echo.
    pause
    exit /b 1
)

REM ========================================
REM SUCCÈS !
REM ========================================
echo.
echo ====================================
echo  ✅ SUCCÈS COMPLET!
echo ====================================
echo.
echo ✅ Code push sur GitHub
echo ✅ App deployee sur Firebase
echo.
echo 🌐 App disponible sur:
echo https://expense-tracker-b086e.web.app
echo.
pause