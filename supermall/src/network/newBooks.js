import { request } from '@/network/request.js'

export function getNewBookData() {
  return request({
    url: '/new',
    method: 'get'
  })
}
