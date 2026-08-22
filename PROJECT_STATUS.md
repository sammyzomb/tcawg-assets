# PROJECT STATUS — 埃及活動頁 / CAI12A

> 這是三方（使用者 / ChatGPT / Cursor）的中央狀態表。
> 用途：只記「現在是什麼狀態」，不要在這裡放長篇技術說明。
> 每次開始工作前先讀本檔，再讀 `CHATGPT_CURSOR_BASELINE.md`、`IMPORTANT_TODO.md`、`PROJECT_CHANGELOG.md`、`RELEASE_REGISTRY.md`、`DEPLOYMENT_CHECKLIST.md`、`MOBILE_COMMUTE_WORKFLOW.md`。

## ACTIVE WORK

- Owner: ChatGPT
- Task: 完善三方協議：LIVE→CODE 對應、Owner soft-lock 二次檢查、首次 CMS 備份責任、測試 Gate 分級、Cursor 規則收斂、最終交叉檢查
- Started: 2026-08-22 11:12 +08:00
- Base commit: current GitHub HEAD at task start
- Lock type: SOFT LOCK

規則：
- Owner 是協作 soft lock，不是 Git 原子鎖。
- 只有 `NONE` 時，ChatGPT 或 Cursor 才可開始新的實際修改。
- 開始修改前，先把 Owner 改成 `ChatGPT` 或 `Cursor`，並填 Task / Started / Base commit。
- **提交實際修改前必須再檢查一次最新 `PROJECT_STATUS.md`、branch HEAD 與最新 changelog。**
- 若提交前發現 HEAD / Owner / changelog 已被另一方改變，停止直接提交，先同步與檢查差異。
- 修改完成、提交、交接完畢後，Owner 改回 `NONE`。
- 若看到另一方為 Owner，不要同時修改同一問題；先讀 changelog。
- 若 Owner 為遺留狀態，依 `CHATGPT_CURSOR_BASELINE.md` 的 `STALE OWNER RECOVERY` 規則處理；使用者明確「繼續 / 接手 / 改派」可解除僵局。

## CURRENT DEVELOPMENT

- Development status: ANALYSIS_ONLY
- Development release: UNASSIGNED
- Development CSS: `eg-v2-20260822.css`
- Development JS: `eg-v2-20260822.js`
- CMS paste file: UNKNOWN / not confirmed in GitHub
- Latest known coordination state: 三方協作 / release / deployment / rollback / mobile commute workflow 已建立；本次正在補強協議；P0 mobile fixes still pending

## CURRENT LIVE WEBSITE

- Live status: UNKNOWN
- Live release: UNKNOWN
- Live CSS: UNKNOWN
- Live JS: UNKNOWN
- Live CMS paste file: UNKNOWN
- Live→Code correlation: UNKNOWN
- Live verified by user: NO / NOT RECORDED
- Live verified time: —

**GitHub 最新版本不等於官網目前上線版本。**
只有使用者實際貼入官網並確認正式前台正常，才可成為 `LIVE_VERIFIED`。

### LIVE→CODE 對應規則

- `KNOWN`：已確認正式官網對應到某一個 release / CSS / JS / CMS paste，可針對同一版本精準分析。
- `UNKNOWN`：只知道正式官網畫面，不知道它實際引用哪一版程式。
- LIVE→Code=`UNKNOWN` 時，ChatGPT 可以根據截圖與目前 Development code 做分析或修正，但必須明確標示：**此修正針對目前 Development，不可宣稱已直接修復正式官網正在執行的同一份程式。**
- 第一次建立可信 `LIVE_VERIFIED` release 後，必須把正式 release / CSS / JS / CMS paste 回填，讓 LIVE→Code 變成 `KNOWN`。

## ALLOWED STATUS VALUES

1. `ANALYSIS_ONLY` — 只有檢查 / 分析，尚未修改程式
2. `IN_PROGRESS` — 正在修改
3. `CODE_FIXED` — 程式已修改，但尚未完成本機驗證
4. `LOCAL_TESTED` — Cursor 已完成本機 / 瀏覽器基本測試
5. `PASTE_GENERATED` — 新官網貼上版 HTML 已產生
6. `USER_PASTED` — 使用者已貼入官網後台
7. `LIVE_VERIFIED` — 使用者已確認正式官網前台正常

測試結果只使用：`PASS` / `FAIL` / `NOT TESTED` / `BLOCKED`。

## RELEASE / VERSION RULE

- 不用「最新版」作為交接用語。
- Release ID：`RYYYYMMDD-NN`。
- release 綁定資料統一寫在 `RELEASE_REGISTRY.md`。
- `PASTE_GENERATED` 後發生實質程式 / 資源變更，必須重新 freeze / test，原則上建立新 release。
- `LIVE_VERIFIED` release 不得重新定義。
- 尚未確定 release ID 時填 `UNASSIGNED`。

## CURSOR START CHECK

