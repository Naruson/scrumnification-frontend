<script setup lang="ts">
import { ref } from "@vue/reactivity";
import { onMounted } from "@vue/runtime-core";
import router from "@/router";

</script>

<template>

    <div class="box">
    <div class="font" >Store</div>
    <div class="box-table">
        <table>
            <tr style="background-color: #0052D4; color: rgb(255, 255, 255); " >
                <th>#</th>
                <th >Name</th>
                <th >Price</th>
                <th >Action</th>
            </tr>
            <tr >
                <td>1</td>
                <td>Music</td>
                <td>50</td>
                <td  class="btn-grad" type="button">Bey</td>
            </tr>
            <tr >
                <td>2</td>
                <td>Guru coding</td>
                <td>2000</td>
                <td  class="btn-grad" type="button">Bey</td>
            </tr>
            <tr >
                <td>3</td>
                <td>Server</td>
                <td>1000</td>
                <td  class="btn-grad" type="button">Bey</td>
            </tr>
            <tr >
                <td>4</td>
                <td>Forcing different cluster</td>
                <td>300</td>
                <td  class="btn-grad" type="button">Bey</td>
            </tr>
            <tr >
                <td>5</td>
                <td>Sleep</td>
                <td>300</td>
                <td  class="btn-grad" type="button">Bey</td>
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
  tr{
    border: 1px solid #ddd;
    

  }
  .box-table{
    padding-left: 50px;
    padding-right: 50px;
    padding-top:50px ;
  }

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
         
.btn-grad {
            background-image: linear-gradient(to right, #77A1D3 0%, #79CBCA  51%, #77A1D3  100%);
            margin: 10px;
            padding: 15px 45px;
            text-align: center;
            text-transform: uppercase;
            transition: 0.5s;
            background-size: 200% auto;
            color: white;            
            box-shadow: 0 0 20px #eee;
            border-radius: 10px;
            display: block;
            width: 80px;
            height: 40px;
        
          }

.btn-grad:hover {
            background-position: right center; /* change the direction of the change here */
            color: #fff;
            text-decoration: none;
        
}
         
</style>