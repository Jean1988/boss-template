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
    "linebreak-style": [0, "unix"], //换行风格
    "no-unused-vars": "off",
    "space-before-function-paren": 0,
    "no-extra-semi": "off",
    "no-undef": "off",
    "sort-imports": "off",
    "sort-vars": "off",
    "vue/html-indent": "off",
    "vue/attributes-order": "warn",
    "vue/require-prop-types": "error",
    "@typescript-eslint/no-explicit-any": "off",
    "prettier/prettier": [
      "warn",
      {
        trailingComma: "es5",
      },
    ],
  },
})
