import {
  IconButton,
  Image,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  useColorMode,
} from "@chakra-ui/react"
import { IoLogOutOutline, IoMoonOutline, IoSunnyOutline } from "react-icons/io5"
import { useUser } from "store/user"

export default function MenuUser() {
  const { profile, clearUser } = useUser()
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <Menu>
      <MenuButton>
        <IconButton
          as="div"
          aria-label="avatar"
          overflow="hidden"
          icon={
            <Image
              src={`https://ui-avatars.com/api/?size=40&name=${profile?.fullName}`}
            />
          }
        />
      </MenuButton>
      <MenuList>
        <MenuItem icon={<IoLogOutOutline fontSize="20" />} onClick={clearUser}>
          Đăng xuất
        </MenuItem>
        <MenuItem
          icon={
            colorMode === "dark" ? (
              <IoSunnyOutline fontSize="20" />
            ) : (
              <IoMoonOutline fontSize="20" />
            )
          }
          onClick={toggleColorMode}
        >
          {colorMode === "dark" ? "Light" : "Dark"} mode
        </MenuItem>
      </MenuList>
    </Menu>
  )
}
