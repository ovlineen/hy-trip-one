<template>
	<div class="price">
		<div class="chat">
			<img
				src="https://pic.tujia.com/upload/festatic/mp/ndetail_chart.png"
				alt=""
			/>
			和房主谈
			<span class="line"></span>
		</div>
		<div class="content">
			<span class="name">{{ priceData?.productPrice }}</span>
			<span class="text">/晚</span>
		</div>
		<div class="confirm">
			<img
				class="confirm-shand"
				src="https://pic.tujia.com/upload/festatic/mp/detailv2_shand.png"
				alt=""
			/>优选价预订
		</div>
	</div>
</template>

<script setup>
defineProps({
	priceData: {
		type: Object,
		defaults: () => ({}),
	},
});
</script>

<style lang="scss" scoped>
.price {
	position: fixed;
	bottom: 0;
	left: 0;
	right: 0;
	width: 100%;
	height: 60px;
	background-color: #fff;
	z-index: 222;
	display: flex;

	.chat {
		position: relative;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		width: 20%;
		height: 100%;
		padding: 10px 0;
		font-size: 14px;
		color: #666;

		img {
			width: 17px;
			height: 17px;
			margin-bottom: 3px;
		}

		.line {
			position: absolute;
			right: 0;
			top: 50%;
			transform: translateY(-50%);
			display: inline-block;
			width: 1px;
			height: 70%;
			background-color: #666;
		}
	}
	.content {
		display: flex;
		align-items: center;
		width: 40%;
		height: 100%;
		margin-left: 10px;
		.name {
			font-size: 20px;
			color: #ff9645;
			font-weight: 700;
		}
		.text {
			margin-top: 5px;
			font-size: 12px;
			color: #999;
		}
	}
	.confirm {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 40%;
		height: 100%;
		background-color: #fb9e2f;
		font-size: 18px;
		color: #fff;
		.confirm-shand {
			width: 14px;
			height: 18px;
			margin-right: 5px;
		}
	}
}
</style>
