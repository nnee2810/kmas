import API from "configs/network"
import { GetLessonsDto } from "../dto/get-lessons.dto"

export async function getLessons(params: GetLessonsDto) {
  return (await API.post("/lessons", params)).data
}
