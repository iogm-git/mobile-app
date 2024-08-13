import { View } from 'react-native'
import React from 'react';
import { useSelector } from 'react-redux'
import { RootState } from '@root/redux/store'
import { borderDefault, size } from "@root/utils/Styles";

interface BoxFormProps {
    children: React.ReactNode
}

const BoxFormComp = ({ children }: BoxFormProps) => {
    const { theme, colors } = useSelector((state: RootState) => state.theme)

    return (
        <View style={{
            ...borderDefault(theme).borderM,
            rowGap: size.l,
            paddingHorizontal: size.m,
            paddingVertical: size.x,
            backgroundColor: colors.bg
        }}>
            {children}
        </View>
    )
}

export default BoxFormComp