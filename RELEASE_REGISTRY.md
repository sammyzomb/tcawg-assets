# RELEASE REGISTRY — 埃及活動頁 / CAI12A

> 用途：每一個準備測試、準備貼上、已貼上或已正式上線的 release，都必須在這裡有唯一記錄。
> 禁止用「最新版」代替 release ID。

## Release ID 規則

格式：`RYYYYMMDD-NN`

例如：`R20260822-01`

同一天第二個 release 使用 `-02`，依序遞增。

## 每筆 release 必填欄位

- Release ID
- 狀態：`DEV` / `LOCAL_TESTED` / `PASTE_GENERATED` / `USER_PASTED` / `LIVE_VERIFIED` / `ROLLED_BACK` / `ABANDONED`
- 建立者：ChatGPT / Cursor
- Base commit
- 相關 code commits
- CSS 檔名與正式引用 URL（若尚未確定寫 `UNKNOWN`）
- JS 檔名與正式引用 URL（若尚未確定寫 `UNKNOWN`）
- CMS paste HTML 檔名
- 圖片來源狀態
- Desktop Vimeo ID / URL
- Mobile Vimeo ID / URL
- 測試環境與結果
- 已知問題 / 例外
- 是否允許正式貼上：YES / NO
- 使用者貼上時間
- LIVE 驗證時間
- 前一個可回滾 release

## Release 狀態規則

- `DEV`：仍在開發，禁止正式貼上。
- `LOCAL_TESTED`：Cursor 已本機測試，但尚未產正式貼上版。
- `PASTE_GENERATED`：貼上版已產生，可交給使用者，但不等於已上線。
- `USER_PASTED`：使用者已貼 CMS，尚待正式前台確認。
- `LIVE_VERIFIED`：只有使用者確認正式網站正常後才可使用。
- `ROLLED_BACK`：此 release 曾貼上但已回退。
- `ABANDONED`：此 release 不再使用。

## 目前 release

### DEVELOPMENT

- Release ID: `UNASSIGNED`
- Status: `DEV`
- CSS: `eg-v2-20260822.css`
- JS: `eg-v2-20260822.js`
- CMS paste HTML: `UNKNOWN`
- Base / related commit: `UNKNOWN`
- Allow production paste: NO
- Notes: P0 mobile issues still pending; current LIVE version has not yet been confirmed.

### CURRENT LIVE

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
- CSS file:
- CSS URL:
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
3. 不得以 GitHub 檔名日期推測官網 LIVE。
4. CMS paste HTML 的 CSS / JS 引用必須與 release registry 完全一致。
5. 回滾時要明確標記回到哪個已知 release，不得只說「回上一版」。
