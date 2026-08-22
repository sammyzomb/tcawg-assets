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

## 2026-08-22 10:48 +08:00 — 完善三方協作、Release、上線與回滾制度

- 修改者：ChatGPT
- 修改目的：將使用者 / ChatGPT / Cursor 協作制度補到可長期運作，消除文件衝突、Owner 遺留、release 變動、測試誤報、貼錯外部資源、LIVE 誤判及無法回滾等剩餘風險。
- 修改檔案：
  - `PROJECT_STATUS.md`
  - `CHATGPT_CURSOR_BASELINE.md`
  - `RELEASE_REGISTRY.md`（新增）
  - `DEPLOYMENT_CHECKLIST.md`（新增）
  - `.cursor/rules/egypt-project-status.mdc`
  - `.cursor/rules/chatgpt-cursor-baseline.mdc`
  - `.cursor/rules/egypt-change-log.mdc`
  - `PROJECT_CHANGELOG.md`
- 實際變更內容：
  - 新增 `RELEASE_REGISTRY.md`，每個準備測試 / 貼上 / LIVE 的版本使用唯一 `RYYYYMMDD-NN`，並綁定 CSS、JS、CMS paste、圖片、Vimeo、commits、tests、rollback target。
  - 新增 `DEPLOYMENT_CHECKLIST.md`，建立 PRE-WORK、CODE READY、LOCAL TEST、RELEASE FREEZE、CMS PASTE、BACKUP/ROLLBACK、USER DEPLOY、LIVE VERIFY、FAILURE/ROLLBACK 九階段 Gate。
  - 新增 release freeze / immutability：`PASTE_GENERATED` 後若實質修改資源，必須新 release 或重新解除 freeze 並重測；`LIVE_VERIFIED` release 不得重新定義。
  - 新增正式文件權威順序，明確處理使用者指示、正式官網、PROJECT_STATUS、RELEASE_REGISTRY、BASELINE、TODO、CHANGELOG 與實際程式碼衝突。
  - 新增 ACTIVE OWNER 遺留 / 中斷恢復流程 `STALE OWNER RECOVERY`，避免工具工作階段中斷後專案永久鎖死。
  - 測試結果固定使用 `PASS / FAIL / NOT TESTED / BLOCKED`；模擬器不得冒充實機測試，ChatGPT 靜態檢查不得冒充本機瀏覽器 PASS。
  - 新增 UNKNOWN LIVE 處理：不得由 GitHub 檔名或日期猜目前官網版本；第一次正式替換前優先保存目前 CMS 內容作為回退依據。
  - 新增使用者回報狀態規則：「已貼上」只能到 `USER_PASTED`；使用者明確確認正式頁正常後才能 `LIVE_VERIFIED`，由 ChatGPT 或 Cursor 代為更新 GitHub 文件。
  - 修正舊 Cursor rules 與新制度的矛盾，舊規則現在明確 defer 到六份核心文件與 `egypt-project-status.mdc`，並改為 `git status` 在 `git pull` 之前。
- 為什麼修改：先前制度已可工作，但仍可能因多份 alwaysApply 規則互相矛盾、Owner 殘留、release 沒有不可變性、測試語意不精確或缺少備份 / rollback Gate，造成三方誤解或正式官網風險。
- 影響範圍：Workflow；不改目前埃及前台 CSS / JS 行為。
- 測試狀態：Workflow 文件與 Cursor rules 已同步；前台功能 `NOT TESTED`，因本次沒有修改 CSS / JS。
- 官網貼上版是否需要重新產生：否。
- 尚未完成 / 後續待辦：
  - CURRENT LIVE release / CSS / JS / CMS paste 仍為 `UNKNOWN`，不得猜測。
  - P0 / P1 / P2 技術修正仍依 `IMPORTANT_TODO.md`。
  - 下次正式替換官網前，若 LIVE 仍 UNKNOWN，應先保存現行 CMS 內容作為 rollback backup。
- 相關 commits：
  - `cca325fb03024d9c354dee4d00792f405a1f6b06` — claim Owner / 補 UNKNOWN LIVE 規則
  - `51d8049c238361e7eabaa6971d1ebf5521c19cb7` — 新增 release registry
  - `418944928388ef3bf8b48983e3da94ee00b7ccb8` — 新增 deployment / rollback checklist
  - `f6fb325edf4b428203b08c312dfc5711e3a769a7` — 強化 Cursor project-status rule
  - `ef30db3ea9c01e444fde3b58b751d1fab4a513e9` — 完善三方協作與權威 / recovery 規則
  - `b9a06a3cf51330af73850503128aea667227e545` — 對齊舊 Cursor baseline rule
  - `3eeb0923eec2ebf385fcf7f550ee5b4d38b0885f` — 對齊 change-log rule

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
- 實際變更內容：建立協作文件、角色分工、交接格式、優先級與貼上版產生條件。
- 為什麼修改：使用者希望建立一份基準表，讓 ChatGPT 與 Cursor 可以以同一套標準共同工作。
- 影響範圍：Workflow。
- 測試狀態：不涉及前台執行測試。
- 官網貼上版是否需要重新產生：否。
- 尚未完成 / 後續待辦：已由後續三方協作制度進一步補強。
- 相關 commits：`88f19bad9c5fed4c0306420e344759b1b1a59aca`、`44632aa504c6d78b79913cd8d8ec842b5e824032`

---

## 2026-08-22 10:19 +08:00 — 建立強制修改紀錄機制

- 修改者：ChatGPT
- 修改目的：確保每一次修改都留下可供 Cursor 接續的完整紀錄。
- 修改檔案：`PROJECT_CHANGELOG.md`、`.cursor/rules/egypt-change-log.mdc`
- 實際變更內容：建立修改紀錄檔並強制實際修改後留下可交接紀錄。
- 為什麼修改：使用者要求每次修改都要被記錄，讓 Cursor 能知道 ChatGPT 或其他工具先前做過什麼。
- 影響範圍：Workflow。
- 測試狀態：不涉及頁面程式執行。
- 官網貼上版是否需要重新產生：否。
- 尚未完成 / 後續待辦：技術待辦仍以 `IMPORTANT_TODO.md` 為準。
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

詳細內容請以六份核心控制文件為準。
