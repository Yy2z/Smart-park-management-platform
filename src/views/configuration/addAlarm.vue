<template>
  <el-container style="height: 1000px">
    <el-header>
      <div class="title">
        <span class="headerimg"></span>
        <span class="headerTitle">新增告警规则</span>
      </div>
      <span>
        <el-button type="warning" @click="close">关闭</el-button>
      </span>
    </el-header>
    <div class="topbox">
      <!-- 上方表单 -->
      <div class="leftFormBox">
        <div class="leftbox"><div>告警规则信息</div></div>
        <div class="justifybetween">
          <div>
            <el-form-item
              label="告警规则名称："
              prop="projectName"
              size="large"
            >
              <el-input
                v-model="FormData.alarmLevel"
                placeholder="请输入告警规则名称"
              />
            </el-form-item>
            <div class="flex-cow">
              <div>
                <el-form-item
                  label="通知用户："
                  prop="projectNumber"
                  size="large"
                >
                  <el-input
                    oninput="value=value.replace(/[^\d.]/g,'')"
                    v-model="FormData.alarmRules"
                    placeholder="请输入通知用户"
                  />
                </el-form-item>
                <el-form-item label="推送方式：" prop="userType" size="large">
                  <el-select
                    v-model="value1"
                    class="m-2"
                    placeholder="请选择"
                    size="large"
                  >
                    <el-option
                      v-for="item in userTypeoptions"
                      v-model="FormData.title"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value"
                    />
                  </el-select>
                </el-form-item>
                <el-form-item label="开工时间：" size="large">
                  <div class="demo-date-picker">
                    <div class="block">
                      <el-date-picker
                        v-model="value1"
                        type="date"
                        placeholder="请选择日期时间"
                        :size="size"
                      />
                    </div>
                  </div>
                </el-form-item>
              </div>
              <div style="margin-left: 20px">
                <el-form-item
                  label="项目类型："
                  prop="projectType"
                  size="large"
                >
                  <el-select
                    v-model="value2"
                    class="m-2"
                    placeholder="请选择"
                    size="large"
                  >
                    <el-option
                      v-for="item in projectTypeoptions"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value"
                      v-model="FormData.title"
                    />
                  </el-select>
                </el-form-item>
                <el-form-item
                  label="项目状态："
                  prop="projectStatus"
                  size="large"
                >
                  <el-select
                    v-model="value3"
                    class="m-2"
                    placeholder="请选择"
                    size="large"
                  >
                    <el-option
                      v-for="item in projectStatusoptions"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value"
                      v-model="FormData.title"
                    />
                  </el-select>
                </el-form-item>
                <el-form-item
                  label="上线时间："
                  prop="projectStatus"
                  size="large"
                >
                  <div class="demo-date-picker">
                    <div class="block">
                      <el-date-picker
                        type="date"
                        placeholder="请选择日期时间"
                        :size="size"
                        v-model="FormData.title"
                      />
                    </div>
                  </div>
                </el-form-item>
              </div>
            </div>
          </div>
          <div>
            <el-form-item label="项目地址：" prop="projectName" size="large">
              <el-input v-model="FormData.name" />
            </el-form-item>
            <el-col :span="14">
              <img
                src="https://cdn3.axureshop.com/demo/1968221/images/%E6%A5%BC%E5%AE%87%E6%96%B0%E5%A2%9E/u3769.png"
                style="width: 92%"
              />
            </el-col>
          </div>
        </div>
      </div>
      <!-- 下方表单 -->
      <div class="leftFormBox">
        <div class="leftbox"><div>项目附件</div></div>
        <div class="justifybetween">
          <div>
            <div class="justifybetween">
              <div>开工报告：</div>
              <el-upload
                action="#"
                list-type="picture-card"
                :auto-upload="false"
              >
                <el-icon><Plus /></el-icon>

                <template #file="{ file }">
                  <div>
                    <img
                      class="el-upload-list__item-thumbnail"
                      :src="file.url"
                      alt=""
                    />
                    <span class="el-upload-list__item-actions">
                      <span
                        class="el-upload-list__item-preview"
                        @click="handlePictureCardPreview(file)"
                      >
                        <el-icon><zoom-in /></el-icon>
                      </span>
                      <span
                        v-if="!disabled"
                        class="el-upload-list__item-delete"
                        @click="handleDownload(file)"
                      >
                        <el-icon><Download /></el-icon>
                      </span>
                      <span
                        v-if="!disabled"
                        class="el-upload-list__item-delete"
                        @click="handleRemove(file)"
                      >
                        <el-icon><Delete /></el-icon>
                      </span>
                    </span>
                  </div>
                </template>
              </el-upload>

              <el-dialog v-model="dialogVisible">
                <img w-full :src="dialogImageUrl" alt="Preview Image" />
              </el-dialog>
            </div>
            <div class="justifybetween">
              <div>验收报告：</div>
              <el-upload
                action="#"
                list-type="picture-card"
                :auto-upload="false"
              >
                <el-icon><Plus /></el-icon>

                <template #file="{ file }">
                  <div>
                    <img
                      class="el-upload-list__item-thumbnail"
                      :src="file.url"
                      alt=""
                    />
                    <span class="el-upload-list__item-actions">
                      <span
                        class="el-upload-list__item-preview"
                        @click="handlePictureCardPreview(file)"
                      >
                        <el-icon><zoom-in /></el-icon>
                      </span>
                      <span
                        v-if="!disabled"
                        class="el-upload-list__item-delete"
                        @click="handleDownload(file)"
                      >
                        <el-icon><Download /></el-icon>
                      </span>
                      <span
                        v-if="!disabled"
                        class="el-upload-list__item-delete"
                        @click="handleRemove(file)"
                      >
                        <el-icon><Delete /></el-icon>
                      </span>
                    </span>
                  </div>
                </template>
              </el-upload>

              <el-dialog v-model="dialogVisible">
                <img w-full :src="dialogImageUrl" alt="Preview Image" />
              </el-dialog>
            </div>
          </div>
          <div>
            <div class="justifybetween">
              <div>安装图纸：</div>
              <el-upload
                action="#"
                list-type="picture-card"
                :auto-upload="false"
              >
                <el-icon><Plus /></el-icon>

                <template #file="{ file }">
                  <div>
                    <img
                      class="el-upload-list__item-thumbnail"
                      :src="file.url"
                      alt=""
                    />
                    <span class="el-upload-list__item-actions">
                      <span
                        class="el-upload-list__item-preview"
                        @click="handlePictureCardPreview(file)"
                      >
                        <el-icon><zoom-in /></el-icon>
                      </span>
                      <span
                        v-if="!disabled"
                        class="el-upload-list__item-delete"
                        @click="handleDownload(file)"
                      >
                        <el-icon><Download /></el-icon>
                      </span>
                      <span
                        v-if="!disabled"
                        class="el-upload-list__item-delete"
                        @click="handleRemove(file)"
                      >
                        <el-icon><Delete /></el-icon>
                      </span>
                    </span>
                  </div>
                </template>
              </el-upload>

              <el-dialog v-model="dialogVisible">
                <img w-full :src="dialogImageUrl" alt="Preview Image" />
              </el-dialog>
            </div>
            <div class="justifybetween">
              <div>使用手册：</div>
              <el-upload
                action="#"
                list-type="picture-card"
                :auto-upload="false"
              >
                <el-icon><Plus /></el-icon>

                <template #file="{ file }">
                  <div>
                    <img
                      class="el-upload-list__item-thumbnail"
                      :src="file.url"
                      alt=""
                    />
                    <span class="el-upload-list__item-actions">
                      <span
                        class="el-upload-list__item-preview"
                        @click="handlePictureCardPreview(file)"
                      >
                        <el-icon><zoom-in /></el-icon>
                      </span>
                      <span
                        v-if="!disabled"
                        class="el-upload-list__item-delete"
                        @click="handleDownload(file)"
                      >
                        <el-icon><Download /></el-icon>
                      </span>
                      <span
                        v-if="!disabled"
                        class="el-upload-list__item-delete"
                        @click="handleRemove(file)"
                      >
                        <el-icon><Delete /></el-icon>
                      </span>
                    </span>
                  </div>
                </template>
              </el-upload>

              <el-dialog v-model="dialogVisible">
                <img w-full :src="dialogImageUrl" alt="Preview Image" />
              </el-dialog>
            </div>
          </div>
          <div>
            <div class="justifybetween">
              <div>设备报告：</div>
              <el-upload
                action="#"
                list-type="picture-card"
                :auto-upload="false"
              >
                <el-icon><Plus /></el-icon>

                <template #file="{ file }">
                  <div>
                    <img
                      class="el-upload-list__item-thumbnail"
                      :src="file.url"
                      alt=""
                    />
                    <span class="el-upload-list__item-actions">
                      <span
                        class="el-upload-list__item-preview"
                        @click="handlePictureCardPreview(file)"
                      >
                        <el-icon><zoom-in /></el-icon>
                      </span>
                      <span
                        v-if="!disabled"
                        class="el-upload-list__item-delete"
                        @click="handleDownload(file)"
                      >
                        <el-icon><Download /></el-icon>
                      </span>
                      <span
                        v-if="!disabled"
                        class="el-upload-list__item-delete"
                        @click="handleRemove(file)"
                      >
                        <el-icon><Delete /></el-icon>
                      </span>
                    </span>
                  </div>
                </template>
              </el-upload>

              <el-dialog v-model="dialogVisible">
                <img w-full :src="dialogImageUrl" alt="Preview Image" />
              </el-dialog>
            </div>
            <div class="justifybetween">
              <div>设备清单：</div>
              <el-upload
                action="#"
                list-type="picture-card"
                :auto-upload="false"
              >
                <el-icon><Plus /></el-icon>

                <template #file="{ file }">
                  <div>
                    <img
                      class="el-upload-list__item-thumbnail"
                      :src="file.url"
                      alt=""
                    />
                    <span class="el-upload-list__item-actions">
                      <span
                        class="el-upload-list__item-preview"
                        @click="handlePictureCardPreview(file)"
                      >
                        <el-icon><zoom-in /></el-icon>
                      </span>
                      <span
                        v-if="!disabled"
                        class="el-upload-list__item-delete"
                        @click="handleDownload(file)"
                      >
                        <el-icon><Download /></el-icon>
                      </span>
                      <span
                        v-if="!disabled"
                        class="el-upload-list__item-delete"
                        @click="handleRemove(file)"
                      >
                        <el-icon><Delete /></el-icon>
                      </span>
                    </span>
                  </div>
                </template>
              </el-upload>

              <el-dialog v-model="dialogVisible">
                <img w-full :src="dialogImageUrl" alt="Preview Image" />
              </el-dialog>
            </div>
          </div>
        </div>
      </div>
    </div>
    <el-footer style="padding: 0 0 10% 40%">
      <el-button type="primary" size="large">保存</el-button>
      <el-button style="margin-left: 5%" size="large" @click="close"
        >取消</el-button
      >
    </el-footer>
  </el-container>
