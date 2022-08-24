import { Center, Stack, Tooltip } from "@chakra-ui/react"
import { ReactElement } from "react"
import { AiOutlineCalendar } from "react-icons/ai"
import { Link, useLocation } from "react-router-dom"
import { colors } from "styles/colors"

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
