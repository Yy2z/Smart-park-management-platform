
import { ElMessage } from 'element-plus'

import axios from "axios";
const service = axios.create({
  baseURL: 'http://132.232.110.185/wisdomPark-1.0-SNAPSHOT/',
  timeout: 5000
})

    // 响应请求拦截器
//     service.interceptors.response.use(
//       (response) => {
//           console.log(response)
//           const { data, meta } = response.data
//           if (response.status === 200 || response.status === 201) {
//               return response.data
//           } else {
//               ElMessage.error(data.msg)
//                   // 返回出一个错误信息
//               return Promise.reject(new Error(response.data.msg))
//           }
//       },
//       // 当没有请求响应的时候
//       (error) => {
//           error.response && ElMessage.error(error.response.data)
//           return Promise.reject(new Error(error.response.data))
//       }
//   )
  
  // 导出供外界使用
  export default service

