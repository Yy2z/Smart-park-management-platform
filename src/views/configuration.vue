<!-- 配置中心 -->
<template>
  <el-container>
    <el-container>
      <!-- 左侧侧边栏 -->
      <el-aside width="200px">
        <el-menu
          default-active="2"
          class="el-menu-vertical-demo"
          background-color="#415c85"
          text-color="#fff"
          active-text-color="#FFFAF0"
          unique-opened
          router
        >
          <el-menu-item
            v-for="(item, index) in menuData"
            :index="item.path"
            :key="item.id"
          >
            <el-icon :size="20">
              <component :is="icons[index]" />
            </el-icon>
            <span>{{ item.authName }} </span>
          </el-menu-item>
        </el-menu>
      </el-aside>
      <!-- 右侧内容 -->
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>
<script setup>
import { reactive } from "@vue/reactivity";
import { ref } from "vue";
import * as ElIcons from "@element-plus/icons-vue";
// 左侧菜单图标
const icons = reactive([
  "Expand",
  "WarnTriangleFilled",
  "Briefcase",
  "Promotion",
  "Management",
  "UserFilled",
  "HomeFilled",
]);
// 页面左侧菜单数据
const menuData = reactive([
  {
    id: 1,
    authName: "项目管理",
  },
  {
    id: 2,
    authName: "告警规则",
    path: "/AlarmR",
  },
  {
    id: 3,
    authName: "资源管理",
    path: "/ResourceM",
  },
  {
    id: 4,
    authName: "角色管理",
    path: "/RoleM",
  },
  {
    id: 5,
    authName: "组织管理",
    path: "/OrganizationM",
  },
  {
    id: 6,
    authName: "用户管理",
    path: "/UserM",
  },
  {
    id: 7,
    authName: "操作日志",
    path: "/OperationL",
  },
]);
const value = ref("");
const options = [
  {
    value: "Option1",
    label: "请选择",
  },
  {
    value: "Option2",
    label: "已验收",
  },
  {
    value: "Option3",
    label: "建设中",
  },
  {
    value: "Option4",
    label: "已冻结",
  },
];
const tableData = [
  {
    Xname: "起梦忆灵科创园",
    Xnum: "SNS826732",
    Xlei: "软件集成",
    Xaddre: "秋一路456号",
    Xperson: "科技园区",
    Xtai: "建设中",
    date: "2022-01-23",
  },
  {
    Xname: "衢海设计科创园",
    Xnum: "SNS234523",
    Xlei: "软件集成",
    Xaddre: "秋一路556号",
    Xperson: "科技园区",
    Xtai: "建设中",
    date: "2022-01-23",
  },
  {
    Xname: "菲篁影视娱乐产业园",
    Xnum: "18767256412",
    Xlei: "硬件集成",
    Xaddre: "蜀山路285号",
    Xperson: "娱乐城",
    Xtai: "已竣工",
    date: "2022-01-23",
  },
  {
    Xname: "讯特产业科技园",
    Xnum: "13208432854",
    Xlei: "软硬一体",
    Xaddre: "蜀山路南，建设路西129号",
    Xperson: "科技园区",
    Xtai: "建设中",
    date: "2022-01-23",
  },
];
</script>

<style scoped>
.el-container {
  height: 100%;
}
.el-aside {
  background-color: #415c85;
  color: white;
}
.el-main {
  margin: 0;
  padding: 0;
  background-color: #eee;
}
.body-box {
  width: 99%;
  margin: 20px auto;
}
.header-left-text {
  font-size: 27px;
  font-weight: bold;
  margin-left: 20px;
}
.small-box {
  background-color: #5f81ea;
  width: 20px;
  height: 50px;
}
.flexD-cow {
  display: flex;
  flex-direction: cow;
  align-items: center;
}
.header-box {
  display: flex;
  justify-content: space-between;
  background-color: white;
  padding: 20px 30px;
}
.btn-style {
  font-size: 20px;
  font-weight: bold;
  padding: 10px 40px;
  color: white;
  border-radius: 5px;
  border: none;
}
.btn-add {
  background-color: #20a0ff;
}
.btn-del {
  background-color: #ffb802;
  margin-left: 20px;
}
.btn-chax {
  background-color: #029789;
}
.btn-res {
  margin-left: 20px;
  border: 1px solid #c9c9c9;
  background-color: white;
  color: black;
}
.down-box {
  background-color: white;
  margin-top: 20px;
  padding: 20px;
  height: 900px;
}
.input-box {
  display: flex;
  justify-content: space-between;
  border: 1px solid black;
  padding: 20px 40px;
  border-radius: 10px;
}
.input-text {
  width: 110px;
}
.table-div {
  margin-top: 20px;
}
.pagin-div {
  margin-top: 20px;
  width: 50%;
  margin: 0 auto;
  margin-top: 200px;
}
</style>
