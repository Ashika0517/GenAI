@echo off
title GenAI Universe
echo ==========================================
echo       GENAI UNIVERSE - STARTUP
echo ==========================================
echo.
start "GenAI Backend" cmd /k "cd /d %~dp0backend && .venv\Scripts\python.exe -m uvicorn app.main:app --reload --port 8000"
timeout /t 3 /nobreak >nul
start "GenAI Frontend" cmd /k "cd /d %~dp0frontend && npm run dev"
echo.
echo Backend: http://localhost:8000
echo Frontend: http://localhost:5173
pause
