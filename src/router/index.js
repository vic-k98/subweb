import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  // {
  //   path: "/",
  //   name: "SubConverter",
  //   component: () => import("../views/Subconverter.vue")
  // },
  {
    path: "/",
    name: "Qx2clash",
    component: () => import("../views/Qx2clash.vue")
  }
];

const router = new VueRouter({
  mode: "hash",
  base: process.env.BASE_URL,
  routes
});

export default router;
