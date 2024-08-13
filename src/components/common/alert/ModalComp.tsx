import { useSelector } from 'react-redux';
import React, { PropsWithChildren } from 'react'
import { View, Modal, TouchableOpacity, ScrollView, Text, ViewStyle } from 'react-native'

import CloseIcon from '@svg/common/@root/close'

import { size, borderDefault, flexCustom, textCustom, transColorMap, color } from '@root/utils/Styles';

import { RootState } from '@root/redux/store';

type ModalProps = PropsWithChildren<{
    title: string;
    children: any;
    onClose: () => void;
}>

const ModalComp = ({ title = 'Title', children, onClose }: ModalProps) => {
    const { theme, colors } = useSelector((state: RootState) => state.theme)

    const hancleClose = () => {
        onClose()
    }

    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={true}
        >
            <View style={{
                flex: 1,
                backgroundColor: transColorMap(theme).text,
                justifyContent: 'center',
                padding: size.m,

            }}>
                <View style={{
                    ...borderDefault(theme).borderS as ViewStyle,
                    backgroundColor: colors.bg,
                    padding: size.m,
                    rowGap: size.m
                }}>
                    <View style={(flexCustom.flexRowBetween as ViewStyle)}>
                        <Text style={[textCustom(theme).textBold, { flex: 11 }]}>{title}</Text>
                        <TouchableOpacity onPress={hancleClose} style={{
                            width: 27,
                            height: 27,
                            alignItems: 'center',
                            justifyContent: 'center',
                            borderRadius: 99,
                            borderColor: color.red,
                            borderWidth: 1.5,
                            flex: 1
                        }}>
                            <CloseIcon width={9} height={9} fill={color.red} />
                        </TouchableOpacity>
                    </View>
                    <ScrollView style={{
                        maxHeight: 450
                    }}>
                        {children}
                    </ScrollView>
                    <View style={{
                        alignSelf: 'center',
                        height: 'auto'
                    }}>
                        <Text style={textCustom(theme).textLight}>IOGM 2024</Text>
                    </View>
                </View>
            </View>
        </Modal>
    );
}

export default ModalComp

