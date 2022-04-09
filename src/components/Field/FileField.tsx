import { Box, HStack, Text } from "@chakra-ui/react"
import React, { useState } from "react"
import { useDropzone } from "react-dropzone"
import { ControllerRenderProps } from "react-hook-form"
import { AiOutlineCloudUpload } from "react-icons/ai"
import { colors } from "styles/colors"
import { BaseFieldProps } from "."

interface FileFieldProps extends BaseFieldProps {
  field: ControllerRenderProps
}

export default function FileField({
  placeholder,
  isDisabled,
  isInvalid,
  field,
}: FileFieldProps) {
  const [selectedFile, setSelectedFile] = useState<File>()

  const onDrop = (acceptedFiles: File[]) => {
    setSelectedFile(acceptedFiles[0])
    field.onChange(acceptedFiles[0])
  }
  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept:
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel",
    disabled: isDisabled,
  })

  return (
    <Box
      border="2px dashed"
      borderColor={isInvalid ? "red " : "#cbd5e0"}
      borderRadius="8"
      px="4"
      py="7px"
      backgroundColor={isDisabled ? colors.lightGray : "transparent"}
      cursor={isDisabled ? "not-allowed" : "pointer"}
      {...getRootProps()}
    >
      <input {...getInputProps()} />
      {selectedFile ? (
        <Text>{selectedFile.name}</Text>
      ) : (
        <HStack justifyContent="center" color="gray">
          <AiOutlineCloudUpload fontSize="20" />
          <Text>{placeholder || "Tải file lên"}</Text>
        </HStack>
      )}
    </Box>
  )
}
