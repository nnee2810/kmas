import {
  IconButton,
  Image,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react"
import { IoLogOutOutline } from "react-icons/io5"
import { useUser } from "store/user"

export default function MenuUser() {
  const { profile, clearUser } = useUser()

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
      </MenuList>
    </Menu>
  )
}
