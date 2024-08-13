import React from 'react'
import { useSelector } from 'react-redux'
import { View, Text, TouchableOpacity, ViewStyle } from 'react-native'

import { _getPageFromUrl } from '@root/utils/Helper'
import { flexCustom, borderDefault, fontCustom, size, color } from '@root/utils/Styles'

import { RootState } from '@root/redux/store'

type PaginationData = {
    url: string
    label: string
    active: boolean
}

type PaginationProps = {
    data: PaginationData[]
    page?: number
    onPageChange: (value: string) => void
}

const PaginationComp = ({ data, page, onPageChange }: PaginationProps) => {
    const { theme, colors } = useSelector((state: RootState) => state.theme)

    return (
        data && data.length > 3 &&
        <View style={{
            ...flexCustom.flexRowCenter as ViewStyle,
            paddingTop: size.m,
            borderTopColor: colors.border,
            borderTopWidth: 1
        }}>
            {data.map((value: PaginationData, index: number) => (
                <TouchableOpacity key={index} style={{
                    ...borderDefault(theme).borderS as ViewStyle,
                    borderColor: (page ? (parseInt(value.label) === page) : value.active) ? color.blue : colors.border,
                    backgroundColor: (page ? (parseInt(value.label) === page) : value.active) ? color.blue : colors.bg,
                    width: 35,
                    height: 35,
                    justifyContent: 'center',
                    alignItems: 'center'
                }} onPress={() => value.url !== null && onPageChange(_getPageFromUrl(value.url))}>
                    <Text style={{
                        ...fontCustom(theme).fontMedium as ViewStyle,
                        color: (page ? (parseInt(value.label) === page) : value.active) ? (theme === 'dark' ? colors.text : colors.bg) : colors.text,
                        fontSize: size.m,
                    }}>{value.label.includes('la') ? '<' : value.label.includes('ra') ? '>' : value.label}</Text>
                </TouchableOpacity>
            ))}
        </View>
    )
}

export default PaginationComp