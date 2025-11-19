import axios, { AxiosRequestConfig } from 'axios'
import { BASE_URL } from '@/config/api'

const client = axios.create({
  baseURL: BASE_URL,
  timeout: 4000,
  headers: {
    'Content-Type': 'application/json',
  },
})

const get = <T>(url: string, config?: AxiosRequestConfig): Promise<T> => {
  return client.get<T>(url, config).then((response) => response.data)
}
const post = client.post
const put = client.put
const patch = client.patch
const del = client.delete

export { get, post, put, patch, del }
