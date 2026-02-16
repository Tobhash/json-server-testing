# PowerShell script to set up JSON Server with a copy of the database
# Skopiuj db.json do db-copy.json i uruchom json-server

Write-Host "Starting JSON Server setup..."

# Sprawdź czy plik db.json istnieje
if (Test-Path "db.json") {
    Write-Host "Found db.json file" -ForegroundColor Green
    
    # Skopiuj db.json do db-copy.json
    Copy-Item "db.json" "db-copy.json" -Force
    Write-Host "Copied db.json to db-copy.json" -ForegroundColor Green
    
    # Uruchom json-server na porcie 3001
    Write-Host "Starting json-server on port 3001..." -ForegroundColor Yellow
    Write-Host "Server will use db-copy.json as database" -ForegroundColor Yellow
    Write-Host "Press Ctrl+C to stop the server" -ForegroundColor Cyan
    
    npx json-server -p 3001 db-copy.json
} else {
    Write-Error "Error: db.json file not found!"
    Write-Host "Make sure you're in the correct directory with db.json file" -ForegroundColor Red
    exit 1
}
