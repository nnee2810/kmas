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
import { AiOutlineReload } from "react-icons/ai"
import { IoLogOutOutline } from "react-icons/io5"
import { userSelector } from "store/reducers/user"
import ModalLogout from "./ModalLogout"

export default function MenuUser() {
  const {
    profile: { fullName },
  } = useAppSelector(userSelector)
  const [isOpen, setIsOpen] = useBoolean()

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
          <MenuItem icon={<AiOutlineReload fontSize="18" />}>
            Cập nhật lịch học
          </MenuItem>
          <MenuItem
            icon={<IoLogOutOutline fontSize="20" />}
            _hover={{ bg: "red", color: "white" }}
            onClick={setIsOpen.on}
          >
            Đăng xuất
          </MenuItem>
        </MenuList>
      </Menu>
      <ModalLogout isOpen={isOpen} onClose={setIsOpen.off} />
    </>
  )
}
