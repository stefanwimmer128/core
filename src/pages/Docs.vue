<script>
    import {
        mapState,
    } from "../init/store/docs";
    
    import docs from "../components/docs.vue";
    import markdown from "../components/markdown.vue";
    
    export default {
        components: {
            docs,
            markdown,
        },
        computed: {
            ...mapState({
                docs: state =>
                    state.value,
            }),
            doc() {
                return this.docs ? this.docs.find(doc =>
                    doc.path === "index",
                ).content : "";
            },
        },
    };
</script>

<template lang="pug">
    docs
        markdown(:markdown="doc")
</template>
