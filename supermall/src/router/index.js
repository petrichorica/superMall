import { createRouter, createWebHistory } from 'vue-router'
import Home from "@/views/home/Home.vue"
import Category from "@/views/category/Category.vue"
import Cart from "@/views/cart/Cart.vue"
import Profile from "@/views/profile/Profile.vue"
import Detail from "@/views/detail/Detail.vue"

const routes = [
  {
    path: "",
    redirect: "/home"
  },
  {
    path: "/home",
    name: "home",
    component: Home
  },
  {
    path: "/category",
    name: "category",
    component: Category
  }
  ,
  {
    path: "/cart",
    name: "cart",
    component: Cart
  },
  {
    path: "/profile",
    name: "profile",
    component: Profile
  },
  {
    path: "/detail",
    name: "detail",
    component: Detail
  }
]
const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
