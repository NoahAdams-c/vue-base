/**
 * @Description:
 * @Author: chenchen
 * @Date: 2020-04-07 21:10:07
 * @LastEditors: chenchen
 * @LastEditTime: 2020-04-07 22:16:24
 */
import Vue from "vue"
import App from "./App.vue"

// 引入lib-flexible
import "lib-flexible"

Vue.config.productionTip = false
// vuex
import store from "./store"
// vue-router
import router from "./router"

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app")
