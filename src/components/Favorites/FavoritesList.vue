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
import { clearAllFavoritesBus } from './../../main.js'
import { NPS_KEY } from './../appdata/keys.js'
export default {
  name: 'favorite-list',
  data () {
    return {
        favorites:[],
        payloadData:[],
        key: NPS_KEY
    }
  },
  beforeDestroy(){
    removeFavoritesBus.$off('favorite')
  },
  beforeMount(){
    removeFavoritesBus.$on('favorite', index => {
      this.payloadData=[]
      this.$store.commit('addSelectedPark', index)
      this.load();
    });
    clearAllFavoritesBus.$on('clear', index => {
      this.payloadData=[]
    });
    
  },
  mounted(){
    this.load()
  },
  methods:{
    load(){
      let data = this.$store.state.selectedParks
    data.forEach((element) =>{
      let searchstring = "https://developer.nps.gov/api/v1/parks?parkCode=" + element + "&api_key=" + this.key;

      this.axios
      .get(searchstring)
      .then(response => {
          var retd = JSON.parse(JSON.stringify(response.data).split('"data":').join('"results":'));    
          this.payloadData.push(retd.results[0])
      });
    });
    }
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
