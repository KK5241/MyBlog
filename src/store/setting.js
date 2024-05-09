import { getSetting } from "@/api/setting"
import title from '@/utils/setTitle'
export default {
    namespaced:true,
    state:{
        data:null
    },
    mutations:{
        setData(state,payload){
            state.data = payload
        }
    },
    actions:{
        async getSetting(ctx){
            const result  = await getSetting()
            ctx.commit('setData',result)
            if(result.siteTitle){
                title.setSubTitle(result.siteTitle)
            }
        }
    }
}