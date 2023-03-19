<script setup lang="ts">
import headerVue from "./components/header.vue";
import sideBarVue from "./components/sideBar.vue";
import router from "@/router";

import { onMounted } from "@vue/runtime-core";
// let isShowHeader = true;

</script>

<template>
  <div class="main">
    <sideBarVue v-if="$route.meta.header == null" :title="'Scrum'" />
    <RouterView />
  </div>

</template>

<style scoped>
.main{
  display: flex;
  background: #F1F6FE;
}
</style>
