<template>
  <div class="blog-TOC-container">
    <TwoMenu :menuArr="newdata" @select="handleClick"></TwoMenu>
  </div>
</template>

<script>
import TwoMenu from './TwoMenu.vue';

export default {
  data(){
    return {
      anchor:''
    }
  },
  components: { TwoMenu },
  props:{
    data:{
      type:Array,
      require:true
    }
  },
  computed:{
    //给数据添加isSelected属性
    newdata(){
      const add = (data = [])=>{
        return data.map(item=>({
            ...item,
            isSelected:item.anchor === this.anchor,
            children:add(item.children)
        }))
      }
     return add(this.data)
    },
    //获取每个标题的DOM节点并存储到数组中
    doms(){
      const doms = []
      const addDoms = (data = [])=>{
        for(const item of data){
          doms.push(document.getElementById(item.anchor))
          if(item.children && item.children.length > 0){
            addDoms(item.children)
          }
        }
      }
      addDoms(this.data)
      return doms
    }
  },
  created(){
    this.handleScroll1 = this.debounce(this.handleScroll,100)
    this.$bus.$on('scroll',this.handleScroll1)
  },
  destroyed(){
    this.$bus.$off('scroll',this.handleScroll1)
  },
  methods:{
    handleClick(item){
      location.hash=item.anchor
    },

    //处理滚动，获取每个标题到视口顶部的距离 如果在范围内容就设置选中
    handleScroll(){
      const range = 100
      for(const item of this.doms){
        if(item){
          const top = item.getBoundingClientRect().top
          if(top < range){
            this.anchor = item.id
          }
        }
      }
    },

    //防抖 避免频繁触发事件
    debounce(fn,duration){
      let timer = null
      return function(){
        clearTimeout(timer)
        timer = setTimeout(() => {
          fn()
        }, duration);
      }
    }
  }
}
</script>

<style>

</style>