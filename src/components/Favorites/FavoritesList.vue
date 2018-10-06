<template>
  <div class="pkwrap">
      <ul class="list-group">
        <Favorite :item="item" :index="index" v-for="(item, index) in items" :key="index" />
      </ul>
  </div>
</template>

<script>

import Favorite from './Favorite'
import { removeFavoritesBus } from './../../main.js'
export default {
  name: 'favorite-list',
  data () {
    return {
        favorites:[],
        payloadData:[]
    }
  },
  beforeMount(){
    removeFavoritesBus.$on('favorite', index => {
             this.payloadData.splice(index,1)
    });
    
    let data = this.$store.state.selectedParks
    data.forEach((element) =>{
      let searchstring = "https://developer.nps.gov/api/v1/parks?parkCode=" + element + "&api_key=JOFZniE52Vrp3RXceByrGRcvqCoiS1UBAcb6Dj5w";

      this.axios
      .get(searchstring)
      .then(response => {
          var retd = JSON.parse(JSON.stringify(response.data).split('"data":').join('"results":'));    
          this.payloadData.push(retd.results[0])
      });
    });
  },
  computed: {
    items(){
      return this.payloadData
    }
  },
  components:{
    Favorite
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
