import request from '../utils/request'

const login = data => {
  return request({
    url: '/sys/login',
    data,
    method: 'POST'
  })
}
const getUserInfo = data => {
  return request({
    url: '/sys/profile',
    method: 'GET'
  })
}
export {
  login,
  getUserInfo
}
