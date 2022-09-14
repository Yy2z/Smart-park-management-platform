<!-- 操作日志 -->
<template>
  <el-container>
    <el-container>
      <el-main>
        <div class="body-box">
          <!-- 上方盒子 -->
          <div class="header-box">
            <div class="flexD-cow">
              <div class="small-box"></div>
              <div class="header-left-text">操作日志管理</div>
            </div>
            <div class="flexD-cow">
              <button class="btn-style btn-del">批量删除</button>
            </div>
          </div>
          <!-- 下方盒子 -->
          <div class="down-box">
            <!-- 输入盒子 -->
            <div class="input-box">
              <div class="flexD-cow">
                <div class="input-text">资源名称：</div>
                <el-input v-model="input" placeholder="请输入资源名称" />
              </div>
              <div class="flexD-cow">
                <button class="btn-style btn-chax">查询</button>
                <button class="btn-style btn-res">重置</button>
              </div>
            </div>
            <!-- 列表 -->
            <div class="table-div">
              <el-table
                ref="multipleTableRef"
                :data="tableData"
                style="width: 100%"
                :border="true"
                @selection-change="handleSelectionChange"
              >
                <el-table-column
                  type="selection"
                  width="55"
                  class="warning-row"
                />
                <el-table-column property="Xname" label="资源名称" />
                <el-table-column property="Xnum" label="操作类型" />
                <el-table-column property="Xlei" label="操作人" />
                <el-table-column property="Xaddre" label="请求IP" />
                <el-table-column property="Xperson" label="执行结果" />
                <el-table-column property="Xtai" label="应用描述" />
                <el-table-column label="操作时间">
                  <template #default="scope">{{ scope.row.date }}</template>
                </el-table-column>
                <el-table-column label="操作">
                  <router-link to="/showOperationL">
                    <el-button @click="showshowProject(scope.row)"
                      >详情</el-button
                    >
                  </router-link>
                  <el-button type="danger" @click="handleDelete()"
                    >删除</el-button
                  >
                </el-table-column>
              </el-table>
            </div>
            <!-- 分页 -->
            <div class="pagin-div">
              <div class="demo-pagination-block">
                <el-pagination
                  v-model:currentPage="currentPage1"
                  v-model:page-size="pageSize1"
                  :page-sizes="[10, 20, 30, 40]"
                  background
                  layout="total, prev, pager, next,  sizes, jumper"
                  :total="100"
                  @size-change="handleSizeChange"
                  @current-change="handleCurrentChange"
                />
              </div>
            </div>
          </div>
        </div>
      </el-main>
    </el-container>
  </el-container>
</template>
<script setup>
import { reactive } from "@vue/reactivity";
import { ref } from "vue";
import { useRouter } from "vue-router";
import * as ElIcons from "@element-plus/icons-vue";
const $router = useRouter();
const value = ref("");
const tableData = [
  {
    Xname: "产业链数据查询",
    Xnum: "数据查询",
    Xlei: "admin",
    Xaddre: "129.0.2.1",
    Xperson: "成功",
    Xtai: "产业链数据",
    date: "2022-01-23",
  },
  {
    Xname: "产业链数据新增",
    Xnum: "数据修改",
    Xlei: "miaomb",
    Xaddre: "192.168.0.1",
    Xperson: "成功",
    Xtai: "产业链数据",
    date: "2022-01-23",
  },
  {
    Xname: "产业链数据删除",
    Xnum: "数据修改",
    Xlei: "admin",
    Xaddre: "192.168.0.1",
    Xperson: "驳回",
    Xtai: "产业链数据",
    date: "2022-01-23",
  },
  {
    Xname: "产业链数据编辑",
    Xnum: "数据修改",
    Xlei: "admin",
    Xaddre: "192.168.0.1",
    Xperson: "驳回",
    Xtai: "产业链数据",
    date: "2022-01-23",
  },
  {
    Xname: "碳金融数据审批",
    Xnum: "数据修改",
    Xlei: "admin",
    Xaddre: "192.168.0.1",
    Xperson: "驳回",
    Xtai: "碳金融数据",
    date: "2022-01-23",
  },
  {
    Xname: "碳金融结果反馈",
    Xnum: "数据修改",
    Xlei: "admin",
    Xaddre: "192.168.0.1",
    Xperson: "成功",
    Xtai: "碳金融数据",
    date: "2022-01-23",
  },
  {
    Xname: "碳金融贷款申请",
    Xnum: "数据修改",
    Xlei: "admin",
    Xaddre: "192.168.0.1",
    Xperson: "成功",
    Xtai: "碳金融数据",
    date: "2022-01-23",
  },
  {
    Xname: "碳画像数据请求",
    Xnum: "数据查询",
    Xlei: "admin",
    Xaddre: "192.168.0.1",
    Xperson: "驳回",
    Xtai: "碳金融数据",
    date: "2022-01-23",
  },
  {
    Xname: "亩均论英雄数据查询",
    Xnum: "数据查询",
    Xlei: "admin",
    Xaddre: "192.168.0.1",
    Xperson: "成功",
    Xtai: "亩均论英雄数据",
    date: "2022-01-23",
  },
  {
    Xname: "企业画像基础数据查询",
    Xnum: "数据查询",
    Xlei: "admin",
    Xaddre: "192.168.0.1",
    Xperson: "成功",
    Xtai: "企业画像数据",
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
