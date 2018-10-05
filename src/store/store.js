import Vue from 'vue';
import Vuex from 'vuex'

Vue.use(Vuex);

export const store = new Vuex.Store({
    state:{
      sidebarOpen: false,
      selectedParks: [],
      parkPayload:{},
      selectedState:null,
      queryTerm:null,
      queryTotal:null,
      buttonLock:true
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
      },
      setSelectedState(state, val) {
        state.selectedState = val;
        state.buttonLock = false;
      },
      setQueryTerm(state, val) {
        state.queryTerm = val;
        if(state.queryTerm === null || state.queryTerm === 'Ocean'){
          state.buttonLock = true;
        }else if(state.queryTerm === '' && state.selectedState !== null){
          state.buttonLock = true;
        }else{
          state.buttonLock = false;
        }
      },
      setQueryTotal(state, val) {
        state.queryTotal = val;
      } 
    },
    getters:{
      sidebarOpen: state => state.sidebarOpen,
      selectedParks: state => state.selectedParks,
      getParkPayload: state => state.parkPayload,
      selectedState: state => state.selectedState
    },
    actions: {
      toggleSidebar (context) {
        context.commit('toggleSidebar')
      },
    }
})