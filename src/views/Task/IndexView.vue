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
                <tr class="tr-head">
                <th class="col-3">No.</th>
                <th class="col-6">Task name</th>
                <th class="col-3">Point</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(item, index) in taskStore.state.tasks" :key="item._id" >
                <td class="col-3">{{ index + 1 }}</td>
                <td class="col-6">{{ item.name }}</td>
                <td class="col-3">{{item.point  }}</td>
                </tr>
            </tbody>
            </table>
    </div>
</template>

<style scoped>
.h1{
    text-align: center;
    color: #0052D4;
    font-size: 50px;
    font-family: 'Kanit';
    font-style: normal;
    font-weight: 700;
    line-height: 60px;
}
.task-box{
    position: relative;
    /* text-align: center; */
    padding: 48px 24px;
    width: 1100px;
    min-height: 600px;

    /* white */

    background: #FFFFFF;
    /* border: 1px solid #0052D4; */
    box-shadow: 4px 4px 4px 4px rgba(0, 0, 0, 0.5);
    border-radius: 10px;
}
.tr-head{
    background-color: #0052D4; 
    color: rgb(255, 255, 255); 
}
.tr-head>th:last-child{
    border-top-right-radius: 10px;
}
.tr-head>th:first-child{
    border-top-left-radius: 10px;
}
</style>