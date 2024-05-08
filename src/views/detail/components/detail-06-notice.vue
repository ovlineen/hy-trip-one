<template>
	<detailSection></detailSection>
	<div class="notice">
		<template v-for="(item, index) in noticeData.orderRules" :key="index">
			<div class="item">
				<span class="title">{{ item.title }}</span>
				<span class="intro">{{ item.introduction }}</span>
			</div>
		</template>
	</div>
</template>

<script setup>
import { provide } from "vue";
provide("titletext", "预订须知");

defineProps({
	noticeData: {
		type: Object,
		defaults: () => ({}),
	},
});
</script>

<style lang="scss" scoped>
.notice {
	margin-top: 10px;
	.item {
		display: flex;
		margin: 10px;
		font-size: 12px;

		.title {
			width: 64px;
			color: #666;
		}

		.intro {
			flex: 1;
			color: #333;
		}
	}
}
</style>
