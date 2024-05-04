<template>
	<div class="house-item">
		<div class="item-inner">
			<div class="cover">
				<img :src="itemData.image.url" />
			</div>
			<div class="infos">
				<p class="infos-summary">{{ itemData.summaryText }}</p>
				<van-text-ellipsis
					:content="itemData.houseName"
					rows="3"
					class="infos-name"
				/>
				<div class="evaluate-price">
					<van-rate
						class="evaluate"
						v-model="commentScore"
						size="15px"
						gutter="1px"
						color="#fff"
						void-color="#fff"
						:count="5"
					/>
					<div class="new-price">￥{{ itemData.finalPrice }}</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
import { ref } from "vue";
const props = defineProps({
	itemData: {
		type: Object,
		defaults: () => ({}),
	},
});

let commentScore = ref(0);
commentScore.value = +props.itemData?.commentScore;
</script>

<style lang="scss" scoped>
.house-item {
	position: relative;
	width: 50%;
	display: flex;
	box-sizing: border-box;
	border-radius: 5px;
	padding: 3px;
	overflow: hidden;

	.item-inner {
		.cover {
			img {
				width: 100%;
				height: 100%;
			}
		}
	}
	.infos {
		position: absolute;
		bottom: 12px;
		left: 0;
		width: 100%;
		overflow: hidden;
		padding: 0 10px;
		box-sizing: border-box;
		color: #fff;

		.infos-summary {
			font-size: 0.75rem;
			margin: 0.1875rem 0;
		}
		.infos-name {
			font-size: 0.875rem;
			line-height: 15px;
		}
		.evaluate-price {
			display: flex;
			justify-content: space-between;
			.new-price {
				font-size: 14px;
			}
		}
	}
}
</style>
