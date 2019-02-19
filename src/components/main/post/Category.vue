<template>
  <nav class="category-wrap">
    <div class="category" v-for="category in categories" v-bind:key="category.id">
      <span class="name" v-on:click="linkToList(category.name)">{{ category.name }}</span>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Category",
  data () {
    return {
      categories: []
    }
  },
  created () {
    this.fetchData();
  },
  methods: {
    fetchData () {
      const _this = this;
      this.$http.get('/category')
        .then(response => {
          console.log(response);
          _this.categories = response.data;
        });
    },
    linkToList (name) {
      this.$router.push(name);
    }
  }
}
</script>

<style scoped>
.category-wrap {
  display: inline-block;
  vertical-align: top;
  width: 200px;
  margin: 0 20px;
  font-size: 16px;
}
.category {
   margin: 5px 0;
}
.name {
  cursor: pointer;
}
</style>
