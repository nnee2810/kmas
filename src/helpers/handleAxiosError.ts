import { AxiosError } from "axios"
import { Message } from "configs/constants"
import toast from "react-hot-toast"

export function handleAxiosError(error: unknown) {
  if (error instanceof AxiosError) {
    toast.error(error.response?.data?.message || Message.INTERNAL_SERVER_ERROR)
  } else toast.error(Message.INTERNAL_SERVER_ERROR)
}
