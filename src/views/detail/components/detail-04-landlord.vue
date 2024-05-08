<template>
	<detail-section></detail-section>
	<div class="landlord">
		<div class="intro">
			<img class="intro-title-img" :src="landlordData.topScroll" alt="" />
			<div class="intro-info">
				<div class="logo">
					<img :src="landlordData.hotelLogo" alt="" />
				</div>
				<div class="intro-nameTag">
					<div class="name">{{ landlordData.hotelName }}</div>
					<div class="tag">
						<template
							v-for="(item, index) in landlordData.hotelTags"
							:key="index"
						>
							<span
								:style="{
									color: item.tagText.color,
								}"
								>{{ item.tagText.text }}
								<span
									v-if="
										index <
										landlordData.hotelTags.length - 1
									"
									>|</span
								>
							</span>
						</template>
					</div>
				</div>
				<div class="connect">联系房东</div>
			</div>
		</div>
		<div class="bottom">
			<template
				v-for="(item, index) in landlordData.hotelSummary"
				:key="index"
			>
				<div class="hotelSummary">
					<div class="title">{{ item.title }}</div>
					<div class="introduction">{{ item.introduction }}</div>
					<div class="tip">{{ item.tip }}</div>
				</div>
			</template>
		</div>
		<a href="javascript:;" @click="bottomCilck" class="bottom-click"
			>查看房东主页 ></a
		>
	</div>
</template>

<script setup>
import { provide } from "vue";
import DetailSection from "@/components/detail-section/detail-section.vue";
provide("titletext", "房主信息");

const props = defineProps({
	landlordData: {
		type: Object,
		default: () => ({}),
	},
});

const bottomCilck = () => {
	alert("别点啦，我是不会让你看他主页的");
};
</script>

<style lang="scss" scoped>
.landlord {
	margin-top: 10px;
	padding: 0 10px;
	.section-title {
		margin-top: 15px;
		h2 {
			margin: 10px 0;
			font-size: 20px;
			font-weight: 400;
		}
	}
	.intro {
		.intro-title-img {
			width: 100%;
		}

		.intro-info {
			position: relative;
			margin-top: 10px;
			display: flex;
			align-items: center;

			.logo {
				margin-right: 10px;
				img {
					width: 50px;
					height: 50px;
				}
			}
			.intro-nameTag {
				display: flex;
				flex-direction: column;
				font-size: 0.875rem;

				.tag {
					margin-top: 5px;
					font-size: 12px;
					span {
						span {
							margin: 0 3px;
						}
					}
				}
			}
			.connect {
				position: absolute;
				top: 50%;
				right: 0;
				transform: translateY(-50%);
				font-size: 14px;
				padding: 3px 5px;
				color: #fff;
				background-color: #ffa033;
				border-radius: 2px;
			}
		}
	}
	.bottom {
		display: flex;
		margin-top: 15px;
		text-align: center;

		.hotelSummary {
			flex: 1;
			font-size: 12px;
			color: rgb(155, 155, 155);
			.introduction {
				margin: 5px 0;
				font-size: 20px;
				color: #000;
				font-weight: 700;
			}
		}
	}
	.bottom-click {
		display: flex;
		justify-content: right;
		margin-top: 15px;
		color: #ffa033;
		font-size: 14px;
	}
}
</style>
