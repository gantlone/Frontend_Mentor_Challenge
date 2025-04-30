// store/index.js 或 store/theme.js
import { createStore } from 'vuex'

export default createStore({
  state: {
    isDarkMode: false
  },
  mutations: {
    toggleDarkMode(state) {
      state.isDarkMode = !state.isDarkMode
    },
    setDarkMode(state, payload) {
      state.isDarkMode = payload
    }
  },
  getters: {
    isDarkMode: state => state.isDarkMode
  }
})
