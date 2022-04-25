import {request} from "@/network/request.js"

export function getFeatureData() {
  return request({
    url: '/todaysFeature',
    method: "get"
  })
}
