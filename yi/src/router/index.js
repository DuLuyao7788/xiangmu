import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Remaps from '../views/remaps/Remaps.vue'
import MoreInfoPage from '../views/remaps/morespage/MorePage.vue'
import GoodsPage from '../views/remaps/goodspage/GoodsPage.vue'
import GouWuChe from '../views/gouwuche/GouWuChe.vue'
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
    path: '/my',
    name: 'my',
    component: () => import( '../views/My.vue')
  },
  {
    path: '/findmedicine',
    name: 'findmedicine',
    component: () => import( '../views/FindMedicine')
  }
]

const router = new VueRouter({
  routes
})

export default router
