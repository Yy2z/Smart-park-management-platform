import { createRouter, createWebHistory } from 'vue-router' 
const routes = [
 {
 path: '/',
 name: 'Home',
 component: () => import('../views/home.vue')
 }
] 
const router = createRouter({
 history: createWebHistory("/"),
 routes: routes,
}) 
/**

- 输出对象
   */
  export default router;