# RELEASE REGISTRY — 埃及活動頁 / CAI12A

> 每一個準備測試、貼上或上線的 release 都必須有唯一記錄。禁止用「最新版」代替 release ID。

## Release ID 規則

格式：`RYYYYMMDD-NN`，例如 `R20260822-01`。同一天依序 `-02`、`-03`。

## Release 狀態

`DEV / LOCAL_TESTED / PASTE_GENERATED / USER_PASTED / LIVE_VERIFIED / ROLLED_BACK / ABANDONED`

每筆 release 必須綁定：建立者、Base commit、相關 commits、CSS 檔與 URL、JS 檔與 URL、CMS paste、圖片、Desktop/Mobile Vimeo、測試、已知問題、production paste 許可、貼上時間、LIVE 驗證時間、rollback target。

## 目前 DEVELOPMENT

- Release ID: `UNASSIGNED`
- Status: `DEV`
- Base CSS: `eg-v2-20260822.css`
- Mobile overlay CSS: `eg-mobile-p0-20260822.css`
- Load order: `eg-v2-20260822.css` → `eg-mobile-p0-20260822.css`
- JS: `eg-v2-20260822.js`
- CMS paste HTML: `UNKNOWN`
- Base commit before mobile task: `4f43fc641db9c12380727d7c1f4a4a31c54dbab0`
- Related mobile commits:
  - `c23bbc76c1965af3d1dbf6b188a094506f05ada9` — claim mobile task / set IN_PROGRESS
  - `d70194bbe9cac2c72808b75ec9a7bff5eac49df9` — add mobile-only P0 viewport stabilization overlay
- Tests: Static review only; local browser `NOT TESTED`; real-device Level B `NOT TESTED`
- Known issues:
  - Overlay addresses mobile viewport / stale safe-area layout dependency without changing desktop rules.
  - Existing JS mobile scroll-frame workload remains a separate P0 follow-up.
  - LIVE→Code correlation remains `UNKNOWN`.
- Allow production paste: NO

## CURRENT LIVE

- Release ID: `UNKNOWN`
- Status: `UNKNOWN`
- CSS: `UNKNOWN`
- JS: `UNKNOWN`
- CMS paste HTML: `UNKNOWN`
- Verified by user: NO / NOT RECORDED
- Rollback target: `UNKNOWN`

## 新 release 建立模板

```text
### RYYYYMMDD-NN
- Status:
- Created by:
- Base commit:
- Related commits:
- CSS file(s):
- CSS URL(s):
- JS file:
- JS URL:
- CMS paste HTML:
- Images:
- Desktop Vimeo:
- Mobile Vimeo:
- Tests:
- Known issues:
- Allow production paste: NO
- User pasted at: —
- Live verified at: —
- Previous rollback release:
```

## 不可違反

1. 同一 release ID 不得重新綁定另一組 CSS / JS。
2. 已 `LIVE_VERIFIED` 的 release 不得事後改內容；有修改就建立新 release。
3. 不得由 GitHub 檔名日期推測官網 LIVE。
4. CMS paste HTML 的 CSS / JS 引用必須與本 registry 完全一致，包含多 CSS 的載入順序。
5. 回滾必須指定 release ID 或確切 backup，不得只寫「上一版」。
