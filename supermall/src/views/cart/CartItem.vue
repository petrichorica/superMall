<template>
  <div class="cart-item">
    <div class="select-container">
      <input type="checkbox" :id="item.id" v-model="checked">
    </div>
    <label class="img-container" :for="item.id">
      <img class="book-img" :src="item.img" alt="" >
    </label>
    <div class="item-content">
      <div class="title" @click="seeDetails">{{item.title}}</div>
      <div class="price">{{displayPrice(item.price)}}</div>
      <div class="quantity">
        <div class="q-bar">
          <input-number :init="item.quantity" :min="1" v-model="value" />
        </div>
        <p class="delete" @click="delItem">删除</p>
      </div>
    </div>
  </div>
</template>

<script>
import { changeQuantity, deleteItem } from "@/views/cart/cartMethod.js"
import InputNumber from "@/components/common/inputNumber/InputNumber"
export default {
  name: "CartItem",
  components: {
    InputNumber
  },
  props: {
    item: Object
  },
  data() {
    return {
      value: null,
      checked: true
    }
  },
  created() {
    this.value = this.item.quantity;
  },
  methods: {
    displayPrice(price) {
      return "S$" + price.toFixed(2);
    },
    delItem() {
      deleteItem(this.item.isbn).then(res => {
        console.log(res);
        this.$emit('delItem', this.item.isbn);
      })
    },
    seeDetails() {
      this.$router.push({
        path: "/detail",
        query: {
          isbn: this.item.isbn
        }
      });
    }
  },
  watch: {
    value: function(val) {
      changeQuantity(this.item.isbn, val).then(() => {
        this.$emit('quantity', this.item.isbn, val);
      })
    },
    checked: function(val) {
      this.$emit('select', this.item.isbn, val);
    }
  }
}
</script>

<style scoped>
.cart-item {
  width: 100%;
  height: 160px;
  margin: 15px 0;
  padding: 10px;
  border: 1px solid gainsboro;
  border-radius: 5px;
  display: flex;
}
.container {
  display: flex;
}
.select-container {
  margin: 2px;
}
.img-container {
  width: 100px;
  height: 100%;
}
.book-img {
  width: 100px;
  height: 100%;
  object-fit: contain;
}
.item-content {
  margin: 0 0 0 5px;
  height: 100%;
}
.title {
  height: 64px;
  font-size: large;
  font-weight: bold;
  text-decoration: underline;
  white-space: normal;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3; /* 行数*/
  -webkit-box-orient: vertical;;
}
.price {
  margin: 10px 0 0 0;
  font-size: 1.5em;
  color: var(--violet-blue);
}
.quantity {
  margin: 10px 0 0 0;
  display: flex;
}
.quantity .q-bar {
  width: 100px;
}
.quantity .delete {
  margin: 0 12px;
  text-decoration: underline;
}
</style>
