import md5 from 'md5'
import { login, getUserInfo } from '../api/user'
import { getItem, setItem, removeAllItem } from '../utils/storage'
import { setTimeStamp } from '../utils/utils'
import { TOKEN } from '../utils/constant'
import router from '../router/index'
export default {
  namespaced: true,
  state: () => ({
    token: getItem(TOKEN) || '',
    userInfo: {}

  }),
  mutations: {
    setToken(state, token) {
      state.token = token
      setItem(TOKEN, token)
    },
    setUserInfo(state, userInfo) {
      state.userInfo = userInfo
    }
  },
  actions: {
    Login({ commit }, userInfo) {
      const { username, password } = userInfo
      return new Promise((resolve, reject) => {
        login({
          username,
          password: md5(password)
        }).then((res) => {
          commit('setToken', res.token)
          // 记录获得token时的时间戳
          setTimeStamp()
          resolve()
        }).catch(err => {
          reject(err)
        })
      })
    },
    async getUserInfo({ commit }) {
      const res = await getUserInfo()
      commit('setUserInfo', res)
      return res
    },
    logout({ commit }, userInfo) {
      commit('setToken', '')
      commit('setUserInfo', {})
      removeAllItem()
      router.push('/login')
    }
  }
}
