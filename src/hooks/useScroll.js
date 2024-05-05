import { ref, onMounted, onUnmounted } from 'vue';
import _ from 'lodash';
export default function useScroll() {
    // 1.当我们离开该页面时候，要移除该事件 生命周期
    // 2.为避免重复代码，要拆分为工具文件
    // 3.对该函数做节流处理
    const isReachBottom = ref(false);
    const clientHeight = ref(0);
    const scrollTop = ref(0);
    const scrollHeight = ref(0);

    const scrollListenerHandler = _.throttle((() => {
        clientHeight.value = document.documentElement.clientHeight;
        scrollTop.value = document.documentElement.scrollTop;
        scrollHeight.value = document.documentElement.scrollHeight;
        console.log('正在滚动');
        if (clientHeight.value + scrollTop.value >= scrollHeight.value) {
            isReachBottom.value = true;
        }
    }), 100);

    // 挂载事件
    onMounted(() => {
        window.addEventListener("scroll", scrollListenerHandler);
    });

    // 卸载事件
    onUnmounted(() => {
        window.removeEventListener("scroll", scrollListenerHandler);
    });

    return { isReachBottom, clientHeight, scrollTop, scrollHeight };
}