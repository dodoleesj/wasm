import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _71ce1456 = () => interopDefault(import('..\\pages\\counting.vue' /* webpackChunkName: "pages/counting" */))
const _0f90941c = () => interopDefault(import('..\\pages\\registration.vue' /* webpackChunkName: "pages/registration" */))
const _11aeb8bd = () => interopDefault(import('..\\pages\\setting.vue' /* webpackChunkName: "pages/setting" */))
const _691cf8cd = () => interopDefault(import('..\\pages\\vote.vue' /* webpackChunkName: "pages/vote" */))
const _fe949902 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/counting",
    component: _71ce1456,
    name: "counting"
  }, {
    path: "/registration",
    component: _0f90941c,
    name: "registration"
  }, {
    path: "/setting",
    component: _11aeb8bd,
    name: "setting"
  }, {
    path: "/vote",
    component: _691cf8cd,
    name: "vote"
  }, {
    path: "/",
    component: _fe949902,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
