<script setup lang="ts">
import { ref } from "@vue/reactivity";
import { onMounted } from "@vue/runtime-core";
import router from "@/router";

</script>

<template>
<<<<<<< HEAD
    <div class="box">
    <div class="font" >Store</div>
    <div class="box-table">
        <table>
            <tr style="background-color: #0052D4; color: rgb(255, 255, 255); border: 1px solid #ddd; " >
                <th>#</th>
                <th >Name</th>
                <th >Price</th>
                <th >Action</th>
            </tr>
            <tr style="border: 1px solid #ddd;">
                <td>1</td>
                <td>Music</td>
                <td>50</td>
            </tr>
            <tr style="border: 1px solid #ddd;">
                <td>2</td>
                <td>Guru coding</td>
                <td>2000</td>
            </tr>
            <tr style="border: 1px solid #ddd;">
                <td>3</td>
                <td>Server</td>
                <td>1000</td>
            </tr>
            <tr style="border: 1px solid #ddd;">
                <td>4</td>
                <td>Forcing different cluster</td>
                <td>300</td>
            </tr>
            <tr style="border: 1px solid #ddd;">
                <td>5</td>
                <td>Sleep</td>
                <td>300</td>
            </tr>
        </table>
    </div>
    </div>

</template>

<style scoped>
.invi-box{
    height: 60px;
    
}
.box{
    height: 500px;
    padding-top: 30px;
    padding-left: 50px;
    margin: 20px;
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
            
    }
.font{
    color: #0052D4;
    font-size: 50px;
    margin-left: auto;
    margin-right: auto;
    padding-left: 40%;
}
table {
  border-collapse: collapse;
  width: 100%;
  padding: center;
}

th, td {
  padding: 8px;
  text-align: left;
  border-bottom: 1px solid #ddd;
  }
  .box-table{
    padding-left: 50px;
    padding-right: 50px;
    padding-top:50px ;
  }
=======
    <div class="store-box">
        <div class="h1">Store</div>
        <table class="table table-hover">
            <thead>
                <tr>
                <th scope="col">#</th>
                <th scope="col">First</th>
                <th scope="col">Last</th>
                <th scope="col">Handle</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
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
                <td>Larry the Bird</td>
                <td>@twitter</td>
                <td>@twitter</td>
                </tr>
            </tbody>
            </table>
    </div>
</template>

<style scoped>
.h1{
    /* STORE */
    font-family: 'Kanit';
    font-style: normal;
    font-weight: 700;
    font-size: 40px;
    line-height: 60px;
    /* identical to box height */


    color: #0052D4;
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
>>>>>>> c3e930480e4a3b0b4a003ec003dd5558e04dc8bd
</style>