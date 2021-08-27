import axios from "axios"

let baseURL = "https://api.kmas.nnee.me"
if (!process.env.NODE_ENV || process.env.NODE_ENV === "development")
  baseURL = "http://localhost:5000"

const API = axios.create({
  baseURL,
})

API.interceptors.response.use((res) => res.data)

export default API
