import { RouteRecordRaw } from "vue-router"
import BaseHome from "@/views/base-home.vue"

export const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    component: BaseHome,
  },
]
