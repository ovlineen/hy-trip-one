<template>
	<div class="detail">
		<div class="detail top-page">
			<van-nav-bar
				title="房屋详情"
				left-text="返回"
				left-arrow
				@click-left="onClickLeft"
			/>
			<div class="detail-main" v-if="mainPart">
				<detail-swipe
					:swipe-data="mainPart.topModule.housePicture.housePics"
				></detail-swipe>
				<detail-infos :infos-data="mainPart.topModule"></detail-infos>
				<detail-facility
					:facility-data="
						mainPart.dynamicModule.facilityModule.houseFacility
							.houseFacilitys
					"
				></detail-facility>
				<detail-landlord
					:landlord-data="mainPart.dynamicModule.landlordModule"
				></detail-landlord>
			</div>
		</div>
	</div>
</template>

<script setup>
import { computed } from "vue";
import { useRoute, useRouter } from "vue-router";
import { storeToRefs } from "pinia";
import useDetailStore from "@/stores/modules/detail";
import DetailSwipe from "./components/detail-01-swipe.vue";
import DetailInfos from "./components/detail-02-infos.vue";
import DetailLandlord from "./components/detail-04-landlord.vue";
import DetailFacility from "./components/detail-03-facility.vue";

const router = useRouter();
const onClickLeft = () => {
	router.back();
};

// 发送网络请求
const route = useRoute();
const detailStore = useDetailStore();
detailStore.fatchDetailData(route.params.id);
const { detailData } = storeToRefs(detailStore);

const mainPart = computed(() => detailData.value.mainPart);
</script>

<style lang="scss" scoped>
.detail {
	height: 1500px;
}
</style>
