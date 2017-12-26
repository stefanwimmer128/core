<script>
    import docs from "../docs.json";
    
    export default {
        data() {
            return {
                docs,
                search_key: "",
            };
        },
        methods: {
            search(docs, search_key) {
                return docs.map(doc =>
                    doc.path,
                ).filter(doc =>
                    doc.toLowerCase().includes(search_key.toLowerCase()),
                );
            },
            url(fn) {
                return `/docs/${fn}`;
            },
        },
    };
</script>

<template lang="pug">
    el-container
        el-aside.w-20
            el-input(clearable placeholder="Search" prefix-icon="el-icon-search" v-model="search_key")
            div.list-group
                router-link(:key="fn" :to="url(fn)" v-for="fn in search(docs, search_key)").list-group-item.list-group-item-action {{fn}}
                div(v-if="search(docs, search_key).length === 0").disabled.font-italic.list-group-item No matches found!
        el-main.p-2
            slot
</template>
