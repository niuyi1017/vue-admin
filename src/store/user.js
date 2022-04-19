import { login } from '../api/user'
import md5 from 'md5'
export default {
  namespace: true,
  state: () => ({}),
  mutations: {

  },
  actions: {
    login(context, userInfo) {
      const { username, passeword } = userInfo
      return new Promise((resolve, reject) => {
        login({
          username,
          passeword: md5(passeword)
        }).then(() => {
          resolve()
        }).catch(err => {
          reject(err)
        })
      })
    }
  }
}
