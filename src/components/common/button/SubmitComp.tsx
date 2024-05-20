import { Text, TouchableOpacity } from 'react-native'
import React, { PropsWithChildren } from 'react'
import { colorMap, root, buttonCustom, fontFamily } from '@root/utils/Styles'

type SubmitProps = PropsWithChildren<{
    text: string;
    type: 'primary' | 'warning' | 'danger' | 'success';
    handleSubmitOnPress: () => void;
}>;

const SubmitComp = ({ text, type, handleSubmitOnPress }: SubmitProps) => {

    return (
        <TouchableOpacity onPress={handleSubmitOnPress} style={{
            ...buttonCustom.buttonCom,
            backgroundColor: colorMap[type],
        }}>
            <Text style={{
                fontFamily: fontFamily.medium,
                fontSize: root.sizeM,
                color: root.bgColor,
            }}>{text}</Text>
        </TouchableOpacity>
    )
}

export default SubmitComp