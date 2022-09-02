// 物业管理页面相关的路由
export default [
  // 物业总览
  {
    path: '/totalProperty',
    component: () => import('../views/property/totalProperty.vue')
  },
  // 访客管理
  {
    path: '/VisitorInfo',
    component: () => import('../views/property/Visitor/VisitorInfo.vue')
  },
  {
    path: '/VisitorComeGo',
    component: () => import('../views/property/Visitor/VisitorComeGo.vue')
  },
  // 车辆管理
  {
    path: '/CarInfo',
    component: () => import('../views/property/Car/CarInfo.vue')
  },
  {
    path: '/CarComeGo',
    component: () => import('../views/property/car/CarComeGo.vue')
  },
  // 设备管理
  {
    path: '/accessControl',
    component: () => import('../views/property/device/accessControl.vue')
  },
  {
    path: '/vehicleBarrier',
    component: () => import('../views/property/device/vehicleBarrier.vue')
  },
  {
    path: '/waterMeter',
    component: () => import('../views/property/device/waterMeter.vue')
  },
  {
    path: '/chargingPile',
    component: () => import('../views/property/device/chargingPile.vue')
  },
  {
    path: '/securityMonitor',
    component: () => import('../views/property/device/securityMonitor.vue')
  },
  {
    path: '/elevatorControl',
    component: () => import('../views/property/device/elevatorControl.vue')
  },
  {
    path: '/fire',
    component: () => import('../views/property/device/fire.vue')
  },
  {
    path: '/sourceNetStorage',
    component: () => import('../views/property/device/sourceNetStorage.vue')
  }
]

