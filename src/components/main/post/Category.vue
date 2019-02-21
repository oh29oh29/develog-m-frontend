<template>
  <nav class="category-wrap">
    <span class="header-ko">카테고리</span><span class="header-en">categories</span>
    <div class="category" v-for="category in categories" v-bind:key="category.id" v-bind:class="{ active: isSelected[category.name]}">
      <span class="name" v-on:click="linkToList(category.name)">{{ category.name }}</span>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Category",
  data () {
    return {
      categories: [],
      isSelected: {}
    }
  },
  created () {
    this.fetchData();
  },
  watch: {
    '$route' () {
      for (const categoryName in this.isSelected) {
        if (this.isSelected.hasOwnProperty(categoryName) && this.isSelected[categoryName]) {
          this.isSelected[categoryName] = false;
        }
      }
      this.isSelected[this.$route.params.categoryName] = true;
    }
  },
  methods: {
    fetchData () {
      const _this = this;
      this.$http.get('/category')
        .then(response => {
          console.log(response);
          _this.categories = response.data;
          _this.categories.forEach(category => {
            _this.isSelected[category.name] = false;
          })
        });
    },
    linkToList (name) {
      this.$router.push(name);
    }
  }
}
</script>

<style scoped>
.category-wrap {
  display: inline-block;
  vertical-align: top;
  width: 200px;
  margin: 0 20px;
  font-size: 16px;
  padding: 0 10px;
  border-radius: 10px;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}
.header-ko {
  display: inline-block;
  margin: 0 0 10px 0;
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
  cursor: pointer;
  line-height: 20px;
  vertical-align: sub;
  display: inline-block;
}
.active {
  background-color: red;
}
</style>
