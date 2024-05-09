<template>
    <div class="ImageLoader-container">
        <img :src="placeholder"  class="box1" :style="{opacity:opacity,transition:`${duration}ms`}">
        <img :src="src" alt=""  @load="load" >
    </div>
</template>

<script>
export default {
    data(){
        return{
            opacity:1
        }
    },
    props:{
        src:{
            type:String,
            require:true,
        },
        placeholder:{
            type:String,
            require:true
        },
        duration:{
            type:Number,
            default:5000
        }
    },
    methods:{
        load(){
            this.opacity = 0
        }
    }
}
</script>

<style scoped lang="less">
img {
    display: block;
    object-fit: cover;
    position: absolute;
    width: 100%;
    height: 100%;
    &.box1 {
        z-index: 9;
    }
}
.ImageLoader-container {
    position: relative;
    width: 100%;
    height: 100%;
}
</style>