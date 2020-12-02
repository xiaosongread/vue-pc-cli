// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import '@/utils/request'
import VueBlu from 'vue-blu'
import 'vue-blu/dist/css/vue-blu.min.css'

import * as fundebug from 'fundebug-javascript'
import fundebugVue from 'fundebug-vue'
require('fundebug-revideo')
// import { Message } from 'element-ui'
// Vue.prototype.$message = Message

Vue.use(VueBlu)

import * as filters from './filters'
Vue.prototype.filters = filters
// 注册全局过滤器
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})
Vue.config.productionTip = false
fundebug.apikey = '5cc43efc67a0f518af7111081e7b648a4a20e5ed90933eed407b2e733d1d8bab'
fundebugVue(fundebug, Vue)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
