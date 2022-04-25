<template>
  <div>
    <book-item v-for="item in books" :key="item.id" :book="item" />
  </div>
</template>

<script>
import BookItem from "@/components/content/display/BookItem"
export default {
  name: "Display",
  components: {
    BookItem
  },
  props: {
    books: Array
  }
}
</script>

<style scoped>

</style>
