import axios from "axios"
import { STORAGE_KEY } from "./constants"

const API = axios.create({
  baseURL: process.env.REACT_APP_API,
})

API.interceptors.response.use((res) => {
  return res.data
})
API.interceptors.request.use((config) => {
  const token = localStorage.getItem(STORAGE_KEY.TOKEN)

  if (token) {
    config.headers["Authorization"] = `Bearer ${token}`
  }

  return config
})

export default API
