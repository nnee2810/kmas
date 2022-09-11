import { AxiosError } from "axios"
import { Message } from "configs/constants"
import toast from "react-hot-toast"

export function getAxiosMessageError(error: unknown): string {
  if (error instanceof AxiosError) {
    return error.response?.data?.message || Message.INTERNAL_SERVER_ERROR
  }
  return Message.INTERNAL_SERVER_ERROR
}

export function handleAxiosError(error: unknown) {
  toast.error(getAxiosMessageError(error))
}
