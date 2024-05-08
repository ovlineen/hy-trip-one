<template>
	<div class="facility">
		<detailSection></detailSection>
		<div class="facility-content">
			<template
				v-for="(item, index) in facilityData.houseFacilitys"
				:key="index"
			>
				<div
					class="facility-item"
					v-if="facilityData.facilitySort.includes(index)"
				>
					<div class="left">
						<img :src="item.icon" alt="" />
						{{ item.groupName }}
					</div>
					<div class="content">
						<template
							v-for="(iten, index) in item.facilitys.slice(0, 4)"
							:key="index"
						>
							<div class="iten">
								<i class="icon_check icon"></i>
								<span>
									{{ iten.name }}
								</span>
							</div>
						</template>
					</div>
				</div>
			</template>
		</div>
	</div>
</template>

<script setup>
import { provide } from "vue";
provide("titletext", "房屋设施");

defineProps({
	facilityData: {
		type: Object,
		defaults: () => ({}),
	},
});
</script>

<style lang="scss" scoped>
.facility-content {
	display: flex;
	flex-direction: column;
	background-color: #f7f9fb;
	font-size: 14px;
	padding: 10px;
	.facility-item {
		display: flex;

		.left {
			width: 30%;
			display: flex;
			flex-direction: column;
			align-items: center;
			margin: 10px 10px 0px 0px;

			img {
				width: 25px;
				height: 25px;
			}
		}
		.content {
			flex: 1;
			margin-top: 15px;

			.iten {
				margin-bottom: 7px;
				float: left;
				width: 40%;
				.icon {
					vertical-align: middle;
					margin-right: 3px;
				}
			}
		}
	}
}
</style>
