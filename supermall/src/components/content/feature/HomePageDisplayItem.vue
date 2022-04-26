<template>
  <div class="book" @click="seeDetails">
    <img :src="baseURL + book.url" alt="">
    <p class="title">{{book.title}}</p>
    <p class="price">${{book.price}}</p>
    <p style="display: inline;">网上价格</p>
  </div>
</template>

<script>
export default {
  name: "HomePageDisplayItem",
  props: {
    book: Object
  },
  data() {
    return {
      baseURL: "http://35.220.166.211:3000"
    }
  },
  methods: {
    seeDetails() {
      this.$router.push({
        path: "/detail",
        query: {
          isbn: this.book.isbn
        }
      });
    }
  }
}
</script>

<style scoped>
.book {
  width: 100%;
  min-height: 250px;
  margin: 10px 0;
  flex: 0 0 48%;
}
.book img {
  width: 100%;
}
.book .title {
  font-size: 0.9em;
  font-weight: bold;
}
.book .price {
  margin: 0 10px 0 0;
  color: var(--violet-blue);
  display: inline;
  font-weight: bold;
}
</style>
