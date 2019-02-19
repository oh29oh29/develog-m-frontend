<template>
  <section class="post-list-wrap">
    <article class="post" v-for="post in posts" v-bind:key="post.id" v-on:click="linkToDetail(post.title)">
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
    this.fetchData('');
  },
  watch: {
    '$route' () {
      this.fetchData(this.$route.params.categoryName);
    }
  },
  methods: {
    fetchData (categoryName) {
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
  line-height: 50px;
}
.post {
  font-size: 20px;
  padding: 20px 20px;
  border-bottom: 1px solid black;
}
.title {

}
.regDate {
  font-size: 16px;
  float: right;
  line-height: 100px;
  width: 100px;
  text-align: center;
}
.description {
  width: 540px;
}
</style>
