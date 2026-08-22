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
- 影響範圍：Desktop / Mobile / Both
- 測試狀態
- 官網貼上版是否需要重新產生
- 尚未完成 / 後續待辦
- 對應 commit SHA（若已提交）

不得只寫「修正手機版」「優化 CSS」這類模糊紀錄。

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
  - Cursor 每次 pull 後需先讀 `IMPORTANT_TODO.md` 與 `PROJECT_CHANGELOG.md`。
  - 完成修改後必須更新 changelog，不能只改程式碼。
- 為什麼修改：使用者要求每次修改都要被記錄，讓 Cursor 能知道 ChatGPT 或其他工具先前做過什麼。
- 影響範圍：Both（工作流程）
- 測試狀態：不涉及頁面程式執行。
- 官網貼上版是否需要重新產生：否。
- 尚未完成 / 後續待辦：目前 P0 / P1 / P2 技術待辦仍以 `IMPORTANT_TODO.md` 為準。
- 對應 commit SHA：建立本檔後由 GitHub commit 產生。

---

## 既有已知專案狀態（建立 changelog 前）

以下屬於已確認但不是本 changelog 建立後的新程式修改：

- 官網只貼 Cursor 產生的「官網貼上版 HTML」；大量 CSS / JS 位於外部檔案。
- 使用者不手動拆 CSS / JS；Cursor 負責產生完整貼上版。
- 官網貼上位置為 `#feature .content`。
- `#eg-experience` 為主要作用域。
- `#sidebar,#sidebar-share-btn{display:none !important}` 是使用者明確允許的全站例外，不得當成 bug 修回。
- 目前重要 P0：手機 viewport 高度基準、`safeTop/safeBot`、scroll 效能。
- 目前重要 P1：桌面 scroll / layout 效能與超長 track 檢查。
- 目前 P2：Mobile CSS 覆寫整理、`--ff-serif` 未定義。
- 正式上線前仍需由 Cursor 重新產生官網貼上版 HTML。

詳細內容請以 `IMPORTANT_TODO.md` 為準。
