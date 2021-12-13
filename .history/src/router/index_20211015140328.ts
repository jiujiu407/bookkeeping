import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/Home.vue'
import Money from '@/views/Money.vue'
import Labels from '@/views/Labels.vue'
import Statistics from '@/views/Statistics.vue'
Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    // 根路径，重定向到money页面
    path:'/',
    redirect:'/money'
  },
 {
   path:'/money',
   component:Money
 },
 {
   path:'/labels',
   component:Labels
 },
 {
  path:'/statistics',
  component:Statistics
},
{
  // '*'指除了上面四个页面外的其他所有页面
  path:'*',
  component:NotFound
}
]

const router = new VueRouter({
  routes
})

export default router
