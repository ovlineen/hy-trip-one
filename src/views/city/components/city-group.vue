<template>
	<div class="city-list">
		<van-index-bar :sticky="false">
			<van-index-anchor index="热门" />
			<div class="hot">
				<template
					v-for="(item, index) in cityData.hotCities"
					:key="index"
				>
					<div class="item" @click="selectIten(item)">
						{{ item.cityName }}
					</div>
				</template>
			</div>
      <!-- 侧边栏字母和标题对不上暂时没有解决办法，已知的办法都会报错。可能是依赖版本问题 -->
			<template v-for="item in cityData.cities">
				<van-index-anchor :index="item.group" />
				<template v-for="(iten, inden) in item.cities" :key="inden">
					<van-cell
						:title="iten.cityName"
						@click="selectIten(iten)"
					/>
				</template>
			</template>
		</van-index-bar>
	</div>
</template>

<script setup>
import { computed } from "vue";
import useCityStore from "@/stores/modules/city";
import { useRouter } from "vue-router";

const props = defineProps({
	cityData: {
		type: Object,
		default: () => ({}),
	},
});

const cityStore = useCityStore();
const router = useRouter();
const selectIten = item => {
	cityStore.currentCity = item;
	router.back();
};
</script>

<style lang="scss" scoped>
.hot {
	display: flex;
	flex-wrap: wrap;
	justify-content: space-evenly;
	padding: 10px;
	padding-right: 20px;

	.item {
		width: 70px;
		height: 28px;
		text-align: center;
		border-radius: 14px;
		line-height: 28px;
		font-size: 12px;
		background-color: #fff4ec;
		margin: 6px;
	}
}
</style>
