<template>
  <div id="app">
    <zhi-hu-top/>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
import ZhiHuTop from 'components/content/zhihutop/ZhiHuTop'
export default {
  name: 'app',
  components:{
    ZhiHuTop
  }
}
</script>

<style>
*{
  padding:0;
  margin:0;
  box-sizing: border-box;
}
img{
  max-width: 100%;
  width:auto;
}
html,body{
  background:#eee;
}
</style>
