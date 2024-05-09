<template>
  <div class="about-container" v-loading="isLoading || !srcLoad">
      <iframe v-if="data"  class="content"  :src="data" frameborder="0"></iframe>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  data(){
    return {
      srcLoad:false
    }
  },
  computed:mapState('about',['isLoading','data']),
  async created(){
    await this.$store.dispatch('about/getAbout')
    if(this.data) this.srcLoad = true
  }
}
</script>

<style lang="less" scoped>
.about-container {
  width: 100%;
  height: 100%;
  position: relative;
  .content {
    width: 100%;
    height: 100%;
  }
}

</style>