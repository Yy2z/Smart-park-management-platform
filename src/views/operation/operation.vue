<!-- 运营管理 -->
<template>
  <div class="common-layout">
    <el-container>
      <el-aside width="200px" name="asideMenu" class="Aside">
    <el-row class="tac">
      <el-col :span="12">
        <el-menu
          active-text-color="#ffd04b"
          background-color="#415c85"
          class="el-menu-vertical-demo"
          default-active="2"
          text-color="#fff"
          @open="handleOpen"
          @close="handleClose"
          unique-opened
          router
        >
        <el-menu-item>
          
            <template #title>
              <router-link to='/over'>
                 <el-icon>
                   <HomeFilled />
                 </el-icon>
                 <span>运营总览 </span>
              </router-link>
            </template>
          
          </el-menu-item>
        <el-sub-menu 
            :index="item.id.toString()"
            v-for="(item, index) in menuData"
            :key="item.id">
            <template #title>
              <el-icon>
                <component :is="iconList[index]"></component>
              </el-icon>
              <span>{{ item.authName }}</span>
            </template>
              <el-menu-item 
              :index="childrenItem.path"
              v-for="childrenItem in item.children"
              :key="childrenItem.id">
                <span>{{ childrenItem.authName }}</span>
              </el-menu-item>
          </el-sub-menu>

        </el-menu>
      </el-col>
    </el-row>
      </el-aside>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </div>
</template>
<script lang="ts" >
  import {
  Document,
  Menu as IconMenu,
  Location,
  Setting,
} from '@element-plus/icons-vue'
import { reactive } from "@vue/reactivity";

// 页面左侧菜单数据
export default{
  name:"operation",
  setup(){
      const menuData = reactive([
    {
      id: 2,
      authName: "内容管理",
      children: [
        { id: 201, authName: "文章发布管理", path: "/article" },
        { id: 202, authName: "内容评论管理", path: "/comment" },
      ],
    },
    {
      id: 3,
      authName: "招商管理",
      children: [
        { id: 301, authName: "合同签订管理", path: "/contract" },
        { id: 302, authName: "客户信息管理", path: "/information" },
      ],
    },
    {
      id: 4,
      authName: "租户管理",
      children: [
        { id: 401, authName: "租户信息管理", path: "/tenementMessage" },
        { id: 402, authName: "租户人员管理", path: "/tenantPersonnel" },
      ],
    },
    {
      id: 5,
      authName: "资产管理",
      children: [
        { id: 501, authName: "楼宇信息管理", path: "/building" },
        { id: 502, authName: "公共资源管理", path: "/resource" },
      ],
    },
    {
      id: 6,
      authName: "账单管理",
      children: [
        { id: 601, authName: "车辆缴费管理", path: "/CarPayment" },
        { id: 602, authName: "租户账单管理", path: "/tenementBill" },
      ],
    },
    ]);
    const iconList = reactive([
      "Reading", 
      "Briefcase",
      "Avatar",
      "OfficeBuilding",
      "DocumentCopy"
    ]);
    return{
      menuData,
      iconList
    }
  }
}

const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}

</script>

<style scoped>
  .el-container  {
  height: 100%;
} 

.Aside{
  background-color: #415c85;
}
.el-menu-vertical-demo{
    width: 200px;
}
.el-menu{
  border-right: none;
}
.el-main {
  margin: 0;
  padding: 0;
  background-color: #eee;
}
</style>