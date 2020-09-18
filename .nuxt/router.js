import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _3441b693 = () => interopDefault(import('..\\pages\\counting.vue' /* webpackChunkName: "pages/counting" */))
const _4ebecfd9 = () => interopDefault(import('..\\pages\\registration.vue' /* webpackChunkName: "pages/registration" */))
const _f9614a40 = () => interopDefault(import('..\\pages\\setting.vue' /* webpackChunkName: "pages/setting" */))
const _628d418a = () => interopDefault(import('..\\pages\\vote.vue' /* webpackChunkName: "pages/vote" */))
const _9562fb3c = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

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
    component: _3441b693,
    name: "counting"
  }, {
    path: "/registration",
    component: _4ebecfd9,
    name: "registration"
  }, {
    path: "/setting",
    component: _f9614a40,
    name: "setting"
  }, {
    path: "/vote",
    component: _628d418a,
    name: "vote"
  }, {
    path: "/",
    component: _9562fb3c,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
