<template>
	<div class="landlord">
		<detail-section>
			<div class="section-title">
				<h2>房东介绍</h2>
			</div>
		</detail-section>
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
							<span>{{ item.tagText.text }}</span>
						</template>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
import DetailSection from "@/components/detail-section/detail-section.vue";

const proprs = defineProps({
	landlordData: {
		type: Object,
		default: () => ({}),
	},
});
</script>

<style lang="scss" scoped>
.landlord {
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
			margin-top: 10px;
			display: flex;
			align-items: center;
			.logo {
				img {
					width: 50px;
					height: 50px;
				}
			}
			.intro-name {
				display: flex;
				flex-direction: column;
				.hotelTags {
					display: flex;
				}
                .intro-nameTag {
                    
                }
			}
		}
	}
}
</style>
