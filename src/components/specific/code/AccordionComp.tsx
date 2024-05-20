import { View, Text, TouchableOpacity } from 'react-native'
import React, { PropsWithChildren, useState } from 'react'
import { root, borderDefault, flexCustom, fontCustom, textCustom } from '@root/utils/Styles';

import CheckShieldIcon from '@svg/common/code/check-shield'
import ClickIcon from '@svg/common/code/click'

type AccordionProps = PropsWithChildren<{
  title: string;
  content: string;
}>

const AccordionComp = ({ title, content }: AccordionProps) => {
  const [extend, setExtend] = useState(false)

  return (
    <View style={{
      ...borderDefault.borderS,
      backgroundColor: root.secondBgColor,
      padding: root.sizeS,
      rowGap: root.sizeS
    }}>
      <TouchableOpacity onPress={() => setExtend(!extend)} style={flexCustom.flexRowBetween}>
        <View style={flexCustom.flexRowStart}>
          <CheckShieldIcon fill={root.blueColor} width={root.sizeXx} height={root.sizeXx} />
          <Text style={{
            ...fontCustom.fontMedium,
            fontSize: root.sizeM,
          }}>
            {title}
          </Text>
        </View>
        <View style={{
          ...borderDefault.borderS,
          padding: root.sizeXxs,
        }}>
          <ClickIcon fill={root.linkColor} width={root.sizeL} height={root.sizeL} />
        </View>
      </TouchableOpacity>
      {extend &&
        <Text style={textCustom.textRegular}>{content}</Text>
      }
    </View>
  )
}

export default AccordionComp