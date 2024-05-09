import vuex from 'vuex'
import Vue from 'vue'
import banner from './banner'
import setting from './setting'
import about from './about'
import project from './project'

Vue.use(vuex)

const store = new vuex.Store({
    modules:{
        banner,
        setting,
        about,
        project
    },
    strict:true
})
export default store
