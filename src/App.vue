<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <router-view/>
    <Login v-if="$store.state.loginFlag"></Login>
  </div>
</template>

<script>
import Login from '@/components/login'
export default {
  name: 'App',
  components: {
    Login,
  },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
