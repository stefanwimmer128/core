import Vue from "vue";
import VueRouter from "vue-router";

import routes from "./routes";

Vue.use(VueRouter);

export const router = new VueRouter({
    linkActiveClass: "active",
    linkExactActiveClass: "exact",
    mode: "history",
    routes,
});
