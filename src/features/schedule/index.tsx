import { Box, Grid } from "@chakra-ui/layout"
import BlinkDot from "components/BlinkDot"
import Calendar from "components/Calendar"
import { useAppSelector } from "hooks/useAppStore"
import HomeLayout from "layouts/Home"
import React from "react"
import { userSelector } from "store/reducers/user"
import ScheduleToday from "./components/ScheduleToday"

export default function Schedule() {
  const { schedule } = useAppSelector(userSelector)

  const getScheduleInDate = (value: {
    day: number
    month: number
    year: number
  }) =>
    schedule.filter((item: any) => {
      const date = new Date(item.date)
      return (
        value.day === date.getDate() &&
        value.month === date.getMonth() &&
        value.year === date.getFullYear()
      )
    })
  const renderCell = (value: { day: number; month: number; year: number }) => {
    const scheduleInDate = getScheduleInDate(value)
    if (scheduleInDate.length > 0)
      return (
        <Box ml="11px">
          <BlinkDot />
        </Box>
      )
  }

  return (
    <HomeLayout>
      <Grid templateColumns="1fr 350px" h="100%">
        <Calendar renderCell={renderCell} />
        <ScheduleToday />
      </Grid>
    </HomeLayout>
  )
}
