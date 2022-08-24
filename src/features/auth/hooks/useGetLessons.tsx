import { API } from "configs/api"
import { ILesson, IProfile } from "interfaces"
import { useMutation } from "react-query"
import { GetLessonsDto } from "../dto/get-lessons.dto"

export function useGetLessons() {
  return useMutation(
    "getLessons",
    async (data: GetLessonsDto) =>
      (
        await API.post<{
          profile: IProfile
          lessons: ILesson[]
        }>("/lessons", data)
      ).data
  )
}
