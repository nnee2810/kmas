import {
  IconButton,
  Image,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react"
import { useAppDispatch, useAppSelector } from "hooks/useAppStore"
import { IoLogOutOutline } from "react-icons/io5"
import { signOut, userSelector } from "store/reducers/user"

export default function MenuUser() {
  const dispatch = useAppDispatch()
  const { profile } = useAppSelector(userSelector)

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
        <MenuItem
          icon={<IoLogOutOutline fontSize="20" />}
          onClick={() => dispatch(signOut())}
        >
          Đăng xuất
        </MenuItem>
      </MenuList>
    </Menu>
  )
}
