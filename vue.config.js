const { defineConfig } = require("@vue/cli-service")

module.exports = defineConfig({
  transpileDependencies: true,
  css: {
    loaderOptions: {
      scss: {
        additionalData: `@use "@/styles/global-vars.scss" as *;`,
      },
    },
  },
})
