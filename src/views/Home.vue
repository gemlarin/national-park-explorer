<template>
  <div class="home">
    <h4>PARK LIST</h4>
    <Parklist :payload="payload"/>
    <button class="btn btn-primary" v-on:click="submit(null, 'fort')">load</button>
  </div>
</template>

<script>
// @ is an alias to /src
import Parklist from './../components/Parklist/Parklist'
export default {
  name: 'home',
  data () {
    return {
    
      state: null,
      query: null,
      limit: 4
    }
  },
  computed:{
    payload(){
      return this.$store.state.parkPayload;
    }
  },
  methods:{
    submit(statecode, queryterm){
    this.state = statecode;
    this.query = queryterm; 
    this.key = 'JOFZniE52Vrp3RXceByrGRcvqCoiS1UBAcb6Dj5w'
    let searchstring = null;

      if(this.state){
        searchstring = 'https://developer.nps.gov/api/v1/parks?limit=' + this.limit +'&stateCode=' + this.state + '&api_key=' + this.key
      }
      if(this.query){
        searchstring = 'https://developer.nps.gov/api/v1/parks?limit=' + this.limit + '&q=' + this.query +'&api_key=' + this.key
      }
      if(this.state && this.query){
        
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
