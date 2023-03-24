<script setup lang="ts">
import { ref } from "@vue/reactivity";
import { onMounted } from "@vue/runtime-core";
import router from "@/router";
import clusterComponent from "@/components/cluster.vue";
import { useCluster } from "@/stores/clusters";

const cluster = useCluster

</script>

<template>
    <clusterComponent/>
    <div class="row box">
        <div class="card col-6" v-for="(item, index) in cluster.state.memberList" :key="item._id">
            <div class="row g-0">
                <div class="col-sm-5">
                    <img src="https://humancatsworld.files.wordpress.com/2019/03/cats.jpg?w=825" class="card-img-top h-75 w-100 card-image" alt="...">
                </div>
                <div class="col-sm-7">
                    <div class="card-body">
                        <p >{{ item.name }}</p> 
                        <p>{{ item.nickname }}</p>
                        <p class="position">{{ item.std_id }}</p>
                        
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
@import url("https://cdn.jsdelivr.net/npm/bootstrap-icons@1.3.0/font/bootstrap-icons.css");

.box {

    margin-top: 48px;
}

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
    justify-content: center;
}

.card {
    width: 530px;
    height: 200px;
    margin: 15px;
    min-height: 150px;
    max-height: 500px;
    max-width: 530;
    border-color: #0052D4;
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
}

.position {
    color: #0052D4;
}
</style>
