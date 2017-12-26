<script>
    export default {};
</script>

<template lang="pug">
    el-container.h-100#app
        el-header.p-0(height="")
            nav.bg-primary.navbar.navbar-dark.navbar-expand.sticky-top
                router-link(to="/").navbar-brand @stefanwimmer128/core
                div.navbar-nav
                    router-link(to="/").nav-item.nav-link Home
                    router-link(to="/docs").nav-item.nav-link API documentation
        router-view
</template>
