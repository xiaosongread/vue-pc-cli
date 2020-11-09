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
      path: '/test1',
      name: '购物车',
      component: () => import('@/components/Test1')
    },
    {
      path: '/test2',
      name: '全部动画',
      component: () => import('@/components/Test2')
    },
    {
      path: '/test3',
      name: '测试',
      component: () => import('@/components/Test3')
    },
    {
      path: '/video',
      name: 'video',
      component: () => import('@/components/Video')
    }
  ]
})
