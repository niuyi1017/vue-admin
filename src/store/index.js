import { createStore } from 'vuex'
import user from './user'

export default createStore({
  state: {
  },
  getters: {
    token: state => state.user.token,
    hasUserInfo: state => JSON.stringify(state.user.userInfo) !== '{}',
    userInfo: state => state.user.userInfo
  },
  mutations: {

  },
  actions: {
  },
  modules: {
    user
  }
})
