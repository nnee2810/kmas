import { Button } from "@chakra-ui/button"
import { Box, Center, Grid, HStack, Text } from "@chakra-ui/layout"
import moment, { MomentObjectOutput } from "moment"
import React, { ReactNode, useEffect, useState } from "react"
import { BsChevronLeft, BsChevronRight } from "react-icons/bs"
import generateArrayNumber from "utils/generateArrayNumber"

interface CalendarProps {
  renderCell?: (date: MomentObjectOutput) => ReactNode
  onChange?: (date: MomentObjectOutput) => void
}
interface CellValue {
  value: MomentObjectOutput
  diffMonth: number
  isToday: boolean
}
function generateCellValues(current: MomentObjectOutput) {
  const currentDate = moment(current),
    today = moment(),
    firstDayInMonth = currentDate.startOf("month").day(),
    daysInMonth = currentDate.daysInMonth(),
    daysInPrevMonth = currentDate.clone().subtract(1, "month").daysInMonth()
  const cellValues = generateArrayNumber(42).map((idx) => {
    if (idx < firstDayInMonth)
      return {
        value: {
          ...current,
          date: daysInPrevMonth - firstDayInMonth + idx + 1,
        },
        diffMonth: -1,
        isToday: false,
      }
    if (idx - firstDayInMonth >= daysInMonth)
      return {
        value: { ...current, date: idx - firstDayInMonth - daysInMonth + 1 },
        diffMonth: 1,
        isToday: false,
      }
    return {
      value: { ...current, date: idx - firstDayInMonth + 1 },
      diffMonth: 0,
      isToday: today.isSame(
        { ...current, date: idx - firstDayInMonth + 1 },
        "day"
      ),
    }
  })
  return cellValues
}
export default function Calendar({ renderCell, onChange }: CalendarProps) {
  const [currentDate, setCurrentDate] = useState(moment().toObject())
  const [cellValues, setCellValues] = useState<CellValue[]>([])

  const handleClickToday = () => setCurrentDate(moment().toObject())
  const handleChangeMonth = (value: number) =>
    setCurrentDate(moment(currentDate).add(value, "month").toObject())
  const handleClickCell = (date: number, diffMonth: number) => {
    const newDate = moment({
      ...currentDate,
      date,
      month: currentDate.months + diffMonth,
    }).toObject()
    setCurrentDate(newDate)
    onChange && onChange(newDate)
  }

  useEffect(() => {
    setCellValues(generateCellValues(currentDate))
  }, [currentDate])

  return (
    <Box>
      <HStack spacing="4" h="14" px="2">
        <Button variant="outline" onClick={handleClickToday}>
          Hôm nay
        </Button>
        <HStack spacing="4">
          <Box cursor="pointer" onClick={() => handleChangeMonth(-1)}>
            <BsChevronLeft />
          </Box>
          <Box cursor="pointer" onClick={() => handleChangeMonth(1)}>
            <BsChevronRight />
          </Box>
        </HStack>
        <Text fontWeight="500" fontSize="18">
          Tháng {currentDate.months + 1}, {currentDate.years}
        </Text>
      </HStack>
      <Grid templateColumns="repeat(7, 1fr)">
        {generateArrayNumber(7).map((item) => (
          <Center
            h="48px"
            borderWidth="1px 0"
            borderColor="gray.100"
            borderStyle="solid"
            fontSize="14"
            key={"header" + item}
          >
            {!item ? "CN" : `T${item + 1}`}
          </Center>
        ))}
        {cellValues.map((cell, idx) => (
          <Box
            h={{ base: "calc(100vw / 7)", md: "110px" }}
            minH="60px"
            borderWidth={(idx + 1) % 7 ? "0 1px 1px 0" : "0 0 1px 0"}
            borderColor="gray.100"
            borderStyle="solid"
            bg={cell.diffMonth ? "gray.100" : ""}
            p="2"
            cursor="pointer"
            transition="background .2s"
            onClick={() => handleClickCell(cell.value.date, cell.diffMonth)}
            key={"cell" + idx}
          >
            <Center
              fontWeight="500"
              color={cell.diffMonth ? "gray" : cell.isToday ? "white" : "black"}
              bg={cell.isToday ? "green.500" : ""}
              borderRadius="50%"
              width="28px"
              height="28px"
              fontSize="14"
            >
              <Text>{cell.value.date}</Text>
            </Center>
            {renderCell && renderCell(cell.value)}
          </Box>
        ))}
      </Grid>
    </Box>
  )
}
