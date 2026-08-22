$ErrorActionPreference = 'Stop'

function Fail([string]$Message, [int]$Code = 1) {
  Write-Host "[EGYPT][BLOCKED] $Message" -ForegroundColor Red
  exit $Code
}

$repo = git rev-parse --show-toplevel 2>$null
if (-not $repo) { Fail 'Not inside a Git repository.' }
Set-Location $repo

$device = (git config --local --get egypt.device 2>$null)
if (-not $device) {
  Fail 'Device identity is not configured. Run: SET_EGYPT_DEVICE.cmd OFFICE  or  SET_EGYPT_DEVICE.cmd HOME'
}
$device = $device.Trim().ToUpperInvariant()
if ($device -notin @('OFFICE','HOME')) { Fail "Invalid egypt.device '$device'. Use OFFICE or HOME." }

Write-Host "[EGYPT] START_EGYPT — Device=$device" -ForegroundColor Cyan

$dirty = git status --porcelain
if ($dirty) {
  Write-Host '[EGYPT] Sync state: LOCAL_DIRTY' -ForegroundColor Yellow
  git status --short
  Fail 'Working tree has local changes. Do NOT pull. Follow CURSOR_MULTI_DEVICE_RECOVERY.md.' 2
}

$branch = (git branch --show-current).Trim()
if (-not $branch) { Fail 'Detached HEAD. Recovery/review required before work.' 3 }

Write-Host '[EGYPT] Refreshing remote state (git fetch)...'
git fetch --prune origin
if ($LASTEXITCODE -ne 0) { Fail 'git fetch failed. Network/authentication must be fixed before work.' 4 }

$upstream = git rev-parse --abbrev-ref --symbolic-full-name '@{u}' 2>$null
if (-not $upstream) {
  $candidate = "origin/$branch"
  git rev-parse --verify $candidate *> $null
  if ($LASTEXITCODE -ne 0) { Fail "No upstream branch for '$branch'." 5 }
  $upstream = $candidate
}
$upstream = $upstream.Trim()

$counts = (git rev-list --left-right --count "HEAD...$upstream").Trim() -split '\s+'
$ahead = [int]$counts[0]
$behind = [int]$counts[1]

if ($ahead -eq 0 -and $behind -eq 0) {
  Write-Host '[EGYPT] Sync state: SYNCED' -ForegroundColor Green
} elseif ($ahead -gt 0 -and $behind -eq 0) {
  Write-Host "[EGYPT] Sync state: LOCAL_AHEAD ($ahead commit(s) not pushed)" -ForegroundColor Yellow
  Fail 'Possible forgotten PUSH. Finish/push this device before starting new cross-device work.' 6
} elseif ($ahead -eq 0 -and $behind -gt 0) {
  Write-Host "[EGYPT] Sync state: REMOTE_AHEAD ($behind commit(s))" -ForegroundColor Yellow
  Write-Host '[EGYPT] Working tree is clean; applying safe fast-forward pull.'
  git pull --ff-only
  if ($LASTEXITCODE -ne 0) { Fail 'Fast-forward pull failed. Recovery required.' 7 }
  Write-Host '[EGYPT] Sync state after pull: SYNCED' -ForegroundColor Green
} else {
  Write-Host "[EGYPT] Sync state: DIVERGED (local ahead=$ahead, remote ahead=$behind)" -ForegroundColor Red
  Fail 'Do NOT pull, push, reset, or force. Follow multi-device recovery and review both sides.' 8
}

$head = (git rev-parse HEAD).Trim()
Write-Host "[EGYPT] Branch: $branch"
Write-Host "[EGYPT] HEAD:   $head"
Write-Host "[EGYPT] Device: $device"
Write-Host '[EGYPT] START CHECK PASS — Cursor may now read the core project documents before claiming work.' -ForegroundColor Green
exit 0
