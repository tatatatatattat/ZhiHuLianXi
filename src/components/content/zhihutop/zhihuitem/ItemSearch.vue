<template>
  <div class="item-search">
    <el-autocomplete
      popper-class="my-autocomplete"
      v-model="state"
      :fetch-suggestions="querySearch"
      :placeholder="placeholder"
      @focus="searchFacus"
      @blur="searchFacus"
      :class="{'search-input':hiddenBtn}"
      @select="handleSelect"
    >
      <i class="el-icon-edit el-input__icon" slot="suffix" @click="handleIconClick"></i>
      <template slot-scope="{ item }">
        <div class="name">{{ item.query }}</div>
        <span class="addr">{{ item.display_query }}</span>
      </template>
    </el-autocomplete>
    <ElButton type="primary" v-show="!hiddenBtn" v-model="state">搜索</ElButton>
  </div>
</template>
<script>
export default {
  name: "ItemSearch",
  data() {
    return {
      restaurants: [],
      state: "",
      hiddenBtn:false,
      placeholder:''
    };
  },
  props:{
    navData:{
      type:Array,
      default(){
        return []
      }
    }
  },
  created(){
    
  },
  methods: {
    querySearch(queryString, cb) {
      var restaurants = this.restaurants;
      var results = queryString
        ? restaurants.filter(this.createFilter(queryString))
        : restaurants;
      // 调用 callback 返回建议列表的数据
      cb(results);
    },
    createFilter(queryString) {
      return restaurant => {
        return (restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0);
      };
    },
    
    
    searchFacus(){
        this.hiddenBtn = !this.hiddenBtn
    },
    handleSelect(item) {
      this.state = item.query
      console.log(item);
    },
    handleIconClick(ev) {
      console.log(ev);
    }
  },
  watch:{
     navData:function(newVal,oldVal) {
        this.restaurants = newVal;
        this.placeholder = newVal[0].display_query
      },
  },
};
</script>
<style>
.item-search{
    width:370px;
    height:33px;
    display:flex;
}
.my-autocomplete li {
  line-height: normal;
  padding: 7px;
}
.my-autocomplete .name {
  text-overflow: ellipsis;
  overflow: hidden;
}
.my-autocomplete .addr {
  font-size: 12px;
  color: #b4b4b4;
}

.item-search .highlighted .addr {
  color: #ddd;
}
.item-search .el-input__inner{
    height:33px;
    line-height:33px;
    width:300px;
    transition: all 0.8s;
}
.search-input .el-input__inner{
    width:370px;
    transition: all 1s;
}
.item-search .el-input__icon{
    line-height:33px;
}
.item-search .el-button{
    padding:8px 0;
    text-align:center;
    width:60px;
    margin-left:8px;
}
</style>