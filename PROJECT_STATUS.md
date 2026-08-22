# PROJECT STATUS — 埃及活動頁 / CAI12A

> 這是三方（使用者 / ChatGPT / Cursor）的中央狀態表。
> 用途：只記「現在是什麼狀態」，不要在這裡放長篇技術說明。
> 每次開始工作前先讀本檔，再讀 `CHATGPT_CURSOR_BASELINE.md`、`IMPORTANT_TODO.md`、`PROJECT_CHANGELOG.md`、`RELEASE_REGISTRY.md`、`DEPLOYMENT_CHECKLIST.md`、`MOBILE_COMMUTE_WORKFLOW.md`。

## ACTIVE WORK

- Owner: NONE
- Task: NONE
- Started: —
- Base commit: —

規則：
- 只有 `NONE` 時，ChatGPT 或 Cursor 才可開始新的實際修改。
- 開始修改前，先把 Owner 改成 `ChatGPT` 或 `Cursor`，並填 Task / Started / Base commit。
- 修改完成、提交、交接完畢後，Owner 改回 `NONE`。
- 若看到另一方為 Owner，不要同時修改同一問題；先讀 changelog。
- 若 Owner 為遺留狀態，依 `CHATGPT_CURSOR_BASELINE.md` 的 `STALE OWNER RECOVERY` 規則處理；使用者明確「繼續 / 接手 / 改派」可解除僵局。

## CURRENT DEVELOPMENT

- Development status: ANALYSIS_ONLY
- Development release: UNASSIGNED
- Development CSS: `eg-v2-20260822.css`
- Development JS: `eg-v2-20260822.js`
- CMS paste file: UNKNOWN / not confirmed in GitHub
- Latest known coordination state: 三方協作 / release / deployment / rollback / mobile commute workflow 已建立；P0 mobile fixes still pending

## CURRENT LIVE WEBSITE

- Live status: UNKNOWN
- Live release: UNKNOWN
- Live CSS: UNKNOWN
- Live JS: UNKNOWN
- Live CMS paste file: UNKNOWN
- Live verified by user: NO / NOT RECORDED
- Live verified time: —

**GitHub 最新版本不等於官網目前上線版本。**
只有使用者實際貼入官網並確認正式前台正常，才可成為 `LIVE_VERIFIED`。

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
6. 才開始修改 / 測試

## MOBILE COMMUTE RULE

當使用者只能用手機時：

- 可由 ChatGPT 依使用者指示讀 GitHub、分析、直接修改與 commit。
- 手機階段的程式修改在未經本機驗證前，Development status 最多標記 `CODE_FIXED`。
- `LOCAL_TESTED` 必須由 Cursor / 本機實際瀏覽器驗證後才能成立。
- ChatGPT 手機修改後必須在 changelog 留下 `Mobile Commute / ChatGPT` 交接資訊。
- Cursor 回到電腦後先 pull / 讀交接 / 驗證，不重做同一修正。
- 正式 CMS paste 仍依正常 Gate 由 Cursor 驗證後產生。
- 詳細程序以 `MOBILE_COMMUTE_WORKFLOW.md` 為準。

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

## LIVE GATE

只有使用者能觸發：

- `USER_PASTED`：使用者回報已貼 CMS
- `LIVE_VERIFIED`：使用者再確認正式前台正常

ChatGPT / Cursor 只依使用者回報代為更新 GitHub 控制文件，不得自行推定。

## UNKNOWN LIVE RULE

當 CURRENT LIVE 為 `UNKNOWN`：

- 不得猜測目前官網引用哪支 CSS / JS。
- 不得用 GitHub 最新檔名或日期回填 LIVE。
- 新 release 可繼續開發 / 測試。
- 第一次正式替換前，優先保存目前官網後台 CMS 原內容，作為 emergency rollback backup。
- 使用者第一次確認新版本 LIVE 後，立即更新 `RELEASE_REGISTRY.md` 與本檔。
