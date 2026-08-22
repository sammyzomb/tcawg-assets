# PROJECT CHANGELOG — 埃及活動頁 / CAI12A

> 用途：記錄每一次對埃及活動頁專案的實際修改，讓 ChatGPT、Cursor 與後續維護者在 `git pull` 後都能知道最新狀態。
> 規則：任何 CSS / JS / HTML / 外部資源引用 / 官網貼上版 / 專案規則的實際修改，都必須在同一次工作中同步更新本文件。

---

## 固定記錄格式

每次修改新增一筆，必須包含：

- 日期 / 時間（Asia/Taipei）
- 修改者：ChatGPT / Cursor / 人工
- 修改目的
- 修改檔案
- 實際變更內容
- 為什麼修改
- 影響範圍：Desktop / Mobile / Both / Workflow
- 測試狀態
- 官網貼上版是否需要重新產生
- 尚未完成 / 後續待辦
- 相關 code commit SHA（已知時）

不得只寫「修正手機版」「優化 CSS」這類模糊紀錄。

### Commit SHA 規則

- 若程式修改 commit 已存在，記該相關 commit SHA。
- 若 changelog 與變更同屬一個 change set，可寫 `same change set / see git history`。
- 不得為了記錄 changelog 自己的 commit SHA 而形成無限追加 commit。

---

## 2026-08-22 10:45 +08:00 — 補強三方協作防混亂機制

- 修改者：ChatGPT
- 修改目的：修補使用者 / ChatGPT / Cursor 三方協作中的版本誤判、同時修改、無條件 pull、LIVE 誤判與 commit SHA 自我引用等流程漏洞。
- 修改檔案：
  - `PROJECT_STATUS.md`（新增）
  - `.cursor/rules/egypt-project-status.mdc`（新增）
  - `CHATGPT_CURSOR_BASELINE.md`（重整為三方協作版）
  - `PROJECT_CHANGELOG.md`（本次同步更新）
- 實際變更內容：
  - 新增中央狀態表，統一管理 ACTIVE OWNER / RELEASE / STATUS / LIVE。
  - 明確區分 GitHub 開發真實來源與正式官網 LIVE 真實來源。
  - 新增狀態鏈：`ANALYSIS_ONLY` → `IN_PROGRESS` → `CODE_FIXED` → `LOCAL_TESTED` → `PASTE_GENERATED` → `USER_PASTED` → `LIVE_VERIFIED`。
  - 規定只有使用者能最終確認 `LIVE_VERIFIED`。
  - 新增 ACTIVE OWNER 防止 ChatGPT 與 Cursor 同時修改同一任務。
  - Cursor 開始前改為先 `git status`；working tree 不乾淨時不得盲目 `git pull`。
  - 禁止用「最新版」「完成」作為權威狀態，改用 release ID + 明確 status。
  - 正式貼上版必須綁定指定 CSS / JS / 圖片 / Desktop Vimeo / Mobile Vimeo。
  - 修正 changelog commit SHA 規則，避免自我引用造成無限追加 commit。
  - 新增 Cursor alwaysApply project-status 規則，強制每次讀四份核心文件。
- 為什麼修改：檢查後確認原制度仍可能出現「GitHub 已更新但官網未上線」「Cursor 本機有未提交內容卻直接 pull」「ChatGPT / Cursor 同時修改同一問題」「貼上版引用錯日期版 CSS / JS」等三方誤解。
- 影響範圍：Workflow（不直接改變目前前台 CSS / JS 行為）。
- 測試狀態：文件與 Cursor 規則已建立；未進行前台程式測試，因本次無 CSS / JS 功能修改。
- 官網貼上版是否需要重新產生：否。
- 尚未完成 / 後續待辦：目前正式官網實際 LIVE release / CSS / JS / paste file 尚未由使用者確認，因此 `PROJECT_STATUS.md` 保持 UNKNOWN，不自行猜測；P0/P1/P2 技術待辦仍以 `IMPORTANT_TODO.md` 為準。
- 相關 commits：
  - `340f1f694581b333fb98ada9b22555b2dc177bbd` — 新增 `PROJECT_STATUS.md`
  - `eea602187349f451bb2cea066975454e74779700` — 新增 Cursor project-status 規則
  - `2d862cd49acf6b5b0ec32e3ab53f278ad4171f14` — 重整三方協作基準

