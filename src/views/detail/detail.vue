<template>
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
				"
			></detail-facility>
			<detail-landlord
				:landlord-data="mainPart.dynamicModule.landlordModule"
			></detail-landlord>
			<detail-comment
				:comment-data="mainPart.dynamicModule.commentModule"
			></detail-comment>
			<detail-notice :notice-data="mainPart.dynamicModule.rulesModule">
			</detail-notice>
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
import DetailFacility from "./components/detail-03-facility.vue";
import DetailLandlord from "./components/detail-04-landlord.vue";
import DetailComment from "./components/detail-05-comment.vue";
import DetailNotice from "./components/detail-06-notice.vue";

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
	height: 2000px;
}
</style>
