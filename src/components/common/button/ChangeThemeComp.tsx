import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { useDispatch, useSelector } from 'react-redux'

import DarkIcon from '@svg/common/@root/dark'
import LightIcon from '@svg/common/@root/light'

import { RootState } from '@root/redux/store'
import { borderDefault, color, flexCustom, size, textCustom } from '@root/utils/Styles'
import { toggleTheme } from '@root/redux/theme'
import { Text, View, ViewStyle } from 'react-native'

const ChangeThemeComp = () => {
  const dispatch = useDispatch()
  const { theme, colors } = useSelector((state: RootState) => state.theme)

  return (
    <View style={[flexCustom.flexRowStart as ViewStyle, borderDefault(theme).borderS, {
      borderColor: color.blue,
      padding: size.s
    }]}>
      <Text style={textCustom(theme).textRegular}>Mode : </Text>
      <TouchableOpacity style={[borderDefault(theme).borderX, {
        rowGap: 2,
        alignItems: 'center',
        justifyContent: 'center',
        width: size.xxx * 2,
        height: size.xxx * 2,
        borderColor: theme === 'light' ? color.blue : colors.border
      }]} onPress={() => dispatch(toggleTheme('light'))}>
        <LightIcon width={size.l} height={size.l} fill={theme === 'light' ? color.blue : colors.link} />
        <Text style={[textCustom(theme).textLight, { color: theme === 'light' ? color.blue : colors.link }]}>Light</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[borderDefault(theme).borderX, {
        rowGap: 2,
        alignItems: 'center',
        justifyContent: 'center',
        width: size.xxx * 2,
        height: size.xxx * 2,
        borderColor: theme === 'dark' ? color.blue : colors.border
      }]} onPress={() => dispatch(toggleTheme('dark'))}>
        <DarkIcon width={size.l} height={size.l} fill={theme === 'dark' ? color.blue : colors.link} />
        <Text style={[textCustom(theme).textLight, { color: theme === 'dark' ? color.blue : colors.link }]}>Dark</Text>
      </TouchableOpacity>
    </View>
  )
}

export default ChangeThemeComp