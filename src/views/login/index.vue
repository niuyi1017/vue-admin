<template>
  <div class="login-wrapper">
    <div class="form-wrapper">
      <h2 class="form-title"></h2>
      <el-form label-width="120px">
        <el-form-item label="Activity name">
          <div class="svg-content">
            <el-icon><avatar /></el-icon>
          </div>
          <el-input />
        </el-form-item>
        <el-form-item label="Activity name">
          <el-input />
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script setup>
import { Avatar } from '@element-plus/icons-vue'
// export default {
//   //  const form = ref({
//   //    name: ""
//   //  })
// }
</script>

<style lang="stylus" scoped></style>
