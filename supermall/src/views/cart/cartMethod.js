import { getCartData, postCartData, putCartData, deleteCartData } from "@/network/cart.js"

export async function addItem(isbn, q) {
  const cartList = await getCartData();
  let newItem = {"isbn": isbn, "quantity": q};
  for (let item of cartList) {
    if (item.isbn == isbn) {
      newItem.quantity += item.quantity;
      return putCartData(item.id, newItem);
    }
  }
  return postCartData(newItem);
}

export async function changeQuantity(isbn, q) {
  const cartList = await getCartData();
  let itemChanged = {"isbn": isbn, "quantity": q};
  for (let item of cartList) {
    if (item.isbn == isbn) {
      return putCartData(item.id, itemChanged);
    }
  }
}

export async function deleteItem(isbn) {
  const cartList = await getCartData();
  for (let item of cartList) {
    if (item.isbn == isbn) {
      return deleteCartData(item.id)
    }
  }
}
