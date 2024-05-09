<template>
  <div class="blog-list-container" ref="container" v-loading="isLoading">
    <ul>
      <li v-for="item in dataList.row" :key="item.id">
        <div class="thumb" v-if="item.thumb">
          <router-link
            :to="{
              name: 'BlogDetail',
              params: {
                id:item.id,
              }
            }"
          >
            <img v-lazy="item.thumb" :data-src="item.thumb" :title="item.title" />
          </router-link>
        </div>
        <div class="main">
          <RouterLink :to="{
            name:'BlogDetail',
            params:{
              id:item.id
            }
          }">
            <h2>{{ item.title }}</h2>
          </RouterLink>
          <div class="aside">
            <span>日期：{{ item.createDate }}</span>
            <span>浏览：{{ item.scanNumber }}</span>
            <span>评论：{{ item.commentNumber }}</span>
            <RouterLink :to="{
              name:'BlogList',
              params:{
                category:item.category.id
              }
            }" class="">{{ item.category.name }}
            </RouterLink>
          </div>
          <div class="desc">
            {{ item.description }}
          </div>
        </div>
      </li>
    </ul>
    <!-- 分页放到这里 -->
    <PagerFi
      @pageChange="handlePageChange"
      :current="currentPage"
      :total="dataList.total"
      v-show="!isLoading"
    ></PagerFi>
  </div>
</template>
<script>
import { fentchData } from "@/mixins/fentchData";
import { getBlog } from "@/api/blog";
import PagerFi from "@/components/PagerFi.vue";
export default {
  data() {
    return {
      currentPage: 1,
    };
  },
  computed: {
    RouteInfo() {
      return {
        category: this.$route.params.category | -1,
        page: this.$route.query.page | 1,
        limit: this.$route.query.limit | 10,
      };
    },
  },
  //监测属性 检测url是否发生变化变化就重新获取数据
  watch: {
    async $route() {
      this.isLoading = true;
      this.$refs.container.scrollTop = 0;
      this.dataList = await this.fentch();
      this.currentPage = this.RouteInfo.page;
      this.isLoading = false;
    },
  },
  mixins: [fentchData({})],
  components: {
    PagerFi,
  },
  created(){
    this.$bus.$on('setScroll',this.setScrool)
  },
  mounted(){
    this.$refs.container.addEventListener('scroll',this.handleScroll)
  },
  beforeDestroy(){
    this.$bus.$emit('scroll')
    this.$refs.container.removeEventListener('scroll',this.handleScroll)
  },
  methods: {
    setScrool(top){
      this.$refs.container.scrollTop = top
    },
    handleScroll(){
      this.$bus.$emit('scroll',this.$refs.container)
    },
    fentch() {
      return getBlog(
        this.RouteInfo.page,
        this.RouteInfo.limit,
        this.RouteInfo.category
      );
    },
    handlePageChange(n) {
      //处理点击页码实现页面url改变
      console.log(this.RouteInfo.limit);
      if (this.RouteInfo.category !== -1) {
        this.$router.push({
          name: "BlogList",
          params: {
            category: this.RouteInfo.category,
          },
          query: {
            page: n,
            limit: this.RouteInfo.limit,
          },
        });
      } else {
        this.$router.push({
          name: "Blog",
          query: {
            page: n,
            limit: this.RouteInfo.limit,
          },
        });
      }
      this.currentPage = n;
    },
  },
};
</script>
<style scoped lang="less">
@import "~@/style/var.less";
.blog-list-container {
  line-height: 1.7;
  position: relative;
  padding: 20px;
  overflow-y: auto;
  width: 100%;
  height: 100%;
  scroll-behavior: smooth;
  box-sizing: border-box;
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }
}
li {
  display: flex;
  padding: 15px 0;
  border-bottom: 1px solid @gray;
  .thumb {
    flex: 0 0 auto;
    margin-right: 15px;
    img {
      display: block;
      max-width: 200px;
      border-radius: 5px;
    }
  }
  .main {
    flex: 1 1 auto;
    h2 {
      margin: 0;
    }
  }
  .aside {
    font-size: 12px;
    color: @gray;
    span {
      margin-right: 15px;
    }
  }
  .desc {
    margin: 15px 0;
    font-size: 14px;
  }
}
</style>
  