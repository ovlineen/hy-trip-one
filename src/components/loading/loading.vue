<template>
	<div class="loading" v-if="mainStore.isLoding">
		<div class="loading-bg">
			<img src="@/assets/img/home/full-screen-loading.gif" alt="" />
		</div>
	</div>
</template>

<script setup>
import { storeToRefs } from "pinia";
import useMainStore from "@/stores/modules/main";

const mainStore = useMainStore();
</script>

<style lang="scss" scoped>
.loading {
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	display: flex;
	justify-content: center;
	align-items: center;
	z-index: 222;
	background-color: rgba(0, 0, 0, 0.5);

	.loading-bg {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 6.5rem;
		height: 6.5rem;
		background: url(@/assets/img/home/loading-bg.png) 0 0 /100% 100%;
		img {
			width: 70px;
			height: 70px;
			margin-bottom: 10px;
		}
	}
}
</style>
