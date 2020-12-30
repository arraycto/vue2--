import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    show: [true, true, true, false]

  },
  mutations: {
    c(state,index) {
      state.show[index] = !state.show[index]
    }
  },
  actions: {},
  modules: {}
})