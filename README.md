# tiny-date-utils

**小さくて安全な日付フォーマッター。**  
`Date` を **"YYYY-MM-DD"** と **"YYYY/MM/DD"** に整形します。  
不正な値（`null` / `undefined` / `Invalid Date`）は **空文字 `""`** を返します。

## 対応環境
- Node.js 20+
- TypeScript 5+ / ESM & CommonJS どちらでも利用可

## インストール

```bash
npm i tiny-date-utils
# （npm に公開後に実行してください）
```

## クイックスタート

```ts
// TypeScript / ESM
import { formatDateYYYYMMDD, formatDateYYYYslashMMslashDD } from 'tiny-date-utils';

const d = new Date('2025-09-06T10:30:00Z');

formatDateYYYYMMDD(d);            // "2025-09-06"
formatDateYYYYslashMMslashDD(d);  // "2025/09/06"

formatDateYYYYMMDD(null);                         // ""
formatDateYYYYslashMMslashDD(new Date('invalid')); // ""
```

## API

### `formatDateYYYYMMDD(d: Date | null | undefined): string`
- 例: `2025-09-06`
- 引数が不正な場合は `""` を返します。

### `formatDateYYYYslashMMslashDD(d: Date | null | undefined): string`
- 例: `2025/09/06`
- 引数が不正な場合は `""` を返します。

## 挙動と注意点

- **ローカルタイムで整形**します（`getFullYear()` / `getMonth()` / `getDate()` を使用）。  
  - 例: `new Date('2025-09-06T10:30:00Z')` は **環境のタイムゾーン**により表示される日付が前後する可能性があります。  
  - UTC での整形が必要な場合は将来の拡張（`formatDateUTCYYYYMMDD` など）を検討しています。
- 不正な値（`null` / `undefined` / `Invalid Date`）は **例外を投げず**、**空文字**を返します。  
  フォーム表示やログ出力での安心運用のための方針です。

## なぜこれ？

- **超軽量**：日付フォーマットだけ。大きな日付ライブラリは不要。  
- **安全ガード込み**：毎回バリデーションを書く手間を削減。  
- **学習コストゼロ**：関数2つだけ覚えればOK。

## 開発（このリポジトリをクローンして使う場合）

```bash
# ビルド
npm run build

# Lint
npm run lint

# Prettier で整形
npm run format

# テスト
npm run test
npm run coverage
```

- TypeScript 型定義（`.d.ts`）付きで `dist/` に出力されます。

## Roadmap

- `formatDateYYYY年MM月DD日` などのプリセット追加  
- UTC 版フォーマッター（`formatDateUTCYYYYMMDD` など）  
- パターン指定型 `formatDate(d, 'yyyy-mm-dd')` の提供（後方互換を保ちながら）

## ライセンス

CC0-1.0
完全に自由（クレジット不要）でOK