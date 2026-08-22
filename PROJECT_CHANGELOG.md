# PROJECT CHANGELOG — 埃及活動頁 / CAI12A

> 用途：記錄每一次對埃及活動頁專案的實際修改，讓 ChatGPT、Cursor 與後續維護者在 `git pull` 後都能知道最新狀態。
> 規則：任何 CSS / JS / HTML / 外部資源引用 / 官網貼上版 / 專案規則的實際修改，都必須在同一次工作中同步更新本文件。

---

## 固定記錄格式

每次修改新增一筆，必須包含：日期 / 時間、修改者、目的、檔案、實際變更、原因、影響範圍、測試狀態、是否需重產貼上版、未完成事項、相關 commit。

測試只用：`PASS / FAIL / NOT TESTED / BLOCKED`。
Commit SHA 不做自我引用循環；同 change set 可寫 `same change set / see git history`。

---

## 2026-08-22 11:12 +08:00 — 最終完善三方協議並完成二次稽核

- 修改者：ChatGPT
- 修改目的：補齊三方協作最後的程序漏洞，並在完成後重新檢查一次實際 GitHub 狀態。
- 修改檔案：
  - `PROJECT_STATUS.md`
  - `CHATGPT_CURSOR_BASELINE.md`
  - `DEPLOYMENT_CHECKLIST.md`
  - `MOBILE_COMMUTE_WORKFLOW.md`
  - `.cursor/rules/egypt-project-status.mdc`
  - `.cursor/rules/chatgpt-cursor-baseline.mdc`（刪除）
  - `.cursor/rules/egypt-change-log.mdc`（刪除）
  - `.cursor/rules/egypt-critical-todo.mdc`（二次稽核發現後刪除）
  - `PROJECT_CHANGELOG.md`
- 實際變更內容：
  - 新增 `LIVE→Code correlation`：`KNOWN / UNKNOWN`。
  - LIVE→Code=`UNKNOWN` 時，可依正式頁觀察修目前 Development，但不得宣稱已直接修改正式官網正在執行的相同程式版本。
  - ACTIVE OWNER 明確定義為 **SOFT LOCK**。
  - 新增提交前二次檢查：Owner、branch/remote HEAD、最新 changelog；有變化時 `STOP → SYNC → DIFF/REVIEW`。
  - 把單一權威順位改成 **分領域權威**：需求看使用者、LIVE 看官網、狀態看 STATUS、release 看 REGISTRY、實際程式看 GitHub code、部署 Gate 看 CHECKLIST。
  - 第一次 CURRENT LIVE=`UNKNOWN` 的制度化上線前，使用者必須先保存完整舊 CMS「行程特色」內容作 rollback baseline。
  - 測試分成 Level A Cursor 必要本機、Level B 手機 P0 必要實機、Level C 條件式裝置 / 瀏覽器。
  - DevTools mobile emulation 不得冒充 Level B 實機 PASS。
  - 手機 viewport / sticky / browser toolbar / mobile scroll P0 若必要 Level B 未完成，不得標 production-ready，除非使用者明確接受 emergency/test risk。
  - 手機通勤流程同步加入 LIVE→Code、soft-lock 二次檢查、Level A/B/C 交接。
  - Cursor alwaysApply 規則最終收斂為：
    1. `.cursor/rules/egypt-project-status.mdc` — Master Rule
    2. `.cursor/rules/mobile-commute-workflow.mdc` — Mobile supplemental Rule
  - 二次稽核實際檢查 `.cursor/rules/` 後發現早期 `egypt-critical-todo.mdc` 仍殘留；其要求已由 Master Rule + `IMPORTANT_TODO.md` 覆蓋，因此刪除，避免第三條 alwaysApply 再次造成規則分岔。
- 為什麼修改：先前制度仍有 soft-lock race condition、LIVE 與 Development code 關聯未知、第一次 backup 責任不明、模擬/實機測試混合、Cursor alwaysApply 重複等風險。
- 影響範圍：Workflow；本次未修改埃及前台 CSS / JS。
- 測試狀態：
  - 三方協議交叉檢查：PASS
  - Cursor rule 目錄二次檢查：PASS
  - Owner 釋放：PASS
  - 前台 CSS / JS：NOT TESTED（本次無前台程式修改）
- 官網貼上版是否需要重新產生：否。
- 尚未完成 / 後續待辦：
  - CURRENT LIVE release / CSS / JS / CMS paste / LIVE→Code correlation 仍為 `UNKNOWN`。
  - 第一次制度化上線前需由使用者保存目前 CMS 原內容。
  - P0 / P1 / P2 技術待辦仍依 `IMPORTANT_TODO.md`。
