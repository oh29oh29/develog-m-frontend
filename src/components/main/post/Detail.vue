<template>
  <section class="post-detail-wrap">
    <article>
      <!-- 포스트 영역 시작 -->
      <div class="post-top">
        <span class="category">{{ post.categoryName }}</span>
        <span class="private" v-if="post.isPrivate">비공개</span>
        <span class="reg-date">{{ post.regDate }}</span>
      </div>
      <span class="title">{{ post.title }}</span>
      <viewer class="contents" :value="post.contents"/>
      <!-- 포스트 영역 끝 -->
      <!-- 댓글 영역 시작 -->
      <div class="comments-wrap">
        <span class="comments-count">댓글 {{ comments.length ? comments.length : 0 }}</span>
        <div class="comments-inner">
          <!-- 댓글 시작 -->
          <div v-if="comments.length > 0">
            <div v-for="comment in comments" v-bind:key="comment.id" v-bind:class="{ 'comment': !comment.parentCommentId, 'child-comment': comment.parentCommentId }">
              <div class="comment-top">
                <span class="comment-writer">{{ comment.memberId }}</span>
                <span class="comment-reg-date">{{ comment.regDate }}</span>
                <button class="comment-control-btn" v-on:click="showCommentReplyInput(comment.id)" v-if="isSignedIn && !comment.parentCommentId">댓글</button>
                <button class="comment-control-btn" v-bind:class="{ 'comment-parent-modify-btn': !comment.parentCommentId, 'comment-child-delete-btn': comment.parentCommentId }"
                        v-on:click="deleteComment(comment.id)"
                        v-if="!comment.isDeleted && isSignedIn && comment.memberId === user.id">삭제</button>
                <button class="comment-control-btn" v-bind:class="{ 'comment-parent-modify-btn': !comment.parentCommentId, 'comment-child-modify-btn': comment.parentCommentId }"
                        v-on:click="showCommentUpdateInput(comment.id)"
                        v-if="!comment.isDeleted && isSignedIn && comment.memberId === user.id">수정</button>
              </div>
              <div class="comment-contents comment-deleted-contents" v-if="comment.isDeleted">삭제된 댓글입니다.</div>
              <div class="comment-contents" v-else>
                <div v-if="showCommentUpdate === comment.id">
                  <textarea class="comment-input-text" v-bind:class="{ 'comment-reply-update-text': comment.parentCommentId }" v-bind:value="comment.contents"></textarea>
                  <button class="comment-reply-input-btn" v-on:click="updateComment">등록</button>
                  <button class="comment-reply-cancel-btn" v-on:click="cancelUpdateComment">취소</button>
                </div>
                <p v-else>{{ comment.contents }}</p>
              </div>
              <!-- 대댓글 쓰기 시작 -->
              <div class="comment-reply-write" v-if="showCommentReply === comment.id">
                <textarea class="comment-input-text"></textarea>
                <button class="comment-reply-input-btn" v-on:click="writeComment">등록</button>
                <button class="comment-reply-cancel-btn" v-on:click="cancelReplyComment">취소</button>
              </div>
              <!-- 대댓글 쓰기 끝 -->
            </div>
          </div>
          <div v-else>
            <div class="comment-empty">
              <span class="empty-text">작성된 댓글이 없습니다.</span>
            </div>
          </div>
          <!-- 댓글 끝 -->
          <!-- 댓글 쓰기 시작 -->
          <div v-if="isSignedIn" class="comment-write">
            <textarea class="comment-input-text"></textarea>
            <button class="comment-input-btn" v-on:click="writeComment">등록</button>
          </div>
          <!-- 댓글 쓰기 끝 -->
        </div>
      </div>
      <!-- 댓글 영역 끝 -->
      <!-- 버튼 영역 시작 -->
      <div class="btn-wrap">
        <button class="list-btn" v-on:click="linkToUpdate" v-if="isSignedIn && post.memberId === user.id">수정</button>
        <button class="list-btn" v-on:click="deletePost(post.id)" v-if="isSignedIn && post.memberId === user.id">삭제</button>
        <button class="list-btn" v-on:click="linkToList">목록으로</button>
      </div>
      <!-- 버튼 영역 끝 -->
    </article>
  </section>
</template>

<script>
import Viewer from '@toast-ui/vue-editor/src/Viewer.vue'

