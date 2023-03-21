import { defineStore } from "pinia";
import axios from "axios";
import qs from "qs";
import router from "@/router";
import Swal from "sweetalert2";
import Vuex from 'vuex';


export const useTask =  new Vuex.Store({
  state: {
    tasks: [],
    isAuthen: true,
  },
  mutations: {
    updateTasks(state, payload) {
        state.tasks = payload
      }
  },
  actions: {
    async getTasks() {
      try {
        // if (this.state.access_token == "") {
        //   let storageToken = localStorage.getItem("access_token") || "";
        //   this.state.access_token = storageToken
        // }
        // if (this.state.access_token == "") return;

        let task = await axios.get("http://localhost:3000/task", {
          headers: {
            "Content-Type": "application/json",
            // Authorization: this.state.access_token,
          },
        });
        if(task.status === 200){
            this.state.isAuthen = false;
            this.state.tasks = task.data.tasks;
        }
      } catch (e) {
        // this.state.isAuthen = false;
        // Swal.fire("Failed", "Failed to get tasks again later.", "error");
      }
    },
    // async login() {
    //   try {

    //     let userLogin = await axios.post(
    //       "http://localhost:3000/api/authentication/login",
    //       JSON.stringify({
    //         username: this.state.username,
    //         password: this.state.password,
    //       }),
    //       {
    //         headers: {
    //           "Content-Type": "application/json",
    //         },
    //       }
    //     );
    //     if (userLogin.status == 200) {
    //       localStorage.setItem("access_token", userLogin.data);
    //       this.state.isAuthen = true;
    //       this.state.access_token = userLogin.data;

    //       await this.dispatch('getBalance');
    //       await this.dispatch('getTransactionHistory');
    //       Swal.fire("Login Success", "", "success");
    //       router.push("/home");
    //     }
    //   } catch (e: any) {
    //     Swal.fire("Login Fail", "Authenticator Failed", "error");
    //   }
    // },  
}
})