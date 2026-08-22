$ErrorActionPreference = 'Stop'

function Fail([string]$Message, [int]$Code = 1) {
  Write-Host "[PROJECT][BLOCKED] $Message" -ForegroundColor Red
  exit $Code
}

$repo = git rev-parse --show-toplevel 2>$null
if (-not $repo) { Fail 'Not inside a Git repository.' }
Set-Location $repo

$device = (git config --global --get workflow.device 2>$null)
if (-not $device) {
  Fail 'Device identity is not configured. Configure this computer once as OFFICE or HOME.'
}
$device = $device.Trim().ToUpperInvariant()
if ($device -notin @('OFFICE','HOME')) { Fail "Invalid workflow.device '$device'. Use OFFICE or HOME." }

$repoName = Split-Path $repo -Leaf
Write-Host "[PROJECT] START_PROJECT — Repo=$repoName Device=$device" -ForegroundColor Cyan

$dirty = git status --porcelain
if ($dirty) {
  Write-Host '[PROJECT] Sync state: LOCAL_DIRTY' -ForegroundColor Yellow
  git status --short
  Fail 'Working tree has local changes. Do NOT pull. Review/recover local work first.' 2
}

$branch = (git branch --show-current).Trim()
if (-not $branch) { Fail 'Detached HEAD. Recovery/review required before work.' 3 }

Write-Host '[PROJECT] Refreshing remote state (git fetch)...'
git fetch --prune origin
if ($LASTEXITCODE -ne 0) { Fail 'git fetch failed. Network/authentication must be fixed before work.' 4 }

$upstream = git rev-parse --abbrev-ref --symbolic-full-name '@{u}' 2>$null
if (-not $upstream) {
  $candidate = "origin/$branch"
  git rev-parse --verify $candidate *> $null
  if ($LASTEXITCODE -ne 0) { Fail "No upstream branch for '$branch'. Configure upstream before work." 5 }
  $upstream = $candidate
}
$upstream = $upstream.Trim()

$counts = (git rev-list --left-right --count "HEAD...$upstream").Trim() -split '\s+'
$ahead = [int]$counts[0]
$behind = [int]$counts[1]

if ($ahead -eq 0 -and $behind -eq 0) {
  Write-Host '[PROJECT] Sync state: SYNCED' -ForegroundColor Green
} elseif ($ahead -gt 0 -and $behind -eq 0) {
  Write-Host "[PROJECT] Sync state: LOCAL_AHEAD ($ahead commit(s) not pushed)" -ForegroundColor Yellow
  Fail 'Possible forgotten PUSH. Finish/push this device before cross-device work.' 6
} elseif ($ahead -eq 0 -and $behind -gt 0) {
  Write-Host "[PROJECT] Sync state: REMOTE_AHEAD ($behind commit(s))" -ForegroundColor Yellow
  Write-Host '[PROJECT] Working tree is clean; applying safe fast-forward pull.'
  git pull --ff-only
  if ($LASTEXITCODE -ne 0) { Fail 'Fast-forward pull failed. Recovery required.' 7 }
  Write-Host '[PROJECT] Sync state after pull: SYNCED' -ForegroundColor Green
} else {
  Write-Host "[PROJECT] Sync state: DIVERGED (local ahead=$ahead, remote ahead=$behind)" -ForegroundColor Red
  Fail 'Do NOT pull, push, reset, or force. Review both local and remote histories first.' 8
}

$head = (git rev-parse HEAD).Trim()
Write-Host "[PROJECT] Repo:   $repoName"
Write-Host "[PROJECT] Branch: $branch"
Write-Host "[PROJECT] HEAD:   $head"
Write-Host "[PROJECT] Device: $device"
Write-Host '[PROJECT] START CHECK PASS — safe to begin project-specific work.' -ForegroundColor Green
exit 0
