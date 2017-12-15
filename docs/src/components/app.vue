<script>
    export default {};
</script>

<style lang="scss" scoped>
    .nav-link {
        cursor: pointer;
    }
    
    #content {
        overflow-x: auto;
    }
</style>

<template lang="pug">
    div#app
        nav.bg-primary.navbar.navbar-dark.navbar-expand.sticky-top
            router-link(to="/").navbar-brand @stefanwimmer128/core
            div.navbar-nav
                router-link(to="/").nav-item.nav-link Home
                router-link(to="/docs").nav-item.nav-link API documentation
        router-view#content
</template>
