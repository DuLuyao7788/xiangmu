import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Remaps from '../views/remaps/Remaps.vue'
import MoreInfoPage from '../views/remaps/morespage/MorePage.vue'
import GoodsPage from '../views/remaps/goodspage/GoodsPage.vue'
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
]

const router = new VueRouter({
  routes
})

export default router
