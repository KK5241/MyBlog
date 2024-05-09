<template>
  <div class="Contact-container" v-if='data'>
    <ul>
        <li>
            <a src="#"><IconFi url="github"></IconFi><span :style="{cursor:'pointer'}">{{data.githubName}}</span></a>
        </li>
        <li>
            <a src="#"><IconFi url="mail"></IconFi><span :style="{cursor:'pointer'}">{{data.mail}}</span></a>
        </li>
        <li class="qq">
            <a src="#">
                <IconFi url="qq"></IconFi>
                <span :style="{cursor:'pointer'}">{{data.qq}}</span>
            </a>
            <div class="pop">
                    <img :src="data.qqQrCode" style="width: 80px;height: 80px;" alt="">
            </div>
        </li>
        <li class="weixin">
            <a src="#"><IconFi url="weixin"></IconFi><span :style="{cursor:'pointer'}">{{data.weixin}}</span></a>
            <div class="pop">
                    <img :src="data.weixinQrCode" style="width: 80px;height: 80px;" alt="">
            </div>
        </li>
    </ul>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import IconFi from './IconFi.vue';
export default {
    data(){
        return {
            display:false
        }
    },
    components:{
        IconFi
    },
    computed:mapState('setting',['data']),
}
</script>

<style lang="less" scoped>
@import '../style/var.less';
.Contact-container {
    width: 100%;
    color: white;
    ul {
        padding: 10px;
    }
    li {
        height: 45px;
    }
    a {
        color: @gray;
        display: flex;
        &:hover{
            color: @primary;
        }
        margin-left: 5px;
        span {
            display: flex;
            margin-left: 10px;
            align-content: center;
            flex-wrap: wrap;
        }
    }
    .pop {
            position: absolute;
            bottom: 35px;
            left: 45px;
            transform: scaleY(0);
            transition: 0.5s;
            transform-origin: center bottom;
        }
   .qq,.weixin {
    position: relative;
        &:hover {
            .pop {
                transform: scaleY(1);

            }
        }
   }
}
.icon-container {
    font-size: 30px;
}
</style>

