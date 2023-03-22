<script setup lang="ts">
import router from "@/router";
let role = localStorage.getItem("role");
const clusterId = localStorage.getItem('clusterId');
function clickClusterSideBar(){
  const clusterId = localStorage.getItem('clusterId');
}
function logout(){
  localStorage.setItem('isAuthen','false');
  localStorage.clear();
}
</script>
<template>
  <div class="invi">
        <div id="my-div" class="bg-scrum sidenav stretch d-flex flex-column flex-shrink-0 p-3 bg-light">
    <router-link to="/home" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
      <img id="icon" src="../assets/icon/Pink_Elegant_Lash_Makeup_Brow_artist_Beauty_Logo__1_-removebg-preview.png">
      <!-- <svg class="bi me-2" width="40" height="32"><use xlink:href="#bootstrap"></use>       
      </svg> -->

      <span class="fs-4 font-scrum">Scrumification</span>
    </router-link>
    <hr>
    <ul class="nav nav-pills flex-column mb-auto">

      <li>
        <router-link to="/home" class="nav-link link-dark font-scrum2 hover" aria-current="page">
          <svg class="bi me-2" width="16" height="16"><use xlink:href="#speedometer2"></use></svg>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-house-door-fill icon-scrum" viewBox="0 0 16 16">
        <path d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5Z"/>
        </svg>
          Home
        </router-link>
      </li>
      <li>
        <router-link to="/cluster" class="nav-link link-dark font-scrum2 hover" v-if="role === 'admin'">
          <svg class="bi me-2" width="16" height="16"><use xlink:href="#speedometer2"></use></svg>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-people-fill icon-scrum" viewBox="0 0 16 16">
            <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7Zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm-5.784 6A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216ZM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"/>
        </svg>
          Cluster
        </router-link>

        <router-link v-bind:to="'/cluster/'+clusterId+'/task'" class="nav-link link-dark font-scrum2 hover" v-if="role === 'leader' || role === 'coach'">
          <svg class="bi me-2" width="16" height="16"><use xlink:href="#speedometer2"></use></svg>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-people-fill icon-scrum" viewBox="0 0 16 16">
            <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7Zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm-5.784 6A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216ZM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"/>
        </svg>
          Cluster
        </router-link>
      </li>
      <li>
        <router-link to="/task" class="nav-link link-dark font-scrum2 hover" v-if="role != 'leader'">
          <svg class="bi me-2" width="16" height="16"><use xlink:href="#table"></use></svg>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-clipboard-fill icon-scrum" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M10 1.5a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-1Zm-5 0A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5v1A1.5 1.5 0 0 1 9.5 4h-3A1.5 1.5 0 0 1 5 2.5v-1Zm-2 0h1v1A2.5 2.5 0 0 0 6.5 5h3A2.5 2.5 0 0 0 12 2.5v-1h1a2 2 0 0 1 2 2V14a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V3.5a2 2 0 0 1 2-2Z"/>
        </svg>
          Task
        </router-link>
      </li>
      <li>
        <router-link to="/store" class="nav-link link-dark font-scrum2 hover">
          <svg class="bi me-2" width="16" height="16"><use xlink:href="#grid"></use></svg>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart-fill icon-scrum" viewBox="0 0 16 16">
            <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
        </svg>
          Store
        </router-link>
      </li>
    </ul>
    <hr>
    <div class="dropdown">
      <a href="#" class="d-flex align-items-center link-dark text-decoration-none dropdown-toggle" id="dropdownUser2" data-bs-toggle="dropdown" aria-expanded="false">
        <img src="https://github.com/mdo.png" alt="" width="32" height="32" class="rounded-circle me-2">
        <strong>{{ role }}</strong>
      </a>
      <ul class="dropdown-menu text-small shadow" aria-labelledby="dropdownUser2">
        <li><router-link to="/" class="dropdown-item" @click="logout">Sign out</router-link></li>
      </ul>
    </div>
  </div>
</div>
</template>


<style scoped>
  /* Set parent container to flex layout and stretch to fill remaining space */

  .invi{
    background-color: #0052D4;
    z-index: 1000;
    position: relative;
    min-height: 100vh;
    /* width: 334px; */
    max-width: 334px;
    min-width: 250px;
    height: auto;
  }
  #icon{
    z-index: 100;
    width: 20%;
    height: auto;
  }

  #my-div{
    max-width: 334px;
    min-width: 250px;
  }
  .stretch {
    display: flex;
    /* flex-direction: column; */
    position: absolute;
    min-height: 100%;
    left: 0;
  }

.font-scrum{
    font-family: 'Kanit';
font-style: normal;
font-weight: 700;
font-size: 36px;
line-height: 54px;
color: #FFFFFF;
text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}
.font-scrum2{
    font-family: 'Kanit';
font-style: normal;
font-weight: 700;
font-size: 24px;
line-height: 54px;
/* identical to box height */
}
.icon-scrum{
    width: 25px;
    height: 25px;
}
.bg-scrum{
    background: linear-gradient(201.34deg, rgba(156, 236, 251, 0.712) 0%, rgba(0, 82, 212, 0.68) 100%);
}

.nav-pills .nav-link.active, .nav-pills .show>.nav-link{
  background-color: transparent !important;
  color: #0052D4 !important;
}

body{
  display: flex;
}

.hover:hover{
  color: #0052D4 !important;
}

  main {
    flex-grow: 1;
  }
</style>
