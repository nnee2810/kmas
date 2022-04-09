import { IconButton, Stack, Tooltip } from "@chakra-ui/react"
import React, { ReactElement, useMemo } from "react"
import { AiOutlineCalendar } from "react-icons/ai"
import { Link, useHistory } from "react-router-dom"
import { colors } from "styles/colors"

interface Item {
  name: string
  path: string
  icon: ReactElement
}

export default function Sidebar() {
  const history = useHistory()

  const items: Item[] = useMemo(
    () => [
      {
        name: "Lessons",
        path: "/schedule",
        icon: <AiOutlineCalendar size={20} />,
      },
    ],
    []
  )

  return (
    <Stack
      gridArea="sidebar"
      borderTop={{ base: `1px solid ${colors.lightGray}`, lg: "0" }}
      borderRight={{ base: "0", lg: `1px solid ${colors.lightGray}` }}
      borderRightColor={colors.lightGray}
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
