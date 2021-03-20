import Awaitable from 'spiceutils/dist/Awaitable'

import { loadCharacter } from '@/api/characters'

export default {
  namespaced: true,
  state: () => ({
    loading: {},
    characters: {},
  }),
  mutations: {
    setLoading(state, id, loading) {
      if(loading) {
        state.loading[id] = loading
      } else {
        delete state.loading[id]
      }
    },
    setCharacter(state, character) {
      state.characters = {
        ...state.characters,
        [character.id]: character,
      }
    },
  },
  actions: {
    async load({ commit, rootState, getters, dispatch }, id) {
      const loading = new Awaitable()
      commit('setLoading', loading)

      const character = await loadCharacter(id)

      const { settingId } = character
      const setting = rootState.settings[settingId]
      if(!setting) {
        await dispatch('settings/load', settingId, { root: true })
      }

      commit('setCharacter', character)

      loading.resolve(character)
      commit('setLoading', false)

      return character
    },
    async update({ commit }, character) {
      commit('setCharacter', character)
    }
  },
  getters: {
    loading: (state) => (
      (id) => state.loading[id] || false
    ),
  },
}
