<template>
  <div>
    <SideNav />
    <div class="container">
      <div class="row no-gutters">

        <div class="col-12 page-viewport">
          <Navigation />
          <transition
            name="fade"
            mode="out-in"
          >
            <router-view/>
          </transition>
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
<style lang="scss">
  .container{
    max-width:100% !important;
    margin:0 !important;
    padding-right: 0 !important;
    padding-left: 0 !important;
  }

  .logo-block{
    background-color:#353535;
    height:150px;
    display:block;
    text-align:center;
    img{
      height:70px;
      width:auto;
      margin-top:50px;
    }
  }

  .page-viewport{
    background-color:#EDEDED;
    height:100vh;
    margin-left:300px;
  }

  @media only screen and (max-width:991px){
    .page-viewport{
      margin-left:0;
    }
  }

</style>