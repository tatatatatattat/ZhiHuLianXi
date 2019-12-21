<template>
  <div id="app">
    <zhi-hu-top/>
    <router-view></router-view>
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
</style>
