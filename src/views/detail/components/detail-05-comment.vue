<template>
	<detailSection></detailSection>
	<div class="comment">
		<div class="score-fcus">
			<div class="score">
				<h1 class="title">{{ commentData.overall }}</h1>
				<div class="right">
					<div class="scoreTitle">
						{{ commentData.scoreTitle }}
					</div>
					<p class="totalCount">
						{{ commentData.totalCount }}+条评论
					</p>
					<van-rate
						v-model="commentData.overall"
						:size="14"
						color="#ffa033"
						allow-half
					/>
				</div>
			</div>

			<div class="subScoresFocus">
				<template
					v-for="(item, index) in commentData.subScores"
					:key="index"
				>
					<div class="item">{{ item }}</div>
				</template>
			</div>
		</div>
		<div class="commentTagVo">
			<template
				v-for="(item, index) in commentData.commentTagVo"
				:key="index"
			>
				<div
					class="item"
					:style="{ backgroundColor: item.backgroundColor }"
				>
					{{ item.text }}
				</div>
			</template>
		</div>
		<div class="content">
			<div class="top">
				<div class="avatar">
					<img :src="commentData.comment.userAvatars" alt="" />
				</div>
				<div class="name-time">
					<div class="name">{{ commentData.comment.userName }}</div>
					<div class="time">
						{{ commentData.comment.checkInDate }}
					</div>
				</div>
			</div>
			<p class="text">{{ commentData.comment.commentDetail }}</p>
		</div>
	</div>
</template>

<script setup>
import { provide } from "vue";
provide("titletext", "房屋评论");

defineProps({
	commentData: {
		type: Object,
		defaults: () => ({}),
	},
});
</script>

<style lang="scss" scoped>
.comment {
	padding: 0 10px;

	.score-fcus {
		display: flex;
		justify-content: space-between;
		width: 100%;
		margin-top: 10px;

		.score {
			display: flex;
			font-size: 14px;
			.title {
				font-size: 3.125rem;
				margin-right: 8px;
			}
			.right {
				margin-top: 5px;
				.totalCount {
					color: #9b9b9b;
				}
			}
		}
		.subScoresFocus {
			display: flex;
			flex-wrap: wrap;
			font-size: 14px;
			color: #9b9b9b;
			flex: 1;
			justify-content: right;
			.item {
				margin-right: 3px;
			}
		}
	}
	.commentTagVo {
		margin: 10px 0;
		font-size: 12px;
		display: flex;
		flex-wrap: wrap;
		.item {
			padding: 3px 5px;
			margin-bottom: 5px;
			margin-right: 5px;
		}
	}
}

.content {
	padding: 5px;
	background-color: #f7f9fb;
	.top {
		margin-top: 10px;
		display: flex;
		align-items: center;

		.avatar {
			width: 40px;
			height: 40px;
			margin-right: 10px;
			border-radius: 50%;
			overflow: hidden;
			margin-left: 5px;

			img {
				width: 100%;
				height: 100%;
			}
		}
		.name-time {
			display: flex;
			flex-direction: column;
			font-size: 14px;
			.time {
				font-size: 12px;
				color: #9b9b9b;
			}
		}
	}
	.text {
		margin: 15px 0;
		font-size: 14px;
	}
}
</style>
