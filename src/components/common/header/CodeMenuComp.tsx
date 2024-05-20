import React, { PropsWithChildren } from 'react';
import { Text, View } from 'react-native';
import { flexCustom, root } from '@root/utils/Styles';
import { useNavigation } from '@react-navigation/native';

type CodeMenuProps = PropsWithChildren<{
    openNavigation: () => void;
}>

const CodeMenuComp = ({ openNavigation }: CodeMenuProps) => {
    const navigation = useNavigation()

    return (
        <View style={flexCustom.flexRowStart}>
            <Text onPress={() => navigation.navigate('code-guest-HomeScreen')}>Code</Text>
            <Text onPress={() => navigation.navigate('code-guest-Courses')}>Courses</Text>
            <Text onPress={() => navigation.navigate('code-guest-Certificates')}>Certificates</Text>
            <Text onPress={openNavigation}>Menu</Text>
        </View>
    );
};

export default CodeMenuComp;