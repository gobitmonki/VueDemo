import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    strategy: '',
    lid: '',
    hid: '',
    aid: ''
  },
  mutations: {
    switchStrategy (state, strategy) {
      console.log('mutation:' + strategy)
      state.strategy = strategy
    },
    switchChart (state, ids) {
        console.log('mutation chart')
        state.lid = ids.lid
        state.hid = ids.hid
        state.aid = ids.aid
    }
  },
  actions: {
    SWITCH_STRATEGY: function ({ commit }, strategy) {
      console.log('hello')
      commit('switchStrategy', strategy)
    },
    SWITCH_CHART: function ({ commit }, ids) {
        console.log('world')
        commit('switchChart', ids)
    }
  }
})

