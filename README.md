## This boilerplate was made to quickly develop TypeScript when a server isn't needed
### compilation and watching: swc + nodemon
### formatting and linting: eslint + prettier
### testing: jest
### logging: winston

## It uses the following packages:
```json
{
  "devDependencies": {
    /* swc */
    // the swc compiler is a lightning fast compiler built in rust
    "@swc/cli": "^0.1.55",
    "@swc/core": "^1.2.155",
    // nodemon watches the dist output and runs on change
    "nodemon": "^2.0.15",

    /* eslint */
    // enforce style. ex: `hello ${name}` over 'hello ' + name
    "eslint": "^8.11.0",

    // opinionated airbnb rules (add "airbnb-base" to eslintConfig.extends array)
    "eslint-config-airbnb-base": "^15.0.0",

    // extend opinionated airbnb rules to typescript (add "airbnb-typescript/base" to eslintConfig.extends array)
    "eslint-config-airbnb-typescript": "^16.1.2",

    // turn off eslint rules that might conflict with prettier. (add "prettier" to eslintConfig.extends array)
    "eslint-config-prettier": "^8.5.0",

    // adds support for scripts in html. (add "import" to eslintConfig.plugins array)
    "eslint-plugin-html": "^6.2.0",
    // adds support for import/export syntax. (add "html" to eslintConfig.plugins array)
    "eslint-plugin-import": "^2.25.4",

    /* prettier */
    // enforce format: semi colons, whitespace, etc.
    "prettier": "^2.5.1",

    /* runs prettier before eslint. This, unlike 'eslint-plugin-prettier', silently fixes format instead of turning formatting issues into eslint errors. Do not nest prettier rules in eslint */
    "prettier-eslint": "^13.0.0",

    /* TypeScript */
    // superset of javascript to enforce compile time type checking
    "typescript": "^4.6.2",

    // transpile typescript into javascript
    "ts-node": "^10.7.0",

    // add TypeScript helper functions
    "tslib": "^2.3.1",

    // add type definitions for node
    "@types/node": "^17.0.21",

    // these two make eslint work with typescript
    // (add "@typescript-eslint" to eslintConfig.plugins array)
    "@typescript-eslint/eslint-plugin": "^5.15.0",
    // (add "@typescript-eslint/parser" to eslintConfig.parser)
    "@typescript-eslint/parser": "^5.15.0",

     /* jest */
    "jest": "^27.5.1",

    // configure jest to run through swc instead of babel
    "@swc/jest": "^0.2.20",

    // required to use ts with jest
    "@types/jest": "^27.4.1"

  },
  "dependencies": {
    /* logging */
    "winston": "^3.6.0"
  }
}
```

## This should also work well as a foundation before installing a backend framework. This isn't for React / Next.

### Next
- Next uses swc under the hood and has its own eslint config. Use their boilerplate: [next](https://nextjs.org/docs/basic-features/eslint).
- Add prettier-eslint to run the formatter before the linter.

### React
- Use [wes bos's](https://github.com/wesbos/eslint-config-wesbos)
- Remove eslint-plugin-prettier and add prettier-eslint. eslint-plugin-prettier turns all prettier errors into eslint errors, which leads to a sea of red. prettier-eslint silently fixes formatting issues and keeps eslint errors.
- Take the nested eslintConfig.prettier rules and put them in their own .prettierrc file (or in the package.json)

- Wes's installs a few more packages, like the following, and also updates the defaults
```json
/* react (eslint only) */
"@babel/preset-react": "^7.16.0",
"eslint-plugin-jsx-a11y": "^6.5.1",
"eslint-plugin-react": "^7.27.1",
"eslint-plugin-react-hooks": "^4.3.0",
// allows experimental features
"@babel/eslint-parser": "^7.16.3",
```
