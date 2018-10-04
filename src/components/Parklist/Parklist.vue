<template>
  <div class="pkwrap">
      <ul class="list-group">
        <Park :item="item" v-for="(item, index) in items" :key="index" />
      </ul>
  </div>
</template>

<script>
// @ is an alias to /src
import Park from './Park'
import { parkCodeBus } from './../../main.js'
export default {
  name: 'parklist',
  data () {
    return {
      payloadData:this.payload,
      addPark:[],
    }
  },
  mounted(){
    console.log(payloadData)
    parkCodeBus.$on('addPark', code => {
      this.addPark.push(code[0]);
      this.$store.commit('addSelectedPark', code[0])
    });
  },
  props: ['payload'],
  computed: {
    items(){
      //BUG FIX: the "data" JSON object conflicts with Vues built in data function, so rename it.
      this.payloadData = JSON.parse(JSON.stringify(this.payload).split('"data":').join('"results":'));    
      console.log(this.payloadData);
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
    overflow-x: scroll;
    height:85vh;
  }
 
</style>
