import ElementUI from "element-ui";
import locale from "element-ui/lib/locale/lang/en";
import Vue from "vue";

import * as init from "./init";

import app from "./components/app.vue";

Vue.use(ElementUI, {
    locale,
});

export default new Vue({
    ...init,
    components: {
        app,
    },
    el: "div#app",
    template: "<app />",
});
