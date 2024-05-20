import { View, Text } from 'react-native'
import React, { PropsWithChildren } from 'react'
import { flexCustom, root, textCustom } from '@root/utils/Styles'

type ElementProps = PropsWithChildren<{
    keyword: string,
    value: string | number
}>

const ElementComp = ({ keyword, value }: ElementProps) => {
    return (
        <View style={[flexCustom.flexRowStart, { columnGap: root.sizeXs }]}>
            <Text style={[textCustom.textLight, { minWidth: 90, textTransform: 'capitalize' }]}>{keyword}</Text>
            <Text style={textCustom.textRegular}>: {value}</Text>
        </View>
    )
}

export default ElementComp