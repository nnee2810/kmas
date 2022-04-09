import { Select } from "@chakra-ui/react"
import React from "react"
import { ControllerRenderProps } from "react-hook-form"
import { colors } from "styles/colors"
import { SelectOption } from "types/SelectOption"
import { BaseFieldProps } from "."

interface SelectFieldProps extends BaseFieldProps {
  options: SelectOption[]
  field: ControllerRenderProps
}

export default function SelectField({
  placeholder,
  options,
  isDisabled,
  isInvalid,
  field,
}: SelectFieldProps) {
  return (
    <Select
      placeholder={placeholder}
      isDisabled={isDisabled}
      isInvalid={isInvalid}
      focusBorderColor={colors.green}
      {...field}
    >
      {options.map((option) => (
        <option value={option.value} key={option.value}>
          {option.label}
        </option>
      ))}
    </Select>
  )
}
