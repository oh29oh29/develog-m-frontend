<template>
  <div>
    <Navigation></Navigation>
    <router-view></router-view>
  </div>
</template>

<script>
import Navigation from './Navigation';

export default {
  name: 'Home',
  components: { Navigation }
}
</script>

<style scoped>
body {
  font-size: 0;
}
.content-wrap {
  width: calc(100% - 240px);
  height: 100%;
  margin: 0 0 0 200px;
  padding: 30px 20px;
  font-size: 16px;
}

.content-title {
  margin: 0 0 50px 0;
}
</style>
