<template>
  <nav-bar>
    <template v-slot:center>
      我的
    </template>
  </nav-bar>
</template>

<script>
import NavBar from "@/components/content/navbar/NavBar"
export default {
  name: "Profile",
  components: {
    NavBar
  }
}
</script>

<style scoped>

</style>
