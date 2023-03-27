<script setup lang="ts">
import { ref } from "@vue/reactivity";
import { onMounted } from "@vue/runtime-core";
import router from "@/router";
import { useShop } from "@/stores/shop";
let role = ref("");

let notification = useShop;

onMounted(() => {
    role = localStorage.getItem('role');
    notification.dispatch('getNotifications');
})

</script>
<template>
    
    <div class="box">
        <div class="titel" >Purchase History</div>
        <div class="box-table">
            <table class="row">
                <tr class="row header">
                    <th class="col-2">No.</th>
                    <th class="col-2">Cluster</th>
                    <th class="col-3">Item name</th>
                    <th class="col-2">Price</th>
                    <th class="col-3">Date/time</th>
                </tr>
                <tr class="row content" v-for="(item, index) in notification.state.notificationList" :key="item._id">
                    <td class="col-2" >{{ index+1 }}</td>
                    <td class="col-2">{{ item.cluster }}</td>
                    <td class="col-3">{{ item.item_name}}</td>
                    <td class="col-2">{{ item.point }}</td>
                    <td class="col-3">{{ item.date }}</td>
                </tr>
            </table>
        </div>
    </div>
</template>

<style scoped>
.box{
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

.titel{
    color: #0052D4;
    font-size: 50px;
    font-family: 'Kanit';
    font-style: normal;
    font-weight: 700;
    line-height: 60px;
    justify-content: center;
}

.box-table{
    margin:0px 24px;
}
.header{
    background: #0052D4;
    color: #ffff;
    height: 40px;
    align-content: center;
    /* padding-left: 3rem; */
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    font-size: 18px;
    font-family: 'Kanit';
    font-weight: bold;
    text-align: center;
    position: relative;
}

table {
  /* margin-top: 24px; */
  /* border-collapse: collapse; */
  /* width: 100%; */
  /* padding: center; */
  /* position: static; */
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

.content{
    /* padding-left: 3rem; */
    border: 2px solid #D1D1D6;
    height: 64px;
    align-content: center;
    text-align: center;
    font-size: 16px;
    font-family: 'Kanit';
    position: relative;
}


</style>