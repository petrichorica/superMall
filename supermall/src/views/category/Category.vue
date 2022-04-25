<template>
  <div id="category">
    <nav-bar>
      <template v-slot:center>
        分类
      </template>
    </nav-bar>
    <category-menu />
  </div>
</template>

<script>
import NavBar from "@/components/content/navbar/NavBar"
import CategoryMenu from "@/components/content/menu/CategoryMenu"
export default {
  name: "Category",
  components: {
    NavBar, CategoryMenu
  }
}
</script>

<style scoped>
</style>
