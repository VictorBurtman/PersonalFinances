@echo off
echo ====================================
echo  CREATION DE TAG (VERSION)
echo ====================================
echo.

echo Ce script cree un tag Git pour marquer une version stable
echo (ex: v1.0.0, v1.1.0, v2.0.0)
echo.

REM Verification que tout est commit
git status --short >nul 2>&1
if %errorlevel% neq 0 (
    echo [!] ATTENTION: Tu as des modifications non commitees!
    echo.
    git status --short
    echo.
    set /p continue="Veux-tu continuer quand meme? (o/n): "
    if /i not "%continue%"=="o" (
        echo Operation annulee.
        pause
        exit /b 1
    )
)

echo.
echo [1/4] Liste des tags existants:
echo ------------------------------------
git tag -l
if %errorlevel% neq 0 (
    echo  (Aucun tag pour l'instant)
)

echo.
echo [2/4] Informations de la nouvelle version:
echo ------------------------------------
set /p tag_name="Nom du tag (ex: v1.0.0): "
if "%tag_name%"=="" (
    echo ERREUR: Nom de tag vide!
    pause
    exit /b 1
)

REM Verification que le tag n'existe pas deja
git tag -l | findstr /X "%tag_name%" >nul
if %errorlevel% equ 0 (
    echo.
    echo ERREUR: Le tag %tag_name% existe deja!
    echo Choisis un autre nom.
    pause
    exit /b 1
)

set /p tag_message="Description de la version: "
if "%tag_message%"=="" (
    set tag_message="Version %tag_name%"
)

echo.
echo [3/4] Creation du tag...
git tag -a %tag_name% -m "%tag_message%"
if %errorlevel% neq 0 (
    echo ERREUR: Impossible de creer le tag!
    pause
    exit /b 1
)

echo.
echo [4/4] Push du tag vers GitHub...
git push origin %tag_name%
if %errorlevel% neq 0 (
    echo ERREUR: Impossible de pusher le tag!
    echo Le tag existe localement mais pas sur GitHub.
    pause
    exit /b 1
)

echo.
echo ====================================
echo  TAG CREE AVEC SUCCES!
echo ====================================
echo.
echo Tag: %tag_name%
echo Description: %tag_message%
echo.
echo IMPORTANT:
echo  - N'oublie pas d'incrementer versionCode dans build.gradle
echo  - Rebuild l'AAB pour Android
echo  - Publie sur Google Play Console
echo.
echo ====================================
pause