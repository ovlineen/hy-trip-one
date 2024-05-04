import { onMounted, onUnmounted, onActivated, onDeactivated } from 'vue';
export default function useScroll(reachBottomCB) {
    // 1.当我们离开该页面时候，要移除该事件 生命周期
    // 2.为避免重复代码，要拆分为工具文件
    // 3.对该函数做节流处理
    const scrollListenerHandler = window.addEventListener("scroll", () => {
        const clientHeight = document.documentElement.clientHeight;
        const scrollTop = document.documentElement.scrollTop;
        const scrollHeight = document.documentElement.scrollHeight;

        if (clientHeight + scrollTop >= scrollHeight) {
            if (reachBottomCB) reachBottomCB();
        }
    });

    // 挂载事件
    onMounted(() => {
        window.addEventListener("scroll", scrollListenerHandler);
    });

    // 卸载事件
    onUnmounted(() => {
        window.removeEventListener("scroll", scrollListenerHandler);
        window.removeEventListener("scroll", scrollListenerHandler);
    });

    // 持久化
    onActivated(() => {
        window.addEventListener("scroll", scrollListenerHandler);
    });

    // 持久化卸载
    onDeactivated(() => {
        window.removeEventListener("scroll", scrollListenerHandler);
    });
}