<template>
  <div class="home">
    <h4>Park List <span v-show="$store.state.selectedState !== null">/</span> {{ $store.state.selectedState }} <span v-show="queryterm !== ''">/</span> {{ queryterm }}</h4>
    <p>Total results: {{ payload.data.length }}</p>
    <h3 v-if="payload.data.length < 1">No results for this query.</h3>
    <Parklist :payload="payload"/>
  </div>
</template>

<script>
// @ is an alias to /src
import { initSearch } from "./../main.js";
import { parkCodeBus } from "./../main.js";
import { clearSearchBus } from "./../main.js";
import Parklist from "./../components/Parklist/Parklist";
export default {
  name: "home",
  data() {
    return {
      results: false,
      selectedstate: this.$store.state.selectedState,
      state: null,
      query: null,
      limit: 4,
      key: process.env.NPS_KEY
    };
  },
  computed: {
    hasResults() {
      if (this.results == true) {
        return false;
      } else {
        return true;
      }
    },
    payload() {
      return this.$store.state.parkPayload;
    },
    queryterm() {
      return this.$store.state.queryTerm;
    },
    querystate() {
      return this.$store.state.selectedState;
    },
  },
  watch: {
    
  },
  beforeDestroy(){
    initSearch.$off("init");
    
  },
  mounted(){
      clearSearchBus.$on('clearsearch', () => {
          this.$store.commit('setSelectedState', null)
      });
  },
  created() {
        initSearch.$on("init", data => {
          let statecode = data.statecode;
          let queryterm = data.queryterm;
          let querytotal = data.querytotal;
          this.submit(statecode, queryterm, querytotal);
        });

    if(this.$store.state.initialLoad == true){
      this.$store.state.initialLoad = false;
          this.load();
    }
   
  },

  methods: {
    load(){

    let search =
      "https://developer.nps.gov/api/v1/parks?limit=" + this.limit + "&q=ocean" +
      "&api_key=" +
      this.key;
      this.$store.commit("setQueryTerm", "Ocean");
      this.axios
      .get(search)
      .then(response => this.$store.commit("setCurrentPayload", response.data))
    },
    submit(statecode, queryterm, querytotal) {
      this.state = statecode;
      this.query = queryterm;
      this.limit = querytotal;
      let searchstring = null;

      if (querytotal == 0) {
        if (this.state) {
          searchstring =
            "https://developer.nps.gov/api/v1/parks?stateCode=" +
            this.state +
            "&api_key=" +
            this.key;
        }
        if (this.query) {
          searchstring =
            "https://developer.nps.gov/api/v1/parks?q=" +
            this.query +
            "&api_key=" +
            this.key;
        }
        if (this.state && this.query) {
          searchstring =
            "https://developer.nps.gov/api/v1/parks?stateCode=" +
            this.state +
            "&q=" +
            this.query +
            "&api_key=" +
            this.key;
        }
      }
      if (querytotal > 0) {
        if (this.state) {
          searchstring =
            "https://developer.nps.gov/api/v1/parks?limit=" +
            this.limit +
            "&stateCode=" +
            this.state +
            "&api_key=" +
            this.key;
        }
        if (this.query) {
          searchstring =
            "https://developer.nps.gov/api/v1/parks?limit=" +
            this.limit +
            "&q=" +
            this.query +
            "&api_key=" +
            this.key;
        }
        if (this.state && this.query) {
          searchstring =
            "https://developer.nps.gov/api/v1/parks?limit=" +
            this.limit +
            "&stateCode=" +
            this.state +
            "&q=" +
            this.query +
            "&api_key=" +
            this.key;
        }
      }

      this.axios
        .get(searchstring)
        .then(response =>
          this.$store.commit("setCurrentPayload", response.data)
        )  .catch(function (error) {
            alert('Please choose a state or search term.');
          })
    }
  },
  components: {
    Parklist
  }
};
</script>
<style lang="scss">
.home {
  padding: 10px 30px;
  h4 {
    font-family: "Open Sans", sans-serif;
    font-size: 18px;
  }
}
</style>
