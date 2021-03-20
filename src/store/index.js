import Vue from 'vue'
import Vuex from 'vuex'

import characters from './characters'
import settings from './settings'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    characters,
    settings,
  },
})
