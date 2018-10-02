<template>
  <div class="home">
    <h2>PARK LIST</h2>
    <Parklist :payload="payload"/>
    <button class="btn btn-primary" v-on:click="submit()">load</button>
  </div>
</template>

<script>
// @ is an alias to /src
import Parklist from '@/components/Parklist/Parklist.vue'
export default {
  name: 'home',
  data () {
    return {
      payload: []
    }
  },
  methods:{
    submit(){
    this.axios
      .get('https://developer.nps.gov/api/v1/parks?limit=2&stateCode=NY&api_key=JOFZniE52Vrp3RXceByrGRcvqCoiS1UBAcb6Dj5w')
      .then(response => (this.payload = response.data))
    }
  },
  components:{
    Parklist
  }

}
</script>
<style>
  .home{
    padding:10px 30px;
  }
</style>
