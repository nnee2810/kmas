import {
  Button,
  IconButton,
  Image,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Modal,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react"
import { useAppDispatch } from "hooks/useAppStore"
import React from "react"
import { Link } from "react-router-dom"
import { setLogout } from "store/reducers/user"

export default function AvatarMenu() {
  const dispatch = useAppDispatch()
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      <Menu>
        <MenuButton>
          <IconButton
            as="div"
            aria-label="avatar"
            overflow="hidden"
            icon={<Image src="https://via.placeholder.com/40/40" />}
          />
        </MenuButton>
        <MenuList>
          <Link to="/app/profile">
            <MenuItem>Thông tin sinh viên</MenuItem>
          </Link>
          <MenuItem _hover={{ bg: "red", color: "white" }} onClick={onOpen}>
            Đăng xuất
          </MenuItem>
        </MenuList>
      </Menu>
      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Bạn chắc chắn muốn đăng xuất không?</ModalHeader>
          <ModalFooter>
            <Button onClick={onClose}>Không</Button>
            <Button
              colorScheme="red"
              ml={3}
              onClick={() => dispatch(setLogout({}))}
            >
              Đăng xuất luôn
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}
