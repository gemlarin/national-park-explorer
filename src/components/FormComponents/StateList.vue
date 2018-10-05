<template>
     <label class="option">
      <input type="radio" name="option" v-bind:value="state" v-model="selectedState">
      <span class="title animated fadeIn">{{ state }}</span>
    </label>
</template>
<script>
    export default {
        data () {
            return {
                selectedState:'',
            }
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