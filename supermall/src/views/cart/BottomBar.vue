<template>
  <div class="bottom-bar">
    <div class="total-price">合计: S${{total}}</div>
    <div class="pay">结算</div>
  </div>
</template>

<script>
export default {
  name: "BottomBar",
  props: {
    total: Number
  }
}
</script>

<style scoped>
.bottom-bar {
  position: fixed;
  bottom: var(--tab-bar-height);
  width: 100%;
  height: 40px;
  background-color: white;
  display: flex;
  justify-content: right;
}
.total-price, .pay {
  padding: 10px;
  text-align: center;
  font-size: large;
}
.pay {
  width: 25%;
  color: white;
  background-color: var(--mandarin);
}
</style>
