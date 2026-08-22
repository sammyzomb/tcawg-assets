# ChatGPT × Cursor × 使用者 協作基準表 — 埃及活動頁 / CAI12A

> 目的：讓使用者、ChatGPT、Cursor 使用同一套工作規則，避免重複分析、互相覆蓋、版本誤判、錯誤宣告上線、貼錯資源或無法回滾。
> 核心原則：**使用者決策；GitHub 同步；ChatGPT 分析與可授權的遠端修改；Cursor 本機驗證與貼上版產出；正式官網決定 LIVE。**

---

## 1. 六份核心文件與閱讀順序

每次開始處理埃及專案前，依序讀：

1. `PROJECT_STATUS.md` — 現在誰在做、哪個任務、目前狀態、官網狀態
2. `CHATGPT_CURSOR_BASELINE.md` — 三方協作與衝突處理規則
3. `IMPORTANT_TODO.md` — 現在要做什麼、優先順序
4. `PROJECT_CHANGELOG.md` — 已經做過什麼
5. `RELEASE_REGISTRY.md` — 每個 release 綁定哪些 CSS / JS / CMS / 測試 / LIVE 狀態
6. `DEPLOYMENT_CHECKLIST.md` — 產貼上版、正式貼上、驗證、回滾 Gate

Cursor 另受 `.cursor/rules/` 的 `alwaysApply` 規則約束。

---

## 2. 權威順序：文件衝突時怎麼判斷

若資訊互相衝突，依下列順序處理：

1. **使用者當下最新、明確指示** — 最高決策權；可改派 Owner、改需求、批准測試版或停止工作。
2. **正式官網實際狀態** — 對「目前 LIVE 是什麼」具有最高事實權威。
3. **`PROJECT_STATUS.md`** — 對「目前誰在做、工作進度」具有權威。
4. **`RELEASE_REGISTRY.md`** — 對「某 release 綁定哪些檔案 / URL / 測試 / LIVE 狀態」具有權威。
5. **`CHATGPT_CURSOR_BASELINE.md`** — 對工作程序與角色分工具有權威。
6. **`IMPORTANT_TODO.md`** — 對未完成事項與優先級具有權威。
7. **`PROJECT_CHANGELOG.md`** — 歷史紀錄，不用舊紀錄覆蓋現在狀態。
8. **GitHub 實際程式碼** — 對「程式目前真的寫了什麼」具有事實權威；若文件與程式碼不一致，先標記不一致並同步文件，不得假裝一致。
9. 聊天記憶、口頭「上一版 / 最新版 / 完成」等非正式描述不得凌駕上述來源。

發現衝突時：**先停止對衝突部分的實際修改，指出衝突，依權威來源校正，再繼續。**

---

## 3. 三方角色分工

| 工作 | ChatGPT | Cursor | 使用者 |
|---|---|---|---|
| 決定需求 / 是否改 | 協助判斷 | 協助判斷 | 最終決策 |
| 分析問題、找根因 | 主責 | 可協助 | 不需要 |
| 讀 GitHub | 可直接 | pull 後 | 不需要 |
| 修改 GitHub CSS / JS / HTML | 使用者要求時可直接 | 可做 | 不需要 |
| 操作使用者本機 | 不做 | 主責 | 不需要 |
| 本機預覽 / DevTools / 瀏覽器測試 | 無法直接操作使用者電腦 | 主責 | 必要時看結果 |
| 實機手機最終視覺確認 | 可依截圖分析 | 可做部分 | 最終確認 |
| 產 CMS 官網貼上版 | 可檢查規格 | 主責 | 不需要 |
| 貼官網後台 | 不做 | 不做 | 主責 |
| 宣告 `USER_PASTED` | 依使用者回報記錄 | 依使用者回報記錄 | 只有使用者能觸發 |
| 宣告 `LIVE_VERIFIED` | 依使用者確認記錄 | 依使用者確認記錄 | 只有使用者能最終確認 |
| 更新 status / TODO / changelog / release | 有變動時必須 | 有變動時必須 | 不要求手動編輯 |

---

## 4. 開發真實來源與 LIVE 真實來源分開

