# ChatGPT × Cursor × 使用者 協作基準表 — 埃及活動頁 / CAI12A

> 目的：讓使用者、ChatGPT、Cursor 使用同一套工作規則，避免重複分析、互相覆蓋、版本誤判、錯誤宣告上線、貼錯資源或無法回滾。
> 核心原則：**使用者決策；GitHub 同步；ChatGPT 分析與可授權的遠端修改；Cursor 本機驗證與貼上版產出；正式官網決定 LIVE。**

---

## 1. 七份核心文件與閱讀順序

每次開始處理埃及專案前，依序讀：

1. `PROJECT_STATUS.md` — 現在誰在做、哪個任務、目前狀態、官網狀態
2. `CHATGPT_CURSOR_BASELINE.md` — 三方協作與衝突處理規則
3. `IMPORTANT_TODO.md` — 現在要做什麼、優先順序
4. `PROJECT_CHANGELOG.md` — 已經做過什麼
5. `RELEASE_REGISTRY.md` — release 綁定的 CSS / JS / CMS / 測試 / LIVE 狀態
6. `DEPLOYMENT_CHECKLIST.md` — 測試、貼上、正式部署、回滾 Gate
7. `MOBILE_COMMUTE_WORKFLOW.md` — 使用者只有手機時的延續工作方式

Cursor 的主規則為 `.cursor/rules/egypt-project-status.mdc`；手機情境再加 `.cursor/rules/mobile-commute-workflow.mdc`。

---

## 2. 分領域權威，不使用單一排名誤判

不同問題由不同來源決定，不把所有資訊硬排成同一條順位：

| 問題 | 權威來源 |
|---|---|
| 使用者要不要改、改什麼、是否改派 | 使用者當下最新明確指示 |
| 正式官網目前實際呈現什麼 | 正式官網實際狀態 |
| 正式官網對應哪個 release / CSS / JS / CMS | `PROJECT_STATUS.md` + `RELEASE_REGISTRY.md`；未知就維持 `UNKNOWN` |
| 現在誰在做、進度到哪 | `PROJECT_STATUS.md` |
| 某 release 綁定什麼檔案 / URL / 測試 | `RELEASE_REGISTRY.md` |
| 三方怎麼工作 | 本 `CHATGPT_CURSOR_BASELINE.md` |
| 未完成事項 / 優先級 | `IMPORTANT_TODO.md` |
| 歷史上改過什麼 | `PROJECT_CHANGELOG.md` |
| 程式此刻實際寫了什麼 | GitHub 實際程式碼 |
| 上線 / 回滾需要過哪些 Gate | `DEPLOYMENT_CHECKLIST.md` |
| 手機通勤怎麼交接 | `MOBILE_COMMUTE_WORKFLOW.md` |

若同一領域的文件與實際事實衝突：**停止該衝突部分的修改 → 指出差異 → 依該領域權威校正 → 同步其他文件 → 再繼續。**

聊天記憶、口頭「最新版 / 上一版 / 完成」不得覆蓋上述正式來源。

---

## 3. 三方角色分工

| 工作 | ChatGPT | Cursor | 使用者 |
|---|---|---|---|
| 決定需求 / 是否改 / 是否改派 | 協助判斷 | 協助判斷 | 最終決策 |
| 分析問題、找根因 | 主責 | 可協助 | 不需要 |
| 讀 GitHub | 可直接 | pull 後 | 不需要 |
| 修改 GitHub CSS / JS / HTML | 使用者要求時可直接 | 可做 | 不需要 |
| 操作使用者本機 | 不做 | 主責 | 不需要 |
| 本機預覽 / DevTools / console / breakpoint 測試 | 不可直接操作使用者電腦 | 主責 | 必要時確認結果 |
| 實機手機觀察 | 可依使用者截圖分析 | 可做可取得的部分 | 最終提供 / 確認實機結果 |
| 產 CMS 官網貼上版 | 可審查 | 主責 | 不需要 |
| 第一次制度化上線前保存舊 CMS | 提醒與記錄 | 提醒 | **一次性主責** |
| 貼官網後台 | 不做 | 不做 | 主責 |
| 觸發 `USER_PASTED` | 依使用者回報記錄 | 依使用者回報記錄 | 只有使用者能觸發 |
| 最終確認 `LIVE_VERIFIED` | 依使用者確認記錄 | 依使用者確認記錄 | 只有使用者能觸發 |
| 更新 status / TODO / changelog / release | 有變動時必須 | 有變動時必須 | 不要求手動編輯 GitHub 文件 |

