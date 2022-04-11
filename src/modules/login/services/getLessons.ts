import API from "configs/service"
import { Student } from "types/Student"
import { GetLessonsDto } from "../dto/get-lessons.dto"

export async function getLessons(params: GetLessonsDto): Promise<Student> {
  return (await API.post("/lessons", params)).data
}
