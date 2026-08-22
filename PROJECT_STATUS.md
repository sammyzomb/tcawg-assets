# PROJECT STATUS — 埃及活動頁 / CAI12A

> 三方（使用者 / ChatGPT / Cursor）中央狀態表。開始工作前依序讀：`PROJECT_STATUS.md`、`CHATGPT_CURSOR_BASELINE.md`、`IMPORTANT_TODO.md`、`PROJECT_CHANGELOG.md`、`RELEASE_REGISTRY.md`、`DEPLOYMENT_CHECKLIST.md`、`MOBILE_COMMUTE_WORKFLOW.md`、`CURSOR_MULTI_DEVICE_RECOVERY.md`。

## ACTIVE WORK

- Owner: NONE
- Device: NONE
- Task: NONE
- Started: —
- Base commit: —
- Working tree state: —
- Lock type: SOFT LOCK

規則：開始實際修改前 claim Owner；Cursor claim 時必須同時填 `Device: OFFICE / HOME` 與當下 `Working tree state: CLEAN / DIRTY / UNKNOWN`。提交前再次確認 Owner、Device、branch HEAD、最新 changelog。若另一方或另一台裝置有新變更：STOP → SYNC → DIFF / REVIEW。

## CURRENT DEVELOPMENT

- Development status: CODE_FIXED
- Development release: UNASSIGNED
- Base CSS: `eg-v2-20260822.css`
- Mobile overlay CSS: `eg-mobile-p0-20260822.css`
- Required CSS load order: `eg-v2-20260822.css` → `eg-mobile-p0-20260822.css`
- Development JS: `eg-v2-20260822.js`
- CMS paste file: UNKNOWN / not generated for this change
- Scope: **Mobile only (`max-width:767px`)**
- Desktop: intentionally unchanged; must be regression-tested by Cursor
- Latest mobile change: dynamic viewport (`dvh`) overlay and removal of stale safeTop/safeBot dependency from primary mobile sticky layout / floating controls
- Local browser test: NOT TESTED
- Level B real-device test: NOT TESTED
- Latest workflow change: generic cross-project scripts plus one-time Windows installer created; Egypt-specific scripts retained temporarily until migration is validated

## CURSOR DEVICE STATE

- Cursor-Office: sync state UNKNOWN until next `git status` + remote comparison
- Cursor-Home: sync state UNKNOWN until next `git status` + remote comparison
- Rule: GitHub only contains pushed commits; an unpushed commit or uncommitted change on one device is **not visible** to the other device or ChatGPT.
- Do not write `CLEAN` / `SYNCED` from memory. Each device must establish its own state when opened.
- Generic device identity uses one machine-wide setting: `workflow.device=OFFICE` or `workflow.device=HOME`.

## GENERIC PROJECT SYNC — STEP 1

- `Start-Project.ps1`: created; operates on the current Git repository, checks dirty/ahead/behind/diverged, fetches remote, and only fast-forwards when safe.
- `Finish-Project.ps1`: created; refuses dirty/diverged/remote-ahead states, auto-pushes only clean local-ahead commits, and verifies post-push synchronization.
- These scripts are project-agnostic and intended to replace `START_EGYPT / FINISH_EGYPT` after local OFFICE/HOME installation and validation.
- No automatic commit is allowed.
- No force push / hard reset is allowed.

## GENERIC PROJECT SYNC — STEP 2

- `Install-ProjectWorkflow.ps1`: created.
- Runs once per Windows computer with `OFFICE` or `HOME`.
- Copies generic scripts to `%USERPROFILE%\.project-workflow`.
- Creates user commands `START_PROJECT.cmd` and `FINISH_PROJECT.cmd`.
- Adds the workflow folder to the current user's PATH without requiring admin rights.
- Saves device identity once with Git global config `workflow.device=OFFICE/HOME`.
- After installation, commands are intended to work from any Git repository on that computer.
- Static review: PASS.
- OFFICE installation: NOT TESTED.
- HOME installation: NOT TESTED.
- 19:00 OFFICE scheduling: NOT CONFIGURED yet.

## P0 STATUS

- Mobile viewport CSS/JS basis mismatch: **MITIGATED IN DEVELOPMENT** by mobile-only `dvh` overlay; awaiting Cursor + real-device validation before TODO completion.
- `safeTop/safeBot` stale-value layout impact: **MITIGATED IN MOBILE CSS** for primary sticky scenes and floating controls; root JS logic itself remains pending.
- Mobile scroll-frame computation load: **PENDING**; existing JS still updates multiple scene functions per scroll RAF.

## CURRENT LIVE WEBSITE

- Live status: UNKNOWN
- Live release: UNKNOWN
- Live CSS: UNKNOWN
- Live JS: UNKNOWN
- Live CMS paste file: UNKNOWN
- Live→Code correlation: UNKNOWN
- Live verified by user: NO / NOT RECORDED

GitHub Development 不等於官網 LIVE。LIVE→Code=`UNKNOWN` 時，本次修正只能描述為 Development 修正，不能宣稱正式官網已套用。

## CURSOR NORMAL START CHECK

每一台 Cursor（OFFICE / HOME）都必須獨立執行：

1. 確認自己是哪一台：`Device = OFFICE` 或 `HOME`。
2. `git status`。
3. 檢查 local branch 是否有 uncommitted changes / untracked files。
4. 檢查 local commits 是否尚未 push。
5. `git fetch` 或等效 remote refresh，確認 local HEAD 與 remote HEAD 關係。
6. 分類同步狀態：`SYNCED / LOCAL_DIRTY / LOCAL_AHEAD / REMOTE_AHEAD / DIVERGED / UNKNOWN / RECOVERY_REQUIRED`。
7. 只有安全同步後才 pull / fast-forward。
8. pull 後讀八份核心文件與最新 changelog。
9. 確認 ACTIVE WORK Owner / Device。
10. 才開始測試或修改。

忘記 Push / Pull 的完整處理以 `CURSOR_MULTI_DEVICE_RECOVERY.md` 為準。

## CURSOR NEXT ACTION — MOBILE P0

1. 在實際要使用的 Cursor 裝置先執行上面的 NORMAL START CHECK。
2. 讀最新 `PROJECT_CHANGELOG.md` 的 `Mobile Commute / ChatGPT` 交接。
3. 不重做 overlay；先確認 `eg-mobile-p0-20260822.css` 在主 CSS 後載入的預覽環境。
4. Level A：Desktop Chrome/Edge 回歸、390px、767/768、console、慢/快/回捲、Hero、Reduced Motion。
5. Level B：真實手機測試網址列/工具列展開→收合→再展開、sticky、快速/慢速/回捲。
6. 確認桌面完全沒有變化。
7. 驗證後才能升 `LOCAL_TESTED`。
8. 之後才建立 release，並由 Cursor 產新的 CMS paste HTML。

## FIRST MANAGED DEPLOYMENT BACKUP

CURRENT LIVE 仍為 `UNKNOWN`。第一次制度化上線前，使用者需先保存官網後台現行完整「行程特色」內容作 rollback baseline；成功建立第一個 `LIVE_VERIFIED` release 後，再回填 LIVE release / CSS / JS / CMS paste 並將 LIVE→Code 改為 `KNOWN`。
