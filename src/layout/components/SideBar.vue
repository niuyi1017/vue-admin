<template>
  <div class="side-bar" :style="{background:CssVariables.menuBg }">
    <div class="logo-container">
      <el-avatar
        :size="44"
        shape="square"
        src="https://m.imooc.com/static/wap/static/common/img/logo-small@2x.png"
      />
      <h1 class="logo-title" v-if="$store.getters.sidebarOpened">
       <!-- imooc-admin -->
       {{$t('msg.test')}}
      </h1>
    </div>
    <el-scrollbar>
      <side-bar-menu></side-bar-menu>
    </el-scrollbar>
  </div>
</template>
<script setup>
import {} from 'vue'
import CssVariables from '../../assets/style/index.styl'
import SideBarMenu from './side-bar/SideBarMenu.vue'
</script>

<style lang="stylus" scoped>
.side-bar {
  transition: width 0.28s;
  z-index: 1001;
  overflow: hidden;

  .logo-container {
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;

    .logo-title {
      margin-left: 10px;
      color: #fff;
      font-weight: 600;
      font-size: 16px;
      white-space: nowrap;
    }
  }

  // 重置 element-plus 的css
  .horizontal-collapse-transition {
    transition: 0s width ease-in-out, 0s padding-left ease-in-out, 0s padding-right ease-in-out;
  }

  .scrollbar-wrapper {
    overflow-x: hidden !important;
  }

  .el-scrollbar__bar.is-vertical {
    right: 0px;
  }

  .el-scrollbar {
    height: 100%;
  }

  &.has-logo {
    .el-scrollbar {
      height: calc(100% - 50px);
    }
  }

  .is-horizontal {
    display: none;
  }

  a {
    display: inline-block;
    width: 100%;
    overflow: hidden;
  }

  .svg-icon {
    margin-right: 16px;
  }

  .sub-el-icon {
    margin-right: 12px;
    margin-left: -2px;
  }

  .el-menu {
    border: none;
    height: 100%;
    width: 100% !important;
  }

  .is-active > .el-submenu__title {
    color: $subMenuActiveText !important;
  }

  & .nest-menu .el-submenu > .el-submenu__title, & .el-submenu .el-menu-item {
    min-width: $sideBarWidth !important;
  }
}

.hideSidebar {
  .sidebar-container {
    width: 54px !important;
  }

  .main-container {
    margin-left: 54px;
  }

  .submenu-title-noDropdown {
    padding: 0 !important;
    position: relative;

    .el-tooltip {
      padding: 0 !important;

      .svg-icon {
        margin-left: 20px;
      }

      .sub-el-icon {
        margin-left: 19px;
      }
    }
  }

  .el-submenu {
    overflow: hidden;

    & > .el-submenu__title {
      padding: 0 !important;

      .svg-icon {
        margin-left: 20px;
      }

      .sub-el-icon {
        margin-left: 19px;
      }

      .el-submenu__icon-arrow {
        display: none;
      }
    }
  }

  .el-menu--collapse {
    .el-submenu {
      & > .el-submenu__title {
        & > span {
          height: 0;
          width: 0;
          overflow: hidden;
          visibility: hidden;
          display: inline-block;
        }
      }
    }
  }
}

.el-menu--collapse .el-menu .el-submenu {
  min-width: $sideBarWidth !important;
}

.withoutAnimation {
  .main-container, .sidebar-container {
    transition: none;
  }
}

.el-menu--vertical {
  & > .el-menu {
    .svg-icon {
      margin-right: 16px;
    }

    .sub-el-icon {
      margin-right: 12px;
      margin-left: -2px;
    }
  }

  // 菜单项过长时
  > .el-menu--popup {
    max-height: 100vh;
    overflow-y: auto;

    &::-webkit-scrollbar-track-piece {
      background: #d3dce6;
    }

    &::-webkit-scrollbar {
      width: 6px;
    }

    &::-webkit-scrollbar-thumb {
      background: #99a9bf;
      border-radius: 20px;
    }
  }
}
</style>
