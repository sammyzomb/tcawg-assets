# DEPLOYMENT CHECKLIST — 埃及活動頁 / CAI12A

> 用途：避免「程式改好了，但貼錯檔、引用錯 CSS/JS、沒有備份、上線後無法回復」。
> 使用者只負責最後複製貼上與前台確認；ChatGPT / Cursor 負責讓貼上前資料完整。

## A. PRE-WORK — 開始修改前

- [ ] 已讀 `PROJECT_STATUS.md`
- [ ] 已讀 `CHATGPT_CURSOR_BASELINE.md`
- [ ] 已讀 `IMPORTANT_TODO.md`
- [ ] 已讀 `PROJECT_CHANGELOG.md`
- [ ] 已讀 `RELEASE_REGISTRY.md`
- [ ] ACTIVE WORK Owner 為 `NONE` 或已由使用者明確改派
- [ ] 已登記 Owner / Task / Started / Base commit
- [ ] Cursor 本機先跑 `git status`
- [ ] Cursor working tree 乾淨後才 `git pull`

## B. CODE READY — 程式修改完成後

- [ ] CSS / JS / HTML 修改目的明確
- [ ] 沒有從舊版本整份覆蓋新版本
- [ ] `#eg-experience` 主要作用域仍完整
- [ ] `#sidebar,#sidebar-share-btn{display:none !important}` 未被誤修
- [ ] Reduced Motion 未被移除
- [ ] Desktop / Mobile Vimeo 分流未被誤改
- [ ] `IMPORTANT_TODO.md` 狀態已同步
- [ ] `PROJECT_CHANGELOG.md` 已記錄本次變更
- [ ] `PROJECT_STATUS.md` 已更新狀態

## C. LOCAL TEST — Cursor 本機驗證

至少確認：

- [ ] Desktop Chrome
- [ ] Desktop Edge
- [ ] 390px 左右手機直向
- [ ] 767 / 768px breakpoint 前後
- [ ] 1024px
- [ ] 1440px
- [ ] iPhone Safari 可驗證部分
- [ ] iPhone Chrome 可驗證部分
- [ ] Android Chrome 可驗證部分
- [ ] 手機網址列展開 / 收合情境
- [ ] 快速往下捲
- [ ] 慢速往下捲
- [ ] 往回捲
- [ ] console 無未解決重大 error
- [ ] Hero Desktop 正常
- [ ] Hero Mobile 正常
- [ ] Reduced Motion 正常

若某項無法由 Cursor 實際測試，必須記為 `NOT TESTED`，不得假裝 PASS。

## D. RELEASE FREEZE — 準備產貼上版

- [ ] 已指定唯一 release ID，例如 `R20260822-01`
- [ ] `RELEASE_REGISTRY.md` 已建立該 release
- [ ] release 綁定 CSS 檔名
- [ ] release 綁定 CSS URL
- [ ] release 綁定 JS 檔名
- [ ] release 綁定 JS URL
- [ ] release 綁定 CMS paste HTML 檔名
- [ ] release 綁定 Desktop Vimeo
- [ ] release 綁定 Mobile Vimeo
- [ ] 圖片來源狀態已確認
- [ ] 相關 commit 已記錄
- [ ] P0 已完成，或明確標示本 release 僅為測試版

從這一步開始，若 CSS / JS / HTML 有任何實質變更，**不得沿用同一個已 freeze release**；應建立新的 release ID 或明確解除 freeze 後重新走驗證。

## E. CMS PASTE HTML — Cursor 產出

- [ ] 使用者只需「全選 → 複製 → 貼上」
- [ ] 不要求使用者手動拆 CSS
- [ ] 不要求使用者手動拆 JS
- [ ] HTML 引用 CSS 與 release registry 完全一致
- [ ] HTML 引用 JS 與 release registry 完全一致
- [ ] 圖片 URL 正確
- [ ] Desktop Vimeo 正確
- [ ] Mobile Vimeo 正確
- [ ] 官網貼入位置仍是「行程特色」`#feature .content`
- [ ] 貼上版不會要求使用者另做額外程式操作
- [ ] 狀態更新為 `PASTE_GENERATED`

## F. BACKUP / ROLLBACK — 貼官網前

在使用者正式貼新版以前：

- [ ] 確認有上一份可用 CMS 內容 / 貼上版備份；若沒有，明確標記 `ROLLBACK TARGET UNKNOWN`
- [ ] 若已知上一個 LIVE release，寫入 `RELEASE_REGISTRY.md`
- [ ] 不得用「回上一版」這種模糊說法；必須指定 release 或備份檔

若 CURRENT LIVE 仍為 `UNKNOWN`：

- 第一次正式更換前，優先保存目前官網後台原內容，作為緊急回退依據。
- 保存後才進行新版貼上。

## G. USER DEPLOY — 使用者操作

使用者只需：

1. 打開 Cursor 指定的 CMS paste HTML
2. 全選
3. 複製
4. 貼到官網後台「行程特色」
5. 儲存
6. 開正式前台確認

貼完但還沒確認前台時：`USER_PASTED`

## H. LIVE VERIFY — 使用者確認

至少確認：

- [ ] 正式頁面可開
- [ ] 桌面主要場景正常
- [ ] 手機主要場景正常
- [ ] CSS 有載入
- [ ] JS 有載入
- [ ] 圖片正常
- [ ] Hero 正常
- [ ] 沒有明顯版面破壞

確認後：

- [ ] `PROJECT_STATUS.md` → `LIVE_VERIFIED`
- [ ] `RELEASE_REGISTRY.md` → 該 release 標記 `LIVE_VERIFIED`
- [ ] 記錄使用者確認時間
- [ ] 原 LIVE release 成為 rollback candidate（若已知）
- [ ] `PROJECT_CHANGELOG.md` 記錄上線結果

## I. FAILURE / ROLLBACK

若正式頁面出現重大問題：

1. 不在官網後台臨時手改 CSS / JS 來救火，避免產生無紀錄版本。
2. 若有已知 rollback release / CMS 備份，優先完整回復。
3. 將問題 release 標記 `ROLLED_BACK` 或維持 `USER_PASTED` 並註記失敗。
4. `PROJECT_STATUS.md` 改為實際 LIVE 狀態。
5. 在 `PROJECT_CHANGELOG.md` 寫明失敗原因與回滾結果。
6. 新修正必須建立新 release，不重用已失敗的 release ID。
