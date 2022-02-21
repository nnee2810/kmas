import {
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
} from "@chakra-ui/react"
import React, { ReactElement } from "react"
import { ControllerRenderProps } from "react-hook-form"

interface TextInputProps extends ControllerRenderProps {
  type?: string
  placeholder?: string
  defaultValue?: string
  isDisabled?: boolean
  isInvalid?: boolean
  leftElement?: ReactElement
  rightElement?: ReactElement
}

export default function TextInput({
  type,
  placeholder,
  isDisabled,
  isInvalid,
  leftElement,
  rightElement,
  ...field
}: TextInputProps) {
  return (
    <InputGroup>
      {leftElement && <InputLeftElement>{leftElement}</InputLeftElement>}
      <Input
        type={type}
        placeholder={placeholder}
        isInvalid={isInvalid}
        focusBorderColor="green.500"
        {...field}
        value={field.value || ""}
      />
      {rightElement && <InputRightElement>{rightElement}</InputRightElement>}
    </InputGroup>
  )
}
