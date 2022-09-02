import { createRouter, createWebHashHistory } from 'vue-router'
// 引入物业管理相关的路由页面
import propertyRouter from './property'
const manageroutes = [
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/login.vue'),
  },
  {
    path: '/',
    name: '/',
    component: () => import('../layout/index.vue'),
    children: [
      {
        path: '/home',
        name: 'home',
        component: () => import('../views/home.vue'),
      },
      {
        path: '/configuration',
        name: 'configuration',
        component: () => import('../views/configuration.vue'),
      },
      {
        path: '/operation',
        name: 'operation',
        component: () => import('../views/operation.vue'),
      },

      {
        path: '/property',
        name: 'property',
        redirect: '/totalProperty',
        component: () => import('../views/property/property.vue'),
        children: [
          // 引入物业管理相关的路由
          ...propertyRouter
        ]
      },
      {
        path: '/visualization',
        name: 'visualization',
        component: () => import('../views/visualization.vue')
      },

    ]
  },

]

// 哈希路由
const router = createRouter({
  // 路由模式
  history: createWebHashHistory(),
  routes: manageroutes,
})
/**

- 输出对象
   */
export default router;