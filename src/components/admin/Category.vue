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
      <div class="categoryList category-mng-wrap category-mng-body" th:each="category, iter : ${categories}">
        <input type="hidden" class="categoryId" th:value="${category.id}"/>
        <input type="text" class="categoryName category-item category-name" th:value="${category.name}"/>
        <input type="text" class="categoryOrdering category-item category-ordering" th:value="${category.ordering}"/>
        <select class="categoryIsVisible category-item category-visible" name="isVisible">
          <option value="1" th:selected="${category.isVisible == 1}">공개</option>
          <option value="0" th:selected="${category.isVisible == 0}">비공개</option>
        </select>
        <button type="button" class="categorySaveBtn category-item category-btn">수정</button>
        <button type="button" class="categoryDelBtn category-item category-btn">삭제</button>
      </div>
      <div class="categoryList category-mng-wrap">
        <input type="text" class="categoryName category-item category-name"/>
        <input type="text" class="categoryOrdering category-item category-ordering"/>
        <select class="categoryIsVisible category-item category-visible">
          <option value="1">공개</option>
          <option value="0">비공개</option>
        </select>
        <button type="button" class="categorySaveBtn category-item category-btn">추가</button>
      </div>
    </form>
  </section>
</template>

<script>
export default {
  name: 'Category'
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
