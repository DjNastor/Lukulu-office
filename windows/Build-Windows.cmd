@echo off
setlocal
cd /d "%~dp0.."
call npm ci
if errorlevel 1 exit /b 1
call npm test
if errorlevel 1 exit /b 1
call npm run build-win
if errorlevel 1 exit /b 1
echo Installers are in the installers folder.
pause
