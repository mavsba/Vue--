import Vue from 'vue'
import Router from 'vue-router'
import Home from '../pages/Home.vue'
import My from '../pages/My.vue'
import Order from '../pages/Order.vue'
import Seach from '../pages/Seach.vue'


Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/home',
      component: Home
    },
    {
      path: '/my',
      component: My
    },
    {
      path: '/order',
      component: Order
    },
    {
      path: '/seach',
      component: Seach
    },
    {
      path: '/',
      redirect: '/home'
    }
  ]
})
