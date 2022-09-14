<template>
  <el-container>
    <el-container>
      <el-main>
        <div class="body-box">
          <!-- 上方盒子 -->
          <div class="header-box">
            <div class="flexD-cow">
              <div class="small-box"></div>
              <div class="header-left-text">项目信息管理</div>
            </div>
            <div class="flexD-cow">
              <router-link to="/addProject">
                <button class="btn-style btn-add">新增</button>
              </router-link>
              <button class="btn-style btn-del">批量删除</button>
            </div>
          </div>
          <!-- 下方盒子 -->
          <div class="down-box">
            <!-- 输入盒子 -->
            <div class="input-box">
              <div class="flexD-cow">
                <div class="input-text">项目名称：</div>
                <el-input v-model="inputContent" placeholder="请输入项目名称" />
              </div>
              <div class="flexD-cow">
                <div class="input-text">项目编号：</div>
                <el-input
                  v-model="inputContent1"
                  placeholder="请输入项目编号"
                />
              </div>
              <div class="flexD-cow">
                <div>项目状态：</div>
                <el-select
                  v-model="select"
                  class="m-2"
                  placeholder="请选择"
                  size="large"
                >
                  <el-option label="图文" value="1" />
                  <el-option label="视频" value="2" />
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
                <el-table-column property="projectName" label="项目名称" />
                <el-table-column property="projectNumber" label="项目编号" />
                <el-table-column property="projectType" label="项目类型" />
                <el-table-column property="projectAddres" label="项目地址" />
                <el-table-column property="userType" label="用户类型" />
                <el-table-column property="projectStatus" label="项目状态" />
                <el-table-column property="startTime" label="预计上线时间" />
                <el-table-column label="操作">
                  <template #default="scope">
                    <router-link to="/showProject">
                      <el-button @click="showshowProject(scope.row)"
                        >详情</el-button
                      >
                    </router-link>
                    <el-button type="danger" @click="delate(scope.row)"
                      >删除</el-button
                    >
                  </template>
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
import { useRouter } from "vue-router";
import { getProject, cancelProject } from "../../api/configuration.js";
const $router = useRouter();
export default {
  data() {
    return {
      dialogFormVisible: false,
      currentPage: 1,
      pageSize: 6,
      searchContent: "",
      inputContent: "",
      inputContent1: "",
      select: "",
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
      limit: "4", // 获取第几页的数据
      page: "1", // 获取几条数据
    };

    onMounted(() => {
      // 调用获取访客的函数
      getArticleData();
    });
    // 获取访客的异步函数
    async function getArticleData() {
      // 发送请求 接受请求回来的数据 并且重命名为 res
      const { data: res } = await getProject(getVisitorParms);
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
      this.cancelProject.projectNumber = row.projectNumber;
      let pk = this.cancelProject.projectNumber;
      console.log(pk);
      mycancel();
      async function mycancel() {
        // 发送请求 接受请求回来的数据 并且重命名为 res
        const { data: res } = await cancelProject(pk);
        console.log(res);
        location.reload();
      }
    },
    showshowProject(row) {
      console.log(row);
      console.log(row.projectAddres);
      console.log(1111111);
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
