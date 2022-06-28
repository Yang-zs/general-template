<template>
  <div id="main">
    <div class="main-top-tags">
      <div class="tags">个人中心</div>
    </div>
  </div>
  <router-view></router-view>
</template>

<script setup></script>

<style lang="scss" scoped>
#main {
  .main-top-tags {
    display: flex;
    height: 70px;
    .tags {
      width: 60px;
      height: 25px;
      font-size: 12px;
      display: flex;
      justify-content: center;
      align-items: center;
      color: white;
      background-color: rgb(59, 58, 58);
      margin-left: 6px;
      ::before {
        content: 'Read this: ';
        width: 10px;
        height: 10px;
        border-radius: 50%;
        background-color: red;
      }
    }
  }
}
</style>
