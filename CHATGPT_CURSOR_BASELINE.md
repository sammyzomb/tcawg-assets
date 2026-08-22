# ChatGPT × Cursor × 使用者 協作基準表 — 埃及活動頁 / CAI12A

> 目的：讓使用者、ChatGPT、Cursor-Office、Cursor-Home 使用同一套規則，避免重複分析、互相覆蓋、版本誤判、忘記 push/pull、錯誤宣告上線或無法回滾。
> 核心原則：**使用者決策；GitHub 同步；ChatGPT 可遠端修改；Cursor 負責本機驗證與貼上版；正式官網決定 LIVE。**

---

## 1. 八份核心文件與閱讀順序

1. `PROJECT_STATUS.md` — 現在誰在做、哪台裝置、目前狀態、LIVE 狀態
2. `CHATGPT_CURSOR_BASELINE.md` — 三方協作與衝突處理
3. `IMPORTANT_TODO.md` — 待辦與優先順序
4. `PROJECT_CHANGELOG.md` — 已完成修改
5. `RELEASE_REGISTRY.md` — release 綁定
6. `DEPLOYMENT_CHECKLIST.md` — 測試、部署、回滾 Gate
7. `MOBILE_COMMUTE_WORKFLOW.md` — 只有手機時的工作流程
8. `CURSOR_MULTI_DEVICE_RECOVERY.md` — OFFICE / HOME 同步、忘記 Push / Pull recovery

Cursor 主規則：`.cursor/rules/egypt-project-status.mdc`；手機情境再套 `.cursor/rules/mobile-commute-workflow.mdc`。

---

## 2. 分領域權威

| 問題 | 權威來源 |
|---|---|
| 要不要改、改什麼、是否改派 | 使用者當下最新明確指示 |
| 官網實際呈現 | 正式官網 |
| LIVE 對應 release / CSS / JS / CMS | `PROJECT_STATUS.md` + `RELEASE_REGISTRY.md`，未知就 `UNKNOWN` |
| Owner / Device / lifecycle | `PROJECT_STATUS.md` |
| release 綁定 | `RELEASE_REGISTRY.md` |
| 三方協作 | 本文件 |
| OFFICE / HOME 本機同步狀態 | 該裝置實際 `git status` + fetch 後的 local/remote 比較 |
| 未完成事項 | `IMPORTANT_TODO.md` |
| 修改歷史 | `PROJECT_CHANGELOG.md` |
| 程式實際內容 | GitHub code |
| 部署 / 回滾 Gate | `DEPLOYMENT_CHECKLIST.md` |
| 手機流程 | `MOBILE_COMMUTE_WORKFLOW.md` |
| 雙裝置 recovery | `CURSOR_MULTI_DEVICE_RECOVERY.md` |

聊天記憶與「最新版 / 完成」不能覆蓋正式來源。

---

## 3. 三方角色與兩個 Cursor 執行環境

三方仍然是：**使用者 / ChatGPT / Cursor**。Cursor 只是有兩個本機環境：

- `Cursor-Office` → Device=`OFFICE`
- `Cursor-Home` → Device=`HOME`

| 工作 | ChatGPT | Cursor | 使用者 |
|---|---|---|---|
| 最終需求決策 / 改派 | 協助 | 協助 | 主責 |
| 問題分析 | 主責 | 可協助 | 不需要 |
| GitHub 修改 | 使用者要求時可直接 | 可做 | 不需要 |
| 本機檔案 / DevTools / console | 不操作 | 主責 | 不需要 |
| CMS paste HTML | 可審查 | 主責 | 不需要 |
| 第一次 managed deployment 舊 CMS 備份 | 提醒/記錄 | 提醒 | 一次性主責 |
| 貼 CMS | 不做 | 不做 | 主責 |
| `USER_PASTED` / `LIVE_VERIFIED` | 依使用者回報記錄 | 依使用者回報記錄 | 只有使用者能觸發 |

---

## 4. GitHub 與本機真實來源

- GitHub 是**已 push 開發內容**的共同來源。
- GitHub 不知道 OFFICE / HOME 的未 commit 修改。
- GitHub 也不知道 local commit 若尚未 push。
- 因此：**commit ≠ push；另一台看不到忘記 push 的工作。**
- 每台 Cursor 的 local 狀態只能由該台實際檢查，不可由 GitHub 或聊天猜測。

