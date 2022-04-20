import axios from 'axios'
import { ElMessage } from 'element-plus'

const servece = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 5000
})
// 请求拦截器
servece.interceptors.request.use(config => {
  config.headers.icode = 'A19E62F511F7BB81'
  return config
})
// 响应拦截器
servece.interceptors.response.use(res => {
  const { success, data, message } = res.data
  if (success) {
    return data
  } else {
    ElMessage.error(message)
    return Promise.reject(new Error(message))
  }
}, err => {
  ElMessage.error(err.message)
  return Promise.reject(new Error(err))
})
export default servece
