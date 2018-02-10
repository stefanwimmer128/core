<script>
    import docs from "../components/docs.vue";
    import markdown from "../components/markdown.vue";
    
    export default {
        components: {
            docs,
            markdown,
        },
        data() {
            return {
                docs: this.$store.state.docs.find(doc =>
                    doc.path === "index",
                ).content,
            };
        },
    };
</script>

<template lang="pug">
    docs
        markdown(:markdown="docs")
</template>
