import {
  Flex,
  IconButton,
  Image,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItemOption,
  MenuList,
  MenuOptionGroup,
  Text,
} from "@chakra-ui/react"
import { useAppDispatch, useAppSelector } from "hooks/useAppStore"
import React from "react"
import { AiOutlineSetting } from "react-icons/ai"
import { setLang, setTheme, settingSelector } from "store/reducers/setting"

export default function SettingMenu() {
  const dispatch = useAppDispatch()
  const { lang, theme } = useAppSelector(settingSelector)

  const handleChangeTheme = (theme: any) => dispatch(setTheme(theme))
  const handleChangeLang = (lang: any) => dispatch(setLang(lang))

  return (
    <Menu closeOnSelect={false}>
      <MenuButton>
        <IconButton as="div" aria-label="setting" icon={<AiOutlineSetting size="20px" />} />
      </MenuButton>
      <MenuList>
        <MenuOptionGroup title="Giao diện" type="radio" value={theme} onChange={handleChangeTheme}>
          <MenuItemOption value="light">🌞 Sáng</MenuItemOption>
          <MenuItemOption value="dark">🌜 Tối</MenuItemOption>
        </MenuOptionGroup>
        <MenuDivider />
        <MenuOptionGroup title="Ngôn ngữ" type="radio" value={lang} onChange={handleChangeLang}>
          <MenuItemOption value="vi" alignItems="center">
            <Flex>
              <Image src="https://www.countryflags.io/vn/flat/24.png" />
              <Text ml={1}>Tiếng Việt</Text>
            </Flex>
          </MenuItemOption>
          <MenuItemOption value="en">
            <Flex>
              <Image src="https://www.countryflags.io/gb/flat/24.png" />
              <Text ml={1}>Tiếng Anh</Text>
            </Flex>
          </MenuItemOption>
        </MenuOptionGroup>
      </MenuList>
    </Menu>
  )
}
