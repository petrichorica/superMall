<template>
  <home-page-display title="今日推荐" :display-data="featureData" />
</template>

<script>
import HomePageDisplay from "@/components/content/feature/HomePageDisplay"
import { getFeatureData } from '@/network/feature.js'
export default {
  name: "Feature",
  components: {
    HomePageDisplay
  },
  data() {
    return  {
      featureData: []
    }
  },
  created() {
    getFeatureData().then(res => {
      this.featureData = res;
    });
  }
}
</script>

<style scoped>

</style>
