import { request } from '@/network/request.js'

export function getBusinessBook() {
  return request({
    url: '/business',
    method: 'get'
  })
}

export function getChildrenBook() {
  return request({
    url: '/children',
    method: 'get'
  })
}

export function getFictionBook() {
  return request({
    url: '/fiction',
    method: 'get'
  })
}

export function getHistoryBook() {
  return request({
    url: '/history',
    method: 'get'
  })
}

export function getPhilosophyBook() {
  return request({
    url: '/philosophy',
    method: 'get'
  })
}
