import {
  Box,
  Center,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from "@chakra-ui/react"
import IDate from "defines/IDate"
import ILesson from "defines/ILesson"
import React from "react"
import LessonsTab from "./LessonsTab"
import TodoTab from "./TodoTab"

interface ScheduleTodayProps {
  current: IDate
  lessons: ILesson[]
}

export default function ScheduleToday({
  current: { date, month, year },
  lessons,
}: ScheduleTodayProps) {
  return (
    <Box borderLeft={{ base: "0", lg: "1px solid #EDF2F7" }}>
      <Box>
        <Center fontWeight="500" fontSize={16} h={14}>
          {date}/{month + 1}/{year}
        </Center>
      </Box>
      <Tabs>
        <TabList>
          <Tab>Tiết học</Tab>
          <Tab>Việc cần làm</Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            <LessonsTab lessons={lessons} />
          </TabPanel>
          <TabPanel>
            <TodoTab />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  )
}
