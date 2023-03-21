<script setup lang="ts">
import { ref } from "@vue/reactivity";
import { onMounted } from "@vue/runtime-core";
import router from "@/router";

</script>

<template>
    <div class="leader-box">
        <div class="h1">Leader Board</div>
    </div>
</template>

<style scoped>
.h1{
    /* STORE */
    font-family: 'Kanit';
    font-style: normal;
    font-weight: 700;
    font-size: 40px;
    line-height: 60px;
    /* identical to box height */


    color: #0052D4;
}
.leader-box{
    position: relative;
    text-align: center;
    padding: 48px 24px;
    width: 1100px;
    min-height: 80vh;

    /* white */

    background: #FFFFFF;
    box-shadow: 4px 4px 4px 4px rgba(0, 0, 0, 0.5);
    border-radius: 10px;
}
</style>