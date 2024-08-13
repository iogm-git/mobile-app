import React from 'react';
import { TextInput } from 'react-native';
import { useSelector } from 'react-redux';

import { size, textCustom } from '@root/utils/Styles';

import Element from './Element';

import { RootState } from '@root/redux/store';

type InputAreaTextProps = {
    name: string;
    defaultValue: string;
    type?: 'decimal' | 'email' | 'numeric' | 'text' | 'password';
    handleInputOnChange: (value: string) => void;
};

const InputAreaTextComp = ({ type = 'password', name = '', defaultValue = '', handleInputOnChange }: InputAreaTextProps) => {
    const { theme } = useSelector((state: RootState) => state.theme)

    return (
        <Element name={name}>
            <TextInput
                autoComplete='off'
                defaultValue={defaultValue}
                keyboardType={type === 'numeric' ? 'numeric' : 'default'}
                multiline={true}
                numberOfLines={4}
                onChangeText={handleInputOnChange}
                style={{
                    ...textCustom(theme).textRegular,
                    paddingHorizontal: size.s,
                }} />
        </Element>
    );
};

export default InputAreaTextComp;