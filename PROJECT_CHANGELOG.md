# PROJECT CHANGELOG — 埃及活動頁 / CAI12A

> 所有 CSS / JS / HTML / 外部資源 / CMS paste / 專案規則的實際修改，都必須留下可交接紀錄。
> 測試只使用：`PASS / FAIL / NOT TESTED / BLOCKED`。同 change set 可寫 `same change set / see git history`，避免 commit SHA 自我引用循環。

---

## 2026-08-22 11:24 +08:00 — Mobile Commute / ChatGPT：手機版 P0 第一階段調整，桌面不動

- 修改者：ChatGPT
- Source: `Mobile Commute / ChatGPT`
- 使用者要求：針對官網埃及專案調整手機版；桌面版先不要動。
- LIVE→Code correlation: `UNKNOWN`
- 修改目的：先降低手機 Safari / Chrome 在瀏覽器工具列展開收合時，`svh` 與既有 JS `window.innerHeight` 基準不一致，以及 stale `safeTop/safeBot` 對 sticky 高度與浮動控制位置造成的風險。
- 修改檔案：
  - `PROJECT_STATUS.md`
  - `eg-mobile-p0-20260822.css`（新增）
  - `RELEASE_REGISTRY.md`
  - `PROJECT_CHANGELOG.md`
- 實際變更：
  - 新增純手機 overlay `eg-mobile-p0-20260822.css`，全部規則限定 `@media (max-width:767px)`。
  - 不修改既有 `eg-v2-20260822.css` 桌面規則，不修改 `eg-v2-20260822.js` 桌面行為。
  - Mobile sticky 場景改以 `100dvh` 作為可視高度基準；對應動畫 track 改以 `dvh` 計算 travel 長度，使其更接近既有 JS `window.innerHeight` 的動態 viewport 概念。
  - 套用場景：Gate Hero、Pyramids、Nile Journey、Gods、Luxor、Abu Simbel、Red Sea、Timeline；feature sticky scenes 也改成 `dvh`，Museum / Route 保留自然流設計。
  - 手機 sticky 場景的 `top/height` 不再依賴可能殘留的 `--eg-safe-top / --eg-safe-bot`；Hero padding 與浮動 quick/story-nav/toast 改直接使用 `env(safe-area-inset-*)`。
  - Registry 明確記錄載入順序：`eg-v2-20260822.css` → `eg-mobile-p0-20260822.css`。
- 為什麼這樣改：使用者要求桌面完全先不動；因此本階段採取 mobile-only overlay，而不是直接重寫共用 JS / desktop CSS。
- 影響範圍：Mobile only；Desktop 預期無影響。
- Development status：`CODE_FIXED`
- Static review：`PASS`
- Local browser test：`NOT TESTED`
- Level B real-device test：`NOT TESTED`
- Desktop impact：預期無（overlay 僅 `max-width:767px`）
- Mobile impact：預期改善 viewport / sticky / browser toolbar 收合時的高度一致性與 stale safe-area 造成的偏移。
- 官網貼上版是否需要重新產生：`YES`，但**現在不要產正式版**；Cursor 驗證後才產，並確保 overlay CSS 在主 CSS 後載入。
- Cursor required actions：
  1. `git status`，working tree clean 才 `git pull`。
  2. 讀 `PROJECT_STATUS.md`、本 changelog、`RELEASE_REGISTRY.md`。
  3. 不重做本次 CSS overlay，先驗證。
  4. Level A：Desktop Chrome/Edge 基本回歸、390px、767/768、console、慢/快/回捲、Hero source switching、Reduced Motion。
  5. Level B：至少一台真實手機驗證網址列/工具列展開→收合→再展開、sticky、快速/慢速/回捲。
  6. 確認桌面版視覺與動作沒有被 overlay 影響。
  7. 驗證通過後才升 `LOCAL_TESTED`，再建立 release 與 CMS paste。
- 尚未完成：
  - JS `safeTop/safeBot` 根邏輯本身仍存在，但本 overlay 已在手機主要 layout / floating controls 避開其 stale 值；根 JS 修正尚未完成。
  - 手機 scroll frame 仍會更新多個 scene update function，P0 效能優化仍待後續 JS 修正。
  - CURRENT LIVE / LIVE→Code 仍為 `UNKNOWN`。
- 相關 commits：
  - `c23bbc76c1965af3d1dbf6b188a094506f05ada9` — claim mobile task / IN_PROGRESS
  - `d70194bbe9cac2c72808b75ec9a7bff5eac49df9` — add mobile-only viewport stabilization overlay
  - `15cb435a44fc210a524c9cdfa78732a59b2402df` — register overlay in development registry
  - 本 changelog 更新：same change set / see git history

---

## 2026-08-22 11:12 +08:00 — 最終完善三方協議並完成二次稽核

- 修改者：ChatGPT
- 主要內容：建立 LIVE→Code `KNOWN/UNKNOWN`、SOFT LOCK 二次檢查、分領域權威、首次 CMS backup 責任、Level A/B/C 測試 Gate，並將 Cursor alwaysApply 收斂為 Master Rule + Mobile Rule。
- 測試狀態：三方協議 `PASS`；前台 CSS / JS `NOT TESTED`。
- 相關 commits：`b2c90b4b518ce77d7ecd2eafb985558c39f4ccb4`、`63078f13cc3dfe12521cda906f9a0505ce466057`、`0235c6b807b17c9836dcda565ca4816fd8983f1f`、`975306eea377a8e913ffb6581f5d251102784f02`、`c0bbf0157fb6d5d3ae4fdbb6fdfec7ccd04c8b11`、`74409286bc6d71ca3d4ad2d6e5f954ad8fef4e2d`。

---

## 2026-08-22 10:56 +08:00 — 納入手機通勤修改流程

- 修改者：ChatGPT
- 主要內容：新增 `MOBILE_COMMUTE_WORKFLOW.md`，建立手機 `CODE_FIXED → Cursor 驗證 → LOCAL_TESTED` 交接與截圖證據邊界。
- 相關 commits：`4c38d49c15563c798acd554cae29efd56cf901c3`、`a5778779bd8c99b8340e7f56f04911df169f7f6e`、`875d1b9d4ef8c272e856507b5a0b346e25e22298`。

---

## 2026-08-22 10:48 +08:00 — Release / deployment / rollback 制度

- 修改者：ChatGPT
- 主要內容：建立 `RELEASE_REGISTRY.md`、`DEPLOYMENT_CHECKLIST.md`、release freeze、STALE OWNER RECOVERY、UNKNOWN LIVE 與 rollback Gate。

---

## 2026-08-22 10:45 +08:00 — 三方協作防混亂機制

- 修改者：ChatGPT
- 主要內容：新增 `PROJECT_STATUS.md`、lifecycle、Owner、防盲目 pull、release ID 與 CMS 資源綁定。

---

## 2026-08-22 10:28 +08:00 — 建立 ChatGPT × Cursor 協作基準

- 修改者：ChatGPT
- 主要內容：角色分工、交接格式、優先級與貼上版條件。

---

## 2026-08-22 10:19 +08:00 — 建立強制修改紀錄機制

- 修改者：ChatGPT
- 主要內容：建立本 changelog 並規定所有實際修改都留下可交接紀錄。
