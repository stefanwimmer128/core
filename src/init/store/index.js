import Vue from "vue";
import Vuex from "vuex";
import createLogger from "vuex/dist/logger";

import * as actions from "./actions";
import * as mutations from "./mutations";
import state from "./state";

Vue.use(Vuex);

export const store = new Vuex.Store({
    actions,
    mutations,
    plugins: process.env.NODE_ENV === "development" ? [
        createLogger({
            collapsed: false,
        }),
    ] : [],
    store,
});
