import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    data: false
  },
  mutations: {
    changeMenus (state, data) {
      state.data = data
    }
  }
})
export default store
