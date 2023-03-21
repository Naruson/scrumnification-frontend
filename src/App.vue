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
    <div class="container" v-if="$route.meta.header == null">
      <div class="paper">
        <RouterView />
      </div>
    </div >
    <div class="container margin-0" v-if="$route.meta.header == false">
      <RouterView/>
    </div>
  </div>

</template>

<style scoped>
.margin-0{
  left: 0;
  top: 0;
  /* margin: 0; */
  /* padding: 0; */
}
.main{
  display: flex;
}
.paper{
  margin: 60px 0 60px 110px;
  margin-right: 0;
  /* background: #FFFFFF;
  box-shadow: 4px 4px 4px 4px rgba(0, 0, 0, 0.5);
  border-radius: 10px; */
  width: 1100px;
  min-height: 80vh;
  background-color: transparent;
  /* height: 100%; */
}

</style>
