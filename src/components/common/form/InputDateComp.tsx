import { Text, TouchableOpacity, View } from 'react-native'
import React, { PropsWithChildren, useState } from 'react'
import DatePicker from 'react-native-date-picker'
import { root, borderDefault, textCustom, flexCustom } from '@root/utils/Styles'
import Element from './Element'
import DateIcon from '@svg/member/date.svg'

type InputDateProps = PropsWithChildren<{
    name: string,
    defaultValue?: string,
    handleInputOnChange: (value: string) => void;
}>

const InputDateComp = ({ name = '', defaultValue = '- Choise Date -', handleInputOnChange }: InputDateProps) => {
    const [date, setDate] = useState(defaultValue)
    const [open, setOpen] = useState(false)

    return (
        <Element name={name}>
            <View style={{
                padding: root.sizeX / 2,
                rowGap: root.sizeS
            }}>
                <TouchableOpacity onPress={() => setOpen(prev => !prev)} style={{
                    ...borderDefault.borderS,
                    ...flexCustom.flexRowBetween,
                    padding: root.sizeX / 2
                }}>
                    <Text style={{
                        ...textCustom.textRegular,
                        color: open ? root.blueColor : root.linkColor
                    }}>{date}</Text>
                    <DateIcon width={root.sizeM} height={root.sizeM} fill={open ? root.blueColor : root.linkColor} />
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
                    buttonColor={root.blueColor}
                />
            </View>

        </Element>
    )
}

export default InputDateComp