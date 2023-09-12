const { defineConfig } = require("@vue/cli-service")
const { name: pkgName, config } = require("./package.json")

const path = require("path")
function resolve(dir) {
  return path.join(__dirname, dir)
}
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    port: config.p ?? 80,
    headers: {
      // 由于主应用和子应用端口不同， 存在跨域
      "Access-Control-Allow-Origin": "*",
    },
  },
  configureWebpack: {
    mode: "development",
    resolve: {
      alias: {
        "@": resolve("src"),
      },
    },
    output: {
      library: `${pkgName}-[name]`,
      libraryTarget: "umd",
    },
  },
  css: {
    loaderOptions: {
      scss: {
        additionalData: `@use "@/styles/global-vars.scss" as *;`,
      },
    },
  },
})
