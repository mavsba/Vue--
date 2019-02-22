
import Vue from 'vue'
import App from './App'
import router from './router'

import './assets/stylus/index.styl'
new Vue({
  el: '#app',
  render:h => h (App),
  router
})
