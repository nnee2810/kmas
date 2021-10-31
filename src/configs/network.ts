import axios from "axios"
import { TOKEN } from "defines/common"

let baseURL = "https://kmas-api.herokuapp.com/"
if (!process.env.NODE_ENV || process.env.NODE_ENV === "development")
  baseURL = "http://localhost:5000"

const API = axios.create({
  baseURL,
})

API.interceptors.response.use((res) => {
  return res.data
})
API.interceptors.request.use((config) => {
  const token = localStorage.getItem(TOKEN)

  if (token) {
    config.headers["Authorization"] = `Bearer ${token}`
  }

  return config
})

export default API
