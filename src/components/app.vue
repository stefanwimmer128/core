<script>
    export default {};
</script>

<template lang="pug">
    el-container.h-100#app
        el-header.px-0(height="")
            nav.bg-primary.navbar.navbar-dark.navbar-expand.sticky-top
                a(href="https://github.com/stefanwimmer128/core" target="_blank").navbar-brand
                    img(src="../images/github.png").align-top.d-inline-block
                    |  @stefanwimmer128/core
                div.navbar-nav
                    router-link(to="/").nav-item.nav-link Home
                    router-link(to="/docs").nav-item.nav-link API documentation
        router-view
</template>
