<!-- 访客信息页面 -->
<template>
  <!-- 卡片 -->
  <el-card class="box-card">
    <!-- 头部 -->
    <template #header>
      <div class="card-header">
        <h4>访客信息登记</h4>
        <div>
          <el-button type="primary">新增</el-button>
          <el-button type="warning">批量删除</el-button>
        </div>
      </div>
    </template>
    <!-- body -->
    <!-- 查询表单 -->
    <div class="serchForm">
      <el-form :inline="true">
        <el-form-item label="访客姓名:">
          <el-input placeholder="请输入访客姓名" />
        </el-form-item>
        <el-form-item label="访客类型">
          <el-select placeholder="请选择">
            <el-option label="企业" value="enterprise" />
            <el-option label="公寓" value="apartment" />
            <el-option label="其他" value="other" />
          </el-select>
        </el-form-item>
        <el-form-item label="联系方式:">
          <el-input placeholder="请输入联系方式" />
        </el-form-item>
        <el-form-item>
          <el-button type="primary">查询</el-button>
          <el-button>重置</el-button>
        </el-form-item>
      </el-form>
    </div>
    <!-- 表格 -->
    <el-table :data="tableData" style="width: 100%" border>
      <!-- 多选框 -->
      <el-table-column type="selection" />
      <el-table-column prop="name" label="访客姓名" />
      <el-table-column prop="phone" label="联系方式" />
      <el-table-column prop="type" label="造访类型" />
      <el-table-column prop="company" label="造访单位" />
      <el-table-column prop="driveCar" label="是否驾车" />
      <el-table-column prop="carNum" label="车牌号码" />
      <el-table-column prop="date" label="造访结束时间" />
      <el-table-column label="操作" style="display: flex">
        <template #default>
          <el-link :underline="false">详情</el-link>
          <el-link :underline="false">删除</el-link>
        </template>
      </el-table-column>
    </el-table>
  </el-card>
</template>

<script setup>
import { ref } from "@vue/reactivity";

const select = ref("");
const input1 = ref("访客姓名:");
const tableData = [
  {
    name: "张旭",
    phone: 18767256412,
    type: "企业",
    company: "杭州久碳科技有限公司",
    driveCar: "是",
    carNum: "陕G12345",
    date: "2022-01-23",
  },
  {
    name: "张兰",
    phone: 135124563225,
    type: "个人",
    company: "杭州阿里巴巴有限公司",
    driveCar: "是",
    carNum: "浙A12345",
    date: "2022-02-23",
  },
];
</script>

<style lang="scss">
.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.input-with-select .el-input-group__prepend {
  background-color: var(--el-fill-color-blank);
}
.el-form {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.serchForm {
  display: flex;
  border: 1px solid #000;
  box-sizing: border-box;
  border-radius: 20px;
  height: 80px;
  padding: 50p;
}
.el-table .cell {
  display: flex;
  justify-content: space-between !important;
}
</style>
