<template>
  <div class="blog-content-container" ref="content">
    <h1>{{ data.title }}</h1>
    <div class="aside" v-show="data.title">
      <span>日期：{{ data.createDate }}</span>
      <span>浏览：{{ data.scanNumber }}</span>
      <a href="#">评论：{{ data.commentNumber }}</a>
    </div>
    <div class="content markdown-body" v-html="data.htmlContent"></div>
  </div>
</template>

<script>
import "highlight.js/styles/github.css";
export default {
  props:{
    data:{
      type:Object,
      require:true
    }
  },
  
}
</script>

<style lang="less" scoped>
@import '~@/style/markdown.css';
@import '~@/style/var.less';

.blog-content-container {
  margin: 0 15px;
  .markdown-body {
    padding:20px ;
  }
}
.aside {
  font-size: 14px;
  color: rgb(169, 167, 167);
  span {
    margin-right: 10px;
  }
  a {
    font-size: 14px;
    color: rgb(169, 167, 167);
    margin-right: 10px;
    &:hover {
      color: @primary;

    }
  }

}

</style>