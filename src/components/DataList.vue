<template>
  <div class="data-list-container">
    <div class="message" v-for="(item) in data" :key="item.id">
      <div class="info">
        <AvatarFi :url="item.avatar" :size="40"></AvatarFi>
        <div class="container">
          <div class="name">{{ item.nickname }}</div>
          <div class="content">{{ item.content }}</div>
        </div>
      </div>
      <hr>
    </div>
  </div>
</template>

<script>
import AvatarFi from "./AvatarFi.vue";

export default {
  props: {
    data: {
      type: Array,
      require: true,
    },
  },
  components: {
    AvatarFi,
  },
  mounted() {
    console.log(this.data);
  },
};
</script>

<style lang="less" scoped>
@import '~@/style/var.less';

.info {
  margin-top: 15px;
  display: flex;
  margin-bottom: 25px;
}
.name {
  color: @success;
  font-weight: bold;
  margin-bottom: 10px;
}
.container {
  margin-left: 13px;
}
  hr {
    border: none; 
    height: 0.5px;
    background-color: lighten(@gray,20%);
  }
</style>