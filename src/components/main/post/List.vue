<template>
  <section class="post-list-wrap">
    <article class="post" v-for="post in posts" v-bind:key="post.id">
      <span>{{ post.title }}</span>
      <span>{{ post.regDate }}</span>
      <p>{{ post.description }}</p>
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
    this.fetchData()
  },
  methods: {
    fetchData () {
      const _this = this
      this.$http.get('/post')
        .then(result => {
          console.log(result)
          _this.posts = result.data
        })
    }
  }
}
</script>

<style scoped>
.post-list-wrap {
  display: inline-block;
  width: 680px;
  margin: 0 20px;
  font-size: 16px;
}
.post {

}
</style>
