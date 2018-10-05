<template>
  <div id="app">
    <Layout />
  </div>
</template>


<script>
// @ is an alias to /src
import Layout from './views/Layout'

export default {
  name: 'app',
  components: {
    Layout
  }
}
</script>
<style>
html{
  position: fixed;
  height: 100%;
  overflow: hidden;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
body {
  width: 100vw;
  height: 100vh;
  overflow-y: scroll;
  overflow-x: hidden;
  -webkit-overflow-scrolling: touch;
}
#app {
  font-family: 'Bitter', serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  overflow: hidden;
}
h1, h2, h3, h4, h5, h6, p{
   font-family: 'Bitter', serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  
}
</style>