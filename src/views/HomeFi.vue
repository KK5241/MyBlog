<template>
    <div class="home-container" ref="container"
    v-loading="isLoading" 
    @wheel="handleWheel" 
    @transitionend="handleTransitionend">
        <!-- /轮播图 -->
        <ul class="curo-container"  :style="{marginTop:marginTop}">
            <li v-for="item in data" :key="item.id">
                <CarouselFi 
                :midImg="item.midImg" 
                :bigImg="item.bigImg" 
                :title="item.title" 
                :description="item.description">
                </CarouselFi>
            </li>
        </ul>
        <!-- 上按钮 -->
        <div class="icon arrowUp" v-show="index >= 1" @click="index--">
            <IconFi url="arrowUp"></IconFi>
        </div>
        <!-- 下按钮 -->
        <div class="icon arrowDown" v-show="index < data.length - 1" @click="index++">
            <IconFi url="arrowDown"></IconFi>
        </div>
        <div class="pilot">
            <ul>
            <li v-for="(item,i) in data" :key="item.id" :class="{active:index === i}" @click="index = i"></li>
            </ul>
        </div>
    </div>
</template>

<script>
import IconFi from '@/components/IconFi.vue';
import CarouselFi from './CarouselFi.vue';
import { mapState } from 'vuex';
export default {
    data(){
        return {
            index:0,
            height:0,
            switch:false,
            a:{},
        }
    },
    created(){
        this.$store.dispatch('banner/getBanner')
        
    },
    mounted(){
        console.log(this.data);
        this.height = this.$refs.container.clientHeight
        window.addEventListener('resize',this.handleResize)
        this.$on('event1', this.handle)
        
    },
    beforeDestroy(){
        window.removeEventListener('resize',this.handleResize)
    },
    computed:{
        marginTop(){
            return -this.index * this.height +'px'
        },
        ...mapState('banner',['isLoading','data'])
    },
    components:{
        IconFi,
        CarouselFi
    },
    methods:{
        // 利用滚轮事件和过渡完成事件做属相轮播图
        handleWheel(e){
            if(this.switch) return
            if(e.deltaY < 0 && this.index > 0){
                this.switch = true
                this.index--
            }else if(e.deltaY > 0 && this.index < this.data.length - 1){
                this.switch = true
                this.index++
            }
        },
        handleTransitionend(){
            this.switch = false
        },
        handleResize(){
            this.height = this.$refs.container.clientHeight
        },
        handle(){
            console.log(111);
        }
    },  
}
</script>

<style lang="less" scoped>

.home-container {
    width: 100%;
    height: 100%;
    // 测试
    // width: 600px;
    // height: 400px;
    position: relative;
    overflow: hidden;
    .curo-container {
        margin: 0;
        padding: 0;
        width: 100%;
        height: 100%;
        position: absolute;
        transition: 0.3s;
        li {
            overflow: hidden;
            width: 100%;
            height: 100%;
        }
    }
    .icon {
        z-index:999;
        cursor: pointer;
        color: rgb(190, 187, 187);
        position: absolute;
        left: 50%;
        &.arrowUp {
            top: 10px;
            animation: jump-up 2s infinite;
        }
        &.arrowDown {
            bottom: 15px;
            animation: jump-down 2s infinite;
        }
    }
    @keyframes jump-up {
        0%{
            transform:translate(-50%,8px)
        }
        50%{
            transform:translate(-50%,-8px)
        }
        100%{
            transform:translate(-50%,8px)
        }
    }
    @keyframes jump-down {
        0%{ 
            transform:translate(-50%,-8px)
        }
        50%{
            transform:translate(-50%,8px)
        }
        100%{
            transform:translate(-50%,-8px)
        }
    }
    .icon-container {
    font-size: 35px;
    }
    .pilot {
        ul{
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            right: 20px;
            z-index: 999;
            li {
                cursor: pointer;
                width: 10px;
                height: 10px;
                background-color: rgb(91, 89, 89);
                border-radius: 50%;
                box-sizing: border-box;
                margin-bottom: 8px;
                border: 1.5px solid white;
                &.active {
                    background-color: white;
                }
            }
        }
        
    }
}
</style>