</template>

<script setup>
import { reactive, ref } from "@vue/reactivity";
import { ElMessageBox } from "element-plus";
import { useRouter } from "vue-router";
import { getArticle, cancelArticle } from "../../api/configuration.js";
const $router = useRouter();

//左侧数据
const FormData = reactive({
  alarmLevel: "",
  alarmRules: "",
  alarmRulesId: "",
  alarmRulesName: "",
  alarmType: "",
  creatTime: "",
  notifyUsers: "",
  pushMode: "",
  title: "",
  type: "",
});
const save = () => {
  console.log(FormData);
  addData();
};
const cancel = () => {
  FormData.keyword = "";
  FormData.content = "";
  FormData.releaseChannel = "";
  FormData.releaseWay = "";
  FormData.synopsis = "";
  FormData.title = "";
  FormData.type = "";
};
// 添加数据的异步函数
async function addData() {
  // 发送请求 接受请求回来的数据 并且重命名为 res
  const { data: res } = await addArticle(FormData);
  console.log(res);
}

const userTypeoptions = [
  {
    value: "科技园区",
    label: "科技园区",
  },
  {
    value: "娱乐城",
    label: "娱乐城",
  },
  {
    value: "校园",
    label: "校园",
  },
];
const value1 = ref("");
const projectTypeoptions = [
  {
    value: "软件集成",
    label: "软件集成",
  },
  {
    value: "硬件集成",
    label: "硬件集成",
  },
  {
    value: "软硬一体",
    label: "软硬一体",
  },
];
const value2 = ref("");
const projectStatusoptions = [
  {
    value: "建设中",
    label: "建设中",
  },
  {
    value: "已竣工",
    label: "已竣工",
  },
  {
    value: "已冻结",
    label: "已冻结",
  },
];
const value3 = ref("");
//日期
const shortcuts = [
  {
    text: "Today",
    value: new Date(),
  },
  {
    text: "Yesterday",
    value: () => {
      const date = new Date();
      date.setTime(date.getTime() - 3600 * 1000 * 24);
      return date;
    },
  },
  {
    text: "A week ago",
    value: () => {
      const date = new Date();
      date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
      return date;
    },
  },
];

