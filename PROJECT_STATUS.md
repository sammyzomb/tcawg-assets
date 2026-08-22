# PROJECT STATUS — 埃及活動頁 / CAI12A

> 三方（使用者 / ChatGPT / Cursor）中央狀態表。開始工作前依序讀：`PROJECT_STATUS.md`、`CHATGPT_CURSOR_BASELINE.md`、`IMPORTANT_TODO.md`、`PROJECT_CHANGELOG.md`、`RELEASE_REGISTRY.md`、`DEPLOYMENT_CHECKLIST.md`、`MOBILE_COMMUTE_WORKFLOW.md`。

## ACTIVE WORK

- Owner: NONE
- Task: NONE
- Started: —
- Base commit: —
- Lock type: SOFT LOCK

規則：開始實際修改前 claim Owner；提交前再次確認 Owner、branch HEAD、最新 changelog。若另一方有新變更：STOP → SYNC → DIFF / REVIEW。

## CURRENT DEVELOPMENT

- Development status: CODE_FIXED
- Development release: UNASSIGNED
- Base CSS: `eg-v2-20260822.css`
- Mobile overlay CSS: `eg-mobile-p0-20260822.css`
- Required CSS load order: `eg-v2-20260822.css` → `eg-mobile-p0-20260822.css`
- Development JS: `eg-v2-20260822.js`
- CMS paste file: UNKNOWN / not generated for this change
- Scope: **Mobile only (`max-width:767px`)**
- Desktop: intentionally unchanged; must be regression-tested by Cursor
- Latest mobile change: dynamic viewport (`dvh`) overlay and removal of stale safeTop/safeBot dependency from primary mobile sticky layout / floating controls
- Local browser test: NOT TESTED
- Level B real-device test: NOT TESTED

## P0 STATUS

- Mobile viewport CSS/JS basis mismatch: **MITIGATED IN DEVELOPMENT** by mobile-only `dvh` overlay; awaiting Cursor + real-device validation before TODO completion.
- `safeTop/safeBot` stale-value layout impact: **MITIGATED IN MOBILE CSS** for primary sticky scenes and floating controls; root JS logic itself remains pending.
- Mobile scroll-frame computation load: **PENDING**; existing JS still updates multiple scene functions per scroll RAF.

## CURRENT LIVE WEBSITE

- Live status: UNKNOWN
- Live release: UNKNOWN
- Live CSS: UNKNOWN
- Live JS: UNKNOWN
- Live CMS paste file: UNKNOWN
- Live→Code correlation: UNKNOWN
- Live verified by user: NO / NOT RECORDED

GitHub Development 不等於官網 LIVE。LIVE→Code=`UNKNOWN` 時，本次修正只能描述為 Development 修正，不能宣稱正式官網已套用。

## CURSOR NEXT ACTION

1. `git status`；working tree clean 才 `git pull`。
2. 讀最新 `PROJECT_CHANGELOG.md` 的 `Mobile Commute / ChatGPT` 交接。
3. 不重做 overlay；先確認 `eg-mobile-p0-20260822.css` 在主 CSS 後載入的預覽環境。
4. Level A：Desktop Chrome/Edge 回歸、390px、767/768、console、慢/快/回捲、Hero、Reduced Motion。
5. Level B：真實手機測試網址列/工具列展開→收合→再展開、sticky、快速/慢速/回捲。
6. 確認桌面完全沒有變化。
7. 驗證後才能升 `LOCAL_TESTED`。
8. 之後才建立 release，並由 Cursor 產新的 CMS paste HTML。

## FIRST MANAGED DEPLOYMENT BACKUP

CURRENT LIVE 仍為 `UNKNOWN`。第一次制度化上線前，使用者需先保存官網後台現行完整「行程特色」內容作 rollback baseline；成功建立第一個 `LIVE_VERIFIED` release 後，再回填 LIVE release / CSS / JS / CMS paste 並將 LIVE→Code 改為 `KNOWN`。
