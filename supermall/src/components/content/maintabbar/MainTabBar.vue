<template>
  <tab-bar>
    <tab-bar-item path="/home">
      <template v-slot:item-icon-activate>
        <img src="@/assets/img/tabbar/home-activate.svg" alt="" class="tab-bar-img">
      </template>
      <template v-slot:item-icon>
        <img src="@/assets/img/tabbar/home.svg" alt="" class="tab-bar-img">
      </template>
      <template v-slot:item-text>
        <div>主页</div>
      </template>
    </tab-bar-item>
    <tab-bar-item path="/category">
      <template v-slot:item-icon-activate>
        <img src="@/assets/img/tabbar/category-activate.svg" alt="" class="tab-bar-img">
      </template>
      <template v-slot:item-icon>
        <img src="@/assets/img/tabbar/category.svg" alt="" class="tab-bar-img">
      </template>
      <template v-slot:item-text>
        <div>分类</div>
      </template>
    </tab-bar-item>
    <tab-bar-item path="/cart">
      <template v-slot:item-icon-activate>
        <img src="@/assets/img/tabbar/shopping-cart-activate.svg" alt="" class="tab-bar-img">
      </template>
      <template v-slot:item-icon>
        <img src="@/assets/img/tabbar/shopping-cart.svg" alt="" class="tab-bar-img">
      </template>
      <template v-slot:item-text>
        <div>购物车</div>
      </template>
    </tab-bar-item>
    <tab-bar-item path="/profile">
      <template v-slot:item-icon-activate>
        <img src="@/assets/img/tabbar/account-activate.svg" alt="" class="tab-bar-img">
      </template>
      <template v-slot:item-icon>
        <img src="@/assets/img/tabbar/account.svg" alt="" class="tab-bar-img">
      </template>
      <template v-slot:item-text>
        <div>我的</div>
      </template>
    </tab-bar-item>
  </tab-bar>
</template>

<script>
import TabBar from "@/components/common/tabbar/TabBar"
import TabBarItem from "@/components/common/tabbar/TabBarItem"

export default {
  name: "MainTabBar",
  components: {
    TabBar,
    TabBarItem
  }
}
</script>

<style scoped>
  .tab-bar-img {
    width: 24px;
    height: 24px;
  }
</style>