- 相關 commits：
  - `b2c90b4b518ce77d7ecd2eafb985558c39f4ccb4` — status soft-lock / LIVE→Code / test gates / first backup
  - `63078f13cc3dfe12521cda906f9a0505ce466057` — final three-party baseline
  - `0235c6b807b17c9836dcda565ca4816fd8983f1f` — deployment gate refinement
  - `975306eea377a8e913ffb6581f5d251102784f02` — single Cursor master rule
  - `2c640434bc2f65c902fc5e1a04c13d920a6c1c2c` — remove redundant baseline compatibility rule
  - `27d3f35d95448201324b971b287aaead6ab69adc` — remove redundant changelog compatibility rule
  - `c8f4a7ef42bcdcf0a8d9a00254bbd090527922f0` — align mobile commute workflow
  - `c0bbf0157fb6d5d3ae4fdbb6fdfec7ccd04c8b11` — remove redundant critical TODO rule discovered in final audit
  - `74409286bc6d71ca3d4ad2d6e5f954ad8fef4e2d` — release Owner after audit

---

## 2026-08-22 10:56 +08:00 — 納入手機通勤修改流程

- 修改者：ChatGPT
- 修改目的：讓使用者上下班只能使用手機 ChatGPT 時，仍能安全繼續網頁調整，回到電腦後由 Cursor 無縫接手。
- 主要內容：新增 `MOBILE_COMMUTE_WORKFLOW.md`、Mobile Cursor rule、`CODE_FIXED → Cursor 驗證 → LOCAL_TESTED` 交接，以及手機截圖不能冒充完整測試的規則。
- 影響範圍：Workflow。
- 測試狀態：Workflow PASS；前台功能 NOT TESTED。
- 官網貼上版是否需要重新產生：否。
- 相關 commits：`4c38d49c15563c798acd554cae29efd56cf901c3`、`a5778779bd8c99b8340e7f56f04911df169f7f6e`、`875d1b9d4ef8c272e856507b5a0b346e25e22298`。

---

## 2026-08-22 10:48 +08:00 — 完善三方協作、Release、上線與回滾制度

- 修改者：ChatGPT
- 主要內容：建立 `RELEASE_REGISTRY.md`、`DEPLOYMENT_CHECKLIST.md`、release freeze、STALE OWNER RECOVERY、UNKNOWN LIVE、rollback 與正式上線 Gate。
- 影響範圍：Workflow。
- 測試狀態：Workflow PASS；前台功能 NOT TESTED。
- 官網貼上版是否需要重新產生：否。
- 相關 commits：`51d8049c238361e7eabaa6971d1ebf5521c19cb7`、`418944928388ef3bf8b48983e3da94ee00b7ccb8`、`ef30db3ea9c01e444fde3b58b751d1fab4a513e9`。

---

## 2026-08-22 10:45 +08:00 — 補強三方協作防混亂機制

- 修改者：ChatGPT
- 主要內容：新增中央 `PROJECT_STATUS.md`、lifecycle、Owner、防盲目 pull、release ID、CMS 資源綁定與 changelog SHA 規則。
- 影響範圍：Workflow。
- 測試狀態：文件 PASS；前台功能 NOT TESTED。
- 相關 commits：`340f1f694581b333fb98ada9b22555b2dc177bbd`、`eea602187349f451bb2cea066975454e74779700`、`2d862cd49acf6b5b0ec32e3ab53f278ad4171f14`。

---

## 2026-08-22 10:28 +08:00 — 建立 ChatGPT × Cursor 協作基準

- 修改者：ChatGPT
- 主要內容：建立角色分工、交接格式、優先級與貼上版產生條件。
- 影響範圍：Workflow。
- 相關 commits：`88f19bad9c5fed4c0306420e344759b1b1a59aca`、`44632aa504c6d78b79913cd8d8ec842b5e824032`。

---

## 2026-08-22 10:19 +08:00 — 建立強制修改紀錄機制

- 修改者：ChatGPT
- 主要內容：建立 `PROJECT_CHANGELOG.md` 並規定所有實際修改都要留下可交接紀錄。
- 影響範圍：Workflow。
- 相關 commit：`5baef9f505c6ece9c4a021e0e84db8b63945de76`。

---

## 既有已知專案狀態（建立 changelog 前）

- 官網只貼 Cursor 產生的「官網貼上版 HTML」；大量 CSS / JS 位於外部檔案。
- 使用者不手動拆 CSS / JS；Cursor 負責產生完整貼上版。
- 官網貼上位置為 `#feature .content`。
- `#eg-experience` 為主要作用域。
- `#sidebar,#sidebar-share-btn{display:none !important}` 是使用者明確允許的全站例外。
- 目前重要 P0：手機 viewport 高度基準、`safeTop/safeBot`、scroll 效能。
- 目前 P1：桌面 scroll / layout 效能與超長 track。
- 目前 P2：Mobile CSS 覆寫整理、`--ff-serif` 未定義。

詳細內容請以七份核心控制文件為準。
