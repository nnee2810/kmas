import {
  Button,
  Link,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Stack,
  Text,
} from "@chakra-ui/react"
import { yupResolver } from "@hookform/resolvers/yup"
import Field from "components/Field"
import { useAppDispatch } from "hooks/useAppStore"
import React from "react"
import { FormProvider, useForm } from "react-hook-form"
import { RiShareBoxLine } from "react-icons/ri"
import { toast } from "react-toastify"
import { setLogin } from "store/reducers/user"
import { ModalProps } from "types/ModalProps"
import { SelectOption } from "types/SelectOption"
import * as yup from "yup"
import { useGetLessons } from "../hooks/useGetLessons"

interface FormValues {
  method: "excel" | "source"
  excel?: File
  source?: string
}

const schema = yup.object().shape({
  method: yup.string().required("Phương thức không được để trống"),
  excel: yup.mixed().when("method", {
    is: "excel",
    then: yup.mixed().required("File chưa được tải lên"),
  }),
  source: yup.string().when("method", {
    is: "source",
    then: yup.string().required("Nguồn trang không được để trống"),
  }),
})
const defaultValues: FormValues = {
  method: "excel",
  excel: undefined,
  source: "",
}
const loginMethods: SelectOption[] = [
  {
    label: "File excel",
    value: "excel",
  },
  {
    label: "Nguồn trang",
    value: "source",
  },
]

export default function ModalLoginMethods({ isOpen, onClose }: ModalProps) {
  const dispatch = useAppDispatch()
  const methods = useForm<FormValues>({
    defaultValues: defaultValues,
    resolver: yupResolver(schema),
  })
  const { mutate, isLoading } = useGetLessons()

  const handleSubmit = ({ method, excel, source }: FormValues) => {
    let submitData: any = {}
    if (method === "excel") {
      const formData = new FormData()
      formData.append("method", method)
      formData.append("excel", excel!)
      submitData = formData
    }
    if (method === "source") submitData = { method, source }
    mutate(submitData, {
      onSuccess(data) {
        toast.success("Đăng nhập thành công")
        dispatch(setLogin(data))
      },
      onError(error: any) {
        toast.error(error?.response?.data?.message || "Có lỗi xảy ra")
      },
    })
  }
  const handleClose = () => {
    methods.reset()
    onClose()
  }

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      closeOnOverlayClick={false}
      size="lg"
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Phương thức đăng nhập khác</ModalHeader>
        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(handleSubmit)}>
            <ModalBody>
              <Stack spacing="3">
                <Field
                  variant="SELECT"
                  name="method"
                  label="Phương thức"
                  options={loginMethods}
                />
                {methods.watch("method") === "excel" && (
                  <Field variant="FILE" name="excel" />
                )}
                {methods.watch("method") === "source" && (
                  <Field variant="LONGTEXT" name="source" />
                )}
                {renderHelper(methods.watch("method"))}
              </Stack>
            </ModalBody>
            <ModalFooter>
              <Button
                type="submit"
                colorScheme="green"
                disabled={isLoading}
                isLoading={isLoading}
              >
                Đăng nhập
              </Button>
              <Button ml="2" onClick={handleClose}>
                Đóng
              </Button>
            </ModalFooter>
          </form>
        </FormProvider>
      </ModalContent>
    </Modal>
  )
}
function renderHelper(method: "excel" | "source") {
  if (method === "excel")
    return (
      <Text>
        Tải file excel kiểu thời khóa biểu là <b>Hiển thị theo ngày học</b> tại{" "}
        <Link
          href="http://qldt.actvn.edu.vn/CMCSoft.IU.Web.Info/Reports/Form/StudentTimeTable.aspx"
          target="_blank"
        >
          trang xem kết quả ĐKH <RiShareBoxLine style={{ display: "inline" }} />
        </Link>{" "}
        (đăng nhập tại{" "}
        <Link
          href="http://qldt.actvn.edu.vn/CMCSoft.IU.Web.Info/Login.aspx"
          target="_blank"
        >
          trang quản lí sinh viên{" "}
          <RiShareBoxLine style={{ display: "inline" }} />
        </Link>
        )
      </Text>
    )
}
