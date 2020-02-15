import Vue from 'vue'
import Vuex from 'vuex'
import home from './modules/home'

Vue.use(Vuex)

const store = () =>
  new Vuex.Store({
    modules: {
      home
    },
    actions: {
      async nuxtServerInit({ commit }, { req, app }) {
        const {
          status,
          data: { menu }
        } = await app.$axios.get('geo/menu')
        commit('home/setMenu', status === 200 ? menu : [])
        const {
          status: status2,
          data: { result }
        } = await app.$axios.get('/search/hotPlace')
        commit('home/setHotPlace', status2 === 200 ? result : [])
      }
    }
  })

export default store
