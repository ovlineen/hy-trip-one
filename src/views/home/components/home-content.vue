<template>
	<div class="home-content">
		<h2 class="title">热门精选</h2>
		<div class="list">
			<template v-for="item in homelist" :key="item.data.houseId">
				<home-item-v9
					v-if="item.discoveryContentType === 9"
					:item-data="item.data"
					@click="itemClick(item.data)"
				>
					{{ item.data.houseName }}
				</home-item-v9>
				<home-item-v3
					v-else-if="item.discoveryContentType === 3"
					:item-data="item.data"
					@click="itemClick(item.data)"
				>
					{{ item.data.houseName }}
				</home-item-v3>
			</template>
		</div>
	</div>
</template>

<script setup>
import { storeToRefs } from "pinia";
import useHomeStore from "@/stores/modules/home";
import homeItemV9 from "@/components/home-item/house-item-v9.vue";
import homeItemV3 from "@/components/home-item/house-item-v3.vue";
import { useRouter } from "vue-router";

const homeStore = useHomeStore();
const { homelist } = storeToRefs(homeStore);
const router = useRouter();

const itemClick = item => {
	if (item === null) {
		return alert("抱歉，只有前二十条有数据");
	}
	router.push("/detail/" + item.houseId);
};
</script>

<style lang="scss" scoped>
.home-content {
	padding: 0 10px;
	.title {
		margin-bottom: 10px;
	}
}
.list {
	display: flex;
	flex-wrap: wrap;
}
</style>
