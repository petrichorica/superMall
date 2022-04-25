<template>
<div id="home">
  <nav-bar>
    <template v-slot:center>
      线上书城
    </template>
  </nav-bar>
  <div class="swiper">
    <swiper>
      <img v-for="src in imgSrcList" :key="src.id" :src="src.url" alt="" class="slide">
    </swiper>
  </div>
  <feature />
  <best-sellers />
  <new-books />
</div>
</template>

<script>
import NavBar from "@/components/content/navbar/NavBar"
import Swiper from "@/components/common/swiper/swiper"
import Feature from "@/components/content/feature/Feature"
import NewBooks from "@/components/content/feature/NewBooks"
import BestSellers from "@/components/content/feature/BestSellers"
import {getHomeMultiData} from "@/network/home.js"

export default {
  name: "Home",
  components: {
    NavBar, Swiper, Feature, NewBooks, BestSellers
  },
  data() {
    return {
      imgSrcList: null,
      baseURL: "http://localhost:3000",
      imgNum: 0
    }
  },
  created() {
    getHomeMultiData().then(res => {
      if (res) {
        this.imgNum = res.length;
        var srcList = [];
        res.forEach(element => {
          srcList.push({id: res.id, url: this.baseURL + element.url});
        });
        this.imgSrcList = srcList;
      }
    })
  }
}
</script>

<style scoped>
.swiper {
  width: 100%;
  height: 215px;
  margin: auto;
  position: relative;
  margin: 50px 0 0 0;
}
#home {
  /* background-color: rgb(234, 241, 241); */
  padding: 0 10px;
  margin-bottom: 50px;
}
</style>
