import Vue from 'vue'
import Router from 'vue-router'
import Layout from '../views/layout/Layout.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      redirect: '/index',
      component: Layout,
      // component: () => import('@/components/HelloWorld'),
      children: [
        {
          path: 'index',
          name: 'Index',
          component: () => import('@/views/index/Index.vue'),
          meta: { title: '首页' }
        }
      ]
    }
  ]
})
