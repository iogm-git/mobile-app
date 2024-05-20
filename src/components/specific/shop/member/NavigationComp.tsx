import { View, TouchableOpacity, StyleSheet, Text } from 'react-native'
import React from 'react'

import DownloadIcon from '@svg/member/shop/navigation/download'
import LogoutIcon from '@svg/member/shop/navigation/logout'
import ProfileIcon from '@svg/member/shop/navigation/profile'
import PurchasesIcon from '@svg/member/shop/navigation/purchases'
import SettingIcon from '@svg/member/shop/navigation/setting'
import StashesIcon from '@svg/member/shop/navigation/stashes'
import TransactionsIcon from '@svg/member/shop/navigation/transactions'

import { flexCustom, fontCustom, root } from '@root/utils/Styles'
import { useNavigation } from '@react-navigation/native'

const NavigationComp = () => {
    const navigation = useNavigation()

    return (
        <View style={{
            borderTopWidth: 1,
            borderTopColor: root.borderColor,
            paddingVertical: root.sizeM,
        }}>
            <View style={flexCustom.flexRowStart}>
                <TouchableOpacity onPress={() => navigation.navigate('shop-member-Profile')} style={styles.button}>
                    <ProfileIcon width={23} height={23} fill={root.textColor} />
                    <Text style={styles.text}>Profile</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('shop-member-Stashes')} style={styles.button}>
                    <StashesIcon width={23} height={23} fill={root.textColor} />
                    <Text style={styles.text}>Stashes</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('shop-member-Transactions')} style={styles.button}>
                    <TransactionsIcon width={23} height={23} fill={root.textColor} />
                    <Text style={styles.text}>Transactions</Text>
                </TouchableOpacity>
            </View>
            <View style={flexCustom.flexRowStart}>
                <TouchableOpacity onPress={() => navigation.navigate('user-member-Setting')} style={styles.button}>
                    <SettingIcon width={23} height={23} fill={root.textColor} />
                    <Text style={styles.text}>Setting</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('shop-member-Download')} style={styles.button}>
                    <DownloadIcon width={23} height={23} fill={root.textColor} />
                    <Text style={styles.text}>Download</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('shop-member-Purchases')} style={styles.button}>
                    <PurchasesIcon width={23} height={23} fill={root.textColor} />
                    <Text style={styles.text}>Purchases</Text>
                </TouchableOpacity>
            </View>
            <View style={flexCustom.flexRowStart}>
                <TouchableOpacity style={styles.button}>
                    <LogoutIcon width={23} height={23} fill={root.textColor} />
                    <Text style={styles.text}>Logout</Text>
                </TouchableOpacity>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    button: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: root.sizeXxs,
    },
    text: {
        ...fontCustom.fontMedium,
        fontSize: root.sizeM,
    }
})

export default NavigationComp