import { Box } from "@chakra-ui/layout"
import { useAppSelector } from "hooks/useAppStore"
import { ILesson } from "interfaces/"
import { MomentObjectOutput } from "moment"
import { useCallback, useState } from "react"
import { toast } from "react-toastify"
import { userSelector } from "store/reducers/user"
import { BlinkDot, Calendar, ModalLessonsInToday } from "../components"

export default function Schedule() {
  const { lessons } = useAppSelector(userSelector)
  const [lessonsInToday, setLessonsInToday] = useState<ILesson[]>([])

  const getLessons = useCallback(
    ({ date, months, years }: MomentObjectOutput) =>
      lessons.filter((item: ILesson) => {
        const current = new Date(item.date)
        return (
          date === current.getDate() &&
          months === current.getMonth() &&
          years === current.getFullYear()
        )
      }),
    [lessons],
  )
  const renderCell = (value: MomentObjectOutput) => {
    const lessons = getLessons(value)
    if (lessons.length)
      return (
        <Box ml="11px">
          <BlinkDot />
        </Box>
      )
  }
  const onChange = useCallback(
    (date: MomentObjectOutput) => {
      const lessons = getLessons(date)
      if (lessons.length) setLessonsInToday(lessons)
      else toast.warn("Không có lịch học trong ngày này")
    },
    [setLessonsInToday, getLessons],
  )

  return (
    <Box>
      <Calendar renderCell={renderCell} onChange={onChange} />
      <ModalLessonsInToday
        data={lessonsInToday}
        isOpen={!!lessonsInToday.length}
        onClose={() => setLessonsInToday([])}
      />
    </Box>
  )
}