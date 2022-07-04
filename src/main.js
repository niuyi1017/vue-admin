import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import installElementPlus from './plugins/element'
import installSvgIcon from './assets/icons/index.js'

import i18n from './i18n/index'

import './assets/style/reset.css'
import './assets/style/index.styl'
import './utils/router-guards'

const app = createApp(App)
installElementPlus(app)
installSvgIcon(app)
app.use(store).use(router).use(i18n).mount('#app')
