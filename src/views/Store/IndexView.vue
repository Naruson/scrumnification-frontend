<script setup lang="ts">
import { ref } from "@vue/reactivity";
import { onMounted } from "@vue/runtime-core";
import router from "@/router";
import { useShop } from "@/stores/shop";
import Swal from "sweetalert2";
let role = ref("");

let shopStore = useShop;

onMounted(() => {
    role = localStorage.getItem('role');
    shopStore.dispatch('getShops');
})

function buy(_id){
        Swal.fire({
            title:
                '<strong style = "font-family:Kanit"> Are you sure to buy item? </strong>',
            icon: 'warning',
            showCancelButton: true,
            cancelButtonColor: '#d33',
            cancelButtonText: '<div style = "font-family:Kanit"> Cancel </div>',
            confirmButtonText: '<div style = "font-family:Kanit"> Sure </div>',
            confirmButtonColor: '#005FBC',
            reverseButtons: true,
        }).then((result) => {
            if (result.isConfirmed) {
                shopStore.dispatch('buyItem', {itemId: _id});
                Swal.fire({
                title: 'Buying item ...',
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

</script>

<template>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.3.0/font/bootstrap-icons.css">

    <div class="box">
        <router-link to="/store/notification" v-if="role === 'admin'">
            <div class="btn btn-primary btn-notification"> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bell-fill" viewBox="0 0 16 16">
                <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zm.995-14.901a1 1 0 1 0-1.99 0A5.002 5.002 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901z"/>
            </svg> Notification</div>
        </router-link>
        <div class="font">Store</div>
            <table v-if="role === 'leader'" class="table table-hover" >
                <thead>
                    <tr class="row tr-head" style="background-color: #0052D4; color: rgb(255, 255, 255); ">
                        <th class="col-3">No.</th>
                        <th class="col-3">Item name</th>
                        <th class="col-3">Price</th>
                        <th class="col-3">Action</th>
                </tr>
                </thead>
                <tbody>
                    <tr class="row" v-for="(item, index) in shopStore.state.shopList" :key="item._id">
                    <td class="col-3">{{ index+1 }}</td>
                    <td class="col-3">{{ item.name }}</td>
                    <td class="col-3">{{ item.point }}</td>
                    <td @click="buy(item._id)" class="col-3" type="button">
                            <i class="bi bi-cart3 icon-shop"></i>Buy
                    </td>
                    
                </tr>
                </tbody>
            </table>
            <table v-if="role !== 'leader'" class="table table-hover">
                <thead>
                    <tr class="row tr-head" style="background-color: #0052D4; color: rgb(255, 255, 255); ">
                        <th class="col-3">No.</th>
                        <th class="col-6">Item name</th>
                        <th class="col-3">Price</th>
                </tr>
                </thead>
                <tbody>
                    <tr class="row" v-for="(item, index) in shopStore.state.shopList" :key="item._id">
                    <td class="col-3">{{ index+1 }}</td>
                    <td class="col-6">{{ item.name }}</td>
                    <td class="col-3">{{ item.point }}</td>
                </tr>
                </tbody>
            </table>
    </div>

</template>

<style scoped>
@import url("https://cdn.jsdelivr.net/npm/bootstrap-icons@1.3.0/font/bootstrap-icons.css");
.btn-notification{
    position: absolute;
    text-align: center;
    padding-top: 10px;
    top: 5%;
    right: 5%;
    
    /* padding-top: 10px; */
    /* ButtonDetailCluster */
    width: 145px;
    height: 48px;

    background: linear-gradient(264.65deg, #6ECEF3 4.28%, #0052D4 88.39%);
    border-radius: 20px;
    border: transparent;
}
.btn{
    position: absolute;
    right: 5%;
    top: 5%;
}
.box{
    height: auto;
    padding-top: 48px;
    padding-left: 50px;
    /* margin: 20px; */
    padding-bottom: 60px;
    min-height: 100px;
    max-height: 1000px;
    overflow: auto;
    border-width: 2px;
    background-clip: padding-box;
    flex-direction: column-reverse;
    /* display: flex; */
    justify-content: center;
    padding-right: 50px;
    min-height: 600px;

    background: #FFFFFF;
    box-shadow: 4px 4px 4px 4px rgba(0, 0, 0, 0.5);
    border-radius: 10px;
    position: relative;
            
    }
.font{
    text-align: center;
    color: #0052D4;
    font-size: 50px;
    margin-left: auto;
    margin-right: auto;
    /* padding-left: 40%; */
    font-family: 'Kanit';
    font-style: normal;
    font-weight: 700;
    line-height: 60px;
}
.tr-head{
    background-color: #0052D4; 
    color: rgb(255, 255, 255); 
    border-radius: 4px 4px 0px 0px;
}
.tr-head>th:last-child{
    border-top-right-radius: 10px;
}
.tr-head>th:first-child{
    border-top-left-radius: 10px;
}



.store-box{
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
         
.btn-grad {
    background-image: linear-gradient(to right, #0052D4 0%, #6ECEF3  100%);
    width: 15%;
    height: 40px;
    border-radius: 10px;
    align-content: center;
}
.btn-grad:hover {
            background-position: right center; /* change the direction of the change here */
            color: #fff;
            text-decoration: none;
        
}
.icon-shop{
    font-size: 24px;
    padding-right: 10px;
    margin-left: 5px;
    margin-bottom: 10px;

}
         
</style>