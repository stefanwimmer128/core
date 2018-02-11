import {
    set,
} from "lodash";

export function data(state) {
    return state.value ? state.value : {
        index: {},
        groups: [],
    };
}

export function docs(state, getters) {
    return getters.data.groups.reduce((groups, group) => groups.concat(group.docs.map(doc =>
        set(doc, "group", group.name),
    )), []);
}
