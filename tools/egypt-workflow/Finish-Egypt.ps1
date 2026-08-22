$ErrorActionPreference = 'Stop'

function Fail([string]$Message, [int]$Code = 1) {
  Write-Host "[EGYPT][BLOCKED] $Message" -ForegroundColor Red
  exit $Code
}

$repo = git rev-parse --show-toplevel 2>$null
if (-not $repo) { Fail 'Not inside a Git repository.' }
Set-Location $repo

$device = (git config --local --get egypt.device 2>$null)
if (-not $device) { Fail 'Device identity missing. Configure OFFICE or HOME first.' }
$device = $device.Trim().ToUpperInvariant()

Write-Host "[EGYPT] FINISH_EGYPT — Device=$device" -ForegroundColor Cyan

$dirty = git status --porcelain
if ($dirty) {
  Write-Host '[EGYPT] Working tree is DIRTY:' -ForegroundColor Yellow
  git status --short
  Fail 'Uncommitted/untracked work exists. Cursor must review and commit intentionally before FINISH_EGYPT can synchronize.' 2
}

$branch = (git branch --show-current).Trim()
if (-not $branch) { Fail 'Detached HEAD. Recovery/review required.' 3 }

Write-Host '[EGYPT] Refreshing remote state before push...'
git fetch --prune origin
if ($LASTEXITCODE -ne 0) { Fail 'git fetch failed. Do not assume work is synchronized.' 4 }

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
  Write-Host '[EGYPT] Sync state: SYNCED — nothing to push.' -ForegroundColor Green
} elseif ($ahead -gt 0 -and $behind -eq 0) {
  Write-Host "[EGYPT] Sync state: LOCAL_AHEAD ($ahead commit(s)). Safe push path detected." -ForegroundColor Yellow
  git push
  if ($LASTEXITCODE -ne 0) { Fail 'Push failed. Work is NOT synchronized.' 6 }
  git fetch --prune origin
  $verify = (git rev-list --left-right --count "HEAD...$upstream").Trim() -split '\s+'
  if ([int]$verify[0] -ne 0 -or [int]$verify[1] -ne 0) { Fail 'Post-push verification did not reach SYNCED.' 7 }
  Write-Host '[EGYPT] Push verified: SYNCED' -ForegroundColor Green
} elseif ($ahead -eq 0 -and $behind -gt 0) {
  Write-Host "[EGYPT] Sync state: REMOTE_AHEAD ($behind commit(s))" -ForegroundColor Red
  Fail 'Remote changed before finish. Do NOT push. Pull/review latest changes first.' 8
} else {
  Write-Host "[EGYPT] Sync state: DIVERGED (local ahead=$ahead, remote ahead=$behind)" -ForegroundColor Red
  Fail 'Do NOT force push. Review/merge/rebase safely under CURSOR_MULTI_DEVICE_RECOVERY.md.' 9
}

$head = (git rev-parse HEAD).Trim()
Write-Host "[EGYPT] Final HEAD: $head"
Write-Host "[EGYPT] Device:     $device"
Write-Host '[EGYPT] FINISH CHECK PASS — working tree clean and GitHub synchronization verified.' -ForegroundColor Green
exit 0
