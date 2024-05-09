<template>
  <div class="carousel-container" ref="carousel">
        <div class="carousel-img" ref="img" :style="{left:x,top:y}"  @mousemove="handleMouseMove" @mouseleave="handleMouseLeave">
            <ImageLoader :src="bigImg" :placeholder="midImg"></ImageLoader>
        </div>
        <div class="title" ref="title">
            {{ title }}
        </div>  
        <div class="description" ref="description">
            {{ description }}
        </div>
  </div>
</template>

<script>
import ImageLoader from '@/components/ImageLoader.vue'

export default {
    data(){
        return {
            titleWidth:0,
            descWidth:0,
            carouselWidth:0,
            carouselHeight:0,
            imgWidth:0,
            imgHeight:0,
            x:0,
            y:0
        }
    },
    computed:{
        move(){
            return {
                left:- (this.imgWidth-this.carouselWidth) / 2 + 'px',
                top:-(this.imgHeight-this.carouselHeight) / 2 + 'px'
            }
        }
    },
    props:{
        midImg:{
            type:String,
            require:true
        },
        bigImg:{
            type:String,
            require:true
        },
        title:{
            type:String,
            require:true
        },
        description:{
            type:String,
            require:true
        }
    },
    components:{
        ImageLoader
    },
    mounted(){
        //处理文字效果
        this.titleWidth = this.$refs.title.clientWidth
        this.descWidth = this.$refs.description.clientWidth
        this.$refs.description.style.width = 0
        this.$refs.title.style.width = 0
        this.$refs.title.style.opacity = 1
        this.$refs.description.style.opacity = 1
        this.$refs.title.clientWidth
        this.$refs.description.style.width = this.descWidth + 'px'
        this.$refs.title.style.width = this.titleWidth + 'px'
        //获取图片和内容区大小
        this.carouselWidth = this.$refs.carousel.clientWidth
        this.carouselHeight = this.$refs.carousel.clientHeight
        this.imgWidth = this.$refs.img.clientWidth
        this.imgHeight = this.$refs.img.clientHeight
        
        //设置一开始图片的位置居中
        this.$refs.img.style.left = this.move.left
        this.$refs.img.style.top = this. move.top
    },
    methods:{
        //处理鼠标移动获取鼠标坐标并修改图片左、上移动距离
        handleMouseMove(e){
            //获取鼠标在内容区的坐标
            let x1 = e.clientX - this.$refs.carousel.getBoundingClientRect().left
            let y1 = e.clientY - this.$refs.carousel.getBoundingClientRect().top
            // console.log(y1);
            this.carouselWidth = this.$refs.carousel.clientWidth
            this.carouselHeight = this.$refs.carousel.clientHeight
            this.imgWidth = this.$refs.img.clientWidth
            this.imgHeight = this.$refs.img.clientHeight
            this.x = -(this.imgWidth-this.carouselWidth) * x1 / this.$refs.carousel.clientWidth +'px'
            this.y = -(this.imgHeight-this.carouselHeight) * y1 / this.$refs.carousel.clientHeight +'px'
        },
        handleMouseLeave(){
            this.$refs.img.style.left = this.move.left
            this.$refs.img.style.top = this. move.top
        }
    }
}
</script>

<style lang="less" scoped>

.carousel-container{
    //测试
    position: relative;
    width: 100%;
    height: 100%;
    letter-spacing: 6px;
    white-space: nowrap;
    .carousel-img {
        position: relative;;
        width: 110%;
        height: 110%;
        transition: 1s;
    }
    .title{
        overflow: hidden;
        position: absolute;
        color: azure;
        opacity: 0;
        top: calc(65% + 40px);
        left: 80px;
        font-size: 2em;
        font-weight: 550;
        transition: 1.5s 1s; 
    }
    .description {
        overflow: hidden;
        position: absolute;
        opacity: 0;
        color: azure;
        top: calc(65% + 100px);
        left: 80px;
        font-size: 1.3em;
        transition: 2.3s 2.3s;
    }
}
</style>