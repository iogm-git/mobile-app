import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'

import { flexCustom, root, textCustom } from '@root/utils/Styles';

import UserIcon from '@svg/common/@root/user'
import ShopIcon from '@svg/common/@root/shop'
import CodeIcon from '@svg/common/@root/code'
import WelcomeSvg from '@svg/common/user/welcome'

import Layouts from '../Layouts';

import LinkComp from '@root/components/common/button/NavigateComp';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
    const navigation = useNavigation()

    return (
        <Layouts>
            <View>
                <WelcomeSvg height={253} />
            </View>
            <View>
                <Text style={textCustom.textBold}>Welcome to IOGM</Text>
                <Text style={textCustom.textRegular}>There are 3 parts of the application</Text>
            </View>
            <TouchableOpacity onPress={() => navigation.navigate('user-guest-HomeScreen')} style={[styles.boxApp, { backgroundColor: root.transblueColor }]}>
                <View style={{ alignItems: 'center' }}>
                    <UserIcon fill={root.blueColor} height={30} width={30} />
                    <Text style={[textCustom.textRegular, { color: root.blueColor }]}>User</Text>
                </View>
                <Text style={[textCustom.textRegular, { flex: 1 }]}>An application created to allow users to save and manage all user profile settings from various applications connected to the IOGM ecosystem.</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('shop-guest-HomeScreen')} style={[styles.boxApp, { backgroundColor: root.transgreenColor }]}>
                <View style={{ alignItems: 'center' }}>
                    <ShopIcon fill={root.greenColor} height={30} width={30} />
                    <Text style={[textCustom.textRegular, { color: root.greenColor }]}>Shop</Text>
                </View>
                <Text style={[textCustom.textRegular, { flex: 1 }]}>Provide creative and practical solutions for novice programmers who need web display templates</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('code-guest-HomeScreen')} style={[styles.boxApp, { backgroundColor: root.transorangeColor }]}>
                <View style={{ alignItems: 'center' }}>
                    <CodeIcon fill={root.orangeColor} height={30} width={30} />
                    <Text style={[textCustom.textRegular, { color: root.orangeColor }]}>Code</Text>
                </View>
                <Text style={[textCustom.textRegular, { flex: 1 }]}>Members can access a variety of learning materials, interactive resources, and practical challenges to improve their understanding of various programming languages.</Text>
            </TouchableOpacity>
            <View style={{ rowGap: root.sizeM }}>
                <Text style={{
                    fontFamily: 'Poppins-Medium',
                    fontSize: root.sizeM + 1,
                    color: root.textColor,
                }}>Come join as a member and get other benefits</Text>
                <LinkComp text='Login Now!' type='primary' to='Login' />
            </View>
        </Layouts>
    );
}

const styles = StyleSheet.create({
    boxApp: {
        ...flexCustom.flexRowCenter,
        borderRadius: root.radiusM,
        padding: root.sizeM,
    }
})

export default HomeScreen
