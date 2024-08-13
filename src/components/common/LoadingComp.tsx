import { useSelector } from 'react-redux';
import { ActivityIndicator } from 'react-native'
import React, { PropsWithChildren } from 'react'

import { colorMap } from '@root/utils/Styles';

import { RootState } from '@root/redux/store';

type BadgeProps = PropsWithChildren<{
    type: 'primary' | 'warning' | 'danger' | 'success';
}>;

const LoadingComp = ({ type }: BadgeProps) => {
    const { theme } = useSelector((state: RootState) => state.theme)

    return (
        <ActivityIndicator size="large" color={colorMap(theme)[type]} />
    )
}

export default LoadingComp