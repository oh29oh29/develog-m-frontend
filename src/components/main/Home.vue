<template>
  <div class="home-wrap">
    <Header></Header>
    <div class="content-wrap">
      <router-view name="category"></router-view>
      <router-view></router-view>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from './Header';
import Footer from './Footer';

export default {
  name: 'Home',
  components: { Header, Footer }
}
</script>

<style scoped>
.home-wrap {
  position: relative;
  height: 100%;
}
.content-wrap {
  width: 960px;
  min-height: calc(100% - 250px);
  margin: 0 auto;
}
</style>
