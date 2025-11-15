import axios from 'axios'
import { baseURL } from '@/config/api'

const client = axios.create ({
  baseURL,
  timeout: 4000,
  headers: {
    'Content-Type': 'application/json'
  }
})

const get = client.get
const post = client.post
const put = client.put
const patch = client.patch
const del = client.delete

export { get, post, put, patch, del }