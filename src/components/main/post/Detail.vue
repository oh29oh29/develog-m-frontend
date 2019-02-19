<template>
  <section class="post-detail-wrap">
    <article>
      <span class="title">{{ post.title }}</span>
      <div class="contents">
        {{ post.contents }}
      </div>
    </article>
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
.post-detail-wrap {
  width: 680px;
  margin: 0 auto;
}
.title {
  font-size: 26px;
}
.contents {
  margin: 50px 0;
}
</style>
