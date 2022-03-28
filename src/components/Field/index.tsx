import { Box, Text } from "@chakra-ui/react"
import React, { ReactElement } from "react"
import { Controller, useFormContext } from "react-hook-form"
import { SelectOption } from "types/SelectOption"
import FileField from "./FileField"
import LongTextField from "./LongTextField"
import SelectField from "./SelectField"
import TextField from "./TextField"

export interface BaseFieldProps {
  placeholder?: string
  isDisabled?: boolean
  isInvalid?: boolean
}

export interface FieldProps extends BaseFieldProps {
  variant: "TEXT" | "LONGTEXT" | "SELECT" | "FILE"
  name: string
  label?: string
  defaultValue?: number | string | null
  type?: string
  icon?: {
    before?: ReactElement
    after?: ReactElement
  }
  options?: SelectOption[]
}

export default function Field({
  variant,
  name,
  type,
  label,
  placeholder,
  options,
  isDisabled,
  icon,
}: FieldProps) {
  const {
    control,
    formState: { errors },
  } = useFormContext()

  return (
    <Box>
      {label && (
        <Text fontSize="12" fontWeight="700" color="gray">
          {label}
        </Text>
      )}
      <Controller
        control={control}
        name={name}
        render={({ field }) => (
          <>
            {variant === "TEXT" && (
              <TextField
                type={type}
                placeholder={placeholder}
                isDisabled={isDisabled}
                isInvalid={!!errors[name]}
                icon={icon}
                field={field}
              />
            )}
            {variant === "LONGTEXT" && (
              <LongTextField
                placeholder={placeholder}
                isDisabled={isDisabled}
                isInvalid={!!errors[name]}
                field={field}
              />
            )}
            {variant === "SELECT" && (
              <SelectField
                placeholder={placeholder}
                isDisabled={isDisabled}
                isInvalid={!!errors[name]}
                options={options!}
                field={field}
              />
            )}
            {variant === "FILE" && (
              <FileField
                placeholder={placeholder}
                isDisabled={isDisabled}
                isInvalid={!!errors[name]}
                field={field}
              />
            )}
          </>
        )}
      />
      {errors?.[name]?.message && (
        <Text color="red" fontSize="12">
          {errors[name].message}
        </Text>
      )}
    </Box>
  )
}
