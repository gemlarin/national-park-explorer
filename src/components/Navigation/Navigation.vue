<template>
    <b-navbar toggleable="md" type="dark" variant="info" class="top-nav">
        <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
        <b-collapse is-nav id="nav_collapse">
            <!-- Right aligned nav items -->
            <b-navbar-nav class="ml-auto">
                <b-nav-item href="#"><router-link to="/">Home</router-link></b-nav-item>
                <b-nav-item href="#"><router-link to="/test">Test</router-link></b-nav-item>
            </b-navbar-nav>
        </b-collapse>
</b-navbar>
</template>

<style>
    .top-nav.bg-info{
        background-color:#EDEDED !important;
    }
</style>



