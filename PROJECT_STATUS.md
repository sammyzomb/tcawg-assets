# PROJECT STATUS — 埃及活動頁 / CAI12A

> 三方（使用者 / ChatGPT / Cursor）中央狀態表。開始工作前依序讀：`PROJECT_STATUS.md`、`CHATGPT_CURSOR_BASELINE.md`、`IMPORTANT_TODO.md`、`PROJECT_CHANGELOG.md`、`RELEASE_REGISTRY.md`、`DEPLOYMENT_CHECKLIST.md`、`MOBILE_COMMUTE_WORKFLOW.md`。

## ACTIVE WORK

- Owner: ChatGPT
- Task: 手機版 P0 調整；桌面版不動。先處理 mobile viewport / safe-area 視覺影響與 mobile track 高度一致性。
- Started: 2026-08-22 11:24 +08:00
- Base commit: `4f43fc641db9c12380727d7c1f4a4a31c54dbab0`
- Lock type: SOFT LOCK

規則：Owner 是協作 soft lock，不是 Git 原子鎖。提交實際修改前再次確認 Owner、branch HEAD、最新 changelog；若另一方有新變更，STOP → SYNC → DIFF / REVIEW。

## CURRENT DEVELOPMENT

- Development status: IN_PROGRESS
- Development release: UNASSIGNED
- Development CSS: `eg-v2-20260822.css` + planned mobile override
- Development JS: `eg-v2-20260822.js`
- CMS paste file: UNKNOWN / not confirmed in GitHub
- Scope: Mobile only (`max-width:767px`); Desktop behavior must remain unchanged
- P0 status: viewport/safe-area mobile mitigation in progress; JS scroll-performance optimization remains pending unless separately changed

## CURRENT LIVE WEBSITE

- Live status: UNKNOWN
- Live release: UNKNOWN
- Live CSS: UNKNOWN
- Live JS: UNKNOWN
- Live CMS paste file: UNKNOWN
- Live→Code correlation: UNKNOWN
- Live verified by user: NO / NOT RECORDED
- Live verified time: —

GitHub Development 不等於目前官網 LIVE。LIVE→Code=`UNKNOWN` 時，可針對 Development 修正，但不得宣稱已直接修改正式官網正在執行的同一份程式。

## STATUS VALUES

`ANALYSIS_ONLY → IN_PROGRESS → CODE_FIXED → LOCAL_TESTED → PASTE_GENERATED → USER_PASTED → LIVE_VERIFIED`

測試只使用：`PASS / FAIL / NOT TESTED / BLOCKED`。

## TEST GATES

- Level A：Cursor 本機 Chrome / Edge、390px、767/768、1024/1440、console、scroll、Hero、Reduced Motion。
- Level B：涉及 mobile viewport / sticky / browser toolbar / mobile scroll P0 時，至少一台真實手機；特定 iPhone Safari / Android Chrome 問題需對應實機。
- Level C：iPhone Chrome、Samsung Internet、其他條件式環境。

## MOBILE COMMUTE RULE

手機階段 ChatGPT 可依使用者明確指示修改 GitHub；未經本機驗證最多到 `CODE_FIXED`。Cursor 回電腦後先 `git status`，安全才 pull，讀交接後先驗證、不重做。

## FIRST MANAGED DEPLOYMENT BACKUP

CURRENT LIVE 仍為 `UNKNOWN`。第一次制度化上線前，使用者需先保存官網後台現行完整「行程特色」內容作 rollback baseline；成功建立第一個 `LIVE_VERIFIED` release 後，回填 LIVE release / CSS / JS / CMS paste，並把 LIVE→Code correlation 改為 `KNOWN`。
