import API from "configs/network"
import { Student } from "types/Student"
import { GetLessonsDto } from "../dto/get-lessons.dto"

export async function getLessons(params: GetLessonsDto): Promise<Student> {
  return (await API.post("/lessons", params)).data
}
