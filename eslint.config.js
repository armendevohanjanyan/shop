import js from '@eslint/js';
import tseslint from 'typescript-eslint';
import nextPlugin from '@next/eslint-plugin-next';
import prettier from 'eslint-plugin-prettier';

export default [
  {
    ignores: ['node_modules', '.next', 'dist', 'build', 'next-env.d.ts'], // ✅ top-level
  },
  js.configs.recommended,
  ...tseslint.configs.recommended,
  {
    plugins: {
      prettier,
      '@next/next': nextPlugin,
    },
    rules: {
      'prettier/prettier': 'warn',
      '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
    },
  },
];
