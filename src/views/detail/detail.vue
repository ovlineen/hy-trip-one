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
				:facility-data="dynamicModule.facilityModule.houseFacility"
			></detail-facility>
			<detail-landlord
				:landlord-data="dynamicModule.landlordModule"
			></detail-landlord>
			<detail-comment
				:comment-data="dynamicModule.commentModule"
			></detail-comment>
			<detail-notice :notice-data="dynamicModule.rulesModule">
			</detail-notice>
		</div>
		<detail-map
			:map-data="dynamicModule.positionModule"
			v-if="dynamicModule"
		></detail-map>
		<detail-intro :intro-data="introductionModule"></detail-intro>
	</div>
	<footer class="footer">
		<img class="ensure" src="@/assets/img/detail/icon_ensure.png" alt="" />
		<p class="text">项目基于 Vue3+ Pinia+ Vue Router 开发</p>
		<p class="text">
			项目由 Bugu 用 <span style="color: red">❤</span> 开发
		</p>
	</footer>
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
import DetailMap from "./components/detail-07-map.vue";
import DetailIntro from "./components/detail-08-intro.vue";

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
const dynamicModule = computed(() => detailData.value?.mainPart?.dynamicModule);
const introductionModule = computed(
	() => detailData.value?.mainPart?.introductionModule
);
</script>

<style lang="scss" scoped>
.footer {
	display: flex;
	justify-content: center;
	flex-direction: column;
	align-items: center;
	margin-top: 30px;
	margin-bottom: 100px;

	.ensure {
		width: 123px;
	}
	.text {
		margin-top: 5px;
		font-size: 12px;
		color: #9b9b9b;
	}
}
</style>
