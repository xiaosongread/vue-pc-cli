import Vue from 'vue'
import Router from 'vue-router'
import Layout from '../views/layout/Layout'

Vue.use(Router)

export default new Router({
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
    },
    {
      path: '/test',
      name: 'test',
      component: () => import('@/components/Test')
    },
    {
      path: '/video',
      name: 'video',
      component: () => import('@/components/Video')
    }
  ]
})
