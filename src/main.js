import Vue from 'vue'
import "./eventBus.js"
import App from './App.vue'
import './style/global.less'
import router from './router'
import './mock'
import './api/banner'
import showMessage from './utils/showMessage'
import loading from './directives/loading'
import lazy from './directives/lazy.js'
import store from '@/store/index.js'

Vue.prototype.$showMessage = showMessage
Vue.directive('loading', loading)
Vue.directive('lazy',lazy)

store.dispatch('setting/getSetting')
const vm = new Vue({
    store,
    router,
    render: h => h(App),
    // beforeCreate(){
    //     Vue.prototype.$bus = this;
    // }
}).$mount('#app')
// console.log(vm);

console.log(vm);
