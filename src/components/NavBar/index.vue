<template>
  <el-header>
    <div class="left">
      <div class="left-icon">
        <el-icon><Expand /></el-icon>
      </div>
      <div class="left-item">个人中心</div>
    </div>
    <div class="right">
      <div>1</div>
      <div>
        <el-icon>
          <svg-icon className="svg-language" icon="search"></svg-icon
        ></el-icon>
      </div>
      <div>3</div>
      <div>4</div>
      <div>5</div>
      <div>6</div>
      <div>7</div>
    </div>
  </el-header>
</template>

<script setup></script>

<style lang="scss" scoped>
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
</style>
