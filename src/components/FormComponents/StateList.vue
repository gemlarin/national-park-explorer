<template>
     <label class="option">
      <input type="radio" @click="setstate" name="option" v-bind:value="state" v-model="selectedState">
      <span class="title animated fadeIn">{{ state }}</span>
    </label>
</template>
<script>
    import {clearSearchBus} from './../../main.js'
    export default {
        data () {
            return {
                _state:'',
                selectedState:''
            }
        },
        methods:{
            setstate(){
                this.$store.commit('setSelectedState', this.state)
            }
        },
        mounted(){
            clearSearchBus.$on('clearsearch', () => {
                this.selectedState='';
            });
        },
        name: 'statelist',
        props:['state']
    }
</script>
<style lang="scss">

 
</style>