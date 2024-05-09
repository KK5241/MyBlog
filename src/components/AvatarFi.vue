<template>
  <img class="avatar-img"
  :src="url" :style="{
    width:size +'px',
    height:size + 'px'
  }"
  >
</template>

<script>
export default {
  props:{
    url:{
      type:String,
      require:true
    },
    size:Number
  }
}
</script>

<style scoped>
.avatar-img{
  /* object-fit: cove; */
  display: block;
  border-radius: 50%;
}
</style>