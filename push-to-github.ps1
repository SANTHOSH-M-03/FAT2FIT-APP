#!/usr/bin/env pwsh
# Push to GitHub Script for FAT2FIT-APP

Write-Host "`n========================================" -ForegroundColor Cyan
Write-Host "  FAT2FIT-APP GitHub Push Helper" -ForegroundColor Cyan
Write-Host "========================================`n" -ForegroundColor Cyan

# Step 1: Clear Windows Credential Manager
Write-Host "[1/5] Clearing cached GitHub credentials..." -ForegroundColor Yellow
try {
    cmdkey /delete:git:https://github.com 2>$null
    Write-Host "  ✓ Credentials cleared" -ForegroundColor Green
} catch {
    Write-Host "  - No cached credentials found" -ForegroundColor Gray
}

# Step 2: Configure Git
Write-Host "`n[2/5] Configuring Git user..." -ForegroundColor Yellow
git config user.email "msanthoshkum@gmail.com"
git config user.name "SANTHOSH-M-03"
Write-Host "  ✓ User configured as: SANTHOSH-M-03 <msanthoshkum@gmail.com>" -ForegroundColor Green

# Step 3: Show current status
Write-Host "`n[3/5] Current commit:" -ForegroundColor Yellow
git log --oneline -1
Write-Host "  ✓ Ready to push" -ForegroundColor Green

# Step 4: Instructions
Write-Host "`n[4/5] Authentication Required:" -ForegroundColor Yellow
Write-Host "  GitHub will ask for credentials. Use:" -ForegroundColor White
Write-Host "    Username: " -NoNewline -ForegroundColor White
Write-Host "SANTHOSH-M-03" -ForegroundColor Cyan
Write-Host "    Password: " -NoNewline -ForegroundColor White
Write-Host "[Your Personal Access Token]" -ForegroundColor Cyan
Write-Host "`n  Don't have a token? Generate one at:" -ForegroundColor White
Write-Host "  https://github.com/settings/tokens" -ForegroundColor Blue
Write-Host "    1. Click 'Generate new token (classic)'" -ForegroundColor Gray
Write-Host "    2. Name it 'FAT2FIT-APP'" -ForegroundColor Gray
Write-Host "    3. Check 'repo' scope" -ForegroundColor Gray
Write-Host "    4. Generate and copy the token" -ForegroundColor Gray

Write-Host "`n[5/5] Pushing to GitHub..." -ForegroundColor Yellow
Write-Host "========================================`n" -ForegroundColor Cyan

# Step 5: Push
git push origin main

if ($LASTEXITCODE -eq 0) {
    Write-Host "`n========================================" -ForegroundColor Green
    Write-Host "  ✓ Successfully pushed to GitHub!" -ForegroundColor Green
    Write-Host "========================================`n" -ForegroundColor Green
    Write-Host "Your changes are now live at:" -ForegroundColor White
    Write-Host "https://github.com/SANTHOSH-M-03/FAT2FIT-APP`n" -ForegroundColor Blue
} else {
    Write-Host "`n========================================" -ForegroundColor Red
    Write-Host "  ✗ Push failed" -ForegroundColor Red
    Write-Host "========================================`n" -ForegroundColor Red
    Write-Host "Troubleshooting:" -ForegroundColor Yellow
    Write-Host "  1. Make sure you're using a Personal Access Token (not password)" -ForegroundColor White
    Write-Host "  2. Ensure the token has 'repo' permissions" -ForegroundColor White
    Write-Host "  3. Verify you're the owner/collaborator of the repository`n" -ForegroundColor White
}
