<script>
    import {
        mapActions,
        mapState,
    } from "../init/store/docs";
    
    import page from "./page.vue";
    
    export default {
        components: {
            page,
        },
        computed: {
            ...mapState({
                error: state =>
                    state.error,
                pending: state =>
                    state.pending,
                value: state =>
                    state.value,
            }),
            docs() {
                return this.value ? this.value.filter(doc =>
                    doc.path.toLowerCase().includes(this.search) && doc.path !== "index",
                ) : [];
            },
        },
        data() {
            return {
                search: "",
            };
        },
        methods: {
            ...mapActions([
                "load",
            ]),
            reload() {
                this.$store.commit("docs/value", null);
                this.load();
            }
        },
        mounted() {
            this.load();
        },
    };
</script>

<template lang="pug">
    el-container(v-loading="pending")
        template(v-if="value")
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
