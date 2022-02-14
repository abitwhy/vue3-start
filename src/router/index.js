import { createRouter, createWebHashHistory } from 'vue-router'
import home from '../pages/home.vue'

const routes = [
  { path: '/', component: home },
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
    ],
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
