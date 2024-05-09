<template>
  <div class="app-container">
    <LayoutFi>
      <template #left>
          <div class="left">
            <SiteAside></SiteAside>
          </div>
      </template>
      <div class="main">
          <router-view></router-view>
      </div>
    </LayoutFi>
    <ToTop></ToTop>
  </div>
</template>

<script> 
import LayoutFi from './components/LayoutFi.vue'
import SiteAside from './components/SiteAside.vue'
import ToTop from './views/ToTop.vue'
export default {
  name: 'App',
  components: {
    LayoutFi,
    SiteAside,
    ToTop
  }
}
</script>

<style scoped lang="less">
.app-container {
  width: 100%;
  height: 100%;
  .left {
    width: 250px;
    height: 100%;
  }
  .main {
    height: 100%;
  }
  .right {
    width: 200px;
    height: 100%;
    background-color: black;
  }
}
</style>
