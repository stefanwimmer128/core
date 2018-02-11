<script>
    import {
        mapGetters,
    } from "../init/store/docs";
    
    import docs from "../components/docs.vue";
    import markdown from "../components/markdown.vue";
    
    export default {
        components: {
            docs,
            markdown,
        },
        computed: {
            ...mapGetters([
                "docs",
            ]),
            doc() {
                return this.docs.find(doc =>
                    doc.path === this.$route.params.path && doc.group === this.$route.params.group,
                );
            },
        },
    };
</script>

<template lang="pug">
    docs
        template(v-if="doc")
            markdown(:markdown="doc.content")
            a(:href="`https://github.com/stefanwimmer128/core/blob/master/src/${doc.data.source}`" v-if="doc.data.source" target="_blank")
                el-button(plain type="primary") {{doc.data.source}}
        template(v-else)
            h1 Error 404 Not Found
            p Documentation for "{{this.$route.params.doc}}" not found!
</template>

