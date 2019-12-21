<template>
    <div class="heater">
        <div class="title">
            <div class="search-left">
                <search-image/>
                <item-left/>
            </div>
            <item-search/>
        </div>
        <div class="tail"></div>
    </div>
</template>
<script>
import ItemLeft from './zhihuitem/ItemLeft'
import SearchImage from './zhihuitem/SearchImage'
import ItemSearch from './zhihuitem/ItemSearch'
export default {
    name:'ZhiHuTop',
    components:{
        ItemLeft,
        SearchImage,
        ItemSearch
    }
}
</script>
<style scoped>
.heater{
    width:100%;
}
    .title{
        display:flex;
        align-items: center;
        width:1000px;
        margin:0 auto;
    }
    .title .search-left{
        display:flex;
        align-items: center;
    }
</style>