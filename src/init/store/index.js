import Vue from "vue";
import Vuex from "vuex";
import createLogger from "vuex/dist/logger";

import * as docs from "./docs";

Vue.use(Vuex);

export const store = new Vuex.Store({
    modules: {
        docs,
    },
    plugins: process.env.NODE_ENV === "development" ? [
        createLogger({
            collapsed: false,
        }),
    ] : [],
});
