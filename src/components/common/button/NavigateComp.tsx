import { Text, TouchableOpacity } from 'react-native'
import React, { PropsWithChildren } from 'react'
import { colorMap, root, buttonCustom, fontFamily } from '@root/utils/Styles'
import { useNavigation } from '@react-navigation/native';

type LinkProps = PropsWithChildren<{
    text: string;
    type: 'primary' | 'warning' | 'danger' | 'success' | 'text';
    to?: string;
    goBack?: boolean;
}>;


const NavigateComp = ({ text, type, to, goBack = false }: LinkProps) => {
    const navigation = useNavigation()

    return (
        <TouchableOpacity onPress={() => goBack ? navigation.goBack() : navigation.navigate(to)} style={{
            ...buttonCustom.buttonCom,
            backgroundColor: root.bgColor,
            borderColor: root.borderColor,
            borderWidth: 1.5,
        }}>
            <Text style={{
                fontFamily: fontFamily.medium,
                fontSize: root.sizeS,
                color: colorMap[type],
            }}>{text}</Text>
        </TouchableOpacity>
    )
}

export default NavigateComp