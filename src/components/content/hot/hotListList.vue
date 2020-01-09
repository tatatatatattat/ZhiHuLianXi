<template>
    <div class="hot-list-list">
        <hot-list-item 
        v-for="(item,index) in hotItem" 
        :key="index"
        class="hot-item">
            <div class="hot-top">{{index+1}}</div>
            <div class="hot-content">
                <div class="left-box">
                    <h3>{{item.target.title}}</h3>
                    <div class='icon'>
                        <i></i>{{item.detail_text}}
                    </div>
                </div>
                <div class="right-box">
                    <div class="img-box" v-for="(i,idx) in item.children" :key="idx">
                        <img :src="i.thumbnail" alt="">
                    </div>
                </div>
            </div>
        </hot-list-item>
    </div>
</template>
<script>
import hotListItem from './hotListItem'
export default {
    name:"hotListList",
    components:{
        hotListItem
    },
    props:{
        hotItem:{
            type:Array,
            default(){
                return []
            }
        }
    }
}
</script>
<style scoped>
    .hot-item{
        position:relative;
        padding:10px 20px;
        padding-right:0;
    }
    .hot-item .hot-top{
        position:absolute;
        left:-2px;
        top:9px;
        font-size: 22px;
        font-weight: 600;
        color: #0084ff;
    }
    .hot-item .hot-content{
        display:flex;
    }
    .hot-item .left-box{
        flex:1;
        padding:10px;
        padding-top:0;
        position:relative;
    }
    .hot-item .left-box .icon{
        position:absolute;
        left:10px;
        bottom:0;
    }
    .hot-item .left-box .icon i{
        vertical-align: middle;
        display: inline-block;
        height:18px;
        width:18px;
        margin-right:10px;
        background:url('~@/assets/hot.png')no-repeat center center/100% 100%;
    }
    .hot-item .right-box{
        width:190px;
        min-height:111px;
    }
    .hot-item .right-box .img-box{
        height:99px;
        overflow: hidden;
        border-radius:5px;
    }
</style>