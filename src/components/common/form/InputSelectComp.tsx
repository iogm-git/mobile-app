import { useSelector } from 'react-redux';
import { Text, TouchableOpacity, View, ViewStyle } from 'react-native';
import React, { PropsWithChildren, useState } from 'react';

import { size, textCustom, borderDefault, flexCustom, color } from '@root/utils/Styles';

import ArrowRightIcon from '@svg/common/@root/arrow-right';

import Element from './Element';

import { RootState } from '@root/redux/store';

type InputSelectProps = PropsWithChildren<{
    name: string;
    defaultValue?: string;
    option: any;
    handleInputOnChange: (value: string) => void;
}>;

const InputSelectComp = ({ name = '', defaultValue = '- Choise Option -', option, handleInputOnChange }: InputSelectProps) => {
    const [show, setShow] = useState(false);
    const [value, setValue] = useState(defaultValue)
    const { theme, colors } = useSelector((state: RootState) => state.theme)

    return (
        <Element name={name}>
            <View style={{
                padding: size.x / 2,
                rowGap: size.s
            }}>
                <TouchableOpacity onPress={() => setShow(prev => !prev)} style={{
                    ...borderDefault(theme).borderS as ViewStyle,
                    ...flexCustom.flexRowBetween as ViewStyle,
                    padding: size.x / 2
                }}>
                    <Text style={{
                        ...textCustom(theme).textRegular,
                        color: show ? color.blue : colors.link,
                        textTransform: 'capitalize'
                    }}>{value}</Text>
                    <ArrowRightIcon width={size.m} height={size.m} fill={show ? color.blue : colors.link} rotation={show ? 90 : 0} />
                </TouchableOpacity>
                {show && option &&
                    option.map((value: any, index: number) => (
                        <TouchableOpacity onPress={() => {
                            setShow(false)

                            handleInputOnChange(value)

                            setValue(value)
                        }} key={index} style={borderDefault(theme).borderS as ViewStyle}>
                            <Text style={{
                                ...textCustom(theme).textRegular,
                                padding: size.x / 2,
                                textTransform: 'capitalize'
                            }}>{value}</Text>
                        </TouchableOpacity>
                    ))
                }
            </View>
        </Element>
    );
};

export default InputSelectComp;
