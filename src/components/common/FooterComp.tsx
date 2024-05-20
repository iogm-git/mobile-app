import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { root, flexCustom, fontFamily, textCustom } from '@root/utils/Styles'

import LocationIcon from '@svg/common/@root/footer/location'

import UserIcon from '@svg/common/@root/user'
import ShopIcon from '@svg/common/@root/shop'
import CodeIcon from '@svg/common/@root/code'

import GithubIcon from '@svg/common/@root/footer/github'
import WhatsappIcon from '@svg/common/@root/footer/whatsapp'
import EmailIcon from '@svg/common/@root/footer/email'
import InstagramIcon from '@svg/common/@root/footer/instagram'

const FooterComp = () => {
    const navigation = useNavigation()

    return (
        <View style={{
            ...flexCustom.flexRowStart,
            gap: root.sizeXxxx,
            paddingVertical: root.sizeXxx,
            borderTopWidth: 1,
            borderTopColor: root.borderColor,
            marginTop: root.sizeXxxx * 3
        }}>
            <View style={{
                rowGap: root.sizeXs
            }}>
                <Text style={textCustom.textMedium}>IOGM</Text>
                <View style={flexCustom.flexRowStart}>
                    <LocationIcon width={root.sizeX} height={root.sizeX} />
                    <Text style={styles.text}>Senen, Jakarta Pusat</Text>
                </View>
                <Text style={styles.text}>copyright © Ilham Rahmat Akbar 2024</Text>
            </View>
            <View style={{
                rowGap: root.sizeXs,
            }}>
                <Text style={textCustom.textMedium}>App</Text>
                <View style={flexCustom.flexRowStart}>
                    <TouchableOpacity onPress={() => navigation.navigate('user-guest-HomeScreen')} style={styles.app}>
                        <View style={flexCustom.flexRowStart}>
                            <UserIcon width={root.sizeL} height={root.sizeL} />
                            <Text style={styles.text}>IOGM - User</Text>
                        </View>
                        <Text style={[styles.text, { color: root.linkColor }]}>User data settings</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('shop-guest-HomeScreen')} style={styles.app}>
                        <View style={flexCustom.flexRowStart}>
                            <ShopIcon width={root.sizeL} height={root.sizeL} />
                            <Text style={styles.text}>IOGM - Shop</Text>
                        </View>
                        <Text style={[styles.text, { color: root.linkColor }]}>Sells UI templates</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('code-guest-HomeScreen')} style={styles.app}>
                        <View style={flexCustom.flexRowStart}>
                            <CodeIcon width={root.sizeL} height={root.sizeL} />
                            <Text style={styles.text}>IOGM - Code</Text>
                        </View>
                        <Text style={[styles.text, { color: root.linkColor }]}>Learn to code</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={{
                rowGap: root.sizeXs,
            }}>
                <Text style={textCustom.textMedium}>Socials</Text>
                <View style={{
                    ...flexCustom.flexRowStart,
                    width: 200
                }}>
                    <GithubIcon width={root.sizeX} height={root.sizeX} />
                    <EmailIcon width={root.sizeX} height={root.sizeX} />
                    <InstagramIcon width={root.sizeX} height={root.sizeX} />
                    <WhatsappIcon width={root.sizeX} height={root.sizeX} />
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    text: {
        fontFamily: fontFamily.regular,
        color: root.textColor,
        fontSize: root.sizeS
    },
    app: {
        padding: root.sizeS,
        rowGap: 2,
        backgroundColor: root.thirdBgColor,
        borderRadius: root.radiusS
    }
})

export default FooterComp

