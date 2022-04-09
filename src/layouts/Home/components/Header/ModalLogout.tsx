import {
  Button,
  Modal,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react"
import { useAppDispatch } from "hooks/useAppStore"
import React from "react"
import { setLogout } from "store/reducers/user"
import { ModalProps } from "types/ModalProps"

export default function ModalLogout({ isOpen, onClose }: ModalProps) {
  const dispatch = useAppDispatch()

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Bạn chắc chắn muốn đăng xuất không?</ModalHeader>
        <ModalFooter>
          <Button colorScheme="red" onClick={() => dispatch(setLogout())}>
            Đăng xuất luôn
          </Button>
          <Button ml="2" onClick={onClose}>
            Không
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}
