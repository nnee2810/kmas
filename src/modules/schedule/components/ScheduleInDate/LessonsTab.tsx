import { Box, Center, Flex, Table, Tbody, Td, Tr } from "@chakra-ui/react"
import React from "react"
import { Lesson } from "types/Lesson"

interface LessonsTabProps {
  lessons: Lesson[]
}

export default function LessonsTab({ lessons }: LessonsTabProps) {
  return lessons.length ? (
    <Box>
      {lessons.map((lesson: Lesson, idx: number) => (
        <Box key={idx}>
          <Flex alignItems="center" h={12} bg="green.500" color="white" px={3}>
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
      ))}
    </Box>
  ) : (
    <Center>Không có tiết học nào</Center>
  )
}