export default {
  name: "Detail",
  components: { Viewer },
  data () {
    return {
      post: {},
      comments: {},
      showCommentReply: '',
      showCommentUpdate: '',
      user: {
        id: this.$store.state.user.id
      },
      isSignedIn: this.$store.state.isSignedIn,
      routeParams: {
        page: this.$route.params.page ? this.$route.params.page : '1',
        postUrlPathName: this.$route.params.postUrlPathName
      }
    }
  },
  created () {
    this.fetchData();
  },
  methods: {
    fetchData () {
      const _this = this;
      this.$http.get('/post/detail', {
        params: {
          urlPathName: this.routeParams.postUrlPathName
        }
      })
        .then(response => {
          console.log(response);
          _this.post = response.data.post;
          _this.comments = response.data.comments;
        })
        .catch(error => {
          console.log(error);
        });
    },
    deletePost (postId) {
      if (!confirm("정말 삭제하시겠습니까?")) {
        return;
      }

      this.$http.delete('/post', {
        params: {
          id: postId
        }
      })
        .then(response => {
          console.log(response);
          this.linkToList();
        })
        .catch(error => {
          console.log(error);
        });
    },
    // 댓글 쓰기
    writeComment (parentCommentId) {
      console.log(parentCommentId);
    },
    // 댓글 수정
    updateComment () {

    },
    // 댓글 삭제
    deleteComment (commentId) {
      this.$http.delete('/comment/' + commentId)
        .then(response => {
          console.log(response);
        })
        .catch(error => {
          console.log(error);
        });
    },
    // 대댓글 입력란 보여주기
    showCommentReplyInput (commentId) {
      this.showCommentReply = commentId;
      this.cancelUpdateComment();
    },
    // 댓글 수정 입력란 보여주기
    showCommentUpdateInput (commentId) {
      this.showCommentUpdate = commentId;
      this.cancelReplyComment();
    },
    // 댓글 작성 취소
    cancelReplyComment () {
      this.showCommentReply = '';
    },
    cancelUpdateComment () {
      this.showCommentUpdate = '';
    },
    linkToList () {
      this.$router.push({
        name: 'list',
        params: {
          categoryName: this.post.categoryName,
          page: this.routeParams.page
        }
      });
    },
    linkToUpdate () {
      this.$router.push({
        name: 'post',
        params: {
          post: this.post
        }
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
  padding: 10px 0;
  border-left: 1px solid #e4e4e4;
  border-right: 1px solid #e4e4e4;
}
.contents p {
  padding: 0 20px;
}
.category {
  color: #bdbdbd;
}
.private {
  margin: 0 0 0 10px;
}
.reg-date {
  float: right;
  font-size: 14px;
}
.comments-wrap {
  margin: 20px 0;
  font-size: 13px;
}
.comments-count {
  margin: 0 0 0 15px;
}
.comments-inner {
  margin: 10px 0;
  background-color: #fafafa;
  -webkit-border-radius: 20px;
  -moz-border-radius: 20px;
  border-radius: 20px;
}
.comment {
  margin: 0 20px 15px 20px;
  padding: 15px 0 0 0;
  border-top: 1px solid #eaeaea;
}
.comment:first-child {
  border: 0;
}
.comment:last-child {
  padding: 15px 0;
}
.comment-top {

}
.comment-writer {
  font-weight: bold;
}
.comment-reg-date {
  margin: 0 0 0 10px;
  font-size: 14px;
  color: #aaaaaa;
}
.comment-contents {
  margin: 5px 0 0 0;
}
.comment-deleted-contents {
  color: #999999;
}
.comment-control-btn {
  float: right;
  border: 0;
  background: none;
}
.comment-parent-modify-btn {
  margin: 0 5px 0 0;
}
.comment-child-modify-btn {
  margin: 0 5px 0 0;
}
.comment-child-delete-btn {
  margin: 0;
}
.comment-reply-write {
  margin: 15px 0 0 0;
}
.comment-reply-input-btn {
  vertical-align: top;
  width: 30px;
  height: 50px;
}
.comment-reply-cancel-btn {
  vertical-align: top;
  width: 30px;
  height: 50px;
}
.child-comment {
  margin: 15px 20px 15px 40px;
}
.comment-write {
  margin: 0 20px;
  padding: 0 0 15px 0;
}
.comment-input-text {
  width: 720px;
  font-size: 13px;
  padding: 5px;
  resize: vertical;
  height: 50px;
  min-height: 50px;
}
.comment-reply-update-text {
  width: 700px;
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
.comment-empty {
  text-align: center;
  padding: 30px 0;
}
.empty-text {

}
</style>
