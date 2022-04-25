import {request} from "@/network/request.js"

export function getDetail(isbn) {
  return request({
    url: '/detail',
    method: "get",
    params: {
      isbn: isbn
    }
  })
}
