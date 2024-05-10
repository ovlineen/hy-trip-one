<template>
	<div class="home" ref="homeRef">
		<home-nav-bar></home-nav-bar>
		<div class="banner">
			<img src="@/assets/img/home/banner.webp" alt="" />
		</div>
		<home-search-box :hot-suggests="hotSuggests"></home-search-box>
		<home-categories></home-categories>
		<div class="home-search-bar" v-show="isShowSearchBar">
			<search-bar></search-bar>
		</div>
		<home-content></home-content>
	</div>
</template>

<script setup>
import { computed, onActivated, watch, ref } from "vue";
import { storeToRefs } from "pinia";
import useScroll from "@/hooks/useScroll";
import homeNavBar from "./components/home-nav-bar.vue";
import useHomeStore from "@/stores/modules/home";
import homeSearchBox from "../home/components/home-search-box.vue";
import homeCategories from "../home/components/home-categories.vue";
import homeContent from "./components/home-content.vue";
import searchBar from "@/components/search-bar/search-bar.vue";

// 获取状态管理库数据
const homeStore = useHomeStore();

// 网络请求
homeStore.fetchHotSuggestData();
homeStore.fetchCategoriesData();
homeStore.fetchHomeListData();

// 结构出 Home 数据
const { hotSuggests, homelist } = storeToRefs(homeStore);

// 无感获取页面数据 侦听Windows滚动
const homeRef = ref();
const { isReachBottom, scrollTop } = useScroll(homeRef);
watch(isReachBottom, newValue => {
	if (newValue) {
		homeStore.fetchHomeListData();
		isReachBottom.value = false;
	}
});

onActivated(() => {
	homeRef?.value.scrollTo({
		top: scrollTop.value,
	});
});

// 搜索模块
const isShowSearchBar = computed(() => {
	return scrollTop.value > 450;
});
</script>

<style lang="scss" scoped>
.home {
	height: 100vh;
	margin-bottom: 3.75rem;
	background-color: #f5f7f9;
	overflow: auto;
}
.banner {
	img {
		width: 100%;
	}
}
.home-search-bar {
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	padding: 16px;
	background-color: #fff;
	z-index: 2;
	box-sizing: border-box;
}
</style>
