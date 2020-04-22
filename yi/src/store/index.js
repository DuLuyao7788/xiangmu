import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    remaps:[]
  },
  mutations: {
    setRemaps(state,remaps){
      state.remaps=remaps
    }
  },
  actions: {
    getRemaps(state){
      return new Promise((resolve,reject)=>{
        Vue.axios.get('/data/remaps/remaps.json').then(results=>{
          state.commit('setRemaps',results.data)
          resolve(results.data)
        }).catch(error=>{
          reject(error)
        })
      })
    },
  },
  modules: {
  }
})
