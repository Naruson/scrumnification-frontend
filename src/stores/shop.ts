import { defineStore } from "pinia";
import axios from "axios";
import qs from "qs";
import router from "@/router";
import Swal from "sweetalert2";
import Vuex from 'vuex';


export const useShop =  new Vuex.Store({
  state: {
    shopList: [],
  },
  mutations: {
    updateShopList(state, payload) {
        state.shopList = payload
      }
  },
  actions: {
    async getShops() {
      try {

        let task = await axios.get("http://localhost:3000/shop", {
          headers: {
            "Content-Type": "application/json",
            // Authorization: this.state.access_token,
          },
        });
        if(task.status === 200){
            this.state.shopList = task.data.shops;
            console.log(this.state.shopList);
        }
      } catch (e) {
        // this.state.isAuthen = false;
        // Swal.fire("Failed", "Failed to get tasks again later.", "error");
      }
    },

}
})