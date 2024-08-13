import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigation } from '@react-navigation/native'
import { View, StyleSheet, Text, TouchableOpacity, Alert, ViewStyle } from 'react-native'

import { borderDefault, buttonCustom, color, size, textCustom } from '@root/utils/Styles'

import Layouts from '@root/views/user/Layouts'

import { RootState } from '@root/redux/store'

import ShopIcon from '@svg/common/@root/shop'
import CodeIcon from '@svg/common/@root/code'

import NavigateComp from '@root/components/common/button/NavigateComp'

const Ballot = () => {
    const { theme, colors } = useSelector((state: RootState) => state.theme)

    const navigation = useNavigation()

    const hasRegister = (role: string) => {
        Alert.alert(
            'Status Account',
            `U has been Register as ${role}`,
            [
                { text: 'Ok' }
            ]
        )
    }

    const notVerifyEmail = () => {
        Alert.alert(
            'Status Account',
            'U need verifiy email',
            [
                { text: 'Go Verify Email', onPress: () => navigation.goBack() },
                { text: 'Ok' }
            ]
        )
    }

    const { data: member } = useSelector((state: RootState) => state.user.meData)

    const styles = StyleSheet.create({
        boxBallot: {
            backgroundColor: colors.secondBg,
            paddingTop: size.xxxx,
            paddingHorizontal: size.m,
            paddingBottom: size.m,
            rowGap: size.m,
        },
        boxIcon: {
            ...borderDefault(theme).borderS,
            backgroundColor: colors.bg,
            padding: size.m,
            alignSelf: 'center',
            alignItems: 'center',
            rowGap: size.s,
        }
    })

    return (
        <Layouts>
            <View style={{ rowGap: size.l }}>
                <View>
                    <Text style={textCustom(theme).textBold}>Hello {member && member.name},</Text>
                    <Text style={textCustom(theme).textRegular}>Please choose to visit.</Text>
                </View>
                <View style={[styles.boxBallot, borderDefault(theme).borderS]}>
                    <View style={styles.boxIcon}>
                        <ShopIcon fill={colors.text} height={30} width={30} />
                        <Text style={textCustom(theme).textMedium}>Shop</Text>
                    </View>
                    <View style={{ alignSelf: 'center' }}>
                        <NavigateComp text='Visit' type='primary' to='Shop' isNested nested={{ screen: 'ShopHomeScreen' }} />
                    </View>
                </View>
                <View style={[styles.boxBallot, borderDefault(theme).borderS]}>
                    <View style={styles.boxIcon}>
                        <CodeIcon fill={colors.text} height={30} width={30} />
                        <Text style={textCustom(theme).textMedium}>Code</Text>
                    </View>
                    <View style={{ alignSelf: 'center' }}>
                        {member && member.email !== null ? !('status' in member) ?
                            <TouchableOpacity onPress={() => hasRegister(member.role)} style={[buttonCustom(theme).buttonCom as ViewStyle, {
                                backgroundColor: colors.bg,
                                borderColor: colors.border,
                                borderWidth: 1.5,
                            }]}>
                                <Text style={[textCustom(theme).textRegular, {
                                    color: color.red
                                }]}>Register</Text>
                            </TouchableOpacity> :
                            <NavigateComp text='Register' type='primary' to='CodeRegister' />
                            : <TouchableOpacity onPress={notVerifyEmail} style={[buttonCustom(theme).buttonCom as ViewStyle, {
                                backgroundColor: colors.bg,
                                borderColor: colors.border,
                                borderWidth: 1.5,
                            }]}>
                                <Text style={[textCustom(theme).textRegular, {
                                    color: color.red
                                }]}>Register</Text>
                            </TouchableOpacity>
                        }
                    </View>
                </View>
            </View>
        </Layouts>
    )
}

export default Ballot