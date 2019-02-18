<template>
  <div>
    <Header></Header>
    <div class="content-wrap">
      <router-view name="category" v-on:linkToList="linkToList"></router-view>
      <router-view v-bind:categoryName="categoryName"></router-view>
    </div>
  </div>
</template>

<script>
import Header from './Header';

export default {
  name: 'Home',
  components: { Header },
  data () {
    return {
      categoryName: ''
    }
  },
  methods: {
    linkToList (name) {
      this.categoryName = name;
    }
  }
}
</script>

<style scoped>
.content-wrap {
  width: 960px;
  margin: 0 auto;
}
</style>
