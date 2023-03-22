<script setup lang="ts">
import { ref } from "@vue/reactivity";
import { onMounted } from "@vue/runtime-core";
import router from "@/router";
import { useTask } from "@/stores/tasks";

let taskStore = useTask;

onMounted(() => {
    taskStore.dispatch('getTasks');
})
</script>

<template>
    <div class="task-box">
        <div class="h1">Task</div>
        <table class="table table-hover">
            <thead>
                <tr>
                <th scope="col">#</th>
                <th scope="col">task name</th>
                <th scope="col">point</th>
                <th scope="col">action</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(item, index) in taskStore.state.tasks" :key="item._id">
                <th scope="row">{{ index+1 }}</th>
                <td>{{ item.name }}</td>
                <td>{{item.point  }}</td>
                <td>
                    <div class="div flex">
                        <button class="btn btn-primary">primary</button>
                        <button class="btn btn-danger">danger</button>
                    </div>
                </td>
                </tr>
            </tbody>
            </table>
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
.task-box{
    position: relative;
    text-align: center;
    padding: 48px 24px;
    width: 1100px;
    min-height: 1000px;

    /* white */

    background: #FFFFFF;
    box-shadow: 4px 4px 4px 4px rgba(0, 0, 0, 0.5);
    border-radius: 10px;
}
</style>