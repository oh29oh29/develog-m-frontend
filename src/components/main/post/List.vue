<template>
  <section class="post-list-wrap">
    <article>
      <div v-if="notEmpty">
        <div class="post" v-for="post in posts" v-bind:key="post.id" v-on:click="linkToDetail(post.urlPathName, post.id, post.regDate)">
          <span class="private" v-if="post.isPrivate">비공개</span>
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
      <div v-if="empty">
        <div class="post-empty">
          <span class="empty-text">작성된 포스트가 없습니다.</span>
        </div>
      </div>
      <div class="post-management-btn-wrap" v-if="isSignedIn && user.role === 'ROLE_ADMIN'">
        <button class="post-write-btn" v-on:click="linkToWrite">글쓰기</button>
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
      isDisabledNext: false,
      user: this.$store.state.user,
      isSignedIn: this.$store.state.isSignedIn,
      /*
      * keys: [categoryId, categoryName, page]
      */
      routeParams: this.$route.params,
      notEmpty: false,
      empty: false
    }
  },
  created () {
    this.notEmpty = false;
    this.empty = false;
    this.fetchData();
  },
  watch: {
    '$route' () {
      this.routeParams = this.$route.params;
      this.fetchData();
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
    fetchData () {
      const _this = this;
      this.$http.get('/post', {
        params: {
          categoryId: this.routeParams.categoryId,
          categoryName: this.routeParams.categoryName,
          page: this.routeParams.page
        }
      }).then(response => {
        _this.posts = response.data.posts;
        if (_this.posts.length > 0) {
          _this.page = response.data.page;
          _this.isDisabledPrev = this.page.total < 6 || this.page.target < 6;
          _this.isDisabledNext = this.page.end === this.page.total;
          _this.notEmpty = true;
        } else {
          _this.empty = true;
        }
      }).catch(error => {
        console.log(error);
      });
    },
    // 상세보기 이동
    linkToDetail (postUrlPathName, postId, postRegDate) {
      this.$router.push({
        name: 'detail',
        params: {
          categoryName: this.routeParams.categoryName,
          page: this.page.target,
          postUrlPathName: postUrlPathName,
          postId: postId,
          regDateYear: postRegDate.substring(0, 4),
          regDateMonth: postRegDate.substring(5, 7),
          regDateDay: postRegDate.substring(8, 10)
        }
      });
    },
    // 페이지 이동
    linkToPage (page) {
      this.$router.push({
        name: 'list',
        params: {
          categoryName: this.routeParams.categoryName,
          categoryId: this.routeParams.categoryId,
          page: page
        }
      });
    },
    // 이전 블럭 이동
    linkToPrev () {
      if (this.isDisabledPrev) {
        return;
      }

      this.$router.push({
        name: 'list',
        params: {
          categoryName: this.routeParams.categoryName,
          categoryId: this.routeParams.categoryId,
          page: this.page.start - 1
        }
      });
    },
    // 다음 블럭 이동
    linkToNext () {
      if (this.isDisabledNext) {
        return;
      }

      this.$router.push({
        name: 'list',
        params: {
          categoryName: this.routeParams.categoryName,
          categoryId: this.routeParams.categoryId,
          page: this.page.end + 1
        }
      });
    },
    linkToWrite () {
      this.$router.push({
        name: 'post',
        params: {
          categoryName: this.routeParams.categoryName
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
  border-bottom: 1px solid #dadada;
}
.post-empty {
  font-size: 20px;
  padding: 80px 20px;
  text-align: center;
}
.empty-text {

}
.private {
  display: block;
  font-size: 16px;
  color: #bdbdbd;
}
.title {

}
.reg-date {
  font-size: 14px;
  float: right;
  width: 120px;
  text-align: center;
  line-height: 65px;

}
.description {
  width: 500px;
  margin: 20px 0 0 0;
  font-size: 16px;
  color: #666;
  -ms-word-break: break-word;
  word-break: break-word;
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
