# ChatGPT × Cursor 協作基準表 — 埃及活動頁 / CAI12A

> 目的：讓 ChatGPT 與 Cursor 使用同一套工作規則，避免重複分析、互相覆蓋、遺漏修改紀錄或產出錯誤官網貼上版。
> 優先順序：本文件定義「怎麼一起工作」；`IMPORTANT_TODO.md` 定義「現在要做什麼」；`PROJECT_CHANGELOG.md` 記錄「已經做了什麼」。

---

## 1. 三份核心文件

| 文件 | 用途 | 誰要讀 |
|---|---|---|
| `CHATGPT_CURSOR_BASELINE.md` | 協作基準、角色分工、交接規則 | ChatGPT、Cursor |
| `IMPORTANT_TODO.md` | 目前問題、優先順序、上線條件 | ChatGPT、Cursor |
| `PROJECT_CHANGELOG.md` | 每次實際修改的完整紀錄 | ChatGPT、Cursor |

**每次開始處理埃及專案前，依序讀這三份。**

---

## 2. 角色分工基準表

| 工作 | ChatGPT | Cursor | 使用者 |
|---|---|---|---|
| 分析問題、找根因 | 主責 | 可協助 | 不需要 |
| 讀 GitHub 最新程式碼 | 可直接做 | `git pull` 後做 | 不需要 |
| 修改 GitHub CSS / JS / HTML | 使用者要求時可直接做 | 可做 | 不需要 |
| 操作本機檔案 | 不做 | 主責 | 不需要 |
| 跑本機預覽 / 瀏覽器測試 | 無法直接操作使用者電腦 | 主責 | 必要時看結果 |
| Chrome DevTools / 手機模擬 | 不直接操作 | 主責 | 不需要 |
| 實機 Safari / Chrome 視覺確認 | 可根據截圖分析 | 執行可自動化部分 | 最終確認 |
| 產生官網貼上版 HTML | 可規劃 / 檢查 | 主責 | 不需要 |
| 貼入官網後台 | 不做 | 不做，除非未來明確授權工具 | 主責 |
| 更新 `IMPORTANT_TODO.md` | 有狀態變化時必須 | 有狀態變化時必須 | 不需要 |
| 更新 `PROJECT_CHANGELOG.md` | 只要有實際修改就必須 | 只要有實際修改就必須 | 不需要 |

---

## 3. GitHub 是共同真實來源

1. ChatGPT 與 Cursor 都以 GitHub 最新版本為準。
2. 不以聊天內容、本機舊檔、舊貼上版作為最終真實來源。
3. Cursor 開始工作前先 `git pull`。
4. ChatGPT 要修改前先讀 GitHub 目前檔案，不憑舊記憶直接覆蓋。
5. 若 ChatGPT 已經提交 GitHub，Cursor **不要重新自行實作同一修正**；先 pull、讀 changelog、再驗證。
6. 若 Cursor 已經提交 GitHub，ChatGPT 下次先讀 changelog / 最新檔案，再繼續。

---

## 4. 標準工作流程

### A. 使用者在 ChatGPT 要求檢查但不修改

1. ChatGPT 讀最新 GitHub。
2. 找出問題與風險。
3. 不改程式碼。
4. 若形成重要待辦，可更新 `IMPORTANT_TODO.md`。
5. 若只有分析、沒有改檔，不必新增程式修改紀錄；若更新了規則 / TODO，則需記錄 changelog。

### B. 使用者在 ChatGPT 要求直接修正

1. ChatGPT 先讀：
   - `CHATGPT_CURSOR_BASELINE.md`
   - `IMPORTANT_TODO.md`
   - `PROJECT_CHANGELOG.md`
   - 最新相關 CSS / JS / HTML
2. ChatGPT 直接修改 GitHub。
3. 同一次工作更新 `PROJECT_CHANGELOG.md`。
4. 若待辦狀態改變，同步更新 `IMPORTANT_TODO.md`。
5. 告知使用者 commit SHA、改了什麼、還需要 Cursor 驗證什麼。
6. Cursor 下次 `git pull` 後只做本機驗證、必要修正與貼上版產出，不重做已完成修改。

### C. 使用者在 Cursor 要求處理

