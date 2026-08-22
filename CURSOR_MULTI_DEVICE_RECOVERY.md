# CURSOR MULTI-DEVICE RECOVERY — 埃及活動頁 / CAI12A

> 用途：處理同一個 GitHub 專案同時會在兩台 Cursor 環境工作：`Cursor-Office`（公司電腦）與 `Cursor-Home`（家裡筆電）。
> 核心原則：**GitHub 只知道已 push 的內容；另一台電腦看不到未 push commit，也看不到未 commit 的修改。每台裝置開始前都必須重新建立自己的真實同步狀態。**

---

## 1. 裝置名稱固定

- `OFFICE`：公司電腦 Cursor
- `HOME`：家裡筆電 Cursor
- `REMOTE / ChatGPT`：ChatGPT 直接修改 GitHub 時使用，不代表使用者本機狀態

Cursor claim ACTIVE WORK 時必須記：

- Owner: `Cursor`
- Device: `OFFICE` / `HOME`
- Task
- Started
- Base commit
- Working tree state: `CLEAN` / `DIRTY` / `UNKNOWN`

不要只寫 `Owner: Cursor`，否則無法判斷修改在哪一台電腦。

---

## 2. 每台 Cursor 開始前的標準同步檢查

不論 OFFICE 或 HOME，每次打開專案都依序：

1. 確認 Device。
2. `git status`。
3. 確認是否有：
   - modified files
   - staged files
   - untracked files
   - local commits not yet pushed
4. 更新 remote 資訊：`git fetch` 或 Cursor 等效操作。
5. 比較 local HEAD 與 remote branch。
6. 再決定是否 pull / push / recovery。
7. 完成同步後才讀核心文件、claim Owner、開始新任務。

**禁止：一開 Cursor 就直接 Pull、直接 Push、直接開始改。**

---

# 3. 正常狀態

## A. 本機 CLEAN，而且 local = remote

可以安全繼續：

`git status → fetch → confirmed synced → read docs → claim Owner → work`

## B. 本機 CLEAN，但 remote 比 local 新

代表這台忘記 Pull 或另一方已 push。

處理：

1. 不先修改任何檔案。
2. Pull / fast-forward remote changes。
3. 重新讀 `PROJECT_STATUS.md` + 最新 changelog。
4. 確認另一台 / ChatGPT 改了什麼。
5. 再決定是否繼續原任務。

---

# 4. 忘記 PUSH — Recovery

## 情境 4A：上一台有 local commit，但忘記 push

例：HOME 做完並 commit，但 GitHub 沒有；週一 OFFICE 開始工作。

**OFFICE 不可能從 GitHub 自動取得 HOME 那個 commit。**

如果使用者知道 HOME 可能忘記 push：

1. OFFICE 先不要修改同一任務。
2. `PROJECT_STATUS.md` 標記 / 口頭狀態視為 `POSSIBLE UNPUSHED WORK ON HOME`。
3. 如果 HOME 可使用：
   - HOME `git status`
   - `git log` / branch status 確認是否 ahead of remote
   - 先 fetch remote
   - 如果 remote 沒有衝突的新內容，push HOME commit
   - 如果 remote 已前進，先同步 / review / merge，再 push，禁止 force push
4. OFFICE 再 fetch / pull。
5. OFFICE 讀 changelog / diff 後才繼續。

### 若當下拿不到 HOME

- 不猜 HOME 裡面有什麼。
- OFFICE 可以處理**完全無關**的任務，但不要修改疑似重疊檔案 / 任務。
- 若必須處理同一問題，由使用者明確決定：
  - `WAIT_FOR_HOME_RECOVERY`，或
  - `ABANDON_UNPUSHED_HOME_WORK_AND_REDO`
- 如果選擇重做，必須寫 changelog，之後 HOME 再打開時先保存/比較舊本機修改，不能直接 push 覆蓋新版。

---

## 情境 4B：上一台甚至沒有 commit，只留下 DIRTY working tree

這些內容完全只存在那台電腦。

處理原則：

- 不可由另一台或 ChatGPT 假裝已知內容。
- 原裝置可用時先：
  1. `git status`
  2. 保存 diff
  3. fetch remote
  4. 比較 remote 新變更
  5. 再決定 commit / stash / discard / manual merge
