<template>
  <div class="pkwrap">
    <h3 v-if="showme">No results for this query.</h3>
      <ul class="list-group">
        <Park :item="item" v-for="(item, index) in items" :key="index" />
      </ul>
  </div>
</template>

<script>

import Park from './Park'
import { parkCodeBus } from './../../main.js'
export default {
  name: 'parklist',
  data () {
    return {
      payloadData:this.payload,
      showme:false
    }
  },
  computed:{
    showme(){
      return this.showme
    }
  },
  beforeDestroy(){
    parkCodeBus.$off('addPark');
  },
  beforeUpdate(){
    if(this.payloadData.results.length < 1){
      this.showme = true;
    }
   
  },
  mounted(){
    parkCodeBus.$on('addPark', code => {
      this.$store.commit('addSelectedPark', code)
    });
  },
  props: ['payload'],
  computed: {

    items(){
      //BUG FIX: the "data" JSON object conflicts with Vues built in data function, so rename it.
      this.payloadData = JSON.parse(JSON.stringify(this.payload).split('"data":').join('"results":'));  
      return this.payloadData.results
    }
  },
  components:{
    Park
  }

}
</script>

<style lang="scss">
  ul.list-group{
    padding-left:0;
  }
  
</style>
