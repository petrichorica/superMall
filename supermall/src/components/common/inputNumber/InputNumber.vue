<template>
  <div class="input-bar">
    <div class="minus" @click="minus">-</div>
    <div class="number">{{n}}</div>
    <div class="plus" @click="plus">+</div>
  </div>
</template>

<script>
export default {
  name: "InputNumber",
  props: {
    init: Number,
    modelValue: Number,
    min: Number,
    max: Number
  },
  data() {
    return {
      n: null
    }
  },
  created() {
    this.n = this.init;
  },
  methods: {
    minus() {
      if (typeof this.min === 'undefined' ||
        (typeof this.min !== 'undefined' && this.n > this.min)) {
        this.n--;
        this.$emit("update:modelValue", this.n);
      }
    },
    plus() {
      if (typeof this.max === 'undefined' ||
        (typeof this.max !== 'undefined' && this.n < this.max)) {
        this.n++;
        this.$emit("update:modelValue", this.n);
      }
    }
  }
}
</script>

<style scoped>
.input-bar {
  display: flex;
}
.minus, .plus {
  width: 20px;
  text-align: center;
}
.minus {
  border: 1px solid gray;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
}
.plus {
  border: 1px solid gray;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
}
.number {
  flex: 1;
  border: 1px solid gray;
  text-align: center;
}
</style>
