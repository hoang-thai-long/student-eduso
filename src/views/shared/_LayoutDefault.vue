<template>
    <div class="container-scroller">
        <!-- partial:partials/_navbar.html -->
        <nav-top></nav-top>
        <!-- partial -->
        <div class="container-fluid page-body-wrapper">
            <!-- partial:partials/_settings-panel.html -->
            <theme-settings></theme-settings>
            <!-- partial -->
            <right-side-bar></right-side-bar>
            <!-- partial:partials/_sidebar.html -->
            <left-side-bar></left-side-bar>
            <!-- partial -->
            <div class="main-panel">
                <div class="content-wrapper">
                    <router-view></router-view>
                </div>
                <!-- content-wrapper ends -->
            </div>
            <!-- main-panel ends -->
        </div>
        <!-- page-body-wrapper ends -->
    </div>
</template>

<script lang="ts" setup>
import ThemeSetting from './ThemeSettings'
import RightSideBar from './RightSideBar'
import NavTop from './NavTop'
import LeftSideBar from './LeftSideBar'
</script>