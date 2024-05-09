<template>
  <div class="blog-comment-container">
    <MessageFi @submit="handleSubmit"></MessageFi>
    <div class="title">
      <span>评论列表</span>
      <span class="subtitle" >({{ dataList.total }})</span>
    </div>
    <DataList :data="dataList.rows"></DataList>
    <div class="loading" v-loading="isLoading"></div>
  </div>
</template>

<script>
import MessageFi from '@/components/MessageFi.vue'
import DataList from '@/components/DataList.vue'
import {fentchData} from '@/mixins/fentchData'
import {getComment, postComment} from '@/api/blog'
export default {
  mixins:[fentchData(null)],
  data(){
    return {
      page:1,
      limit:10
    }
  },
  created(){
    this.$bus.$on('scroll',this.handleScroll)
  },
  methods:{
    fentch(){
      return getComment(this.page,this.limit)
    },
    //处理评论组件传过来的数据，并返回结果
    async handleSubmit(formData,callback){
      const resp = await postComment({
        blogId:this.$route.params.id,
        ...formData
      })
      this.dataList.rows.unshift(resp)
      this.dataList.total += 1
      callback("评论成功")
    },
    async fentchMore(){
      if (!this.hasMore) {
        // 没有更多啦
        return;
      }
      this.isLoading = true
      const resp = await this.fentch(++this.page,this.limit)
      this.dataList.total = resp.total
      this.dataList.rows = this.dataList.rows.concat(resp.rows)
      this.isLoading = false
    },
    handleScroll(dom){
      if(!dom) return
      if(this.isLoading === true) return 
      const range = 100
      if(dom.scrollHeight - (dom.scrollTop+dom.clientHeight) < range){
        this.fentchMore()
      }
    }
  },
  components:{
    MessageFi,
    DataList
  }
}
</script>

<style lang="less" scoped>
.blog-comment-container {
  position: relative;
  margin: 20px 35px;
  .title {
    margin:20px 0;
    .subtitle {
      margin-left: 5px;
      font-size: 14px;
    }
  }
}
.loading {
  position: relative;
  height: 100px;
}

</style>