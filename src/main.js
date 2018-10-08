import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import { routes } from './routes'
import { store } from './store/store'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import Meta from 'vue-meta'
import VueAgile from 'vue-agile'
import 'expose-loader?$!expose-loader?jQuery!jquery'
import 'expose-loader?vegas!./vendor/vegas/vegas.js'
import 'expose-loader?cycle!jquery.cycle2'
import VueGtm from 'vue-gtm';
import axios from 'axios'
import VueAxios from 'vue-axios'
//include jquery globally for ajax function.
var VueScrollTo = require('vue-scrollto');


// You can also pass in the default options
Vue.use(VueScrollTo, {
     container: "body",
     duration: 500,
     easing: "ease",
     offset: -100,
     cancelable: true,
     onStart: false,
     onDone: false,
     onCancel: false,
     x: false,
     y: true
 })

export const parkCodeBus = new Vue();
export const initSearch = new Vue();
export const isResultsBus = new Vue();
export const clearSearchBus = new Vue();
export const removeFavoritesBus = new Vue();
export const clearAllFavoritesBus = new Vue();

require('dotenv').config()

const router = new VueRouter({
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
        VueScrollTo.scrollTo(to.hash, 1000);
        return { selector: to.hash }
    } else if (savedPosition) {
        return savedPosition;
    } else {
        return { x: 0, y: 0 }
    } 
},
  base:'/',
  mode: 'history'
});
Vue.config.errorHandler = function(err, vm, info) { console.log('error: :', err) }
Vue.use(VueAxios, axios)
Vue.use(BootstrapVue);
Vue.use(Meta);
Vue.use(VueRouter);
Vue.use(VueAgile);
Vue.use(VueGtm, {
    enabled: true, // defaults to true. Plugin can be disabled by setting this to false for Ex: enabled: !!GDPR_Cookie (optional)
    debug: true, // Whether or not display console logs debugs (optional)
    vueRouter: router // Pass the router instance to automatically sync with router (optional)
});

const vm = new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})

