import { setPageTitle } from '@/utils/router'
import { createRouter, createWebHashHistory } from 'vue-router'
import home from '../pages/home.vue'

const routes = [
  { path: '/', component: home, meta: { title: 'vite 学习之旅' } },
  {
    path: '/learn',
    component: () => import('../pages/learn/index.vue'),
    children: [
      {
        path: 'attribute',
        component: () => import('../pages/learn/attribute.vue'),
      },
      {
        path: 'store',
        component: () => import('../pages/learn/store.vue'),
      },
      {
        path: 'network',
        component: () => import('../pages/learn/network.vue'),
      },
      {
        path: 'echarts',
        component: () => import('../pages/learn/echarts/echarts.vue'),
      },
      {
        path: 'setup-script',
        component: () => import('../pages/learn/setup-script/index.vue'),
        children: [
          {
            path: 'scope',
            component: () => import('../pages/learn/setup-script/scope.vue'),
          },
        ],
      },
    ],
  },
  {
    path: '/play',
    component: () => import('../pages/play/index.vue'),
    children: [
      {
        path: 'typing',
        component: () => import('../pages/play/typing.vue'),
      },
    ],
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

router.beforeEach((to, from, next) => {
  setPageTitle(router, to)
  next()
})
export default router
