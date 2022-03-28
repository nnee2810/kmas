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
import { useAppDispatch, useAppSelector } from "hooks/useAppStore"
import React from "react"
import { setLogout, userSelector } from "store/reducers/user"

export default function AvatarMenu() {
  const dispatch = useAppDispatch()
  const {
    profile: { fullName },
  } = useAppSelector(userSelector)
  const { isOpen, onOpen, onClose } = useDisclosure()

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
              onClick={() => dispatch(setLogout())}
            >
              Đăng xuất luôn
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}
