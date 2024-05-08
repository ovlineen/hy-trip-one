<template>
	<div class="intro">
		<h5 class="title">{{ introData.title }}</h5>
		<p class="introduction">{{ introData.introduction }}</p>
	</div>
</template>

<script setup>
const props = defineProps({
	introData: {
		type: Object,
		default: () => ({}),
	},
});

console.log(props.introData);
</script>

<style lang="scss" scoped>
.intro {
	margin-top: 20px;
	padding: 0 10px;
}
.introduction {
	font-size: 12px;
	margin-top: 5px;
	color: #9b9b9b;
	line-height: 17px;
}
</style>
