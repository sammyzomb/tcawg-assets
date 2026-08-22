# PROJECT STATUS — 埃及活動頁 / CAI12A

> 這是三方（使用者 / ChatGPT / Cursor）的中央狀態表。
> 用途：只記「現在是什麼狀態」，不要在這裡放長篇技術說明。
> 每次開始工作前先讀本檔，再讀 `CHATGPT_CURSOR_BASELINE.md`、`IMPORTANT_TODO.md`、`PROJECT_CHANGELOG.md`。

## ACTIVE WORK

- Owner: NONE
- Task: NONE
- Started: —
- Base commit: —

規則：
- 只有 `NONE` 時，ChatGPT 或 Cursor 才可開始新的實際修改。
- 開始修改前，先把 Owner 改成 `ChatGPT` 或 `Cursor`，並填 Task / Started / Base commit。
- 修改完成、提交、交接完畢後，Owner 改回 `NONE`。
- 若看到另一方為 Owner，不要同時修改同一問題；先讀 changelog 並等待該工作完成或由使用者明確改派。

## CURRENT DEVELOPMENT

- Development status: ANALYSIS_ONLY
- Development release: UNASSIGNED
- Development CSS: `eg-v2-20260822.css`
- Development JS: `eg-v2-20260822.js`
- CMS paste file: UNKNOWN / not confirmed in GitHub
- Latest known coordination state: P0 mobile fixes are still pending

## CURRENT LIVE WEBSITE

- Live status: UNKNOWN
- Live release: UNKNOWN
- Live CSS: UNKNOWN
- Live JS: UNKNOWN
- Live CMS paste file: UNKNOWN
- Live verified by user: NO / NOT RECORDED
- Live verified time: —

**重要：GitHub 最新版本不等於官網目前上線版本。**
只有使用者實際把 Cursor 產生的貼上版 HTML 貼入官網後台，並確認前台正常，才可把狀態改成 `LIVE_VERIFIED`。

## ALLOWED STATUS VALUES

依序使用以下狀態，不要只寫模糊的「完成」：

1. `ANALYSIS_ONLY` — 只有檢查 / 分析，尚未修改程式
2. `IN_PROGRESS` — 正在修改
3. `CODE_FIXED` — 程式已修改，但尚未完成本機驗證
4. `LOCAL_TESTED` — Cursor 已完成本機 / 瀏覽器基本測試
5. `PASTE_GENERATED` — 新官網貼上版 HTML 已產生
6. `USER_PASTED` — 使用者已貼入官網後台
7. `LIVE_VERIFIED` — 使用者已確認正式官網前台正常

## RELEASE / VERSION RULE

- 不再用「最新版」作為交接用語。
- 每一個準備上線的版本應有明確 release ID，例如：`R20260822-01`。
- release ID 必須對應：
  - CSS 檔
  - JS 檔
  - CMS paste HTML
  - code commit / related commits
  - 測試狀態
- 若尚未確定 release ID，填 `UNASSIGNED`，不要自行猜測。

## CURSOR START CHECK

Cursor 每次開始前必須：

1. `git status`
2. 若 working tree 乾淨，才 `git pull`
3. 若有未提交修改：停止直接 pull，先確認本機差異來源
4. pull 後重新讀：
   - `PROJECT_STATUS.md`
   - `CHATGPT_CURSOR_BASELINE.md`
   - `IMPORTANT_TODO.md`
   - `PROJECT_CHANGELOG.md`
5. 確認 ACTIVE WORK Owner 狀態後才開始修改

## CMS PASTE GATE

Cursor 產生正式貼上版前必須確認：

- Development status 至少為 `LOCAL_TESTED`
- P0 狀態已完成，或使用者明確要求產生測試版
- CMS HTML 引用的 CSS 是本 release 指定版本
- CMS HTML 引用的 JS 是本 release 指定版本
- 圖片來源確認
- Desktop Vimeo 確認
- Mobile Vimeo 確認
- `IMPORTANT_TODO.md` 已同步
- `PROJECT_CHANGELOG.md` 已同步

## LIVE GATE

以下動作只有使用者能最終確認：

- 將貼上版 HTML 貼入官網後台
- 確認正式前台載入正常
- 確認桌面 / 手機實際官網正常
- 將狀態由 `PASTE_GENERATED` / `USER_PASTED` 推進到 `LIVE_VERIFIED`

ChatGPT 或 Cursor 不得因為 GitHub 已 commit、Cursor 已測試、或貼上版已產生，就自行宣告版本已正式上線。
