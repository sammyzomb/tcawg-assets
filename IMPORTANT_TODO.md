# IMPORTANT TODO — 埃及活動頁 / CAI12A

> 狀態：重要摘要與待辦（2026-08-22）
> 用途：Cursor 每次 pull 後先讀本文件，再處理埃及活動頁。
> 目前原則：先修底層捲動 / viewport / 效能問題，再產生新的官網貼上版 HTML。

---

## 1. 目前專案架構

這個版本**不是把全部 CSS、HTML、JS 都直接貼進官網後台**。

目前架構是：

1. 官網後台貼入 Cursor 產生的「官網貼上版 HTML」。
2. 貼上版 HTML 保留主要頁面結構與外部資源入口。
3. 大量 CSS 放在 GitHub 外部 CSS 檔案，例如 `eg-v2-20260822.css`。
4. JavaScript 放在 GitHub 外部 JS 檔案，例如 `eg-v2-20260822.js`。
5. 圖片由外部圖片網址載入。
6. Hero 影片由 Vimeo 載入，Desktop / Mobile 使用不同影片來源。

因此正式工作流程不是「把所有程式碼塞進 CMS」，而是：

**GitHub / Cursor 維護外部 CSS、JS、資產 → Cursor 產生最後貼上版 HTML → 使用者只把 HTML 貼到官網後台。**

---

## 2. 使用者實際工作方式

使用者不會自行拆 CSS / JS，也不會人工組合 HTML。

固定流程：

1. Cursor pull GitHub 最新版本。
2. Cursor 先閱讀本 `IMPORTANT_TODO.md`。
3. Cursor 處理待辦、修改 CSS / JS / HTML。
4. Cursor 完成測試。
5. Cursor 最後產生「官網貼上版 HTML」。
6. 使用者只負責將該 HTML **整份複製**。
7. 使用者貼進官網後台的「行程特色」欄位。
8. 儲存後檢查前台。

不要要求使用者手動修改 CSS、JS 或拆分貼上內容。

---

## 3. 官網貼上位置

埃及 CAI12A 這次只處理官網行程頁中的「行程特色」區塊：

`#feature .content`

不要自行修改：

- `html`
- `body`
- header
- footer
- 官網其他行程內容區塊
- 官網其他全站結構

主要頁面作用域仍以：

`#eg-experience`

為核心。

---

## 4. 已批准的全站例外

以下規則是使用者**明確允許**的：

```css
#sidebar,#sidebar-share-btn{display:none !important}
```

用途：隱藏官網原本 sidebar 與分享按鈕。

Cursor / 開發者：

- 不要把它當成 bug。
- 不要自行恢復 sidebar。
- 不要自行恢復分享按鈕。

這是目前唯一明確批准可影響 `#eg-experience` 外既有官網元件的例外。

---

## 5. 官網貼上版原則

Cursor 最後要產生一份可直接貼入官網後台的 HTML。

使用者的操作必須維持為：

**整份複製 → 整份貼上 → 儲存。**

不要要求使用者：

- 單獨貼 CSS
- 單獨貼 JS
- 手動改外部網址
- 自行拼接不同版本
- 自行壓縮或重排程式碼

Cursor 產出的貼上版需自行確認外部 CSS / JS / 圖片 / Vimeo 引用均正確。

---

## 6. 圖片與影片注意事項

### 圖片

圖片可由外部網址載入。若正式圖片放在官網 CMS 圖片空間，路徑慣例可能類似：

`/data/images/YYYYMM/CAI12A/<檔名>`

但**實際以上傳後官網回傳的正式 URL 為準**，不要猜路徑。

GitHub 內的圖片可作為開發資產，但正式上線前要確認實際 HTML 引用的是預期正式來源。

### Hero Vimeo

Hero 影片不放官網伺服器，使用 Vimeo。

Desktop / Mobile 分開設定。

正式貼上版產出前，必須確認：

- Desktop Vimeo ID / URL 正確。
- Mobile Vimeo ID / URL 正確。
- Mobile breakpoint 邏輯仍為 `max-width: 767px`。

### Reduced Motion

保留 `prefers-reduced-motion: reduce` 處理。

使用者裝置要求減少動態效果時：

- 不強迫播放 Hero Vimeo。
- 允許顯示 poster / 靜態畫面。
- 不要為了動畫效果移除此無障礙處理。

---

# 7. P0 — 手機版嚴重問題

## 7.1 統一 viewport 高度基準

目前 CSS 使用 `100svh` / `calc(100svh - var(--eg-safe-top) - var(--eg-safe-bot))`，但 JavaScript 多個動畫進度函式使用 `window.innerHeight`。

高風險環境：

- iPhone Safari
- iPhone Chrome
- Android Chrome
- 其他會收合瀏覽器網址列 / 工具列的手機瀏覽器

可能造成：

- 動畫提前或延後換幕
- sticky 停留時間異常
- 文字突然出現 / 消失
- 往上與往下捲動狀態不一致
- 場景跳段
- 場景卡住

待辦：

- [ ] 決定單一 viewport 高度策略，CSS 與 JS 使用一致基準。
- [ ] 不只修 Safari，也要驗證 Android Chrome。
- [ ] 檢查 Nile、Pyramids、Nile Journey、Gods、Abu Simbel、Red Sea、Timeline 的 progress 計算。

## 7.2 修正 `safeTop / safeBot` 只增不減

目前邏輯使用類似：

