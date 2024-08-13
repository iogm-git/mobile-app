import { useSelector } from 'react-redux';
import { TextInput, View, ViewStyle } from 'react-native';
import React, { useState, useRef, PropsWithChildren } from 'react';
import { borderDefault, flexCustom, fontCustom, size } from '@root/utils/Styles';

import Element from './Element';

import { RootState } from '@root/redux/store';

type InputTokenProps = PropsWithChildren<{
    name: string;
    length: number;
    handleInputOnChange: (value: string) => void;
}>

const InputTokenComp = ({ name = '', length, handleInputOnChange }: InputTokenProps) => {
    const { theme } = useSelector((state: RootState) => state.theme)

    const [token, setToken] = useState<string[]>(Array(length).fill(''));
    const inputRefs = Array(length).fill(null).map(() => useRef<TextInput>(null));

    const handleInputChange = (value: string, index: number) => {
        const newToken = [...token];
        newToken[index] = value;
        setToken(newToken);

        if (value === '' && index > 0) {
            inputRefs[index - 1].current?.focus();
        } else {
            if (value !== '' && index < length - 1) {
                inputRefs[index + 1].current?.focus();
            }
        }

        // if (index === length - 1) {
        //     if (newToken.every((digit) => digit !== '')) {
        handleInputOnChange(newToken.join(''));
        //     }
        // }
    };

    return (
        <Element name={name}>
            <View style={{
                ...flexCustom.flexRowCenter as ViewStyle,
                marginVertical: size.s
            }}>
                {token.map((digit, index) => (
                    <TextInput
                        key={index}
                        style={{
                            ...borderDefault(theme).borderS,
                            ...fontCustom(theme).fontMedium,
                            width: 50,
                            textAlign: 'center',
                            fontSize: size.s,
                        }}
                        defaultValue={digit}
                        onChangeText={(value) => handleInputChange(value, index)}
                        ref={inputRefs[index]}
                        maxLength={1}
                        keyboardType="numeric"
                    />
                ))}
            </View>
        </Element>
    );
};

export default InputTokenComp;
