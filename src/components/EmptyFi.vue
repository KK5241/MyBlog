<template>
 <div class="empty-container">
    <IconFi url="empty"/>
    <span>{{ text }}</span>
 </div>
</template>

<script>
import IconFi from './IconFi.vue'
export default {
    props:{
        text:{
            type:String,
            default:'无数据'
        }
    },
    components:{
        IconFi
    }
}
</script>

<style lang="less" scoped>
@import '../style/mimax.less';
@import '../style/var.less';
.empty-container {
    text-align: center;
    .self-center();
    font-size:18px;
    color: @gray;
    
}
.icon-container {
    display: block;
    font-size: 72px;
    margin-bottom: 10px;
}
</style>
