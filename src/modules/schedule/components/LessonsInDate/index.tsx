import { Box, Center, Flex, Table, Tbody, Td, Tr } from "@chakra-ui/react"
import { MomentObjectOutput } from "moment"
import React from "react"
import { colors } from "styles/colors"
import { Lesson } from "types/Lesson"

interface ScheduleInDateProps {
  date: MomentObjectOutput
  lessons: Lesson[]
}

export default function LessonsInDate({
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
      <Box>
        {lessons.length ? (
          lessons.map((lesson: Lesson, idx: number) => (
            <Box key={"lesson" + idx}>
              <Flex
                alignItems="center"
                h="48px"
                px="3"
                bg={colors.green}
                color="white"
                fontWeight="500"
              >
                {lesson.startAt} - {lesson.endAt}
              </Flex>
              <Table>
                <Tbody>
                  <Tr>
                    <Td>Môn học</Td>
                    <Td>{lesson.subjectName}</Td>
                  </Tr>
                  <Tr>
                    <Td>Lớp</Td>
                    <Td>{lesson.className}</Td>
                  </Tr>
                  <Tr>
                    <Td>Phòng học</Td>
                    <Td>{lesson.room}</Td>
                  </Tr>
                  <Tr>
                    <Td>Giáo viên</Td>
                    <Td>{lesson.teacher || "-"}</Td>
                  </Tr>
                </Tbody>
              </Table>
            </Box>
          ))
        ) : (
          <Center>Không có tiết học trong ngày này</Center>
        )}
      </Box>
    </Box>
  )
}
