# PROJECT CHANGELOG — 埃及活動頁 / CAI12A

> 所有 CSS / JS / HTML / 外部資源 / CMS paste / 專案規則的實際修改，都必須留下可交接紀錄。
> 測試只使用：`PASS / FAIL / NOT TESTED / BLOCKED`。同 change set 可寫 `same change set / see git history`，避免 commit SHA 自我引用循環。

---

## 2026-08-22 12:25 +08:00 — 通用化第一步：建立 START_PROJECT / FINISH_PROJECT

- 修改者：ChatGPT
- 使用者要求：將原本埃及專用的同步防呆機制升級成所有 GitHub 專案都可共用的三方 / 三地工作流程，並一步一步完成。
- 本步範圍：只建立通用同步層，不設定 OFFICE/HOME 實體電腦、不建立 19:00 Windows 排程、不修改埃及前台。
- 新增：
  - `tools/project-workflow/Start-Project.ps1`
  - `tools/project-workflow/Finish-Project.ps1`
- 通用化內容：
  - 腳本自動作用於「目前所在的 Git repository」，不再綁定 CAI12A / Egypt。
  - 裝置身分改採 machine-wide `workflow.device=OFFICE/HOME` 概念，適合一台電腦管理多個專案。
  - `START_PROJECT`：檢查 working tree、fetch、判斷 `SYNCED / LOCAL_DIRTY / LOCAL_AHEAD / REMOTE_AHEAD / DIVERGED`；只有 clean + remote-ahead 時允許 safe fast-forward。
  - `FINISH_PROJECT`：不自動 commit；只有 clean + local-ahead + remote 未前進時才自動 push，並於 push 後再次 fetch 驗證已 `SYNCED`。
  - DIRTY / DIVERGED / remote-ahead / detached HEAD / fetch failure 都採 BLOCKED，不自動 reset、不 force push、不猜測衝突處理。
- 舊 `START_EGYPT / FINISH_EGYPT`：暫時保留，等通用版本在 OFFICE/HOME 完成安裝與驗證後再退役，避免現在就切斷既有 recovery path。
- `PROJECT_STATUS.md`：已更新為 generic workflow Step 1 完成，Owner 回 `NONE`。
- 測試：
  - 靜態邏輯檢查：PASS
  - OFFICE 實機執行：NOT TESTED
  - HOME 實機執行：NOT TESTED
- 不影響：埃及 CSS / JS / CMS / LIVE。
- 下一步：只做 OFFICE/HOME 共用的「一次性安裝方式」，讓兩台電腦都能直接呼叫 `START_PROJECT / FINISH_PROJECT`；尚未執行。
- 相關 commits：
  - `d82e2a10a38046d9c4acf715f93a61f0aebecb02` — add generic START_PROJECT
  - `57c14174837d6886ef88ec9cb81449d77a8db189` — add generic FINISH_PROJECT
  - `4a07009490f77f5267cf433cbddb4b21f5d03be4` — update project status / release owner
  - 本 changelog：same change set / see git history

---

## 2026-08-22 11:57 +08:00 — 加入 Cursor-Office / Cursor-Home 與 Forgot Push / Pull Recovery

- 修改者：ChatGPT
- 修改目的：支援使用者在公司電腦與家裡筆電各自使用 Cursor，並防止其中一台忘記 push / pull 時造成版本覆蓋、遺失本機工作或錯誤重做。
- 修改檔案：
  - `PROJECT_STATUS.md`
  - `CHATGPT_CURSOR_BASELINE.md`
  - `CURSOR_MULTI_DEVICE_RECOVERY.md`（新增）
  - `MOBILE_COMMUTE_WORKFLOW.md`
  - `.cursor/rules/egypt-project-status.mdc`
  - `PROJECT_CHANGELOG.md`
