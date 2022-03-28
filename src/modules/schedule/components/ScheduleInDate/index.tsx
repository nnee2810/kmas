import {
  Box,
  Center,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from "@chakra-ui/react"
import { MomentObjectOutput } from "moment"
import React from "react"
import { Lesson } from "types/Lesson"
import LessonsTab from "./LessonsTab"
import TodoTab from "./TodoTab"

interface ScheduleInDateProps {
  date: MomentObjectOutput
  lessons: Lesson[]
}

export default function ScheduleInDate({
  date: { date, months, years },
  lessons,
}: ScheduleInDateProps) {
  return (
    <Box borderLeft={{ base: "0", lg: "1px solid #EDF2F7" }}>
      <Box>
        <Center fontWeight="500" fontSize="16" h="14">
          {date}/{months + 1}/{years}
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
