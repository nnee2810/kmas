import { Button } from "@chakra-ui/button"
import { Box, Center, Grid, HStack, Text } from "@chakra-ui/layout"
import React, { ReactNode, useState } from "react"
import { BsChevronLeft, BsChevronRight } from "react-icons/bs"
import Cell from "./Cell"

interface CalendarProps {
  renderCell?: (args: { day: number; month: number; year: number }) => ReactNode
}

export default function Calendar({ renderCell }: CalendarProps) {
  const [current, setCurrent] = useState(
    (() => {
      const now = new Date()
      return {
        month: now.getMonth(),
        year: now.getFullYear(),
      }
    })()
  )
  const handleClickToday = () => {
    const now = new Date()
    setCurrent({ month: now.getMonth(), year: now.getFullYear() })
  }
  const handleChangeMonth = (type: boolean) => {
    if (type)
      setCurrent({
        month: current.month + 1 > 11 ? 0 : current.month + 1,
        year: current.month + 1 > 11 ? current.year + 1 : current.year,
      })
    else
      setCurrent({
        month: current.month - 1 < 0 ? 11 : current.month - 1,
        year: current.month - 1 < 0 ? current.year - 1 : current.year,
      })
  }
  const handleClickCell = ({ day, month, year }: any) => {
    setCurrent({ month, year })
  }
  return (
    <Box>
      <HStack p={2} spacing={4}>
        <Button variant="outline" onClick={handleClickToday}>
          Hôm nay
        </Button>
        <HStack spacing={4}>
          <Box cursor="pointer" onClick={() => handleChangeMonth(false)}>
            <BsChevronLeft />
          </Box>
          <Box cursor="pointer" onClick={() => handleChangeMonth(true)}>
            <BsChevronRight />
          </Box>
        </HStack>
        <Text fontWeight="500" fontSize={18}>
          Tháng {current.month + 1}, {current.year}
        </Text>
      </HStack>
      <Grid templateColumns="repeat(7, 1fr)">
        {Array.from({ length: 7 }).map((item, idx) => (
          <Center
            h="50px"
            borderWidth="1px 0"
            borderColor="gray.200"
            borderStyle="solid"
            key={"header" + idx}
          >
            {idx === 0 ? "Chủ nhật" : `Thứ ${idx + 1}`}
          </Center>
        ))}
        {Array.from({ length: 42 }).map((item, idx) => (
          <Cell
            key={"cell" + idx}
            data={{
              month: current.month,
              year: current.year,
              cellIdx: idx,
            }}
            render={({ value, isToday, isDiffMonth }) => (
              <Box
                h="120px"
                borderWidth={(idx + 1) % 7 ? "0 1px 1px 0" : "0 0 1px 0"}
                borderColor="gray.200"
                borderStyle="solid"
                backgroundColor={isDiffMonth ? "gray.100" : ""}
                p={2}
                cursor="pointer"
                onClick={() => handleClickCell(value)}
              >
                <Center
                  fontWeight="500"
                  color={isDiffMonth ? "gray" : isToday ? "white" : "black"}
                  backgroundColor={isToday ? "green" : ""}
                  borderRadius={isToday ? "50%" : ""}
                  width="28px"
                  height="28px"
                  fontSize={14}
                >
                  {value.day}
                </Center>
                {renderCell && renderCell(value)}
              </Box>
            )}
          />
        ))}
      </Grid>
    </Box>
  )
}
