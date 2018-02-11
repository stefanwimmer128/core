export function load(store, value = store.state.value) {
    if (value || store.state.pending)
        return ;
    
    store.commit("pending");
    fetch("./docs.json")
        .then(body =>
            body.json()
        ).then(value =>
            store.commit("value", value),
        ).catch(error =>
            store.commit("error", error),
        );
}
