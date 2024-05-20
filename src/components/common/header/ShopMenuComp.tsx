import React, { PropsWithChildren } from 'react';
import { Text, View } from 'react-native';
import { flexCustom, root } from '@root/utils/Styles';
import { useNavigation } from '@react-navigation/native';

type ShopMenuProps = PropsWithChildren<{
    openNavigation: () => void;
}>

const ShopMenuComp = ({ openNavigation }: ShopMenuProps) => {
    const navigation = useNavigation()

    return (
        <View style={flexCustom.flexRowStart}>
            <Text onPress={() => navigation.navigate('shop-guest-HomeScreen')}>Shop</Text>
            <Text onPress={() => navigation.navigate('user-guest-Login')}>Login</Text>
            <Text onPress={() => navigation.navigate('user-guest-Register')}>Register</Text>
            <Text onPress={openNavigation}>Menu</Text>
        </View>
    );
};

export default ShopMenuComp;