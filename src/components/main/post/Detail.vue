<template>
  <section class="post-detail-wrap">
    <article>
      <!-- 포스트 영역 시작 -->
      <div class="post-top">
        <span class="category">{{ categoryName }}</span>
        <span class="reg-date">{{ post.regDate }}</span>
      </div>
      <span class="title">{{ post.title }}</span>
      <div class="contents">
        {{ post.contents }}
      </div>
      <!-- 포스트 영역 끝 -->
      <!-- 댓글 영역 시작 -->
      <div class="comments-wrap">
        <!-- 댓글 시작 -->
        <div class="comment" v-for="comment in comments" v-bind:key="comment.id">
          <div class="comment-top">
            <span class="comment-writer">{{ comment.memberId }}</span>
            <span class="comment-reg-date">{{ comment.regDate }}</span>
          </div>
          <div class="comment-contents">{{ comment.contents }}</div>
          <!-- 대댓글 시작 -->
          <div class="child-comment" v-bind:class="{ 'child-comment-last': index === comment.children.length - 1 }" v-for="(childComment, index) in comment.children" v-bind:key="childComment.id">
            <div class="comment-top">
              <span class="comment-writer">{{ childComment.memberId }}</span>
              <span class="comment-reg-date">{{ childComment.regDate }}</span>
            </div>
            <div class="comment-contents">{{ childComment.contents }}</div>
          </div>
          <!-- 대댓글 끝 -->
        </div>
        <!-- 댓글 끝 -->
        <!-- 댓글 쓰기 시작 -->
        <div class="comment-write">
          <textarea class="comment-input-text"></textarea>
          <button class="comment-input-btn" v-on:click="writeComment">등록</button>
        </div>
        <!-- 댓글 쓰기 끝 -->
      </div>
      <!-- 댓글 영역 끝 -->
      <!-- 버튼 영역 시작 -->
      <div class="btn-wrap">
        <button class="list-btn" v-on:click="linkToList">목록으로</button>
      </div>
      <!-- 버튼 영역 끝 -->
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
            comment.children.forEach(childComment => {
              childComment.regDate = dateUtil.convertStringToDateTime(childComment.regDate);
            })
          });
          _this.categoryName = categoryName;
        });
    },
    writeComment () {

    },
    linkToList () {
      this.$router.push('/' + this.categoryName + '/' + this.$route.params.page);
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
.child-comment {
  margin: 15px;
}
.child-comment-last {
  margin-bottom: 0;
}
.comment-write {
  margin: 0 20px;
  padding: 15px 0;
}
.comment-input-text {
  width: 720px;
  font-size: 13px;
  padding: 5px;
  resize: vertical;
  height: 50px;
  min-height: 50px;
}
.comment-input-btn {
  width: 60px;
  height: 50px;
  vertical-align: top;
}
.btn-wrap {
  text-align: right;
}
.list-btn {
  border: 0;
  font-size: 14px;
  margin: 0 20px 0 0px;
}
</style>
