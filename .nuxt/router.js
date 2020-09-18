import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _6cf0c59a = () => interopDefault(import('..\\pages\\counting.vue' /* webpackChunkName: "pages/counting" */))
const _6b706679 = () => interopDefault(import('..\\pages\\registration.vue' /* webpackChunkName: "pages/registration" */))
const _df3bbf80 = () => interopDefault(import('..\\pages\\setting.vue' /* webpackChunkName: "pages/setting" */))
const _070f782a = () => interopDefault(import('..\\pages\\vote.vue' /* webpackChunkName: "pages/vote" */))
const _bdd9c07c = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

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
    component: _6cf0c59a,
    name: "counting"
  }, {
    path: "/registration",
    component: _6b706679,
    name: "registration"
  }, {
    path: "/setting",
    component: _df3bbf80,
    name: "setting"
  }, {
    path: "/vote",
    component: _070f782a,
    name: "vote"
  }, {
    path: "/",
    component: _bdd9c07c,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
