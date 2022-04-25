import { createStore } from 'vuex'

const store = createStore({
  state() {
    return {
      category: "business",
    }
  },
  mutations: {
    changeCategory(state, newCategory) {
      state.category = newCategory
    },
    // addItem(state, newItem) {
    //   state.cartList.push(newItem);
    // },
    // deleteItem(state, isbn) {
    //   var index = -1;
    //   for (let i = 0; i < state.cartList.length; i++) {
    //     if (state.cartList[i].isbn == isbn) {
    //       index = i;
    //       break;
    //     }
    //   }
    //   if (index != -1) {
    //     state.cartList.splice(index, 1);
    //   }
    // }
  }
})

export default store
