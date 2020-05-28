
import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Remaps from '../views/remaps/Remaps.vue'
import MoreInfoPage from '../views/remaps/morespage/MorePage.vue'
import GoodsPage from '../views/remaps/goodspage/GoodsPage.vue'
import GouWuChe from '../views/gouwuche/GouWuChe.vue'
import Search from '../views/home/Search.vue'
Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/remaps',
    name: 'remaps',
    component: Remaps
  },
  {
    path: '/my',
    name: 'my',
    component: () => import( '../views/My.vue')
  },
  {
    path: '/findmedicine',
    name: 'findmedicine',
    component: () => import( '../views/FindMedicine')
  },
  {
    path: '/moreinfopage',
    name: 'MoreInfoPage',
    component: MoreInfoPage
  },
  {
    path: '/goodspage',
    name: 'GoodsPage',
    component: GoodsPage
  },
  {
    path: '/gouwuche',
    name: 'GouWuChe',
    component: GouWuChe
  },
  {
    // 搜索页面
    path: '/search',
    name: 'Search',
    component: Search
  }
]

const router = new VueRouter({
  routes
})

export default router
