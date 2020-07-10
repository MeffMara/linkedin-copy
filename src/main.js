import Vue from 'vue'
import Vuesax from 'vuesax'
import 'vuesax/dist/vuesax.css'
import VueAxios from 'vue-axios';
import axios from 'axios';
import 'material-icons/iconfont/material-icons.css'
import App from './App.vue'
import router from './router'
import store from './store'


Vue.use(Vuesax,VueAxios,axios)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  Vuesax,
  render: h => h(App)

}).$mount('#app')
