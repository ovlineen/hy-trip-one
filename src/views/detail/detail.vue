<template>
	<div class="detail top-page" ref="detailRef">
		<van-tabs
			class="tabs"
			v-model:active="active"
			v-show="showTabControl"
			@click-tab="tabClick(active)"
		>
			<template v-for="(item, index) in titles" :key="index">
				<van-tab :title="item"></van-tab>
			</template>
		</van-tabs>
		<van-nav-bar
			title="房屋详情"
			left-text="返回"
			left-arrow
			@click-left="onClickLeft"
		/>
		<!-- 为了防止 Scorll 组件更新数据影响到该组件 需要将设置为 v-memo="[mainPart]" -->
		<div class="detail-main" v-if="mainPart" v-memo="[mainPart]">
			<detail-swipe
				:swipe-data="mainPart.topModule.housePicture.housePics"
				v-if="mainPart.topModule.housePicture.housePics"
			></detail-swipe>
			<detail-infos :infos-data="mainPart.topModule"></detail-infos>
			<detail-facility
				:facility-data="dynamicModule.facilityModule.houseFacility"
				:ref="getSectionRef"
			></detail-facility>
			<detail-landlord
				:landlord-data="dynamicModule?.landlordModule"
				:ref="getSectionRef"
			></detail-landlord>
			<detail-comment
				:comment-data="dynamicModule.commentModule"
				:ref="getSectionRef"
			></detail-comment>
			<detail-notice
				:notice-data="dynamicModule.rulesModule"
				:ref="getSectionRef"
			>
			</detail-notice>
		</div>
		<detail-map
			:map-data="dynamicModule.positionModule"
			v-if="dynamicModule"
			:ref="getSectionRef"
		></detail-map>
		<detail-intro :intro-data="introductionModule"></detail-intro>
		<footer class="footer">
			<img
				class="ensure"
				src="@/assets/img/detail/icon_ensure.png"
				alt=""
			/>
			<p class="text">项目基于 Vue3 + Pinia + Vant UI 开发</p>
			<p class="text">
				项目由 Bugu 用 <span style="color: red">❤</span> 开发
			</p>
			<p>coderwhy</p>
		</footer>
	</div>
</template>

<script setup>
import { ref, computed, onBeforeUpdate } from "vue";
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

// 滚动监听
const active = ref();
import useScroll from "@/hooks/useScroll";
const detailRef = ref();
const { scrollTop } = useScroll(detailRef);
const showTabControl = computed(() => {
	return scrollTop.value >= 200;
});

const titles = ["房屋设施", "房主信息", "房屋评论", "预定须知", "位置周边"];

const sectionEls = [];
const getSectionRef = value => {
	sectionEls.push(value.$el);
};

// // 组件切换前的逻辑处理 将组件设置为异步组件，点击前将索引切换为我点击的下标，以解决我们 line 线不能正常显示的问题
// const tbsBeforeChange = index => {
// 	active.value = index;
// };

const tabClick = index => {
	console.log(active.value);
	return detailRef.value.scrollTo({
		top: sectionEls[index].offsetTop - 45,
		behavior: "smooth",
	});
};
</script>

<style lang="scss" scoped>
.detail {
	overflow: scroll;
	height: 100vh; // 父元素一定要100vh，否则监听不到页面滚动
	.tabs {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		background-color: #fff;
		z-index: 11;
	}
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
}

.van-tabs__line {
	display: none;
}
</style>
