import { defineStore } from "pinia";
import axios from "axios";
import qs from "qs";
import router from "@/router";
import Swal from "sweetalert2";
import Vuex from 'vuex';


export const useUser =  new Vuex.Store({
  state: {
    username: "",
    password: "",
    role: "",
    isAuthen: false,
    access_token: "",
    account: []
  },
  mutations: {
    updateUsername(state, payload) {
      state.username = payload
    },
    updatePassword(state, payload) {
      state.password = payload
    },
    updateIsAuthen(state, payload) {
      state.isAuthen = payload
    },
    updateAccessToken(state, payload) {
      state.access_token = payload
    }
  },
  actions: {
    async getAccount() {
      try {
        if (this.state.access_token == "") {
          let storageToken = localStorage.getItem("access_token") || "";
          this.state.access_token = storageToken
        }
        if (this.state.access_token == "") return;
        let accounts = await axios.get("http://localhost:3000/api/accounts", {
          headers: {
            "Content-Type": "application/json",
            Authorization: this.state.access_token,
          },
        });
        this.state.account = accounts.data;
      } catch (e) {
        this.state.isAuthen = false;
        Swal.fire("Failed", "Failed try again later.", "error");
      }
    },
    async login() {
      try {

        let userLogin = await axios.post(
          "http://localhost:3000/api/authentication/login",
          JSON.stringify({
            username: this.state.username,
            password: this.state.password,
          }),
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        if (userLogin.status == 200) {
          localStorage.setItem("access_token", userLogin.data);
          this.state.isAuthen = true;
          this.state.access_token = userLogin.data;

          await this.dispatch('getBalance');
          await this.dispatch('getTransactionHistory');
          Swal.fire("Login Success", "", "success");
          router.push("/home");
        }
      } catch (e: any) {
        Swal.fire("Login Fail", "Authenticator Failed", "error");
      }
    },  
}
})