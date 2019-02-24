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
      console.log(this.$route.params.postId);
      this.$http.get('/' + this.$route.params.categoryName + '/' + this.$route.params.postId)
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
  width: 820px;
  margin: 0 auto;
}
.title {
  font-size: 26px;
  padding: 0 20px;
}
.contents {
  margin: 50px 0;
  padding: 20px 20px;
  border-left: 1px solid #e4e4e4;
  border-right: 1px solid #e4e4e4;
}
</style>
