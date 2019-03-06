<template>
  <section class="post-list-wrap">
    <article>
      <div v-if="posts.length > 0">
        <div class="post" v-for="post in posts" v-bind:key="post.id" v-on:click="linkToDetail(post.title, post.id)">
          <span class="category">title1</span>
          <span class="title">{{ post.title }}</span>
          <span class="reg-date">{{ post.regDate }}</span>
          <p class="description">{{ post.description }}</p>
        </div>
        <div class="paging">
          <span class="page-btn" v-bind:class="{ 'page-disabled-btn': isDisabledPrev }" v-on:click="linkToPrev">←︎</span>
          <span v-for="i in pages" v-bind:key="i" class="page-btn" v-bind:class="{ 'page-active-btn': i === page.target }" v-on:click="linkToPage(i)">{{ i }}</span>
          <span class="page-btn" v-bind:class="{ 'page-disabled-btn': isDisabledNext }" v-on:click="linkToNext">→</span>
        </div>
      </div>
      <div v-else>
        <div class="post-empty">
          <span class="empty-text">작성된 포스트가 없습니다.</span>
        </div>
      </div>
      <div class="post-management-btn-wrap" v-if="isSignedIn && user.role === 'ADMIN'">
        <button class="post-write-btn" v-on:click="linkToWrite">글쓰기</button>
      </div>
    </article>
  </section>
</template>

<script>
import { dateUtil } from '../../../assets/js/utils/dateUtil';
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
      isDisabledNext: false,
      categoryName: '',
      user: this.$store.state.user,
      isSignedIn: this.$store.state.isSignedIn
    }
  },
  created () {
    this.fetchData(this.$route.params.categoryName, this.$route.params.page);
  },
  watch: {
    '$route' () {
      this.fetchData(this.$route.params.categoryName, this.$route.params.page);
    }
  },
  computed: {
    pages () {
      const blockPages = [];
      for (let i = this.page.start; i <= this.page.end; i++) {
        blockPages.push(i);
      }
      return blockPages;
    }
  },
  methods: {
    // 데이터 갱신
    fetchData (categoryName, page) {
      const _this = this;
      this.$http.get('/' + categoryName + '/' + page)
        .then(response => {
          console.log(response);
          _this.posts = response.data.posts;
          _this.posts.forEach(post => {
            post.regDate = dateUtil.convertStringToDate(post.regDate);
          });
          if (_this.posts.length > 0) {
            _this.page = response.data.page;
            _this.isDisabledPrev = this.page.total < 6 || this.page.target < 6;
            _this.isDisabledNext = this.page.end === this.page.total;
          }
          _this.categoryName = categoryName;
        });
    },
    // 상세보기 이동
    linkToDetail (postTitle, postId) {
      this.$router.push({
        name: 'detail',
        params: {
          categoryName: this.categoryName,
          page: this.page.target,
          postTitle: postTitle,
          postId: postId
        }
      });
    },
    // 페이지 이동
    linkToPage (page) {
      this.$router.push('/' + this.categoryName + '/' + page);
    },
    // 이전 블럭 이동
    linkToPrev () {
      if (this.isDisabledPrev) {
        return;
      }

      let target = this.page.start - 1;
      this.$router.push('/' + this.categoryName + '/' + target);
    },
    // 다음 블럭 이동
    linkToNext () {
      if (this.isDisabledNext) {
        return;
      }

      let target = this.page.end + 1;
      this.$router.push('/' + this.categoryName + '/' + target);
    },
    linkToWrite () {
      this.$router.push({
        name: 'post',
        params: {
          categoryName: this.categoryName
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
  color: #bdbdbd;
}
.title {

}
.reg-date {
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
.post-management-btn-wrap {
  text-align: right;
}
.post-write-btn {
  padding: 10px 15px;
}
</style>