使用者日常不需要手改 CSS / JS，也不需要人工拼接版本。

---

## 4. 開發真實來源、LIVE 真實來源與 LIVE→CODE 對應

### 開發真實來源
GitHub 是 CSS / JS / HTML / 文件 / 規則的共同開發來源。

### LIVE 真實來源
正式官網實際呈現內容才是 LIVE 真實來源。

### LIVE→CODE correlation

- `KNOWN`：已確認正式官網對應某一 release / CSS / JS / CMS paste。
- `UNKNOWN`：正式頁看得到，但不知道它實際引用哪一版開發資源。

**GitHub 最新 ≠ 官網 LIVE。**

當 LIVE→CODE=`UNKNOWN`：
- 可以根據正式頁截圖發現問題。
- 可以針對目前 Development code 修正。
- 但不得宣稱「已直接修到官網目前正在執行的同一份程式」。
- 第一次成功建立 `LIVE_VERIFIED` release 後，要把 release / CSS / JS / CMS paste 回填，讓 correlation 變 `KNOWN`。

---

## 5. 狀態語言固定化

正式交接只使用：

- `ANALYSIS_ONLY`
- `IN_PROGRESS`
- `CODE_FIXED`
- `LOCAL_TESTED`
- `PASTE_GENERATED`
- `USER_PASTED`
- `LIVE_VERIFIED`

Release registry 另可使用：`DEV` / `ROLLED_BACK` / `ABANDONED`。

Release 尚未指定：`UNASSIGNED`。
未知資料：`UNKNOWN`。
禁止把「最新版」「完成」「好了」單獨當正式狀態。

---

## 6. ACTIVE OWNER 是 SOFT LOCK

Owner 是協作鎖，不是 Git 原子鎖，因此需要二次檢查。

### 開始前

1. 讀 `PROJECT_STATUS.md`。
2. Owner=`NONE` 才能 claim。
3. 記錄 Owner / Task / Started / Base commit。
4. Owner=`ChatGPT` 時 Cursor 不重做同一任務；Owner=`Cursor` 時 ChatGPT 不重做同一任務。
5. 使用者可明確改派。

### 提交前二次檢查

實際 commit / push 前再次確認：

- `PROJECT_STATUS.md` Owner 仍是自己。
- branch HEAD / latest remote state 沒有出現未處理的新變更。
- 最新 `PROJECT_CHANGELOG.md` 沒有另一方對同一問題的新修改。

若任一項改變：**STOP → SYNC → DIFF / REVIEW → 必要時重新套用修改 → 再提交。**

### 中斷 / STALE OWNER RECOVERY

若 Owner 殘留但舊工作階段不存在：

1. 不猜舊工作是否完成。
2. 讀 changelog、最新 commits、status。
3. 使用者明確「繼續 / 接手 / 改由你處理」即可解除 / 改派。
4. 新接手者記 `STALE OWNER RECOVERY` 與接手 base commit。
5. 再 claim 新 Owner。

交接結束後 Owner 必須回 `NONE`。

---

## 7. Cursor 本機開始流程

1. `git status`
2. working tree 乾淨才 `git pull`
3. 有未提交修改時不盲目 pull；先確認、保存、提交或正確處理
4. pull 後讀七份核心文件
5. 確認 ACTIVE OWNER
6. 記錄 base HEAD
7. 確認 release / status / TODO
8. 修改 / 提交前執行 soft-lock 二次檢查
9. 才進行實際修改、測試與提交

