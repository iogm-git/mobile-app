import React, { PropsWithChildren, useState } from 'react';
import Element from './Element';
import { Text, TouchableOpacity, View } from 'react-native';
import { root, textCustom, borderDefault, flexCustom } from '@root/utils/Styles';
import ArrowRightIcon from '@svg/common/@root/arrow-right';

type InputSelectProps = PropsWithChildren<{
    name: string;
    defaultValue?: string;
    option: any;
    handleInputOnChange: (value: string) => void;
}>;

const InputSelectComp = ({ name = '', defaultValue = '- Choise Option -', option, handleInputOnChange }: InputSelectProps) => {
    const [show, setShow] = useState(false);
    const [value, setValue] = useState(defaultValue)

    return (
        <Element name={name}>
            <View style={{
                padding: root.sizeX / 2,
                rowGap: root.sizeS
            }}>
                <TouchableOpacity onPress={() => setShow(prev => !prev)} style={{
                    ...borderDefault.borderS,
                    ...flexCustom.flexRowBetween,
                    padding: root.sizeX / 2
                }}>
                    <Text style={{
                        ...textCustom.textRegular,
                        color: show ? root.blueColor : root.linkColor
                    }}>{value}</Text>
                    <ArrowRightIcon width={root.sizeM} height={root.sizeM} fill={show ? root.blueColor : root.linkColor} rotation={show ? 90 : 0} />
                </TouchableOpacity>
                {show && option &&
                    option.map((item, index) => (
                        <Text onPress={() => {
                            setShow(false)

                            handleInputOnChange(item)

                            setValue(item)
                        }} key={index} style={{
                            ...borderDefault.borderS,
                            ...textCustom.textRegular,
                            padding: root.sizeX / 2
                        }}>{item}</Text>
                    ))
                }
            </View>
        </Element>
    );
};

export default InputSelectComp;
