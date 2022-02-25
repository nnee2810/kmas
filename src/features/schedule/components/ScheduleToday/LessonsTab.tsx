import { Box, Center, Flex, Table, Tbody, Td, Tr } from "@chakra-ui/react"
import ILesson from "defines/ILesson"
import moment from "moment"
import React from "react"

interface LessonsTabProps {
  lessons: ILesson[]
}

export default function LessonsTab({ lessons }: LessonsTabProps) {
  return lessons.length ? (
    <Box>
      {lessons.map((item: ILesson, idx: number) => (
        <Box key={idx}>
          <Flex alignItems="center" h={12} bg="green.500" color="white" px={3}>
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
      ))}
    </Box>
  ) : (
    <Center h={12}>Không có tiết học nào</Center>
  )
}
