import { useSelector } from 'react-redux'
import { View, Text } from 'react-native'
import React, { PropsWithChildren } from 'react'

import { borderDefault, fontCustom, size } from '@root/utils/Styles'
import { RootState } from '@root/redux/store'

type ElementProps = PropsWithChildren<{
    keyword: string,
    value: string | number
}>

const ElementComp = ({ keyword, value }: ElementProps) => {
    const { theme, colors } = useSelector((state: RootState) => state.theme)

    return (
        <View style={[borderDefault(theme).borderS, { backgroundColor: colors.bg, rowGap: 1, padding: size.xxs }]}>
            <Text style={[fontCustom(theme).fontLight, { minWidth: 90, textTransform: 'capitalize', fontSize: size.xs }]}>{keyword}</Text>
            <Text style={[fontCustom(theme).fontRegular, { fontSize: size.s }]}>{value}</Text>
        </View>
    )
}

export default ElementComp