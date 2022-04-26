<template>
  <div class="container">
    <div class="confirm">
      <p>是否删除</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "ConfirmBox"
}
</script>

<style scoped>
.container {
  width: 100%;
  position: fixed;
  top: 40%;
}
.confirm {
  height: 80px;
  width: 160px;
  margin: 0 auto;
  display: block;
  box-shadow: 0 0 5px gainsboro;
  border-radius: 5px;
  background-color: white;
}
.confirm p {
  text-align: center;
  line-height: 50px;
  font-size: large;
  font-weight: bold;
}
</style>
