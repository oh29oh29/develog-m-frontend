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
        <span class="page-btn" v-bind:class="{ 'page-disabled-btn': isDisabledPrevBtn }" v-on:click="linkToPrev">←︎</span>
        <span v-for="i in pages" class="page-btn" v-bind:class="{ 'page-active-btn': i === page.target }" v-on:click="linkToPage(i)">{{ i }}</span>
        <span class="page-btn" v-bind:class="{ 'page-disabled-btn': isDisalbedNextBtn }" v-on:click="linkToNext">→</span>
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
      posts: [],
      page: {
        total: 11,
        start: 1,
        end: 5,
        target: 1
      },
      isDisabledPrev: false,
      isDisabledNext: false
    }
  },
  created () {
    this.fetchData(this.$route.params.categoryName, this.$route.params.page);
  },
  watch: {
    '$route' () {
      this.fetchData(this.$route.params.categoryName, this.$route.params.page);
      this.page.target = parseInt(this.$route.params.page);
    }
  },
  computed: {
    isDisabledPrevBtn () {
      this.isDisabledPrev = this.page.total < 6 || this.page.target < 6;
      return this.isDisabledPrev;
    },
    isDisalbedNextBtn () {
      this.isDisabledNext = this.page.total - (this.page.total % 5) < this.page.target;
      return this.isDisabledNext;
    },
    pages () {
      let blockPages = [];
      for (let i = this.page.start; i <= this.page.end; i++) {
        blockPages.push(i);
      }
      return blockPages;
    }
  },
  methods: {
    fetchData (categoryName, page) {
      if (!categoryName) {
        categoryName = '';
      }

      if (!page) {
        page = 1;
      }

      const _this = this;
      this.$http.get('/' + categoryName + '/' + page)
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
    },
    linkToPage (page) {
      this.$router.push('/' + this.$route.params.categoryName + '/' + page);
    },
    linkToPrev () {
      if (this.isDisabledPrev) {
        return;
      }

      let target = this.page.start - 1;
      this.$router.push('/' + this.$route.params.categoryName + '/' + target);
    },
    linkToNext () {
      if (this.isDisabledNext) {
        return;
      }

      let target = this.page.end + 1;
      this.$router.push('/' + this.$route.params.categoryName + '/' + target);
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
.paging {
  margin: 30px;
  text-align: center;
}
.page-btn {
  display: inline-block;
  width: 30px;
  line-height: 30px;
  margin: 0 5px;
  cursor: pointer;
}
.page-active-btn {
  border-bottom: 1px solid black;
  cursor: default;
}
.page-disabled-btn {
  color: #eaeaea;
  cursor: default;
}
</style>
