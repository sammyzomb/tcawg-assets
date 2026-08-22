# MOBILE COMMUTE WORKFLOW — 埃及活動頁 / CAI12A

> 用途：當使用者只能用手機 ChatGPT 時，仍可安全持續調整網頁，之後由 `Cursor-Office` 或 `Cursor-Home` 接手。
> 核心原則：**手機階段可分析與直接修改 GitHub，但未經本機驗證最多到 `CODE_FIXED`；接手的 Cursor 裝置必須先做 Multi-Device sync audit。**

---

## 1. 手機階段可以做

使用者可：看正式官網、截圖、描述問題、指定只檢查或直接修 GitHub。

ChatGPT 可：
- 讀八份核心文件與最新 code
- 分析截圖 / 根因
- 使用者明確要求時直接改 GitHub
- commit 並更新 status / changelog / TODO / release（若相關）
- 留下 OFFICE / HOME 都能接手的交接

---

## 2. 手機直接修流程

1. 讀八份核心文件。
2. 確認 ACTIVE WORK。
3. 若已知 `Cursor-Office` 或 `Cursor-Home` 可能有**未 push 的重疊工作**，先標 `RECOVERY_REQUIRED`，不要直接假設 GitHub 是完整狀態。
4. Owner=`NONE` 才 claim ChatGPT；使用者明確改派除外。
5. Development → `IN_PROGRESS`。
6. LIVE→Code=`UNKNOWN` 時，正式頁截圖只作 LIVE 視覺觀察，不推定 Development 就是 live code。
7. 只改指定範圍。
8. 提交前重新檢查 Owner / remote HEAD / changelog。
9. commit GitHub。
10. 更新控制文件。
11. 未經 Cursor 本機驗證，最多 `CODE_FIXED`。
12. Owner=`NONE`，等待 OFFICE 或 HOME 接手。

---

## 3. 手機階段禁止誤標

ChatGPT 沒有操作使用者本機時不得標：

- `LOCAL_TESTED`
- production `PASTE_GENERATED`
- `USER_PASTED`
- `LIVE_VERIFIED`

通常：

- Development=`CODE_FIXED`
- Local browser=`NOT TESTED`
- Device sync state：OFFICE=`UNKNOWN`、HOME=`UNKNOWN`，直到該台實際檢查

---

## 4. 截圖能證明什麼

可協助：某真實手機某次瀏覽的 spacing / crop / overflow / sticky / 場景現象。

不能單獨證明：console、所有 breakpoint、Desktop、其他手機、完整 scroll、GitHub=LIVE、OFFICE/HOME 已同步。

---

## 5. ChatGPT → Cursor 手機交接格式

至少：

- Source: `Mobile Commute / ChatGPT`
- User request
- LIVE→Code correlation
- Development status
- Files changed / commits
- Desktop impact / Mobile impact
- Local browser test
- Real-device observation
- OFFICE sync state: `UNKNOWN` unless actually known
- HOME sync state: `UNKNOWN` unless actually known
- Known possible unpushed device work: YES / NO / UNKNOWN
- Cursor required actions
- Paste regeneration required
- Remaining TODO

---

## 6. OFFICE / HOME 接手固定流程

無論哪一台接手，都先依 `CURSOR_MULTI_DEVICE_RECOVERY.md`：

1. Device=`OFFICE` 或 `HOME`。
2. `git status`。
3. 檢查 local dirty / local commits not pushed。
4. `git fetch` 或等效 remote refresh。
5. 分類 `SYNCED / LOCAL_DIRTY / LOCAL_AHEAD / REMOTE_AHEAD / DIVERGED / RECOVERY_REQUIRED`。
6. 只有安全同步後才 pull / 讀 ChatGPT 交接。
7. 不重做 ChatGPT 已完成修正。
8. Level A；若手機 P0 再做 Level B；特定環境做 Level C。
9. 追加修改要寫 changelog。
10. 通過 Gate 才 `LOCAL_TESTED` → release → CMS paste。
11. Cursor 交接時必須寫：`Device` + `Push status: PUSHED / NOT PUSHED`。

---

## 7. 如果忘記 Push / Pull

- 懷疑上一台忘記 Push：不要在另一台直接重做同一任務；依 `CURSOR_MULTI_DEVICE_RECOVERY.md` 的 Forgot Push Recovery。
- 懷疑目前這台忘記 Pull：先 status + fetch + local/remote compare；已修改舊 base 時禁止 blind pull。
- 不確定：標 `RECOVERY_REQUIRED`，不要 force push / reset --hard。

---

## 8. 手機短指令

直接修：

`直接修這個問題，照手機通勤流程；只改指定範圍，改完停在 CODE_FIXED。OFFICE/HOME 之後先做 Multi-Device sync audit 再接手。`

若擔心某台忘記 Push：

`我可能有一台 Cursor 忘記 push，先不要覆蓋；照 Multi-Device Recovery 判斷。`

---

## 9. 最終主線

**手機：使用者看官網 / 截圖 → ChatGPT 修 pushed Development → `CODE_FIXED`**

**任一電腦：OFFICE/HOME → status → fetch → sync/recovery → 讀交接 → Level A/B/C → release → CMS paste**

**正式：使用者確認 rollback → 貼 CMS → 正式頁確認 → `LIVE_VERIFIED`**
