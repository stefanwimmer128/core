import Doc from "../../pages/Doc.vue";
import Docs from "../../pages/Docs.vue";
import Error404 from "../../pages/Error404.vue";
import Home from "../../pages/Home.vue";

export default [
    {
        component: Home,
        path: "/",
    },
    {
        component: Docs,
        path: "/docs",
    },
    {
        component: Doc,
        path: "/docs/:group/:path",
    },
    {
        component: Error404,
        path: "*",
    },
];
