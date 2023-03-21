<script setup lang="ts">
import Swal from 'sweetalert2';
import { onMounted } from "@vue/runtime-core";
import { useCluster } from "@/stores/clusters";

const cluster = useCluster
onMounted(() => {
    cluster.dispatch("getClusterTasks");
});

function test(){
    Swal.fire("Example Sweetalert", "", "success");
}
</script>   
<template>
        <div class="box center">
            <font-awesome-icon icon="fa-solid fa-list-check" />
            <router-link to="/cluster/check-task" @click="test">
                <button class="btn"> 
                    <font-awesome-icon icon="fa-solid fa-list-check" /> 
                    <div class="btn-check-task">
                        check task
                    </div>
                </button>
            </router-link>
            <div class="head1">Task</div>
            <br>
                <div class="d-flex justify-content-end se">
                    <label for="input SE-Dollar" class="col-sm-2 col-form-label pl">SE Dollar:</label>
                    <div class="se-box">
                      {{ cluster.state.point }}
                    </div>
                </div>
                <br>
            <table class="table table-striped">
                <thead>
                    <tr>
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

                <!-- <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Title</th>
      <th scope="col">ISBN</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="(item, index) in task.state.tasks" :key="item._id">
      <th scope="row">{{ index +1 }}</th>
      <td>{{ item.name }}</td>
      <td>{{ item.point}}</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td colspan="2">Larry the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</table> -->



</template>



<style scoped>
@import '@/assets/styles/cluster-task.css';
</style>