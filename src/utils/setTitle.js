var title = ''
var subtitle = ''
//设置网站标题 利用路由守卫设置文章主标题，利用vuex设置网站副标题
function setT(){
    if(!title && !subtitle){
        document.title = '加载中'
    }else if (title && !subtitle){
        document.title = title
    }else if(title && subtitle){
        document.title = `${title} | ${subtitle}`
    }
}

export default {
    setTitle(tit) {
        title = tit
        setT()
    },
    setSubTitle(tit){
        subtitle = tit
        setT()
    }
}