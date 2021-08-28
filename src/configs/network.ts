import axios from "axios"
import { TOKEN } from "defines/common"
import Cookies from "js-cookie"

let baseURL = "https://api.kmas.nnee.me"
if (!process.env.NODE_ENV || process.env.NODE_ENV === "development")
  baseURL = "http://localhost:5000"

const API = axios.create({
  baseURL,
})

API.interceptors.response.use((res) => res.data)
API.interceptors.request.use((config) => {
  const token = Cookies.get(TOKEN)
  if (token) {
    config.headers["Authorization"] = `Bearer ${token}`
  }

  return config
})

export default API
