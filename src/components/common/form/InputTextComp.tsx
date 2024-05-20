import React, { useState } from 'react';
import { TextInput, Text, TouchableOpacity } from 'react-native';
import { root, textCustom } from '@root/utils/Styles';
import Element from './Element';

type InputTextProps = {
    name: string;
    defaultValue?: string;
    type?: 'decimal' | 'email' | 'numeric' | 'text' | 'password' | 'disabled';
    handleInputOnChange?: (value: string) => void;
};

const InputTextComp = ({ type = 'text', name = '', defaultValue = '', handleInputOnChange }: InputTextProps) => {
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <Element name={name}>
            <TextInput
                autoComplete='off'
                defaultValue={defaultValue}
                keyboardType={type === 'numeric' ? 'numeric' : 'default'}
                onChangeText={handleInputOnChange}
                readOnly={type === 'disabled'}
                secureTextEntry={!showPassword && type === 'password'}
                style={{
                    ...textCustom.textRegular,
                    paddingHorizontal: root.sizeS,
                }} />
            {type === 'password' && (
                <TouchableOpacity
                    style={{
                        position: 'absolute',
                        top: 0,
                        right: 0,
                        bottom: 0,
                        justifyContent: 'center',
                        paddingHorizontal: root.sizeS
                    }}
                    onPress={togglePasswordVisibility}
                >
                    <Text style={textCustom.textLight}>{showPassword ? 'Hide' : 'Show'}</Text>
                </TouchableOpacity>)
            }
        </Element>
    );
};

export default InputTextComp;