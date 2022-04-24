import axios from 'axios'
import { ElMessage } from 'element-plus'
import store from '../store'
import { isTokenTimeout } from './utils'

const servece = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 5000
})

// 请求拦截器
servece.interceptors.request.use(config => {
  config.headers.icode = 'A19E62F511F7BB81'
  if (store.getters.token) {
    console.log(isTokenTimeout())
    if (isTokenTimeout()) {
      store.dispatch('user/logout')
      return Promise.reject(new Error('token 失效,请重新登录'))
    }
    config.headers.Authorization = `Bear ${store.getters.token}`
  }
  return config
}, err => Promise.reject(err))

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
  if (err.response && err.response.data && err.response.data.code === 401) {
    store.dispatch('user/logout')
  }
  ElMessage.error(err.message)
  return Promise.reject(new Error(err))
})
export default servece
