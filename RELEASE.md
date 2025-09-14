# RELEASE (Short Guide)

`tiny-date-utils` の最小リリース手順。過去のハマりどころ（.d.ts 同梱 / .npmignore / スコープ公開）を前提にしています。

## 前提条件

- **Node.js**: 20+
- **npm**: 9+
- **TypeScript**: 5+

### 設定概要
- ESM 配布、`src` → `dist` ビルド、`tsconfig.build.json` 使用
- `files` と `.npmignore` は最小配布のために設定済み（配布物だけ許可）

## 1. 事前チェック（必須）

以下のコマンドを順次実行してください：

```bash
npm run lint
npm run test
npm run build
npm pack --dry-run
```

### ✅ 確認事項

Tarball に **ちょうど次の5つ** があることを確認：

- `dist/index.js`
- `dist/index.d.ts`
- `README.md`
- `LICENSE`
- `package.json`（自動で入る）

### ⚠️ トラブルシューティング

**ファイルが入っていない場合：**
- `.d.ts` → `tsconfig.build.json` に `declaration: true` があるか / `dist/` に生成されているか
- 余計なファイルが混入 → `.npmignore` を「許可リスト」方式に（`*` で全無視 + 配布物だけ `!`）
- `files` → `["dist","README.md","LICENSE"]` か、必要なら `"dist/index.js","dist/index.d.ts"` を個別指定

## 2. バージョン & コミット（必須）

```bash
git add -A
git commit -m "chore: release prep"

# 変更の種類に応じて（例: パッチ）
npm version patch -m "chore: release %s"
git push && git push --tags
```

### ⚠️ 失敗時の対処

`npm version` は Git がクリーン必須。`git status` → すべてコミットして再実行。

## 3. 公開（必須）

スコープ付きなので `--access public`（2FA時は `--otp`）。

```bash
npm publish --access public
# 例: npm publish --access public --otp=123456
```

### 📋 公開確認

```bash
npm view @kota-dev/tiny-date-utils version
```

### ⚠️ 失敗時の対処

**E403（同じ版は再公開不可）** → `npm version patch` → 再度 `npm publish`