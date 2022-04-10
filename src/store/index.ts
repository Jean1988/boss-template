import { createStore, Store } from "vuex"
import { InjectionKey } from "vue"
import moduleStore, { moduleState } from "./modules/subModule"
export const storeKey: InjectionKey<Store<RootState>> = Symbol()

export type RootState = {
  [x: string]: any
  moduleStore?: moduleState //TODO: 演示代码，非真实数据
}

export default createStore({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    moduleStore, //TODO: 演示代码，非真实数据
  },
})
