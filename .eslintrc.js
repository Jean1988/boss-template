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
    "vue/attributes-order": "warn",
    // "vue/first-attribute-linebreak": [
    //   "error",
    //   {
    //     singleline: "beside",
    //     multiline: "beside",
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
      "error",
      {
        printWidth: 100,
        tabWidth: 2,
        semi: false,
        endOfLine: "auto",
        disableLanguages: ["vue"],
      },
    ],
  },
})
