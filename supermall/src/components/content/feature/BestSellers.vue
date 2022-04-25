<template>
  <home-page-display title="畅销书" :display-data="featureData" />
</template>

<script>
import HomePageDisplay from "@/components/content/feature/HomePageDisplay"
import { getBestSellersData } from '@/network/bestSellers.js'
export default {
  name: "BestSellers",
  components: {
    HomePageDisplay
  },
  data() {
    return  {
      featureData: []
    }
  },
  created() {
    getBestSellersData().then(res => {
      this.featureData = res;
    });
  }
}
</script>

<style scoped>

</style>
