import {request} from "@/network/request.js"

export function getBestSellersData() {
  return request({
    url: '/bestSellers',
    method: "get"
  })
}
