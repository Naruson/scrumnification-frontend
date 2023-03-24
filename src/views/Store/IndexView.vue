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
                console.log('buy item successfully')
            }
        });
}

</script>

<template>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.3.0/font/bootstrap-icons.css">

    <div class="box">
    <div class="font">Store</div>
    <div class="box-table">
        <table class="row">
            <tr class="row" style="background-color: #0052D4; color: rgb(255, 255, 255); " >
                <th class="col-3">#</th>
                <th class="col-4">Name</th>
                <th class="col-3">Price</th>
                <th class="col-2" v-if="role === 'leader'">Action</th>
            </tr>
            <tr class="row" v-for="(item, index) in shopStore.state.shopList" :key="item._id">
                <td class="col-3">{{ index+1 }}</td>
                <td class="col-4">{{ item.name }}</td>
                <td class="col-3">{{ item.point }}</td>
                <td  class="btn-grad col-2" type="button" v-if="role === 'leader'"><i class="bi bi-cart3 icon-shop" @click="buy(item._id)"></i>Buy</td>
            </tr>
        </table>
    </div>
    </div>

</template>

<style scoped>
@import url("https://cdn.jsdelivr.net/npm/bootstrap-icons@1.3.0/font/bootstrap-icons.css");
.invi-box{
    height: 60px;
    
}
.box{
    height: auto;
    padding-top: 30px;
    padding-left: 50px;
    margin: 20px;
    padding-bottom: 60px;
    min-height: 100px;
    max-height: 1000px;
    overflow: auto;
    border-style: solid;
    border-width: 2px;
    background-clip: padding-box;
    border-color: #0052D4;
    background-color: rgb(255, 255, 255);
    border-radius: 15px;
    flex-direction: column-reverse;
    /* display: flex; */
    justify-content: center;
    padding-right: 50px;
    min-height: 600px;
            
    }
.font{
    color: #0052D4;
    font-size: 50px;
    margin-left: auto;
    margin-right: auto;
    padding-left: 40%;
    font-family: 'Kanit';
    font-style: normal;
    font-weight: 700;
    line-height: 60px;
}
table {
  border-collapse: collapse;
  width: 100%;
  padding: center;
}

th {
  padding: 8px;
  text-align: left ;
  border-bottom: 1px solid #ddd;
  
  align-content: center;

  }
td {
  padding: 8px;
  text-align: left ;
  border-bottom: 1px solid #ddd;
  /* border-radius:10px ; */
  align-content: center;
  margin-top: 10px;
  }
  tr{
    border: 1px solid #ddd;
    border-radius:5px ;
  }
  .box-table{
    padding-left: 50px;
    padding-right: 50px;
    padding-top:50px ;
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
    margin: 10px;
    /* padding: 15px 45px; */
    text-align: center;
    text-transform: uppercase;
    transition: 0.5s;
    background-size: 200% auto;
    color: white;            
    box-shadow: 0 0 20px #eee;
    border-radius: 25px;
    width: 100px;
    height: 40px;
    display: flex;
    justify-self: left;
    align-items: center;
        
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