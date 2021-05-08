import Vue from 'vue'
import Router from 'vue-router'
import Layout from '../views/layout/Layout'

Vue.use(Router)

export default new Router({
  scrollBehavior(to, from, saveTop) {
    if (saveTop) {
      return saveTop;
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
        },
        {
          path: 'article',
          name: 'Article',
          component: () => import('@/views/article/Index'),
          meta: { title: '文产时讯' }
        },
        {
          path: 'photos',
          name: 'Photos',
          component: () => import('@/views/photos/Index'),
          meta: { title: '美丽山西' }
        },
        {
          path: 'hall',
          name: 'Hall',
          component: () => import('@/views/hall/Index'),
          meta: { title: '文化会馆' }
        },
        {
          path: 'dock',
          name: 'Dock',
          component: () => import('@/views/dock/Index'),
          meta: { title: '产业对接' }
        },
        {
          path: 'wenbo',
          name: 'Wenbo',
          component: () => import('@/views/wenbo/Index'),
          meta: { title: '网上文博' }
        },
        {
          path: 'bbs',
          name: 'Bbs',
          component: () => import('@/views/bbs/Index'),
          meta: { title: '文化论坛' }
        },
        {
          path: 'secondIndex',
          name: 'SecondIndex',
          component: () => import('@/views/secondIndex/Index'),
          meta: { title: '二级首页' }
        },
        {
          // path: 'detail/:id',
          path: 'detail',
          name: 'detail',
          component: () => import('@/views/detail/Index'),
          meta: { title: '详情页面' },
        }
      ]
    }
  ]
})
