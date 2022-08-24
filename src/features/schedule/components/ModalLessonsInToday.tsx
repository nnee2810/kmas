import {
  Alert,
  Button,
  HStack,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Stack,
  Text,
} from "@chakra-ui/react"
import { ILesson, ModalProps } from "interfaces"
import moment from "moment"
import { AiOutlineClockCircle, AiOutlineUser } from "react-icons/ai"
import { GoLocation } from "react-icons/go"

interface ModalLessonsInTodayProps extends ModalProps {
  data: ILesson[]
}

export default function ModalLessonsInToday({
  data,
  ...props
}: ModalLessonsInTodayProps) {
  return (
    <Modal {...props}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>
          {data.length &&
            `Lịch học ${moment(data?.[0].date).format("dd, DD/MM/YYYY")}`}
        </ModalHeader>
        <ModalBody>
          <Stack>
            {data.map((item) => (
              <Stack>
                <Alert status="success" variant="left-accent" borderRadius="6">
                  <Stack spacing="1">
                    <Text fontWeight="500">
                      {item.subjectName} - {item.className}
                    </Text>
                    <HStack>
                      <AiOutlineClockCircle fontSize="20" />
                      <Text>
                        {item.startAt} - {item.endAt}
                      </Text>
                    </HStack>
                    <HStack>
                      <GoLocation fontSize="20" />
                      <Text>{item.room || "-"}</Text>
                    </HStack>
                    <HStack>
                      <AiOutlineUser fontSize="20" />
                      <Text>{item.teacher || "-"}</Text>
                    </HStack>
                  </Stack>
                </Alert>
              </Stack>
            ))}
          </Stack>
        </ModalBody>
        <ModalFooter>
          <Button onClick={props.onClose}>Đóng</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}
