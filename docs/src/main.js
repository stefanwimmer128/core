import ElementUI from "element-ui";
import locale from "element-ui/lib/locale/lang/en";
import Vue from "vue";

import app from "./components/app";

Vue.use(ElementUI, {
    locale,
});

export default new Vue({
    components: {
        app,
    },
    el: "div#app",
    template: "<app />",
});
