import Vue from 'vue';
import Vuex from 'vuex'
import VuexPersistence from 'vuex-persist'

const vuexLocal = new VuexPersistence({
  storage: window.localStorage
})
Vue.use(Vuex);



export const store = new Vuex.Store({
    state:{
      sidebarOpen: false,
      selectedParks: [],
      parkPayload:{},
      selectedState:null,
      queryTerm:null,
      queryTotal:4,
      buttonLock:true,
      initialLoad:true,
      favoriteParkReturn:[]
    },
    mutations:{
      addSelectedPark:(state, val) =>{
          let isInArray = state.selectedParks.indexOf(val);
          if(isInArray == -1){
            state.selectedParks.push(val);
          }else if(isInArray > -1){
            state.selectedParks.splice(isInArray, 1);
          }
      },
 
      clearSearch: (state, val) =>{
        state.parkPayload = {},
        state.selectedState = null,
        state.queryTerm = null,
        state.queryTotal = null
      },
      setCurrentPayload:(state, val) => {
        state.parkPayload = val;
      },
      setFavsData:(state, val) =>{
        state.favoriteParkReturn.push(val)
      },
      setSelectedState: (state, val) => {
        state.selectedState = val;
        state.buttonLock = false;
      },
      setQueryTerm: (state, val) => {
        state.queryTerm = val;
        if(state.queryTerm === null || state.queryTerm === 'Ocean'){
          state.buttonLock = true;
        }else if(state.queryTerm === '' && state.selectedState !== null){
          state.buttonLock = true;
        }else{
          state.buttonLock = false;
        }
      },
      setQueryTotal: (state, val) => {
        state.queryTotal = val;
      },
      toggleSidebar:(state) => {
        state.sidebarOpen = !state.sidebarOpen
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
    },
    //plugins: [vuexLocal.plugin]
})