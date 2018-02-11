<script>
    import {
        mapActions,
        mapGetters,
        mapState,
    } from "../init/store/docs";
    
    import page from "./page.vue";
    
    export default {
        beforeUpdate() {
            this.groups.clear();
        },
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
            ...mapGetters([
                "docs",
            ]),
            searched() {
                return this.docs.filter(doc =>
                    doc.path.toLowerCase().includes(this.search),
                );
            },
        },
        data() {
            return {
                groups: new Set(),
                search: "",
            };
        },
        methods: {
            ...mapActions([
                "load",
            ]),
            reload() {
                this.load(null);
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
                    template(v-for="(doc, i) in searched")
                        span(v-if="! groups.has(doc.group)").disabled.nav-item.nav-link {{void groups.add(doc.group) || doc.group}}
                        router-link(:to="`/docs/${doc.group}/${doc.path}`").nav-item.nav-link {{doc.group}}/{{doc.path}}
                    span(v-if="searched.length === 0").disabled.font-italic.nav-item.nav-link No matches found!
            page
                slot
        el-main(v-else)
            h1 Network error
            p Could not get API information.
            el-button(@click="reload") Reload
</template>
