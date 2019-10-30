import Vue from 'vue'
import VueRouter from 'vue-router'
import Dashboard from '../examples/Dashboard'
Vue.use(VueRouter)



const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Dashboard',
      component: Dashboard
    }]
})

export default router
