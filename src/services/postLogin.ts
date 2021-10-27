import API from "configs/network"

export default async function postLogin(params: any) {
  return (await API.post("/login", { ...params })).data
}
