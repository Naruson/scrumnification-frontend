import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/home",
      name: "home",
      component: () => import("../views/Home/IndexView.vue"),

    },
    {
      path: "/",
      name: "login",
      component: () => import("../views/LoginView.vue"),
      meta:{
        header: false
      }
    },
    {
      path: "/cluster/task",
      name: "cluster-task",
      component: () => import("../views/Cluster/TaskView.vue"),

    },
    {
      path: "/cluster/check-task",
      name: "task",
      component: () => import("@/views/Cluster/CheckTask.vue"),

    },
    {
      path: "/cluster",
      name: "cluster",
      component: () => import("../views/Cluster/IndexView.vue"),

    },
    {
      path: "/store",
      name: "store",
      component: () => import("../views/Store/IndexView.vue"),

    },
    {
      path: "/task",
      name: "task",
      component: () => import("../views/Task/IndexView.vue"),

    },

  ],
  linkActiveClass: "active",
});

export default router;
