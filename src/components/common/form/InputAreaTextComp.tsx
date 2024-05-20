import React from 'react';
import { TextInput } from 'react-native';
import { root, textCustom } from '@root/utils/Styles';
import Element from './Element';

type InputAreaTextProps = {
    name: string;
    defaultValue: string;
    type?: 'decimal' | 'email' | 'numeric' | 'text' | 'password';
    handleInputOnChange: (value: string) => void;
};

const InputAreaTextComp = ({ type = 'password', name = '', defaultValue = '', handleInputOnChange }: InputAreaTextProps) => {

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
                    ...textCustom.textRegular,
                    paddingHorizontal: root.sizeS,
                }} />
        </Element>
    );
};

export default InputAreaTextComp;