# DEPLOYMENT CHECKLIST — 埃及活動頁 / CAI12A

> 用途：避免「程式改好了，但貼錯檔、引用錯 CSS/JS、沒有備份、上線後無法回復」。
> 日常情況使用者只負責最後複製貼上與前台確認；**第一次 CURRENT LIVE=UNKNOWN 的制度化上線前，使用者另有一次性責任：先保存目前 CMS 原內容作為 rollback baseline。**

## A. PRE-WORK — 開始修改前

- [ ] 已讀七份核心文件（含 `MOBILE_COMMUTE_WORKFLOW.md`）
- [ ] ACTIVE WORK Owner 為 `NONE` 或已由使用者明確改派
- [ ] 已登記 Owner / Task / Started / Base commit
- [ ] 已記錄開始時 branch HEAD
- [ ] Cursor 本機先跑 `git status`
- [ ] Cursor working tree 乾淨後才 `git pull`
- [ ] LIVE→Code correlation 已確認為 `KNOWN` 或明確記為 `UNKNOWN`

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
- [ ] 提交前已重新確認 Owner / branch HEAD / 最新 changelog 沒有另一方新變更

## C. TEST GATE — 分級驗證

所有結果只能記：`PASS` / `FAIL` / `NOT TESTED` / `BLOCKED`。

### Level A — 必要本機驗證（Cursor）

- [ ] Desktop Chrome
- [ ] Desktop Edge（可用時）
- [ ] 390px 左右手機模擬
- [ ] 767 / 768px breakpoint 前後
- [ ] 1024px
- [ ] 1440px
- [ ] 快速往下捲
- [ ] 慢速往下捲
- [ ] 往回捲
- [ ] console 無未解決重大 error
- [ ] Hero Desktop 正常
- [ ] Hero Mobile source switching 正常
- [ ] Reduced Motion 正常

### Level B — 手機 P0 必要實機驗證

只要本 release 涉及 viewport / sticky / browser toolbar / mobile scroll 等 P0：

- [ ] 至少一台真實手機完成對應情境驗證
- [ ] 若問題是 iPhone Safari 特有 → iPhone Safari 實機
- [ ] 若問題是 Android Chrome 特有 → Android Chrome 實機
- [ ] 瀏覽器網址列 / 工具列展開與收合
- [ ] 真實觸控快速 / 慢速 / 回捲

若必要 Level B 尚未執行，不得標成 production-ready；除非使用者明確接受 emergency / test risk，且未測項保持 `NOT TESTED`。

### Level C — 條件式驗證

視問題與裝置可取得性：

- [ ] iPhone Chrome
- [ ] Samsung Internet
- [ ] 其他特定瀏覽器 / 裝置

DevTools mobile emulation 不得冒充 Level B 實機 PASS。

## D. RELEASE FREEZE — 準備產貼上版

- [ ] 已指定唯一 release ID，例如 `R20260822-01`
- [ ] `RELEASE_REGISTRY.md` 已建立該 release
- [ ] release 綁定 CSS 檔名與正式 URL
- [ ] release 綁定 JS 檔名與正式 URL
- [ ] release 綁定 CMS paste HTML 檔名
- [ ] release 綁定 Desktop Vimeo
- [ ] release 綁定 Mobile Vimeo
- [ ] 圖片來源狀態已確認
- [ ] 相關 commits 已記錄
- [ ] Level A 已達要求
- [ ] 若涉及手機 P0，Level B 已達要求或已記錄使用者 emergency/test risk 接受
- [ ] P0 已完成，或明確標示本 release 僅為測試版

從 freeze 起，CSS / JS / HTML / 外部資源有實質變更時，不得偷偷沿用 frozen release；原則上建立新 release 並重新驗證。

## E. CMS PASTE HTML — Cursor 產出

- [ ] 使用者只需「全選 → 複製 → 貼上」
- [ ] 不要求使用者手動拆 CSS / JS
- [ ] HTML 引用 CSS 與 release registry 完全一致
- [ ] HTML 引用 JS 與 release registry 完全一致
- [ ] 圖片 URL 正確
- [ ] Desktop Vimeo 正確
- [ ] Mobile Vimeo 正確
- [ ] 官網貼入位置仍是「行程特色」`#feature .content`
- [ ] 狀態更新為 `PASTE_GENERATED`

## F. BACKUP / ROLLBACK — 貼官網前

### 一般 release

- [ ] 已知上一個可用 `LIVE_VERIFIED` release 或確切 CMS backup
- [ ] rollback target 已寫入 `RELEASE_REGISTRY.md`
- [ ] 不使用模糊「回上一版」；必須指定 release ID 或確切備份

### 第一次制度化上線且 CURRENT LIVE=`UNKNOWN`

使用者必須先：

1. [ ] 進官網後台「行程特色」
2. [ ] 新版貼入前，把現行完整內容全選複製保存
3. [ ] 使用可辨識名稱，例如 `CAI12A_PRE_MANAGED_LIVE_BACKUP_2026-08-22.html` 或同等明確名稱
4. [ ] 記錄保存位置 / 時間
5. [ ] ChatGPT 或 Cursor 將 backup 狀態記入 status / changelog
6. [ ] 確認 backup 可取回後才貼新 release

完成第一個可靠 `LIVE_VERIFIED` release 後，後續 rollback 優先使用 Release Registry。

## G. USER DEPLOY — 使用者操作

1. 打開 Cursor 指定的 CMS paste HTML
2. 全選
3. 複製
4. 貼到官網後台「行程特色」
5. 儲存
6. 開正式前台確認

貼完但尚未確認前台：`USER_PASTED`。

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
- [ ] `RELEASE_REGISTRY.md` → 該 release `LIVE_VERIFIED`
- [ ] 記錄使用者確認時間
- [ ] LIVE CSS / JS / CMS paste 回填
- [ ] LIVE→Code correlation → `KNOWN`
- [ ] 原 LIVE / backup 成為 rollback candidate
- [ ] `PROJECT_CHANGELOG.md` 記錄上線結果

## I. FAILURE / ROLLBACK

若正式頁面出現重大問題：

1. 不在 CMS 臨時手改 CSS / JS 產生無紀錄版本。
2. 使用明確 rollback release / CMS backup 完整回復。
3. 問題 release 標記 `ROLLED_BACK` 或註記部署失敗。
4. `PROJECT_STATUS.md` 改回實際 LIVE 狀態。
5. `PROJECT_CHANGELOG.md` 記錄失敗原因與回滾結果。
6. 新修正建立新 release，不重用失敗 release ID。
