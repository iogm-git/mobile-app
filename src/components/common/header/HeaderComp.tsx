import React, { PropsWithChildren } from 'react';
import { SvgUri } from 'react-native-svg';
import { useSelector } from 'react-redux';
import { Text, View, ViewStyle } from 'react-native';

import { flexCustom, size, textCustom } from '@root/utils/Styles';

import { RootState } from '@root/redux/store';
import { TouchableOpacity } from 'react-native-gesture-handler';

type HeaderProps = PropsWithChildren<{
    onPress: () => void
}>

const HeaderComp = ({ onPress }: HeaderProps) => {
    const { theme, colors } = useSelector((state: RootState) => state.theme)

    return (
        <View style={{
            ...flexCustom.flexRowBetween as ViewStyle,
            backgroundColor: colors.bg,
            paddingHorizontal: size.m,
            paddingVertical: size.s
        }}>
            <SvgUri uri={`https:/iogm.biz.id${theme === 'dark' ? '/logo-white.svg' : '/logo.svg'}`} style={{
                maxHeight: 19,
                maxWidth: 19,
            }} />
            <TouchableOpacity onPress={onPress}>
                <Text style={textCustom(theme).textLight}>Menu</Text>
            </TouchableOpacity>
        </View >
    )
}

export default HeaderComp;
