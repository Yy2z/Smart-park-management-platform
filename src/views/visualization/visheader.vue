<!--
 * @Author: Palank 754803053@qq.com
 * @Date: 2022-09-02 10:10:13
 * @LastEditors: Palank 754803053@qq.com
 * @LastEditTime: 2022-09-04 23:17:24
 * @FilePath: \Smart-park-management-platform-1\src\views\visualization\header.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<!-- 数据可视中心 -->
<template>
  <div class="common-layout">
    <el-container>
      <el-aside width="200px">
      <el-menu
        default-active="2"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
      >
      <el-menu-item index="1"  @click="open('cockpit')">
          <el-icon><List /></el-icon>
          <span>园区驾驶舱</span>
        </el-menu-item>
        <el-menu-item index="2"  @click="open('Energy')">
          <el-icon><icon-menu /></el-icon>
          <span>园区招商分析</span>
        </el-menu-item>
        <el-menu-item index="3"   @click="open('equipment ')">
          <el-icon><document /></el-icon>
          <span>园区设备管理</span>
        </el-menu-item>
        <el-menu-item index="4"  @click="open('Investment ')">
          <el-icon><setting /></el-icon>
          <span>能源消耗分析</span>
        </el-menu-item>
      </el-menu></el-aside>
      <el-main >
     
      </el-main>
    </el-container>
  </div>
</template>
<script setup>
    import {
        Document,
        Menu as IconMenu,
        Location,
        Setting,
    } from '@element-plus/icons-vue'
    import { ref } from 'vue'
import { useRouter } from 'vue-router';

const router = useRouter();
const activeIndex = ref('1')
// const handleSelect = (key: string, keyPath: string[]) => {
//   console.log(key, keyPath)
// }

// 点击事件，路由跳转
let open = name => {
  router.push({name})
}
 
</script>
    
<style scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 800px;
  background-color: rgb(65, 92, 133);
}
</style>