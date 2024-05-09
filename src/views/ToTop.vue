<template>
  <div class="to-top-container" v-show="show" @click="setScroll">
    TOP
  </div>
</template>

<script>
export default {
    data(){
        return {
            show:false
        }
    },
    mounted(){
        this.$bus.$on('scroll',this.handleScroll)
    },
    beforeDestroy(){
        this.$bus.$off('scroll',this.handleScroll)
    },
    methods:{
        handleScroll(dom){
            if(!dom){
                this.show = false
                return 
            }
            if(dom.scrollTop > 500){
                this.show = true
            }else{
                this.show = false
            }
        },
        setScroll(){
            this.$bus.$emit('setScroll',0)
        }
    }
}
</script>

<style>

.to-top-container{
    position: fixed;
    right: 50px;
    cursor:pointer;
    bottom: 50px;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    color: white;
    line-height: 50px;
    text-align: center;
    z-index: 99;
    background-color: blue;
}
</style>