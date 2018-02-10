export function docs(store) {
    if (store.state.docs || store.state.pending)
        return ;
    
    store.commit("pending");
    fetch("./docs.json")
        .then(body =>
            body.json()
        ).then(docs =>
            store.commit("docs", docs),
        ).catch(error =>
            store.commit("error", error),
        );
}
