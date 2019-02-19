<template>
  <section class="post-list-wrap">
    <article class="post" v-for="post in posts" v-bind:key="post.id" v-on:click="linkToDetail(post.title)">
      <span class="category">title1</span>
      <span class="title">{{ post.title }}</span>
      <span class="regDate">{{ post.regDate }}</span>
      <p class="description">{{ post.description }}</p>
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
      if (categoryName === undefined) {
        categoryName = '';
      }

      const _this = this;
      this.$http.get('/' + categoryName)
        .then(response => {
          console.log(response);
          _this.posts = response.data;
        });
    },
    linkToDetail (title) {
      this.$router.push(this.$route.params.categoryName + '/' + title);
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
.post {
  font-size: 20px;
  padding: 40px 20px;
  border-bottom: 1px solid black;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
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
