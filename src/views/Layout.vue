<template>
  <div>
    <Navigation />
    <div class="container">
      <div class="row no-gutters">
        <div class="col-12 col-sm-8">
          <router-view/>
        </div>
        <div class="col-12 col-sm-4">

        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import Navigation from '@/components/Navigation/Navigation.vue'
  export default {

    name: 'home',
    components: {
      Navigation
    },
  }
</script>
<style>
  .container{
    max-width:100% !important;
    margin:0 !important;
  }
</style>