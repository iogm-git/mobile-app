import { View, Text } from 'react-native'
import React, { PropsWithChildren } from 'react'
import { fontFamily, root } from '@root/utils/Styles'

type ElementProps = PropsWithChildren<{
    name: string,
    children: any
}>

const Element = ({ name, children }: ElementProps) => {
    return (
        <View style={{
            position: 'relative',
            borderWidth: 1.5,
            borderStyle: 'solid',
            borderColor: root.blueColor,
            borderRadius: root.radiusS
        }}>
            <Text style={{
                position: 'absolute',
                top: -12,
                backgroundColor: root.bgColor,
                left: 9,
                paddingHorizontal: 5,
                fontFamily: fontFamily.medium,
                color: root.linkColor,
                textTransform: 'capitalize',
            }}>{name}</Text>
            {children}
        </View>
    )
}

export default Element