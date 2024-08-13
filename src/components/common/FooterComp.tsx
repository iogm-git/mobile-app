import React from 'react'
import { useSelector } from 'react-redux'
import { NavigationProp, useNavigation } from '@react-navigation/native'
import { View, Text, TouchableOpacity, ViewStyle } from 'react-native'

import { flexCustom, fontFamily, size, textCustom } from '@root/utils/Styles'

import LocationIcon from '@svg/common/@root/footer/location'

import UserIcon from '@svg/common/@root/user'
import ShopIcon from '@svg/common/@root/shop'
import CodeIcon from '@svg/common/@root/code'

import GithubIcon from '@svg/common/@root/footer/github'
import WhatsappIcon from '@svg/common/@root/footer/whatsapp'
import EmailIcon from '@svg/common/@root/footer/email'
import InstagramIcon from '@svg/common/@root/footer/instagram'

import { RootStackParamList } from '@root/utils/Navigation'

import { RootState } from '@root/redux/store'

const FooterComp = () => {
    const navigation = useNavigation<NavigationProp<RootStackParamList>>()
    const { theme, colors } = useSelector((state: RootState) => state.theme)

    return (
        <View style={{
            ...flexCustom.flexRowStart as ViewStyle,
            gap: size.xxxx,
            paddingVertical: size.xxx,
            borderTopWidth: 1,
            borderTopColor: colors.border,
            marginTop: size.xxxx * 3
        }}>
            <View style={{
                rowGap: size.xs
            }}>
                <Text style={textCustom(theme).textMedium}>IOGM</Text>
                <View style={flexCustom.flexRowStart as ViewStyle}>
                    <LocationIcon width={size.x} height={size.x} />
                    <Text style={{
                        fontFamily: fontFamily.regular,
                        color: colors.text,
                        fontSize: size.s
                    }}>Senen, Jakarta Pusat</Text>
                </View>
                <Text style={{
                    fontFamily: fontFamily.regular,
                    color: colors.text,
                    fontSize: size.s
                }}>copyright © Ilham Rahmat Akbar 2024</Text>
            </View>
            <View style={{
                rowGap: size.xs,
            }}>
                <Text style={textCustom(theme).textMedium}>App</Text>
                <View style={flexCustom.flexRowStart as ViewStyle}>
                    <TouchableOpacity onPress={() => navigation.navigate('HomeScreen')} style={{
                        padding: size.s,
                        rowGap: 2,
                        backgroundColor: colors.thirdBg,
                        borderRadius: size.radiusS
                    }}>
                        <View style={flexCustom.flexRowStart as ViewStyle}>
                            <UserIcon width={size.l} height={size.l} fill={colors.text} />
                            <Text style={{
                                fontFamily: fontFamily.regular,
                                color: colors.text,
                                fontSize: size.s
                            }}>IOGM - User</Text>
                        </View>
                        <Text style={{
                            fontFamily: fontFamily.regular,
                            fontSize: size.s,
                            color: colors.link
                        }}>User data settings</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('ShopHomeScreen')} style={{
                        padding: size.s,
                        rowGap: 2,
                        backgroundColor: colors.thirdBg,
                        borderRadius: size.radiusS
                    }}>
                        <View style={flexCustom.flexRowStart as ViewStyle}>
                            <ShopIcon width={size.l} height={size.l} fill={colors.text} />
                            <Text style={{
                                fontFamily: fontFamily.regular,
                                color: colors.text,
                                fontSize: size.s
                            }}>IOGM - Shop</Text>
                        </View>
                        <Text style={{
                            fontFamily: fontFamily.regular,
                            color: colors.link,
                            fontSize: size.s
                        }}>Sells UI templates</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('CodeHomeScreen')} style={{
                        padding: size.s,
                        rowGap: 2,
                        backgroundColor: colors.thirdBg,
                        borderRadius: size.radiusS
                    }}>
                        <View style={flexCustom.flexRowStart as ViewStyle}>
                            <CodeIcon width={size.l} height={size.l} fill={colors.text} />
                            <Text style={{
                                fontFamily: fontFamily.regular,
                                color: colors.text,
                                fontSize: size.s
                            }}>IOGM - Code</Text>
                        </View>
                        <Text style={{
                            fontFamily: fontFamily.regular,
                            color: colors.link,
                            fontSize: size.s
                        }}>Learn to code</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={{
                rowGap: size.xs,
            }}>
                <Text style={textCustom(theme).textMedium}>Socials</Text>
                <View style={{
                    ...flexCustom.flexRowStart as ViewStyle,
                    width: 200
                }}>
                    <GithubIcon width={size.x} height={size.x} fill={colors.text} />
                    <EmailIcon width={size.x} height={size.x} />
                    <InstagramIcon width={size.x} height={size.x} />
                    <WhatsappIcon width={size.x} height={size.x} />
                </View>
            </View>
        </View>
    )
}

export default FooterComp