---

## 2026-08-22 10:28 +08:00 — 建立 ChatGPT × Cursor 協作基準

- 修改者：ChatGPT
- 修改目的：建立 ChatGPT 與 Cursor 的共同工作標準，讓兩邊可以無縫交接，避免重複修改、互相覆蓋或遺漏待辦與測試結果。
- 修改檔案：
  - `CHATGPT_CURSOR_BASELINE.md`（新增）
  - `.cursor/rules/chatgpt-cursor-baseline.mdc`（新增）
  - `PROJECT_CHANGELOG.md`（本次同步更新）
- 實際變更內容：
  - 建立三份核心文件的閱讀順序：協作基準 → 重要待辦 → 修改紀錄。
  - 定義 ChatGPT、Cursor、使用者各自負責的工作。
  - 明確指定 GitHub 為共同開發來源。
  - 規定 ChatGPT 已提交的修正，Cursor pull 後先驗證，不得重做同一修正。
  - 規定 Cursor 已提交的修正，ChatGPT 下次先重新讀 GitHub 再繼續。
  - 建立 ChatGPT → Cursor 與 Cursor → ChatGPT 的標準交接格式。
  - 建立 P0 / P1 / P2 / Design 的共同優先級定義。
  - 規定正式官網貼上版的產生條件。
- 為什麼修改：使用者希望建立一份基準表，讓 ChatGPT 與 Cursor 可以以同一套標準共同工作。
- 影響範圍：Workflow。
- 測試狀態：文件 / Cursor 規則建立完成；不涉及前台執行測試。
- 官網貼上版是否需要重新產生：否。
- 尚未完成 / 後續待辦：已由 10:45 的三方協作防混亂機制進一步補強。
- 相關 commits：
  - `88f19bad9c5fed4c0306420e344759b1b1a59aca`
  - `44632aa504c6d78b79913cd8d8ec842b5e824032`

---

## 2026-08-22 10:19 +08:00 — 建立強制修改紀錄機制

- 修改者：ChatGPT
- 修改目的：確保每一次修改都留下可供 Cursor 接續的完整紀錄。
- 修改檔案：
  - `PROJECT_CHANGELOG.md`（新增）
  - `.cursor/rules/egypt-change-log.mdc`（新增）
- 實際變更內容：
  - 建立本專案修改紀錄檔。
  - 規定每次修改 CSS / JS / HTML / 資源引用 / 貼上版後，都必須同步新增一筆紀錄。
  - Cursor 每次 pull 後需先讀狀態、待辦與 changelog。
  - 完成修改後必須更新 changelog，不能只改程式碼。
- 為什麼修改：使用者要求每次修改都要被記錄，讓 Cursor 能知道 ChatGPT 或其他工具先前做過什麼。
- 影響範圍：Workflow。
- 測試狀態：不涉及頁面程式執行。
- 官網貼上版是否需要重新產生：否。
- 尚未完成 / 後續待辦：目前 P0 / P1 / P2 技術待辦仍以 `IMPORTANT_TODO.md` 為準。
- 相關 commit：`5baef9f505c6ece9c4a021e0e84db8b63945de76`

---

## 既有已知專案狀態（建立 changelog 前）

- 官網只貼 Cursor 產生的「官網貼上版 HTML」；大量 CSS / JS 位於外部檔案。
- 使用者不手動拆 CSS / JS；Cursor 負責產生完整貼上版。
- 官網貼上位置為 `#feature .content`。
- `#eg-experience` 為主要作用域。
- `#sidebar,#sidebar-share-btn{display:none !important}` 是使用者明確允許的全站例外，不得當成 bug 修回。
- 目前重要 P0：手機 viewport 高度基準、`safeTop/safeBot`、scroll 效能。
- 目前重要 P1：桌面 scroll / layout 效能與超長 track 檢查。
- 目前 P2：Mobile CSS 覆寫整理、`--ff-serif` 未定義。
- 正式上線前仍需由 Cursor 重新產生官網貼上版 HTML。

詳細內容請以 `PROJECT_STATUS.md`、`CHATGPT_CURSOR_BASELINE.md`、`IMPORTANT_TODO.md` 為準。
