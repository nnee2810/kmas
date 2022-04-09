import {
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
} from "@chakra-ui/react"
import React, { ReactElement } from "react"
import { ControllerRenderProps } from "react-hook-form"
import { colors } from "styles/colors"
import { BaseFieldProps } from "."

interface TextFieldProps extends BaseFieldProps {
  type?: string
  icon?: {
    before?: ReactElement
    after?: ReactElement
  }
  field: ControllerRenderProps
}

export default function TextField({
  placeholder,
  isDisabled,
  isInvalid,
  type,
  icon,
  field,
}: TextFieldProps) {
  return (
    <InputGroup>
      {icon?.before && <InputLeftElement>{icon.before}</InputLeftElement>}
      <Input
        type={type}
        placeholder={placeholder}
        isDisabled={isDisabled}
        isInvalid={isInvalid}
        focusBorderColor={colors.green}
        {...field}
      />
      {icon?.after && <InputRightElement>{icon?.after}</InputRightElement>}
    </InputGroup>
  )
}
