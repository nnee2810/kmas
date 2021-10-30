import { Box, Grid } from "@chakra-ui/layout"
import BlinkDot from "components/BlinkDot"
import Calendar from "components/Calendar"
import IDate from "defines/IDate"
import ILesson from "defines/ILesson"
import { useAppSelector } from "hooks/useAppStore"
import HomeLayout from "layouts/Home"
import React, { useState } from "react"
import { userSelector } from "store/reducers/user"
import ScheduleToday from "./components/ScheduleToday"

export default function Schedule() {
  const { schedule } = useAppSelector(userSelector)
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

  const getScheduleInDate = ({ date, month, year }: IDate) =>
    schedule.filter((item: ILesson) => {
      const current = new Date(item.startAt)
      return (
        date === current.getDate() &&
        month === current.getMonth() &&
        year === current.getFullYear()
      )
    })
  const renderCell = (value: IDate) => {
    const scheduleInDate = getScheduleInDate(value)
    if (scheduleInDate.length > 0)
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
        <ScheduleToday
          current={current}
          schedule={getScheduleInDate(current)}
        />
      </Grid>
    </HomeLayout>
  )
}
