import axios from 'axios'

const servece = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 5000
})

servece.interceptors.request.use(config => {
  config.headers.icode = 'A19E62F511F7BB81'
  return config
})
export default servece