1. `git status`
2. working tree 乾淨才 `git pull`
3. 有未提交修改時不得盲目 pull
4. pull 後依序讀七份核心文件：
   - `PROJECT_STATUS.md`
   - `CHATGPT_CURSOR_BASELINE.md`
   - `IMPORTANT_TODO.md`
   - `PROJECT_CHANGELOG.md`
   - `RELEASE_REGISTRY.md`
   - `DEPLOYMENT_CHECKLIST.md`
   - `MOBILE_COMMUTE_WORKFLOW.md`
5. 確認 ACTIVE WORK Owner
6. 記錄開始時 HEAD / base commit
7. 修改或提交前再次確認 HEAD / Owner / changelog 沒有被另一方改變
8. 才開始修改 / 測試 / 提交

## MOBILE COMMUTE RULE

當使用者只能用手機時：

- 可由 ChatGPT 依使用者指示讀 GitHub、分析、直接修改與 commit。
- 手機階段的程式修改在未經本機驗證前，Development status 最多標記 `CODE_FIXED`。
- `LOCAL_TESTED` 必須由 Cursor / 本機實際瀏覽器驗證後才能成立。
- ChatGPT 手機修改後必須在 changelog 留下 `Mobile Commute / ChatGPT` 交接資訊。
- Cursor 回到電腦後先 pull / 讀交接 / 驗證，不重做同一修正。
- 正式 CMS paste 仍依正常 Gate 由 Cursor 驗證後產生。
- 若 LIVE→Code correlation=`UNKNOWN`，手機截圖只代表正式網站觀察，不能推定 GitHub Development 就是正式頁正在執行的相同程式版本。
- 詳細程序以 `MOBILE_COMMUTE_WORKFLOW.md` 為準。

## TEST GATE LEVELS

### Level A — 必要本機驗證（Cursor）
- Desktop Chrome
- Desktop Edge（如可用）
- 390px 左右 mobile emulation
- 767 / 768 breakpoint
- 1024px / 1440px
- console major errors
- 相關場景 scroll / backward scroll
- Hero desktop/mobile source switching
- Reduced Motion

### Level B — 必要實機驗證（針對手機 P0 / viewport / sticky / browser UI 問題）
- 至少一台真實手機
- 若修的是 iPhone Safari 特有問題，需 iPhone Safari 實機
- 若修的是 Android Chrome 特有問題，需 Android Chrome 實機
- 手機網址列 / 工具列展開與收合情境

### Level C — 條件式驗證
- iPhone Chrome
- Samsung Internet
- 其他特定瀏覽器 / 裝置
- 只有當問題涉及該環境或可取得裝置時要求

沒有實測的項目必須寫 `NOT TESTED`，不能阻止所有工作，但若該項是本次 P0 根因的必要實機條件，則不得升級為 production-ready。

## CMS PASTE GATE

Cursor 產生正式貼上版前必須：

- Development status 至少 `LOCAL_TESTED`
- P0 完成，或使用者明確要求測試版
- 已登記目標 release
- CMS HTML 的 CSS / JS 與 release registry 完全一致
- 圖片來源確認
- Desktop Vimeo 確認
- Mobile Vimeo 確認
- TODO / changelog / status / release registry 已同步
- `DEPLOYMENT_CHECKLIST.md` 的 PRE-PUBLISH / rollback 條件已確認
- 若本 release 修正手機 P0 viewport / sticky / browser UI，Level B 必要實機驗證需 PASS 或明確由使用者接受 emergency/test risk

## LIVE GATE

只有使用者能觸發：

- `USER_PASTED`：使用者回報已貼 CMS
- `LIVE_VERIFIED`：使用者再確認正式前台正常

ChatGPT / Cursor 只依使用者回報代為更新 GitHub 控制文件，不得自行推定。

## FIRST MANAGED DEPLOYMENT BACKUP

當 CURRENT LIVE 仍為 `UNKNOWN` 時，第一次進入本制度管理的新 release 上線前，使用者多一個一次性責任：

1. 進官網後台「行程特色」。
2. 在貼新版以前，把現行完整內容全選複製保存成 rollback backup。
3. 記錄備份時間 / 檔名或保存位置。
4. 再貼 Cursor 指定的新 CMS paste HTML。

這是第一次建立可靠 rollback 基線所需；之後已有明確 `LIVE_VERIFIED` release 時，回滾優先依 Release Registry 管理。

## UNKNOWN LIVE RULE

當 CURRENT LIVE 為 `UNKNOWN`：

- 不得猜測目前官網引用哪支 CSS / JS。
- 不得用 GitHub 最新檔名或日期回填 LIVE。
- 新 release 可繼續開發 / 測試。
- 第一次正式替換前，必須依 `FIRST MANAGED DEPLOYMENT BACKUP` 保存目前官網後台 CMS 原內容，作為 emergency rollback backup。
- 使用者第一次確認新版本 LIVE 後，立即更新 `RELEASE_REGISTRY.md` 與本檔，並將 LIVE→Code correlation 改為 `KNOWN`。
