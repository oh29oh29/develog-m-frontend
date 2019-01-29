<template>
  <div id="app">
    <Header></Header>
    <!--<router-view/>-->
  </div>
</template>

<script>
import Header from '@/components/Header'
export default {
  name: 'App',
  components: {Header}
}
</script>

<style>
* {
  padding: 0;
  margin: 0;
  outline: none;
}
html, body {
  width: 100%;
  height: 100%;
}
button {
  cursor: pointer;
}
a {
  text-decoration: none;
  color: #000;
  cursor: pointer;
}
</style>
