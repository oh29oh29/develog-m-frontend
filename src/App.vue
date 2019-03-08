<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
* {
  padding: 0;
  margin: 0;
  outline: none;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}
html, body {
  width: 100%;
  height: 100%;
}
button {
  cursor: pointer;
  background-color: transparent;
}
a {
  text-decoration: none;
  color: #000;
  cursor: pointer;
}
#app {
  height: 100%;
}
</style>
