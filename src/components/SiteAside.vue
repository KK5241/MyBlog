<template>
  <div class="side-aside-container">
    <template v-if="data">
        <AvatarFi :url="data.avatar"
        :size="150" class="avatar"></AvatarFi>
        <h1 class="title">{{data.siteTitle}}</h1>
        <MenuFiVue></MenuFiVue>
        <ContactFi></ContactFi>
        <p class="footer">{{data.icp}}</p>
    </template>
  </div>
</template>

<script>
import AvatarFi from './AvatarFi.vue';
import MenuFiVue from './MenuFi.vue';
import ContactFi from './ContactFi.vue';
import { mapState } from 'vuex';
export default {
    computed:mapState('setting',['data']),
    components:{
        AvatarFi,
        MenuFiVue,
        ContactFi
    },
}
</script>

<style lang="less" scoped>
.side-aside-container {
    width: 100%;
    height: 100%;
    background-color: black;
    overflow: hidden;
    .avatar {
        margin: 10px auto;
    }   
    .footer {
        font-size: 12px;
        color: #2b2a2a;
        text-align: center;
    }
    .title {
        color: rgba(255, 255, 255, 0.759);
        font-size: 24px;
        text-align: center ;
        margin-top: 15px;
    }
}

</style>