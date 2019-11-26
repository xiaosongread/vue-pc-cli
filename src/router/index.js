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
      name: '渐隐渐出',
      component: () => import('@/components/Test')
    },
    {
      path: '/test1',
      name: '购物车',
      component: () => import('@/components/Test1')
    },
    {
      path: '/test2',
      name: '购物车',
      component: () => import('@/components/Test2')
    },
    {
      path: '/video',
      name: 'video',
      component: () => import('@/components/Video')
    }
  ]
})
