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
    echo [!] Rien a committer (aucun changement local)
    echo.
    
    REM Verifier s'il y a des commits en attente de push
    git status | findstr /C:"Your branch is ahead" >nul
    if %errorlevel% equ 0 (
        echo [!] MAIS il y a des commits en attente de push!
        echo [!] On continue pour les envoyer sur GitHub...
        echo.
        goto push
    ) else (
        echo [!] Aucun changement a envoyer.
        pause
        exit /b 0
    )
)

:push
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