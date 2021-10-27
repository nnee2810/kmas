import { Flex, IconButton, Tooltip, VStack } from "@chakra-ui/react"
import React, { ReactElement, useMemo } from "react"
import { AiOutlineCalendar } from "react-icons/ai"
import { SiMicrosoftexcel } from "react-icons/si"
import { Link, useHistory } from "react-router-dom"

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
        name: "Schedule",
        path: "/schedule",
        icon: <AiOutlineCalendar size={20} />,
      },
      {
        name: "Parse excel",
        path: "/parse",
        icon: <SiMicrosoftexcel size={20} />,
      },
    ],
    []
  )

  return (
    <Flex
      gridArea="sidebar"
      flexDirection="column"
      py={4}
      borderRight="1px solid #f1f1f1"
    >
      <VStack spacing="16px">
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
      </VStack>
    </Flex>
  )
}
