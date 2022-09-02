import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import '../src/styles/index.scss'
import *as ElementPlusIconsVue from '@element-plus/icons-vue'



const app = createApp(App)

// 注册Icons 全局组件
Object.keys(ElementPlusIconsVue).forEach(key => {
  app.component(key, ElementPlusIconsVue[key])
})

app.use(router)
app.use(ElementPlus)
app.mount('#app')