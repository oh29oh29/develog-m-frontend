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
textarea, input[type=text], button, select {
  border: 1px solid #bdbdbd;
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
.tui-editor-contents pre {
  background-color: #333 !important;
}
.tui-editor-contents code {
  color: #fff !important;
  font-size: 14px;
  font-family: D2Coding, 'D2 coding', monosapce;
}
.tui-editor-contents p {
  padding: 0 20px !important;
}

</style>
