import Vue from 'vue'
import App from './App.vue'

// 引入全局的样式index
import './assets/index.css'

import store from './store/index'

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
