# Creates the repo (opens browser with form pre-filled) then pushes
$repoUrl = "https://github.com/new?owner=Marjoki&name=Marjoki.co.uk"
Write-Host "Opening GitHub to create Marjoki.co.uk repo..."
Start-Process $repoUrl
Write-Host ""
Write-Host "In the browser: Click 'Create repository' (name is already filled)."
Write-Host "Then press Enter here to push your code..."
Read-Host

Set-Location $PSScriptRoot
git push -u origin main
