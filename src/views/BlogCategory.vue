<template>
  <div class="blog-category-container" >
    <h2 v-show="!isLoading">文章分类</h2>
    <TwoMenu :menuArr="list" @select="handleSelect" v-show="!isLoading"></TwoMenu>
  </div>
</template>

<script>
import { getBlogType } from '@/api/blog';
import { fentchData } from '@/mixins/fentchData';
import TwoMenu from './TwoMenu.vue';
export default {
  mixins:[fentchData([])],
  methods:{
    fentch(){
      return getBlogType()
    },
    //点击跳转实现的方法-->菜单组件抛出事件（参数点击元素） 父组件获取元素属性  通过路由的push方法改变url 从而一系列改变
    handleSelect(item){
      console.log(item);
      const query = {
        limit:this.limit,
        page:1
      }
      if(item.id == -1){
        this.$router.push({
          name:'Blog',
          query:query
        })
      }else{
          this.$router.push({
            name:'BlogList',
            query:query,
            params:{
              category:item.id
            }
          })
      }
    }
  },
  computed:{
    //获取url信息
    categoryId(){
      return this.$route.params.category || -1
    },
    page(){
      return this.$route.query.page || 1
    },
    limit(){
      return this.$route.query.limit || 10
    },
    //重写数据列表
    list(){
      const articleCount = this.dataList.reduce((a,b)=>a + b.articleCount,0)
      const listall = [
        {id:-1 ,name:'全部', articleCount:articleCount  },
        ...this.dataList
      ]
      const newlistAll = listall.map((item)=>{
        return {
          ...item,
          isSelected:this.categoryId == item.id
        }
      })
      return newlistAll
    } 
  },
  components:{
    TwoMenu,
  }
}
</script>

<style lang="less" scoped>

.blog-category-container {
  width: 300px;
  height: 100%;
  padding: 15px;
  box-sizing: border-box;
  color: rgb(39, 38, 38);
  overflow-y:scroll;
  font-size: 16px;
  h2 {
    margin: 5px;
    letter-spacing: 3px;
  }
  ul{
    padding: 5px;
    li {
      height: 35px; 
      .num {
        margin-left: 10px;
        color: grey;
        font-size: 13px;
      }
    }
  }
}
</style>