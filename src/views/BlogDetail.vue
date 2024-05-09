<template>
  <div class="blog-detail-container" >
    <LayoutFi>
        <div class="main" v-loading="isLoading" ref="content">
            <BlogContent :data="dataList" ></BlogContent>
            <BlogComment></BlogComment>
        </div>
        <template #right>
            <div class="right" v-loading="isLoading">
                <BlogTOC :data="dataList.toc"></BlogTOC>
            </div>
        </template>
    </LayoutFi>
  </div>
</template>

<script>
import { fentchData } from '@/mixins/fentchData'
import { getongBlog } from '@/api/blog'
import BlogComment from '@/views/BlogComment.vue'
import LayoutFi from '@/components/LayoutFi.vue'
import BlogContent from './BlogContent.vue'
import BlogTOC from './BlogTOC.vue'
import title from '@/utils/setTitle'

export default {
    mixins:[fentchData({})],
    computed:{
        id(){
            return this.$route.params.id
        },
    },
    mounted(){
    this.$bus.$on('setScroll',this.setScroll)
    this.$refs.content.addEventListener("scroll",this.handlescroll)
    },
    beforeDestroy(){
        this.$bus.$emit('scroll')
        this.$refs.content.removeEventListener("scroll",this.handlescroll)
    },
    methods:{
        //加载文章数据
        async fentch(){
           const result = await getongBlog(this.id)
           //设置网站主标题
           if(result){
            title.setTitle(result.title)
           }
           console.log("147",result.title);
           return result
        },
        handlescroll(){
            this.$bus.$emit('scroll',this.$refs.content)
        },
        setScroll(top){
            this.$refs.content.scrollTop = top
        }
    },
    components:{
        LayoutFi,
        BlogContent,
        BlogTOC,
        BlogComment
    },
    updated(){
        const hash = location.hash
        location.hash = ''
        setTimeout(() => {
            location.hash = hash
        }, 50);
    }
}
</script>

<style lang="less" scoped>
.blog-detail-container {
    position: relative; 
    width: 100%;
    height: 100%;
    
}
.main {
    scroll-behavior: smooth;
    overflow-x:hidden;
    overflow-y:auto;
    position: relative;
    width: 100%;
    height: 100%;
}
.right {
    overflow-y: scroll;
    width: 300px;
    position: relative;
    margin-left: 20px;
}

</style>