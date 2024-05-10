<template>
	<div class="categories">
		<template v-for="item in categories" :key="item.id">
			<div class="categories-item">
				<img class="itme-img" :src="item.pictureUrl" alt="" />
				<span class="item-text">{{ item.title }}</span>
			</div>
		</template>
	</div>
</template>

<script setup>
import useHomeStore from "../../../stores/modules/home";
import { storeToRefs } from "pinia";

const homeStore = useHomeStore();
const { categories } = storeToRefs(homeStore);
</script>

<style lang="scss" scoped>
.categories {
	display: flex;
	overflow-x: auto;
	margin-top: 0.625rem;
	margin-bottom: 15px;
	padding: 0 10px;
	scrollbar-width: none; /* Firefox */

	.categories-item {
		display: flex;
		flex-direction: column;
		flex-wrap: wrap;
		flex-shrink: 0;
		align-items: center;
		width: 4.375rem;

		.itme-img {
			width: 2rem;
			height: 2rem;
		}
	}
}
</style>
