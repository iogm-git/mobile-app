import { useSelector } from 'react-redux';
import React, { useState } from 'react';
import { TextInput, Text, TouchableOpacity } from 'react-native';

import { fontCustom, size, textCustom } from '@root/utils/Styles';

import Element from './Element';

import { RootState } from '@root/redux/store';

type InputTextProps = {
    name: string;
    defaultValue?: string;
    type?: 'decimal' | 'email' | 'numeric' | 'text' | 'password' | 'disabled';
    handleInputOnChange?: (value: string) => void;
};

const InputTextComp = ({ type = 'text', name = '', defaultValue = '', handleInputOnChange }: InputTextProps) => {
    const [showPassword, setShowPassword] = useState(false);
    const { theme, colors } = useSelector((state: RootState) => state.theme)

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <Element name={name}>
            <TextInput
                autoComplete='off'
                value={defaultValue}
                defaultValue={defaultValue}
                keyboardType={type === 'numeric' ? 'numeric' : 'default'}
                onChangeText={handleInputOnChange}
                readOnly={type === 'disabled'}
                secureTextEntry={!showPassword && type === 'password'}
                style={[type === 'disabled' ? fontCustom(theme).fontLight : fontCustom(theme).fontRegular, {
                    paddingHorizontal: size.s,
                    fontSize: size.m,
                    color: type === 'disabled' ? colors.link : colors.text
                }]} />
            {type === 'password' && (
                <TouchableOpacity
                    style={{
                        position: 'absolute',
                        top: 0,
                        right: 0,
                        bottom: 0,
                        justifyContent: 'center',
                        paddingHorizontal: size.s
                    }}
                    onPress={togglePasswordVisibility}
                >
                    <Text style={textCustom(theme).textLight}>{showPassword ? 'Hide' : 'Show'}</Text>
                </TouchableOpacity>)
            }
        </Element>
    );
};

export default InputTextComp;