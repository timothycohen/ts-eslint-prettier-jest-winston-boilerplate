const global = {
  plugins: ['html', 'import'],
  extends: ['airbnb-base', 'prettier'],
  rules: {
    'no-console': 1,
    'no-debugger': 0,
    'no-param-reassign': 1,
    'max-classes-per-file': 0,
    'no-plusplus': 0,
    'class-methods-use-this': 1,
    'no-constant-condition': 1,
    'no-unused-vars': [1, { ignoreRestSiblings: true, argsIgnorePattern: 'res|next|^err' }],
    'no-use-before-define': ['error', { variables: false }],
    'prefer-const': ['error', { destructuring: 'all' }],
    'no-unused-expressions': [2, { allowTaggedTemplates: true }],
    'comma-dangle': 0,
    'max-len': 0,
    // swc compilation (typescript) doesn't add .js or transform .ts --> .js extensions. Therefore running the files with node fails
    // adding .ts is a ts error, so it needs to be a .js extension even though that file doesn't really exist in the src directory
    // turn off these linting errors, add .js extensions and add .js extension in import statements
    // for jest, add a moduleNameMapper to add .ts or transform .js --> .ts
    'import/extensions': 2,
    'import/no-unresolved': 0,
    'import/prefer-default-export': 0,
    'no-underscore-dangle': 0,
    'consistent-return': 0,
    'no-useless-constructor': 0,
    'no-empty-function': 0,
    'no-shadow': [
      1,
      {
        hoist: 'all',
        allow: ['resolve', 'reject', 'done', 'next', 'err', 'error'],
      },
    ],
  },
  env: {
    browser: true,
    es2020: true,
    node: true,
    jest: true,
  },
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
  },
};

const js = {
  ...global,
  parser: '@babel/eslint-parser',
};

const ts = {
  ...global,
  files: ['**/*.{ts,tsx}'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ...global.parserOptions,
    project: './tsconfig.json',
  },
  plugins: [...global.plugins, '@typescript-eslint'],
  // order matters here. this uses the eslint-config-prettier (global.extends) to turn off eslint formatting
  // then prettier-eslint runs prettier before eslint
  // if prettier comes before typescript, some formatting issues will be picked up by the linter
  // this strategy is nicer than using eslint-plugin-prettier which runs prettier through eslint, turning every formatting issue into an eslint error!
  extends: ['airbnb-typescript/base', ...global.extends],
  rules: {
    ...global.rules,
    // these are already included in eslint, so they'd show two for one errors
    '@typescript-eslint/no-unused-vars': 0,
    '@typescript-eslint/no-shadow': 0,
  },
};

module.exports = {
  ...js,
  overrides: [ts],
};
