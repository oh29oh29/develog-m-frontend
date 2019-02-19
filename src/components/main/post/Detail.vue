<template>
  <section>
    {{ post.title }}
  </section>
</template>

<script>
export default {
  name: "Detail",
  data () {
    return {
      post: {}
    }
  },
  created () {
    this.fetchData();
  },
  methods: {
    fetchData () {
      const _this = this;
      this.$http.get('/' + this.$route.params.categoryName + '/' + this.$route.params.postTitle)
        .then(response => {
          console.log(response);
          _this.post = response.data;
        });
    }
  }
}
</script>

<style scoped>

</style>
