<template>
     <label class="option">
      <input type="radio" name="option" v-bind:value="state" v-model="selectedState">
      <span class="title animated fadeIn">{{ state }}</span>
    </label>
</template>
<script>
    import {clearSearchBus} from './../../main.js'
    export default {
        data () {
            return {
                selectedState:'',
            }
        },
        mounted(){
            clearSearchBus.$on('clearsearch', () => {
                this.selectedState='';
            });
        },
        watch: {
            selectedState: function (val) {
                this.$store.commit('setSelectedState', val)
            }
        },
        name: 'statelist',
        props:['state']
    }
</script>
<style lang="scss">

 
</style>