import jwt_decode, { JwtPayload } from "jwt-decode"

export function getToken() {
  return localStorage.getItem("token")
}
export function setToken(token: string) {
  return localStorage.setItem("token", token)
}
export function isValidToken(token: string) {
  const decoded: JwtPayload = jwt_decode(token)
  if (!decoded.exp || Date.now() < decoded.exp * 1000) return true
  return false
}
