import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        homegoodsInfo: []
    },
    mutations: {
        setHomeGoodsInfo(state, homegoodsInfo) {
            state.homegoodsInfo = homegoodsInfo
        },
    },
    actions: {
        getHomeGoodsInfo(state) {
            return new Promise((resolve, reject) => {
              axios.get('/data/home/goodInfo/goodsInfo1.json').then(results => {
                    state.commit('setHomeGoodsInfo', results.data)
                    resolve(results.data)
                }).catch(error => {
                    reject(error)
                })
            })
        }
    }
})