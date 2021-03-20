import Awaitable from 'spiceutils/dist/Awaitable'

import { loadSetting } from '@/api/settings'

export default {
  namespaced: true,
  state: () => ({
    loading: {},
    settings: {},
  }),
  mutations: {
    setLoading(state, id, loading) {
      if(loading) {
        state.loading[id] = loading
      } else {
        delete state.loading[id]
      }
    },
    setSetting(state, setting) {
      state.settings = {
        ...state.settings,
        [setting.id]: setting,
      }
    },
  },
  actions: {
    async load({ commit }, id) {
      const loading = new Awaitable()
      commit('setLoading', loading)

      const setting = await loadSetting(id)
      commit('setSetting', setting)

      loading.resolve(setting)
      commit('setLoading', false)

      return setting
    },
  },
  getters: {
    loading: (state) => (
      (id) => state.loading[id] || false
    ),
  },
}