### 開發真實來源
GitHub 是 CSS / JS / HTML / 文件 / 規則的共同開發來源。

### LIVE 真實來源
正式官網實際載入內容才是 LIVE 真實來源。

**GitHub 最新 ≠ 官網 LIVE。**

任何人不得因為 commit、local test 或 paste HTML 已產生，就宣告已上線。

---

## 5. 狀態語言固定化

禁止把「最新版」「完成」「好了」單獨當正式狀態。

使用：

- `ANALYSIS_ONLY`
- `IN_PROGRESS`
- `CODE_FIXED`
- `LOCAL_TESTED`
- `PASTE_GENERATED`
- `USER_PASTED`
- `LIVE_VERIFIED`

Release registry 另可使用：`DEV` / `ROLLED_BACK` / `ABANDONED`。

Release 尚未指定：`UNASSIGNED`。
未知資料：`UNKNOWN`，不得猜。

---

## 6. ACTIVE OWNER 防衝突

實際修改前查看 `PROJECT_STATUS.md` → ACTIVE WORK。

- Owner=`NONE`：可開始，先登記自己。
- Owner=`ChatGPT`：Cursor 不重做同一任務。
- Owner=`Cursor`：ChatGPT 不重做同一任務。
- 使用者可隨時明確改派。

開始記錄：Owner / Task / Started / Base commit。
交接完成後：Owner=`NONE`。

### 中斷 / 遺留 Owner 恢復規則

Owner 是協作鎖，不是假設某工具會一直在線。

若 Owner 看起來殘留，但原工作階段已不存在：

1. 不自行猜測舊工作是否完成。
2. 先讀 changelog、最新 commits、status。
3. 使用者明確說「繼續 / 接手 / 改由你處理」即可視為授權解除或改派。
4. 新接手者在 changelog 記 `STALE OWNER RECOVERY`，寫明看到的最後狀態與接手 base commit。
5. 再將 Owner 改為新的實際執行者。

不得因 Owner 殘留讓專案永久卡死。

---

## 7. Cursor 開始工作安全流程

1. `git status`
2. Working tree 乾淨才 `git pull`
3. 有未提交修改時不盲目 pull；先確認、保存或正確處理
4. pull 後重新讀六份核心文件
5. 確認 ACTIVE OWNER
6. 確認目前 release / status / TODO
7. 才開始修改或測試

Browser simulation 與實體手機測試要分開記錄，不得互相冒充。

---

## 8. ChatGPT 開始直接修改安全流程

使用者要求 ChatGPT 直接修正時：

1. 讀六份核心文件
2. 讀最新相關程式碼
3. 確認 ACTIVE OWNER
4. Owner=`ChatGPT`
5. 以 GitHub 當下內容為 base
6. 修改後同步 status / TODO / changelog / release（若受影響）
7. 清楚寫出 Cursor 還要驗證什麼
8. Owner=`NONE`

只檢查不修改程式時可不 claim Owner；但若實際修改控制文件，仍要記錄。

---

## 9. 修改與測試誠實規則

每一個測試結果只能寫：

- `PASS`
- `FAIL`
- `NOT TESTED`
- `BLOCKED`

沒有實際測試就不得寫 PASS。

ChatGPT 無法直接操作使用者本機，所以不得把靜態程式檢查描述成「已通過本機瀏覽器測試」。
Cursor 的 DevTools mobile emulation 也不得描述成「iPhone / Android 實機已驗證」。

---

## 10. 修改紀錄強制規則

任何 CSS / JS / HTML / 外部資源 / Vimeo / CMS paste / 專案規則的實際修改，都必須更新 `PROJECT_CHANGELOG.md`。

每筆記錄：日期時間、修改者、目的、檔案、實際變更、原因、影響平台、測試、是否要重產 paste、未完成、相關 commit。

Commit SHA 不做自我引用循環：同 change set 可寫 `same change set / see git history`。

---

## 11. Release 不可變原則

每個準備上線的版本使用 `RYYYYMMDD-NN`。

一個 release 必須綁定：

