import Vue from 'vue';
import Router from 'vue-router';
import Login from './pages/Login.vue'
import Home from './pages/Home.vue'

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login,
    },
    {
      path: '/home',
      name: 'home',
      component: Home,
    }
  ],
});
