import React from 'react';
import { useSelector } from 'react-redux';
import { StyleSheet, View, Text, ViewStyle } from 'react-native'

import Layouts from '../Layouts';

import { color, flexCustom, size, textCustom } from '@root/utils/Styles';

import UserIcon from '@svg/common/@root/user'
import ShopIcon from '@svg/common/@root/shop'
import CodeIcon from '@svg/common/@root/code'

import WelcomeSvg from '@svg/common/user/welcome'

import NavigateComp from '@root/components/common/button/NavigateComp';

import { RootState } from '@root/redux/store';

const HomeScreen = () => {
    const { theme, colors } = useSelector((state: RootState) => state.theme)

    const { data: member } = useSelector((state: RootState) => state.user.meData)

    const styles = StyleSheet.create({
        boxApp: {
            borderRadius: size.radiusS,
            padding: size.m,
        },
        boxNav: {
            flexDirection: 'column',
            alignItems: 'center',
            padding: size.xs,
            borderRadius: size.radiusS,
            flex: 1
        }
    })

    return (
        <Layouts>
            <View style={{ rowGap: size.m }}>
                <WelcomeSvg width={200} height={250} />

                <Text style={textCustom(theme).textBold}>Welcome to IOGM</Text>

                <Text style={textCustom(theme).textRegular}>Which consists of 3 applications, each of which is connected to the IOGM core ecosystem.</Text>

                <View style={flexCustom.flexRowBetween as ViewStyle}>
                    <View style={[styles.boxNav, { backgroundColor: color.transBlue }]}>
                        <UserIcon fill={color.blue} height={30} width={30} />
                        <Text style={[textCustom(theme).textRegular, { color: color.blue }]}>User</Text>
                    </View>
                    <View style={[styles.boxNav, { backgroundColor: color.transGreen }]}>
                        <ShopIcon fill={color.green} height={30} width={30} />
                        <Text style={[textCustom(theme).textRegular, { color: color.green }]}>Shop</Text>
                    </View>
                    <View style={[styles.boxNav, { backgroundColor: color.transOrange }]}>
                        <CodeIcon fill={color.orange} height={30} width={30} />
                        <Text style={[textCustom(theme).textRegular, { color: color.orange }]}>Code</Text>
                    </View>
                </View>

                <View style={[styles.boxApp, { backgroundColor: color.transBlue }]}>
                    <Text style={[textCustom(theme).textMedium, { color: color.blue }]}>User</Text>
                    <Text style={[textCustom(theme).textRegular, { color: color.blue }]}>An application created to allow users to save and manage all user profile settings from various applications connected to the IOGM ecosystem.</Text>
                </View>
                <View style={[styles.boxApp, { backgroundColor: color.transGreen }]}>
                    <Text style={[textCustom(theme).textMedium, { color: color.green }]}>Shop</Text>
                    <Text style={[textCustom(theme).textRegular, { color: color.green }]}>Provide creative and practical solutions for novice programmers who need web display templates</Text>
                </View>
                <View style={[styles.boxApp, { backgroundColor: color.transOrange }]}>
                    <Text style={[textCustom(theme).textMedium, { color: color.orange }]}>Code</Text>
                    <Text style={[textCustom(theme).textRegular, { color: color.orange }]}>Members can access a variety of learning materials, interactive resources, and practical challenges to improve their understanding of various programming languages.</Text>
                </View>

                {!member &&
                    <View style={{ rowGap: size.m }}>
                        <Text style={{
                            fontFamily: 'Poppins-Medium',
                            fontSize: size.m + 1,
                            color: colors.text,
                        }}>Come join as a member and get other benefits</Text>
                        <NavigateComp text='Login Now!' type='primary' to='user-guest-Login' />
                    </View>
                }
            </View>
        </Layouts>
    );
}

export default HomeScreen
