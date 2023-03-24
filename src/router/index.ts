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
      path: "/cluster/:clusterId/check-task",
      name: "check-task",
      component: () => import("@/views/Cluster/CheckTask.vue"),

    },
    {
      path: "/cluster",
      name: "cluster",
      component: () => import("../views/Cluster/IndexView.vue"),

    },
    {
      path: "/cluster/:clusterId/task",
      name: "cluster-detail",
      component: () => import("../views/Cluster/ClusterTask.vue"),
      meta:{
        btnMember: true
      }

    },
    {
      path: "/cluster/:clusterId/member",
      name: "member",
      component: () => import("../views/Cluster/Member.vue"),

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
    {
      path: "/store/notification",
      name: "notification",
      component: () => import("@/views/Store/Notification.vue"),
    },

  ],
  linkActiveClass: "active",
});

export default router;
