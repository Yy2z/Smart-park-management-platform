import { createRouter, createWebHashHistory } from 'vue-router' 
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
      children:[
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
         component: () => import('../views/operation.vue')
      }, 
      {
         path: '/property',
         name: 'property',
         component: () => import('../views/property.vue')
      },
      {
         path: '/visualization',
         name: 'visualization',
         component: () => import('../views/visualization/visheader.vue')
      },
      {
         path: '/cockpit',
         name: 'cockpit',
         component: () => import('../views/visualization/cockpit.vue')
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