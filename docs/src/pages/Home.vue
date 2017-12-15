<script>
    import page from "../components/page.vue";
    
    export default {
        components: {
            page,
        },
    };
</script>

<template lang="pug">
    page
        h1 @stefanwimmer128/core
        p Complex features made easy
        router-link(tag="el-button" to="/docs" type="primary") To API documentation
</template>
