<template>
  <div class="item-left">
    <div class="title-content">
      <router-link to="home">主页</router-link>
      <router-link to="find">发现</router-link>
      <router-link to="hotlist">热榜</router-link>
      <router-link to="specials">专栏</router-link>
    </div>
  </div>
</template>
<script>
export default {
  name: "itemLeft"
};
</script>
<style scoped>
a {
  text-decoration: none;
  color: #333333;
  font-size: 16px;
  display: inline-block;
  margin: 0 16px;
  padding: 16px 0;
  border-bottom: 2px solid #fff;
  cursor: pointer;
}
a.router-link-active{
    border-bottom-color: #0084ff;
    color: #0084ff;
}
</style>