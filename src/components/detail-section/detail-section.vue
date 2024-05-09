<template>
	<div class="section">
		<div class="header">
			<h2 class="title">{{ title }}</h2>
		</div>
	</div>
</template>

<script setup name="section">
import { inject } from "vue";
const title = inject("titletext");
</script>

<style lang="scss" scoped>
.section {
	margin-top: 12px;
	background-color: #fff;

	.header {
		height: 45px;
		line-height: 45px;
		border-bottom: 1px solid #eee;

		.title {
			font-size: 20px;
			color: #333;
		}
	}

	.content {
		padding: 8px 0;
	}
}
</style>
