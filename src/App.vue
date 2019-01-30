<template>
  <div id="app">
    <Header></Header>
    <Body></Body>
  </div>
</template>

<script>
import Header from '@/components/Header'
import Body from '@/components/Body'
export default {
  name: 'App',
  components: {Body, Header}
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
