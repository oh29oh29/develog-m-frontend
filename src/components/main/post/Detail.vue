<template>
  <section class="post-detail-wrap">
    <article>
      <div class="post-top">
        <span class="category">{{ categoryName }}</span>
        <span class="reg-date">{{ post.regDate }}</span>
      </div>
      <span class="title">{{ post.title }}</span>
      <div class="contents">
        {{ post.contents }}
      </div>
      <div class="comments-wrap">
        <div class="comment" v-for="comment in comments" v-bind:key="comment.id">
          <div class="comment-top">
            <span class="comment-writer">{{ comment.memberId }}</span>
            <span class="comment-reg-date">{{ comment.regDate }}</span>
          </div>
          <div class="comment-contents">{{ comment.contents }}</div>
        </div>
      </div>
    </article>
  </section>
</template>

<script>
import { dateUtil } from '../../../assets/js/utils/dateUtil';
export default {
  name: "Detail",
  data () {
    return {
      post: {},
      comments: {},
      categoryName: ''
    }
  },
  created () {
    this.fetchData(this.$route.params.categoryName);
  },
  methods: {
    fetchData (categoryName) {
      const _this = this;
      this.$http.get('/' + categoryName + '/' + this.$route.params.postId)
        .then(response => {
          console.log(response);
          _this.post = response.data.post;
          _this.post.regDate = dateUtil.convertStringToDate(_this.post.regDate);
          _this.comments = response.data.comments;
          _this.comments.forEach(comment => {
            comment.regDate = dateUtil.convertStringToDateTime(comment.regDate);
          });
          _this.categoryName = categoryName;
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
.post-top {
  margin: 10px 20px;
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
.category {
  color: #bdbdbd;
}
.reg-date {
  float: right;
}
.comments-wrap {
  margin: 20px 0;
  font-size: 13px;
  background-color: #fafafa;
  -webkit-border-radius: 20px;
  -moz-border-radius: 20px;
  border-radius: 20px;
}
.comment {
  margin: 0 20px;
  padding: 15px 0;
  border-bottom: 1px solid #eaeaea;
}
.comment:last-child {
  border: 0;
}
.comment-top {

}
.comment-writer {

}
.comment-reg-date {
  margin: 0 0 0 10px;
  color: #aaaaaa;
}
.comment-contents {
  margin: 5px 0 0 0;
}
</style>
