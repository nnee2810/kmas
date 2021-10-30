import {
  IconButton,
  Menu,
  MenuButton,
  MenuItemOption,
  MenuList,
  MenuOptionGroup,
} from "@chakra-ui/react"
import { useAppDispatch, useAppSelector } from "hooks/useAppStore"
import React from "react"
import { AiOutlineSetting } from "react-icons/ai"
import { setTheme, settingSelector } from "store/reducers/setting"

export default function SettingMenu() {
  const dispatch = useAppDispatch()
  const { theme } = useAppSelector(settingSelector)

  const handleChangeTheme = (theme: any) => dispatch(setTheme(theme))

  return (
    <Menu closeOnSelect={false}>
      <MenuButton>
        <IconButton
          as="div"
          aria-label="setting"
          icon={<AiOutlineSetting size="20px" />}
        />
      </MenuButton>
      <MenuList>
        <MenuOptionGroup
          title="Giao diện"
          type="radio"
          value={theme}
          onChange={handleChangeTheme}
        >
          <MenuItemOption value="light">🌞 Sáng</MenuItemOption>
          <MenuItemOption value="dark">🌜 Tối</MenuItemOption>
        </MenuOptionGroup>
      </MenuList>
    </Menu>
  )
}
