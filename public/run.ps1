$TempDir = Join-Path $env:TEMP "raunak-tui-$PID"
New-Item -ItemType Directory -Path $TempDir | Out-Null

$Bin = Join-Path $TempDir "raunak-tui.exe"
$Url = "https://github.com/RaunakDiesFromCode/raunak-tui/releases/download/v1.0.0/raunak-tui-windows-x86_64.exe"

Write-Host "Downloading temporary binary…"
Invoke-WebRequest $Url -OutFile $Bin

& $Bin

Remove-Item -Recurse -Force $TempDir
