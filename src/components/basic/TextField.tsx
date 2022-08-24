import {
  Input,
  InputGroup,
  InputLeftElement,
  InputProps,
  InputRightElement,
} from "@chakra-ui/react"
import { ReactElement } from "react"
import { colors } from "styles/colors"

interface TextFieldProps extends InputProps {
  icon?: {
    before?: ReactElement
    after?: ReactElement
  }
  isInvalid?: boolean
}

export default function TextField({ icon, ...props }: TextFieldProps) {
  return (
    <InputGroup>
      {icon?.before && <InputLeftElement>{icon.before}</InputLeftElement>}
      <Input {...props} focusBorderColor={colors.green} />
      {icon?.after && <InputRightElement>{icon?.after}</InputRightElement>}
    </InputGroup>
  )
}
