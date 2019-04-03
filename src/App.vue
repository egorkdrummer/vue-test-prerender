<template>
  <div id="app">
    <div id="nav">
      <router-link
        v-for="(item, index) in routesDetails"
        :key="index"
        :to="item.path"
        >{{ item.name }}</router-link
      >
    </div>
    <router-view />
  </div>
</template>

<script>
import { routesDetails } from "@/router";
export default {
  data() {
    return {
      routesDetails
    };
  }
};
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  display: flex;
  justify-content: center;
  a {
    font-weight: bold;
    color: #2c3e50;
    display: inline-block;
    padding: 1em;
    margin: 1em;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
