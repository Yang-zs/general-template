<template>
  <el-header>
    <div class="left">
      <div class="left-icon">
        <el-icon class="left-icon-expand"><Expand /></el-icon>
      </div>
      <div class="left-item">个人中心</div>
    </div>
    <div class="right">
      <div>
        <el-icon>
          <svg-icon className="svg-guide" icon="guide"></svg-icon
        ></el-icon>
      </div>
      <div>
        <el-icon>
          <svg-icon className="svg-language" icon="search"></svg-icon
        ></el-icon>
      </div>
      <div>
        <el-icon>
          <svg-icon className="svg-language" icon="fullscreen"></svg-icon
        ></el-icon>
      </div>
      <div>
        <el-icon>
          <svg-icon className="svg-language" icon="change-theme"></svg-icon
        ></el-icon>
      </div>
      <div><svg-icon className="svg-language" icon="language"></svg-icon></div>
      <div>6</div>
      <div>
        <svg-icon className="svg-language" icon="personnel-manage"></svg-icon>
      </div>
    </div>
  </el-header>
</template>

<script setup></script>

<style lang="scss" scoped>
body {
}
.el-header {
  display: flex;
  justify-content: space-between;
  .left {
    display: flex;
    div {
      padding-left: 16px;
    }
  }
  .right {
    display: flex;
    div {
      margin: 0 10px;
    }
  }
}
.svg-icon,
.left-icon-expand {
  cursor: pointer;
}
</style>
