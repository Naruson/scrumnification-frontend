<script setup lang="ts">
import { ref } from "vue";
import { onMounted } from "vue";
import clusterComponent from "@/components/cluster.vue";
import taskComponent from "@/components/cluster-task.vue";
import router from "@/router";
import { useCluster } from "@/stores/clusters";

let clusterStore = useCluster;

onMounted(() => {
    clusterStore.dispatch('getClusters')
})

let role = localStorage.getItem("role");

function clickClusterDetail(_id){
    // const clusterId0 = '64189a3d9979072da0be5249';
    router.push(`/cluster/${_id}/task`);

}

</script>
<template>
        <div v-if="role === 'admin'"> 
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.3.0/font/bootstrap-icons.css">
                <div class="row" >
                    <h1 class="col-8">Cluster</h1>
                    <button class="btn-add"><i class="bi bi-list-check icon-add" ></i>Add Team</button>
                </div>
                
            <div class="row">
                <div class="card col-6 card-hover" style="max-width: 500px;" v-for="(item, index) in clusterStore.state.clusterList" :key="item._id" @click="clickClusterDetail(item._id)">
            <div class="row g-0">
                <div class="col-sm-5">
                    <img :src="'http://localhost:3000/' + item.picture" class="card-img-top h-75 w-100 card-image" alt="...">
                </div>
                <div class="col-sm-7">
                    <div class="card-body">
                        <h5>{{ item.name }}</h5> 
                        <div>{{ item.coop }}</div>
                        <p v-if="item.system_name.length<16">Welcome, {{ item.system_name }}</p>
                        <p v-else>{{ item.system_name.substring(0,16)+".." }}</p>
                        <div class="btn-grad btn-hover stretched-link" @click="clickClusterDetail(item._id)"><i class="bi bi-list-ul icon-detail"></i>Details</div>
                    </div>
                </div>
            </div>
        </div>
            </div>
                </div>

        
</template>


<style scoped>

.card-hover:hover{
    box-shadow: 0 40px 60px -20px rgba(12, 5, 62, 0.2);
}
.invi-box{
    height: 60px;
    color: aqua;
}
/* .container{
    background-color: brown;
    z-index: 1000;
} */

/* Option 2: Import via CSS */
@import url("https://cdn.jsdelivr.net/npm/bootstrap-icons@1.3.0/font/bootstrap-icons.css");
    .container{
        height: auto;
        padding-top: 30px; 
        padding-left: 170px;
        margin: 20px;
        min-height: 100px; 
        max-height: 1000px;
        overflow: auto; 
        border-style: solid;
        border-width: 2px;
        background-clip: padding-box; 
        border-color: #0052D4;
        border-radius: 15px;
        flex-direction: column-reverse;
        /* display: flex;*/
        justify-content: center; 
    }
    /* .card{
        height: auto; 
        padding: auto;
        margin: 20px;
        min-height: 150px; 
        max-height: 500px;
        border-color: #0052D4;
        border-radius: 15px;

    } */
    .card {
        width: 409px;
        height: 200px; 
        padding: auto;
        margin: 30px;
        min-height: 150px; 
        max-height: 500px;
        border-color: #0052D4;
        align-items: center;
        border-radius: 10px;
        /* box-shadow: 0 0 10px rgba(0, 0, 0, 0.2); */
        padding: 20px;

    }

.card-image {
  flex: 0 0 auto;
  width: 150px;
  height: 150px;
  margin-right: 20px;
  border-radius: 50%;
  /* overflow: hidden; */
}

.card-image img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.card-details {
  flex: 1 1 auto;
  align-items: flex-end;
}

.card-details h5 {
  margin-top: 10px;
  margin-bottom: 10px;
}

.card-details p {
  margin: 30;
}
         
.btn-grad {
    height: 45px;
    width: 150px;
    background-image: linear-gradient(to right, #0052D4 0%, #6ECEF3  100%);
    margin: 10px;
    padding: 20px;
    transition: 0.5s;
    background-size: 200% auto;
    color: white;            
    box-shadow: 0 0 20px #eee;
    border-radius: 25px;
            
    display: flex;
    justify-self: left;
    align-items: center;
}

          .btn-hover:hover {
            background-position: right center; /* change the direction of the change here */
            color: #fff;
            text-decoration: none;
          }
         
         
/* .btn-grad {
    height: 40px;
    width: 140px;
    background-image: linear-gradient(to right, #0052D4 0%, #6ECEF3  100%);
    margin: 10px;
    padding: 15px 45px;
    text-align: center;
    transition: 0.5s;
    background-size: 200% auto;
    color: white;            
    box-shadow: 0 0 20px #eee;
    border-radius: 25px;
    display: block;
    
}

.btn-grad:hover {
    background-position: right center; /* change the direction of the change here */
    /* color: #fff;
    text-decoration: none; */

.btn-add {
    height: 60px;
    width: 180px;
    background-image: linear-gradient(to right, #0052D4 0%, #6ECEF3  100%);
    border-color: white;
    text-align: center;
    transition: 0.5s;
    background-size: 200% auto;
    color: white;            
    box-shadow: 0 0 20px #eee;
    border-radius: 25px;
    display: flex;
    justify-content: left;
    
    font-size: 20px; 
    align-items: center;
}

.btn-add:hover {
    background-position: right center; /* change the direction of the change here */
    color: #fff;
    text-decoration: none;
}
.icon-add{
    font-size: 32px;
    padding-right: 10px;
    margin-left: 5px;
    margin-bottom: 10px;
}
.icon-detail{
    font-size: 24px;
    padding-right: 10px;
    margin-left: 5px;
    margin-bottom: 10px;
}
         
</style>
    <!-- <div class="conatiner">
        <div>This is Cluster Index Page</div>
        <router-link to="/cluster/task"> 
            <button class="btn btn-primary">Task</button>
        </router-link>
    </div>
</template> -->
