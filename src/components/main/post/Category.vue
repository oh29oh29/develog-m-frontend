<template>
  <nav class="category-wrap">
    <span class="header-ko">카테고리</span><span class="header-en">categories</span>
    <div class="category" v-for="category in categories" v-bind:key="category.id">
      <div v-if="category.visible">
        <span class="name" v-on:click="linkToList(category.name, category.id)">{{ category.name }}</span>
        <span v-show="isSelected(category.name)" class="active">●</span>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Category",
  data () {
    return {
      categories: [],
      selectedName: '',
      user: this.$store.state.user,
      isSignedIn: this.$store.state.isSignedIn
    }
  },
  created () {
    this.fetchData();
    this.selectedName = this.$route.params.categoryName;
  },
  watch: {
    '$route' () {
      this.selectedName = this.$route.params.categoryName;
    }
  },
  methods: {
    fetchData () {
      const _this = this;
      this.$http.get('/category')
        .then(response => {
          _this.categories = response.data;
        })
        .catch(error => {
          console.log(error);
        });
    },
    linkToList (name, id) {
      this.$router.push({
        name: 'list',
        params: {
          categoryName: name,
          categoryId: id,
          page: '1'
        }
      });
    },
    isSelected (name) {
      return name === this.selectedName;
    }
  }
}
</script>

<style scoped>
.category-wrap {
    display: inline-block;
    width: 200px;
    margin: 0 10px;
    padding: 0 10px;
    border-radius: 10px;
    vertical-align: top;
    font-size: 16px;
  }
.header-ko {
  display: inline-block;
  margin: 0 0 15px 0;
}
.header-en {
  margin: 0 0 0 5px;
  font-size: 14px;
  color: #bdbdbd;
}
.category {
   margin: 5px 0;
}
.name {
  display: inline-block;
  line-height: 20px;
  vertical-align: middle;
  cursor: pointer;
}
.active {
  display: inline-block;
  height: 20px;
  line-height: 20px;
  margin: 0 0 0 5px;
  vertical-align: middle;
  font-size: 12px;
}
</style>
