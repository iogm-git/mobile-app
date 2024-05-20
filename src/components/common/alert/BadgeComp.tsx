import { View, Text } from 'react-native'
import React, { PropsWithChildren } from 'react'
import { colorMap, fontFamily, root, transColorMap } from '@root/utils/Styles';

type BadgeProps = PropsWithChildren<{
    text: string;
    type: 'primary' | 'warning' | 'danger' | 'success';
}>;

const BadgeComp = ({ text, type }: BadgeProps) => {

    return (
        <View style={{
            backgroundColor: transColorMap[type],
            paddingVertical: root.sizeXxs / 2,
            paddingHorizontal: root.sizeXx,
            borderRadius: root.radiusS
        }}>
            <Text style={{
                fontFamily: fontFamily.light,
                fontSize: root.sizeM,
                color: colorMap[type]
            }}>{text}</Text>
        </View>
    )
}

export default BadgeComp