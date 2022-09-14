// 配置中心页面相关的路由
export default [
    // 项目管理
   {
      path: '/configurationall',
      component: () => import('../views/configuration/configurationall.vue'),
    },
    {
      path: '/addProject',
      component: () => import('../views/configuration/addProject.vue')
    },
    {
      path: '/showProject',
      component: () => import('../views/configuration/showProject.vue')
    },
     // 告警规则
    {
      path: '/AlarmR',
      component: () => import('../views/configuration/AlarmR.vue')
    },
    {
      path: '/addAlarm',
      component: () => import('../views/configuration/addAlarm.vue')
    },
    {
      path: '/showAlarm',
      component: () => import('../views/configuration/showAlarm.vue')
    },
    // 操作日志
    {
      path: '/OperationL',
          component: () => import('../views/configuration/OperationL.vue')
    },
    {
      path: '/showOperationL',
      component: () => import('../views/configuration/showOperationL.vue')
    },
    // 组织管理
    {
      path: '/OrganizationM',
          component: () => import('../views/configuration/OrganizationM.vue')
    },
    // 资源管理
    {
      path: '/ResourceM',
      component: () => import('../views/configuration/ResourceM.vue')
    },
    // 角色管理
    {
      path: '/RoleM',
          component: () => import('../views/configuration/RoleM.vue')
    },
    // 用户管理
    {
      path: '/UserM',
      component: () => import('../views/configuration/UserM.vue')
    }
  ]  