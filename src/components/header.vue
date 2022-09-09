<template>
  <el-menu
    :default-active="activeIndex"
    background-color="#082c61"
    active-text-color="#FFFAF0"
    text-color="#fff"
    class="outer-header"
    mode="horizontal"
    :ellipsis="false"
    @select="handleSelect"
  >
    <el-menu-item index="0" @click="open('home')" class="header-title">智慧园区管理平台</el-menu-item>
    <div class="flex-grow" />
    <el-menu-item index="1" @click="open('home')">综合态势</el-menu-item>
    <el-menu-item index="2" @click="open('operation')">运营管理</el-menu-item>
    <el-menu-item index="3" @click="open('property')">物业管理</el-menu-item>
    <el-menu-item index="4" @click="open('visualization')">数据可视</el-menu-item>
    <el-menu-item index="5" @click="open('configuration')">配置中心</el-menu-item>
    <div class="flex-grow1" />
    <el-icon>
     <Bell />
    </el-icon>
    <el-icon>
      <Avatar />
    </el-icon>
  </el-menu>
</template>

<script setup>
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
.flex-grow {
  flex-grow: 0.3;
}
.flex-grow1 {
  flex-grow: 0.6;
}

::v-deep.el-menu {
  height: 46px;
  border-bottom: none;
}
::v-deep.el-menu-item {
  font-size: 10px;
}
::v-deep.el-icon {
 position: relative;
 font-size: 24px;
 color: rgb(255, 255, 255);
 margin: 10px;
}
.header-title {
  font-weight: 800;
  font-size: 18px;
  letter-spacing: 5px;
}

</style>
