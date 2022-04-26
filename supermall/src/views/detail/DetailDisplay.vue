<template>
  <div class="detail-display">
    <div class="img-container">
      <img class="book-img" :src="detail.img" alt="">
    </div>
    <div class="content">
      <p class="title">{{detail.title}}</p>
      <p class="author">by {{detail.author}}</p>
      <p class="price">{{detail.price}}</p>
      <p style="display: inline;">网上价格</p>
    </div>
    <div class="content cart">
      <div class="quantity">
        <div>数量：</div>
        <select v-model="quantity">
          <option v-for="n in 10" :key="n" :value="n">{{n}}</option>
        </select>
      </div>
      <div class="add-to-cart" @click="addToCart">加入购物车</div>
    </div>
    <div v-if="detail.description" class="content">
      <p class="description">{{detail.description}}</p>
    </div>
    <alert-box v-if="added">
      添加成功!
    </alert-box>
  </div>
</template>

<script>
import { addItem } from "@/views/cart/cartMethod.js"
import AlertBox from "@/components/common/dialogBox/AlertBox"
export default {
  components: { AlertBox },
  name: "DetailDisplay",
  props: {
    detail: {
      type: Object,
      default: null
    }
  },
  data() {
    return {
      quantity: 1,
      added: false
    }
  },
  methods: {
    addToCart() {
      addItem(this.detail.isbn, this.quantity).then(() => {
        this.added = true;
        setTimeout(() => {
          this.added = false;
        }, 2500);
      });
    }
  }
}
</script>

<style scoped>
.img-container {
  height: 300px;
  margin: 10px;
  display: flex;
  justify-content: center;
}
.book-img {
  object-fit: contain;
}
.content {
  margin: 10px;
  padding: 10px;
  border-radius: 10px;
  border: 1px solid gainsboro;
}
.cart {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
.title {
  font-size: larger;
  font-weight: bold;
}
.author {
  margin-bottom: 10px;
}
.price {
  margin: 0 10px 0 0;
  display: inline;
  font-size: x-large;
  color: var(--violet-blue);
}
.quantity {
  display: flex;
  flex-direction: row;
}
.quantity select {
  width: 80px;
}
.add-to-cart {
  margin: 0 10px 0 0;
  padding: 10px 15px;
  border-radius: 10px;
  font-size: large;
  background-color: var(--mandarin);
  color: white;
}
.description {
  font-size: large;
}
</style>
