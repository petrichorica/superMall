<template>
  <div class="category-menu">
    <div id="menu" @click="addClickEvent">
      <div class="item">
        商业
      </div>
      <div class="item">
        虚构
      </div>
      <div class="item">
        历史
      </div>
      <div class="item">
        哲学
      </div>
      <div class="item">
        少儿
      </div>
    </div>
    <div class="contents">
      <display :books="books[activeItem]" />
    </div>
  </div>
</template>

<script>
import Display from "@/components/content/display/Display"
import { getBusinessBook, getChildrenBook, getFictionBook, getHistoryBook, getPhilosophyBook } from "@/network/allBooks.js"
export default {
  name: "CategoryMenu",
  components: {
    Display
  },
  data() {
    return {
      categories: ["business", "fiction", "history", "philosophy", "children"],
      activeItem: null,
      books: {
        "business": [],
        "fiction": [],
        "history": [],
        "philosophy": [],
        "children": []
      }
    }
  },
  created() {
    getBusinessBook().then(res => {
      this.books.business = res;
    });
    getChildrenBook().then(res => {
      this.books.children = res;
    });
    getFictionBook().then(res => {
      this.books.fiction = res;
    });
    getHistoryBook().then(res => {
      this.books.history = res;
    });
    getPhilosophyBook().then(res => {
      this.books.philosophy = res;
    })
  },
  mounted() {
    this.initActive();
  },
  methods: {
    initActive() {
      this.activeItem = this.$store.state.category;
      var menuEl = document.getElementById("menu");
      const index = [].indexOf.call(this.categories, this.activeItem);
      menuEl.childNodes[index].classList.add("active");
    },
    addClickEvent(event) {
      var menuEl = document.getElementById("menu");
      for (var itemEl of menuEl.childNodes) {
        if (itemEl.classList.contains("active")) {
          itemEl.classList.remove("active");
        }
      }

      var activeEl = event.target;
      activeEl.classList.add("active");
      var activeIndex = [].indexOf.call(menuEl.children, activeEl);
      this.activeItem = this.categories[activeIndex];

      this.$store.commit('changeCategory', this.activeItem);
    }
  }
}
</script>

<style scoped>
.category-menu {
  --menu-height: 40px;
}
#menu {
  position: fixed;
  top: var(--nav-bar-height);
  width: 100%;
  height: var(--menu-height);
  z-index: 1;
  background-color: rgb(243, 245, 245);

  display: flex;
  flex-direction: row;
  justify-content: stretch;
}
#menu .item {
  flex-grow: 1;
  height: var(--menu-height);
  line-height: var(--menu-height);
  border: 1px solid white;
  text-align: center;
}
#menu .active {
  background-color: white;
}
.contents {
  position: relative;
  top: calc(var(--menu-height) + var(--nav-bar-height));
  width: 100%;
}
</style>
