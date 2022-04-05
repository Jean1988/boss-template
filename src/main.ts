import "@/styles/element-override.scss"
import "@/styles/element-theme.scss"
import ElementPlus from "element-plus"
import zhCn from "element-plus/es/locale/lang/zh-cn"
import { createApp } from "vue"
import App from "./App.vue"
import router from "./router"
import store from "./store"

createApp(App)
  .use(store)
  .use(router)
  .use(ElementPlus, {
    size: "medium",
    locale: zhCn,
  })
  .mount("#app")

export async function bootstrap() {
  console.log("sub app bootstraped")
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function mount(props: any) {
  console.log("props", props)
}

export async function unmount() {
  console.log("sub app unmount")
}
