import { login } from '../api/user'
import md5 from 'md5'
export default {
  namespaced: true,
  state: () => ({}),
  mutations: {

  },
  actions: {
    Login(context, userInfo) {
      const { username, password } = userInfo
      return new Promise((resolve, reject) => {
        login({
          username,
          password: md5(password)
        }).then(() => {
          resolve()
        }).catch(err => {
          reject(err)
        })
      })
    }
  }
}
