import {request} from "@/network/request.js"

export function getHomeMultiData() {
  return request({
    url: '/bannerImages',
    method: "get"
  })
}
