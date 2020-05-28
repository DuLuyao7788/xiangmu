import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        // 类型导航
        homedao:[],
        homegoodsInfo: [],
        illness:[],
        typeTui:[],
        tuiList:[],
        oftenList:[],
        // 看过和买过的商品
        lookSearchGoods:[],
        // 推荐
        goodsInfo:[]
    },
    mutations: {
        setHomedao(state, homedao) {
            state.homedao = homedao
        },
        setGoodsInfo(state, goodsInfo) {
            state.goodsInfo = goodsInfo
        },
        setHomeGoodsInfo(state, homegoodsInfo) {
            state.homegoodsInfo = homegoodsInfo
        },
        setIllness(state, illness) {
            state.illness = illness
        },
        setTypeTui(state,typeTui){
            state.typeTui=typeTui
        },
        setTuiList(state,tuiList){
            state.tuiList=tuiList
        },
        setOftenList(state,oftenList){
            state.oftenList=oftenList
        },
        setLookSearchGoods(state,lookSearchGoods){
            state.lookSearchGoods=lookSearchGoods
        }
    },
    actions: {
        // 主页类型导航
        getHomedao(state) {
            return new Promise((resolve, reject) => {
              axios.get('/data/home/homedao.json').then(results => {
                    state.commit('setHomedao', results.data)
                    resolve(results.data)
                }).catch(error => {
                    reject(error)
                })
            })
        },
        getHomeGoodsInfo(state) {
            return new Promise((resolve, reject) => {
              axios.get('/data/home/goodInfo/goodsInfo1.json').then(results => {
                    state.commit('setHomeGoodsInfo', results.data)
                    resolve(results.data)
                }).catch(error => {
                    reject(error)
                })
            })
        },
        // 推荐
        getGoodsInfo(state) {
            return new Promise((resolve, reject) => {
              axios.get('/data/home/goodInfo/goosInfo.json').then(results => {
                    state.commit('setGoodsInfo', results.data)
                    resolve(results.data)
                }).catch(error => {
                    reject(error)
                })
            })
        },
        getIllness(state) {
            return new Promise((resolve, reject) => {
              axios.get('/data/home/illnessList.json').then(results => {
                    state.commit('setIllness', results.data)
                    resolve(results.data)
                }).catch(error => {
                    reject(error)
                })
            })
        },
        // 推荐类型
        getTypeTui(state){
            return new Promise((resolve, reject) => {
                axios.get('/data/home/typeTui.json').then(results => {
                      state.commit('setTypeTui', results.data)
                      resolve(results.data)
                  }).catch(error => {
                      reject(error)
                  })
              })
        },
        // 推荐
        getTuiList(state){
            return new Promise((resolve, reject) => {
                axios.get('/data/home/tuiList.json').then(results => {
                      state.commit('setTuiList', results.data)
                    
                      resolve(results.data)
                  }).catch(error => {
                      reject(error)
                  })
              })
        },
        // 经常查询
        getOftenList(state){
            return new Promise((resolve, reject) => {
                axios.get('/data/home/search/oftenSearchList.json').then(results => {
                      state.commit('setOftenList', results.data)
                      resolve(results.data)
                  }).catch(error => {
                      reject(error)
                  })
              })
        },
          // 看过的商品
          getLookSearchGoods(state){
            return new Promise((resolve, reject) => {
                axios.get('/data/home/search/searchGoodsList.json').then(results => {
                      state.commit('setLookSearchGoods', results.data)
                      resolve(results.data)
                  }).catch(error => {
                      reject(error)
                  })
              })
        },
    }
})