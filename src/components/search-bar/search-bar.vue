<template>
	<div class="search-bar">
		<div class="select-time">
			<div class="item start">
				<div class="name">住&nbsp;</div>
				<div class="date">{{ formatMouthDay(startDate) }}</div>
			</div>
			<div class="item end">
				<div class="name">离&nbsp;</div>
				<div class="date">{{ formatMouthDay(endDate) }}</div>
			</div>
		</div>
		<div class="content">
			<div class="keyword">关键字/位置/民宿</div>
		</div>
		<div class="right">
			<i class="icon-search"></i>
		</div>
	</div>
</template>

<script setup>
import { storeToRefs } from "pinia";
import useMainStore from "@/stores/modules/main";
import { formatMouthDay } from "@/utils/format_date";

const mainStore = useMainStore();
const { startDate, endDate } = storeToRefs(mainStore);
</script>

<style lang="scss" scoped>
.search-bar {
	display: flex;
	padding: 10px;
	background-color: #f1f4f5;
	box-sizing: border-box;
	font-size: 12px;
	align-items: center;

	.select-time {
		display: flex;
		flex-direction: column;
		padding-right: 5px;
		border-right: 2px solid #fff;

		.item {
			display: flex;
		}
	}
	.content {
		display: flex;
		margin-left: 5px;
	}
}
</style>
