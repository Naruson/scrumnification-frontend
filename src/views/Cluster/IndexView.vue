<script setup lang="ts">
import { ref } from "vue";
import clusterComponent from "@/components/cluster.vue";
import taskComponent from "@/components/cluster-task.vue";
let role = localStorage.getItem("role");

</script>
<template>
        <clusterComponent v-if="role === 'leader' || role === 'coach'"/>
        <div class="invi-box" v-if="role === 'leader' || role === 'coach'"></div>
        <taskComponent v-if="role === 'leader' || role === 'coach'"/>

        
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