<script setup lang="ts">
import Swal from 'sweetalert2';
import { onMounted } from "@vue/runtime-core";
import { useCluster } from "@/stores/clusters";
import { ref } from 'vue';

let role = ref("");
// Get the current URL path
const path = window.location.pathname;
const segments = path.split('/');
const clusterIndex = segments.findIndex(segment => segment === 'cluster');
const clusterId = segments[clusterIndex + 1];
console.log(clusterId);



const cluster = useCluster
onMounted(() => {
    role = localStorage.getItem('role');
    console.log('role: '+ role);
    cluster.dispatch("getClusterTasks", {clusterId: clusterId});
});
</script>   
<template>
        <div class="box center">
            <font-awesome-icon icon="fa-solid fa-list-check" />
            <router-link v-bind:to="'/cluster/'+clusterId+'/check-task'" v-if="role == 'coach'">
                <button class="btn color-white"> 
                  <div class="btn-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-list-check" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M5 11.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zM3.854 2.146a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 1 1 .708-.708L2 3.293l1.146-1.147a.5.5 0 0 1 .708 0zm0 4a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 1 1 .708-.708L2 7.293l1.146-1.147a.5.5 0 0 1 .708 0zm0 4a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 0 1 .708-.708l.146.147 1.146-1.147a.5.5 0 0 1 .708 0z"/>
                  </svg>
                  check task
                  </div>
                </button>
            </router-link>
            <div class="head1">Task</div>
                <div class="d-flex justify-content-end se">
                    <label for="input SE-Dollar" class="col-sm-2 col-form-label pl">SE Dollar:</label>
                    <div class="se-box">
                      {{ cluster.state.point }}
                    </div>
                </div>
            <table class="table table-striped">
                <thead>
                    <tr style="background-color: #0052D4; color: rgb(255, 255, 255);">
                    <th scope="col">No.</th>
                    <th scope="col">Name</th>
                    <th scope="col">Date</th>
                    <th scope="col">SE Dollar</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(item, index) in cluster.state.tasksTransaction" :key="item._id">
                    <td scope="row">{{ index + 1 }}</td>
                    <td>{{ item.name }}</td>
                    <td>{{ item.created_at }}</td>
                    <td>{{ item.point }}</td>
                    </tr>

                </tbody>
            </table>
        </div>
</template>

<style scoped>
@import '@/assets/styles/cluster-task.css';
</style>