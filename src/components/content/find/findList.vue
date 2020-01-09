<template>
    <div class="find-list" v-if="listData">
        <find-item class="find-item" v-for="item in listData" :key="item.id">
            <div class="img-box">
                <img :src="item.banner" alt="">
            </div>
            <div class="item-title">
                <h3>{{item.title}}</h3>
                <p>{{item.introduction}}</p>
            </div>
            <div class="item-xz">
                <p v-for="(inItem,index) in item.section_list" :key="index">{{inItem.section_title}}</p>
            </div>
        </find-item>
    </div>
</template>
<script>
import findItem from './findItem'
export default {
    name:"findList",
    components:{
        findItem
    },
    props:{
        listData:{
            type:Array,
            default(){
                return []
            }
        }
    }

}
</script>
<style scoped>
    .find-list{
        display:flex;
        flex-wrap: wrap;
        justify-content: space-between;
    }
    .find-list .find-item{
        width:49%;
        background:#fff;
        border-radius:5px;
        overflow: hidden;
        margin-bottom:20px;
        transition:all .3s;
    }
    .find-list .find-item:hover{
        box-shadow:0 5px 6px #ccc;
    }
    .find-list .find-item .img-box{
        height:130px;
        overflow: hidden;
        margin-bottom:10px;
    }
    .find-list .find-item .item-title{
        padding:10px;
        height:100px;
        border-bottom:1px solid #eee;
    }
    .find-list .find-item .item-title h3{
        font-size:20px;
    }
    .find-list .find-item .item-title p{
        font-size:14px;
        font-weight:lighter;
        overflow: hidden;
        white-space:nowrap;
        text-overflow:ellipsis;
    }
    .find-list .find-item .item-xz{
        display:flex;
        flex-wrap: wrap;
        font-size:10px;
        padding:5px 10px;
    }
    .find-list .find-item .item-xz p{
        padding:3px 10px;
        font-weight:lighter;
        color:#8590a6;
    }
</style>