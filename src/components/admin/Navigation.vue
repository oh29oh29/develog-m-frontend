<template>
  <nav>
    <ul>
      <li><router-link to="/admin/categories">DASHBOARD</router-link></li>
      <li><router-link to="/admin/categories">회원 관리</router-link></li>
      <li><router-link to="/admin/categories">카테고리 관리</router-link></li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'Navigation'
}
</script>

<style scoped>
nav {
  position: fixed;
  width: 200px;
  height: 100%;
  font-size: 16px;
}
ul {
  padding: 20px;
  list-style: none;
}
li {
  margin: 10px 0;
  padding: 0 20px;
  line-height: 50px;
  cursor: pointer;
}
</style>
