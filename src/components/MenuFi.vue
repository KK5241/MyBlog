<template>
  <div class="menu-container">
    <ul>
        <li v-for="(n,i) in arr" :key="i">
            <router-link :to="{name:n.name}" active-class="active" :exact="n.exact">
                <div class="icon">
                <IconFi :url="n.icon"/>
                </div>
                <span>{{n.title}}</span>
            </router-link>
        </li>
    </ul>
  </div>
</template>

<script>
import IconFi from './IconFi.vue';
export default {
    data(){
        return{
            arr:[
                {
                    name:'Home',
                    title:'首页',
                    icon:'home',
                    exact:true
                },
                {
                    name:'Blog',
                    title:'文章',
                    icon:'blog',
                    exact:false
                },
                {
                    name:'About',
                    title:'关于我',
                    icon:'about',
                    exact:true
                },
                {
                    name:'Project',
                    title:'项目&效果',
                    icon:'code',
                    exact:true
                },
            ]
        }
    },
    components:{
        IconFi
    },

}
</script>

<style lang="less" scoped>
@import '../style/var.less';
.menu-container{
    margin-top: 30px;
    margin-bottom: 40px;
    font-size: 16px;
    ul {
        padding: 0;
        overflow: hidden;
    }
    li {
        a {
            padding-left: 40px;
            display: flex;
            color: @gray;
            &:hover {
                color: white;
            }
        }
        line-height: 40px;
        width: 100%;
        height: 40px;
        .icon {
            margin-right: 8px;
        }
        .active{
            background-color: #2d2d2d;
        }
    }

}
</style>