<template>
  <section id="contentWrap" class="content-wrap">
    <h1 class="content-title">카테고리 관리</h1>
    <div class="category-mng-wrap category-mng-header">
      <span class="category-item category-name">이름</span>
      <span class="category-item category-ordering">순서</span>
      <span class="category-item category-visible">비공개</span>
    </div>
    <form id="test">
      <!--<input type="hidden" id="csrf" th:data-header="${_csrf.headerName}" th:data-token="${_csrf.token}" />-->
      <div class="categoryList category-mng-wrap category-mng-body" v-for="(category, index) in categories" v-bind:key="category.id">
        <input type="hidden" class="categoryId" v-model="category.id"/>
        <input type="text" class="categoryName category-item category-name" v-model="category.name"/>
        <input type="text" class="categoryOrdering category-item category-ordering" v-model="category.ordering"/>
        <select class="categoryIsVisible category-item category-visible" name="isVisible">
          <option value="1" v-bind:selected="category.isVisible === '1'">공개</option>
          <option value="0" v-bind:selected="category.isVisible === '0'">비공개</option>
        </select>
        <button type="button" class="categorySaveBtn category-item category-btn" v-on:click="updateCategory(index)">수정</button>
        <button type="button" class="categoryDelBtn category-item category-btn" v-on:click="deleteCategory(category.id, index)">삭제</button>
      </div>
      <div class="categoryList category-mng-wrap">
        <input type="text" class="category-item category-name" v-model="newCategory.name"/>
        <input type="text" class="category-item category-ordering" v-model="newCategory.ordering"/>
        <select class="category-item category-visible" v-model="newCategory.isVisible">
          <option value="1">공개</option>
          <option value="0">비공개</option>
        </select>
        <button type="button" class="category-item category-btn" v-on:click="addCategory">추가</button>
      </div>
    </form>
  </section>
</template>

<script>
export default {
  name: 'Category',
  created () {
    this.fetchData();
  },
  data () {
    return {
      categories: [],
      newCategory: {
        id: '',
        name: '',
        ordering: '',
        isVisible: ''
      }
    }
  },
  methods: {
    fetchData () {
      const _this = this
      this.$http.get('/category')
        .then(result => {
          console.log(result)
          _this.categories = result.data
        })
    },
    addCategory () {
      const _this = this
      this.$http.post('/category', _this.newCategory)
        .then(result => {
          console.log(result)
          _this.categories.push(_this.newCategory)
        }).catch(() => {
            alert("카테고리 추가 실패")
        })
    },
    updateCategory (index) {
      const _this = this
      this.$http.patch('/category', _this.categories[index])
        .then(result => {
          console.log(result)
        }).catch(() => {
          alert("카테고리 수정 실패")
        })
    },
    deleteCategory (id, index) {
      if (!confirm("정말 삭제하시겠습니까?")) {
        return false;
      }

      const _this = this
      this.$http.delete('/category', id)
        .then(result => {
          console.log(result)
          _this.categories.splice(index, 1)
        }).catch(() => {
          alert("카테고리 제거 실패")
        })
    }
  }
}
</script>

<style scoped>
.category-item {
  display: inline-block;
  line-height: 30px;
}
.category-name {
  width: 156px;
}
.category-ordering {
  width: 36px;
  text-align: center;
}
.category-visible {
  margin: 10px;
}
.category-btn {
  width: 30px;
}
.category-mng-wrap {
}
.category-mng-header .category-name {
  width: 160px;
}
.category-mng-header .category-ordering {
  width: 40px;
}
.category-mng-header .category-visible {
  width: 80px;
  margin: 0;
  text-align: center;
}
</style>
