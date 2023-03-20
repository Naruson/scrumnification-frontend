<script setup lang="ts">
import headerVue from "./components/header.vue";
import sideBarVue from "./components/sideBar.vue";
import router from "@/router";

import { onMounted } from "@vue/runtime-core";
// let isShowHeader = true;

</script>

<template>
  <div class="main">
    <sideBarVue class="sidebar" v-if="$route.meta.header == null" :title="'Scrum'" />
    <div class="container">
      <div class="paper">
        <RouterView />
      </div>
    </div>
  </div>

</template>

<style scoped>
.main{
  display: flex;
}
.paper{
  margin: 60px 0 60px 110px;
  margin-right: 0;
  background: #FFFFFF;
  box-shadow: 4px 4px 4px 4px rgba(0, 0, 0, 0.5);
  border-radius: 10px;
  width: 1100px;
  min-height: 100vh;
  /* height: 100%; */
}

</style>
