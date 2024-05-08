<template>
	<detailSection></detailSection>
	<div class="baidu-map" ref="mapRef"></div>
</template>

<script setup>
import { onMounted, provide, ref } from "vue";
provide("titletext", "位置周边");

const props = defineProps({
	mapData: {
		type: Object,
		defaults: () => ({}),
	},
});

const mapRef = ref();
onMounted(() => {
	var map = new BMapGL.Map(mapRef.value); // 创建地图实例
	var point = new BMapGL.Point(
		props.mapData.longitude,
		props.mapData.latitude
	); // 创建点坐标
	map.centerAndZoom(point, 15); // 初始化地图，设置中心点坐标和地图级别
	const marker = new BMapGL.Marker(point);
	map.addOverlay(marker);
});
</script>

<style lang="scss" scoped>
.baidu-map {
	margin-top: 5px;
	height: 300px;
}
</style>
