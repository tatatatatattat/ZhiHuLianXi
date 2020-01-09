<template>
    <div class="home">
        <el-container>
            <el-main>
                <home-left/>
                <home-list :home-content="homeContent"/>
            </el-main>
            <el-aside width="300px">
                <we-right/>
            </el-aside>
        </el-container>
    </div>
</template>
<script>
import homeLeft from 'components/content/homeLeft/homeLeft'
import homeList from 'components/content/homeLeft/homeList'
import weRight from 'components/content/weright/weRight'
import {getHomeContent} from '@/network/all'
export default {
    name:"Hoem",
    components:{
        homeLeft,
        homeList,
        weRight
    },
    data(){
        return {
            homeContent:[],
        }
    },
    created(){
        this.getHomeData()
    },
    methods:{
        getHomeData(){
            getHomeContent().then(res=>{
               let data = res.data.map(item=>{
                   return item.target
               })
               this.homeContent = data
               console.log(data)
            })
        }
    }
}
</script>
<style scoped>
    .home{
        margin-top:56px;
    }
    .el-container{
        margin:0 auto;
        padding:20px 0;
        width: 1000px; 
    }
    .el-main{
        background:#fff;
        border-bottom:1px solid #eee;
        margin-right:10px;
        padding:0px 50px;
    }
</style>