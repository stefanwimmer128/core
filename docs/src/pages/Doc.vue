<script>
    import Remarkable from "remarkable";
    
    import __docs from "../docs.json";
    
    import docs from "../components/docs.vue";
    
    export default {
        components: {
            docs,
        },
        computed: {
            doc() {
                return __docs.find(doc =>
                    doc.path === this.$route.params.doc,
                );
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
        template(v-if="doc")
            component(:is="renderMarkdown(doc.content)")
            a(:href="`https://github.com/stefanwimmer128/core/blob/master/src/${doc.data.source}`" if="doc.data.source" target="_blank")
                el-button(plain type="primary") {{doc.data.source}}
        template(v-else)
            h1 Error 404 Not Found
            p Documentation for "{{this.$route.params.doc}}" not found!
</template>

