import { Box, Grid } from "@chakra-ui/layout"
import IDate from "defines/IDate"
import ILesson from "defines/ILesson"
import BlinkDot from "features/schedule/components/BlinkDot"
import Calendar from "features/schedule/components/Calendar"
import { useAppSelector } from "hooks/useAppStore"
import HomeLayout from "layouts/Home"
import React, { useState } from "react"
import { userSelector } from "store/reducers/user"
import ScheduleToday from "./components/ScheduleToday"

export default function Schedule() {
  const { lessons } = useAppSelector(userSelector)
  const [current, setCurrent] = useState(
    (() => {
      const now = new Date()
      return {
        date: now.getDate(),
        month: now.getMonth(),
        year: now.getFullYear(),
      }
    })()
  )

  const getLessonsInDate = ({ date, month, year }: IDate) =>
    lessons.filter((item: ILesson) => {
      const current = new Date(item.startAt)
      return (
        date === current.getDate() &&
        month === current.getMonth() &&
        year === current.getFullYear()
      )
    })
  const renderCell = (value: IDate) => {
    const lessonsInDate = getLessonsInDate(value)
    if (lessonsInDate.length > 0)
      return (
        <Box ml="11px">
          <BlinkDot />
        </Box>
      )
  }
  const onChange = ({ date, month, year }: any) => {
    setCurrent({ date, month, year })
  }

  return (
    <HomeLayout>
      <Grid templateColumns={{ base: "auto", lg: "1fr 350px" }} h="100%">
        <Calendar renderCell={renderCell} onChange={onChange} />
        <ScheduleToday current={current} lessons={getLessonsInDate(current)} />
      </Grid>
    </HomeLayout>
  )
}
