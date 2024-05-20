import { borderDefault, flexCustom, fontCustom, root } from '@root/utils/Styles';
import React, { useState, useRef, PropsWithChildren } from 'react';
import { TextInput, View, StyleSheet } from 'react-native';
import Element from './Element';

type InputTokenProps = PropsWithChildren<{
    name: string;
    length: number;
    handleInputOnChange: (value: string[]) => void;
}>

const InputTokenComp = ({ name = '', length, handleInputOnChange }: InputTokenProps) => {
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

        if (index === length - 1) {
            if (newToken.every((digit) => digit !== '')) {
                handleInputOnChange(newToken);
            }
        }
    };

    return (
        <Element name={name}>
            <View style={styles.box}>
                {token.map((digit, index) => (
                    <TextInput
                        key={index}
                        style={styles.input}
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

const styles = StyleSheet.create({
    box: {
        ...flexCustom.flexRowCenter,
        marginVertical: root.sizeS
    },
    input: {
        ...borderDefault.borderS,
        ...fontCustom.fontMedium,
        width: 50,
        textAlign: 'center',
        fontSize: root.sizeS,
    },
});

export default InputTokenComp;
