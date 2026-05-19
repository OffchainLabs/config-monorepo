import tsEslintPlugin from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import prettierConfig from 'eslint-config-prettier';
import prettierPlugin from 'eslint-plugin-prettier';
import jestPlugin from 'eslint-plugin-jest';

const jestGlobals = {
  afterAll: 'readonly',
  afterEach: 'readonly',
  beforeAll: 'readonly',
  beforeEach: 'readonly',
  describe: 'readonly',
  expect: 'readonly',
  it: 'readonly',
  jest: 'readonly',
  test: 'readonly',
};

export default [
  {
    name: '@offchainlabs/base',
    languageOptions: {
      parser: tsParser,
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
    plugins: {
      '@typescript-eslint': tsEslintPlugin,
      prettier: prettierPlugin,
    },
    rules: {
      ...(tsEslintPlugin?.configs?.recommended?.rules ?? {}),
      ...(prettierConfig?.rules ?? {}),
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      '@typescript-eslint/member-delimiter-style': ['off'],
      '@typescript-eslint/no-empty-function': 'off',
      '@typescript-eslint/no-explicit-any': ['warn'],
      '@typescript-eslint/no-non-null-assertion': ['off'],
      '@typescript-eslint/no-unused-vars': 'error',
      '@typescript-eslint/no-use-before-define': ['off'],
      'no-empty-pattern': 'warn',
      'no-useless-escape': 'warn',
      'object-curly-spacing': ['error', 'always'],
      'prefer-const': [2, { destructuring: 'all' }],
      'prettier/prettier': ['error', { singleQuote: true }],
      'no-await-in-loop': 'error',
      '@typescript-eslint/ban-ts-comment': [
        'error',
        {
          'ts-expect-error': 'allow-with-description',
          'ts-ignore': 'allow-with-description',
          'ts-nocheck': 'allow-with-description',
          'ts-check': 'allow-with-description',
        },
      ],
    },
  },
  {
    name: '@offchainlabs/base/jest',
    files: [
      '**/*.spec.{ts,tsx,js,jsx}',
      '**/*.test.{ts,tsx,js,jsx}',
      '__test__/**',
    ],
    languageOptions: {
      globals: jestGlobals,
    },
    plugins: {
      jest: jestPlugin,
    },
    rules: {
      ...(jestPlugin?.configs?.recommended?.rules ?? {}),
      'jest/expect-expect': [
        'off',
        {
          assertFunctionNames: ['expect'],
        },
      ],
    },
  },
];