- **禁止在不理解差異時直接 pull、reset --hard 或 force push。**

---

# 5. 忘記 PULL — Recovery

## 情境 5A：這台尚未開始改，但 local 落後 remote

最簡單：

1. `git status` 確認 clean。
2. fetch。
3. 發現 behind remote。
4. pull / fast-forward。
5. 重讀 status/changelog。
6. 再開始。

不會造成資料遺失。

---

## 情境 5B：忘記 pull，已經在舊版本上修改但尚未 commit

這是高風險情境。

處理：

1. **STOP，不再繼續改。**
2. `git status`。
3. 保存本機 diff；不要先覆蓋。
4. fetch remote，但不要盲目 pull。
5. 比較：
   - 本機修改檔案
   - remote 修改檔案
   - 是否重疊
6. 無重疊：安全整合後再測試。
7. 有重疊：`DIFF / REVIEW / MANUAL MERGE`，以最新需求與 GitHub 正確開發狀態為準。
8. 合併後重新測試再 commit/push。

---

## 情境 5C：忘記 pull，而且已 commit 到舊 base

處理：

1. 不直接 push。
2. fetch。
3. 比較 local commits 與 remote commits。
4. 依情況 merge / rebase / cherry-pick；Cursor 必須先顯示差異並保留兩邊內容。
5. 若有衝突，人工/AI review 衝突，不使用 `ours/theirs` 一鍵覆蓋整份檔案。
6. 重新驗證後再 push。

---

# 6. Push 前的最後防呆

每次 Cursor 準備 push 前再次：

1. `git status`
2. `git fetch`
3. 確認 remote HEAD 沒有在工作期間被另一方推進
4. 確認 `PROJECT_STATUS.md` Owner / Device 仍屬自己
5. 確認最新 changelog 沒有另一方重疊修改
6. 確認自己要 push 的 commits / files
7. 才 push

若 remote 已變：

`STOP → FETCH/SYNC → DIFF/REVIEW → MERGE/REBASE IF SAFE → TEST → PUSH`

---

# 7. 禁止事項

對 OFFICE / HOME 都適用：

- 不因為 GitHub 沒有變更就認定另一台沒有工作。
- 不用 `git reset --hard` 解決未知 DIRTY 狀態。
- 不用 force push 覆蓋另一台 / ChatGPT 的新 commit。
- 不在 DIRTY working tree 上盲目 pull。
- 不在 behind remote 的舊 base 上直接開始大改。
- 不使用 OneDrive / Dropbox / NAS 同步整個 `.git` 工作目錄代替 GitHub。
- 不把 `commit` 當成已同步；**commit ≠ push**。
- 不把 `pull` 當成成功同步的唯一證明；要確認 status / HEAD。

---

# 8. 最簡單的使用者口令

如果你懷疑家裡忘記 Push：

`我可能在 HOME Cursor 忘記 push，先照 Multi-Device Recovery 檢查，不要覆蓋。`

如果你到公司才想到公司電腦可能忘記 Pull：

`這台可能忘記 pull，先檢查 local/remote 差異，不要直接改。`

如果不確定是哪台有舊工作：

`OFFICE / HOME 同步狀態不確定，先做雙裝置 recovery audit，不要 force push / reset。`

---

# 9. 狀態結論語言

同步檢查後只使用：

- `SYNCED` — working tree clean 且 local/remote 已確認一致
- `LOCAL_DIRTY` — 有未 commit 內容
- `LOCAL_AHEAD` — 有 local commit 未 push
- `REMOTE_AHEAD` — 忘記 pull / remote 有新 commit
- `DIVERGED` — local 與 remote 各有 commit
- `UNKNOWN` — 尚未在該裝置實際檢查
- `RECOVERY_REQUIRED` — 存在可能覆蓋風險，停止新修改

這些是裝置同步狀態，不取代專案 lifecycle `CODE_FIXED / LOCAL_TESTED / ...`。

---

# 10. 最終原則

**GitHub 是兩台裝置的共同交接中心，但 GitHub 無法保存「忘記 push」的本機工作。**

因此安全流程永遠是：

`Device identification → git status → fetch → local/remote compare → recovery if needed → pull/sync → read docs → claim Owner → work → fetch/re-check → commit/push → release Owner`
