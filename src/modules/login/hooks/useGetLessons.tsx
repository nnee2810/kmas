import { useMutation } from "react-query"
import { GetLessonsDto } from "../dto/get-lessons.dto"
import { getLessons } from "../services/getLessons"

export function useGetLessons() {
  return useMutation("getLessons", (params: GetLessonsDto) =>
    getLessons(params)
  )
}
