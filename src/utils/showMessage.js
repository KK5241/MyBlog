import getComponentRootDom from "./getComponentRootDom";
import IconFi from "@/components/IconFi.vue";
import style from './showMessage.module.less'

/**
 * 
 * @param {string} content 提示框内容
 * @param {string} type  提示框类型  success info warn error
 * @param {Number} duration  几秒消失
 * @param {HTMLElemet} container 所在容器
 */
export default function (opcation={}){
    const content = opcation.content || ''
    const type = opcation.type || ''
    const duration = opcation.duration || 2000
    const container = opcation.container || document.body
    const div = document.createElement('div')
    const element = getComponentRootDom(IconFi,{
        url:type
    })

    div.innerHTML = `<span>${element.outerHTML}</span><div>${content}</div>`
    if(getComputedStyle(container).position === 'static') container.style.position = 'relative'
    div.className = `${style.message} ${style[`message-${type}`]}`
    container.appendChild(div)
    
    div.clientHeight   //重排 先渲染一次页面
    
    div.style.opacity = 1
    div.style.transform = `translate(-50%,-50%)`

    setTimeout(() => {
        div.style.opacity = 0
        div.style.transform = `translate(-50%,-50%) translateY(-15px)`
        div.addEventListener('transitionend',function(){
            div.remove
            if(opcation.callback) opcation.callback()
        },{once:true})
    }, duration);
}