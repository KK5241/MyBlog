import Vue from "vue";
import VueRouter from 'vue-router'
import title from '@/utils/setTitle'
if(!window.VueRouter){
    Vue.use(VueRouter)
}

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
}
const router = new VueRouter({
    mode: 'history',
    routes: [{
            name: "Home",
            path: '/',
            component: ()=>import('@/views/HomeFi.vue'),
            meta: {
                title: '首页'
            }
        },
        {
            name: "About",
            path: '/about',
            component: ()=>import('@/views/AboutFi.vue'),
            meta: {
                title: '关于我'
            }
        },
        {
            name: "Blog",
            path: '/blog',
            component: ()=>import('@/views/BlogFi.vue'),
            meta: {
                title: '文章'
            }
        },
        {
            name: "BlogDetail",
            path: '/blog/:id',
            component: ()=>import('@/views/BlogDetail.vue'),
            meta: {
                title: '文章详情'
            }
        },
        {
            name: "BlogList",
            path: '/blog/cate/:category',
            component: ()=>import('@/views/BlogFi.vue'),
            meta: {
                title: '文章'
            }
        },
        {
            name: "Project",
            path: '/project',
            component: ()=>import('@/views/ProjectFi.vue'),
            meta: {
                title: '项目&效果'
            }
        },
    ]
})

router.afterEach((to)=>{
    title.setTitle(to.meta.title)
})

export default router