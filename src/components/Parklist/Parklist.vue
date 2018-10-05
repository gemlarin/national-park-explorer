<template>
  <div class="pkwrap">
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
      payloadData:this.payload
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
  .pkwrap{
    //overflow-x: scroll;
    //height:85vh;
  }
 
</style>
