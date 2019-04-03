import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("./views/Home/index.vue")
  },
  {
    path: "/portfolio",
    name: "portfolio",
    component: () => import("./views/Portfolio/index.vue")
  },
  {
    path: "/about",
    name: "about",
    component: () => import("./views/About/index.vue")
  }
];

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});
