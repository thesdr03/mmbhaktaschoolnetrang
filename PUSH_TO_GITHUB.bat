@echo off
REM Quick reference for pushing to GitHub

echo.
echo ============================================================
echo    Smt. M.M. Bhakta High School - GitHub Setup Guide
echo ============================================================
echo.
echo STEP 1: Create Repository on GitHub
echo -----
echo   1. Visit https://github.com/new
echo   2. Repository name: school-website
echo   3. Description: Official website of Smt. M.M. Bhakta High School
echo   4. Make it PUBLIC
echo   5. Click "Create repository"
echo.
echo STEP 2: Copy Your Repository URL
echo -----
echo   From GitHub, copy your HTTPS URL:
echo   https://github.com/YOUR-USERNAME/school-website.git
echo.
echo STEP 3: Push Your Code (Run in PowerShell)
echo -----
echo.
echo   Replace YOUR-USERNAME with your actual GitHub username:
echo.
echo   git remote add origin https://github.com/thesdr03/mmbhaktaschoolnetrang.git
echo   git push -u origin main
echo.
echo STEP 4: Authentication
echo -----
echo   - GitHub may ask for a password
echo   - Use a Personal Access Token instead:
echo     1. Go to GitHub Settings
echo     2. Developer Settings → Personal Access Tokens
echo     3. Click "Generate new token"
echo     4. Select "repo" scope
echo     5. Copy the token and paste when prompted
echo.
echo STEP 5: Verify
echo -----
echo   Refresh your GitHub repository page to see your files!
echo.
echo NEXT UPDATES:
echo   git add .
echo   git commit -m "Your message"
echo   git push
echo.
echo ============================================================
pause
