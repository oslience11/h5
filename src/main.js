import Vue from 'vue'
import App from './App.vue'
import elementUI from 'element-ui'
import axios from 'axios'
import router from './router/index'
import 'element-ui/lib/theme-chalk/index.css'


Vue.config.productionTip = false

Vue.prototype.axios = axios

Vue.use(elementUI)

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
