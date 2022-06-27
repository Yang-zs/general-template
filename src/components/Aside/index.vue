<template>
  <el-aside width="200px">
    <el-menu
      active-text-color="#ffd04b"
      background-color="#545c64"
      class="el-menu-vertical-demo"
      default-active="2"
      text-color="#fff"
      @open="handleOpen"
      @close="handleClose"
    >
      <el-menu-item index="1-4-1">个人中心</el-menu-item>
      <el-sub-menu index="2">
        <template #title>用户</template>
        <el-menu-item index="2-4-1">item one</el-menu-item>
      </el-sub-menu>
      <el-sub-menu index="3">
        <template #title>文章</template>
        <el-menu-item index="3-4-1">item one</el-menu-item>
      </el-sub-menu>
    </el-menu>
  </el-aside>
</template>

<script setup>
</script>

<style lang="scss" scoped>
.el-menu {
  height: 100%;
}
</style>
