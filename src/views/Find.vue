<template>
    <div class="find">
        <el-container>
            <el-main>
                <h3>
                    <svg
                        class="Zi Zi--LabelSpecial"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        width="36"
                        height="36"
                        >
                        <path
                            d="M7.667 3.667h11.466a1.2 1.2 0 0 1 1.2 1.2v13.066a2.4 2.4 0 0 1-2.4 2.4H6.467V4.867a1.2 1.2 0 0 1 1.2-1.2zM4.2 9.619h1.689v10.714H5.4a2.4 2.4 0 0 1-2.4-2.4V10.82a1.2 1.2 0 0 1 1.2-1.2zm5.178-2.38a.6.6 0 0 0-.6.6v.585a.6.6 0 0 0 .6.6h8.044a.6.6 0 0 0 .6-.6v-.586a.6.6 0 0 0-.6-.6H9.378zm0 3.57a.6.6 0 0 0-.6.6v.586a.6.6 0 0 0 .6.6h8.044a.6.6 0 0 0 .6-.6v-.585a.6.6 0 0 0-.6-.6H9.378zm0 3.572a.6.6 0 0 0-.6.6v.586a.6.6 0 0 0 .6.6h4.578a.6.6 0 0 0 .6-.6v-.586a.6.6 0 0 0-.6-.6H9.378z"
                            fill-rule="evenodd"
                        ></path>
                    </svg>
                    <span>最新专题</span>
                    <find-list :list-data="thisData"/>
                    <el-button @click="onLoadMore" round style="margin:0 auto;;display:block;">查看更多内容>></el-button>
                </h3>
            </el-main>
            <el-aside width="300px">
                <we-right/>
            </el-aside>
        </el-container>
    </div>
</template>
<script>
import findList from 'components/content/find/findList'
import weRight from 'components/content/weright/weRight'
import {getFindData} from '@/network/all'
export default {
    name:"Find",
    components:{
        findList,
        weRight
    },
    data(){
        return {
            findData:[],
            index:1,
            initIndex:4,
            thisData:[]
        }
    },
    created(){
        this.isgetFindData()
    },
    methods:{
        isgetFindData(){
            getFindData().then(res=>{
                this.findData = res.data;
                for(let i = 0; i < this.initIndex; i++){
                    this.thisData.push(this.findData[i])
                }
            })
        },
        onLoadMore(){
            let temporary=[];
            this.index++;
            if(this.index * this.initIndex-1 < this.findData.length){
                for(let i = 0; i < this.index * this.initIndex; i++){
                    temporary.push(this.findData[i]);
                }
                this.thisData = temporary;
            }else{
                this.$message({
                    message: "mock数据有限",
                    type: "warning"
                });
            }
            
        }
    }
}
</script>
<style scoped>
    .find{
        margin-top:56px;
    }
    .el-container {
        margin: 0 auto;
        padding: 20px 0;
        width: 1000px;
    }
    .el-container .el-main h3 span{
        font-size: 25px;
        vertical-align: top;
    }
    .el-container .el-main{
        padding:0 20px;
    }
    .find svg {
        fill: #0084ff;
    }
</style>