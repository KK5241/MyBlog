<template>
  <div class="blog-container">
    <LayoutFi>
      <div class="bloglist">
        <BlogList></BlogList>
      </div>
        <template #right>
          <div class="blogcategory">
            <BlogCategory></BlogCategory>
          </div>
        </template>
    </LayoutFi>
  </div>
</template>

<script>
import LayoutFi from '@/components/LayoutFi.vue'
import BlogCategory from './BlogCategory.vue'
import BlogList from './BlogList.vue'
export default {
  components:{
    LayoutFi,
    BlogList,
    BlogCategory
  },

}

</script>

<style lang="less" scoped>
.blog-container {
  width: 100%;
  height: 100%;
  .bloglist {
    height: 100%;
  }
}
.blogcategory {
  position: relative;
  height: 100%;
}

</style>