import { Module } from "vuex"
import { RootState } from ".."

const initialState = {}

export type moduleState = typeof initialState
export default {
  namespaced: true,
  state: initialState,
  getters: {},
  mutations: {},
  actions: {},
} as Module<moduleState, RootState>
