import { defineStore } from "pinia";
import axios from "axios";
import qs from "qs";
import router from "@/router";
import Swal from "sweetalert2";
import Vuex from 'vuex';


export const useCluster =  new Vuex.Store({
  state: {
    picture: "",
    coop: "",
    systemName: "",
    point: "",
    tasksTransaction: [],
  },
  mutations: {
    updateTasksTransaction(state, payload) {
        state.tasksTransaction = payload
      },
    updatePoint(state, payload) {
        state.point = payload
      },
    updatePicture(state, payload) {
        state.picture = payload
      },
    updateCoop(state, payload) {
        state.coop = payload
      },
    updateSystem_name(state, payload) {
        state.systemName = payload
      }
  },
  actions: {
    async getClusterTasks() {
      try {
        // if (this.state.access_token == "") {
        //   this.state.access_token = storageToken
        // }
        // if (this.state.access_token == "") return;
        let cluster_id = localStorage.getItem("cluster_id")
        let tasks_transaction = await axios.get(`http://localhost:3000/cluster/task/${cluster_id}`, {
          headers: {
            "Content-Type": "application/json",
            // Authorization: this.state.access_token,
          },
        });
        console.log(tasks_transaction.data);
        if(tasks_transaction.status === 200){
            this.state.tasksTransaction = tasks_transaction.data.tasks.task_transactions;
            this.state.point = tasks_transaction.data.tasks.point;
            console.log("point: " + this.state.point);
        }
      } catch (e) {
        // this.state.isAuthen = false;
        // Swal.fire("Failed", "Failed to get tasks transaction again later.", "error");
      }
    },

    async getClusterById() {
      try {
        // if (this.state.access_token == "") {
        //   this.state.access_token = storageToken
        // }
        // if (this.state.access_token == "") return;
        let cluster_id = localStorage.getItem("cluster_id")
        let cluster = await axios.get(`http://localhost:3000/cluster/${cluster_id}`, {
          headers: {
            "Content-Type": "application/json",
            // Authorization: this.state.access_token,
          },
        });
        console.log(cluster.data);
        if(cluster.status === 200){
            this.state.picture = cluster.data.cluster.picture;
            this.state.coop = cluster.data.cluster.coop;
            this.state.systemName = cluster.data.cluster.system_name;
        }
      } catch (e) {
        Swal.fire("Failed", "Failed to get cluster try again later.", "error");
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