<template>
	<div class="search-box">
		<!-- location 位置信息 -->
		<div class="location">
			<div class="location-city" @click="cityClick">
				{{ currentCity.cityName }}
			</div>
			<div class="location-position" @click="positionClick">
				<!--  没有地图API接口 -->
				<span class="text">我的位置</span>
				<img src="@/assets/img/home/icon_location.png" />
			</div>
		</div>
		<!-- 日历范围 -->
		<div class="date-range" @click="showCalendar = true">
			<div class="start">
				<span class="text">入住</span>
				<span>{{ startDate }}</span>
			</div>
			<div class="stay">
				<span> 共{{ stayCount }}晚 </span>
			</div>
			<div class="end">
				<span class="text">离开</span>
				<span>{{ endDate }}</span>
			</div>
		</div>

		<van-calendar
			v-model:show="showCalendar"
			type="range"
			@confirm="onConfirm"
			color="#ff9854"
			confirm-text="确认日期"
			:round="false"
		/>

		<!-- 价格 / 人数选择 -->
		<div class="section price-counter bottom-gray-line">
			<div class="start">价格不限</div>
			<div class="end">人数不限</div>
		</div>
		<div class="section keyword bottom-gray-line">关键字/位置/民宿</div>

		<!-- 热门地区推荐 -->
		<div class="section hot-suggests">
			<template v-for="(item, index) in hotSuggests" :key="index">
				<ul class="hot-item">
					<li
						:style="{
							color: item.tagText.color,
							background: item.tagText.background.color,
						}"
						@click="hotClick(item.tagText)"
					>
						{{ item.tagText.text }}
					</li>
				</ul>
			</template>
		</div>
		<div class="section btn-search">
			<div class="btn" @click="searchBtnClick">开始搜索</div>
		</div>
	</div>
</template>

<script setup>
import { computed, ref } from "vue";
import { useRouter } from "vue-router";
import { storeToRefs } from "pinia";
import useCityStore from "@/stores/modules/city";

const router = useRouter();
defineProps({
	hotSuggests: {
		type: Array,
		defaults: () => [],
	},
});


const positionClick = () => {
	navigator.geolocation.getCurrentPosition(
		res => {
			console.log("获取位置成功", res);
		},
		err => {
			console.log("获取位置失败", err);
		}
	);
};

const cityClick = () => {
	router.push("/city");
};

// 获取当前城市
const cityStore = useCityStore();
const { currentCity } = storeToRefs(cityStore);
import { formatMouthDay, getDiffDays } from "@/utils/format_date";

// 获取当前日期时间  封装了 formatMouthDay 使用第三方库 dayjs
const nowdate = new Date();
const startDate = ref(formatMouthDay(nowdate));
const endDate = ref(formatMouthDay(nowdate.setDate(nowdate.getDate() + 1)));
let stayCount = computed(() =>
	getDiffDays(new Date(), nowdate.setDate(nowdate.getDate() + 1))
);
// 日历组件
let showCalendar = ref(false);
const onConfirm = value => {
	const selectStarDate = formatMouthDay(value[0]);
	const selectEndDate = formatMouthDay(value[1]);
	startDate.value = selectStarDate;
	endDate.value = selectEndDate;
	showCalendar.value = false;
	// 获取当天 + 当天+1天 计算出共几晚 因为有的月份天数不一致，如2月就没有29、30等，所以要采用这种形式
	stayCount = computed(
		() => (stayCount = computed(() => getDiffDays(value[0], value[1])))
	);
};

// 热门区域
const cityNameClick = ref("");
const hotClick = value => {
	cityNameClick.value = value.text;
	router.push({
		path: "/search",
		query: {
			cityNameClick: cityNameClick.value,
		},
	});
};

// 搜索组件
const searchBtnClick = () => {
	router.push({
		path: "/search",
		query: {
			startDate: startDate.value,
			endDate: endDate.value,
			currentCity: currentCity.value.cityName,
		},
	});
};
</script>

<style lang="scss" scoped>
.search-box {
	--van-calendar-popup-height: 100%;
	.location {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin: 0.625rem;

		.location-city {
			width: 4.625rem;
		}

		.location-position {
			display: flex;
			justify-content: right;
			align-items: center;
			flex: 1;
			font-size: 0.75rem;

			img {
				width: 18px;
				height: 18px;
				margin-left: 0.4375rem;
			}
		}
	}
	.date-range {
		display: flex;
		padding: 0.625rem;
		justify-content: space-between;
		.start,
		.end {
			display: flex;
			flex-direction: column;
			.text {
				margin-bottom: 0.5rem;
				font-size: 14px;
				color: #666;
			}
		}
		.stay {
			display: flex;
			align-items: center;
		}
	}
	.section {
		display: flex;
		padding: 0.625rem;
		color: #666;
		font-size: 0.75rem;
	}
	.price-counter {
		justify-content: space-between;
	}
	.hot-suggests {
		flex-wrap: wrap;
		.hot-item {
			li {
				padding: 0.1875rem 0.3125rem;
				border-radius: 0.1875rem;
				margin: 0.3125rem;
				line-height: 1.1;
			}
		}
	}
	.btn-search {
		.btn {
			width: 100%;
			height: 2.375rem;
			border-radius: 1.25rem;
			margin: 0 0.625rem;
			text-align: center;
			line-height: 2.375rem;
			background-image: var(
				--tjc-theme-linear-gradient,
				linear-gradient(90deg, #fa8c1d, #fcaf3f)
			);
			font-size: 1.125rem;
			color: #fff;
		}
	}
}
</style>
