import Vue from 'vue'
import Router from 'vue-router'
import Layout from '../views/layout/Layout'

Vue.use(Router)

export default new Router({
  scrollBehavior (to, from, saveTop) {
    if (saveTop) {
      return saveTop
    } else {
      return { x: 0, y: 0 }
    }
  },
  routes: [
    {
      path: '/',
      name: 'Index',
      redirect: '/index',
      component: Layout,
      children: [
        {
          path: 'index',
          name: 'Index',
          component: () => import('@/views/index/Index'),
          meta: { title: '首页' }
        }
      ]
    }
  ]
})
