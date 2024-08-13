import { useSelector } from 'react-redux';
import React, { PropsWithChildren } from 'react'
import { Text, TouchableOpacity, ViewStyle } from 'react-native'

import { RootState } from '@root/redux/store';

import { colorMap, buttonCustom, textCustom, size, color } from '@root/utils/Styles'

type SubmitProps = PropsWithChildren<{
    text: string;
    type: 'primary' | 'warning' | 'danger' | 'success';
    onPress: () => void;
}>;

const SubmitComp = ({ text, type, onPress }: SubmitProps) => {
    const { theme, colors } = useSelector((state: RootState) => state.theme)

    return (
        <TouchableOpacity onPress={onPress} style={{
            ...buttonCustom(theme).buttonCom as ViewStyle,
            backgroundColor: colorMap(theme)[type],
        }}>
            <Text style={{
                ...textCustom(theme).textMedium,
                fontSize: size.m,
                color: theme === 'dark' ? colors.text : colors.bg
            }}>{text}</Text>
        </TouchableOpacity>
    )
}

export default SubmitComp