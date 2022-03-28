import { Box, Grid } from "@chakra-ui/layout"
import { useAppSelector } from "hooks/useAppStore"
import HomeLayout from "layouts/Home"
import BlinkDot from "modules/schedule/components/BlinkDot"
import Calendar from "modules/schedule/components/Calendar"
import moment, { MomentObjectOutput } from "moment"
import React, { useCallback, useState } from "react"
import { userSelector } from "store/reducers/user"
import { Lesson } from "types/Lesson"
import ScheduleInDate from "./components/ScheduleInDate"

export default function Schedule() {
  const { lessons } = useAppSelector(userSelector)
  const [currentDate, setCurrentDate] = useState(moment().toObject())

  const getLessonsInDate = ({ date, months, years }: MomentObjectOutput) =>
    lessons.filter((item: Lesson) => {
      const current = new Date(item.date)
      return (
        date === current.getDate() &&
        months === current.getMonth() &&
        years === current.getFullYear()
      )
    })
  const renderCell = (value: MomentObjectOutput) => {
    const lessonsInDate = getLessonsInDate(value)
    if (lessonsInDate.length)
      return (
        <Box ml="11px">
          <BlinkDot />
        </Box>
      )
  }
  const onChange = useCallback(
    (date: MomentObjectOutput) => setCurrentDate(date),
    []
  )

  return (
    <HomeLayout>
      <Grid templateColumns={{ base: "auto", lg: "1fr 350px" }} h="100%">
        <Calendar renderCell={renderCell} onChange={onChange} />
        <ScheduleInDate
          date={currentDate}
          lessons={getLessonsInDate(currentDate)}
        />
      </Grid>
    </HomeLayout>
  )
}
