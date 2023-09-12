import "@/utils/public-path"
import ElementPlus from "element-plus"
import zhCn from "element-plus/es/locale/lang/zh-cn"
import { createApp } from "vue"
import { createRouter, createWebHistory, Router } from "vue-router"
import App from "./App.vue"
import { routes } from "./router"
import store, { storeKey } from "./store"

import "@/styles/element-theme.scss"
import "@/styles/element-override.scss"
import "@/styles/index.scss"

// eslint-disable-next-line @typescript-eslint/no-var-requires
const { name } = require("../package.json")
let app: any = null
let router: Router | null = null
let parantRouter: Router | null = null
function render(props: { container?: HTMLElement; data?: any }) {
  const container = props?.container
  parantRouter = props?.data?.router

  router = createRouter({
    history: createWebHistory(`/${name}`),
    routes,
  })

  const dom = container ? container.querySelector("#app") : "#app"
  app = createApp(App).use(store, storeKey).use(router).use(ElementPlus, {
    size: "medium",
    locale: zhCn,
  })

  app.config.globalProperties.$parentRouter = parantRouter
  app.config.globalProperties.$helloWord = name;
  app.mount(dom as string | Element)
}

// 独立运行
if (!(window as any).__POWERED_BY_QIANKUN__) {
  console.log("app独立运行!")
  render({})
}

export async function bootstrap() {
  console.log("sub app bootstraped")
}

export async function mount(props) {
  console.log("props", props)
  render(props)
}

export async function unmount() {
  app.unmount()
  app._container.innerHTML = ""
  app = null
}