裝置同步狀態固定使用：

- `SYNCED`
- `LOCAL_DIRTY`
- `LOCAL_AHEAD`
- `REMOTE_AHEAD`
- `DIVERGED`
- `UNKNOWN`
- `RECOVERY_REQUIRED`

這些不取代專案 lifecycle。

---

## 5. LIVE→CODE correlation

- `KNOWN`：正式官網已確認對應某 release / CSS / JS / paste。
- `UNKNOWN`：可看到正式頁，但不知道它實際引用哪版。

GitHub 最新 ≠ LIVE。`UNKNOWN` 時可以修 Development，但不得宣稱已直接修到正式官網正在執行的同一份 code。

---

## 6. lifecycle 固定語言

只使用：

`ANALYSIS_ONLY → IN_PROGRESS → CODE_FIXED → LOCAL_TESTED → PASTE_GENERATED → USER_PASTED → LIVE_VERIFIED`

其他：release 可用 `DEV / ROLLED_BACK / ABANDONED`；未指定 release=`UNASSIGNED`；未知=`UNKNOWN`。

---

## 7. ACTIVE OWNER 是 SOFT LOCK，Cursor 必須加 Device

開始實際修改前：

- Owner=`NONE` 才能 claim，除非使用者明確改派。
- ChatGPT：Owner=`ChatGPT`，Device=`REMOTE / ChatGPT`。
- Cursor：Owner=`Cursor`，必須填 Device=`OFFICE / HOME`。
- Cursor 還要記 Working tree state=`CLEAN / DIRTY / UNKNOWN` 與 Base commit。

提交 / push 前再檢查：

1. Owner / Device 仍是自己。
2. `git fetch` 後 remote HEAD 是否變動。
3. 最新 changelog 是否有另一方 / 另一台重疊修改。
4. 本機 working tree / commits 是不是自己預期要提交的內容。

有變化：`STOP → SYNC → DIFF/REVIEW → TEST → COMMIT/PUSH`。

### STALE OWNER RECOVERY

Owner 殘留時不猜舊工作完成度；讀 commits/changelog/status，由使用者明確接手/改派後記錄 recovery，再 claim 新 Owner。

---

## 8. Cursor 每次開機 / 換電腦的安全開始流程

**不要從 `git pull` 開始。**

1. 確認 Device=`OFFICE / HOME`。
2. `git status`。
3. 檢查 modified / staged / untracked。
4. 檢查是否有 local commits 尚未 push。
5. `git fetch` 或等效 remote refresh。
6. 判斷：`SYNCED / LOCAL_DIRTY / LOCAL_AHEAD / REMOTE_AHEAD / DIVERGED / RECOVERY_REQUIRED`。
7. 只有 clean + remote state 已確認後才安全 pull / fast-forward。
8. 同步後讀八份核心文件。
9. 確認 Owner / Device / release / TODO。
10. 才開始新工作。

完整例外情境依 `CURSOR_MULTI_DEVICE_RECOVERY.md`。

---

## 9. 忘記 PUSH 的核心規則

### 有 local commit 沒 push

- 另一台與 ChatGPT 看不到這個 commit。
- 不可讓另一台假設 GitHub 已包含它。
- 原裝置先 status + fetch；remote 無衝突才 push。
- remote 已前進時先 DIFF / merge/rebase review，禁止 force push。

### 連 commit 都沒有，只是 DIRTY

- 內容只存在原裝置。
- 另一台不得重建/覆蓋同一任務，除非使用者明確選擇放棄舊工作重做。
- 原裝置回來後先保存 diff，再 fetch / compare；禁止未知狀態下 `reset --hard`。

### 原裝置暫時拿不到

可做完全無關任務；重疊任務應標 `RECOVERY_REQUIRED`。若使用者要求重做，要記錄 `ABANDON_UNPUSHED_<DEVICE>_WORK_AND_REDO`，舊裝置日後打開時不得直接 push。

---

## 10. 忘記 PULL 的核心規則

### 尚未修改，本機只是落後

`status(clean) → fetch → pull/fast-forward → reread docs → work`

### 已在舊 base 修改但未 commit

`STOP → status → save diff → fetch → compare → merge/review → test → commit`

不得 blind pull。

### 已在舊 base commit

