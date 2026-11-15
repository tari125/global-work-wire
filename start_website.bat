@echo off
title GlobalWorkWire Live Preview
cd /d "C:\Users\hp\Downloads\GlobalWorkWire"
echo ====================================================
echo Starting GlobalWorkWire on http://localhost:3000 ...
echo ====================================================
start "" http://localhost:3000
npm.cmd run dev
pause
