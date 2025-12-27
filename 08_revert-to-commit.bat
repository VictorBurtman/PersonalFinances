@echo off
echo ====================================
echo  RETOUR A UN COMMIT SPECIFIQUE
echo ====================================
echo.

echo [1/4] Affichage des 20 derniers commits...
echo.
git log --oneline -20
echo.
echo ====================================
echo.

set /p commit_hash="Entre le hash du commit (les 7 premiers caracteres): "

if "%commit_hash%"=="" (
    echo ERREUR: Hash vide!
    pause
    exit /b 1
)

echo.
echo ⚠️  ATTENTION: Cette action va:
echo  1. Supprimer tous les changements non commites
echo  2. Revenir au commit: %commit_hash%
echo  3. Les commits APRES ce point seront perdus localement
echo.
set /p confirm="Es-tu sur de vouloir continuer? (o/n): "

if /i not "%confirm%"=="o" (
    echo.
    echo ❌ Operation annulee.
    pause
    exit /b 0
)

echo.
echo [2/4] Reset vers le commit %commit_hash%...
git reset --hard %commit_hash%

if %errorlevel% neq 0 (
    echo ERREUR: Impossible de revenir au commit!
    pause
    exit /b 1
)

echo.
echo [3/4] Nettoyage des fichiers non suivis...
git clean -fd

echo.
echo [4/4] Termine!
echo ====================================
echo  ✅ RETOUR AU COMMIT REUSSI!
echo ====================================
echo.
echo Tu es maintenant sur le commit: %commit_hash%
echo.
echo IMPORTANT:
echo  - Tes fichiers locaux ont ete restaures
echo  - Pour synchroniser avec GitHub:
echo    git push origin main --force
echo.
echo ⚠️  Utilise --force SEULEMENT si tu es sur!
echo.
pause