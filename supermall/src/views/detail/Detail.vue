<template>
  <div>
    <nav-bar>
      <template v-slot:center>
        详情
      </template>
      <template v-slot:left>
        <img class="back" @click="back" src="@/assets/img/return.svg" alt="">
      </template>
    </nav-bar>
    <div class="detail">
      <detail-display v-if="show" :detail="detail" />
    </div>
  </div>
</template>

<script>
import { getDetail } from "@/network/detail.js"
import NavBar from "@/components/content/navbar/NavBar"
import DetailDisplay from "@/views/detail/DetailDisplay"

export default {
  name: "Detail",
  components: {
    NavBar, DetailDisplay
  },
  data() {
    return {
      detail: null,
      show: false
    }
  },
  created() {
    getDetail(this.$route.query.isbn).then(res => {
      this.detail = res[0];
      this.show = true;
    })
  },
  methods: {
    back() {
      this.$router.back();
    }
  }
}
</script>

<style scoped>
.detail {
  position: relative;
  top: var(--nav-bar-height);
  margin-bottom: calc(var(--tab-bar-height) + 50px);
  width: 100%;
}
.back {
  width: 20px;
}
</style>
