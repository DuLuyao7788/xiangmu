import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)

export default new Vuex.Store({
    state: {
       goodlist:[],
       leimu:[]
    },
    mutations: {
        setgoodlist(state, goodlist) {
            state.goodlist = goodlist
        },
        setleimu(state, leimu) {
            state.leimu = leimu
        },
    
    },
    actions: {
        getgoodlist(state) {
            return new Promise((resolve, reject) => {
               axios.get('/data/findMedicine/goodlist.json').then(results => {
                    state.commit('setgoodlist', results.data)   
               
                    resolve(results.data)
                }).catch(error => {
                    reject(error)
                })
            })
        },
        getleimu(state) {
            return new Promise((resolve, reject) => {
               axios.get('/data/findMedicine/leimu.json').then(results => {
                    state.commit('setleimu', results.data)   
               
                    resolve(results.data)
                }).catch(error => {
                    reject(error)
                })
            })
        }

    }
})