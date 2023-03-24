<script setup lang="ts">

import { onMounted } from "@vue/runtime-core";
import { useCluster } from "@/stores/clusters";
import router from "@/router";
import { ref } from "vue";

let role = ref("");
role = localStorage.getItem('role');

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

function previousPage(){
    router.go(-1);
}



</script>
<template>
    <div class="box-cluster">
        <a @click="$router.go(-1)" v-if="!$route.meta.btnMember || role == 'admin'">
            <div class="previous-page">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-left fs" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
            </svg>
            </div>
        </a>
        <router-link :to="'/cluster/'+clusterId+'/member'" class="btn-member" v-if="$route.meta.btnMember">
            <div class="btn-center btn white">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-people-fill" viewBox="0 0 16 16">
                    <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7Zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm-5.784 6A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216ZM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"/>
                </svg>
                <router-link :to="'/cluster/'+clusterId+'/member'"> </router-link>
                <span> Member</span>
            </div>
        </router-link>
        <img class="icon-cluster" v-bind:src="'http://localhost:3000/' + cluster.state.picture" alt="">
            <div class="text">
                <div class="name-cluster-coop">{{ cluster.state.clusterName }} x {{ cluster.state.coop }}</div>
                <div class="name-system">ระบบ: {{ cluster.state.systemName }}</div>
            </div>
    </div>
</template>



<style scoped>


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
    color: #7B4397;
}

.icon-cluster{
    width: 180px;
    height: 180px;
    left: 20%;
    position: absolute;
    top: 15%;
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
}
</style>