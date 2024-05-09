<template>
    <!-- 组件递归渲染多级菜单 -->
  <ul class="two-menu-container">
    <!-- 一定要阻止冒泡不然会点击二级菜单触发一级菜单的点击事件 -->
    <li v-for="(item,index) in menuArr" :key="index" @click.stop="handleClick(item)">
        <span :class="{active:item.isSelected}">{{ item.name }}</span>
        <span v-show="item.articleCount" :class="{active:item.isSelected}" class="articlecount">{{ item.articleCount }}篇</span>
        <TwoMenu :menuArr="item.children" @select="handleClick"></TwoMenu>
    </li>
  </ul>
</template>

<script>
export default {
    name:'TwoMenu',
    props:['menuArr'],
    methods:{
      handleClick(item){
        this.$emit('select',item)
      }
    },
}
</script>

<style lang="less" scoped>
@import '~@/style/var.less';
.two-menu-container {
    font-size: 15px;
    margin: 0;
    padding: 5px;
    .two-menu-container {
      margin-left:15px
    }
    li {
      cursor: pointer;
      min-height: 30px;
      line-height: 30px;
    }
    .articlecount {
      color: rgb(153, 153, 153);
      font-size: 14px;
      margin-left: 10px;
    }
    .active{
      color: @warn;
      font-weight: bold;
    }
}

</style>