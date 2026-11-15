@echo off
title Push GlobalWorkWire to GitHub
cd /d "C:\Users\hp\Downloads\GlobalWorkWire"
echo ===================================================
echo Pushing GlobalWorkWire to GitHub...
echo Target: https://github.com/tari125/global-work-wire.git
echo ===================================================
git remote set-url origin https://github.com/tari125/global-work-wire.git
git branch -M main
git push -u origin main
echo.
if %ERRORLEVEL% EQU 0 (
    echo ===================================================
    echo Successfully pushed GlobalWorkWire to GitHub!
    echo ===================================================
) else (
    echo Push encountered an issue. Please verify your connection or sign-in.
)
echo.
pause
