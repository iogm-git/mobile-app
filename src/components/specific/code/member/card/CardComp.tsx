import { View, Text, ViewStyle } from 'react-native'
import { useSelector } from 'react-redux'
import React, { PropsWithChildren, ReactNode } from 'react'

import { borderDefault, flexCustom, size, textCustom } from '@root/utils/Styles'
import { RootState } from '@root/redux/store'

type CardProps = PropsWithChildren<{
    children: ReactNode,
    order?: number,
    additional?: ReactNode
}>

const CardComp = ({ children, order, additional }: CardProps) => {
    const { theme, colors } = useSelector((state: RootState) => state.theme)

    return (
        <View style={[borderDefault(theme).borderS, { backgroundColor: colors.secondBg, rowGap: size.s, padding: size.s }]}>
            {order &&
                <View style={flexCustom.flexRowBetween as ViewStyle}>
                    <View style={[borderDefault(theme).borderS, {
                        width: 29,
                        height: 29,
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: colors.bg
                    }]}>
                        <Text style={textCustom(theme).textLight}>{order}</Text>
                    </View>
                    {additional}
                </View>
            }
            {children}
        </View>
    )
}

export default CardComp