<template>
  <div id="cart">
    <nav-bar>
      <template v-slot:center>
        购物车
      </template>
      <template v-slot:left>
        <img class="back" @click="back" src="@/assets/img/return.svg" alt="">
      </template>
    </nav-bar>
    <div class="cart-display" v-if="cartList">
      <cart-item @delItem="delItem" @quantity="quantity" @select="select" v-for="item in cartList" :key="item.id" :item="item" />
    </div>
    <bottom-bar :total="total" />
    <alert-box v-if="deleted">
      已删除商品
    </alert-box>
  </div>
</template>

<script>
import { getCartData } from "@/network/cart.js"
import { getDetail } from "@/network/detail.js"
import NavBar from "@/components/content/navbar/NavBar"
import CartItem from "@/views/cart/CartItem"
import BottomBar from "@/views/cart/BottomBar"
import AlertBox from '@/components/common/dialogBox/AlertBox.vue'
export default {
  name: "Cart",
  components: {
    NavBar, CartItem, BottomBar, AlertBox
  },
  data() {
    return {
      cartList: [],
      orderList: [],
      deleted: false
    }
  },
  created() {
    getCartData().then(res => {
      const cart = res;
      for (let item of cart) {
        getDetail(item.isbn).then(res2 => {
          this.addItem(res2[0], item);
        })
      }
    })
  },
  methods: {
    back() {
      this.$router.back();
    },
    getPrice(priceStr) {
      if (priceStr.startsWith("S$")) {
        return parseInt(priceStr.slice(2));
      } else {
        return parseInt(priceStr);
      }
    },
    addItem(book, item) {
      var cartItem = new Object();
      cartItem["quantity"] = item.quantity;
      cartItem["id"] = book.id;
      cartItem["isbn"] = book.isbn;
      cartItem["img"] = book.img;
      cartItem["price"] = this.getPrice(book.price);
      cartItem["title"] = book.title;
      this.cartList.push(cartItem);
      this.orderList.push({
        "isbn": book.isbn,
        "price": this.getPrice(book.price),
        "quantity": item.quantity,
        "selected": true
      });
    },
    quantity(isbn, q) {
      for (let item of this.orderList) {
        if (item.isbn == isbn) {
          item.quantity = q;
          break;
        }
      }
      for (let item of this.cartList) {
        if (item.isbn == isbn) {
          item.quantity = q;
          break;
        }
      }
    },
    select(isbn, selected) {
      for (let item of this.orderList) {
        if (item.isbn == isbn) {
          item.selected = selected;
          break;
        }
      }
    },
    delItem(isbn) {
      let index1, index2;
      for (let i=0; i<this.cartList.length; i++) {
        if (this.cartList[i].isbn == isbn) {
          index1 = i;
          break;
        }
      }
      if (typeof index1 !== 'undefined') {
        this.cartList.splice(index1, 1);
      }
      for (let i=0; i<this.orderList.length; i++) {
        if (this.orderList[i].isbn == isbn) {
          index2 = i;
          break;
        }
      }
      if (typeof index2 !== 'undefined') {
        this.orderList.splice(index2, 1);
      }

      this.deleted = true;
      setTimeout(() => {
        this.deleted = false;
      }, 2500);
    }
  },
  computed: {
    total() {
      let total = 0;
      for (let item of this.orderList) {
        if (item.selected) {
          total += item.quantity * item.price;
        }
      }
      return total;
    }
  }
}
</script>

<style scoped>
.cart-display {
  position: relative;
  top: var(--nav-bar-height);
  margin-bottom: 120px;
  padding: 10px;
}
.back {
  width: 20px;
}
</style>
