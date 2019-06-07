<template>
  <div id="app">
    <div id="twitter">
      <Header />
    <router-view/>
  </div>
  </div>
</template>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // text-align: center;
  color: #2c3e50;
}

#twitter {
    display: flex;
    flex-direction: column;
    align-items: center;
}
// #nav {
//   a {
//     font-weight: bold;
//     color: #2c3e50;
//     &.router-link-exact-active {
//       color: #42b983;
//     }
//   }
// }
</style>

<script>

  import Header from './components/Header.vue';

  export default {
    name: 'app',
    components: {
      Header
    }
  }
</script>