//
const leftFormData = reactive({
  projectName: "",
  projectNumber: "",
  projectType: "",
  userType: "",
  projecStatus: "",
  projectAddres: "",
  onlineTime: "",
});
// 点击关闭按钮的处理事件
const close = () => {
  ElMessageBox.confirm("您确认关闭此页面吗？", {
    confirmButtonText: "确定",
    cancelButtonText: "取消",
    type: "warning",
  })
    .then(() => {
      // 点击确定
      $router.push("/configurationall");
    })
    .catch(() => {
      // 点击取消
      console.log("点击了取消");
    });
};
</script>

<style lang="scss" scoped>
.el-container {
  background-color: #fff;
  .el-header {
    border-bottom: 2px solid black;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 55px 0 35px;
    margin: 0 auto;
    width: 98%;

    .title {
      height: 100%;
      display: flex;
      align-items: center;

      .headerTitle {
        font-size: 20px;
        font-weight: 700;
        margin-left: 30px;
      }

      .headerimg {
        display: inline-block;
        width: 10px;
        height: 28px;
        background-color: rgba(72, 110, 231, 0.87843137254902);
      }
    }
  }
}
.el-main {
  margin: 0;
  padding: 0;
}
//
.demo-date-picker {
  display: flex;
  width: 100%;
  padding: 0;
  flex-wrap: wrap;
}
.demo-date-picker .block {
  padding: 30px 0;
  text-align: center;
  border-right: solid 1px var(--el-border-color);
  flex: 1;
}
.demo-date-picker .block:last-child {
  border-right: none;
}
// 左侧表单盒子
.leftFormBox {
  border: 1px solid #000;
  width: 100%;
  border-radius: 10px;
  font-size: 20px;
  display: flex;
  margin-top: 20px;
}
// 左侧小蓝条
.leftbox {
  background-color: #047eb4;
  color: white;
  font-weight: bold;
  font-size: 30px;
  width: 60px;
  display: flex;
  align-items: center;
  text-align: center;
  border-radius: 10px;
}
.topbox {
  padding: 20px;
}
.flex-cow {
  display: flex;
  flex-direction: cow;
  align-items: center;
}
.justifybetween {
  display: flex;
  flex-direction: cow;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 20px;
}
</style>
