import { Box, Text } from "@chakra-ui/react"
import { cloneElement, ReactElement } from "react"
import { Controller, useFormContext } from "react-hook-form"

interface FieldProps {
  name: string
  children: ReactElement
  label?: string
}

export default function Field({ name, children, label }: FieldProps) {
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
        render={({ field: { onChange, value } }) =>
          cloneElement(children, {
            id: name,
            name,
            value,
            onChange,
            isInvalid: !!errors[name],
            ...children.props,
          })
        }
      />
      {errors?.[name]?.message && (
        <Text color="red" fontSize="12">
          {String(errors?.[name]?.message)}
        </Text>
      )}
    </Box>
  )
}
