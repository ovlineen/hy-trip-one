<template>
	<div class="home">
		<home-nav-bar></home-nav-bar>
		<div class="banner">
			<img src="@/assets/img/home/banner.webp" alt="" />
		</div>
		<home-search-box :hot-suggests="hotSuggests"></home-search-box>
		<home-categories></home-categories>
		<home-content></home-content>
		<button @click="getClick">加载更多</button>
	</div>
</template>

<script setup>
import { storeToRefs } from "pinia";
import homeNavBar from "./components/home-nav-bar.vue";
import useHomeStore from "@/stores/modules/home";
import homeSearchBox from "../home/components/home-search-box.vue";
import homeCategories from "../home/components/home-categories.vue";
import homeContent from "./components/home-content.vue";

// 获取状态管理库数据
const homeStore = useHomeStore();

// 网络请求
homeStore.fetchHotSuggestData();
homeStore.fetchCategoriesData();
homeStore.fetchHomeListData();

// 结构出 Home 数据
const { hotSuggests, homelist } = storeToRefs(homeStore);

const getClick = () => {
	homeStore.fetchHomeListData();
};
</script>

<style lang="scss" scoped>
.home {
	overflow-y: auto;
	margin-bottom: 3.75rem;
	background-color: #f5f7f9;
}
.banner {
	img {
		width: 100%;
	}
}
</style>
