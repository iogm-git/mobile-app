import React from 'react'
import { Text, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { DrawerContentScrollView, DrawerContentComponentProps } from '@react-navigation/drawer'

import LogoutIcon from '@svg/drawer/logout'

import ShopIcon from '@svg/common/@root/shop'
import DownloadIcon from '@svg/drawer/shop/download'
import ProfileIcon from '@svg/drawer/shop/profile'
import PurchasesIcon from '@svg/drawer/shop/purchases'
import SettingIcon from '@svg/drawer/setting'
import StashesIcon from '@svg/drawer/shop/stashes'
import TransactionsIcon from '@svg/drawer/shop/transactions'

import LoginIcon from '@svg/drawer/user/login'

import { RootState } from '@root/redux/store'

import Protected from '@root/utils/Protected'
import { size, textCustom } from '@root/utils/Styles'

import { logoutActions } from '@root/redux/user/actions/auth'

import LoadingComp from '@root/components/common/LoadingComp'
import CustomDrawerItemComp from '../CustomDrawerItemComp'

type RouteParams = {
    screen?: string;
    [key: string]: any;
};

const DrawerContentComp: React.FC<DrawerContentComponentProps> = (props) => {
    const { theme, colors } = useSelector((state: RootState) => state.theme)
    const { routes, index } = props.state
    const currentScreen = routes[index]?.params ? (routes[index].params as RouteParams).screen : routes[index].name;

    const dispatch = useDispatch()
    const { loading } = useSelector((state: RootState) => state.user.logoutResult)

    return (
        <DrawerContentScrollView {...props} style={{ backgroundColor: colors.bg, padding: size.s }}>
            <Text style={textCustom(theme).textMedium}>Shop</Text>
            <Text style={textCustom(theme).textLight}>Provides various kinds of website UI templates</Text>
            <View style={{ rowGap: size.xs, marginTop: size.m, borderTopWidth: 1, borderColor: colors.border, paddingTop: size.m, paddingBottom: 50 }}>
                <CustomDrawerItemComp icon={ShopIcon} label='HomeScreen' focused={currentScreen === 'ShopHomeScreen'}
                    onPress={() => {
                        props.navigation.navigate('ShopHomeScreen');
                    }} />
                <Protected type='comp-auth'>
                    <CustomDrawerItemComp icon={ProfileIcon} label='Profile' focused={currentScreen === 'Profile'}
                        onPress={() => {
                            props.navigation.navigate('Member', { screen: 'Profile' });
                        }} />
                    <CustomDrawerItemComp icon={StashesIcon} label='Stashes' focused={currentScreen === 'Stashes'}
                        onPress={() => {
                            props.navigation.navigate('Member', { screen: 'Stashes' });
                        }} />
                    <CustomDrawerItemComp icon={TransactionsIcon} label='Transactions' focused={currentScreen === 'Transactions'}
                        onPress={() => {
                            props.navigation.navigate('Member', { screen: 'Transactions' });
                        }} />
                    <CustomDrawerItemComp icon={SettingIcon} label='Setting' focused={currentScreen === 'Setting'}
                        onPress={() => {
                            props.navigation.navigate('User', { screen: 'Member', params: { screen: 'Setting' } });
                        }} />
                    <CustomDrawerItemComp icon={DownloadIcon} label='Download' focused={currentScreen === 'Download'}
                        onPress={() => {
                            props.navigation.navigate('Member', { screen: 'Download' });
                        }} />
                    <CustomDrawerItemComp icon={PurchasesIcon} label='Purchases' focused={currentScreen === 'Index'}
                        onPress={() => {
                            props.navigation.navigate('Member', { screen: 'Purchases', params: { screen: 'Index' } });
                        }} />
                    {loading ? <LoadingComp type='primary' /> :
                        <CustomDrawerItemComp
                            icon={LogoutIcon}
                            label='Logout'
                            focused={false}
                            onPress={() => dispatch(logoutActions.init())}
                        />}
                </Protected>
                <Protected type='comp-guest'>
                    <CustomDrawerItemComp icon={LoginIcon} label='Login' focused={false}
                        onPress={() => {
                            props.navigation.navigate('User', { screen: 'Auth', params: { screen: 'Login' } });
                        }} />
                </Protected>
            </View>

        </DrawerContentScrollView>
    )
}

export default DrawerContentComp
