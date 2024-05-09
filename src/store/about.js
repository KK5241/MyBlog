import {getAbout} from '@/api/about'
export default {
    namespaced:true,
    state:{
        isloading:false,
        data:null
    },
    mutations:{
        setAbout(state,payload){
            state.data = payload
        },
        setLoading(state,payload){
            state.isloading = payload
        }
    },
    actions:{
        async getAbout(ctx){
            if(ctx.state.data) return 
            ctx.commit('setLoading',true)
            const result = await getAbout()
            ctx.commit('setAbout',result)
            ctx.commit('setLoading',false)
        }
    }
}