- 實際變更：
  - Cursor 執行環境正式分成 `Device=OFFICE` 與 `Device=HOME`；三方角色仍為 使用者 / ChatGPT / Cursor。
  - ACTIVE WORK 在 Cursor claim 時必須記錄 Owner、Device、Task、Started、Base commit、Working tree state。
  - 新增裝置同步狀態：`SYNCED / LOCAL_DIRTY / LOCAL_AHEAD / REMOTE_AHEAD / DIVERGED / UNKNOWN / RECOVERY_REQUIRED`。
  - 每台 Cursor 開始工作前固定改為：Device identification → `git status` → 檢查 uncommitted/untracked/local unpushed commits → `git fetch` → local/remote compare → recovery/safe pull → 讀八份核心文件 → claim Owner。
  - 明確規定 `commit != push`；GitHub、ChatGPT、另一台 Cursor 都看不到未 push commit 或未 commit 修改。
  - Forgot Push Recovery：上一台有 local commit 或 DIRTY working tree 時，另一台不得假設 GitHub 已完整，也不得直接重做/覆蓋重疊任務；原裝置可用時先 status/fetch/compare，再安全 push 或 merge。
  - 原裝置暫時不可用時，重疊任務標 `RECOVERY_REQUIRED`；若使用者明確選擇放棄未 push 工作重做，必須留下紀錄，舊裝置日後不得直接 push 舊內容。
  - Forgot Pull Recovery：尚未修改時可 clean+fetch+pull；已在舊 base 修改時必須 STOP、保存 diff、fetch、compare，再 merge/review；已 commit 到舊 base 時先比較 local/remote commits，不可直接 push。
  - Push 前新增最後防呆：status + fetch + remote HEAD + Owner/Device + changelog + outgoing commits 再確認。
  - 明確禁止未知 DIRTY 狀態使用 `reset --hard`、禁止 force push 蓋掉另一台/ChatGPT、禁止用 OneDrive/Dropbox/NAS 同步整個 `.git` 工作目錄代替 GitHub。
  - Cursor 交接新增必填：`Device` 與 `Push status: PUSHED / NOT PUSHED`。
  - 手機通勤交接同步調整：ChatGPT 週末修改後，OFFICE 或 HOME 任一台接手前都必須先做 Multi-Device sync audit，而不是直接 pull。
- 為什麼修改：使用者補充同一專案會在公司與家裡兩台 Cursor 操作，且可能發生忘記 push / pull；原流程只防單一本機 dirty tree，無法處理另一台存在不可見本機工作的情況。
- 影響範圍：Workflow only；本次未修改埃及前台 CSS / JS / HTML 功能。
- 測試狀態：
  - Workflow 邏輯交叉檢查：PASS
  - 前台 CSS / JS：NOT TESTED（本次無前台功能修改）
- 官網貼上版是否需要重新產生：否。
- 尚未完成 / 後續待辦：
  - Cursor-Office sync state 目前 `UNKNOWN`，需該電腦實際開啟後才能確認。
  - Cursor-Home sync state 目前 `UNKNOWN`，需該筆電實際開啟後才能確認。
  - 手機 P0 overlay 仍維持 `CODE_FIXED / NOT TESTED`，等待任一已安全同步的 Cursor 裝置接手驗證。
- 相關 commits：
  - `c42c7d9332b82c0c157591b18cf9170e0d57f17b` — claim task / add device state to status
  - `70cb0199616479b4520b2ee6061d78c6e7238974` — add `CURSOR_MULTI_DEVICE_RECOVERY.md`
  - `7f171f359745f40108c88a883bddeb072280a55f` — update three-party baseline for dual Cursor devices
  - `555495710dbbe0f13427189072365b3f85c9996f` — update Cursor master rule
  - `c497aa2d9b426097a786c2bfdcb5a09ebe20d67d` — align mobile commute handoff
  - 本 changelog 更新：same change set / see git history

---

## 2026-08-22 11:24 +08:00 — Mobile Commute / ChatGPT：手機版 P0 第一階段調整，桌面不動

- 修改者：ChatGPT
- Source: `Mobile Commute / ChatGPT`
- 使用者要求：針對官網埃及專案調整手機版；桌面版先不要動。
- LIVE→Code correlation: `UNKNOWN`
- 修改目的：先降低手機 Safari / Chrome 在瀏覽器工具列展開收合時，`svh` 與既有 JS `window.innerHeight` 基準不一致，以及 stale `safeTop/safeBot` 對 sticky 高度與浮動控制位置造成的風險。
- 修改檔案：
  - `PROJECT_STATUS.md`
  - `eg-mobile-p0-20260822.css`（新增）
  - `RELEASE_REGISTRY.md`
  - `PROJECT_CHANGELOG.md`
- 實際變更：
  - 新增純手機 overlay `eg-mobile-p0-20260822.css`，全部規則限定 `@media (max-width:767px)`。
  - 不修改既有 `eg-v2-20260822.css` 桌面規則，不修改 `eg-v2-20260822.js` 桌面行為。
  - Mobile sticky 場景改以 `100dvh` 作為可視高度基準；對應動畫 track 改以 `dvh` 計算 travel 長度，使其更接近既有 JS `window.innerHeight` 的動態 viewport 概念。
  - 套用場景：Gate Hero、Pyramids、Nile Journey、Gods、Luxor、Abu Simbel、Red Sea、Timeline；feature sticky scenes 也改成 `dvh`，Museum / Route 保留自然流設計。
  - 手機 sticky 場景的 `top/height` 不再依賴可能殘留的 `--eg-safe-top / --eg-safe-bot`；Hero padding 與浮動 quick/story-nav/toast 改直接使用 `env(safe-area-inset-*)`。
  - Registry 明確記錄載入順序：`eg-v2-20260822.css` → `eg-mobile-p0-20260822.css`。
