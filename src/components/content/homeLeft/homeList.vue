<template>
    <div class="home-list">
        <home-item 
        v-for="(item,index) in homeContent" 
        :key="index"
        class="home-list-content">
            <h3>{{item.question.title}}</h3>
            <div class="content" v-show="item.is_copyable">
                <div class="img-box" v-if="item.thumbnail">
                    <img :src="item.thumbnail" alt="">
                </div>
                <div class="text-box">
                    <div class="text-content">{{item.excerpt_new}}</div>
                    <el-button type="text" @click="btnClick(index)">阅读全文</el-button>
                </div>
                
            </div>
            <div v-show="!item.is_copyable" v-html="item.content" class="max-content"></div>
        </home-item>
    </div>
</template>
<script>
import homeItem from './homeItem'
export default {
    name:'homeList',
    components:{
        homeItem
    },
    props:{
        homeContent:{
            type:Array,
            default(){
                return []
            }
        }
    },
    methods:{
        btnClick(index){
            this.homeContent[index].is_copyable = !this.homeContent[index].is_copyable
        }
    }
}
</script>
<style scoped>
    .home-list-content{
        margin:20px 0;
        padding-bottom:20px;
        border-bottom:1px solid #eee;
    }
    .home-list-content h3{
        margin-bottom: 10px;
    }
    .home-list .content{
        display:flex;
    }
    .home-list .content .img-box{
        margin-right:20px;
    }
    .home-list .content img{
        width:190px;
        height:105px;
    }

    .home-list .content .text-content{
        max-height: 105px;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 3;
        overflow: hidden;
        
    }
    .home-list .text-box{
        flex:1;
    }
</style>