<template>
    <div class="hot-list">
        
        <el-container>
            <el-main>
                <hot-list-nav/>
                <div class="sub-nav">
                    <el-button v-for="(item,index) in hotList" 
                    size="mini" 
                    round 
                    :key="index"
                    @click="onHotListClick(index,item.identifier)"
                    :class="{active:carrentIndex===index}">{{item.name}}</el-button>
                </div>
                <hot-list-list :hot-item="hotItem"/>
            </el-main>
            <el-aside width="300px">
                <we-right/>
            </el-aside>
        </el-container>
    </div>
</template>
<script>
import weRight from 'components/content/weright/weRight'
import hotListNav from 'components/content/hot/hotListNav'
import hotListList from 'components/content/hot/hotListList'
import {getHotListData,getHotListsData} from '@/network/all'
export default {
    name:"HotList",
    components:{
        hotListNav,
        hotListList,
        weRight,
    },
    data(){
        return {
            hotList:[],
            carrentIndex:0,
            hotItem:[]
        }
    },
    created(){
        this.getHotMassage()
    },
    methods:{
        getHotMassage(){
            getHotListData().then(res=>{
                this.hotList = res.data
                console.log(this.hotList)
            })
            getHotListsData("total").then(res=>{
                this.hotItem = res.data
            })
        },
        onHotListClick(index,parms){
            this.carrentIndex = index;
            getHotListsData(parms).then(res=>{
                this.hotItem = res.data
            })
        }
    }
}
</script>
<style scoped>
    .hot-list{
        margin-top:56px;
    }
    .el-container{
        width:1000px;
        margin:0 auto;
        padding:20px 0;
    }
    .el-main{
        background: #fff;
        border-bottom: 1px solid #eee;
        margin-right: 10px;
        padding: 0px 50px;
    }
    .sub-nav{
        padding:20px 0px;
        border-bottom: 1px solid #eee;
    }
    .sub-nav .active{
        color: #3a8ee6;
        border-color: #3a8ee6;
        background-color:#ecf5ff;
    }
</style>