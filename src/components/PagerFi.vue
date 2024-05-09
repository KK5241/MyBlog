<template>
  <div class="pager-container" v-if="totalPage > 1">
     <a href="#" @click.prevent="pageChange(1)"  v-show="!(current === 1)">&lt;&lt;</a>
     <a href="#" @click.prevent="pageChange(n)" v-for="(n,i) in currentPage" :key="i" :class="{active: current === n}">{{ n }}</a>
     <a href="#" @click.prevent="pageChange(totalPage)" v-show="!(current === totalPage)">&gt;&gt;</a>
  </div>
</template>

<script>
export default {
  props:{
    current:{
      type:Number,
      default:1
    },
    total:{
      type:Number,
      default:1000
    },
    visibleNumber:{
      type:Number,
      default:10
    },
    limit:{
      type:Number,
      default:10
    }
  },
  computed:{
    totalPage(){
      return Math.ceil(this.total / this.limit)
    },
    visibleMin(){
      let a = this.current - Math.floor(this.visibleNumber / 2)
      if(a < 1) a = 1
      return a
    },
    visibleMax(){
      let a = this.visibleMin + this.visibleNumber - 1
      if(a > this.totalPage) a = this.totalPage
      return a
    },
    currentPage(){
      let arr = []
      for(let i = this.visibleMin; i <= this.visibleMax; i ++) arr.push(i)
      return arr
    }
  },
  methods:{
    pageChange(newPage){
      this.$emit('pageChange',newPage)
    }
  }
}
</script>

<style lang="less" scoped>
@import '../style/var.less';
.pager-container {
  display: flex;
  justify-content: center;
  margin: 20px 0;
  a {
    margin: 0 6px;
    color: @primary;
    &.disabled {
      color: @lightWords;
      cursor: not-allowed;
    }
    &.active {
      font-weight: bold;
      color: @dark;
      cursor: default;
    }
  }
}

</style>