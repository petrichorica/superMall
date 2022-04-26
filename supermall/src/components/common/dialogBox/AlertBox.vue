<template>
  <div class="container">
    <div class="alert">
      <p>
        <slot></slot>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "AlertBox",
  props: ['message'],
  mounted() {
    this.fadeOut();
  },
  methods: {
    fadeOut() {
      setTimeout(() => {
        document.getElementsByClassName("alert")[0].classList.add("fade-out");
      }, 500);
    }
  }
}
</script>

<style scoped>
.container {
  width: 100%;
  position: fixed;
  top: 40%;
}
.alert {
  height: 60px;
  width: 100px;
  margin: 0 auto;
  display: block;
  box-shadow: 0 0 5px gainsboro;
  border-radius: 5px;
  background-color: white;
}
.alert p {
  text-align: center;
  line-height: 60px;
  font-size: large;
  font-weight: bold;
}
.fade-out {
  -webkit-transition: opacity 2s linear;
  -moz-transition: opacity 2s linear;
  -o-transition: opacity 2s linear;
  transition: opacity 2s linear;
  opacity:0;
}
</style>