---

## 8. ChatGPT 直接修改流程

使用者要求 ChatGPT「直接修」時：

1. 讀七份核心文件
2. 讀最新相關程式碼
3. 確認 ACTIVE OWNER
4. claim Owner=`ChatGPT`
5. 記 base commit / GitHub 最新內容
6. 若 LIVE→CODE=`UNKNOWN`，明確區分「正式頁觀察」與「Development code 修正」
7. 只改要求範圍，不順手改 Design
8. 提交前重新讀 status / latest HEAD / changelog，做 soft-lock 二次檢查
9. 修改後同步 status / TODO / changelog / release（若受影響）
10. 清楚交接 Cursor 仍需驗證什麼
11. Owner=`NONE`

只分析、不改任何檔案時不需 claim；一旦修改控制文件本身，仍屬實際修改並要記錄。

---

## 9. 測試誠實規則與三層 Gate

每個測試結果只使用：

- `PASS`
- `FAIL`
- `NOT TESTED`
- `BLOCKED`

沒有實際執行就不得寫 `PASS`。
ChatGPT 靜態檢查不是本機瀏覽器 PASS；DevTools mobile emulation 不是實機 PASS。

### Level A — 必要本機驗證（Cursor）

至少：Desktop Chrome、Desktop Edge（可用時）、390px mobile emulation、767/768、1024、1440、console major error、相關 scroll / backward scroll、Hero Desktop/Mobile、Reduced Motion。

### Level B — 手機 P0 的必要實機驗證

只要 release 涉及 viewport / sticky / browser toolbar / mobile scroll 等 P0：

- 至少一台真實手機。
- iPhone Safari 特有問題 → iPhone Safari 實機。
- Android Chrome 特有問題 → Android Chrome 實機。
- 需包含瀏覽器工具列 / 網址列展開與收合情境。

若必要 Level B 尚未做，該 P0 release 不能標 production-ready，除非使用者明確接受 emergency / test risk。

### Level C — 條件式驗證

iPhone Chrome、Samsung Internet、其他特定裝置 / 瀏覽器；當問題涉及該環境或裝置可取得時執行。

---

## 10. 修改紀錄強制規則

任何 CSS / JS / HTML / 外部資源 / Vimeo / CMS paste / 專案規則的實際修改，都必須更新 `PROJECT_CHANGELOG.md`。

每筆記錄：日期時間、修改者、目的、檔案、實際變更、原因、影響平台、測試、是否要重產 paste、未完成、相關 commit。

Commit SHA 不做自我引用循環；同 change set 可寫 `same change set / see git history`。

---

## 11. Release 不可變原則

每個準備上線的版本使用 `RYYYYMMDD-NN`。

必須綁定：CSS 檔 + URL、JS 檔 + URL、CMS paste HTML、圖片來源、Desktop Vimeo、Mobile Vimeo、commits、tests、rollback target。

當 release 進入 `PASTE_GENERATED` 後：
- CSS / JS / HTML / 外部資源有實質變更，不得偷偷沿用原 release。
- 原則上建立新 release，重新測試、重新產 paste。
- `LIVE_VERIFIED` release 永遠不可重新定義。

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

Cursor 產正式貼上版前依 `DEPLOYMENT_CHECKLIST.md`：

- 至少 `LOCAL_TESTED`，除非使用者明確要求測試版
- P0 完成或明確標記未完成
- release 已登記
- CSS / JS URL 與 release registry 一致
- 圖片、Desktop Vimeo、Mobile Vimeo 已確認
- control docs 同步
- rollback target / CMS 備份狀態已知
- 若 release 涉及手機 P0，Level B 必要實機測試已 PASS，或使用者明確接受 emergency / test risk

產出後只能標 `PASTE_GENERATED`，不是 LIVE。

---

## 14. 第一次制度化上線的 CMS 備份責任

