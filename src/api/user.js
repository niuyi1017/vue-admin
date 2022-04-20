import request from '../utils/request'

const login = data => {
  return request({
    url: '/sys/login',
    data,
    method: 'POST'
  })
}
export {
  login
}
