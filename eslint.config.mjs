// eslint.config.mjs
import js from '@eslint/js';
import tseslint from 'typescript-eslint';
import prettier from 'eslint-config-prettier';

export default [
  // 無視パターン
  { ignores: ['dist', 'node_modules', 'coverage'] },

  // JS の推奨ルール
  js.configs.recommended,

  // TypeScript の推奨ルール（Flat Config 版）
  ...tseslint.configs.recommended,

  // Prettier と競合するルールを無効化
  prettier,

  // お好みの追加設定（任意）
  {
    files: ['**/*.ts'],
    rules: {
      'no-console': 'error',
      // 例）明示anyを許容したいなら
      // '@typescript-eslint/no-explicit-any': 'off',
    },
  },
];
