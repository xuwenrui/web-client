import './lib/css'
import './lib/script'
import './lib/global'

import Vue from 'vue'
import App from './App'
import router from './router'
import EventBus from './lib/eventBus.js'
import axios from 'axios'

Vue.config.productionTip = false;
Vue.prototype.$bus = EventBus
Vue.prototype.$http = axios

new Vue({
  router,
  // store,
  render: h => h(App),
}).$mount('#app');
