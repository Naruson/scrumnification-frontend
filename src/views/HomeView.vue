<script setup lang="ts">
import { ref } from "@vue/reactivity";
import { onMounted } from "@vue/runtime-core";
import { useUser } from "@/stores/user";
import router from "@/router";
// const myBalance = useUser;

// onMounted(() => {
//   myBalance.dispatch('getAllData');
//   if (!myBalance.state.isAuthen) {
//     router.push("/login");
//   }
// });

// function getReceiveHistory(){
//   myBalance.dispatch('getReceiveHistory');
// }

// function getTransferHistory(){
//   myBalance.dispatch('getTransferHistory');
// }
</script>

<template>
  <section>
 
     
  </section>
</template>

<style>
.circle {
  height: 300px;
  width: 300px;
  margin: 0 auto;
  border: solid cornflowerblue 3px;
  border-radius: 100%;
}
.btn {
  margin: 1rem;
}

.submit-area {
	padding: 30px;
	margin-top: 50px;
	border-radius: 10px;
	box-shadow: 5px 5px gray;
  color: white;
  background-color: royalblue;
}

#account-area {
	margin-top: 5%;
}

.deposit {
	background-color: slateblue;
}

.withdraw {
	background-color: lightsalmon;
}

.balance {
	background-color: tomato;
}

.status {
	margin: 0 30px;
	color: white;
	padding: 20px;
	border-radius: 10px;
  width: 500px;
}

</style>
