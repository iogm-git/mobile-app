import React from 'react';
import { Text, View } from 'react-native';
import { flexCustom, root } from '@root/utils/Styles';
import { useNavigation } from '@react-navigation/native';

const UserMenuComp = () => {
    const navigation = useNavigation()

    return (
        <View style={flexCustom.flexRowStart}>
            <Text onPress={() => navigation.navigate('user-guest-HomeScreen')}>Home</Text>
            <Text onPress={() => navigation.navigate('user-guest-Login')}>Login</Text>
            <Text onPress={() => navigation.navigate('user-guest-Register')}>Register</Text>
            <Text onPress={() => navigation.navigate('user-member-Setting')}>Setting</Text>
        </View>
    );
};

export default UserMenuComp;