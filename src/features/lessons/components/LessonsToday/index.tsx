import { Box, Center, Flex } from "@chakra-ui/layout"
import { Table, Tbody, Td, Tr } from "@chakra-ui/table"
import IDate from "defines/IDate"
import ILesson from "defines/ILesson"
import moment from "moment"
import React from "react"

interface LessonsTodayProps {
  current: IDate
  lessons: [ILesson]
}

export default function LessonsToday({
  current: { date, month, year },
  lessons,
}: LessonsTodayProps) {
  return (
    <Box borderLeft={{ base: "0", lg: "1px solid #EDF2F7" }}>
      <Center fontWeight="500" fontSize={16} h={14}>
        {date}/{month + 1}/{year}
      </Center>
      {lessons.length ? (
        lessons.map((item: ILesson, idx: number) => (
          <Box key={idx}>
            <Flex
              alignItems="center"
              h={12}
              bg="green.500"
              color="white"
              px={3}
            >
              {moment(item.startAt).format("HH:mm")} -{" "}
              {moment(item.endAt).format("HH:mm")}
            </Flex>
            <Table>
              <Tbody>
                <Tr>
                  <Td>Môn học</Td>
                  <Td>{item.subjectName}</Td>
                </Tr>
                <Tr>
                  <Td>Lớp</Td>
                  <Td>{item.class}</Td>
                </Tr>
                <Tr>
                  <Td>Phòng học</Td>
                  <Td>{item.room}</Td>
                </Tr>
                <Tr>
                  <Td>Giáo viên</Td>
                  <Td>{item.teacher || "-"}</Td>
                </Tr>
              </Tbody>
            </Table>
          </Box>
        ))
      ) : (
        <Center h={12}>Không có tiết học nào</Center>
      )}
    </Box>
  )
}
