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
    xiaodu:[],
    //套餐优选
    taocanggood:[],
    //健康商品
    jiankuangproduct:[],
    //常备药1
    changbeiyao:[],
    //感冒发烧
    ganmaofashao:[],
    //免疫力
    mianyili:[],
    //流感感冒
    luganyongyao:[],
    //小儿感冒
    xiaoerganmao:[],
    //咳嗽
    kesou:[],
    jiankuang:[],
    //居家常用
    jujiariyong:[],
    //血糖用品
    xuetangyongpin:[],
    //页面点击更多信息里面的10元1专区
    tenyuanzhuanqu1:[],
    //页面点击更多信息里面的10元2专区
    tenyuanzhuanqu2:[],
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
    },
    setTaoCangGood(state,taocanggood){
      state.taocanggood=taocanggood
    },
    setJianKuangProduct(state,jiankuangproduct){
      state.jiankuangproduct=jiankuangproduct
    },
    setChangBeiYao(state,changbeiyao){
      state.changbeiyao=changbeiyao
    },
    setGanMaoFaShao(state,ganmaofashao){
      state.ganmaofashao=ganmaofashao
    },
    setMianYiLi(state,mianyili){
      state.mianyili=mianyili
    },
    setLuGanYongYao(state,luganyongyao){
      state.luganyongyao=luganyongyao
    },
    setXiaoErGanMao(state,xiaoerganmao){
      state.xiaoerganmao=xiaoerganmao
    },
    setKeSou(state,kesou){
      state.kesou=kesou
    },
    setJianKuang(state,jiankuang){
      state.jiankuang=jiankuang
    },
    setJuJiaRiYong(state,jujiariyong){
      state.jujiariyong=jujiariyong
    },
    setXueTangYongPin(state,xuetangyongpin){
      state.xuetangyongpin=xuetangyongpin
    },
    setTenYuanZhuanQu1(state,tenyuanzhuanqu1){
      state.tenyuanzhuanqu1=tenyuanzhuanqu1
    },
    setTenYuanZhuanQu2(state,tenyuanzhuanqu2){
      state.tenyuanzhuanqu2=tenyuanzhuanqu2
    },
    
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
    getTaoCangGood(state){
      return new Promise((resolve,reject)=>{
        Vue.axios.get('/data/remaps/taocanggood.json').then(results=>{
          state.commit('setTaoCangGood',results.data)
          resolve(results.data)
        }).catch(error=>{
          reject(error)
        })
      })
    },
    getJianKuangProduct(state){
      return new Promise((resolve,reject)=>{
        Vue.axios.get('/data/remaps/jiankuangproduct.json').then(results=>{
          state.commit('setJianKuangProduct',results.data)
          resolve(results.data)
        }).catch(error=>{
          reject(error)
        })
      })
    },
    getChangBeiYao(state){
      return new Promise((resolve,reject)=>{
        Vue.axios.get('/data/remaps/changbeiyao.json').then(results=>{
          state.commit('setChangBeiYao',results.data)
          resolve(results.data)
        }).catch(error=>{
          reject(error)
        })
      })
    },
    getGanMaoFaShao(state){
      return new Promise((resolve,reject)=>{
        Vue.axios.get('/data/remaps/ganmaofashao.json').then(results=>{
          state.commit('setGanMaoFaShao',results.data)
          resolve(results.data)
        }).catch(error=>{
          reject(error)
        })
      })
    },
    getMianYiLi(state){
      return new Promise((resolve,reject)=>{
        Vue.axios.get('/data/remaps/mianyili.json').then(results=>{
          state.commit('setMianYiLi',results.data)
          resolve(results.data)
        }).catch(error=>{
          reject(error)
        })
      })
    },
    getLuGanYongYao(state){
      return new Promise((resolve,reject)=>{
        Vue.axios.get('/data/remaps/luganyongyao.json').then(results=>{
          state.commit('setLuGanYongYao',results.data)
          resolve(results.data)
        }).catch(error=>{
          reject(error)
        })
      })
    },
    getXiaoErGanMao(state){
      return new Promise((resolve,reject)=>{
        Vue.axios.get('/data/remaps/xiaoerganmao.json').then(results=>{
          state.commit('setXiaoErGanMao',results.data)
          resolve(results.data)
        }).catch(error=>{
          reject(error)
        })
      })
    },
    getKeSou(state){
      return new Promise((resolve,reject)=>{
        Vue.axios.get('/data/remaps/kesou.json').then(results=>{
          state.commit('setKeSou',results.data)
          resolve(results.data)
        }).catch(error=>{
          reject(error)
        })
      })
    },
    getJianKuang(state){
      return new Promise((resolve,reject)=>{
        Vue.axios.get('/data/remaps/jiankuang.json').then(results=>{
          state.commit('setJianKuang',results.data)
          resolve(results.data)
        }).catch(error=>{
          reject(error)
        })
      })
    },
    getJuJiaRiYong(state){
      return new Promise((resolve,reject)=>{
        Vue.axios.get('/data/remaps/jujiariyong.json').then(results=>{
          state.commit('setJuJiaRiYong',results.data)
          resolve(results.data)
        }).catch(error=>{
          reject(error)
        })
      })
    },
    getXueTangYongPin(state){
      return new Promise((resolve,reject)=>{
        Vue.axios.get('/data/remaps/xuetangyongpin.json').then(results=>{
          state.commit('setXueTangYongPin',results.data)
          resolve(results.data)
        }).catch(error=>{
          reject(error)
        })
      })
    },
    getTenYuanZhuanQu1(state){
      return new Promise((resolve,reject)=>{
        Vue.axios.get('/data/remaps/moreinfo/tenyuanzhuanqu1.json').then(results=>{
          state.commit('setTenYuanZhuanQu1',results.data)
          resolve(results.data)
        }).catch(error=>{
          reject(error)
        })
      })
    },
    getTenYuanZhuanQu2(state){
      return new Promise((resolve,reject)=>{
        Vue.axios.get('/data/remaps/moreinfo/tenyuanzhuanqu2.json').then(results=>{
          state.commit('setTenYuanZhuanQu2',results.data)
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
