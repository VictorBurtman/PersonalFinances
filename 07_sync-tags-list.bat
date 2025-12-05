@echo off
echo ====================================
echo  LISTE DES TAGS (VERSIONS)
echo ====================================
echo.

echo [1/2] Recuperation des tags depuis GitHub...
git fetch --tags

echo.
echo [2/2] Liste des versions:
echo ------------------------------------
git tag -l -n1
if %errorlevel% neq 0 (
    echo  (Aucun tag pour l'instant)
)

echo.
echo ====================================
echo  Pour revenir a une version:
echo  git checkout [nom-du-tag]
echo  Exemple: git checkout v1.0.0
echo.
echo  Pour revenir a la version actuelle:
echo  git checkout main
echo ====================================
pause