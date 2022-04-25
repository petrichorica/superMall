<template>
  <div id="tab-bar">
    <slot></slot>
  </div>
</template>

<script>

export default {
  name: "TabBar",
  components: {
  },
  data() {
    return  {
      isActivate: true
    }
  }
}
</script>

<style scoped>
#tab-bar {
  display: flex;
  background-color: rgb(214, 205, 199);
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  z-index: 9;
  box-shadow: 0 -1px 2px rgba(185, 201, 206, 0.5);
}

.tab-bar-img {
  width: 24px;
  height: 24px;
}
</style>
