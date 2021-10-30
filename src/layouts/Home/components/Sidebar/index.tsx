import {
  IconButton,
  Stack,
  StackDirection,
  Tooltip,
  useBreakpointValue,
} from "@chakra-ui/react"
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
  const direction = useBreakpointValue({ base: "row", lg: "column" })
  const justifyContent = useBreakpointValue({
    base: "center",
    lg: "flex-start",
  })

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
      borderTop="1px solid #f1f1f1"
      borderRight="1px solid #f1f1f1"
      direction={direction as StackDirection}
      spacing="16px"
      alignItems="center"
      justifyContent={justifyContent}
      py={2}
    >
      {items.map((item, idx) => (
        <Link to={item.path} key={"sidebar" + idx}>
          <Tooltip label={item.name} placement="right">
            <IconButton
              aria-label={item.name}
              icon={item.icon}
              colorScheme={
                history.location.pathname === item.path ? "green" : undefined
              }
            />
          </Tooltip>
        </Link>
      ))}
    </Stack>
  )
}
