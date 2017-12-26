<script>
    import Remarkable from "remarkable";
    
    import __docs from "../docs.json";
    
    import docs from "../components/docs.vue";
    import Error404 from "./Error404.vue";
    
    export default {
        components: {
            docs,
            Error404,
        },
        computed: {
            markdown() {
                return __docs.find(doc =>
                    doc.path === this.$route.params.doc,
                )?.content;
            },
        },
        methods: {
            renderMarkdown(markdown) {
                return {
                    template: `<div>${new Remarkable().render(markdown)}</div>`,
                };
            }
        },
    };
</script>

<template lang="pug">
    docs
        component(:is="renderMarkdown(markdown)" v-if="markdown")
        template(v-else)
            h1 Error 404 Not Found
            p Documentation for "{{this.$route.params.doc}}" not found!
</template>

