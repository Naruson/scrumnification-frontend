import { defineStore } from "pinia";
import axios from "axios";
import qs from "qs";
import router from "@/router";
import Swal from "sweetalert2";
import Vuex from 'vuex';


export const useTask =  new Vuex.Store({
  state: {
    tasks: [],
    currentPoint: "",
    currentTaskId: "",
    currentClusterId: "",
    currentCreatedAt: "",
  },
  mutations: {
    updateTasks(state, payload) {
        state.tasks = payload
      }
  },
  actions: {
    async getTasks() {
      try {

        let task = await axios.get("http://localhost:3000/task", {
          headers: {
            "Content-Type": "application/json",
            // Authorization: this.state.access_token,
          },
        });
        if(task.status === 200){
            this.state.tasks = task.data.tasks;
            console.log(this.state.tasks);
        }
      } catch (e) {
        // this.state.isAuthen = false;
        // Swal.fire("Failed", "Failed to get tasks again later.", "error");
      }
    },

    async getTask({commit}, {taskId}) {
      try {
        let task = await axios.get(`http://localhost:3000/task/${taskId}`, {
          headers: {
            "Content-Type": "application/json",
          },
        });
        if(task.status === 200){
            this.state.currentPoint = await task.data.task.point;
        }
      } catch (e) {
        console.log("Error: " + e);
      }
    },
    async checkTask() {
      try {
        console.log('ClusterId: '+ this.state.currentClusterId + 'taskId: ' + this.state.currentTaskId + 'point: ' + this.state.currentPoint + 'createdAt: ' + this.state.currentCreatedAt)
        let updateClusterTask = await axios.post(
          "http://localhost:3000/task/cluster",
          JSON.stringify({
            clusterId: this.state.currentClusterId,
            taskId: this.state.currentTaskId,
            point: this.state.currentPoint,
            createdAt: this.state.currentCreatedAt,
          }),
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        if(updateClusterTask.status === 200){
          Swal.fire("Check task Successfully.", "", "success");
          router.go(-1);
            // this.state.currentPoint = await task.data.task.point;
        }
      } catch (e) {
        console.log("Error: " + e);
        // this.state.isAuthen = false;
        Swal.fire("Failed", "Failed to get tasks again later.", "error");
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