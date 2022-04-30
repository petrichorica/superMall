import axios from 'axios'
import url_config from '@/utils/config.js'

export function request(config) {
  const instance = axios.create({
    baseURL: `${url_config.BASE_URL}`,
    timeout: 5000
  })

  instance.interceptors.request.use(config => {
    return config
  }, err => {
    console.log(err);
  })

  instance.interceptors.response.use(res => {
    return res.data
  }, err => {
    console.log(err)
  })

  return instance(config)
}
