import { View, Text } from 'react-native'
import { useSelector } from 'react-redux'
import React, { PropsWithChildren } from 'react'

import { RootState } from '@root/redux/store'

import { color, fontFamily, size } from '@root/utils/Styles'

type ElementProps = PropsWithChildren<{
    name: string,
    children: any
}>

const Element = ({ name, children }: ElementProps) => {
    const { colors } = useSelector((state: RootState) => state.theme)

    return (
        <View style={{
            position: 'relative',
            borderWidth: 1.5,
            borderStyle: 'solid',
            borderColor: color.blue,
            borderRadius: size.radiusS
        }}>
            <Text style={{
                position: 'absolute',
                top: -12,
                backgroundColor: colors.bg,
                left: 9,
                paddingHorizontal: 5,
                fontFamily: fontFamily.medium,
                color: colors.link,
                textTransform: 'capitalize',
            }}>{name}</Text>
            {children}
        </View>
    )
}

export default Element