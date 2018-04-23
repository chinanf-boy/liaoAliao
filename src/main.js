// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import bar from 'vue-progressbar'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';

import App from './App'
import axios from './http'
import router from './router'
import store from './store'

// refresh get store
if(localStorage.getItem('user') !== 'null')
store.commit('setUser',JSON.parse(localStorage.getItem('user')))

Vue.prototype.axios = axios;

Vue.config.productionTip = false

Vue.use(ElementUI)
Vue.use(bar,{
  color: 'blue',
  failedColor: '#874b4b',
  thickness: '5px',
  transition: {
    speed: '0.2s',
    opacity: '0.6s',
    termination: 300
  },
  autoRevert: true,
  location: 'top',
  inverse: false
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  axios,
  router,
  store,
  // components: { App },
  // template: '<App/>'
  render: h => h(App)
})
