import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/Home.vue'
import Money from '@/views/Money.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
 {
   path:'/money',
   component:Money
 },
 {
   path:'/labels',
   component:Lab
 }
]

const router = new VueRouter({
  routes
})

export default router
