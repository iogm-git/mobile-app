import DatePicker from 'react-native-date-picker'
import { useSelector } from 'react-redux';
import React, { PropsWithChildren, useState } from 'react'
import { Text, TouchableOpacity, View, ViewStyle } from 'react-native'

import { borderDefault, textCustom, flexCustom, size, color } from '@root/utils/Styles'

import Element from './Element'

import DateIcon from '@svg/member/date.svg'

import { RootState } from '@root/redux/store';

type InputDateProps = PropsWithChildren<{
    name: string,
    defaultValue?: string,
    handleInputOnChange: (value: string) => void;
}>

const InputDateComp = ({ name = '', defaultValue = '- Choise Date -', handleInputOnChange }: InputDateProps) => {
    const [date, setDate] = useState(defaultValue)
    const [open, setOpen] = useState(false)

    const { theme, colors } = useSelector((state: RootState) => state.theme)

    return (
        <Element name={name}>
            <View style={{
                padding: size.x / 2,
                rowGap: size.s
            }}>
                <TouchableOpacity onPress={() => setOpen(prev => !prev)} style={{
                    ...borderDefault(theme).borderS as ViewStyle,
                    ...flexCustom.flexRowBetween as ViewStyle,
                    padding: size.x / 2
                }}>
                    <Text style={{
                        ...textCustom(theme).textRegular,
                        color: open ? color.blue : colors.link
                    }}>{date}</Text>
                    <DateIcon width={size.m} height={size.m} fill={open ? color.blue : colors.link} />
                </TouchableOpacity>
                <DatePicker
                    modal
                    open={open}
                    date={new Date()}
                    maximumDate={new Date()}
                    minimumDate={new Date('1950-01-01')}
                    mode='date'
                    onConfirm={(date) => {
                        setOpen(false)

                        const day = date.getDate().toString().padStart(2, '0');
                        const month = (date.getMonth() + 1).toString().padStart(2, '0');
                        const year = date.getFullYear();

                        setDate(`${day}/${month}/${year}`)
                        handleInputOnChange(`${day}/${month}/${year}`)
                    }}
                    onCancel={() => {
                        setOpen(false)
                    }}
                    buttonColor={color.blue}
                />
            </View>

        </Element>
    )
}

export default InputDateComp