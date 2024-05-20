import { root } from '@root/utils/Styles';
import HeaderComp from '@root/components/common/header/HeaderComp';
import UserMenuComp from '@root/components/common/header/UserMenuComp';
import React from 'react'
import { ScrollView, View } from 'react-native'
import FooterComp from '@root/components/common/FooterComp';

interface LayoutsProps {
    children: React.ReactNode;
}

const Layouts = ({ children }: LayoutsProps) => {
    return (
        <View style={{
            backgroundColor: root.bgColor,
            flex: 1
        }}>
            <HeaderComp>
                <UserMenuComp />
            </HeaderComp>
            <ScrollView style={{ paddingHorizontal: root.sizeM }}>
                <View style={{
                    flex: 1,
                    paddingVertical: root.sizeL,
                    rowGap: root.sizeXx,
                }}>
                    {children}
                </View>
                <FooterComp />
            </ScrollView>
        </View>
    )
}

export default Layouts