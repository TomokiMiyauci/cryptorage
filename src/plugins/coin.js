import axios from '@nuxtjs/axios'
class BaseAPI {
  constructor(baseURL) {
    this.baseURL = baseURL
  }
}
const baseURL = new BaseAPI('2334')
console.log(baseURL.baseURL)
const a = axios.$get('http://localhost')
console.log(a)
