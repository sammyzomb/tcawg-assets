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

## 2026-08-22 11:12 +08:00 — 最終完善三方協議並進行制度稽核

- 修改者：ChatGPT
- 修改目的：補齊三方協作最後的程序漏洞，並把制度收斂到可長期運作的版本。
- 修改檔案：
  - `PROJECT_STATUS.md`
  - `CHATGPT_CURSOR_BASELINE.md`
  - `DEPLOYMENT_CHECKLIST.md`
  - `MOBILE_COMMUTE_WORKFLOW.md`
  - `.cursor/rules/egypt-project-status.mdc`
  - `.cursor/rules/chatgpt-cursor-baseline.mdc`（刪除）
  - `.cursor/rules/egypt-change-log.mdc`（刪除）
  - `PROJECT_CHANGELOG.md`
- 實際變更內容：
  - 新增 `LIVE→Code correlation`：`KNOWN / UNKNOWN`，避免把正式官網截圖誤認為一定對應目前 GitHub Development code。
  - 明確規定 LIVE→Code=`UNKNOWN` 時，可修 Development，但不得宣稱已直接修復官網正在執行的同一份程式。
  - 將 ACTIVE OWNER 明確定義為 **SOFT LOCK**，不是 Git 原子鎖。
  - 新增提交前二次檢查：重新確認 `PROJECT_STATUS.md` Owner、branch/remote HEAD、最新 changelog；有變化時必須 `STOP → SYNC → DIFF/REVIEW`。
  - 將原本單一「文件權威排名」改為 **分領域權威表**：需求看使用者、LIVE 看正式官網、狀態看 STATUS、release 看 REGISTRY、程式事實看 GitHub code、部署 Gate 看 CHECKLIST。
  - 明確增加使用者一次性責任：當 CURRENT LIVE=`UNKNOWN` 的第一次制度化上線前，先完整備份官網後台現行「行程特色」內容，建立 rollback baseline。
  - 將測試 Gate 分成：Level A Cursor 必要本機驗證、Level B 手機 P0 必要真實手機驗證、Level C 條件式裝置 / 瀏覽器驗證。
  - 明確規定 DevTools mobile emulation 不得冒充 Level B 實機 PASS。
  - mobile viewport / sticky / browser toolbar / mobile scroll 等 P0 release，若必要 Level B 未完成，不得標 production-ready；除非使用者明確接受 emergency/test risk。
  - Cursor rules 收斂為 **1 個 Master Rule (`egypt-project-status.mdc`) + 1 個 Mobile Rule (`mobile-commute-workflow.mdc`)**。
  - 刪除兩個重複 compatibility alwaysApply 規則，降低未來規則互相矛盾風險。
  - 手機通勤流程同步加入 LIVE→Code correlation、soft-lock 二次檢查與 Level A/B/C 測試交接。
- 為什麼修改：最終交叉檢查發現 soft lock race condition、LIVE 與 GitHub code 未建立可信對應、第一次 backup 責任不夠明確、測試要求混合模擬與實機、alwaysApply 規則過多等風險。
- 影響範圍：Workflow；本次沒有修改埃及前台 CSS / JS 功能。
- 測試狀態：
  - Workflow 文件一致性：PASS（完成後再次交叉檢查）
  - Cursor rule 收斂：PASS
  - 前台 CSS / JS：NOT TESTED（本次未修改前台功能）
- 官網貼上版是否需要重新產生：否。
- 尚未完成 / 後續待辦：
  - CURRENT LIVE release / CSS / JS / CMS paste 與 LIVE→Code correlation 仍為 `UNKNOWN`，不得猜測。
  - 第一次制度化上線前仍需由使用者保存目前 CMS 行程特色完整內容。
  - P0 / P1 / P2 技術修正仍依 `IMPORTANT_TODO.md`。
- 相關 commits：
  - `b2c90b4b518ce77d7ecd2eafb985558c39f4ccb4` — status soft-lock / LIVE→Code / test gates / first backup
  - `63078f13cc3dfe12521cda906f9a0505ce466057` — final three-party baseline
  - `0235c6b807b17c9836dcda565ca4816fd8983f1f` — deployment gate refinement
  - `975306eea377a8e913ffb6581f5d251102784f02` — single Cursor master rule
  - `2c640434bc2f65c902fc5e1a04c13d920a6c1c2c` — remove redundant baseline compatibility rule
  - `27d3f35d95448201324b971b287aaead6ab69adc` — remove redundant changelog compatibility rule
  - `c8f4a7ef42bcdcf0a8d9a00254bbd090527922f0` — align mobile commute workflow
  - 本 changelog 更新：same change set / see git history

---

## 2026-08-22 10:56 +08:00 — 納入手機通勤修改流程

- 修改者：ChatGPT
- 修改目的：讓使用者上下班只能使用手機 ChatGPT 時，仍能安全繼續埃及網頁調整，並在回到電腦後由 Cursor 無縫接手驗證與產貼上版。
- 修改檔案：
  - `MOBILE_COMMUTE_WORKFLOW.md`（新增）
  - `.cursor/rules/mobile-commute-workflow.mdc`（新增）
  - `PROJECT_STATUS.md`
  - `PROJECT_CHANGELOG.md`
