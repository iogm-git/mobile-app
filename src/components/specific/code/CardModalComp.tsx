import React, { PropsWithChildren, ReactNode } from 'react'
import ModalComp from '@root/components/common/alert/ModalComp'
import { ScrollView } from 'react-native-gesture-handler';
import RenderHTML from 'react-native-render-html';
import { View } from 'react-native';
import { size } from '@root/utils/Styles';

type CardModalProps = PropsWithChildren<{
    children: ReactNode;
    title: string;
    onPress: () => void;
    description: string;
}>

const CardModalComp = ({ children, title, onPress, description }: CardModalProps) => {
    return (
        <ModalComp title={title} onClose={onPress}>
            <View style={{ rowGap: size.s }}>
                {children}
                <ScrollView>
                    <RenderHTML contentWidth={200} source={{ html: description }} />
                </ScrollView>
            </View>
        </ModalComp>
    )
}

export default CardModalComp