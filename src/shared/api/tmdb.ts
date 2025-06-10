import axios, { AxiosRequestConfig, Method } from 'axios'

const TOKEN = process.env.NEXT_PUBLIC_API_TOKEN

const BASE_URL = 'https://api.themoviedb.org/3'

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    Authorization: `Bearer ${TOKEN}`,
    'Content-Type': 'application/json',
  },
})

const request =
  (method: Method) =>
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  <T = any>(url: string, config?: AxiosRequestConfig<any>) =>
    axiosInstance<T>(url, {
      method,
      ...config,
      headers: {
        ...axiosInstance.defaults.headers.common,
        ...config?.headers,
      },
    })

export const tmdb = {
  get: request('GET'),
  post: request('POST'),
}
