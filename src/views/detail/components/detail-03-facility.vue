<template>
	<div class="facility">
		<detailSection></detailSection>
		<div class="facility-content">
			<template v-for="(item, index) in facilityData" :key="index">
				<div class="facility-item">
					<div class="left">
						<img :src="item.icon" alt="" />
						{{ item.groupName }}
					</div>
					<div class="content">
						
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
	.facility-item {
		.left {
			display: flex;
			flex-direction: column;
			align-items: center;
			img {
				width: 30px;
				height: 30px;
			}
		}
	}
}
</style>
