# MOBILE COMMUTE WORKFLOW — 埃及活動頁 / CAI12A

> 用途：當使用者上下班通勤、只能使用手機 ChatGPT 時，仍可安全持續調整網頁，不造成 ChatGPT / Cursor / 使用者三方版本混亂。
> 核心原則：**手機階段可以分析與直接修改 GitHub，但不能把未經本機驗證的版本誤標成 `LOCAL_TESTED`、`PASTE_GENERATED` 或 `LIVE_VERIFIED`。**

---

## 1. 手機通勤時可以做什麼

使用者可用手機：

- 開正式官網檢查畫面
- 截圖問題區域
- 描述要修改的內容
- 指定「只檢查，不修改」
- 或明確指定「直接修 GitHub」

ChatGPT 可：

- 讀取七份核心控制文件與最新程式碼
- 分析截圖與問題根因
- 在使用者明確要求時直接修改 GitHub CSS / JS / HTML / 專案文件
- 提交 commit
- 更新 `PROJECT_STATUS.md`
- 更新 `PROJECT_CHANGELOG.md`
- 必要時更新 `IMPORTANT_TODO.md`
- 必要時更新 `RELEASE_REGISTRY.md`
- 留下完整 Cursor 交接內容

---

## 2. 手機工作階段固定流程

### A. 只檢查、不修改

1. 使用者提供截圖 / 問題描述。
2. ChatGPT 讀七份核心文件與最新相關 CSS / JS / HTML。
3. 只分析，不修改程式。
4. 若只是分析，不 claim Owner。
5. 若分析形成新的重要待辦，可更新 TODO；一旦實際改文件就必須寫 changelog。

### B. 使用者說「直接修」

1. 先讀全部控制文件與最新程式碼。
2. 確認 `PROJECT_STATUS.md` → ACTIVE WORK。
3. Owner=`NONE` 才 claim Owner=`ChatGPT`，並記 Task / Started / Base commit。
4. Owner=`Cursor` 時不得直接覆蓋；若使用者明確改派，依 baseline 的 reassignment / stale owner 規則處理。
5. Development status → `IN_PROGRESS`。
6. 若 LIVE→Code correlation=`UNKNOWN`：
   - 正式官網截圖只能作為「LIVE 視覺觀察」。
   - 可以針對目前 Development code 修正。
   - 不得宣稱目前 Development 就是正式官網正在執行的同一份程式。
7. 只修改使用者指定範圍，不順手改其他 Design。
8. **提交前再檢查一次最新 Owner / branch HEAD / changelog。** 若已變動，STOP → SYNC → DIFF / REVIEW。
9. 提交 GitHub。
10. 更新 changelog / status / TODO / release（若受影響）。
11. 未經本機瀏覽器驗證，Development status 最多到 `CODE_FIXED`。
12. Owner 釋放為 `NONE`，交接 Cursor。

---

## 3. 手機階段禁止誤標

ChatGPT 沒有操作使用者本機時，不得自行標記：

- `LOCAL_TESTED`
- 正式 production `PASTE_GENERATED`
- `USER_PASTED`
- `LIVE_VERIFIED`

通常手機直接修正後：

- Development status：`CODE_FIXED`
- Local browser test：`NOT TESTED`
- 備註：`Awaiting Cursor local/browser validation`

---

## 4. 手機截圖的證據範圍

截圖可以證明 / 協助：

- 某真實手機在某次瀏覽時的視覺現象
- spacing / crop / overflow / sticky / 字級 / 場景切換等問題定位

截圖不能單獨證明：

- console 無錯誤
- 所有 breakpoint 正常
- Desktop 正常
- 其他手機 / 瀏覽器正常
- scroll 全流程正常
- GitHub Development code 就是目前 LIVE 正在跑的相同版本

因此截圖觀察與程式版本對應要分開記錄。

---

## 5. ChatGPT → Cursor 通勤交接格式

changelog 至少包含：

- Source: `Mobile Commute / ChatGPT`
- User request
- LIVE→Code correlation: `KNOWN` / `UNKNOWN`
- Development status（通常 `CODE_FIXED`）
- Files changed
- Commit SHA
- Desktop impact
- Mobile impact
- Static review: `PASS / FAIL / NOT TESTED / BLOCKED`
- Local browser test: 通常 `NOT TESTED`
- Real-device observation: 裝置 / 瀏覽器 / 觀察內容；不清楚就 `UNKNOWN`
- Cursor required actions
- Paste regeneration required: YES / NO
- Remaining TODO

Cursor required actions 至少：

1. `git status`
2. working tree clean 才 `git pull`
3. 讀七份核心文件與最新 changelog
4. 不重做 ChatGPT 已完成修正
5. 依 Level A / B / C Gate 驗證
6. 必要時追加修正並另寫 changelog
7. 通過本機驗證後才升 `LOCAL_TESTED`
8. 符合 Gate 後才產正式 CMS paste HTML

---

## 6. Cursor 回到電腦後接手

1. `git status`
2. Working tree 乾淨才 `git pull`
3. pull 後讀七份核心文件
4. 找最新 `Mobile Commute / ChatGPT` 交接
5. 先驗證，不重做同一修正
6. 執行 Level A 必要本機驗證
7. 若修正涉及 mobile viewport / sticky / browser toolbar / mobile scroll P0，安排 Level B 真實手機驗證
8. 問題涉及特定瀏覽器時才要求 Level C
9. 若追加修改，Cursor 自己新增 changelog
10. 通過必要 Gate 後才升 `LOCAL_TESTED`
11. 最後依 `DEPLOYMENT_CHECKLIST.md` 產正式 CMS paste HTML

---

## 7. 手機工作預設不直接上正式官網

預設主線：

**通勤手機修改 → GitHub `CODE_FIXED` → Cursor 回電腦驗證 → `LOCAL_TESTED` → release → Cursor 產貼上版 → 使用者貼 CMS → `USER_PASTED` → 使用者確認 → `LIVE_VERIFIED`。**

若使用者明確要求 emergency / test deployment：

- 明確標示 emergency / test release
- 未做測試維持 `NOT TESTED`
- 需先有明確 rollback backup
- 若 CURRENT LIVE=`UNKNOWN`，第一次上線前仍必須保存原 CMS 完整內容
- 由使用者決定是否接受風險

---

## 8. 手機短指令

只檢查：

`看這張截圖，先檢查 GitHub 與目前專案狀態，找問題，不要修改。`

直接修：

`直接修這個問題。照手機通勤流程，只改我指定的範圍；改完寫 changelog，狀態停在 CODE_FIXED，交給 Cursor 回電腦驗證。`

只改手機版：

`直接修，只改手機版，不動桌面版。修改後記錄 changelog，Cursor 回電腦後依測試 Gate 驗證。`

---

## 9. 最終簡化流程

**手機：使用者看官網 / 截圖 → ChatGPT 分析或修改 Development GitHub → 記錄與交接**

**電腦：Cursor pull → 讀交接 → Level A / 必要 Level B / 條件 Level C → 必要修正 → release → CMS paste**

**正式：使用者先確認 rollback → 貼 CMS → 正式頁確認 → `LIVE_VERIFIED`**
