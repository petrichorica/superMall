<template>
  <home-page-display title="新书速递" :display-data="newBooks"/>
</template>

<script>
import { getNewBookData } from '@/network/newBooks.js'
import HomePageDisplay from '@/components/content/feature/HomePageDisplay'
export default {
  name: "NewBooks",
  components: {
    HomePageDisplay
  },
  data() {
    return {
      newBooks: []
    }
  },
  created() {
    getNewBookData().then(res => {
      this.newBooks = res;
    });
  }
}
</script>

<style scoped>

</style>