```js
Math.max(safeTop, Math.round(t))
Math.max(safeBot, Math.round(vh - b))
```

偵測值增加後，在 fixed bar / browser UI 消失時不容易縮回正確值，直到 resize / orientationchange 重置。

可能造成：

- 頂部或底部多餘空白
- 場景高度被壓縮
- 圖片位置偏移
- 文字位置偏移
- sticky 可視高度錯誤

待辦：

- [ ] 重新設計 safe area / fixed-bar 偵測，允許值合理下降。
- [ ] 不保留已消失 UI 的過期高度。
- [ ] 驗證手機直向、橫向、網址列展開 / 收合。

## 7.3 降低手機 scroll frame 計算量

目前一次 scroll update 會同時更新多個場景，包括：

- `updateNile()`
- `updateNileJourney()`
- `updateGods()`
- `updateRedSea()`
- `updateTimeline()`
- `updatePyramids()`
- `updateAbuSimbel()`
- story nav / progress / safe-area

部分更新包含：

- `getBoundingClientRect()`
- `getComputedStyle()`
- SVG 計算
- `style.setProperty()`
- `classList.toggle()`

待辦：

- [ ] 優先只更新目前可見或相鄰場景。
- [ ] 將非必要 layout read / write 移出每個 animation frame 或快取。
- [ ] 避免 scroll 中頻繁掃描整頁 fixed / sticky 元件。
- [ ] 以較舊 Android 手機仍能順暢捲動為目標。

---

# 8. P1 — 桌面版重要問題

## 8.1 Scroll / layout 效能

`measureSafe()` 會掃描 body 多層元素與 fixed / float / sticky / header / nav，並對多個元素執行 `getComputedStyle()` / `getBoundingClientRect()`；scroll 中又會週期性觸發。

待辦：

- [ ] 降低 `measureSafe()` 呼叫頻率與掃描範圍。
- [ ] 快取穩定不變的 DOM 候選集合。
- [ ] 避免與場景動畫更新在同一 scroll frame 產生 layout thrashing。

## 8.2 超長 scroll track

目前部分場景使用約 `320vh`、`380vh` 等長 scroll track。

待辦：

- [ ] 確認每個超長 track 都有實際動畫需求。
- [ ] 若只是延長停留時間，評估降低高度但維持敘事節奏。
- [ ] 桌面與手機不要盲目共用同一 travel 計算。

---

# 9. P2 — 維護性 / 次要問題

## 9.1 Mobile CSS 覆寫過多

同一 selector / 場景存在多層 `@media (max-width:767px)` 與後段 override。

這未必立即造成 bug，但增加「修 A 壞 B」風險。

待辦：

- [ ] P0 完成後再整理 Mobile CSS。
- [ ] 合併重複規則。
- [ ] 保留單一明確來源。
- [ ] 在 viewport / scroll 邏輯未修好前，不要繼續堆疊大量手機 CSS 補丁。

## 9.2 `--ff-serif` 未定義

CSS 多處使用：

`font-family:var(--ff-serif)`

但根變數目前可見定義中沒有 `--ff-serif`。

待辦：

- [ ] 確認預期 serif 字體 stack。
- [ ] 定義 `--ff-serif` 或改用既有 `--ff-zh` / `--ff-display`。

---

# 10. 上線前測試清單

修正完成後至少測試：

- [ ] iPhone Safari
- [ ] iPhone Chrome
- [ ] Android Chrome
- [ ] Samsung Internet（有裝置時）
- [ ] Desktop Chrome
- [ ] Desktop Edge

尺寸 / 情境：

- [ ] 約 390px 手機直向
- [ ] 手機橫向
- [ ] 767 / 768px breakpoint 前後
- [ ] 1024px
- [ ] 1440px
- [ ] 手機網址列展開 → 收合 → 再展開
- [ ] 慢速往下捲
- [ ] 快速往下捲
- [ ] 往回捲
- [ ] Hero Desktop Vimeo 正常
- [ ] Hero Mobile Vimeo 正常
- [ ] Reduced Motion 正常

---

# 11. 正式上官網的簡化流程

Cursor / 開發端：

1. `git pull`
2. 閱讀 `IMPORTANT_TODO.md`
3. 先完成 P0 手機嚴重問題
4. 再處理需要的 P1 / P2
5. 完成桌面與手機測試
6. 確認正式圖片來源
7. 確認 Desktop / Mobile Vimeo
8. 產生新的「官網貼上版 HTML」
9. 告知使用者此版本可貼官網

使用者：

1. 打開 Cursor 產出的官網貼上版 HTML
2. 全選
3. 複製
4. 貼進官網後台「行程特色」
5. 儲存
6. 看前台結果

使用者不需要做其他程式操作。

---

# 12. 修改原則

1. 先修 P0，再處理 P1 / P2。
2. 一次處理一個根因，修完立即驗證。
3. 不要為手機問題大幅破壞桌面版既有視覺。
4. `#eg-experience` 為主要作用域。
5. 已批准例外：可隱藏 `#sidebar` 與 `#sidebar-share-btn`。
6. 不要自行改變既有文案、圖片、場景順序、設計風格，除非任務明確要求。
7. 不要要求使用者手動修改 CSS / JS。
8. 每次正式修改完成後，再由 Cursor 產生完整新的官網貼上版 HTML。
9. 完成待辦後更新 checkbox，並記錄測試結果。
10. 若 P0 尚未完成，不應把當前版本標示為最終正式上線版。
