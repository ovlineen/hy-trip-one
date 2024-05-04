<template>
	<div class="city">
		<div class="city-top">
			<!-- 搜索 -->
			<van-search
				v-model="searchValue"
				placeholder="请输入搜索关键词"
				shape="round"
				show-action
				@cancel="cancelClick"
			/>
			<!-- Tab栏 -->
			<van-tabs v-model:active="tabActive" color="#ff9854">
				<template v-for="(value, key, index) in allCities" :key="key">
					<van-tab :title="value.title" :name="key"></van-tab>
				</template>
			</van-tabs>
		</div>
		<div class="city-content">
			<city-group :cityData="currentGroup" />
		</div>
	</div>
</template>

<script setup>
import { computed, ref } from "vue";
import { useRouter } from "vue-router";
import { storeToRefs } from "pinia";
import useCityStore from "@/stores/modules/city";
import cityGroup from "./components/city-group.vue";

const searchValue = ref("");
const router = useRouter();

// 搜索框逻辑
const cancelClick = () => {
	router.back();
};

// Tab 切换
const tabActive = ref(0);

// 请求Tab数据
const cityStore = useCityStore();
cityStore.fetchAllCityData();
const { allCities } = storeToRefs(cityStore);

const currentGroup = computed(() => allCities.value[tabActive.value]);
</script>

<style lang="scss" scoped>
.city {
	.city-content {
		height: calc(100vh - 98px);
		overflow-y: auto;
	}
}
</style>
