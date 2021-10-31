import { IconButton, Stack, Tooltip, useColorModeValue } from "@chakra-ui/react"
import React, { ReactElement, useMemo } from "react"
import { AiOutlineCalendar } from "react-icons/ai"
import { Link, useHistory } from "react-router-dom"

interface Item {
  name: string
  path: string
  icon: ReactElement
}

export default function Sidebar() {
  const history = useHistory()
  const borderColor = useColorModeValue("#EDF2F7", "#2D3748")

  const items: Item[] = useMemo(
    () => [
      {
        name: "Schedule",
        path: "/schedule",
        icon: <AiOutlineCalendar size={20} />,
      },
    ],
    []
  )

  return (
    <Stack
      gridArea="sidebar"
      borderTop={{ base: `1px solid ${borderColor}`, lg: "0" }}
      borderRight={{ base: "0", lg: `1px solid ${borderColor}` }}
      direction={{ base: "row", lg: "column" }}
      spacing="16px"
      alignItems="center"
      justifyContent={{
        base: "center",
        lg: "flex-start",
      }}
      py={2}
    >
      {items.map((item, idx) => (
        <Link to={item.path} key={"sidebar" + idx}>
          <Tooltip label={item.name} placement="right">
            <IconButton
              aria-label={item.name}
              icon={item.icon}
              bg={
                history.location.pathname === item.path ? "#38a169" : undefined
              }
              color={
                history.location.pathname === item.path ? "white" : "black"
              }
            />
          </Tooltip>
        </Link>
      ))}
    </Stack>
  )
}
