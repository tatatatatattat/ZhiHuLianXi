<template>
    <div class="home-left">
        <div class="home-nav">
            <router-link to="home" class="active">推荐</router-link>
            <router-link to="hotlist">热榜</router-link>
        </div>
    </div>
</template>
<script>
export default {
    name:'homeLeft',
    data(){
        return {

        }
    }
}
</script>
<style scoped>
    .home-nav{
        height:60px;
        line-height: 60px;
        border-bottom:1px solid #eee;
    }
    .home-nav a{
        color:#000;
        text-decoration:none;
        display:inline-block;
        padding:0 20px;
    }
    .home-nav a.active{
        color:#0084ff;
    }
</style>