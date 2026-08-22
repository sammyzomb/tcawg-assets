param(
  [Parameter(Mandatory=$true)]
  [ValidateSet('OFFICE','HOME')]
  [string]$Device
)

$ErrorActionPreference = 'Stop'

function Fail([string]$Message, [int]$Code = 1) {
  Write-Host "[PROJECT-WORKFLOW][BLOCKED] $Message" -ForegroundColor Red
  exit $Code
}

$Device = $Device.ToUpperInvariant()
$sourceDir = $PSScriptRoot
$startSource = Join-Path $sourceDir 'Start-Project.ps1'
$finishSource = Join-Path $sourceDir 'Finish-Project.ps1'

if (-not (Test-Path $startSource)) { Fail "Missing source file: $startSource" 2 }
if (-not (Test-Path $finishSource)) { Fail "Missing source file: $finishSource" 3 }

$installDir = Join-Path $env:USERPROFILE '.project-workflow'
New-Item -ItemType Directory -Force -Path $installDir | Out-Null

$startTarget = Join-Path $installDir 'Start-Project.ps1'
$finishTarget = Join-Path $installDir 'Finish-Project.ps1'
Copy-Item $startSource $startTarget -Force
Copy-Item $finishSource $finishTarget -Force

$startCmd = Join-Path $installDir 'START_PROJECT.cmd'
$finishCmd = Join-Path $installDir 'FINISH_PROJECT.cmd'

$startCmdContent = @'
@echo off
powershell.exe -NoProfile -ExecutionPolicy Bypass -File "%USERPROFILE%\.project-workflow\Start-Project.ps1" %*
exit /b %ERRORLEVEL%
'@

$finishCmdContent = @'
@echo off
powershell.exe -NoProfile -ExecutionPolicy Bypass -File "%USERPROFILE%\.project-workflow\Finish-Project.ps1" %*
exit /b %ERRORLEVEL%
'@

Set-Content -Path $startCmd -Value $startCmdContent -Encoding ASCII
Set-Content -Path $finishCmd -Value $finishCmdContent -Encoding ASCII

Write-Host "[PROJECT-WORKFLOW] Setting this computer identity to $Device..." -ForegroundColor Cyan
git config --global workflow.device $Device
if ($LASTEXITCODE -ne 0) { Fail 'Unable to save Git global workflow.device.' 4 }

$userPath = [Environment]::GetEnvironmentVariable('Path','User')
$pathParts = @()
if ($userPath) { $pathParts = $userPath -split ';' | Where-Object { $_ } }
$alreadyPresent = $pathParts | Where-Object { $_.TrimEnd('\') -ieq $installDir.TrimEnd('\') }
if (-not $alreadyPresent) {
  $newPath = if ($userPath) { "$userPath;$installDir" } else { $installDir }
  [Environment]::SetEnvironmentVariable('Path',$newPath,'User')
  Write-Host '[PROJECT-WORKFLOW] Added workflow folder to USER PATH.' -ForegroundColor Green
} else {
  Write-Host '[PROJECT-WORKFLOW] Workflow folder is already in USER PATH.' -ForegroundColor Green
}

$env:Path = "$env:Path;$installDir"

$verifyDevice = (git config --global --get workflow.device 2>$null)
if (-not $verifyDevice -or $verifyDevice.Trim().ToUpperInvariant() -ne $Device) {
  Fail 'Device identity verification failed.' 5
}

Write-Host ''
Write-Host '[PROJECT-WORKFLOW] INSTALL PASS' -ForegroundColor Green
Write-Host "Device:      $Device"
Write-Host "Install dir: $installDir"
Write-Host 'Commands:    START_PROJECT   FINISH_PROJECT'
Write-Host ''
Write-Host 'These commands work from any Git repository opened on this computer.'
Write-Host 'Restart Cursor/terminal once so the updated USER PATH is inherited everywhere.'
exit 0
