<template>
	<router-view v-slot="props">
		<keep-alive include="home">
			<component :is="props.Component"></component>
		</keep-alive>
	</router-view>
	<tab-bar v-if="!route.meta.tabBarActive"></tab-bar>
	<loading></loading>
</template>

<script setup>
import { useRoute } from "vue-router";
import TabBar from "./components/tarbar/tarbar.vue";
import loading from "./components/loading/loading.vue";
const route = useRoute();
</script>

<style lang="scss" scoped></style>
