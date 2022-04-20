<template>
  <div class="app-wrapper">
    <side-bar
      id="guide-sidebar"
      class="sidebar-container"
    />
    <div class="main-container">
      <div class="fixed-header">
        <nav-bar />
      </div>
      <app-main class="app-main" />
    </div>
  </div>
</template>

<script setup>
import {} from 'vue'
import NavBar from './components/NavBar'
import SideBar from './components/SideBar'
import AppMain from './components/AppMain'

</script>

<style lang="stylus" scoped>
.app-wrapper {
  position: relative;
  height: 100%;
  width: 100%;
  display: flex
}
.sidebar-container{
  width: $sideBarWidth !important;
}
.main-container{
  flex: 1
  background: #fff
  display: flex
  flex-direction: column
}
.fixed-header {
  flex: 1
}

</style>
