# ChatGPT × Cursor × 使用者 協作基準表 — 埃及活動頁 / CAI12A

> 目的：讓使用者、ChatGPT、Cursor 使用同一套工作規則，避免重複分析、互相覆蓋、版本誤判、錯誤宣告上線或產出錯誤官網貼上版。
> 中央狀態：`PROJECT_STATUS.md`

---

## 1. 四份核心文件與閱讀順序

每次開始處理埃及專案前，依序讀：

1. `PROJECT_STATUS.md` — 現在誰在做、哪一版、進行到哪一步、官網哪一版
2. `CHATGPT_CURSOR_BASELINE.md` — 三方怎麼一起工作
3. `IMPORTANT_TODO.md` — 現在要做什麼、優先順序
4. `PROJECT_CHANGELOG.md` — 已經做過什麼

Cursor 另受 `.cursor/rules/` 的 alwaysApply 規則約束。

---

## 2. 三方角色分工

| 工作 | ChatGPT | Cursor | 使用者 |
|---|---|---|---|
| 分析問題、找根因 | 主責 | 可協助 | 決定需求 |
| 讀 GitHub 最新程式 | 可直接做 | pull 後做 | 不需要 |
| 修改 GitHub CSS / JS / HTML | 使用者要求時可直接做 | 可做 | 不需要 |
| 操作本機檔案 | 不做 | 主責 | 不需要 |
| 本機預覽 / DevTools / 瀏覽器測試 | 無法直接操作使用者電腦 | 主責 | 必要時確認結果 |
| 實機手機視覺確認 | 可依截圖分析 | 可做自動化部分 | 最終確認 |
| 產生官網貼上版 HTML | 可檢查 | 主責 | 不需要 |
| 貼入官網後台 | 不做 | 不做 | 主責 |
| 宣告正式 LIVE | 不可自行宣告 | 不可自行宣告 | 只有使用者可最終確認 |
| 更新狀態 / TODO / changelog | 有變動時必須 | 有變動時必須 | 不需要 |

---

## 3. 兩個不同的真實來源

### 開發真實來源
GitHub 是 CSS / JS / HTML / 文件 / 規則的共同開發來源。

### 正式上線真實來源
官網實際正在載入的內容才是 LIVE 真實來源。

**GitHub 最新版本 ≠ 官網目前上線版本。**

只有使用者把 Cursor 產生的貼上版 HTML 貼入官網並確認前台正常後，才能標記 `LIVE_VERIFIED`。

---

## 4. 禁止模糊用語

三方交接時，不以「最新版」「完成」作為正式狀態。

必須使用：

- 明確 release ID，例如 `R20260822-01`
- 明確狀態：
  - `ANALYSIS_ONLY`
  - `IN_PROGRESS`
  - `CODE_FIXED`
  - `LOCAL_TESTED`
  - `PASTE_GENERATED`
  - `USER_PASTED`
  - `LIVE_VERIFIED`

release 尚未指定時寫 `UNASSIGNED`，不得猜測。

---

## 5. ACTIVE OWNER 防衝突

實際修改前先看 `PROJECT_STATUS.md` → ACTIVE WORK。

- Owner=`NONE`：可開始工作，先登記自己為 Owner。
- Owner=`ChatGPT`：Cursor 不得同時重做同一任務。
- Owner=`Cursor`：ChatGPT 不得同時重做同一任務。
- 使用者明確改派時，才可變更 Owner。

開始時記錄：Owner / Task / Started / Base commit。
完成提交與交接後改回 `NONE`。

---

## 6. Cursor 開始工作的安全流程

Cursor 不得無條件先 `git pull`。

固定流程：

1. `git status`
2. working tree 乾淨 → `git pull`
3. 有未提交修改 → 不直接 pull，先確認差異來源並保存 / 提交 / 處理
4. pull 後讀四份核心文件
5. 確認 ACTIVE OWNER
6. 才開始實際修改

---

## 7. ChatGPT 開始修改的安全流程

ChatGPT 在使用者要求直接修改時：

1. 讀四份核心文件
2. 讀 GitHub 最新相關 CSS / JS / HTML
3. 確認 ACTIVE OWNER
4. 登記 Owner=`ChatGPT`
5. 以最新 GitHub 內容為 base 修改，不憑聊天記憶覆蓋
6. 更新 changelog / TODO / status
7. 提交後交接 Cursor
8. Owner 改回 `NONE`

若只是檢查而不修改，不需要 claim Owner；若修改文件本身，仍屬實際修改並需記錄。

---

## 8. 防止互相踩檔

