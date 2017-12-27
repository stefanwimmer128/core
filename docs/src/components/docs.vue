<script>
    import page from "./page.vue";
    
    import docs from "../docs.json";
    
    export default {
        components: {
            page,
        },
        computed: {
            docs() {
                return docs.filter(doc =>
                    doc.path.toLowerCase().includes(this.search),
                );
            },
        },
        data() {
            return {
                search: "",
            };
        },
    };
</script>

<template lang="pug">
    el-container
        el-aside(width="" style="min-width: 20%;")
            el-input(clearable placeholder="Search" prefix-icon="el-icon-search" v-model="search")
            div.list-group
                router-link(:key="i" :to="`/docs/${doc.path}`" v-for="(doc, i) in docs").list-group-item.list-group-item-action {{doc.path}}
                div(v-if="docs.length === 0").disabled.font-italic.list-group-item No matches found!
        page
            slot
</template>
