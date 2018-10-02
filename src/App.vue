<template>
  <div id="app">
    <Layout />
  </div>
</template>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
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
