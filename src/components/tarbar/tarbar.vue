<template>
	<div class="tab-bar">
		<div
			class="tab-bar-item"
			v-for="(item, index) in tarbarData"
			:key="index"
		>
			<router-link
				:to="item.path"
				:class="{ active: currentIndex === index }"
				@click="itemClick(index)"
			>
				<img
					v-if="currentIndex !== index"
					:src="getAssetURL(item.iconImage)"
					class="tabbar-img"
					alt=""
				/>
				<img
					v-else
					:src="getAssetURL(item.iconImageActive)"
					class="tabbar-img"
					alt=""
				/>
				<span>{{ item.text }}</span>
			</router-link>
		</div>
	</div>
</template>

<script setup>
import { ref, watch } from "vue";
import tarbarData from "@/assets/data/tabbar";
import { getAssetURL } from "@/utils/load_assets";
import { useRoute } from "vue-router";

const route = useRoute();
const currentIndex = ref(0);

watch(route, newValue => {
	const index = tarbarData.findIndex(item => item.path === newValue.path);
	if (newValue === -1) return;
	currentIndex.value = index;
});
const itemClick = index => {
	currentIndex.value = index;
};
</script>

<style lang="scss" scoped>
.tab-bar {
	display: flex;
	position: fixed;
	bottom: 0;
	left: 0;
	width: 100%;
	height: 3.125rem;
	border-top: 1px solid #ccc;
	background-color: #fff;
	z-index: 520;

	.tab-bar-item {
		flex: 1;

		a {
			display: flex;
			width: 100%;
			height: 100%;
			align-items: center;
			flex-direction: column;
			justify-content: center;
			text-decoration: none;
			color: #000;
			&.active {
				color: $primaryColor;
			}
		}
		.tabbar-img {
			width: 1.75rem;
			height: 1.375rem;
		}
	}
}
</style>
