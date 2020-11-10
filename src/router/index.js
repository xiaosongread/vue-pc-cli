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
      path: '/detail',
      name: 'Detail',
      component: () => import('@/views/detail/Index')
    },
    {
      path: '/roomList',
      name: 'RoomList',
      component: () => import('@/views/roomList/Index')
    },
    {
      path: '/agent',
      name: 'Agent',
      component: () => import('@/views/agent/Index')
    },
    {
      path: '/aboutUs',
      name: 'AboutUs',
      component: () => import('@/views/aboutUs/Index')
    },
    {
      path: '/video',
      name: 'video',
      component: () => import('@/components/Video')
    }
  ]
})
