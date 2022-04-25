<template>
  <div class="feature">
    <div class="head">
      <h4>{{title}}</h4>
    </div>
    <div class="books">
      <home-page-display-item v-for="item in displayData" :key="item.id" :book="item" />
    </div>
  </div>
</template>

<script>
import HomePageDisplayItem from '@/components/content/feature/HomePageDisplayItem'
export default {
  name: "HomePageDisplay",
  components: {
    HomePageDisplayItem
  },
  props: {
    title: String,
    displayData: Array
  },
  data() {
    return {
      todaysFeature: null
    }
  }
}
</script>

<style scoped>
.feature {
  background-color: white;
}
.head {
  padding: 10px 20px;
  text-align: left;
  background-color: var(--silver);
  color: white;
}
.books {
  width: 100%;
  min-height: 350px;
  justify-content: space-between;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
</style>
