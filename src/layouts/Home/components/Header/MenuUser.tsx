import {
  IconButton,
  Image,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  useBoolean,
} from "@chakra-ui/react"
import { useAppSelector } from "hooks/useAppStore"
import React from "react"
import { IoLogOutOutline } from "react-icons/io5"
import { userSelector } from "store/reducers/user"
import ModalLogout from "./ModalLogout"

export default function MenuUser() {
  const {
    profile: { fullName },
  } = useAppSelector(userSelector)
  const [openModalLogout, setOpenModalLogout] = useBoolean()

  return (
    <>
      <Menu>
        <MenuButton>
          <IconButton
            as="div"
            aria-label="avatar"
            overflow="hidden"
            icon={
              <Image
                src={`https://ui-avatars.com/api/?size=40&name=${fullName}`}
              />
            }
          />
        </MenuButton>
        <MenuList>
          <MenuItem
            icon={<IoLogOutOutline fontSize="20" />}
            _hover={{ bg: "red", color: "white" }}
            onClick={setOpenModalLogout.on}
          >
            Đăng xuất
          </MenuItem>
        </MenuList>
      </Menu>
      <ModalLogout isOpen={openModalLogout} onClose={setOpenModalLogout.off} />
    </>
  )
}
