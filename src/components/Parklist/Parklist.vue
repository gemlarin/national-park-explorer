<template>
    <div>
  
        <ul>
          <Park :item="item" v-for="(item, index) in items" :key="index" />
        </ul>

    </div>
</template>

<script>
// @ is an alias to /src
import Park from '@/components/Parklist/Park.vue'
export default {
  name: 'parklist',
  data () {
    return {
      payloadData:this.payload
    }
  },
  props: ['payload'],
  computed: {
    items(){
      //the "data" JSON object conflicts with Vues built in data function, so rename it.
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
  ul{
    padding-left:0;
  }
 
</style>
