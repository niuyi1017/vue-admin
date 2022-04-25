import { createStore } from 'vuex'
import user from './user'
import CssVariables from '../assets/style/index.styl'

export default createStore({
  state: {
  },
  getters: {
    token: state => state.user.token,
    hasUserInfo: state => JSON.stringify(state.user.userInfo) !== '{}',
    userInfo: state => state.user.userInfo,
    cssVar: state => CssVariables
  },
  mutations: {

  },
  actions: {
  },
  modules: {
    user
  }
})
