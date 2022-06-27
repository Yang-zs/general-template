<template>
  <div class="common-layout">
    <el-container>
      <MyAside />
      <el-container>
        <el-header>
          <MyNavBar />
        </el-header>
        <el-main>Main</el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup>
import MyAside from '../../components/Aside/index.vue'
import MyNavBar from '../../components/NavBar/index.vue'
</script>

<style lang="scss" scoped>
.common-layout {
  height: 100%;
}
.el-header {
  background-color: #f6f6f6;
  color: #333;
  margin: 0;
  padding: 0;
  line-height: 60px;
}

.el-aside {
  background-color: #d3dce6;
  color: #333;

  line-height: 200px;
}

.el-main {
  background-color: #e9eef3;
  color: #333;

  line-height: 160px;
}
.el-container {
  height: 100%;
}
</style>
