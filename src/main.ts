// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store/index'
import '@/utils/request.ts'
import VueBlu from 'vue-blu'
import 'vue-blu/dist/css/vue-blu.min.css'
// import { Message } from 'element-ui'
// Vue.prototype.$message = Message

Vue.use(VueBlu)

Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
