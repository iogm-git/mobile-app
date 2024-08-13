import { useDispatch, useSelector } from 'react-redux'
import React, { useEffect, useState } from 'react'
import { DrawerContentComponentProps, DrawerContentScrollView } from '@react-navigation/drawer'
import { View, Text } from 'react-native'

import LoginIcon from '@svg/drawer/user/login'

import CodeIcon from '@svg/common/@root/code'

import SettingIcon from '@svg/drawer/setting'
import LogoutIcon from '@svg/drawer/logout'

import ReviewsIcon from '@svg/drawer/code/reviews'
import ProfileIcon from '@svg/drawer/code/profile'
import CoursesIcon from '@svg/drawer/code/courses'
import DiscussionForumsIcon from '@svg/drawer/code/discussion-forums'

import EarningsIcon from '@svg/drawer/code/earnings'
import QuestionsIcon from '@svg/drawer/code/questions'

import StashesIcon from '@svg/drawer/code/stashes'
import AnswersIcon from '@svg/drawer/code/answers'
import CertificatesIcon from '@svg/drawer/code/certificates'
import TransactionsIcon from '@svg/drawer/code/transactions'

import { size, textCustom } from '@root/utils/Styles'

import LoadingComp from '@root/components/common/LoadingComp'
import CustomDrawerItemComp from '../CustomDrawerItemComp'

import { RootState } from '@root/redux/store'
import { logoutActions } from '@root/redux/user/actions/auth'
import Protected from '@root/utils/Protected'

type RouteParams = {
    screen?: string;
    [key: string]: any;
};

const DrawerContentComp: React.FC<DrawerContentComponentProps> = (props) => {
    const { theme, colors } = useSelector((state: RootState) => state.theme)
    const { routes, index } = props.state
    const currentScreen = routes[index]?.params ? (routes[index].params as RouteParams).screen : routes[index].name;

    const dispatch = useDispatch()

    const { data: member } = useSelector((state: RootState) => state.user.meData)
    const { loading } = useSelector((state: RootState) => state.user.logoutResult)
    const [role, setRole] = useState<'Instructor' | 'Student'>('Instructor')

    useEffect(() => {
        if (member) {
            if (member.hasOwnProperty('role')) {
                setRole(member.role.charAt(0).toUpperCase() + member.role.slice(1))
            }
        }
    }, [member])

    return (
        <DrawerContentScrollView {...props} style={{ backgroundColor: colors.bg, padding: size.s }}>
            <Text style={textCustom(theme).textMedium}>Code</Text>
            <Text style={textCustom(theme).textLight}>E Learning</Text>
            <View style={{ rowGap: size.xs, marginTop: size.m, borderTopWidth: 1, borderColor: colors.border, paddingTop: size.m, paddingBottom: 50 }}>
                <CustomDrawerItemComp icon={CodeIcon} label='HomeScreen' focused={currentScreen === 'CodeHomeScreen'}
                    onPress={() => {
                        props.navigation.navigate('CodeHomeScreen');
                    }} />
                <CustomDrawerItemComp icon={CoursesIcon} label='Courses' focused={currentScreen === 'GuestCourses'}
                    onPress={() => {
                        props.navigation.navigate('GuestCourses');
                    }} />
                <CustomDrawerItemComp icon={CertificatesIcon} label='Certificates' focused={currentScreen === 'GuestCertificates'}
                    onPress={() => {
                        props.navigation.navigate('GuestCertificates');
                    }} />
                {member && member.hasOwnProperty('role') ?
                    <View style={{ rowGap: size.xs, marginTop: size.m, borderTopWidth: 1, borderColor: colors.border, paddingTop: size.m }}>
                        <Text style={textCustom(theme).textLight}>My</Text>
                        <CustomDrawerItemComp icon={ProfileIcon} label='Profile' focused={currentScreen === 'Profile'} onPress={() => {
                            props.navigation.navigate('Code', { screen: 'Member', params: { screen: role, params: { screen: 'Profile' } } });
                        }} />
                        <CustomDrawerItemComp icon={CoursesIcon} label='Courses' focused={currentScreen === 'Courses'} onPress={() => {
                            props.navigation.navigate('Code', { screen: 'Member', params: { screen: role, params: { screen: 'Courses' } } });
                        }} />
                        {role === 'Instructor' ?
                            <>
                                <CustomDrawerItemComp icon={QuestionsIcon} label='Questions' focused={currentScreen === 'Questions'} onPress={() => {
                                    props.navigation.navigate('Code', { screen: 'Member', params: { screen: role, params: { screen: 'Questions' } } });
                                }} />
                                <CustomDrawerItemComp icon={ReviewsIcon} label='Reviews' focused={currentScreen === 'Reviews'} onPress={() => {
                                    props.navigation.navigate('Code', { screen: 'Member', params: { screen: role, params: { screen: 'Reviews' } } });
                                }} />
                                <CustomDrawerItemComp icon={EarningsIcon} label='Earnings' focused={currentScreen === 'Earnings'} onPress={() => {
                                    props.navigation.navigate('Code', { screen: 'Member', params: { screen: role, params: { screen: 'Earnings' } } });
                                }} />
                            </>
                            :
                            <>
                                <CustomDrawerItemComp icon={ReviewsIcon} label='Reviews' focused={currentScreen === 'Reviews'} onPress={() => {
                                    props.navigation.navigate('Code', { screen: 'Member', params: { screen: role, params: { screen: 'Reviews' } } });
                                }} />
                                <CustomDrawerItemComp icon={TransactionsIcon} label='Transactions' focused={currentScreen === 'Transactions'} onPress={() => {
                                    props.navigation.navigate('Code', { screen: 'Member', params: { screen: role, params: { screen: 'Transactions' } } });
                                }} />
                                <CustomDrawerItemComp icon={AnswersIcon} label='Answers' focused={currentScreen === 'Answers'} onPress={() => {
                                    props.navigation.navigate('Code', { screen: 'Member', params: { screen: role, params: { screen: 'Answers' } } });
                                }} />
                                <CustomDrawerItemComp icon={CertificatesIcon} label='Certificates' focused={currentScreen === 'Certificates'} onPress={() => {
                                    props.navigation.navigate('Code', { screen: 'Member', params: { screen: role, params: { screen: 'Certificates' } } });
                                }} />
                                <CustomDrawerItemComp icon={StashesIcon} label='Stashes' focused={currentScreen === 'Stashes'} onPress={() => {
                                    props.navigation.navigate('Code', { screen: 'Member', params: { screen: role, params: { screen: 'Stashes' } } });
                                }} />
                            </>
                        }
                        <CustomDrawerItemComp icon={DiscussionForumsIcon} label='DiscussionForums' focused={currentScreen === 'DiscussionForums'} onPress={() => {
                            props.navigation.navigate('Code', { screen: 'Member', params: { screen: 'General', params: { screen: 'DiscussionForums' } } });
                        }} />
                        <CustomDrawerItemComp icon={SettingIcon} label='Setting' focused={currentScreen === 'Setting'} onPress={() => {
                            props.navigation.navigate('Code', { screen: 'Member', params: { screen: 'General', params: { screen: 'Setting' } } });
                        }} />
                        {loading ? <LoadingComp type='primary' /> :
                            <CustomDrawerItemComp icon={LogoutIcon} label='Logout' focused={false} onPress={() => dispatch(logoutActions.init())} />}
                    </View> :
                    member && <CustomDrawerItemComp icon={LoginIcon} label='Register' focused={false}
                        onPress={() => {
                            props.navigation.navigate('User', { screen: 'Member', params: { screen: 'CodeRegister' } });
                        }} />
                }
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