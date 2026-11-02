# Force Push Script for FAT2FIT-APP

Write-Host "Clearing cached credentials..." -ForegroundColor Yellow
git credential-manager erase https://github.com 2>$null

Write-Host "`nConfiguring git user..." -ForegroundColor Yellow
git config user.email "msanthoshkum@gmail.com"
git config user.name "SANTHOSH-M-03"

Write-Host "`nCurrent commit status:" -ForegroundColor Cyan
git log --oneline -1

Write-Host "`nAttempting to push to GitHub..." -ForegroundColor Yellow
Write-Host "You will be prompted for credentials:" -ForegroundColor Green
Write-Host "  Username: SANTHOSH-M-03" -ForegroundColor White
Write-Host "  Password: Use your GitHub Personal Access Token" -ForegroundColor White
Write-Host "`nGet token from: https://github.com/settings/tokens" -ForegroundColor Cyan

git push -f origin main

if ($LASTEXITCODE -eq 0) {
    Write-Host "`n✓ Successfully pushed to GitHub!" -ForegroundColor Green
} else {
    Write-Host "`n✗ Push failed. Please check your credentials." -ForegroundColor Red
}
