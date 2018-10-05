<template>
  <div class="home">
    <h4>Park List <span v-show="state !== null">/</span> {{ state }} <span v-show="queryterm !== ''">/</span> {{ queryterm }}</h4>
    <Parklist :payload="payload"/>
    <h5 v-show="isPayload">No results for this query.</h5>
  </div>
</template>

<script>
// @ is an alias to /src
import {initSearch} from './../main.js'
import Parklist from './../components/Parklist/Parklist'
export default {
  name: 'home',
  data () {
    return {
    
      state: null,
      query: null,
      limit: 4,
      key: 'JOFZniE52Vrp3RXceByrGRcvqCoiS1UBAcb6Dj5w'
    }
  },
  computed:{
    payload(){
      return this.$store.state.parkPayload;
    },
    queryterm(){
      return this.$store.state.queryTerm;
    },
    querystate(){
      return this.$store.state.selectedState;
    },
    isPayload(){
      let ispayload = this.$store.state.parkPayload
      let pld = JSON.parse(JSON.stringify(ispayload).split('"data":').join('"results":'));  
      if(pld.length > 0){
        return false
      }
      else{
        return true
      }
    }
  },
  mounted(){
    initSearch.$on('init', data => {
      var statecode = data.statecode;
      var queryterm = data.queryterm;
      var querytotal = data.querytotal;
      this.submit(statecode, queryterm, querytotal)
    });

    let search = 'https://developer.nps.gov/api/v1/parks?limit=5&q=ocean' + '&api_key=' + this.key
    this.$store.commit('setQueryTerm', 'Ocean')
     this.axios
      .get(search)
      .then(response => (this.$store.commit('setCurrentPayload', response.data)))
    
  },
  methods:{
    submit(statecode, queryterm, querytotal){
    this.state = statecode;
    this.query = queryterm; 
    this.limit = querytotal - 1; 
    let searchstring = null;

    if(querytotal==0){
      if(this.state){
        searchstring = 'https://developer.nps.gov/api/v1/parks?stateCode=' + this.state + '&api_key=' + this.key
      }
      if(this.query){
        searchstring = 'https://developer.nps.gov/api/v1/parks?q=' + this.query +'&api_key=' + this.key
      }
      if(this.state && this.query){
        searchstring = 'https://developer.nps.gov/api/v1/parks?stateCode=' + this.state + '&q=' + this.query +'&api_key=' + this.key
      }

    }
    if(querytotal > 0){
      if(this.state){
        searchstring = 'https://developer.nps.gov/api/v1/parks?limit=' + this.limit +'&stateCode=' + this.state + '&api_key=' + this.key
      }
      if(this.query){
        searchstring = 'https://developer.nps.gov/api/v1/parks?limit=' + this.limit + '&q=' + this.query +'&api_key=' + this.key
      }
      if(this.state && this.query){
        searchstring = 'https://developer.nps.gov/api/v1/parks?limit=' + this.limit +'&stateCode=' + this.state + '&q=' + this.query +'&api_key=' + this.key
      }
    }

    this.axios
      .get(searchstring)
      .then(response => (this.$store.commit('setCurrentPayload', response.data)))
    }
  },
  components:{
    Parklist
  }

}
</script>
<style lang="scss">
  .home{
    padding:10px 30px;
    h4{
      font-family: 'Open Sans', sans-serif;
      font-size:18px;
    }
  }

</style>
