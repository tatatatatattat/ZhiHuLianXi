<template>
    <div class="hot-list-nav">
        <router-link to="home">推荐</router-link>
        <router-link to="hotlist" class="active">热榜</router-link>
    </div>
</template>
<style scoped>
    .hot-list-nav{
        height:60px;
        line-height: 60px;
        border-bottom:1px solid #eee;
    }
    .hot-list-nav a{
        color:#000;
        text-decoration: none;
        display:inline-block;
        padding:0 20px;
    }
    .hot-list-nav a.active{
        color:#0084ff;
    }
</style>