CURRENT LIVE 尚為 `UNKNOWN` 時，第一次換成新制度管理的 release 前，使用者有一次性責任：

1. 進官網後台「行程特色」。
2. 在貼新版之前，把目前完整內容全選複製保存。
3. 備份需要有可辨識的日期 / 名稱 / 保存位置。
4. 將備份狀態記入 `PROJECT_STATUS.md` / changelog。
5. 才貼新的 CMS paste HTML。

建立第一個可靠 `LIVE_VERIFIED` release 後，往後主要依 `RELEASE_REGISTRY.md` 管理 rollback。

---

## 15. 使用者貼上與 LIVE 記錄

使用者回報「已貼上」但尚未確認正式頁正常：只記 `USER_PASTED`。

使用者明確確認正式頁正常後：
- `PROJECT_STATUS.md` → `LIVE_VERIFIED`
- `RELEASE_REGISTRY.md` → 該 release `LIVE_VERIFIED`
- `PROJECT_CHANGELOG.md` 記錄結果
- 更新時間
- LIVE→CODE correlation 改為 `KNOWN`

GitHub 文件由 ChatGPT 或 Cursor 依使用者回報代更新，使用者不需自己編輯。

---

## 16. 回滾規則

正式貼新版前必須知道 rollback release 或確切 CMS backup。

失敗時：
1. 不在 CMS 臨時手改出無紀錄版本。
2. 回到明確 release ID 或確切備份。
3. 問題 release 記 `ROLLED_BACK`。
4. 更新實際 CURRENT LIVE。
5. 新修正使用新 release ID，不重用失敗 release。

---

## 17. 手機通勤流程

手機情境依 `MOBILE_COMMUTE_WORKFLOW.md`。

固定主線：

**使用者手機看官網 / 截圖 → ChatGPT 分析或改 Development GitHub → `CODE_FIXED` + changelog → Cursor 回電腦 pull / 驗證 → `LOCAL_TESTED` → release / paste → 使用者貼 CMS → `USER_PASTED` → 使用者確認 → `LIVE_VERIFIED`。**

當 LIVE→CODE=`UNKNOWN` 時，手機截圖只代表正式頁觀察，不代表 Development code 就是正式頁相同版本。

---

## 18. P0 / P1 / P2 / Design

| 等級 | 定義 | 規則 |
|---|---|---|
| P0 | 功能錯誤、卡住、跳段、重大不穩 | 正式上線前優先完成；相關必要實機 Gate 不可假 PASS |
| P1 | 效能 / 穩定性高風險 | P0 後處理 |
| P2 | 維護性 / 低風險 | P0/P1 後整理 |
| Design | 視覺 / 文案 / 圖片 / 場景順序 | 使用者明確要求才改 |

---

## 19. ChatGPT → Cursor 交接最小內容

- Source / Task
- Release / status
- Owner 是否已釋放
- LIVE→CODE correlation
- 已完成項目
- 修改檔案與 commits
- Cursor 要做的 Level A / B / C 測試
- 明確 `NOT TESTED` 項目
- 不要重做的項目
- 未完成 TODO
- 是否需要新 CMS paste

---

## 20. Cursor → ChatGPT 交接最小內容

- 測試環境 / 尺寸 / 實機或模擬
- Level A / B / C 各項 `PASS / FAIL / NOT TESTED / BLOCKED`
- console 狀態
- P0/P1 驗證結果
- 額外修改
- release / status
- CMS paste 檔名
- CSS / JS 實際引用
- 未解決問題
- commits

---

## 21. 最終共同原則

**使用者是需求、改派、第一次基線備份、CMS 貼上與 LIVE 的最終決策者；ChatGPT 負責高價值分析與可直接在 GitHub 完成的修改；Cursor 負責使用者本機環境、瀏覽器驗證與最終貼上版產出；GitHub 是三方的開發、版本與交接中心；正式官網是 LIVE 的最終事實來源。**