- 實際變更內容：
  - 新增正式 Mobile Commute Workflow，定義手機階段的「只檢查」與「直接修 GitHub」兩種流程。
  - 規定 ChatGPT 手機階段可依使用者明確指示直接修改 GitHub、commit、更新 status / TODO / changelog / release。
  - 規定未經使用者本機 / Cursor 瀏覽器驗證時，手機階段程式修改最多只能標記 `CODE_FIXED`，不得冒充 `LOCAL_TESTED`。
  - 規定手機截圖可作為實機視覺觀察，但不能單獨證明 console、其他 breakpoint、桌面、其他瀏覽器或完整 scroll 流程 PASS。
  - 建立 `Mobile Commute / ChatGPT` 標準交接格式。
  - Cursor 回到電腦後必須 `git status` → 安全 pull → 讀交接 → 先驗證、不重做 ChatGPT 已完成修正 → 通過後才升 `LOCAL_TESTED`。
  - 正式 CMS paste 仍由 Cursor 通過正常 Gate 後產生；`USER_PASTED` / `LIVE_VERIFIED` 仍只能依使用者回報更新。
- 為什麼修改：使用者上下班通勤時只能用手機，但仍希望可以繼續網頁修改，需要正式化手機與 Cursor 之間的責任邊界。
- 影響範圍：Workflow。
- 測試狀態：Workflow 文件 / Cursor rule PASS；前台功能 NOT TESTED。
- 官網貼上版是否需要重新產生：否。
- 尚未完成 / 後續待辦：P0 / P1 / P2 技術修正仍依 `IMPORTANT_TODO.md`；CURRENT LIVE 仍為 `UNKNOWN`。
- 相關 commits：`4c38d49c15563c798acd554cae29efd56cf901c3`、`a5778779bd8c99b8340e7f56f04911df169f7f6e`、`875d1b9d4ef8c272e856507b5a0b346e25e22298`

---

## 2026-08-22 10:48 +08:00 — 完善三方協作、Release、上線與回滾制度

- 修改者：ChatGPT
- 修改目的：將使用者 / ChatGPT / Cursor 協作制度補到可長期運作。
- 修改檔案：`PROJECT_STATUS.md`、`CHATGPT_CURSOR_BASELINE.md`、`RELEASE_REGISTRY.md`、`DEPLOYMENT_CHECKLIST.md`、Cursor rules、`PROJECT_CHANGELOG.md`。
- 實際變更內容：建立 release registry、deployment / rollback checklist、release freeze、STALE OWNER RECOVERY、測試誠實規則、UNKNOWN LIVE 處理與使用者 LIVE 確認規則。
- 為什麼修改：降低多工具協作、release 變動、LIVE 誤判與 rollback 風險。
- 影響範圍：Workflow。
- 測試狀態：Workflow PASS；前台功能 NOT TESTED。
- 官網貼上版是否需要重新產生：否。
- 尚未完成 / 後續待辦：CURRENT LIVE 仍 UNKNOWN；技術 P0/P1/P2 待辦仍在。
- 相關 commits：`cca325fb03024d9c354dee4d00792f405a1f6b06`、`51d8049c238361e7eabaa6971d1ebf5521c19cb7`、`418944928388ef3bf8b48983e3da94ee00b7ccb8`、`f6fb325edf4b428203b08c312dfc5711e3a769a7`、`ef30db3ea9c01e444fde3b58b751d1fab4a513e9`、`b9a06a3cf51330af73850503128aea667227e545`、`3eeb0923eec2ebf385fcf7f550ee5b4d38b0885f`

---

## 2026-08-22 10:45 +08:00 — 補強三方協作防混亂機制

- 修改者：ChatGPT
- 修改目的：修補版本誤判、同時修改、無條件 pull、LIVE 誤判與 commit SHA 自我引用等流程漏洞。
- 修改檔案：`PROJECT_STATUS.md`、`.cursor/rules/egypt-project-status.mdc`、`CHATGPT_CURSOR_BASELINE.md`、`PROJECT_CHANGELOG.md`。
- 實際變更內容：新增中央狀態、明確 lifecycle、Owner 防衝突、git status before pull、release ID、貼上版資源綁定與 changelog SHA 規則。
- 為什麼修改：避免 GitHub 已更新但官網未上線、Cursor 本機變更與遠端衝突、同一問題被重做。
- 影響範圍：Workflow。
- 測試狀態：文件 PASS；前台功能 NOT TESTED。
- 官網貼上版是否需要重新產生：否。
- 相關 commits：`340f1f694581b333fb98ada9b22555b2dc177bbd`、`eea602187349f451bb2cea066975454e74779700`、`2d862cd49acf6b5b0ec32e3ab53f278ad4171f14`

---

## 2026-08-22 10:28 +08:00 — 建立 ChatGPT × Cursor 協作基準

- 修改者：ChatGPT
- 修改目的：建立 ChatGPT 與 Cursor 的共同工作標準。
- 修改檔案：`CHATGPT_CURSOR_BASELINE.md`、`.cursor/rules/chatgpt-cursor-baseline.mdc`、`PROJECT_CHANGELOG.md`。
- 實際變更內容：建立協作文件、角色分工、交接格式、優先級與貼上版產生條件。
- 影響範圍：Workflow。
- 測試狀態：不涉及前台執行測試。
- 官網貼上版是否需要重新產生：否。
- 相關 commits：`88f19bad9c5fed4c0306420e344759b1b1a59aca`、`44632aa504c6d78b79913cd8d8ec842b5e824032`

---

## 2026-08-22 10:19 +08:00 — 建立強制修改紀錄機制

- 修改者：ChatGPT
- 修改目的：確保每一次修改都留下可供 Cursor 接續的完整紀錄。
- 修改檔案：`PROJECT_CHANGELOG.md`、`.cursor/rules/egypt-change-log.mdc`。
- 實際變更內容：建立修改紀錄檔並強制實際修改後留下可交接紀錄。
- 影響範圍：Workflow。
- 測試狀態：不涉及頁面程式執行。
- 官網貼上版是否需要重新產生：否。
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

詳細內容請以七份核心控制文件為準。
