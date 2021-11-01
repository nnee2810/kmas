import { Button } from "@chakra-ui/button"
import { useColorModeValue } from "@chakra-ui/color-mode"
import { Box, Center, Grid, HStack, Text } from "@chakra-ui/layout"
import IDate from "defines/IDate"
import React, { ReactNode, useState } from "react"
import { BsChevronLeft, BsChevronRight } from "react-icons/bs"
import Cell from "./Cell"

interface CalendarProps {
  renderCell?: (args: IDate) => ReactNode
  onChange?: (args: IDate) => void
}

export default function Calendar({ renderCell, onChange }: CalendarProps) {
  const [current, setCurrent] = useState(
    (() => {
      const now = new Date()
      return {
        month: now.getMonth(),
        year: now.getFullYear(),
      }
    })()
  )
  const textColor = useColorModeValue("black", "white")
  const bgDiffMonth = useColorModeValue("gray.100", "gray.600")
  const borderColor = useColorModeValue("gray.100", "gray.700")

  const handleClickToday = () => {
    const now = new Date()
    setCurrent({ month: now.getMonth(), year: now.getFullYear() })
    onChange &&
      onChange({
        date: now.getDate(),
        month: now.getMonth(),
        year: now.getFullYear(),
      })
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
  const handleClickCell = ({ date, month, year }: IDate) => {
    setCurrent({ month, year })
    onChange && onChange({ date, month, year })
  }
  return (
    <Box>
      <HStack spacing={4} h={14} px={2}>
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
            h="48px"
            borderWidth="1px 0"
            borderColor={borderColor}
            borderStyle="solid"
            key={"header" + idx}
            fontSize={14}
          >
            {idx === 0 ? "CN" : `T${idx + 1}`}
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
                h={{ base: "calc(100vw / 7)", md: "110px" }}
                minH="60px"
                borderWidth={(idx + 1) % 7 ? "0 1px 1px 0" : "0 0 1px 0"}
                borderColor={borderColor}
                borderStyle="solid"
                bg={isDiffMonth ? bgDiffMonth : ""}
                p={2}
                cursor="pointer"
                onClick={() => handleClickCell(value)}
              >
                <Center
                  fontWeight="500"
                  color={isDiffMonth ? "gray" : isToday ? "white" : textColor}
                  bg={isToday ? "green.500" : ""}
                  borderRadius={isToday ? "50%" : ""}
                  width="28px"
                  height="28px"
                  fontSize={14}
                >
                  <Text>{value.date}</Text>
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
