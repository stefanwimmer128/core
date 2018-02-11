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
        computed: mapGetters([
            "data",
        ]),
    };
</script>

<template lang="pug">
    docs
        markdown(:markdown="data.index.content" v-if="data.index.content")
</template>
