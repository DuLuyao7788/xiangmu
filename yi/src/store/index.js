import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    //大图片
    remaps:[],
    //商品的信息1
    remapsbodycomment:[],
    //商品信息2
    remapsbodycomment2:[],
    //消毒信息
    xiaodu:[]
  },
  mutations: {
    setRemaps(state,remaps){
      state.remaps=remaps
    },
    setRbc(state,remapsbodycomment){
      state.remapsbodycomment=remapsbodycomment
    },
    setRbc2(state,remapsbodycomment2){
      state.remapsbodycomment2=remapsbodycomment2
    },
    setXiaoDu(state,xiaodu){
      state.xiaodu=xiaodu
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
    getRbc(state){
      return new Promise((resolve,reject)=>{
        Vue.axios.get('/data/remaps/remapsbodycomment.json').then(results=>{
          state.commit('setRbc',results.data)
          resolve(results.data)
        }).catch(error=>{
          reject(error)
        })
      })
    },
    getRbc2(state){
      return new Promise((resolve,reject)=>{
        Vue.axios.get('/data/remaps/remapsbodycomment2.json').then(results=>{
          state.commit('setRbc2',results.data)
          resolve(results.data)
        }).catch(error=>{
          reject(error)
        })
      })
    },
    getXiaoDu(state){
      return new Promise((resolve,reject)=>{
        Vue.axios.get('/data/remaps/xiaoduproduct.json').then(results=>{
          state.commit('setXiaoDu',results.data)
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
