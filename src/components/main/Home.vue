<template>
  <div>
    <Header></Header>
    <div class="content-wrap">
      <router-view name="category"></router-view>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Header from './Header'

export default {
  name: 'Home',
  components: { Header }
}
</script>

<style scoped>
.content-wrap {
  width: 960px;
  margin: 0 auto;
}
</style>
