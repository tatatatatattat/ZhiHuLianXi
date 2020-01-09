<template>
    <div class="special">
        <div class="spec-banner">
            <div class="title-box">
                <h1>
                    <img src="@/assets/logo.84666bea.png" alt="知乎专栏">
                </h1>
                <p class="zh-banner-intro">随心写作，自由表达</p>
                <a href="javascript:;" class="btn">开始写文章</a>
                <div></div>
                <a href="javascript:;" class="duit">申请开通专栏 ></a>
            </div>
        </div>
        <div class="spec-masgbox">
            <p class="title">专栏 · 发现</p>
            <div class="specal-list">
                <special-item class="specal-item" v-for="(item,index) in openData" :key="index">
                    <div class="img-box">
                        <img :src="item.image_url" alt="">
                    </div>
                    <h3>{{item.title}}</h3>
                    <p class="intro">{{item.intro}}</p>
                    <div class="info-box">
                        <span class="frist">{{item.followers}}人关注</span><span>{{item.articles_count}}篇文章</span>
                    </div>
                </special-item> 
            </div>
            <div class="btn-box">
                <a href="javascript:;" @click="btnClick"><span class="icon"></span>换一换</a>
            </div>
        </div>
        <div class="floor">
            <h3>在知乎创作</h3>
            <div class="btn-box">
                <a href="javascript:;">申请专栏</a>
            </div>
            <p>© 2019 知乎 · 知乎专栏 · 知乎圆桌·发现 · 移动应用 · 使用机构帐号登录 · 联系我们 · 来知乎工作</p>
        </div>
    </div>
</template>
<script>
import specialItem from 'components/content/special/specialItem'
import { getSpecialData } from '@/network/all'
export default {
    name:"Specials",
    components:{
        specialItem
    },
    data(){
        return {
            allData:[],
            openData:[],
            index:1
        }
    },
    created(){
        this.getSpecialsData()
    },
    methods:{
        getSpecialsData(){
            getSpecialData().then(res=>{
                this.allData = res.data;
                for(let i = 0; i < 8; i++){
                   this.openData.push(this.allData[i])
                }
            })
        },
        btnClick(){
            this.index++
            var start= this.index*8 - 8;
            var end = this.index*8;
            if(end-1<this.allData.length){
                this.openData = this.allData.slice(start,end);
            }else{
                this.openData = this.allData.slice(start);
                this.index = 0;
            }
            
        }
    }
}
</script>
<style scoped>
    .special{
        margin-top:56px;
    }
    .spec-banner{
        position: relative;
        height:470px;
        width:100%;
        background:url('~@/assets/patterns.png') no-repeat center center;
    }
    .spec-banner::before{
        content:'';
        position:absolute;
        width:100%;
        height:100%;
        background:url('~@/assets/bg@2x.033e5b2d.png');
        background-size:20px 450px;
        z-index:0;
    }
    .spec-banner .title-box{
        padding-top:150px;
        text-align:center;
        position:relative;
    }
    .spec-banner h1{
        width:129px;
        height:179px;
        margin:0 auto;
    }
    .spec-banner .title-box .zh-banner-intro{
        font-size:18px;
        letter-spacing:1em;
        font-weight: 500;
        padding:10px 0;
    }
    .spec-banner .title-box .btn{
        display:inline-block;
        padding:10px 20px;
        border:1px solid #000;
        color:#333333;
        text-decoration: none;
        margin-top:24px;
        border-radius:2px;
    }
    .spec-banner .title-box .duit{
        color:#11a668;
        font-size:14px;
        display:inline-block;
        padding-top:10px;
        font-weight:bold;
        text-decoration:none;
    }
    .special .spec-masgbox{
        margin:48px auto 0;
        width:888px;
    }
    .spec-masgbox .title{
        font-size:14px;
        text-align:center;
        font-weight:700;
        margin:16px 0;
    }
    .specal-list{
        display:flex;
        flex-wrap: wrap;
    }
    .specal-item{
        width:25%;
        text-align:center;
    }
    .specal-list .img-box{
        height:48px;
        width:48px;
        border-radius:50%;
        overflow: hidden;
        margin:0 auto 10px;
    }
    .specal-item h3{
        overflow: hidden;
        text-overflow: ellipsis;
        white-space:nowrap;
    }
    .specal-item .info-box{
        display:flex;
        justify-content: center;
    }
    .specal-item  .intro{
        font-size:14px;
        color:#8a8888;
        height:42px;
        margin-top:5px;
    }
    .specal-item .info-box span{
        font-size:14px;
        color:#8a8888;
        padding:0px 5px;
        margin:2px 0;
        line-height:14px;
    }
    .specal-item .info-box span.frist{
        border-right:1px solid #8a8888;
    }
    .spec-masgbox>.btn-box{
        text-align:center;
        margin-top:20px;
    }
    .spec-masgbox>.btn-box a{
        display: inline-block;
        padding:8px 16px;
        border:1px solid #000;
        border-radius:2px;
        color:#000;
        text-decoration:none;
    }
    .spec-masgbox>.btn-box a .icon{
        height:15px;
        width:15px;
        display:inline-block;
        vertical-align: middle;
        background:url('~@/assets/shuaxin.png')no-repeat center center/100% 100%;
        margin-right:5px;
    }
    .floor{
        margin-top:30px;
        padding-top:132px;
        text-align:center;
    }
    .floor h3{
        font-size:18px;
        font-weight: 300;
        padding:26px 0;
        border-top:1px solid #97ffd8;
        border-bottom:1px solid #97ffd8;
        width:345px;
        margin:0 auto 30px;
        letter-spacing:15px;
    }
    .floor .btn-box a{
        display:inline-block;
        padding:8px 16px;
        border:1px solid #000;
        border-radius:3px;
        color:#000;
        text-decoration:none;
    }
    .floor>p{
        font-size:14px;
        padding:40px;
        color:#888;
    }
</style>