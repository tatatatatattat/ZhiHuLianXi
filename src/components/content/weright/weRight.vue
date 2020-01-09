<template>
  <div class="we-right">
    <div class="right-top">
      <div class="animate">
        <img src="@/assets/github-square.png" alt />
      </div>
      <div class="text-box">
        <h3>tatatata</h3>
        <p>技术栈：Vue / Element /axios</p>
        <p>项目周期：4天</p>
        <p>信息来源:知乎官方</p>
        <p>API:模拟数据</p>
      </div>
    </div>
    <div class="right-banner">
      <h3>下期欲练习项目</h3>
      <div class="block">
        <el-carousel height="100px" indicator-position="outside">
          <el-carousel-item v-for="(item,index) in projectData" :key="index">
              <div class="zhhu">
                <h3>{{item.name}}</h3>
                <p class="intro">{{item.intro}}</p>
                <p class="inn">{{item.inn}}</p>
              </div>
          </el-carousel-item>
        </el-carousel>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "weRight",
  data() {
    return {
      projectData: [
        {
          name: "VE-Admin",
          intro: "舞蹈培训班后台项目",
          inn: "Node.js/vue.js/小程序/elementUI",
          url: "https://github.com/ragnar-document/VE-Admin"
        },
        {
          name: "Koa-Admin",
          intro: "后台增删改项目",
          inn: "node.js/koa/vue.js/ElementUI",
          url: "https://github.com/ragnar-document/OKR-KOA"
        },
        {
          name: "OKR小程序",
          intro: "类似于todolist的小程序",
          inn: "node.js/koa/小程序",
          url: "https://github.com/ragnar-document/OKR-KOA"
        },
        {
          name: "V2EX小程序",
          intro: "一个某课卖99的简单小程序",
          inn: "小程序",
          url: "https://github.com/ragnar-document/Wechat-V2EX"
        }
      ]
    };
  }
};
</script>
<style scoped>
.we-right {
  background: #fff;
  padding: 20px 0;
}
.we-right .right-top {
  width: 80%;
  margin: 0 auto;
}
.we-right .right-top .animate {
  padding: 20px;
  position: relative;
}
.we-right .right-top .animate img {
  width: 80px;
  display: block;
  margin: 0 auto;
  animation: spin 3s ease infinite;
}
.we-right .right-top .animate::after {
  content: "";
  width: 16px;
  height: 16px;
  position: absolute;
  right: 59px;
  bottom: 6;
  background: url("~@/assets/jiantou.png") no-repeat center center/100% 100%;
}
@keyframes spin {
  50%,
  100% {
    transform: rotate(360deg);
  }
}
.we-right .right-top .text-box h3 {
  font-size: 31px;
  margin-bottom: 10px;
}
.we-right .right-top .text-box p {
  font-size: 0.9em;
  margin-bottom: 10px;
}
.we-right .right-banner {
  padding: 20px 30px;
}
.we-right .right-banner h3 {
  font-size: 21px;
  margin-bottom:10px;
}
.we-right .right-banner .block h3{
    color: #0084ff;
    font-size: 20px;
    font-weight: 600;
}
.we-right .right-banner .block .intro{
    font-size: 12px;
    color: #888;
}
.we-right .right-banner .block .inn{
    font-size: 12px;
    color: #888;
}
.we-right .right-banner  .zhhu{
    background-color:aliceblue;
    border-left:2px solid #0084ff;
    border-right:2px solid #0084ff;
    border-radius:8px;
    padding:10px;
}
</style>