import { request } from '@/network/request.js'

export function getCartData() {
  return request({
    url: '/cart',
    method: 'get'
  })
}

export function postCartData(item) {
  // item: {"isbn": Number, "quantity": Number}
  return request({
    url: '/cart',
    method: 'post',
    data: {
      isbn: item.isbn,
      quantity: item.quantity
    }
  })
}

export function putCartData(id, item) {
  // item: {"isbn": Number, "quantity": Number}
  return request({
    url: '/cart/' + id,
    method: 'put',
    data: item
  })
}

export function deleteCartData(id) {
  return request({
    url: '/cart/' + id,
    method: 'delete'
  })
}
