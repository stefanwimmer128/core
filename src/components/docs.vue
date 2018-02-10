<script>
    import page from "./page.vue";
    
    export default {
        beforeUpdate() {
            this.reload();
        },
        components: {
            page,
        },
        computed: {
            docs() {
                return this.$store.state.docs.filter(doc =>
                    doc.path.toLowerCase().includes(this.search),
                );
            },
        },
        data() {
            return {
                error: this.$store.state.error,
                pending: this.$store.state.pending,
                search: "",
            };
        },
        methods: {
            reload() {
                if (this.$store.state.docs === null && ! this.pending)
                    this.$store.dispatch("docs");
            },
        },
        mounted() {
            this.reload();
        },
    };
</script>

<template lang="pug">
    el-container(v-loading="pending")
        template(v-if="! error && ! pending")
            el-aside(width="" style="min-width: 20%;")
                el-input(clearable placeholder="Search" prefix-icon="el-icon-search" v-model="search")
                nav.flex-column.nav.nav-pills
                    router-link(:key="i" :to="`/docs/${doc.path}`" v-for="(doc, i) in docs").nav-item.nav-link {{doc.path}}
                    span(v-if="docs.length === 0").disabled.font-italic.nav-item.nav-link No matches found!
            page
                slot
        el-main(v-else)
            h1 Network error
            p Could not get API information.
            el-button(@click="reload") Reload
</template>
