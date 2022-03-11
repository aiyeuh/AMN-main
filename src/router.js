import Vue from "vue";
import VueRouter from "vue-router";
import app from "./App.vue";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "app",
    component: app,
  },
  {
    path: "/dashboard",
    name: "dashboard",
    component: () => import("./pages/Dashboard.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});
export default router;
