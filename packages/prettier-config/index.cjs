/** @type {import('prettier').Config} */
module.exports = {
  arrowParens: 'always',
  printWidth: 100,
  semi: true,
  singleQuote: true,
  tabWidth: 2,
  trailingComma: 'all',

  importOrder: ['^vue$', '<THIRD_PARTY_MODULES>', '^@route-genius/(.*)$', '^~/(.*)$', '^[./]'],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
  // !: Waiting for these to make it upstream
  // importOrderMergeDuplicateImports: true,
  // importOrderCombineTypeAndValueImports: true,

  plugins: [
    require.resolve('@trivago/prettier-plugin-sort-imports'),
    require.resolve('prettier-plugin-tailwindcss'),
  ],

  overrides: [],
};
