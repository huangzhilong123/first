
// #ifndef VUE3
import Vue from 'vue'
import App from './App'
import uView from 'uview-ui'
import {myHttp} from "util/api.js"
Vue.prototype.$request = myHttp

Vue.use(uView)

Vue.config.productionTip = false
uni.$u.config.unit = 'rpx'
App.mpType = 'app'
console.log('huangzhilong',myHttp)
const app = new Vue({
    ...App
})
app.$mount()
// #endif

// #ifdef VUE3
import { createSSRApp } from 'vue'
import App from './App.vue'
export function createApp() {
  const app = createSSRApp(App)
  return {
    app
  }
}
// #endif