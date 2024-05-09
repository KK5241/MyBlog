import logo from '@/assets/logo.png'

let imgs = []

function observe() {

    const observe = new IntersectionObserver((entries) => {
        entries.forEach(entery => {
            if (entery.isIntersecting) {
                const src = entery.target.getAttribute('data-src')
                entery.target.src = src
                observe.unobserve(entery.target)
            }
        })
    })
    imgs.forEach(img => {
        observe.observe(img.dom)
    })
}

export default {
    inserted(el) {
        el.src = logo
        imgs.push({
            dom: el
        })
        observe()
    },
    unbind(el) {
        imgs = imgs.filter(img => {
            img.dom !== el
        })
    }
}