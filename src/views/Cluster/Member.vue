<script setup lang="ts">
import Swal from 'sweetalert2';
import { onMounted } from "@vue/runtime-core";
import { useCluster } from "@/stores/clusters";
import { ref } from 'vue';
import clusterComponent from "@/components/cluster.vue";

let role = ref("");
// Get the current URL path
const path = window.location.pathname;
const segments = path.split('/');
const clusterIndex = segments.findIndex(segment => segment === 'cluster');
const clusterId = segments[clusterIndex + 1];
console.log(clusterId);



const cluster = useCluster
onMounted(() => {
    cluster.dispatch("getClusterTasks", { clusterId: clusterId });
});
</script>   
<template>
    <clusterComponent/>
    <div class="row">
        <div class="card col-6" style="">
            <div class="row g-0">
                <div class="col-sm-5">
                    <img src="https://humancatsworld.files.wordpress.com/2019/03/cats.jpg?w=825" class="card-img-top h-75 w-100 card-image" alt="...">
                </div>
                <div class="col-sm-7">
                    <div class="card-body">
                        <p>ชื่อ-สกุล</p> 
                        <p>รหัสนิสิต</p>
                        <p class="position">ตำแหน่ง</p>
                        
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
@import url("https://cdn.jsdelivr.net/npm/bootstrap-icons@1.3.0/font/bootstrap-icons.css");

.invi-box {
    height: 60px;
    color: aqua;
}

/* .container{
    background-color: brown;
    z-index: 1000;
} */

/* Option 2: Import via CSS */

.container {
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

.card {
    width: 530px;
    height: 200px;
    /* padding: auto; */
    margin: 15px;
    min-height: 150px;
    max-height: 500px;
    max-width: 530;
    border-color: #0052D4;
    /* align-items: center; */
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    padding: 20px 50px;
    display: flex;
    justify-content: space-around;
}

.card-image {
    flex: 0 0 auto;
    width: 150px;
    height: 100% !important;
    margin-right: 20px;
    border-radius: 50%;
    /* overflow: hidden; */
}

/* .card-image img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
} */

/* .card-details {
    flex: 1 1 auto;
    align-items: flex-end;
} */

/* .card-details h5 {
    margin-top: 10px;
    margin-bottom: 10px;
} */

/* .card-details p {
    margin: 30;
} */

.position {
    color: #0052D4;
}
</style>
