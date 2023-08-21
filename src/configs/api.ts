import axios, { AxiosRequestConfig } from "axios"
import { getToken } from "utils/token"

export const API = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
})

API.interceptors.request.use((config: AxiosRequestConfig) => {
  const accessToken = getToken()

  if (accessToken && config.headers) {
    config.headers["Authorization"] = `Bearer ${accessToken}`
  }

  return config
})
