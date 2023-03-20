<script setup lang="ts">
import { ref } from "@vue/reactivity";
import { onMounted } from "@vue/runtime-core";
import router from "@/router";

</script>

<template>
    <div class="conatiner">
        <div>This is Cluster Index Page</div>
        <router-link to="/cluster/task"> 
            <button class="btn btn-primary">Task</button>
        </router-link>
    </div>
</template>