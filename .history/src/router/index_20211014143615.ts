import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/Home.vue'
import money from ''

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
 {
   path:'/money',
   component:Money;
 }
]

const router = new VueRouter({
  routes
})

export default router
