import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        homegoodsInfo: [],
        illness:[],
        typeTui:[],
        tuiList:[],
    },
    mutations: {
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
        }
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
        getTuiList(state){
            return new Promise((resolve, reject) => {
                axios.get('/data/home/tuiList.json').then(results => {
                      state.commit('setTuiList', results.data)
                      resolve(results.data)
                  }).catch(error => {
                      reject(error)
                  })
              })
        }
    }
})