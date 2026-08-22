# IMPORTANT TODO — 埃及活動頁 / CAI12A

> 狀態：重要待辦（2026-08-22）
> 範圍：埃及活動頁 CSS / JS，尤其手機版 viewport、scroll、sticky 與效能。
> 原則：先修底層捲動與 viewport 邏輯，再處理字體、padding、圖片位置等視覺微調。不要再用大量 CSS 補丁掩蓋底層問題。

## 已確認允許的例外

- `#sidebar,#sidebar-share-btn{display:none !important}` 是刻意設計，**允許影響官網既有 sidebar 與分享按鈕**。
- Cursor / 開發者 **不要把這一條當成 bug，也不要自行恢復 sidebar 或分享按鈕**。

## P0 — 手機版嚴重問題

### 1. 統一 viewport 高度基準

目前 CSS 使用 `100svh` / `calc(100svh - var(--eg-safe-top) - var(--eg-safe-bot))`，但 JavaScript 多個動畫進度函式使用 `window.innerHeight`。

風險：
- iPhone Safari
- iPhone Chrome
- Android Chrome
- 其他會收合瀏覽器工具列的手機瀏覽器

當網址列／工具列收合時，CSS 與 JS 可能使用不同 viewport 高度，導致：
- 動畫提前或延後換幕
- sticky 停留時間異常
- 文字突然出現／消失
- 往上、往下捲動狀態不一致
- 場景跳段或卡住

待辦：
- [ ] 決定單一 viewport 高度策略，CSS 與 JS 必須使用一致基準。
- [ ] 不要只針對 Safari 修正；需同時驗證 Android Chrome。
- [ ] 檢查 Nile、Pyramids、Nile Journey、Gods、Abu Simbel、Red Sea、Timeline 的 progress 計算。

### 2. 修正 `safeTop / safeBot` 只增不減問題

目前邏輯使用類似：

```js
Math.max(safeTop, Math.round(t))
Math.max(safeBot, Math.round(vh - b))
```

這會讓偵測值增加後，在 fixed bar / browser UI 消失時不容易縮回正確值，直到 resize / orientationchange 重置。

可能造成：
- 頂部或底部多餘空白
- 場景高度被壓縮
- 圖片／文字位置偏移
- sticky 可視區高度不正確

待辦：
- [ ] 重新設計 safe area / fixed-bar 偵測，允許值合理下降。
- [ ] 避免瀏覽器 UI 變化後保留過期高度。
- [ ] 驗證手機直向、橫向、網址列展開／收合。

### 3. 降低手機 scroll frame 的計算量

目前一次 scroll update 會同時更新多個場景，包括：
- `updateNile()`
- `updateNileJourney()`
- `updateGods()`
- `updateRedSea()`
- `updateTimeline()`
- `updatePyramids()`
- `updateAbuSimbel()`
- story nav / progress / safe-area 等

部分更新包含 `getBoundingClientRect()`、`getComputedStyle()`、SVG 計算、`style.setProperty()`、`classList.toggle()`。

待辦：
- [ ] 優先只更新目前可見或相鄰場景。
- [ ] 將非必要 layout read/write 從每個 animation frame 移除或快取。
- [ ] 避免 scroll 中頻繁重新掃描整個頁面 fixed / sticky 元件。
- [ ] 以低階 Android 手機也能順暢捲動為目標。

## P1 — 桌面版重要問題

### 4. Scroll / layout 效能

`measureSafe()` 會掃描 body 多層元素與 fixed / float / sticky / header / nav，並對多個元素執行 `getComputedStyle()` / `getBoundingClientRect()`；scroll 中又會週期性觸發。

待辦：
- [ ] 降低 `measureSafe()` 呼叫頻率與掃描範圍。
- [ ] 快取穩定不變的 DOM 候選集合。
- [ ] 避免與場景動畫更新在同一 scroll frame 產生 layout thrashing。

### 5. 超長 scroll track

目前部分場景使用約 `320vh`、`380vh` 等長 scroll track。

待辦：
- [ ] 確認每個超長 track 都有明確動畫需求。
- [ ] 若只是為了延長停留時間，評估是否可降低高度又維持敘事節奏。
- [ ] 桌面與手機不要盲目共用同一 travel 計算。

## P2 — 維護性 / 次要問題

### 6. Mobile CSS 覆寫過多

同一 selector / 場景存在多層 `@media (max-width:767px)` 與後段 override。未必立即造成 bug，但會增加「修 A 壞 B」風險。

待辦：
- [ ] P0 問題修完後再整理手機 CSS。
- [ ] 合併重複規則，保留單一明確來源。
- [ ] 不要在尚未修好 viewport / scroll 邏輯前繼續堆疊補丁。

### 7. `--ff-serif` 未定義

CSS 多處使用 `font-family:var(--ff-serif)`，但根變數目前可見定義中沒有 `--ff-serif`。

待辦：
- [ ] 確認預期 serif 字體 stack。
- [ ] 定義 `--ff-serif` 或改用既有 `--ff-zh` / `--ff-display`。

## 驗證順序

修正後至少依序測試：

- [ ] iPhone Safari
- [ ] iPhone Chrome
- [ ] Android Chrome
- [ ] Samsung Internet（可取得裝置時）
- [ ] Desktop Chrome
- [ ] Desktop Edge

建議尺寸／情境：
- [ ] 390px 左右手機直向
- [ ] 手機橫向
- [ ] 768px breakpoint 前後
- [ ] 1024px
- [ ] 1440px
- [ ] 手機瀏覽器網址列展開 → 收合 → 再展開
- [ ] 快速往下捲、慢速捲、往回捲

## 修改原則

1. 先修 P0，再處理 P1 / P2。
2. 一次只處理一個根因，修完立即驗證。
3. 不要為了手機問題大幅改動桌面視覺。
4. 保持 `#eg-experience` 為主要作用域；唯一已批准的全站例外是隱藏 `#sidebar` 與 `#sidebar-share-btn`。
5. 不要自行改變埃及頁既有文案、圖片、場景順序或設計風格，除非任務明確要求。
6. 修正前先閱讀本文件；完成一項後將對應 checkbox 更新並記錄驗證結果。
