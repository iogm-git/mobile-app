import { RootState } from '@root/redux/store';
import { useSelector } from 'react-redux';
import { View, Text, TouchableOpacity, ViewStyle } from 'react-native'
import React, { PropsWithChildren, useState } from 'react'

import { borderDefault, color, flexCustom, fontCustom, size, textCustom } from '@root/utils/Styles';

import ClickIcon from '@svg/common/code/click'
import CheckShieldIcon from '@svg/common/code/check-shield'

type AccordionProps = PropsWithChildren<{
  title: string;
  content: string;
}>

const AccordionComp = ({ title, content }: AccordionProps) => {
  const [extend, setExtend] = useState(false)
  const { theme, colors } = useSelector((state: RootState) => state.theme)

  return (
    <View style={{
      ...borderDefault(theme).borderS,
      backgroundColor: colors.secondBg,
      paddingHorizontal: size.s,
      paddingVertical: size.xxs,
      rowGap: size.s
    }}>
      <TouchableOpacity onPress={() => setExtend(!extend)} style={flexCustom.flexRowBetween as ViewStyle}>
        <View style={flexCustom.flexRowStart as ViewStyle}>
          <CheckShieldIcon fill={color.blue} width={size.l} height={size.l} />
          <Text style={{
            ...fontCustom(theme).fontMedium,
            fontSize: size.m,
          }}>
            {title}
          </Text>
        </View>
        <View style={{
          ...borderDefault(theme).borderS,
          padding: size.xxs / 2,
        }}>
          <ClickIcon fill={colors.link} width={size.m} height={size.m} />
        </View>
      </TouchableOpacity>
      {extend &&
        <TouchableOpacity onPress={() => setExtend(!extend)}>
          <Text style={textCustom(theme).textLight}>{content}</Text>
        </TouchableOpacity>
      }
    </View>
  )
}

export default AccordionComp