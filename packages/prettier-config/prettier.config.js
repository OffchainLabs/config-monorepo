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
  // @trivago/prettier-plugin-sort-imports options
  importOrder: ["<THIRD_PARTY_MODULES>", "^@/(.*)$", "^[./]"],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
};

module.exports = config;
