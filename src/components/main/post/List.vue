<template>
  <section class="post-list-wrap">
    <article v-if="posts.length > 0">
      <div class="post" v-for="post in posts" v-bind:key="post.id" v-on:click="linkToDetail(post.title, post.id)">
        <span class="category">title1</span>
        <span class="title">{{ post.title }}</span>
        <span class="regDate">{{ post.regDate }}</span>
        <p class="description">{{ post.description }}</p>
      </div>
      <div class="paging">

      </div>
    </article>
    <article v-else>
      <div class="post-empty">
        <span class="empty-text">작성된 포스트가 없습니다.</span>
      </div>
    </article>
  </section>
</template>

<script>
export default {
  name: 'List',
  data () {
    return {
      posts: []
    }
  },
  created () {
    this.fetchData(this.$route.params.categoryName);
  },
  watch: {
    '$route' () {
      this.fetchData(this.$route.params.categoryName);
    }
  },
  methods: {
    fetchData (categoryName) {
      if (!categoryName) {
        categoryName = '';
      }

      const _this = this;
      this.$http.get('/' + categoryName)
        .then(response => {
          console.log(response);
          _this.posts = response.data;
        });
    },
    linkToDetail (postTitle, postId) {
      this.$router.push({
        name: 'detail',
        params: {
          categoryName: this.$route.params.categoryName,
          page: this.$route.params.page,
          postTitle: postTitle,
          postId: postId
        }
      });
    }
  }
}
</script>

<style scoped>
.post-list-wrap {
  display: inline-block;
  width: 680px;
  font-size: 16px;
  margin: 0 20px;
}
.post:first-child {
  padding-top: 10px;
}
.post {
  font-size: 20px;
  padding: 40px 20px;
  border-bottom: 1px solid black;
}
.post-empty {
  font-size: 20px;
  padding: 80px 20px;
  text-align: center;
}
.empty-text {

}
.category {
  display: block;
  font-size: 16px;
  color: #aaaaaa;
}
.title {

}
.regDate {
  font-size: 16px;
  float: right;
  width: 100px;
  text-align: center;
  line-height: 55px;

}
.description {
  width: 540px;
  margin: 20px 0 0 0;
}
</style>
