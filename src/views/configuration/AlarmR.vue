<!-- 告警规则 -->
<template>
  <el-container>
    <el-container>
      <el-main>
        <div class="body-box">
          <!-- 上方盒子 -->
          <div class="header-box">
            <div class="flexD-cow">
              <div class="small-box"></div>
              <div class="header-left-text">告警规则管理</div>
            </div>
            <div class="flexD-cow">
              <router-link to="/addAlarm">
                <button class="btn-style btn-add" to="/addAlarm">新增</button>
              </router-link>
              <button class="btn-style btn-del">批量删除</button>
            </div>
          </div>
          <!-- 下方盒子 -->
          <div class="down-box">
            <!-- 输入盒子 -->
            <div class="input-box">
              <div class="flexD-cow">
                <div class="input-text">告警名称：</div>
                <el-input v-model="inputContent" placeholder="请输入项目名称" />
              </div>
              <div class="flexD-cow">
                <div>推送方式：</div>
                <el-select
                  v-model="value"
                  class="m-2"
                  placeholder="请选择"
                  size="large"
                >
                  <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  />
                </el-select>
              </div>
              <div class="flexD-cow">
                <button class="btn-style btn-chax" @click="searchput">
                  查询
                </button>
                <button class="btn-style btn-res">重置</button>
              </div>
            </div>
            <!-- 列表 -->
            <div class="table-div">
              <el-table
                ref="multipleTableRef"
                :data="
                  tables[0].slice(
                    (currentPage - 1) * pageSize,
                    currentPage * pageSize
                  )
                "
                style="width: 100%"
                :border="true"
                @selection-change="handleSelectionChange"
              >
                <el-table-column
                  type="selection"
                  width="55"
                  class="warning-row"
                />
                <el-table-column property="alarmRulesName" label="告警规则名称">
                  <template #default="scope">{{
                    scope.row.alarmRulesName
                  }}</template>
                </el-table-column>
                <el-table-column property="notifyUsers" label="通知用户" />
                <el-table-column property="pushMode" label="推送方式" />
                <el-table-column
                  property="Xaddre"
                  label="告警规则"
                  width="300"
                />
                <el-table-column property="alarmRules" label="告警类型" />
                <el-table-column property="alarmLevel" label="告警等级" />
                <el-table-column property="creatTime" label="创建时间" />
                <el-table-column label="操作">
                  <router-link to="/showAlarm">
                    <el-button @click="showshowProject(scope.row)"
                      >详情</el-button
                    >
                  </router-link>
                  <el-button type="danger" @click="delate(scope.row)"
                    >删除</el-button
                  >
                </el-table-column>
              </el-table>
            </div>
            <!-- 分页 -->
            <div class="pagin-div">
              <div class="demo-pagination-block">
                <el-pagination
                  :page-size="pageSize"
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
<script lang="ts">
import { ref, onMounted, reactive } from "vue";
import * as ElIcons from "@element-plus/icons-vue";
import { getArticle, cancelArticle } from "../../api/configuration.js";
import { useRouter } from "vue-router";
const $router = useRouter();
const value = ref("");
export default {
  data() {
    return {
      dialogFormVisible: false,
      currentPage: 1,
      pageSize: 6,
      searchContent: "",
      inputContent: "",
      selMsg: [],
      cancelParm: {
        title: "",
      },
    };
  },
  setup() {
    // 访客列表数据
    const tableData1 = reactive([]);
    // 访客列表总数
    let count1 = 0;

    // 获取访客需要的参数
    let getVisitorParms = {
      limit: "2", // 获取第几页的数据
      page: "1", // 获取几条数据
    };

    onMounted(() => {
      // 调用获取访客的函数
      getArticleData();
    });
    // 获取访客的异步函数
    async function getArticleData() {
      // 发送请求 接受请求回来的数据 并且重命名为 res
      const { data: res } = await getArticle(getVisitorParms);
      // 返回的数据展开 push到数组中
      tableData1.push(...res.data);
      // 总数重新赋值
      count1 = res.count;
      console.log(tableData1);
      console.log(res.data);
    }
    return {
      tableData1,
    };
  },
  components: {},

  computed: {
    tables() {
      const search = this.searchContent;
      if (this.inputContent == "") {
        this.searchContent = "";
        this.currentPage = 1;
        return [this.tableData1, (this.count = this.tableData1.length)];
      }
      if (search !== "") {
        return [
          this.tableData1.filter((dataNews) => {
            return Object.keys(dataNews).some((key) => {
              return String(dataNews[key]).toLowerCase().indexOf(search) > -1;
            });
          }),
          (this.count = this.tableData1.filter((dataNews) => {
            return Object.keys(dataNews).some((key) => {
              return String(dataNews[key]).toLowerCase().indexOf(search) > -1;
            });
          }).length),
        ];
      }
      return [this.tableData1, (this.count = this.tableData1.length)];
    },
  },
  methods: {
    addOk() {
      this.dialogFormVisible = false;
    },
    addCancel() {
      this.dialogFormVisible = false;
    },
    handleSizeChange(val) {
      this.pageSize = val;
    },
    handleCurrentChange(val) {
      this.currentPage = val;
    },
    //搜索
    searchput() {
      this.searchContent = this.inputContent;
    },
    // 重置搜索框内容
    reStart() {
      this.inputContent = "";
    },
    //获取选中的行数据
    delate(row) {
      console.log(row.alarmRulesName);
      this.cancelParm.alarmRulesName = row.alarmRulesName;
      console.log(this.cancelParm);
      let pk = this.cancelParm;
      console.log(pk);
      mycancel();
      async function mycancel() {
        // 发送请求 接受请求回来的数据 并且重命名为 res
        const { data: res } = await cancelArticle(pk);
        console.log(res);
        console.log(111);
        location.reload();
      }
    },
  },
};
const multipleTableRef = ref<InstanceType<typeof ElTable>>();
const multipleSelection = ref<User[]>([]);
const toggleSelection = (rows?: User[]) => {
  if (rows) {
    rows.forEach((row) => {
      multipleTableRef.value!.toggleRowSelection(row, undefined);
    });
  } else {
    multipleTableRef.value!.clearSelection();
  }
};
const options = [
  {
    value: "Option1",
    label: "请选择",
  },
  {
    value: "Option2",
    label: "手机",
  },
  {
    value: "Option3",
    label: "邮箱",
  },
  {
    value: "Option4",
    label: "APP",
  },
];
const tableData = [
  {
    Xname: "火灾预警提醒",
    Xnum: "园区管理员",
    Xlei: "手机",
    Xaddre: "火感报警器持续报警5分钟以上",
    Xperson: "灾害告警",
    Xtai: "特级",
    date: "2022-01-23",
  },
  {
    Xname: "视频断联提醒",
    Xnum: "监控室管理员",
    Xlei: "手机",
    Xaddre: "视频线路断联5分钟以上",
    Xperson: "线路故障",
    Xtai: "二级",
    date: "2022-01-23",
  },
  {
    Xname: "电压过高提醒",
    Xnum: "园区管理员",
    Xlei: "手机",
    Xaddre: "变压器电压高于额定电压",
    Xperson: "线路故障",
    Xtai: "二级",
    date: "2022-01-23",
  },
  {
    Xname: "智能水电表预警",
    Xnum: "物业团队管理员",
    Xlei: "APP",
    Xaddre: "智能水电表无法进行物联数据上网",
    Xperson: "设备故障",
    Xtai: "一级",
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
