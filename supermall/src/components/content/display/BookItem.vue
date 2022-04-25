<template>
  <div class="book-item" @click="seeDetails">
    <img class="book-img" :src="book.img" alt="" >
    <div class="book-content">
      <p class="title">{{book.title}}</p>
      <p class="author">{{book.author}}</p>
      <p class="price">{{book.price}}</p>
      <p style="display: inline;">网上价格</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "BookItem",
  props: {
    book: Object
  },
  // created() {
  //   console.log(this.book);
  // }
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
.book-item {
  width: 100%;
  height: 140px;
  padding: 10px;
  border-bottom: 1px dashed gainsboro;
  display: flex;
  flex-direction: row;
}
.book-img {
  height: 100%;
  width: 83px;
  object-fit: contain;
}
.book-content {
  margin-left: 10px;
  width: calc(100% - 83px);
  height: 100%;
}
.title {
  font-size: 1.2em;
  font-weight: bold;

  /* overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap; */
}
.author {
  margin: 5px 0 15px 0;
  color: gray;
}
.price {
  margin: 0 10px 0 0;
  display: inline;
  font-size: 1.5em;
  color: var(--violet-blue);
}
</style>
