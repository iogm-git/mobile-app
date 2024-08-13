import HeaderComp from '@root/components/common/header/HeaderComp';
import React from 'react'
import { ScrollView, View } from 'react-native'
import FooterComp from '@root/components/common/FooterComp';
import { size } from '@root/utils/Styles';
import { useSelector } from 'react-redux';
import { RootState } from '@root/redux/store';
import { DrawerActions, useNavigation } from '@react-navigation/native';

interface LayoutsProps {
    children: React.ReactNode;
}

const Layouts = ({ children }: LayoutsProps) => {
    const { colors } = useSelector((state: RootState) => state.theme)
    const navigation = useNavigation()

    return (
        <View style={{ flex: 1, backgroundColor: colors.bg }}>
            <HeaderComp onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())} />
            <ScrollView style={{ paddingHorizontal: size.m, backgroundColor: colors.bg, }}>
                <View style={{
                    flex: 1,
                    paddingVertical: size.l,
                    rowGap: size.m * 5,
                }}>
                    {children}
                </View>
                <FooterComp />
            </ScrollView>
        </View>
    )
}

export default Layouts