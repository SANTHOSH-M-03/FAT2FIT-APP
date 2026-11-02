# CoreFit GitHub Push Script

Write-Host "`n=== CoreFit GitHub Push ===" -ForegroundColor Cyan
Write-Host "This script will help you push your code to GitHub`n"

# Check current status
Write-Host "Checking git status..." -ForegroundColor Yellow
git status

Write-Host "`n--- Push Options ---" -ForegroundColor Green
Write-Host "1. Push with Personal Access Token (Recommended)"
Write-Host "2. Push with GitHub Device Code (Browser)"
Write-Host "3. View current authentication status"
Write-Host "4. Generate token URL"

$choice = Read-Host "`nSelect option (1-4)"

switch ($choice) {
    "1" {
        Write-Host "`nOption 1: Push with Personal Access Token" -ForegroundColor Cyan
        Write-Host "Get your token at: https://github.com/settings/tokens" -ForegroundColor Yellow
        Write-Host "Required scopes: repo (Full control of private repositories)`n"
        
        $token = Read-Host "Enter your GitHub Personal Access Token" -AsSecureString
        $tokenPlain = [Runtime.InteropServices.Marshal]::PtrToStringAuto(
            [Runtime.InteropServices.Marshal]::SecureStringToBSTR($token)
        )
        
        Write-Host "`nPushing to GitHub..." -ForegroundColor Green
        git push -f "https://${tokenPlain}@github.com/SANTHOSH-M-03/FAT2FIT-APP.git" main
        
        if ($LASTEXITCODE -eq 0) {
            Write-Host "`n✅ SUCCESS! Code pushed to GitHub!" -ForegroundColor Green
            Write-Host "View at: https://github.com/SANTHOSH-M-03/FAT2FIT-APP" -ForegroundColor Cyan
        } else {
            Write-Host "`n❌ Push failed. Check your token and try again." -ForegroundColor Red
        }
    }
    
    "2" {
        Write-Host "`nOption 2: Browser Authentication" -ForegroundColor Cyan
        Write-Host "This will open your browser for authentication...`n"
        
        # Try to use git credential manager
        $env:GCM_INTERACTIVE = "always"
        git push -f origin main
        
        if ($LASTEXITCODE -eq 0) {
            Write-Host "`n✅ SUCCESS! Code pushed to GitHub!" -ForegroundColor Green
        }
    }
    
    "3" {
        Write-Host "`nChecking authentication..." -ForegroundColor Yellow
        git config --list | Select-String "user\."
        git remote -v
    }
    
    "4" {
        Write-Host "`nGitHub Personal Access Token Setup:" -ForegroundColor Cyan
        Write-Host "1. Go to: https://github.com/settings/tokens" -ForegroundColor Yellow
        Write-Host "2. Click 'Generate new token (classic)'"
        Write-Host "3. Give it a name: 'CoreFit App'"
        Write-Host "4. Select scope: 'repo' (Full control)"
        Write-Host "5. Click 'Generate token'"
        Write-Host "6. Copy the token (you won't see it again!)"
        Write-Host "7. Run this script again and select option 1`n"
        
        $openBrowser = Read-Host "Open token page in browser? (y/n)"
        if ($openBrowser -eq "y") {
            Start-Process "https://github.com/settings/tokens/new"
        }
    }
    
    default {
        Write-Host "`nInvalid option. Please run the script again." -ForegroundColor Red
    }
}

Write-Host "`nPress any key to exit..."
$null = $Host.UI.RawUI.ReadKey("NoEcho,IncludeKeyDown")
