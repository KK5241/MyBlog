<template>
  <div class="project-container">
    <div v-for="item in data" :key="item.id" class="project-item" v-loading="isLoading">
      <a
        :href="
          item.url
        "
        :target="item.url ? '_blank' : '_self'"
      >
        <img class="thumb" :src="item.thumb" style="width:150px;height:150px" />
      </a>
      <div class="info">
        <h2>
          <a
            :href="
              item.url
            "
            :target="item.url ? '_blank' : '_self'"
          >
            {{ item.name }}
          </a>
        </h2>
        <p v-for="(desc, i) in item.description" :key="i">
          {{ desc }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
  created(){
    this.$store.dispatch('project/getProject')
  },
  computed:{
    ...mapState('project',['isLoading','data']),
  }
}
</script> 

<style lang="less" scoped>
.project-container {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  padding: 20px;
  position: relative;
  overflow-y: auto;
  scroll-behavior: smooth;
}
.project-item {
  background-color: rgb(244, 244, 242);
  transition: 0.5s;
  padding: 20px;
  display: flex;
  margin-bottom: 20px;
  &:hover {
    box-shadow: -1px 1px 5px #000;
    transform: scale(1.01) translate(3px, -3px);
    color: inherit;
  }
  .thumb {
    width: 250px;
    min-height: 150px;
    flex: 0 0 auto;
    object-fit: cover;
    border-radius: 5px;
    margin-right: 15px;
  }
  .info {
    line-height: 1.7;
    flex: 1 1 auto;
    h2 {
      margin: 0;
    }
  }
  .github {
    font-size: 14px;
    color: #6b9eee;
  }
}
</style>