`fetch → compare local/remote commits → merge/rebase/cherry-pick with review → resolve conflicts → retest → push`

不得直接 force push，也不得用 ours/theirs 整份覆蓋未知差異。

---

## 11. ChatGPT 直接修改流程

1. 讀八份核心文件與最新 code。
2. 確認 Owner。
3. claim ChatGPT。
4. 若知道 OFFICE/HOME 有可能存在未 push 重疊工作，先標 `RECOVERY_REQUIRED`，不可假裝 GitHub 已完整。
5. 只改使用者要求範圍。
6. 提交前重讀 status / remote HEAD / changelog。
7. 修改後同步 status / TODO / changelog / release（若相關）。
8. 清楚交接 Cursor。
9. Owner 回 `NONE`。

---

## 12. 測試 Gate

結果只用 `PASS / FAIL / NOT TESTED / BLOCKED`。

- Level A：Cursor 本機 / 瀏覽器 / breakpoint / console。
- Level B：手機 P0 必要真實手機驗證；DevTools 模擬不能代替。
- Level C：特定裝置 / 瀏覽器條件式驗證。

未實測不得寫 PASS。

---

## 13. 修改紀錄

CSS / JS / HTML / 資源 / Vimeo / paste / workflow / device recovery 實際修改都要寫 `PROJECT_CHANGELOG.md`，包含時間、修改者、Device（Cursor 時）、目的、檔案、原因、測試、後續、commit。

---

## 14. Release / CMS / LIVE

- Release ID=`RYYYYMMDD-NN`。
- Release 綁定 CSS、JS、CMS paste、圖片、Desktop/Mobile Vimeo、commits、tests、rollback target。
- `PASTE_GENERATED` 後實質內容改變原則上建立新 release。
- `LIVE_VERIFIED` release 不可重新定義。
- Cursor 通過 Gate 才產完整 paste HTML；使用者不手動拆 CSS/JS。
- `USER_PASTED / LIVE_VERIFIED` 只能由使用者回報觸發。

---

## 15. 第一次制度化上線與回滾

CURRENT LIVE=`UNKNOWN` 時，第一次新 release 貼入前使用者先完整備份現行 CMS「行程特色」，作 rollback baseline。

部署失敗時回到明確 release / backup，不在 CMS 臨時手改出無紀錄版本。

---

## 16. 手機通勤流程

依 `MOBILE_COMMUTE_WORKFLOW.md`：

`手機發現問題 → ChatGPT Development 修正 → CODE_FIXED → OFFICE 或 HOME 依 Multi-Device Start Check 接手 → LOCAL_TESTED → release/paste → 使用者部署 → LIVE_VERIFIED`

手機交接不能假設下一台 Cursor 已 synced。

---

## 17. 不得誤修

- 保留 `#sidebar,#sidebar-share-btn{display:none !important}`。
- 主要 scope=`#eg-experience`。
- Desktop/Mobile Vimeo 分流。
- Reduced Motion。
- 不因手機問題順手改 Desktop / Design，除非使用者明確要求。

---

## 18. 禁止的 Git 協作行為

- DIRTY working tree 上 blind pull。
- 不 fetch 就假設 remote 沒變。
- 忘記 push 後讓另一台假設 GitHub 已有修改。
- `reset --hard` 處理未知本機工作。
- force push 蓋掉另一台 / ChatGPT commit。
- 使用 OneDrive / Dropbox / NAS 同步整個 `.git` 工作目錄代替 GitHub。
- 只說「Cursor 改好了」而不記 Device / push 狀態。

---

## 19. 交接最小內容

ChatGPT → Cursor：Task、status、commits、LIVE→Code、未測項、需要哪一台接手無強制，但接手裝置必須先 sync audit。

Cursor → 其他方：Device、sync state、local/remote 狀態、測試結果、修改 commits、**Push status: PUSHED / NOT PUSHED**、剩餘工作。

---

## 20. 最終共同原則

**使用者是需求、改派、CMS 與 LIVE 的最終決策者；ChatGPT 負責分析與授權的 GitHub 遠端修改；Cursor-Office / Cursor-Home 是同一個 Cursor 角色的兩個本機環境，每次都必須先證明自己的同步狀態；GitHub 是「已 push」的共同交接中心，不能代表未 push 的本機工作；正式官網是 LIVE 的最終事實來源。**