1. Cursor `git pull`。
2. 依序讀三份核心文件。
3. 先確認最近 changelog 是否有 ChatGPT 剛做的修改。
4. 不重做已完成事項。
5. 執行本機預覽、瀏覽器測試、必要修正。
6. 每次實際修改同步更新 changelog。
7. 完成重要待辦後更新 TODO checkbox / 狀態。
8. 所有必要測試完成後，再產官網貼上版 HTML。

---

## 5. 每次修改的強制紀錄格式

任何 CSS / JS / HTML / 外部資源 / 規則 / 貼上版修改，`PROJECT_CHANGELOG.md` 必須記錄：

- 日期時間（Asia/Taipei）
- 修改者：ChatGPT / Cursor / 人工
- 修改目的
- 修改檔案
- 實際變更內容
- 為什麼修改
- 影響：Desktop / Mobile / Both / Workflow
- 測試狀態
- 官網貼上版是否需要重新產生
- 未完成事項
- commit SHA

**禁止只寫「修正手機版」「優化」等模糊描述。**

---

## 6. 防止互相踩檔規則

1. 修改前一定讀最新檔案 SHA / 最新內容。
2. 同一問題同一時間只由一方主責修改。
3. ChatGPT 已提交後，Cursor 先 pull 再繼續。
4. Cursor 已提交後，ChatGPT 先重新讀 GitHub 再修改。
5. 不從舊版 CSS / JS 複製整份覆蓋新版。
6. 不自行回復使用者已批准的設計決策。
7. 若發現 GitHub 與本機不同步，先停止修改並以 pull / diff 確認差異。

---

## 7. 目前已批准且不得誤修的設計決策

- `#sidebar,#sidebar-share-btn{display:none !important}` 是使用者批准的全站例外。
- `#eg-experience` 仍是主要頁面作用域。
- 官網後台只貼 Cursor 最後產生的完整「官網貼上版 HTML」。
- 大量 CSS / JS 位於外部檔案，不要求使用者自己拆分或拼接。
- Hero 使用 Vimeo，Desktop / Mobile 分開。
- Reduced Motion 必須保留。

---

## 8. 官網貼上版產生條件

Cursor **只有在以下條件達成後**才產新的正式貼上版：

- P0 必修項目已完成或明確標示尚未完成但使用者要求測試版。
- 最新 CSS / JS 已 pull。
- Desktop 與 Mobile 基本測試完成。
- 外部 CSS / JS URL 指向最新正式版本。
- 圖片來源確認。
- Desktop / Mobile Vimeo 確認。
- `PROJECT_CHANGELOG.md` 已更新。
- `IMPORTANT_TODO.md` 狀態已同步。

產生後，使用者只需要：**全選 → 複製 → 貼入官網後台「行程特色」→ 儲存。**

---

## 9. 問題優先級共同定義

| 等級 | 定義 | 處理方式 |
|---|---|---|
| P0 | 會造成手機/桌面功能錯誤、卡住、跳段、明顯不穩 | 先修，未完成不應正式上線 |
| P1 | 效能、穩定性、較高風險但不一定立即壞 | P0 後處理 |
| P2 | 維護性、字體、重複 CSS、低風險問題 | P0/P1 後整理 |
| Design | 視覺偏好、文案、圖片、場景順序 | 只有使用者明確要求才改 |

---

## 10. ChatGPT → Cursor 標準交接格式

ChatGPT 修改完成後，應留下足夠資訊讓 Cursor直接接手：

- 已完成：什麼問題
- 修改檔案：哪些
- commit：SHA
- 需要 Cursor 做：本機測試 / DevTools / 實機驗證 / 產貼上版
- 不要重做：哪些已完成事項
- 未完成：哪些 TODO

Cursor 不需要重新分析全部專案，先按此交接驗證。

---

## 11. Cursor → ChatGPT 標準交接格式

Cursor 完成後，應在 changelog 留下：

- 實際測試環境與尺寸
- 是否有 console error
- 哪些 P0 / P1 已完成
- 是否產生新貼上版
- 新貼上版檔名
- 是否仍有手機 / 桌面問題
- commit SHA

這樣使用者回到 ChatGPT 時，ChatGPT 可直接讀 GitHub 繼續，不需要使用者重新解釋。

---

## 12. 最終共同原則

**ChatGPT 負責高價值分析與可直接在 GitHub 完成的修改；Cursor 負責使用者本機環境、瀏覽器驗證與最終貼上版產出；GitHub 文件負責兩者之間的狀態同步。**

任何一方完成實際修改，都必須留下可讓另一方無縫接手的紀錄。
