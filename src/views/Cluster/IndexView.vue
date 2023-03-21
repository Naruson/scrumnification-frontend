<script setup lang="ts">
import { ref } from "vue";
import clusterComponent from "@/components/cluster.vue";
import taskComponent from "@/components/cluster-task.vue";
let role = localStorage.getItem("role");


</script>
<template>
        <clusterComponent v-if="role === 'leader' || role === 'coach'"/>
        <div class="invi-box" v-if="role === 'leader' || role === 'coach'"></div>
        <taskComponent v-if="role === 'leader' || role === 'coach'"/>

        <div> 
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.3.0/font/bootstrap-icons.css">

        
        <div class="row" >
            <h1 class="col-8">Cluster</h1>
            <button class="btn-add"><i class="bi bi-list-check icon-add" ></i>Add Team</button>
        </div>
        
    <div class="row" v-if="role === 'admin'">
        <div class="card col-6" style="max-width: 500px;">
    <div class="row g-0">
        <div class="col-sm-5">
            <img src="https://humancatsworld.files.wordpress.com/2019/03/cats.jpg?w=825" class="card-img-top h-75 w-100 card-image" alt="...">
        </div>
        <div class="col-sm-7">
            <div class="card-body">
                <h5>Cluster 0</h5> 
                <p>IV soft</p>
                <p>ระบบจัดการงาน</p>
                <a href="#" class="btn-grad stretched-link"><i class="bi bi-list-ul icon-detail"></i>Details</a>
            </div>
        </div>
    </div>
</div>
<div class="card col-6" style="max-width: 500px;">
    <div class="row g-0">
        <div class="col-sm-5">
            <img src="https://humancatsworld.files.wordpress.com/2019/03/cats.jpg?w=825" class="card-img-top h-75 w-100 card-image" alt="...">
        </div>
        <div class="col-sm-7">
            <div class="card-body">
                <h5>Cluster 0</h5> 
                <p>IV soft</p>
                <p>ระบบจัดการงาน</p>
                <a href="#" class="btn-grad stretched-link"><i class="bi bi-list-ul icon-detail"></i>Details</a>
            </div>
        </div>
    </div>
</div>
    </div>
    <div class="row">
<div class="card col-6" style="max-width: 500px;">
    <div class="row g-0">
        <div class="col-sm-5">
            <img src="https://humancatsworld.files.wordpress.com/2019/03/cats.jpg?w=825" class="card-img-top h-75 w-100 card-image" alt="...">
        </div>
        <div class="col-sm-7">
            <div class="card-body">
                <h5>Cluster 0</h5> 
                <p>IV soft</p>
                <p>ระบบจัดการงาน</p>
                <a href="#" class="btn-grad stretched-link"><i class="bi bi-list-ul icon-detail"></i>Details</a>
            </div>
        </div>
    </div>
</div>
<div class="card col-6" style="max-width: 500px;">
    <div class="row g-0">
        <div class="col-sm-5">
            <img src="https://humancatsworld.files.wordpress.com/2019/03/cats.jpg?w=825" class="card-img-top h-75 w-100 card-image" >
        </div>
        <div class="col-sm-7">
            <div class="card-body">
                <h5>Cluster 0</h5> 
                <p>IV soft</p>
                <p>ระบบจัดการงาน</p>
                <a href="#" class="btn-grad stretched-link"><i class="bi bi-list-ul icon-detail"></i>Details</a>
            </div>
        </div>
    </div>
</div>
    </div>
    <div class="row">
<div class="card col-6" style="max-width: 500px;">
    <div class="row g-0">
        <div class="col-sm-5">
            <img src="https://humancatsworld.files.wordpress.com/2019/03/cats.jpg?w=825" class="card-img-top h-75 w-100 card-image" >
        </div>
        <div class="col-sm-7">
            <div class="card-body">
                <h5>Cluster 0</h5> 
                <p>IV soft</p>
                <p>ระบบจัดการงาน</p>
                <a href="#" class="btn-grad stretched-link"><i class="bi bi-list-ul icon-detail"></i>Details</a>
            </div>
        </div>
    </div>
</div>
<div class="card col-6" style="max-width: 500px;">
    <div class="row g-0">
        <div class="col-sm-5">
            <img src="https://humancatsworld.files.wordpress.com/2019/03/cats.jpg?w=825" class="card-img-top h-75 w-100 card-image" >
        </div>
        <div class="col-sm-7">
            <div class="card-body">
                <h5>Cluster 0</h5> 
                <p>IV soft</p>
                <p>ระบบจัดการงาน</p>
                <a href="#" class="btn-grad stretched-link"> <i class="bi bi-list-ul icon-detail"></i>Details</a>
            </div>
        </div>
    </div>
</div>
    </div>

    <div class="row">
<div class="card col-6" style="max-width: 500px;">
    <div class="row g-0">
        <div class="col-sm-5">
            <img src="https://humancatsworld.files.wordpress.com/2019/03/cats.jpg?w=825" class="card-img-top h-75 w-100 card-image" >
        </div>
        <div class="col-sm-7">
            <div class="card-body">
                <h5>Cluster 0</h5> 
                <p>IV soft</p>
                <p>ระบบจัดการงาน</p>
                <a href="#" class="btn-grad stretched-link"><i class="bi bi-list-ul icon-detail"></i>Details</a>
            </div>
        </div>
    </div>
</div>
<div class="card col-6" style="max-width: 500px;">
    <div class="row g-0">
        <div class="col-sm-5">
            <img src="https://humancatsworld.files.wordpress.com/2019/03/cats.jpg?w=825" class="card-img-top h-75 w-100 card-image" >
        </div>
        <div class="col-sm-7">
            <div class="card-body">
                <h5>Cluster 0</h5> 
                <p>IV soft</p>
                <p>ระบบจัดการงาน</p>
                <a href="#" class="stretched-link btn-grad"><i class="bi bi-list-ul icon-detail"></i>Details</a>
            </div>
        </div>
    </div>
</div>
    </div>
        </div>

        
</template>


<style scoped>
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
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
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

          .btn-grad:hover {
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
