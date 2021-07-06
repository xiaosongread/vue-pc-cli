// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import store from './store'
import '@/utils/request'
import VueBlu from 'vue-blu'
import 'vue-blu/dist/css/vue-blu.min.css'
import Pagination from 'vue-pagination-2'
import App from './App'
import router from './router'
Vue.component('pagination', Pagination)

// import { Message } from 'element-ui'
// Vue.prototype.$message = Message

Vue.use(VueBlu)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
