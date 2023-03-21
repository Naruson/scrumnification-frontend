<script setup lang="ts">
import { ref } from "vue";
import clusterBox from "@/components/cluster.vue";
import taskBox from "@/components/cluster-task.vue";

</script>
<template>
        <clusterBox/>
        <div class="invi-box"></div>
        <taskBox/>
</template>


<style scoped>
.invi-box{
    height: 60px;
    color: aqua;
}
/* .container{
    background-color: brown;
    z-index: 1000;
} */
</style>