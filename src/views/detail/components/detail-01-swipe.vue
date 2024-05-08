<template>
	<div class="swipe">
		<van-swipe class="swipe" :autoplay="3000" indicator-color="white">
			<template v-for="(item, index) in swipeData" :key="index">
				<van-swipe-item class="swipe-item"
					><img :src="item.url" alt="" />
				</van-swipe-item>
			</template>
			<template #indicator="{ active }">
				<div class="indicator">
					<template v-for="(value, key) in swipeGroup" :key="key">
						<div
							class="indicator-item"
							:class="{
								active:
									swipeData[active]?.enumPictureCategory ==
									key,
							}"
						>
							{{ getName(value[0].title) }}
							<span
								v-show="
									swipeData[active]?.enumPictureCategory ==
									key
								"
								>{{
									getCategoryIndex(swipeData[active]) + 1
								}}/{{ value.length }}</span
							>
						</div>
					</template>
				</div>
			</template>
		</van-swipe>
	</div>
</template>

<script setup>
const props = defineProps({
	swipeData: {
		type: Array,
		defaults: () => [],
	},
});

// 轮播图数据分类
const swipeGroup = {};
for (const item of props.swipeData) {
	let valueArray = swipeGroup[item.enumPictureCategory];
	if (!valueArray) {
		valueArray = [];
		swipeGroup[item.enumPictureCategory] = valueArray;
	}
	valueArray.push(item);
}

// 轮播的信息逻辑处理
const getName = name => {
	return name.replace("：", "").replace("【", "").replace("】", "");
};

const getCategoryIndex = item => {
	const valueArray = swipeGroup[item?.enumPictureCategory];
	return valueArray?.findIndex(data => data === item);
};
</script>

<style lang="scss" scoped>
.swipe {
	.swipe-item {
		img {
			width: 100%;
		}
	}
	.indicator {
		position: absolute;
		right: 5px;
		bottom: 5px;
		padding: 2px 5px;
		font-size: 12px;
		background-color: rgba(0, 0, 0, 0.3);
		color: #fff;
		display: flex;
		margin-bottom: -2px;
		margin-right: -5px;
		.indicator-item {
			margin: 0 5px;
			&.active {
				padding: 0 3px;
				border-radius: 5px;
				background-color: #fff;
				color: #333;
			}
		}
	}
}
</style>
