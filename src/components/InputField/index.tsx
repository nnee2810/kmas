import { Box, Text } from "@chakra-ui/react"
import React, { ReactElement } from "react"
import { Controller, useFormContext } from "react-hook-form"
import TextInput from "./TextInput"

export interface InputFieldProps {
  variant: "TEXT"
  name: string
  type?: string
  label?: string
  placeholder?: string
  isDisabled?: boolean
  leftElement?: ReactElement
  rightElement?: ReactElement
}

export default function InputField({
  variant,
  name,
  type,
  label,
  placeholder,
  isDisabled,
  leftElement,
  rightElement,
}: InputFieldProps) {
  const {
    control,
    formState: { errors },
  } = useFormContext()
  return (
    <Box>
      {label && <Text>{label}</Text>}
      <Controller
        control={control}
        name={name}
        render={({ field }) => (
          <>
            {variant === "TEXT" && (
              <TextInput
                type={type}
                placeholder={placeholder}
                isDisabled={isDisabled}
                isInvalid={!!errors[name]}
                leftElement={leftElement}
                rightElement={rightElement}
                {...field}
              />
            )}
          </>
        )}
      />
      {errors?.[name]?.message && (
        <Text color="red" fontSize="11">
          {errors[name].message}
        </Text>
      )}
    </Box>
  )
}
