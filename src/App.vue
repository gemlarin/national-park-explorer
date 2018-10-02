<template>
  <div id="app">
    <Layout />
  </div>
</template>


<script>
// @ is an alias to /src
import Layout from '@/views/Layout.vue'

export default {
  name: 'app',
  components: {
    Layout
  }
}
</script>
<style>
#app {
  font-family: 'Bitter', serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
h1, h2, h3, h4, h5, h6, p{
   font-family: 'Bitter', serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>