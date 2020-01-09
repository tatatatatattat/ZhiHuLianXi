<template>
    <div class="special-item">
        <div class="item-box">
            <slot></slot>
            <div class="btn-box">
                <a href="javascript:;">进入专栏</a>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:'specialItem'
}
</script>
<style scoped>
    .special-item .item-box{
        margin:0 8px 16px;
        padding:26px 16px;
        background:#fff;
    }
    .btn-box{
        margin-top:10px;
        text-align:center;

    }
    .btn-box a{
        text-decoration:none;
        color:#11a668;
        border:1px solid #11a668;
        padding:8px 16px;
        font-size:14px;
        display:inline-block;
        border-radius:3px;
    }
</style>