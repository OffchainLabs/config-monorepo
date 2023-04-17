const config = {
  tabWidth: 2,
  useTabs: false,
  semi: true,
  singleQuote: true,
  bracketSpacing: true,
  arrowParens: 'always',
  trailingComma: 'all',
  printWidth: 100,
  quoteProps: 'consistent',
  // Set next import (@/...) after third party imports but before relative imports
  importOrder: ['^[./]', '^@/(.*)$'],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
};

module.exports = config;
