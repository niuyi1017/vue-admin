<template>
  <div class="app-main">
    <router-view></router-view>
  </div>
</template>
<script setup>
import {} from 'vue'

</script>

<style lang="stylus" scoped>
.app-main {
  min-height: calc(100vh - 50px);
  position: relative;
  overflow: hidden;
  padding: 61px 20px 20px 20px;
  box-sizing: border-box;
  background: #ddd
}
</style>
