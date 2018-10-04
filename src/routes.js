import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Test from './views/Test.vue'

Vue.use(Router)

export const routes = [
  { path: '*/index.html', component: Home},
  { path: '*', component: Home, meta: { scrollToTop: true }},
  { path: '/', component: Home},
  { path: '/test', component: Test},
];
