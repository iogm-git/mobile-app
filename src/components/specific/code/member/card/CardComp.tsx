import { View, Text } from 'react-native'
import React, { PropsWithChildren } from 'react'
import { borderDefault, flexCustom, root, textCustom } from '@root/utils/Styles'

type CardProps = PropsWithChildren<{
    children: React.ReactNode,
    order?: number,
    additional?: React.ReactNode
}>

const CardComp = ({ children, order, additional }: CardProps) => {
    return (
        <View style={[borderDefault.borderS, { rowGap: root.sizeS, padding: root.sizeS }]}>
            {order &&
                <View style={flexCustom.flexRowBetween}>
                    <View style={[borderDefault.borderS, {
                        width: 29,
                        height: 29,
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: root.secondBgColor
                    }]}>
                        <Text style={textCustom.textLight}>{order}</Text>
                    </View>
                    {additional}
                </View>
            }
            {children}
        </View>
    )
}

export default CardComp