- CSS 檔 + URL
- JS 檔 + URL
- CMS paste HTML
- 圖片來源狀態
- Desktop Vimeo
- Mobile Vimeo
- commits
- tests
- rollback target

### Freeze 後規則

當 release 已進入 `PASTE_GENERATED`：

- 若 CSS / JS / HTML / 外部資源有實質變更，不得偷偷沿用原 release。
- 建立新 release ID，重新測試、重新產 paste。
- `LIVE_VERIFIED` release 永遠不可被重新定義。

---

## 12. 已批准不得誤修的設計決策

- `#sidebar,#sidebar-share-btn{display:none !important}` 是使用者批准的全站例外。
- `#eg-experience` 是主要作用域。
- 官網只貼 Cursor 最終產生的完整 CMS paste HTML。
- 大量 CSS / JS 在外部檔案。
- 使用者不自行拆 CSS / JS 或人工拼版本。
- Hero 使用 Vimeo，Desktop / Mobile 分開。
- Reduced Motion 必須保留。

---

## 13. CMS Paste Gate

Cursor 產正式貼上版前必須依 `DEPLOYMENT_CHECKLIST.md`：

- 至少 `LOCAL_TESTED`，除非使用者明確要求測試版
- P0 完成或明確標記未完成
- release 已登記
- CSS / JS URL 與 release registry 一致
- 圖片、Desktop Vimeo、Mobile Vimeo 已確認
- control docs 同步
- rollback target / CMS 備份狀態已知

產出後只能標 `PASTE_GENERATED`。

---

## 14. 使用者貼上與 LIVE 記錄

若使用者回報「已貼上」但尚未說前台正常：

- 記 `USER_PASTED`
- 不升 `LIVE_VERIFIED`

若使用者明確確認正式頁正常：

- 更新 `PROJECT_STATUS.md`
- 更新 `RELEASE_REGISTRY.md`
- 更新 `PROJECT_CHANGELOG.md`
- 記 `LIVE_VERIFIED` 與時間

使用者不需要自己編輯這些 GitHub 文件；ChatGPT 或 Cursor 依使用者回報代為更新。

---

## 15. 回滾規則

正式貼新版前優先保存上一份可用 CMS 內容或已知 LIVE release。

失敗時：

1. 不在 CMS 臨時手改出無紀錄版本。
2. 回到明確 release ID 或確切備份。
3. 問題 release 記 `ROLLED_BACK`。
4. 更新實際 CURRENT LIVE。
5. 修正使用新 release ID，不重用失敗 release。

若原 LIVE 為 UNKNOWN，第一次替換前必須優先保存現行 CMS 內容，作為緊急回退依據。

---

## 16. P0 / P1 / P2 / Design

| 等級 | 定義 | 規則 |
|---|---|---|
| P0 | 功能錯誤、卡住、跳段、重大不穩 | 正式上線前優先完成 |
| P1 | 效能 / 穩定性高風險 | P0 後處理 |
| P2 | 維護性 / 低風險 | P0/P1 後整理 |
| Design | 視覺 / 文案 / 圖片 / 場景順序 | 使用者明確要求才改 |

---

## 17. ChatGPT → Cursor 交接最小內容

- Release / status
- Owner 是否釋放
- 已完成項目
- 修改檔案與 commits
- Cursor 要做的測試
- 明確 `NOT TESTED` 的項目
- 不要重做的項目
- 未完成 TODO
- 是否需要新 CMS paste

---

## 18. Cursor → ChatGPT 交接最小內容

- 測試環境 / 尺寸 / 實機或模擬
- PASS / FAIL / NOT TESTED / BLOCKED
- console 狀態
- P0/P1 驗證結果
- 額外修改
- release / status
- CMS paste 檔名
- CSS / JS 實際引用
- 未解決問題
- commits

---

## 19. 最終共同原則

**使用者是需求、改派、CMS 貼上與 LIVE 的最終決策者；ChatGPT 負責高價值分析與可直接在 GitHub 完成的修改；Cursor 負責使用者本機環境、瀏覽器驗證與最終貼上版產出；GitHub 是三方的開發、版本與交接中心；正式官網是 LIVE 的最終事實來源。**
