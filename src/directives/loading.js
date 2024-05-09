import loadingsrc from '../assets/loading.svg'
import styles from './loadingCss.module.less'

function getLoadingImage(el) {
    return el.querySelector("img[data-role=loading]");
  }
  
  function createLoadingImg() {
    const img = document.createElement("img");
    img.dataset.role = "loading";
    img.src = loadingsrc;
    img.className = styles.load;
    return img;
  }
  
  // 导出指令的配置对象
  export default function(el, binding) {
    // 根据 binding.value 的值，决定创建或删除img元素
    const curImg = getLoadingImage(el);
    if (binding.value) {
      if (!curImg) {
        const img = createLoadingImg();
        el.appendChild(img);
      }
    } else {
      if (curImg) {
        curImg.remove();
      }
    }
  }
