import {
    createNamespacedHelpers,
} from "vuex";

export const namespaced = true;

export * as actions from "./actions";
export * as mutations from "./mutations";

export state from "./state";

export const {
    mapActions,
    mapState,
} = createNamespacedHelpers("docs");
