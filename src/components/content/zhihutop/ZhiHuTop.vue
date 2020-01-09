<template>
    <div class="heater">
        <div class="title" :class="{isShow:isShow}">
            <div class="search-left">
                <search-image class="img"/>
                <item-left/>
            </div>
            <item-search :nav-data="navdata"/>
        </div>
        <div class="tail" :class="{isShow:isShow}">
            <search-image/>
            <div>
                <ElButton type="primary">写文章</ElButton>
            </div>
        </div>
    </div>
</template>
<script>
import ItemLeft from './zhihuitem/ItemLeft'
import SearchImage from './zhihuitem/SearchImage'
import ItemSearch from './zhihuitem/ItemSearch'
import {getSelector} from '@/network/all'
export default {
    name:'ZhiHuTop',
    components:{
        ItemLeft,
        SearchImage,
        ItemSearch,
    },
    data(){
        return {
            isShow:false,
            navdata:[]
        }
    },
    created(){
        getSelector().then(res=>{
             const navdata = res.top_search.words;
             this.navdata = navdata
        })
       
    },
    mounted(){
        window.addEventListener('scroll',this.myScroll)
    },
    methods:{
        myScroll(){
            if(document.documentElement.scrollTop>=54){
                this.isShow = true;
            }else{
                this.isShow = false;
            }
        }
    }
}
</script>
<style scoped>
    .heater{
        background:#fff;
        width:100%;
        height:56px;
        overflow: hidden;
        box-shadow: 0px 4px 5px #cccccc;
        position:fixed;
        top:0;
        z-index:999;
    }
    
    .title,.tail{
        display:flex;
        align-items: center;
        width:1000px;
        max-width:100%;
        height:56px;
        margin:0 auto;
        justify-content:space-between;
        transition:all .5s ease;
    }
    .title .search-left{
        height:56px;
        display:flex;
        align-items: center;
        width:1000px;
        flex:1;
    }
    .tail{
        display: flex;
        align-items: center;
        justify-content:space-between;
    }
    .tail .el-button{
        padding:8px 20px;
    }
    .isShow{
        transform: translateY(-102%);
    }
</style>