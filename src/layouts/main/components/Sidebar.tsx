import { Center, Stack, Tooltip, useColorMode } from "@chakra-ui/react"
import clsx from "clsx"
import { ReactElement } from "react"
import { AiOutlineCalendar } from "react-icons/ai"
import { Link, useLocation } from "react-router-dom"

interface SidebarItem {
  label: string
  path: string
  icon: ReactElement
}

const sidebarItems: SidebarItem[] = [
  {
    label: "Schedule",
    path: "/",
    icon: <AiOutlineCalendar size={20} />,
  },
]

export default function Sidebar() {
  const location = useLocation()
  const { colorMode } = useColorMode()

  return (
    <Stack
      gridArea="sidebar"
      className={clsx(
        "border-solid border-t lg:border-t-0 lg:border-r ",
        colorMode === "dark" ? "border-gray-700" : "border-gray-200",
      )}
      direction={{ base: "row", lg: "column" }}
      spacing="16px"
      alignItems="center"
      justifyContent={{
        base: "center",
        lg: "flex-start",
      }}
      py={2}
    >
      {sidebarItems.map((item, idx) => (
        <Link to={item.path} key={"sidebar" + idx}>
          <Tooltip label={item.label} placement="right">
            <Center
              p="2.5"
              bg={location.pathname === item.path ? "#38a169" : ""}
              color={location.pathname === item.path ? "white" : "black"}
              borderRadius="6"
            >
              {item.icon}
            </Center>
          </Tooltip>
        </Link>
      ))}
    </Stack>
  )
}