1. 同一問題同一時間只由一方修改。
2. ChatGPT 提交後，Cursor 先 pull、讀 changelog、驗證，不重做。
3. Cursor 提交後，ChatGPT 重新讀 GitHub 再繼續。
4. 不從舊版 CSS / JS 整份覆蓋新版。
5. 發現 GitHub 與本機不同步時先停手，比對差異後再處理。
6. 不自行回復使用者已批准的設計決策。

---

## 9. 修改紀錄規則

任何 CSS / JS / HTML / 外部資源 / Vimeo / CMS 貼上版 / 專案規則的實際修改，都必須更新 `PROJECT_CHANGELOG.md`。

每筆至少記錄：

- 日期時間（Asia/Taipei）
- 修改者
- 修改目的
- 修改檔案
- 實際變更
- 原因
- Desktop / Mobile / Both / Workflow 影響
- 測試狀態
- 是否需要重新產 CMS 貼上版
- 未完成事項
- 相關 code commit SHA（已知時）

### commit SHA 特別規則
不得為了讓 changelog 記錄「包含它自己的 commit SHA」而形成無限追加 commit。

- 若 code commit 已存在，記相關 code commit SHA。
- 若 changelog 與變更在同一 change set，寫 `same change set / see git history` 即可。

---

## 10. 已批准不得誤修的設計決策

- `#sidebar,#sidebar-share-btn{display:none !important}` 是使用者批准的全站例外。
- `#eg-experience` 是主要頁面作用域。
- 官網後台只貼 Cursor 最後產生的完整「官網貼上版 HTML」。
- 大量 CSS / JS 位於外部檔案。
- 使用者不自行拆 CSS / JS 或人工拼接版本。
- Hero 使用 Vimeo，Desktop / Mobile 分開。
- Reduced Motion 必須保留。

---

## 11. Release 必須綁定資源

準備上線的 release 必須明確綁定：

- release ID
- CSS 檔名 / URL
- JS 檔名 / URL
- CMS paste HTML 檔名
- 圖片來源
- Desktop Vimeo
- Mobile Vimeo
- 相關 commits
- 測試狀態

禁止只說「請用最新 CSS / JS」。

---

## 12. CMS 貼上版產生 Gate

Cursor 只有在以下條件達成後才能產正式貼上版：

- 狀態至少 `LOCAL_TESTED`
- P0 已完成，或使用者明確要求測試版
- HTML 引用的 CSS 與目標 release 一致
- HTML 引用的 JS 與目標 release 一致
- 圖片來源確認
- Desktop / Mobile Vimeo 確認
- `IMPORTANT_TODO.md` 已同步
- `PROJECT_CHANGELOG.md` 已同步
- `PROJECT_STATUS.md` 已同步

產出後狀態為 `PASTE_GENERATED`，**不是 LIVE**。

---

## 13. 正式上線 Gate

使用者：

1. 打開 Cursor 產生的官網貼上版 HTML
2. 全選、複製
3. 貼入官網後台「行程特色」
4. 儲存
5. 看正式前台
6. 確認正常後，狀態才可成為 `LIVE_VERIFIED`

ChatGPT / Cursor 不得因為 commit、local test 或 paste file 已產生就自行宣告上線。

---

## 14. 問題優先級

| 等級 | 定義 | 處理方式 |
|---|---|---|
| P0 | 造成手機/桌面功能錯誤、卡住、跳段或明顯不穩 | 先修；未完成不應正式上線 |
| P1 | 效能、穩定性、高風險但不一定立即壞 | P0 後處理 |
| P2 | 維護性、重複 CSS、低風險問題 | P0/P1 後整理 |
| Design | 視覺、文案、圖片、場景順序 | 只有使用者明確要求才改 |

---

## 15. ChatGPT → Cursor 交接格式

ChatGPT 修改後必須讓 Cursor 看得懂：

- Owner 已釋放與否
- Release / status
- 已完成問題
- 修改檔案
- 相關 commit
- Cursor 只需要做的驗證
- 不要重做的事項
- 未完成 TODO
- 是否需要重新產貼上版

---

## 16. Cursor → ChatGPT 交接格式

Cursor 完成後記錄：

- 實際測試環境與尺寸
- 是否 console error
- 哪些 P0/P1 已驗證
- 是否有追加修正
- 新 release / status
- 是否產生貼上版
- 貼上版檔名
- CSS / JS 實際引用版本
- 尚未解決問題
- 相關 commit

---

## 17. 最終共同原則

**使用者是需求與 LIVE 的最終決策者；ChatGPT 負責高價值分析與可直接在 GitHub 完成的修改；Cursor 負責本機環境、瀏覽器驗證與最終貼上版產出；GitHub 是開發與交接中心；正式官網是 LIVE 狀態的最終依據。**
