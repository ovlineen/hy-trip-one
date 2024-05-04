<template>
  <div class="app">
    <router-view></router-view>
    <tab-bar v-if="!route.meta.tabBarActive"></tab-bar>
  </div>
</template>

<script setup>
import { useRoute } from "vue-router";
import TabBar from "./components/tarbar/tarbar.vue";
const route = useRoute();
</script>

<style lang="scss" scoped></style>