- 為什麼這樣改：使用者要求桌面完全先不動；因此本階段採取 mobile-only overlay，而不是直接重寫共用 JS / desktop CSS。
- 影響範圍：Mobile only；Desktop 預期無影響。
- Development status：`CODE_FIXED`
- Static review：`PASS`
- Local browser test：`NOT TESTED`
- Level B real-device test：`NOT TESTED`
- Desktop impact：預期無（overlay 僅 `max-width:767px`）
- Mobile impact：預期改善 viewport / sticky / browser toolbar 收合時的高度一致性與 stale safe-area 造成的偏移。
- 官網貼上版是否需要重新產生：`YES`，但**現在不要產正式版**；Cursor 驗證後才產，並確保 overlay CSS 在主 CSS 後載入。
- Cursor required actions：
  1. 先依 `CURSOR_MULTI_DEVICE_RECOVERY.md` 確認 OFFICE/HOME 本機與 remote 同步狀態。
  2. 讀 `PROJECT_STATUS.md`、本 changelog、`RELEASE_REGISTRY.md`。
  3. 不重做本次 CSS overlay，先驗證。
  4. Level A：Desktop Chrome/Edge 基本回歸、390px、767/768、console、慢/快/回捲、Hero source switching、Reduced Motion。
  5. Level B：至少一台真實手機驗證網址列/工具列展開→收合→再展開、sticky、快速/慢速/回捲。
  6. 確認桌面版視覺與動作沒有被 overlay 影響。
  7. 驗證通過後才升 `LOCAL_TESTED`，再建立 release 與 CMS paste。
- 尚未完成：
  - JS `safeTop/safeBot` 根邏輯本身仍存在，但本 overlay 已在手機主要 layout / floating controls 避開其 stale 值；根 JS 修正尚未完成。
  - 手機 scroll frame 仍會更新多個 scene update function，P0 效能優化仍待後續 JS 修正。
  - CURRENT LIVE / LIVE→Code 仍為 `UNKNOWN`。
- 相關 commits：
  - `c23bbc76c1965af3d1dbf6b188a094506f05ada9`
  - `d70194bbe9cac2c72808b75ec9a7bff5eac49df9`
  - `15cb435a44fc210a524c9cdfa78732a59b2402df`

---

## 2026-08-22 11:12 +08:00 — 最終完善三方協議並完成二次稽核

- 修改者：ChatGPT
- 主要內容：建立 LIVE→Code `KNOWN/UNKNOWN`、SOFT LOCK 二次檢查、分領域權威、首次 CMS backup 責任、Level A/B/C 測試 Gate，並將 Cursor alwaysApply 收斂為 Master Rule + Mobile Rule。
- 測試狀態：三方協議 `PASS`；前台 CSS / JS `NOT TESTED`。

---

## 2026-08-22 10:56 +08:00 — 納入手機通勤修改流程

- 修改者：ChatGPT
- 主要內容：新增 `MOBILE_COMMUTE_WORKFLOW.md`，建立手機 `CODE_FIXED → Cursor 驗證 → LOCAL_TESTED` 交接與截圖證據邊界。

---

## 2026-08-22 10:48 +08:00 — Release / deployment / rollback 制度

- 修改者：ChatGPT
- 主要內容：建立 `RELEASE_REGISTRY.md`、`DEPLOYMENT_CHECKLIST.md`、release freeze、STALE OWNER RECOVERY、UNKNOWN LIVE 與 rollback Gate。

---

## 2026-08-22 10:45 +08:00 — 三方協作防混亂機制

- 修改者：ChatGPT
- 主要內容：新增 `PROJECT_STATUS.md`、lifecycle、Owner、防盲目 pull、release ID 與 CMS 資源綁定。

---

## 2026-08-22 10:28 +08:00 — 建立 ChatGPT × Cursor 協作基準

- 修改者：ChatGPT
- 主要內容：角色分工、交接格式、優先級與貼上版條件。

---

## 2026-08-22 10:19 +08:00 — 建立強制修改紀錄機制

- 修改者：ChatGPT
- 主要內容：建立本 changelog 並規定所有實際修改都留下可交接紀錄。
