<template>
  <!-- 一级 menu 菜单 -->
  <el-menu
    :default-active="activeMenu"
    :background-color="$store.getters.cssVar.menuBg"
    :text-color="$store.getters.cssVar.menuText"
    :active-text-color="$store.getters.cssVar.menuActiveText"
    :unique-opened="true"
    router
  >
    <side-bar-item
      v-for="item in routes"
      :key="item.path"
      :route="item"
    ></side-bar-item>
  </el-menu>
</template>
<script setup>
import SideBarItem from './SideBarItem.vue'
import { computed } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { filterRouters, generateMenus } from '@/utils/router-filters'

const router = useRouter()
const route = useRoute()
const routes = computed(() => {
  const filterRoutes = filterRouters(router.getRoutes())
  return generateMenus(filterRoutes)
})
const activeMenu = computed(() => {
  const { path } = route
  console.log(path)
  return path
})
</script>
