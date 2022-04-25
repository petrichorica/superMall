<template>
  <div class="nav-bar">
    <div class="left">
      <slot name="left"></slot>
    </div>
    <div class="center">
      <slot name="center"></slot>
    </div>
    <div class="right">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavBar"
}
</script>

<style scoped>
  .nav-bar {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 9;

    display: flex;
    height: var(--nav-bar-height);
    background-color: rgb(41, 76, 173);
    color: white;
    padding-top: 5px;
    text-align: center;
    align-items: center;
    box-shadow: 0 1px 5px rgba(185, 201, 206, 0.5);
  }
  .left, .right {
    width: 60px;
  }
  .center {
    flex: 1;
    font-size: large;
  }
</style>
