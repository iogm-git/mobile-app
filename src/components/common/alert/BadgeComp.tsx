import { useDispatch, useSelector } from 'react-redux';
import React, { PropsWithChildren } from 'react'
import { View, Text, TouchableOpacity, ViewStyle } from 'react-native'

import { colorMap, flexCustom, fontFamily, size, transColorMap } from '@root/utils/Styles';

import CloseIcon from '@svg/common/@root/close.svg'

import { RootState } from '@root/redux/store';

type BadgeProps = PropsWithChildren<{
    text: string;
    type: 'primary' | 'warning' | 'danger' | 'success';
    onClose?: any;
}>;

const BadgeComp = ({ text, type, onClose }: BadgeProps) => {
    const dispatch = useDispatch()
    const { theme } = useSelector((state: RootState) => state.theme)

    return (
        <View style={{
            ...flexCustom.flexRowBetween as ViewStyle,
            backgroundColor: transColorMap(theme)[type],
            paddingVertical: size.xxs,
            paddingHorizontal: size.m,
            borderRadius: size.radiusS,
            flexWrap: 'nowrap',
        }}>
            <Text style={{
                textTransform: 'capitalize',
                fontFamily: fontFamily.regular,
                fontSize: size.s,
                color: colorMap(theme)[type],
                flex: 11
            }}>{text}</Text>
            {onClose && <TouchableOpacity onPress={() => dispatch(onClose)} style={{
                backgroundColor: transColorMap(theme)[type],
                width: size.l,
                height: size.l,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                borderWidth: 1,
                borderColor: colorMap(theme)[type],
                borderRadius: 3,
                flex: 1
            }}>
                <CloseIcon width={size.xxs} height={size.xxs} fill={colorMap(theme)[type]} />
            </TouchableOpacity>}
        </View>
    )
}

export default BadgeComp