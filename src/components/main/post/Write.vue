<template>
  <section class="post-write-wrap">
    <div class="row">
      <div class="category-select-wrap">
        <select class="category-select" v-model="post.category.id">
          <option v-for="category in categories" v-bind:key="category.id" v-bind:value="category.id">{{ category.name }}</option>
        </select>
      </div>
      <div class="private-wrap">
        <span class="private-text" v-on:click="post.isPrivate = !post.isPrivate">비공개</span>
        <input type="checkbox" class="private-input" v-bind:checked="post.isPrivate" v-model="post.isPrivate">
      </div>
    </div>
    <div class="row">
      <input type="text" class="title-input" placeholder="Title" v-model="post.title">
    </div>
    <div class="row">
      <textarea class="description-input" placeholder="Description" v-model="post.description"></textarea>
    </div>
    <editor v-model="post.contents" :options="editorOptions" height="500px" mode="wysiwyg"/>
    <div class="row">
      <input type="text" class="title-input" placeholder="URL path name" v-model="post.urlPathName">
    </div>
    <div class="btn-wrap">
      <button class="write-btn" v-on:click="submit">등록</button>
    </div>
  </section>
</template>

<script>
import Editor from '@toast-ui/vue-editor/src/Editor.vue'

export default {
  name: "Write",
  components: { Editor },
  data () {
    return {
      editorOptions: {
      },
      categories: [],
      post: {
        category: {
          id: '',
          name: ''
        },
        member: {
          id: this.$store.state.user.id
        },
        title: '',
        description: '',
        contents: '',
        isPrivate: false,
        urlPathName: ''
      }
    }
  },
  created () {
    const _post = this.$route.params.post;
    if (!!_post) {
      this.post = {
        id: _post.id,
        category: {
          id: _post.categoryId,
          name: _post.categoryName
        },
        member: {
          id: this.$store.state.user.id
        },
        title: _post.title,
        description: _post.description,
        contents: _post.contents,
        regDate: '',
        isPrivate: _post.isPrivate,
        urlPathName: _post.urlPathName
      };
    }
    this.fetchCategories();
  },
  methods: {
    fetchCategories () {
      const _this = this;
      const categoryName = this.$route.params.categoryName;
      this.$http.get('/category')
        .then(response => {
          _this.categories = response.data;
          _this.categories.every(category => {
            if (category.name === categoryName) {
              _this.post.category.id = category.id;
              _this.post.category.name = category.name;
              return false;
            }
            return true;
          })
        })
        .catch(error => {
          console.log(error);
        });
    },
    submit () {
      const _this = this;
      console.log('send data', this.post);
      this.$http.post('/post', this.post)
        .then(response => {
          const post = response.data;
          _this.$router.push({
            name: 'detail',
            params: {
              categoryName: post.category.name,
              postUrlPathName: post.urlPathName,
              postId: post.id,
              regDateYear: post.regDate.substring(0, 4),
              regDateMonth: post.regDate.substring(5, 7),
              regDateDay: post.regDate.substring(8, 10)
            }
          });
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
}
</script>

<style scoped>
.post-write-wrap {
  width: 820px;
  margin: 0 auto;
}
.row {
  margin: 10px 0;
}
.category-select-wrap {
  display: inline-block;
  height: 100%;
}
.category-select {
  width: 160px;
  height: 30px;
}
.private-wrap {
  float: right;
  height: 30px;
  line-height: 30px;
  cursor: pointer;
}
.private-text {
  font-size: 13px;
  margin: 0 5px 0 0;
}
.private-input {
  cursor: pointer;
}
.title-input {
  width: 100%;
  height: 30px;
  padding: 0 10px;
  font-size: 14px;
}
.title-input::placeholder {
  color: #bdbdbd;
}
.description-input {
  width: 100%;
  height: 50px;
  padding: 10px;
  font-size: 14px;
  resize: vertical;
}
.description-input::placeholder {
  color: #bdbdbd;
}
.btn-wrap {
  margin: 40px 0;
  text-align: center;
}
.write-btn {
  width: 100px;
  height: 30px;
  font-size: 16px;
}
</style>
