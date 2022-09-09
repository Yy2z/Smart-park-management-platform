import axios from "axios";
const service = axios.create({
//   baseURL: process.env.VUE_APP_BASE_API,
//   timeout: 5000
})

// 响应请求拦截器
service.interceptors.response.use(
    (response) => {
      const { data, meta } = response.data
      if (meta.status === 200 || meta.status === 201) {
        return data
      } else {
        ElMessage.error(meta.msg)
        // 返回出一个错误信息
        return Promise.reject(new Error(meta.msg))
      }
    },
    // 当没有请求响应的时候
    (error) => {
      console.log(error.response)
      error.response && ElMessage.error(error.response.data)
      return Promise.reject(new Error(error.response.data))
    }
  )
  
  // 导出供外界使用
  export default service