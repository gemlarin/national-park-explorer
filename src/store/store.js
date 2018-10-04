Vue.use(Vuex);
export default new Vuex.Store({
  state: {
    sidebarOpen: false,
    selectedParks: [],
    parkPayload:{}
  },
  mutations: {
    toggleSidebar (state) {
      state.sidebarOpen = !state.sidebarOpen
    },
    addSelectedPark(state, val) {
      state.selectedParks.push(val);
    },
    setCurrentPayload(state, val) {
      state.parkPayload = val;
    }
  },
  actions: {
    toggleSidebar (context) {
      context.commit('toggleSidebar')
    },
  },
  getters: {
    sidebarOpen: state => state.sidebarOpen,
    selectedParks: state => state.selectedParks,
    getParkPayload: state => state.parkPayload
  }
})

import Vue from 'vue';
import Vuex from 'vuex'

Vue.use(Vuex);

export const store = new Vuex.Store({
    state:{
      sidebarOpen: false,
      selectedParks: [],
      parkPayload:{}
    },
    mutations:{
      toggleSidebar (state) {
        state.sidebarOpen = !state.sidebarOpen
      },
      addSelectedPark(state, val) {
        state.selectedParks.push(val);
      },
      setCurrentPayload(state, val) {
        state.parkPayload = val;
      }
    },
    getters:{
      sidebarOpen: state => state.sidebarOpen,
      selectedParks: state => state.selectedParks,
      getParkPayload: state => state.parkPayload
    },
    actions: {
      toggleSidebar (context) {
        context.commit('toggleSidebar')
      },
    }
})