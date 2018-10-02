<template>
  <div>
    <div class="container">
      <div class="row no-gutters">
        <div class="col-12 col-sm-3">
          <div class="sidenav-container">
            <div class="logo-block">
              LOGO
            </div>
            <SideNav />
          </div>
        </div>
        <div class="col-12 col-sm-9 page-viewport">
          <Navigation />
          <router-view/>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import SideNav from '@/components/Navigation/SideNav.vue'
  import Navigation from '@/components/Navigation/Navigation.vue'
  export default {

    name: 'home',
    components: {
      SideNav,
      Navigation
    },
  }
</script>
<style >

  .sidenav-container{
      height:100vh;
      background-color:#4EA558;
  }
  .container{
    max-width:100% !important;
    margin:0 !important;
    padding-right: 0 !important;
    padding-left: 0 !important;
  }

  .logo-block{
    background-color:#353535;
    height:100px;
    display:block;
  }

  .page-viewport{
    background-color:#f5f5f5
  }

</style>