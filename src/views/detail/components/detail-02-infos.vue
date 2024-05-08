<template>
	<div class="detail-infos">
		<h1 class="detail-titile">{{ infosData.houseName }}</h1>
		<div class="detail-tags">
			<template v-for="(item, index) in infosData.houseTags" :key="index">
				<span
					v-if="item.tagText"
					:style="{
						color: item.tagText.color,
						backgroundColor: item.tagText.background.color,
					}"
					>{{ item.tagText.text }}</span
				>
			</template>
		</div>
		<div class="detail-comment">
			<div class="left">
				<span class="overall">{{
					infosData.commentBrief.overall
				}}</span>
				<span class="scoreTitle">{{
					infosData.commentBrief.scoreTitle
				}}</span>
			</div>
			<div class="centent" v-if="infosData.commentBrief.commentBrief">
				"{{ infosData.commentBrief.commentBrief }}"
			</div>
			<div class="right orange">
				{{ infosData.commentBrief.totalCount }}条评论 >
			</div>
		</div>
		<div class="location">
			<div class="left">
				{{ infosData.nearByPosition.address }}
			</div>
			<div class="location-surrounding orange">地图 周边 ></div>
		</div>
	</div>
</template>

<script setup>
const props = defineProps({
	infosData: {
		type: Object,
		defualts: () => ({}),
	},
});
</script>

<style lang="scss" scoped>
.orange {
	color: rgb(255, 150, 69);
}
.detail-infos {
	padding: 0 10px;
	.detail-titile {
		font-size: 16px;
		margin: 10px 0;
	}
	.detail-tags {
		font-size: 12px;
		span {
			padding: 3px;
			margin: 0 3px;
		}
	}

	.detail-comment {
		display: flex;
		padding: 10px;
		margin-top: 13px;
		background-color: #f5f7fb;
		justify-content: space-between;
		align-items: center;
		font-size: 14px;

		.left {
			font-weight: bold;
			.overall {
				font-size: 18px;
				margin-right: 5px;
			}
			.scoreTitle {
				font-size: 12px;
			}
		}
		.centent {
			font-size: 12px;
		}
	}
	.location {
		display: flex;
		padding: 10px;
		margin-top: 10px;
		background-color: #f5f7fb;
		justify-content: space-between;
		align-items: center;
		font-size: 14px;

		.left {
			font-weight: bold;
			.overall {
				font-size: 18px;
				margin-right: 5px;
			}
			.scoreTitle {
				font-size: 12px;
			}
		}
	}
}
</style>
