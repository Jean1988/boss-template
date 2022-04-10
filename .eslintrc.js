const { defineConfig } = require("eslint-define-config")

module.exports = defineConfig({
  root: true,
  env: {
    node: true,
  },
  extends: [
    "plugin:vue/vue3-essential",
    "eslint:recommended",
    "@vue/typescript/recommended",
    "plugin:prettier/recommended",
  ],
  parserOptions: {
    ecmaVersion: 2020,
  },
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    "sort-imports": "off",
    "sort-vars": "off",
    "vue/attributes-order": "warn",
    "@typescript-eslint/no-explicit-any": "off",

    // "vue/html-indent": [
    //   "error",
    //   2,
    //   {
    //     attribute: 1,
    //     baseIndent: 1,
    //     closeBracket: 0,
    //     alignAttributesVertically: true,
    //     ignores: [],
    //   },
    // ],
    // "vue/first-attribute-linebreak": [
    //   "error",
    //   {
    //     singleline: "ignore",
    //     multiline: "beside",
    //   },
    // ],
    // "vue/max-attributes-per-line": [
    //   "error",
    //   {
    //     singleline: {
    //       max: 1,
    //     },
    //     multiline: {
    //       max: 1,
    //     },
    //   },
    // ],
    // "vue/html-closing-bracket-newline": [
    //   "error",
    //   {
    //     singleline: "never",
    //     multiline: "never",
    //   },
    // ],
    "prettier/prettier": [
      "warn",
      {
        printWidth: 120,
        tabWidth: 2,
        semi: false,
        singleQuote: false,
        bracketSpacing: true,
        trailingComma: "es5",
      },
    ],
  },
})
