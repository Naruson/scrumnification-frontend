<script setup lang="ts">
import { ref } from "vue";
import router from "@/router";
import Swal from "sweetalert2";
import { onMounted } from "vue";
import { useTask } from "@/stores/tasks";

import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'



let taskStore = useTask;

onMounted(() => {
    taskStore.dispatch("getTasks");
});


let date = ref("");
let task = ref("");
var point = ref("");
var _id = ref("");


function cancel(){
    router.go(-1);
}

async function getPoint() {
    const tasks = taskStore.state.tasks
    const taskIdToFind = task.value;
    console.log(taskIdToFind);
    const taskToFind = tasks.find(task => task._id === taskIdToFind);
    point.value = taskToFind.point
    }

function save(){
    console.log(date + '-' + task +'-'+ point);
    if(date.value != "" && task.value != "" && point.value != ""  &&  point.value <= "10000"){
        Swal.fire({
            title:
                '<strong style = "font-family:Kanit"> Are you sure to check task? </strong>',
            icon: 'warning',
            showCancelButton: true,
            cancelButtonColor: '#d33',
            cancelButtonText: '<div style = "font-family:Kanit"> Cancel </div>',
            confirmButtonText: '<div style = "font-family:Kanit"> Ok </div>',
            confirmButtonColor: '#005FBC',
            reverseButtons: true,
        }).then((result) => {
            if (result.isConfirmed) {
                const path = window.location.pathname;
                const segments = path.split('/');
                const clusterIndex = segments.findIndex(segment => segment === 'cluster');
                const clusterId = segments[clusterIndex + 1];
                console.log(clusterId);

                taskStore.state.currentTaskId = task;
                taskStore.state.currentClusterId = clusterId;
                taskStore.state.currentPoint =  point;
                taskStore.state.currentCreatedAt = date;
                taskStore.dispatch("checkTask");
                
                // router.push('/cluster');
                console.log('add successfully')
                Swal.fire({
                title: 'Checking task ...',
                html: 'Please wait...',
                allowEscapeKey: false,
                allowOutsideClick: false,
                didOpen: () => {
                    Swal.showLoading()
                }
                });
            }
        });
    }
}

</script>
<template>
        <div class="box-check-task">
            <form @submit.prevent="">
                <div class="head1">Check Task</div>
                <label for="task" class="label">Date :</label>
                <br>
                <br>
                <input type="date" class="selector-dropdown p-2" v-model="date" required>
                <br>
                <br>

                <label for="task" class="label">Task :</label>
                <br>
                <br>
                <select name="task" class="selector-dropdown p-2" v-model="task" @change="getPoint" required>
                <option v-for="(item, index) in taskStore.state.tasks" :key="item._id" :value="item._id">
                    {{ item.name }}
                </option>

                </select>
                <br>
                <br>

                <label for="point" class="label">Point :</label>
                <br>
                <br>
                <input type="number" name="point" class="selector-dropdown p-2" v-model="point" required :max="10000">
                <!-- <div>value date: {{ date }}, value task: {{ task }},value point: {{ point }}</div> -->
                <br>
                <br>
                <br>
                <div class="button-group d-flex justify-content-between">
                    <div class="btn cancel font-btn-cancel" @click="cancel()">cancel</div>                
                    <button type="submit" class="btn save font-btn-save" @click="save()">Save</button>  
                </div>
            </form>
               

        </div>
</template>


<style scoped>
.transparent{
    background: transparent;
}
.button-group{
    position: relative;
    width: 500px;
    height: auto;
    left: 25%;
}
.font-btn-save{
    /* Save */
    font-family: 'Kanit';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    /* identical to box height */


    /* background */

    color: #F1F6FE;
}
.font-btn-cancel{
    font-family: 'Kanit';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    /* identical to box height */
    /* Blue1 */
    color: #0052D4;
}
.save{
    /* add tasks */
    text-align: center;
    justify-content: center;
    width: 200px;
    height: 48px;
    background: linear-gradient(264.65deg, #6ECEF3 4.28%, #0052D4 88.39%);
    border-radius: 20px;
    border: transparent;
}
.cancel{
    /* add tasks */
    padding-top: 12px;
    text-align: center;
    box-sizing: border-box;
    width: 200px;
    height: 48px;
    /* background */

    background: #F1F6FE;
    border-radius: 20px;
}
.label{
    /* Text : */
    position: absolute;
    font-family: 'Kanit';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    left: 20%;
    /* identical to box height */
    color: #000000;
    /* Inside auto layout */
    flex: none;
    order: 0;
    flex-grow: 0;
}
.head1{
    /* Check Task */
    font-family: 'Kanit';
    font-style: normal;
    font-weight: 400;
    font-size: 48px;
    line-height: 72px;
    /* identical to box height */
    color: #000000;
}
.selector-dropdown{
    /* Rectangle 1 */
    box-sizing: border-box;
    /* position: absolute; */
    background: #FFFFFF;
    width: 60%;
    height: 45px;
    left: 20%;
    /* purple3 */

    border: 1px solid #5151F2;
    border-radius: 8px;
}
.box-check-task{
    /* Rectangle 8 */
    position: relative;
    text-align: center;
    padding: 48px 24px;
    width: 1100px;
    min-height: 600px;

    /* white */

    background: #FFFFFF;
    box-shadow: 4px 4px 4px 4px rgba(0, 0, 0, 0.5);
    border-radius: 10px;
}
.invi-box{
    height: 60px;
}
/* .container{
    background-color: brown;
    z-index: 1000;
} */
</style>