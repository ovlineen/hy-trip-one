


// export default function useScroll(elRef) {
//     //     // 1.当我们离开该页面时候，要移除该事件 生命周期
//     //     // 2.为避免重复代码，要拆分为工具文件
//     //     // 3.对该函数做节流处理
//     let el = window;
//     const isReachBottom = ref(false);
//     const clientHeight = ref(0);
//     const scrollTop = ref(0);
//     const scrollHeight = ref(0);

//     const scrollListenerHandler = throttle(() => {
//         console.log('正在滚动');
//         if (el === window) {
//             console.log('正在滚动');
//             clientHeight.value = document.documentElement.clientHeight;
//             scrollTop.value = Math.ceil(document.documentElement.scrollTop);
//             scrollHeight.value = document.documentElement.scrollHeight;
//         } else {
//             console.log('正在滚动');
//             clientHeight.value = el.clientHeight;
//             scrollTop.value = Math.ceil(el.scrollTop);
//             scrollHeight.value = el.scrollHeight;
//             console.log(clientHeight.value, scrollTop.value, scrollHeight.value);
//         }


//         if (clientHeight.value + scrollTop.value >= scrollHeight.value) {
//             console.log('滚动到底部了');
//             isReachBottom.value = true;
//         }
//     }, 100);

//     onMounted(() => {
//         if (elRef) {
//             el = elRef.value;
//         }
//         el.addEventListener('scroll', scrollListenerHandler);
//     });

//     onUnmounted(() => {
//         el.removeEventListener('scroll', scrollListenerHandler);
//     });

//     return { isReachBottom, clientHeight, scrollTop, scrollHeight };
// }


/*  困扰了我一天的问题，昨晚想了好久。才发现不是这里的逻辑问题。
直到今天上午也在想怎么做，连书包扣都没有扣，就吃了顿饭糊口。跑回宿舍做了。
-- 2024年5月9日 
*/
import { ref, onMounted, onUnmounted } from 'vue';
import throttle from 'lodash/throttle';

export default function useScroll(elRef) {
    let el = window;

    const isReachBottom = ref(false);
    const clientHeight = ref(0);
    const scrollTop = ref(0);
    const scrollHeight = ref(0);

    const scrollListenerHandler = throttle(() => {
        if (el === window) {
            clientHeight.value = document.documentElement.clientHeight;
            scrollTop.value = Math.ceil(document.documentElement.scrollTop);
            scrollHeight.value = document.documentElement.scrollHeight;
        } else {
            clientHeight.value = el.clientHeight;
            scrollTop.value = Math.ceil(el.scrollTop); // 滚动距离可能会有小数点，必须要向上取整;
            scrollHeight.value = el.scrollHeight;
        }

        if (clientHeight.value + scrollTop.value >= scrollHeight.value) {
            console.log('滚动到底部了');
            isReachBottom.value = true;
        }
    }, 100);

    onMounted(() => {
        if (elRef && elRef.value) {
            el = elRef.value;
        }
        el.addEventListener('scroll', scrollListenerHandler);
    });

    onUnmounted(() => {
        el.removeEventListener('scroll', scrollListenerHandler);
    });

    return { isReachBottom, clientHeight, scrollTop, scrollHeight };
}



// import { onMounted, onUnmounted, ref } from 'vue';
// // import { throttle } from 'underscore';

// // console.log(throttle)


// // export default function useScroll(reachBottomCB) {
// //   const scrollListenerHandler = () => {
// //     const clientHeight = document.documentElement.clientHeight
// //     const scrollTop = document.documentElement.scrollTop
// //     const scrollHeight = document.documentElement.scrollHeight
// //     console.log("-------")
// //     if (clientHeight + scrollTop >= scrollHeight) {
// //       console.log("滚动到底部了")
// //       if (reachBottomCB) reachBottomCB()
// //     }
// //   }

// //   onMounted(() => {
// //     window.addEventListener("scroll", scrollListenerHandler)
// //   })

// //   onUnmounted(() => {
// //     window.removeEventListener("scroll", scrollListenerHandler)
// //   })
// // }

// export default function useScroll(elRef) {
//     let el = window;

//     const isReachBottom = ref(false);

//     const clientHeight = ref(0);
//     const scrollTop = ref(0);
//     const scrollHeight = ref(0);

//     // 防抖/节流
//     const scrollListenerHandler = throttle(() => {
//         if (el === window) {
//             clientHeight.value = document.documentElement.clientHeight;
//             scrollTop.value = document.documentElement.scrollTop;
//             scrollHeight.value = document.documentElement.scrollHeight;
//         } else {
//             clientHeight.value = el.clientHeight;
//             scrollTop.value = el.scrollTop;
//             scrollHeight.value = el.scrollHeight;
//         }
//         if (clientHeight.value + scrollTop.value >= scrollHeight.value) {
//             console.log("滚动到底部了");
//             isReachBottom.value = true;
//         }
//     }, 100);

//     onMounted(() => {
//         if (elRef) el = elRef.value;
//         el.addEventListener("scroll", scrollListenerHandler);
//     });

//     onUnmounted(() => {
//         el.removeEventListener("scroll", scrollListenerHandler);
//     });

//     return { isReachBottom, clientHeight, scrollTop, scrollHeight };
// }
