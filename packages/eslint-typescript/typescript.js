const typescript = {
  env: {
    es6: true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest', // Allows for the parsing of modern ECMAScript features
    sourceType: 'module', // Allows for the use of imports
  },
  plugins: ['@typescript-eslint', 'prettier'],
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended', // Enables eslint-plugin-prettier and displays prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.
  ],
  rules: {
    '@typescript-eslint/explicit-module-boundary-types': 'off', // allow type inference for function return type
    '@typescript-eslint/member-delimiter-style': ['off'],
    '@typescript-eslint/no-explicit-any': ['warn'],
    '@typescript-eslint/no-non-null-assertion': ['off'],
    '@typescript-eslint/no-unused-vars': 'error',
    '@typescript-eslint/no-use-before-define': ['off'],
    'no-empty-pattern': 'warn',
    'no-useless-escape': 'warn',
    'object-curly-spacing': ['error', 'always'],
    'prefer-const': [2, { destructuring: 'all' }],
    'prettier/prettier': ['error', { singleQuote: true }],
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
  overrides: [
    {
      // Test files
      files: ['**/*.spec.ts', '**/*.test.ts', '__test__/**'],
      env: {
        'jest/globals': true,
      },
      plugins: ['jest'],
      extends: ['plugin:jest/recommended'],
      rules: {
        'jest/expect-expect': [
          'off',
          {
            assertFunctionNames: ['expect'],
          },
        ],
      },
    },
  ],
};

module.exports = typescript;
