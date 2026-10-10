@echo off
title AQUA SPHERE Diving Club Launcher
echo ========================================================
echo   Starting AQUA SPHERE Underwater Experience...
echo ========================================================
echo.
start "" "http://localhost:5173"
npm run preview -- --port 5173 --host
pause
