<script setup lang="ts">
import { defineAsyncComponent, ref } from "vue";
import clusterComponent from "@/components/cluster.vue";
import taskComponent from "@/components/cluster-task.vue";
let role = localStorage.getItem("role");
</script>
<template>
        <clusterComponent btnMembers="enable"/>
        <div class="invi-box"></div>
        <taskComponent/>
</template>


<style scoped>
.invi-box{
    height: 60px;
    color: aqua;
}
</style>
    