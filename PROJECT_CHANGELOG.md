# PROJECT CHANGELOG — 埃及活動頁 / CAI12A

> 所有 CSS / JS / HTML / 外部資源 / CMS paste / 專案規則的實際修改，都必須留下可交接紀錄。
> 測試只使用：`PASS / FAIL / NOT TESTED / BLOCKED`。同 change set 可寫 `same change set / see git history`，避免 commit SHA 自我引用循環。

---

## 2026-08-22 12:27 +08:00 — 通用化第二步：建立一次性安裝器

- 修改者：ChatGPT
- 本步範圍：只建立 OFFICE / HOME 共用的 Windows 安裝器；不設定 19:00 排程、不修改任何專案內容。
- 新增：`tools/project-workflow/Install-ProjectWorkflow.ps1`。
- 安裝器功能：
  - 只需每台 Windows 電腦執行一次，參數為 `OFFICE` 或 `HOME`。
  - 將 `Start-Project.ps1` / `Finish-Project.ps1` 安裝到 `%USERPROFILE%\.project-workflow`。
  - 產生 `START_PROJECT.cmd` / `FINISH_PROJECT.cmd`。
  - 把安裝資料夾加入目前使用者 PATH，不需系統管理員權限。
  - 使用 Git global config 儲存 machine-wide `workflow.device=OFFICE/HOME`，供同一台電腦的所有 Git 專案共用。
  - 安裝後可在任何 Git repository 目錄直接執行 `START_PROJECT` / `FINISH_PROJECT`。
- 安全原則：安裝器只建立工具與身分，不執行專案 commit/push，不修改 Git repository 內容。
- 測試：靜態檢查 PASS；OFFICE 實機安裝 NOT TESTED；HOME 實機安裝 NOT TESTED。
- 不影響：埃及 CSS / JS / CMS / LIVE。
- 下一步：在實體電腦先做 OFFICE 第一次安裝與驗證；HOME 之後以相同方式安裝。19:00 自動排程仍是後續步驟。
- 相關 commit：`e6d63a8b13add9b2ac600daeed3f09374dedea3c` — add global project workflow installer。

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
- 修改檔案：`PROJECT_STATUS.md`、`CHATGPT_CURSOR_BASELINE.md`、`CURSOR_MULTI_DEVICE_RECOVERY.md`、`MOBILE_COMMUTE_WORKFLOW.md`、`.cursor/rules/egypt-project-status.mdc`、`PROJECT_CHANGELOG.md`。
- 實際變更：建立 `Device=OFFICE/HOME`、同步狀態分類、Forgot Push / Pull Recovery、Push 前二次檢查，並禁止未知 DIRTY 狀態 hard reset / force push / 雲端同步整個 `.git` 工作目錄。
- 測試：Workflow 邏輯交叉檢查 PASS；前台 CSS / JS NOT TESTED（本次無前台功能修改）。
- OFFICE / HOME sync state：UNKNOWN，需各自實機開啟後確認。
- 相關 commits：`c42c7d9332b82c0c157591b18cf9170e0d57f17b`、`70cb0199616479b4520b2ee6061d78c6e7238974`、`7f171f359745f40108c88a883bddeb072280a55f`、`555495710dbbe0f13427189072365b3f85c9996f`、`c497aa2d9b426097a786c2bfdcb5a09ebe20d67d`。

---

## 2026-08-22 11:24 +08:00 — Mobile Commute / ChatGPT：手機版 P0 第一階段調整，桌面不動

- 修改者：ChatGPT
- Source: `Mobile Commute / ChatGPT`
- 使用者要求：針對官網埃及專案調整手機版；桌面版先不要動。
- LIVE→Code correlation: `UNKNOWN`
- Development status：`CODE_FIXED`
- Static review：`PASS`
- Local browser test：`NOT TESTED`
- Level B real-device test：`NOT TESTED`
- 主要修改：新增 `eg-mobile-p0-20260822.css`，純手機 `max-width:767px` overlay；以 `dvh` 降低 viewport / sticky / toolbar 高度不一致風險，並避開 stale safeTop/safeBot 對手機主要 layout / floating controls 的影響。
- 桌面 CSS / JS 不改；官網貼上版需等 Cursor 驗證後再產。
- 尚未完成：root JS safeTop/safeBot 邏輯、mobile scroll frame P0 效能優化、CURRENT LIVE correlation。
- 相關 commits：`c23bbc76c1965af3d1dbf6b188a094506f05ada9`、`d70194bbe9cac2c72808b75ec9a7bff5eac49df9`、`15cb435a44fc210a524c9cdfa78732a59b2402df`。

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
