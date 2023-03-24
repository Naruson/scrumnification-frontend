<script setup lang="ts">

import { onMounted } from "@vue/runtime-core";
import { useCluster } from "@/stores/clusters";
import router from "@/router";
const cluster = useCluster


// Get the current URL path
const path = window.location.pathname;
const segments = path.split('/');
const clusterIndex = segments.findIndex(segment => segment === 'cluster');
const clusterId = segments[clusterIndex + 1];
console.log(clusterId);
onMounted(() => {
cluster.dispatch("getClusterById", {clusterId: clusterId});

});

function clickClusterMember(_id){
    router.push(`/cluster/${_id}/member`);

}
function clickBack(){

    router.go(-1)
}


</script>
<template>
    <div class="box-cluster">
        <div class="d-flex justify-content-between">
            <div @click="clickBack()"  class="icon-back"><i class="bi bi-chevron-left "></i></div>
            <div  v-if=" $route.name  != 'member'" class="btn-grad hide" @click="clickClusterMember(clusterId)"><i class="bi bi-list-ul icon-detail"></i>Details Cluster</div>
            
        </div>

        <img class="icon-cluster" v-bind:src="'http://localhost:3000/' + cluster.state.picture" alt="">
            <div class="text">
                <div class="name-cluster-coop">{{ cluster.state.clusterName }} x {{ cluster.state.coop }}</div>
                <div class="name-system">ระบบ: {{ cluster.state.systemName }}</div>
            </div>
    </div>
</template>



<style scoped>
@import url("https://cdn.jsdelivr.net/npm/bootstrap-icons@1.3.0/font/bootstrap-icons.css");


.fs{
    width: 39px;
    height: 50px;
}
.previous-page{
    color: black;
    position: absolute;
    top: 10px;
    left: 5px;
}
.white{
    color: white;
}
.btn-center {
    text-align: center;
    padding: auto;
    margin: auto;
}
.btn-member{
    text-align: center;
    padding-top: 5px;
    /* padding-top: 10px; */
    /* ButtonDetailCluster */
    position: absolute;
    width: 145px;
    height: 48px;
    right: 1%;
    top: 5%;

    background: linear-gradient(264.65deg, #6ECEF3 4.28%, #0052D4 88.39%);
    border-radius: 20px;
}
.text{
    position: absolute;
    left: 40%;
    top: 25%;
}
.name-cluster-coop{
    /* Cluster 7 x IV Soft */
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 32px;
    line-height: 39px;
    margin-top: 20px;
    /* identical to box height */


    color: #000000;
}

.name-system{
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 32px;
    line-height: 39px;
    max-width: 500px;
    /* identical to box height */
    /* purple2 */
    color: #0052D4;
    margin-top: 20px;
}

.icon-cluster{
    width: 180px;
    height: 180px;
    left: 20%;
    position: absolute;
    top: 15%;
    margin-top: 20px;
}
.box-cluster{
    /* Rectangle 7 */
    position: relative;
    width: 1100px;
    height: 250px;
    /* left: 392px;
    top: 56px; */
    
    /* white */

    background: #FFFFFF;
    box-shadow: 4px 4px 4px 4px rgba(0, 0, 0, 0.5);
    border-radius: 10px;
    overflow: hidden;
    margin-top: 20px;
}
.btn-grad {
    height: 45px;
    width:190px;
    background-image: linear-gradient(to right, #0052D4 0%, #6ECEF3  100%);
    margin: 40px;
    padding: 20px;
    transition: 0.5s;
    background-size: 200% auto;
    color: white;            
    box-shadow: 0 0 20px #eee;
    border-radius: 25px;  
    display: flex;
    justify-self: left;
    align-items: center;
    margin-top: 20px;
}
.btn-grad:hover {
    background-position: right center; /* change the direction of the change here */
    color: #fff;
    text-decoration: none;
}
.icon-detail{
    font-size: 24px;
    padding-right: 10px;
    margin-left: 5px;
    margin-bottom: 10px;
}
.icon-back{
    width: 45px;
    height: 190px;
    font-size: 24px;
    border: 20px;
    padding-right: 10px;
    margin-left: 40px;
    margin-bottom: 10px;
    margin-top: 20px;
    color: #000000;
}
.icon-back:hover {
    background-position: right center; /* change the direction of the change here */
    color: #0052D4;
    text-decoration: none;
}
.bi-chevron-left{
    font-size: 28px;
    -webkit-text-stroke: 2px;
}
      

</style>