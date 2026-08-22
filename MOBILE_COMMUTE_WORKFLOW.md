# MOBILE COMMUTE WORKFLOW — 埃及活動頁 / CAI12A

> 用途：當使用者上下班通勤、只能使用手機 ChatGPT 時，仍可安全持續調整網頁，不造成 ChatGPT / Cursor / 使用者三方版本混亂。
> 核心原則：**手機階段可以分析與直接修改 GitHub，但不能把未經本機驗證的版本誤標成 LOCAL_TESTED、PASTE_GENERATED 或 LIVE_VERIFIED。**

---

## 1. 手機通勤時可以做什麼

使用者可用手機：

- 開正式官網檢查畫面
- 截圖問題區域
- 描述要修改的內容
- 指定「只檢查，不修改」
- 或明確指定「直接修 GitHub」

ChatGPT 可在手機工作階段：

- 讀取 GitHub 最新控制文件與程式碼
- 分析截圖與問題根因
- 在使用者明確要求時直接修改 GitHub CSS / JS / HTML / 專案文件
- 提交 commit
- 更新 `PROJECT_STATUS.md`
- 更新 `PROJECT_CHANGELOG.md`
- 必要時更新 `IMPORTANT_TODO.md`
- 必要時更新 `RELEASE_REGISTRY.md`
- 留下完整 Cursor 交接內容

---

## 2. 手機工作階段的固定流程

### A. 只檢查、不修改

1. 使用者提供截圖 / 問題描述。
2. ChatGPT 讀：
   - `PROJECT_STATUS.md`
   - `CHATGPT_CURSOR_BASELINE.md`
   - `IMPORTANT_TODO.md`
   - `PROJECT_CHANGELOG.md`
   - `RELEASE_REGISTRY.md`
   - `DEPLOYMENT_CHECKLIST.md`
   - 本 `MOBILE_COMMUTE_WORKFLOW.md`
3. ChatGPT 讀最新相關 CSS / JS / HTML。
4. 只分析，不修改程式。
5. 若只是分析，不 claim Owner。
6. 若分析形成新的重要待辦，可更新 TODO；一旦實際改文件就必須寫 changelog。

### B. 使用者說「直接修」

1. 先讀全部控制文件與最新程式碼。
2. 確認 `PROJECT_STATUS.md` → ACTIVE WORK。
3. 若 Owner=`NONE`，登記 Owner=`ChatGPT`。
4. 若 Owner=`Cursor`，不得直接覆蓋；先讀最新 changelog / commits。使用者若明確要求 ChatGPT 接手，依 STALE OWNER / reassignment 規則改派。
5. 將 Development status 設為 `IN_PROGRESS`。
6. 只修改使用者指定範圍；不要順手改其他設計。
7. 提交 GitHub。
8. 更新 changelog，清楚記錄：修改內容、檔案、原因、平台影響、測試狀態、Cursor 還需做什麼。
9. 若程式已修改但未經本機瀏覽器驗證，Development status 最多只能到 `CODE_FIXED`。
10. Owner 釋放為 `NONE`，交接 Cursor。

---

## 3. 手機階段禁止誤標的狀態

ChatGPT 在手機工作階段若沒有操作使用者本機，不得自行標記：

- `LOCAL_TESTED`
- `PASTE_GENERATED`（除非使用者明確要求 ChatGPT 只產測試用途檔案，且仍不得冒充 Cursor 正式產出）
- `USER_PASTED`
- `LIVE_VERIFIED`

通常手機直接修正後的正確狀態是：

`CODE_FIXED`

測試欄位通常是：

`NOT TESTED`

並附註：`Awaiting Cursor local/browser validation`。

---

## 4. 手機截圖的使用規則

截圖可用來：

- 定位視覺問題
- 比較手機實際畫面
- 分析 spacing / crop / overflow / sticky / 字級 / 場景切換等問題

但截圖不能單獨證明：

- console 無錯誤
- 所有 breakpoint 正常
- Desktop 正常
- Android / iPhone 其他瀏覽器正常
- scroll 全流程正常

因此使用者手機看到「看起來正常」只能記為實機視覺觀察，不得自動升級成完整 `LOCAL_TESTED`。

---

## 5. ChatGPT → Cursor 通勤交接格式

手機階段 ChatGPT 修改後，changelog 必須讓 Cursor 一眼看懂：

- Source: `Mobile Commute / ChatGPT`
- User request: 使用者要求修改什麼
- Development status: 通常 `CODE_FIXED`
- Files changed
- Commit SHA
- Desktop impact: 已知 / 未知
- Mobile impact: 已知 / 預期
- Static review: PASS / FAIL / NOT TESTED
- Local browser test: `NOT TESTED`
- Real-device observation: 有截圖則記裝置 / 瀏覽器與觀察內容；不知道就寫 UNKNOWN
- Cursor required actions:
  - `git status`
  - working tree clean 後 `git pull`
  - 讀控制文件與本次 changelog
  - 不重做 ChatGPT 已完成修正
  - 本機預覽 / DevTools / console / breakpoint 驗證
  - 必要時追加修正
  - 驗證完成後才升 `LOCAL_TESTED`
  - 最後才依 Gate 產 CMS paste HTML
- Paste regeneration required: YES / NO
- Remaining TODO

---

## 6. Cursor 回到電腦後的接手流程

Cursor 必須：

1. `git status`
2. Working tree 乾淨才 `git pull`
3. pull 後讀全部控制文件，包含 `MOBILE_COMMUTE_WORKFLOW.md`
4. 找 `PROJECT_CHANGELOG.md` 最新一筆 `Mobile Commute / ChatGPT`
5. 先驗證，不重做同一修正
6. 執行：
   - Desktop Chrome
   - Desktop Edge（需要時）
   - Mobile emulation
   - console error
   - 指定 breakpoint / scroll 情境
7. 若使用者手機截圖指出 iPhone / Android 問題，優先重現該情境
8. 若追加修改，Cursor 自己再寫一筆 changelog
9. 通過本機驗證後才可升 `LOCAL_TESTED`
10. 符合 `DEPLOYMENT_CHECKLIST.md` 後才產正式 CMS paste HTML

---

## 7. 手機工作不直接上正式官網的預設規則

預設：

**通勤手機修改 → GitHub CODE_FIXED → Cursor 回電腦驗證 → Cursor 產貼上版 → 使用者貼 CMS → 使用者確認 LIVE。**

手機階段不直接跳過 Cursor 本機驗證。

若使用者明確要求緊急上線，必須：

- 明確標記為 emergency / test release
- 說明哪些測試沒有做
- 不把未測項目標 PASS
- 先有 rollback backup
- 由使用者自行決定是否承擔未完整測試風險

---

## 8. 使用者在手機上可直接使用的短指令

### 只檢查

`看這張截圖，先檢查 GitHub 最新版本，找問題，不要修改。`

### 直接修

`直接修這個問題。先讀專案狀態與最新 GitHub，只改我指定的範圍。改完寫 changelog，狀態停在 CODE_FIXED，交給 Cursor 回電腦驗證。`

### 限定只改手機版

`直接修，只改手機版，不動桌面版。修改後記錄 changelog，Cursor 回電腦後驗證。`

---

## 9. 最終簡化流程

**通勤手機：使用者看官網 / 截圖 → ChatGPT 分析或直接改 GitHub → 記錄與交接**

**回到電腦：Cursor pull → 讀交接 → 本機驗證 → 必要修正 → 產 CMS paste HTML**

**最後：使用者貼官網後台 → 確認正式前台 → 才成為 LIVE_VERIFIED**
