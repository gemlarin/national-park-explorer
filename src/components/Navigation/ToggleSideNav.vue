<template>
  <div class="toggle-wrap">
    <div class="overlay" v-if="!showOverlay"></div>
    <div class="sidebar-toggle" @click="handleClick">    
      <svg fill="#fff" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 0h24v24H0z" fill="none"/>
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11h-4v4h-2v-4H7v-2h4V7h2v4h4v2z"/>
      </svg>
    </div>
  </div>
</template>

<script>
  import {TweenMax, Power4} from 'gsap'
  export default {
    name: 'sidebar-toggle',
    data () {
        return {
          
        }
    },
    computed: {
      open () {
        return this.$store.state.sidebarOpen
      },
      showOverlay() {
        return this.$store.state.sidebarOpen
      }
    },
    methods: {
      handleClick () {
        this.$store.dispatch('toggleSidebar');
      }
    }
  }
</script>
<style lang="scss">
    .overlay{
      position:absolute;
      z-index:0;
      height:100vh;
      width:100vw;
      background-color:#000;
      opacity:.5;
    }
    .sidebar-toggle{
        position:absolute;
        top:25vh;
        width:26px;
        padding-top:9px;
        z-index:1;
        height:43px;
        left:300px;
        border-radius:0 4px 4px 0;
        z-index:501;
        background-color:#6CAF41;
        cursor:pointer;
        svg{
          position:relative;
          left:0;
        }
        &:hover{
          opacity:.9;
        }
    }
    @media only screen and (min-width:992px){
       .sidebar-toggle, .overlay{
           display:none;
       }
    }
</style>