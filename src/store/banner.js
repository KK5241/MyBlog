import { getBanner } from "@/api/banner"
//利用vuex优化请求，首页图片请求写入vuex，只会在第一次请求时加载信息，后面vuex里面有信息就不会重复请求
export default {
    namespaced:true,
    state:{
        isLoading:false,
        data:[]
    },
    mutations:{
        setLoading(state,payload){
            state.isLoading = payload
        },
        setData(state,payload){
            state.data = payload
        }
    },
    actions:{
        async getBanner(ctx){
            if(ctx.state.data.length !== 0) return 
            ctx.commit('setLoading',true)
            const result = await getBanner()
            ctx.commit('setData',result)
            ctx.commit('setLoading',false)
        }
    }
}