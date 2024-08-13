import { useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import React, { PropsWithChildren } from 'react'
import { Text, TouchableOpacity, ViewStyle } from 'react-native'

import { colorMap, buttonCustom, textCustom, size } from '@root/utils/Styles'

import { RootState } from '@root/redux/store';

type NestedParams = {
    screen?: string;
    params?: {
        screen?: string,
        params?: {
            data?: any
        }
    };
};

type LinkProps = PropsWithChildren<{
    text: string;
    type: 'primary' | 'warning' | 'danger' | 'success' | 'text';
    to?: string;
    goBack?: boolean;
    isNested?: boolean;
    nested?: NestedParams;
    onPress?: () => void;
}>;

const NavigateComp = ({ text, type, to, goBack = false, isNested = false, nested, onPress }: LinkProps) => {
    const navigation = useNavigation()

    const { theme, colors } = useSelector((state: RootState) => state.theme)

    return (
        <TouchableOpacity
            onPress={() => {
                if (goBack) {
                    navigation.goBack();
                } else {
                    if (to) {
                        if (isNested && nested) {
                            navigation.navigate(to, nested);
                        } else {
                            navigation.navigate(to);
                        }
                    }
                }
                onPress && onPress()
            }}
            style={{
                ...buttonCustom(theme).buttonCom as ViewStyle,
                backgroundColor: colors.bg,
                borderColor: colors.border,
                borderWidth: 1.5,
            }}>
            <Text style={{
                ...textCustom(theme).textMedium,
                fontSize: size.s,
                color: colorMap(theme)[type],
            }}>{text}</Text>
        </TouchableOpacity>
    )
}

export default NavigateComp