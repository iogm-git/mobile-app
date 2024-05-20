import { View, Modal, TouchableOpacity, ScrollView, Text } from 'react-native'
import React, { PropsWithChildren } from 'react'
import { root, borderDefault, flexCustom, textCustom } from '@root/utils/Styles';
import CloseIcon from '@svg/common/@root/close'

type ModalProps = PropsWithChildren<{
    title: string;
    children: any;
    onClose: () => void;
}>


const ModalComp = ({ title = 'Title', children, onClose }: ModalProps) => {

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
                backgroundColor: root.transtextColor,
                justifyContent: 'center',
                padding: root.sizeM,

            }}>
                <View style={{
                    ...borderDefault.borderS,
                    backgroundColor: root.bgColor,
                    padding: root.sizeM,
                    rowGap: root.sizeM
                }}>
                    <View style={flexCustom.flexRowBetween}>
                        <Text style={textCustom.textBold}>{title}</Text>
                        <TouchableOpacity onPress={hancleClose} style={{
                            width: 31,
                            height: 31,
                            alignItems: 'center',
                            justifyContent: 'center',
                            borderRadius: 99,
                            borderColor: root.redColor,
                            borderWidth: 2,
                        }}>
                            <CloseIcon width={13} height={13} fill={root.redColor} />
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
                        <Text style={textCustom.textLight}>IOGM 2024</Text>
                    </View>
                </View>
            </View>
        </Modal>
    );
}

export default ModalComp

