/**
 * @Description: router
 * @Author: chenchen
 * @Date: 2020-04-07 21:10:07
 * @LastEditors: chenchen
 * @LastEditTime: 2020-04-07 22:03:08
 */
import Vue from "vue"
import VueRouter from "vue-router"

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    name: "Home",
    // lazy-loaded when the route is visited
    component: () => import(/* webpackChunkName: "about" */ "../views/Home.vue")
  }
]

const router = new VueRouter({
  routes
})

export default router
