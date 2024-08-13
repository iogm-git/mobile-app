import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { DrawerContentScrollView, DrawerContentComponentProps } from '@react-navigation/drawer'

import UserIcon from '@svg/common/@root/user'
import SettingIcon from '@svg/drawer/setting'
import LoginIcon from '@svg/drawer/user/login'
import BallotIcon from '@svg/drawer/user/ballot'
import LogoutIcon from '@svg/drawer/logout'

import { RootState } from '@root/redux/store'

import CustomDrawerItemComp from '../CustomDrawerItemComp'
import { size, textCustom } from '@root/utils/Styles'
import { Text, View } from 'react-native'
import Protected from '@root/utils/Protected'
import { logoutActions } from '@root/redux/user/actions/auth'
import LoadingComp from '@root/components/common/LoadingComp'

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

    useEffect(() => {

    }, [routes, index, currentScreen]);

    return (
        <DrawerContentScrollView {...props} style={{ backgroundColor: colors.bg, padding: size.s }}>
            <Text style={textCustom(theme).textMedium}>User</Text>
            <Text style={textCustom(theme).textLight}>This section organizes the personal data of 2 applications, each of which is connected to the IOGM core ecosystem</Text>
            <View style={{ rowGap: size.xs, marginTop: size.m, borderTopWidth: 1, borderColor: colors.border, paddingTop: size.m }}>
                <CustomDrawerItemComp
                    icon={UserIcon}
                    label='HomeScreen'
                    focused={currentScreen === 'HomeScreen'}
                    onPress={() => {
                        props.navigation.navigate('HomeScreen');
                    }}
                />
                <Protected type='comp-auth'>
                    <CustomDrawerItemComp
                        icon={SettingIcon}
                        label='Setting'
                        focused={currentScreen === 'Setting'}
                        onPress={() => {
                            props.navigation.navigate('Member', { screen: 'Setting' });
                        }}
                    />
                    <CustomDrawerItemComp
                        icon={BallotIcon}
                        label='Ballot'
                        focused={currentScreen === 'Ballot'}
                        onPress={() => {
                            props.navigation.navigate('Member', { screen: 'Ballot' });
                        }}
                    />
                    {loading ? <LoadingComp type='primary' /> :
                        <CustomDrawerItemComp
                            icon={LogoutIcon}
                            label='Logout'
                            focused={false}
                            onPress={() => dispatch(logoutActions.init())}
                        />}
                </Protected>
            </View>
            <Protected type='comp-guest'>
                <View style={{ rowGap: size.xs, marginTop: size.m, borderTopWidth: 1, borderColor: colors.border, paddingTop: size.m }}>
                    <Text style={textCustom(theme).textLight}>Auth</Text>
                    <CustomDrawerItemComp
                        icon={LoginIcon}
                        label='Login'
                        focused={currentScreen === 'Login'}
                        onPress={() => {
                            props.navigation.navigate('Auth', { screen: 'Login' });
                        }}
                    />
                </View>
            </Protected>
        </DrawerContentScrollView>
    )
}

export default DrawerContentComp
